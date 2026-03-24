import { describe, expect, it } from "vitest";

import { SymbolResolver } from "./symbol-resolver.js";

describe("SymbolResolver", () => {
  it("resolves Tencent aliases to a single symbol record", () => {
    const resolver = new SymbolResolver();

    expect(resolver.resolve("腾讯")).toMatchObject({
      ticker: "00700.HK",
      companyName: "腾讯控股",
      market: "HK"
    });
  });

  it("resolves Apple using a US ticker", () => {
    const resolver = new SymbolResolver();

    expect(resolver.resolve("AAPL")).toMatchObject({
      ticker: "AAPL",
      companyName: "Apple Inc.",
      market: "US"
    });
  });
});
