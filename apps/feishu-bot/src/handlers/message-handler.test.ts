import { describe, expect, it, vi } from "vitest";

import { createMessageHandler } from "./message-handler.js";

describe("createMessageHandler", () => {
  it("sends a quick judge card for a stock message", async () => {
    const client = {
      sendCard: vi.fn(async () => undefined)
    };
    const routeIntent = vi.fn(() => ({
      type: "quick_judge" as const,
      rawSymbolQuery: "腾讯"
    }));
    const symbolResolver = {
      resolve: vi.fn(() => ({
        ticker: "00700.HK",
        companyName: "腾讯控股",
        market: "HK" as const
      }))
    };
    const quickJudgeService = vi.fn(async () => ({
      symbol: {
        ticker: "00700.HK",
        companyName: "腾讯控股",
        market: "HK" as const
      },
      verdict: "值得继续研究" as const,
      valuationTemperature: "中性" as const,
      reasons: ["业务质量清晰", "现金流质量稳定", "估值仍有研究空间"] as [string, string, string],
      risks: ["监管变化", "增长放缓"] as [string, string],
      nextAction: "生成完整深研" as const
    }));
    const handler = createMessageHandler({
      client,
      routeIntent,
      symbolResolver,
      quickJudgeService
    });

    await handler.handle({
      event: {
        message: {
          chat_id: "oc_test_chat",
          content: "{\"text\":\"腾讯值得继续研究吗\"}"
        }
      }
    });

    expect(client.sendCard).toHaveBeenCalledTimes(1);
    expect(symbolResolver.resolve).toHaveBeenCalledWith("腾讯");
    expect(quickJudgeService).toHaveBeenCalledTimes(1);
  });

  it("answers against the latest report for a report follow-up question", async () => {
    const client = {
      sendCard: vi.fn(async () => undefined)
    };
    const routeIntent = vi.fn(() => ({
      type: "report_qa" as const,
      question: "这份报告里最大的风险是什么？"
    }));
    const symbolResolver = {
      resolve: vi.fn(() => null)
    };
    const quickJudgeService = vi.fn(async () => {
      throw new Error("quick judge should not run");
    });
    const getLatestReportId = vi.fn(() => "report_tencent");
    const reportQaService = {
      answer: vi.fn(async () => ({
        reportId: "report_tencent",
        ticker: "00700.HK",
        companyName: "腾讯控股",
        summary: "腾讯属于值得继续研究的互联网龙头。",
        answer: "报告中提到的最大风险是监管风险。"
      }))
    };
    const handler = createMessageHandler({
      client,
      routeIntent,
      symbolResolver,
      quickJudgeService,
      getLatestReportId,
      reportQaService
    });

    await handler.handle({
      event: {
        message: {
          chat_id: "oc_test_chat",
          content: "{\"text\":\"这份报告里最大的风险是什么？\"}"
        }
      }
    });

    expect(reportQaService.answer).toHaveBeenCalledWith({
      reportId: "report_tencent",
      question: "这份报告里最大的风险是什么？"
    });
    expect(symbolResolver.resolve).not.toHaveBeenCalled();
    expect(quickJudgeService).not.toHaveBeenCalled();
    expect(client.sendCard).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(client.sendCard.mock.calls[0]?.[0]?.card)).toContain("监管风险");
  });
});
