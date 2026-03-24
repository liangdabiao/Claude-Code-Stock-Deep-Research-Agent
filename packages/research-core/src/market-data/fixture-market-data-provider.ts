import { readFile } from "node:fs/promises";
import { join } from "node:path";

import type { MarketDataProvider, MarketDataSnapshot } from "./market-data-provider.js";

const FIXTURE_FILE_BY_TICKER: Record<string, string> = {
  "00700.HK": "tencent.json"
};

function toFixtureFileName(ticker: string): string {
  return (
    FIXTURE_FILE_BY_TICKER[ticker] ??
    `${ticker.toLowerCase().replace(/[^a-z0-9]+/gu, "-")}.json`
  );
}

export class FixtureMarketDataProvider implements MarketDataProvider {
  constructor(private readonly fixturesDir: string) {}

  async getSnapshot(ticker: string): Promise<MarketDataSnapshot> {
    const filePath = join(this.fixturesDir, toFixtureFileName(ticker));
    const content = await readFile(filePath, "utf8");
    return JSON.parse(content) as MarketDataSnapshot;
  }
}
