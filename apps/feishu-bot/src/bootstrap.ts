import { createCardActionHandler } from "./handlers/card-action-handler.js";
import { createMessageHandler } from "./handlers/message-handler.js";
import { createPersistentConnection } from "./feishu/persistent-connection.js";

export function createBotApp(deps: {
  client: {
    sendCard(input: { chatId: string; card: unknown }): Promise<void>;
  };
  routeIntent(text: string): { type: "quick_judge"; rawSymbolQuery: string };
  symbolResolver: {
    resolve(query: string): {
      ticker: string;
      companyName: string;
      market: "A" | "HK" | "US";
    } | null;
  };
  quickJudgeService(symbol: {
    ticker: string;
    companyName: string;
    market: "A" | "HK" | "US";
  }): Promise<{
    symbol: {
      ticker: string;
      companyName: string;
      market: "A" | "HK" | "US";
    };
    verdict: "值得继续研究" | "可观察但暂不优先" | "风险较高，暂不建议优先看";
    valuationTemperature: "偏低" | "中性" | "偏高";
    reasons: [string, string, string];
    risks: [string, string];
    nextAction: "生成完整深研";
  }>;
  jobService: {
    enqueue(symbol: {
      ticker: string;
      companyName: string;
      market: "A" | "HK" | "US";
    }): Promise<{ id: string; status: "pending" }>;
  };
}) {
  const messageHandler = createMessageHandler({
    client: deps.client,
    routeIntent: deps.routeIntent,
    symbolResolver: deps.symbolResolver,
    quickJudgeService: deps.quickJudgeService
  });
  const cardActionHandler = createCardActionHandler({
    client: deps.client,
    jobService: deps.jobService
  });
  const connection = createPersistentConnection({
    onMessage: messageHandler.handle,
    onCardAction: cardActionHandler.handle
  });

  return {
    start() {
      return connection.start();
    },
    stop() {
      return connection.stop();
    }
  };
}
