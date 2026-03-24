import type { QuickJudgeSymbol } from "../quick-judge/types.js";

export const SUMMARY_FILE_NAME = "00_Executive_Summary.md";
export const FULL_REPORT_FILE_NAME = "08_综合投资报告.md";

export type DeepResearchRequest = {
  jobId: string;
  reportId: string;
  symbol: QuickJudgeSymbol;
  replayFixtureId?: string;
};

export type CompletedResearchReport = {
  reportId: string;
  jobId: string;
  symbol: QuickJudgeSymbol;
  summaryMarkdown: string;
  fullReportMarkdown: string;
  generatedAt: string;
};

export interface ResearchExecutor {
  run(request: DeepResearchRequest): Promise<CompletedResearchReport>;
}

export function buildDeepResearchPrompt(request: DeepResearchRequest) {
  return [
    `请对 ${request.symbol.companyName}（${request.symbol.ticker}）生成完整深研。`,
    "复用现有单票深研方法论。",
    `请输出执行摘要到 ${SUMMARY_FILE_NAME}，并输出完整综合投资报告到 ${FULL_REPORT_FILE_NAME}。`
  ].join("\n");
}
