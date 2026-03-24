import { buildQuickJudgeCard } from "../cards/quick-judge-card.js";
import type { FeishuClient } from "../feishu/client.js";

type QuickJudgeIntent = {
  type: "quick_judge";
  rawSymbolQuery: string;
};

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
  routeIntent(text: string): QuickJudgeIntent;
  symbolResolver: {
    resolve(query: string): ResolvedSymbol | null;
  };
  quickJudgeService(symbol: ResolvedSymbol): Promise<QuickJudgeResult>;
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
      const text = extractText(event.event.message.content);
      const intent = deps.routeIntent(text);
      const symbol = deps.symbolResolver.resolve(intent.rawSymbolQuery);

      if (!symbol) {
        await deps.client.sendCard({
          chatId: event.event.message.chat_id,
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
        chatId: event.event.message.chat_id,
        card: buildQuickJudgeCard(result)
      });
    }
  };
}
