import { DatabaseSync } from "node:sqlite";

import { SCHEMA_SQL } from "./schema.js";

export type AppDb = DatabaseSync;

export function createAppDb(path: string): AppDb {
  const db = new DatabaseSync(path);
  db.exec(SCHEMA_SQL);
  return db;
}
