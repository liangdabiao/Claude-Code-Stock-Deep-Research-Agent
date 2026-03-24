import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { afterEach, describe, expect, it } from "vitest";

import {
  ReplayExecutor,
  createAppDb,
  createJobRepository,
  createJobService,
  createReportStore
} from "@stock-bot/research-core";

import { createJobRunner } from "./job-runner.js";

const tempDirs: string[] = [];

function createTempDir() {
  const dir = mkdtempSync(join(tmpdir(), "research-worker-"));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

const fixturesDir = fileURLToPath(new URL("../../../tests/fixtures/reports", import.meta.url));

describe("createJobRunner", () => {
  it("marks a job completed and stores the report", async () => {
    const db = createAppDb(":memory:");
    const jobRepository = createJobRepository(db);
    const jobService = createJobService({ jobRepository });
    const reportStore = createReportStore(createTempDir());
    const runner = createJobRunner({
      jobRepository,
      reportStore,
      researchExecutor: new ReplayExecutor(fixturesDir)
    });
    const job = await jobService.enqueue({
      ticker: "00700.HK",
      companyName: "腾讯控股",
      market: "HK"
    });

    await runner.runNext();

    const storedJob = jobRepository.findById(job.id);
    const storedReport = jobRepository.findReportByJobId(job.id);

    expect(storedJob?.status).toBe("completed");
    expect(storedReport?.jobId).toBe(job.id);
    expect(storedReport?.summaryPath).toContain("00_Executive_Summary.md");
    expect(storedReport?.reportPath).toContain("08_综合投资报告.md");
    expect(existsSync(storedReport!.summaryPath)).toBe(true);
    expect(existsSync(storedReport!.reportPath)).toBe(true);
  });
});
