import { describe, expect, it } from "vitest";

import { routeIntent } from "./intent-router.js";

describe("routeIntent", () => {
  it("routes a plain stock question to quick_judge", () => {
    expect(routeIntent("腾讯值得继续研究吗")).toEqual({
      type: "quick_judge",
      rawSymbolQuery: "腾讯"
    });
  });

  it("keeps a raw ticker when the user only sends a code", () => {
    expect(routeIntent("00700.HK")).toEqual({
      type: "quick_judge",
      rawSymbolQuery: "00700.HK"
    });
  });

  it("routes a report follow-up question to report_qa", () => {
    expect(routeIntent("这份报告里最大的风险是什么")).toEqual({
      type: "report_qa",
      question: "这份报告里最大的风险是什么"
    });
  });
});
