export const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS research_jobs (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  job_id TEXT NOT NULL,
  ticker TEXT NOT NULL,
  company_name TEXT NOT NULL,
  summary_path TEXT NOT NULL,
  report_path TEXT NOT NULL,
  created_at TEXT NOT NULL
);
`;
