export type ValuationTemperature = "偏低" | "中性" | "偏高";

export type MarketDataSnapshot = {
  ticker: string;
  companyName: string;
  market: "A" | "HK" | "US";
  valuationTemperature: ValuationTemperature;
  highlights: string[];
  risks: string[];
};

export interface MarketDataProvider {
  getSnapshot(ticker: string): Promise<MarketDataSnapshot>;
}
