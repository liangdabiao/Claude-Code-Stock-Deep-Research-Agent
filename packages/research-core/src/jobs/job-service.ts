import { randomUUID } from "node:crypto";

import type { QuickJudgeSymbol } from "../quick-judge/types.js";
import type { DeepResearchRequest } from "../research/research-executor.js";
import type { ResearchJobRecord } from "./job-repository.js";

function deriveReplayFixtureId(symbol: QuickJudgeSymbol) {
  switch (symbol.ticker) {
    case "00700.HK":
      return "STOCK_00700_HK_Tencent";
    default:
      return undefined;
  }
}

export function createJobService(deps: {
  jobRepository: {
    insert(job: ResearchJobRecord): ResearchJobRecord;
  };
}) {
  return {
    async enqueue(symbol: QuickJudgeSymbol): Promise<{ id: string; status: "pending" }> {
      const id = `job_${randomUUID()}`;
      const now = new Date().toISOString();
      const payload: DeepResearchRequest = {
        jobId: id,
        reportId: id,
        symbol,
        replayFixtureId: deriveReplayFixtureId(symbol)
      };

      deps.jobRepository.insert({
        id,
        status: "pending",
        payload,
        createdAt: now,
        updatedAt: now
      });

      return {
        id,
        status: "pending"
      };
    }
  };
}
