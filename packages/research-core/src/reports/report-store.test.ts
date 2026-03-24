import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import type { CompletedResearchReport } from "../research/research-executor.js";
import { createReportStore } from "./report-store.js";

const tempDirs: string[] = [];

function createTempDir() {
  const dir = mkdtempSync(join(tmpdir(), "report-store-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

const sampleCompletedReport: CompletedResearchReport = {
  reportId: "report_tencent",
  jobId: "job_001",
  symbol: {
    ticker: "00700.HK",
    companyName: "腾讯控股",
    market: "HK"
  },
  summaryMarkdown: "# 腾讯控股执行摘要",
  fullReportMarkdown: "# 腾讯控股综合投资报告",
  generatedAt: "2026-03-24T00:00:00.000Z"
};

describe("createReportStore", () => {
  it("persists a completed report and returns its summary path", async () => {
    const store = createReportStore(createTempDir());

    const saved = await store.saveCompletedReport(sampleCompletedReport);

    expect(saved.summaryPath).toContain("00_Executive_Summary.md");
    expect(saved.reportPath).toContain("08_综合投资报告.md");
    expect(readFileSync(saved.summaryPath, "utf8")).toBe(sampleCompletedReport.summaryMarkdown);
    expect(readFileSync(saved.reportPath, "utf8")).toBe(sampleCompletedReport.fullReportMarkdown);
  });
});
