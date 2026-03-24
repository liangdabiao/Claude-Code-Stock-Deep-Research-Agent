import { readFile } from "node:fs/promises";
import { join } from "node:path";

import {
  FULL_REPORT_FILE_NAME,
  SUMMARY_FILE_NAME,
  type CompletedResearchReport,
  type DeepResearchRequest,
  type ResearchExecutor
} from "./research-executor.js";

export class ReplayExecutor implements ResearchExecutor {
  constructor(private readonly fixturesRoot: string) {}

  async run(request: DeepResearchRequest): Promise<CompletedResearchReport> {
    const fixtureId = request.replayFixtureId ?? request.reportId;
    const fixtureDir = join(this.fixturesRoot, fixtureId);
    const [summaryMarkdown, fullReportMarkdown] = await Promise.all([
      readFile(join(fixtureDir, SUMMARY_FILE_NAME), "utf8"),
      readFile(join(fixtureDir, FULL_REPORT_FILE_NAME), "utf8")
    ]);

    return {
      reportId: request.reportId,
      jobId: request.jobId,
      symbol: request.symbol,
      summaryMarkdown,
      fullReportMarkdown,
      generatedAt: new Date().toISOString()
    };
  }
}
