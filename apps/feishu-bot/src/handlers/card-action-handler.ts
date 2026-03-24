import { buildDeepResearchStatusCard } from "../cards/deep-research-status-card.js";
import type { FeishuClient } from "../feishu/client.js";

type DeepResearchSymbol = {
  ticker: string;
  companyName: string;
  market: "A" | "HK" | "US";
};

type CardActionHandlerDeps = {
  jobService: {
    enqueue(symbol: DeepResearchSymbol): Promise<{
      id: string;
      status: "pending";
    }>;
  };
  client: FeishuClient;
};

type CardActionEvent = {
  context: {
    open_chat_id: string;
  };
  action: {
    value: {
      action: string;
      symbol: DeepResearchSymbol;
    };
  };
};

export function createCardActionHandler(deps: CardActionHandlerDeps) {
  return {
    async handle(event: CardActionEvent) {
      if (event.action.value.action !== "create_deep_research") {
        return;
      }

      const symbol = event.action.value.symbol;
      const job = await deps.jobService.enqueue(symbol);

      await deps.client.sendCard({
        chatId: event.context.open_chat_id,
        card: buildDeepResearchStatusCard({
          ticker: symbol.ticker,
          companyName: symbol.companyName,
          jobId: job.id
        })
      });
    }
  };
}
