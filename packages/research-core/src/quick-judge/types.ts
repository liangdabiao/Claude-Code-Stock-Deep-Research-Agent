import type { ValuationTemperature } from "../market-data/market-data-provider.js";
import type { SupportedMarket } from "../symbols/symbol-resolver.js";

export type QuickJudgeVerdict =
  | "值得继续研究"
  | "可观察但暂不优先"
  | "风险较高，暂不建议优先看";

export type QuickJudgeSymbol = {
  ticker: string;
  companyName: string;
  market: SupportedMarket;
};

export type QuickJudgeResult = {
  symbol: QuickJudgeSymbol;
  verdict: QuickJudgeVerdict;
  valuationTemperature: ValuationTemperature;
  reasons: [string, string, string];
  risks: [string, string];
  nextAction: "生成完整深研";
};
