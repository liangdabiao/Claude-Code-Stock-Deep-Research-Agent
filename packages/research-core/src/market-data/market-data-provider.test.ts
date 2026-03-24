import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { FixtureMarketDataProvider } from "./fixture-market-data-provider.js";

const fixturesDir = fileURLToPath(
  new URL("../../../../tests/fixtures/market-data", import.meta.url)
);

describe("FixtureMarketDataProvider", () => {
  it("loads a fixture snapshot for Tencent", async () => {
    const provider = new FixtureMarketDataProvider(fixturesDir);
    const snapshot = await provider.getSnapshot("00700.HK");

    expect(snapshot.companyName).toBe("腾讯控股");
    expect(snapshot.valuationTemperature).toBe("中性");
  });
});
