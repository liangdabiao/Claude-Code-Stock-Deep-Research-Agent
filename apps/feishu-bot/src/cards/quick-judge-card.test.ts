import { describe, expect, it } from "vitest";

import { buildQuickJudgeCard } from "./quick-judge-card.js";

describe("buildQuickJudgeCard", () => {
  it("builds a card with the deep research action button", () => {
    const card = buildQuickJudgeCard({
      symbol: {
        ticker: "00700.HK",
        companyName: "腾讯控股",
        market: "HK"
      },
      verdict: "值得继续研究",
      valuationTemperature: "中性",
      reasons: ["业务质量清晰", "现金流质量稳定", "估值仍有研究空间"],
      risks: ["监管变化", "增长放缓"],
      nextAction: "生成完整深研"
    });

    expect(JSON.stringify(card)).toContain("生成完整深研");
    expect(JSON.stringify(card)).toContain("腾讯控股");
  });
});
