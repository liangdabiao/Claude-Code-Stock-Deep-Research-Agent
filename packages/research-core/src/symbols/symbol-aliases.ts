import type { ResolvedSymbol } from "./symbol-resolver.js";

export const SYMBOL_ALIASES: ResolvedSymbol[] = [
  {
    ticker: "00700.HK",
    companyName: "腾讯控股",
    market: "HK",
    aliases: ["00700.HK", "700.HK", "0700.HK", "腾讯", "腾讯控股", "tencent", "tencentholdings"]
  },
  {
    ticker: "600519.SH",
    companyName: "贵州茅台",
    market: "A",
    aliases: ["600519", "600519.SH", "贵州茅台", "茅台", "kweichowmoutai"]
  },
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    market: "US",
    aliases: ["AAPL", "apple", "appleinc"]
  },
  {
    ticker: "TSLA",
    companyName: "Tesla, Inc.",
    market: "US",
    aliases: ["TSLA", "tesla", "teslainc"]
  }
];
