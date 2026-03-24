import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { CompletedResearchReport } from "../research/research-executor.js";
import { FULL_REPORT_FILE_NAME, SUMMARY_FILE_NAME } from "../research/research-executor.js";

export type StoredReport = {
  reportId: string;
  jobId: string;
  ticker: string;
  companyName: string;
  summaryPath: string;
  reportPath: string;
  createdAt: string;
};

export function createReportStore(reportRoot: string) {
  return {
    async saveCompletedReport(report: CompletedResearchReport): Promise<StoredReport> {
      const reportDir = join(reportRoot, report.reportId);
      const summaryPath = join(reportDir, SUMMARY_FILE_NAME);
      const reportPath = join(reportDir, FULL_REPORT_FILE_NAME);

      await mkdir(reportDir, { recursive: true });
      await Promise.all([
        writeFile(summaryPath, report.summaryMarkdown, "utf8"),
        writeFile(reportPath, report.fullReportMarkdown, "utf8")
      ]);

      return {
        reportId: report.reportId,
        jobId: report.jobId,
        ticker: report.symbol.ticker,
        companyName: report.symbol.companyName,
        summaryPath,
        reportPath,
        createdAt: report.generatedAt
      };
    }
  };
}
