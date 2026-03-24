import { describe, expect, it } from "vitest";

import { createAppDb } from "../storage/db.js";
import { createJobRepository } from "./job-repository.js";
import { createJobService } from "./job-service.js";

describe("createJobService", () => {
  it("enqueues a deep research job with pending status", async () => {
    const db = createAppDb(":memory:");
    const jobRepository = createJobRepository(db);
    const jobService = createJobService({ jobRepository });

    const job = await jobService.enqueue({
      ticker: "00700.HK",
      companyName: "腾讯控股",
      market: "HK"
    });

    expect(job.status).toBe("pending");

    const stored = jobRepository.findById(job.id);

    expect(stored).toMatchObject({
      id: job.id,
      status: "pending",
      payload: {
        jobId: job.id,
        reportId: job.id,
        replayFixtureId: "STOCK_00700_HK_Tencent",
        symbol: {
          ticker: "00700.HK",
          companyName: "腾讯控股",
          market: "HK"
        }
      }
    });
  });
});
