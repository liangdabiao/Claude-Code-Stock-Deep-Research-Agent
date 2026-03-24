import { describe, expect, it } from "vitest";

import { loadCoreConfig } from "./config.js";

describe("loadCoreConfig", () => {
  it("parses storage paths from env input", () => {
    const config = loadCoreConfig({
      BOT_REPORT_ROOT: "storage/reports",
      BOT_SQLITE_PATH: "storage/sqlite/app.db"
    });

    expect(config).toEqual({
      reportRoot: "storage/reports",
      sqlitePath: "storage/sqlite/app.db"
    });
  });
});
