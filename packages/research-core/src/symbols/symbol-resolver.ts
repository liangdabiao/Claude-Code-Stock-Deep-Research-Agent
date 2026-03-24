import { SYMBOL_ALIASES } from "./symbol-aliases.js";

export type SupportedMarket = "A" | "HK" | "US";

export type ResolvedSymbol = {
  ticker: string;
  companyName: string;
  market: SupportedMarket;
  aliases: string[];
};

function normalizeAlias(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/gu, "");
}

export class SymbolResolver {
  resolve(input: string): ResolvedSymbol | null {
    const normalized = normalizeAlias(input);

    return (
      SYMBOL_ALIASES.find((symbol) =>
        symbol.aliases.some((alias) => normalizeAlias(alias) === normalized)
      ) ?? null
    );
  }
}
