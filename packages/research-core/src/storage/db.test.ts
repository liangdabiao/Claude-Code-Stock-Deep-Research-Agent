import { describe, expect, it } from "vitest";

import { createAppDb } from "./db.js";

describe("createAppDb", () => {
  it("creates the jobs and reports tables on first boot", () => {
    const db = createAppDb(":memory:");
    const tables = db.prepare("select name from sqlite_master where type='table'").all();

    expect(tables).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "research_jobs" }),
        expect.objectContaining({ name: "reports" })
      ])
    );
  });
});
