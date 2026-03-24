import type { MarketDataProvider } from "../market-data/market-data-provider.js";
import type { ResolvedSymbol } from "../symbols/symbol-resolver.js";
import type { QuickJudgeResult } from "./types.js";

function pickVerdict(valuationTemperature: QuickJudgeResult["valuationTemperature"]): QuickJudgeResult["verdict"] {
  switch (valuationTemperature) {
    case "偏低":
      return "值得继续研究";
    case "中性":
      return "值得继续研究";
    case "偏高":
      return "可观察但暂不优先";
  }
}

export async function quickJudge(
  symbol: ResolvedSymbol,
  provider: MarketDataProvider
): Promise<QuickJudgeResult> {
  const snapshot = await provider.getSnapshot(symbol.ticker);

  return {
    symbol: {
      ticker: symbol.ticker,
      companyName: symbol.companyName,
      market: symbol.market
    },
    verdict: pickVerdict(snapshot.valuationTemperature),
    valuationTemperature: snapshot.valuationTemperature,
    reasons: [
      snapshot.highlights[0] ?? "业务质量清晰",
      snapshot.highlights[1] ?? "现金流质量稳定",
      snapshot.highlights[2] ?? "估值仍有研究空间"
    ],
    risks: [
      snapshot.risks[0] ?? "监管变化",
      snapshot.risks[1] ?? "增长放缓"
    ],
    nextAction: "生成完整深研"
  };
}
