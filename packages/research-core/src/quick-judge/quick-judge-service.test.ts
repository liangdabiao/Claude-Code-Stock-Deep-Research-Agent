import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { FixtureMarketDataProvider } from "../market-data/fixture-market-data-provider.js";
import { SymbolResolver } from "../symbols/symbol-resolver.js";
import { quickJudge } from "./quick-judge-service.js";

const fixturesDir = fileURLToPath(
  new URL("../../../../tests/fixtures/market-data", import.meta.url)
);

describe("quickJudge", () => {
  it("returns a fixed-shape quick judge result", async () => {
    const provider = new FixtureMarketDataProvider(fixturesDir);
    const symbol = new SymbolResolver().resolve("腾讯");

    if (!symbol) {
      throw new Error("expected symbol to resolve");
    }

    const result = await quickJudge(symbol, provider);

    expect(result).toMatchObject({
      verdict: expect.stringMatching(/值得继续研究|可观察但暂不优先|风险较高/),
      valuationTemperature: expect.stringMatching(/偏低|中性|偏高/),
      reasons: expect.any(Array),
      risks: expect.any(Array)
    });
    expect(result.reasons).toHaveLength(3);
    expect(result.risks).toHaveLength(2);
  });
});
