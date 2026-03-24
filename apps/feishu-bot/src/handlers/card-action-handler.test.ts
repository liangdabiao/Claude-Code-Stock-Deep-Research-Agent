import { describe, expect, it, vi } from "vitest";

import { createCardActionHandler } from "./card-action-handler.js";

describe("createCardActionHandler", () => {
  it("creates a deep research job when the card button is clicked", async () => {
    const jobService = {
      enqueue: vi.fn(async () => ({
        id: "job_001",
        status: "pending" as const
      }))
    };
    const client = {
      sendCard: vi.fn(async () => undefined)
    };
    const handler = createCardActionHandler({ jobService, client });

    await handler.handle({
      context: {
        open_chat_id: "oc_test_chat"
      },
      action: {
        value: {
          action: "create_deep_research",
          symbol: {
            ticker: "00700.HK",
            companyName: "腾讯控股",
            market: "HK"
          }
        }
      }
    });

    expect(jobService.enqueue).toHaveBeenCalledTimes(1);
    expect(jobService.enqueue).toHaveBeenCalledWith({
      ticker: "00700.HK",
      companyName: "腾讯控股",
      market: "HK"
    });
    expect(client.sendCard).toHaveBeenCalledTimes(1);
  });
});
