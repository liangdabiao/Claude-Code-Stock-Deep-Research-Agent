import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { afterEach, describe, expect, it } from "vitest";

import { createReportStore } from "../reports/report-store.js";
import type { CompletedResearchReport } from "../research/research-executor.js";
import { createReportQaService } from "./report-qa-service.js";

const tempDirs: string[] = [];

function createTempDir() {
  const dir = mkdtempSync(join(tmpdir(), "report-qa-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("createReportQaService", () => {
  it("answers using only the stored report context", async () => {
    const reportStore = createReportStore(createTempDir());
    const saved = await reportStore.saveCompletedReport({
      reportId: "report_tencent",
      jobId: "job_001",
      symbol: {
        ticker: "00700.HK",
        companyName: "腾讯控股",
        market: "HK"
      },
      summaryMarkdown: "# 腾讯摘要\n腾讯属于值得继续研究的互联网龙头。",
      fullReportMarkdown: `
# 腾讯综合投资报告

## 风险管理

- 监管风险仍然是当前最重要的风险来源。
- 广告增速放缓会影响利润弹性。

## 结论

腾讯的主要看点仍然是微信生态和游戏业务修复。
      `.trim(),
      generatedAt: "2026-03-24T00:00:00.000Z"
    } satisfies CompletedResearchReport);
    const reportQa = createReportQaService({
      reportLookup: {
        findById(reportId) {
          if (reportId !== saved.reportId) {
            return null;
          }

          return {
            id: saved.reportId,
            ticker: saved.ticker,
            companyName: saved.companyName,
            summaryPath: saved.summaryPath,
            reportPath: saved.reportPath
          };
        }
      }
    });

    const answer = await reportQa.answer({
      reportId: saved.reportId,
      question: "这份报告里最大的风险是什么？"
    });

    expect(answer.summary).toContain("腾讯");
    expect(answer.answer).toContain("风险");
    expect(answer.answer).toContain("监管");
  });
});
