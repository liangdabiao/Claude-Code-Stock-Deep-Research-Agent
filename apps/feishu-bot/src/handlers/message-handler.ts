import { buildQuickJudgeCard } from "../cards/quick-judge-card.js";
import { buildReportSummaryCard } from "../cards/report-summary-card.js";
import type { FeishuClient } from "../feishu/client.js";

type QuickJudgeIntent = {
  type: "quick_judge";
  rawSymbolQuery: string;
};

type ReportQaIntent = {
  type: "report_qa";
  question: string;
};

type MessageIntent = QuickJudgeIntent | ReportQaIntent;

type ResolvedSymbol = {
  ticker: string;
  companyName: string;
  market: "A" | "HK" | "US";
};

type QuickJudgeResult = {
  symbol: ResolvedSymbol;
  verdict: "值得继续研究" | "可观察但暂不优先" | "风险较高，暂不建议优先看";
  valuationTemperature: "偏低" | "中性" | "偏高";
  reasons: [string, string, string];
  risks: [string, string];
  nextAction: "生成完整深研";
};

type MessageHandlerDeps = {
  client: FeishuClient;
  routeIntent(text: string): MessageIntent;
  symbolResolver: {
    resolve(query: string): ResolvedSymbol | null;
  };
  quickJudgeService(symbol: ResolvedSymbol): Promise<QuickJudgeResult>;
  getLatestReportId?(chatId: string): string | null;
  reportQaService?: {
    answer(input: {
      reportId: string;
      question: string;
    }): Promise<{
      reportId: string;
      ticker: string;
      companyName: string;
      summary: string;
      answer: string;
    }>;
  };
};

type MessageEvent = {
  event: {
    message: {
      chat_id: string;
      content: string;
    };
  };
};

function extractText(content: string): string {
  const parsed = JSON.parse(content) as { text?: string };
  return parsed.text?.trim() ?? "";
}

export function createMessageHandler(deps: MessageHandlerDeps) {
  return {
    async handle(event: MessageEvent) {
      const chatId = event.event.message.chat_id;
      const text = extractText(event.event.message.content);
      const intent = deps.routeIntent(text);

      if (intent.type === "report_qa") {
        const reportId = deps.getLatestReportId?.(chatId) ?? null;

        if (!reportId || !deps.reportQaService) {
          await deps.client.sendCard({
            chatId,
            card: {
              type: "template",
              data: {
                header: {
                  title: "暂无可追问的已完成报告",
                  subtitle: "请先生成完整深研"
                }
              }
            }
          });
          return;
        }

        const reportAnswer = await deps.reportQaService.answer({
          reportId,
          question: intent.question
        });

        await deps.client.sendCard({
          chatId,
          card: buildReportSummaryCard({
            ticker: reportAnswer.ticker,
            companyName: reportAnswer.companyName,
            summary: reportAnswer.summary,
            question: intent.question,
            answer: reportAnswer.answer
          })
        });
        return;
      }

      const symbol = deps.symbolResolver.resolve(intent.rawSymbolQuery);

      if (!symbol) {
        await deps.client.sendCard({
          chatId,
          card: {
            type: "template",
            data: {
              header: {
                title: "未识别到股票标的",
                subtitle: `原始输入：${intent.rawSymbolQuery}`
              }
            }
          }
        });
        return;
      }

      const result = await deps.quickJudgeService(symbol);
      await deps.client.sendCard({
        chatId,
        card: buildQuickJudgeCard(result)
      });
    }
  };
}
