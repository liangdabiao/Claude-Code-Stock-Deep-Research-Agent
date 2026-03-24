import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it, vi } from "vitest";

import { type DeepResearchRequest } from "./research-executor.js";
import { ClaudeCliExecutor } from "./claude-cli-executor.js";
import { ReplayExecutor } from "./replay-executor.js";

const tempDirs: string[] = [];

function createTempDir() {
  const dir = mkdtempSync(join(tmpdir(), "research-executor-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

const fixturesDir = fileURLToPath(new URL("../../../../tests/fixtures/reports", import.meta.url));

const sampleResearchRequest: DeepResearchRequest = {
  jobId: "job_001",
  reportId: "report_tencent",
  replayFixtureId: "STOCK_00700_HK_Tencent",
  symbol: {
    ticker: "00700.HK",
    companyName: "腾讯控股",
    market: "HK"
  }
};

describe("ReplayExecutor", () => {
  it("loads a canned report from fixtures for demo mode", async () => {
    const executor = new ReplayExecutor(fixturesDir);

    const result = await executor.run(sampleResearchRequest);

    expect(result.summaryMarkdown).toContain("腾讯");
    expect(result.fullReportMarkdown).toContain("综合投资报告");
  });
});

describe("ClaudeCliExecutor", () => {
  it("reads markdown artifacts written by the injected CLI runner", async () => {
    const outputRoot = createTempDir();
    const invoke = vi.fn(async ({ outputDir }: { outputDir: string }) => {
      mkdirSync(outputDir, { recursive: true });
      writeFileSync(join(outputDir, "00_Executive_Summary.md"), "# CLI 生成摘要");
      writeFileSync(join(outputDir, "08_综合投资报告.md"), "# CLI 生成综合投资报告");
    });
    const executor = new ClaudeCliExecutor({
      cliPath: "claude",
      outputRoot,
      invoke
    });

    const result = await executor.run(sampleResearchRequest);

    expect(invoke).toHaveBeenCalledTimes(1);
    expect(invoke).toHaveBeenCalledWith(
      expect.objectContaining({
        cliPath: "claude",
        outputDir: join(outputRoot, sampleResearchRequest.reportId),
        prompt: expect.stringContaining("00700.HK")
      })
    );
    expect(result.summaryMarkdown).toContain("CLI 生成摘要");
    expect(result.fullReportMarkdown).toContain("CLI 生成综合投资报告");
  });
});
