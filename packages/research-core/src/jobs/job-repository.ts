import type { StoredReport } from "../reports/report-store.js";
import type { DeepResearchRequest } from "../research/research-executor.js";
import type { AppDb } from "../storage/db.js";

export type ResearchJobStatus = "pending" | "running" | "completed" | "failed";

export type ResearchJobRecord = {
  id: string;
  status: ResearchJobStatus;
  payload: DeepResearchRequest;
  createdAt: string;
  updatedAt: string;
};

export type StoredReportRecord = {
  id: string;
  jobId: string;
  ticker: string;
  companyName: string;
  summaryPath: string;
  reportPath: string;
  createdAt: string;
};

type JobRow = {
  id: string;
  status: ResearchJobStatus;
  payload_json: string;
  created_at: string;
  updated_at: string;
};

type ReportRow = {
  id: string;
  job_id: string;
  ticker: string;
  company_name: string;
  summary_path: string;
  report_path: string;
  created_at: string;
};

function toJobRecord(row: JobRow | undefined): ResearchJobRecord | null {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    status: row.status,
    payload: JSON.parse(row.payload_json) as DeepResearchRequest,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function toStoredReportRecord(row: ReportRow | undefined): StoredReportRecord | null {
  if (!row) {
    return null;
  }

  return {
    id: row.id,
    jobId: row.job_id,
    ticker: row.ticker,
    companyName: row.company_name,
    summaryPath: row.summary_path,
    reportPath: row.report_path,
    createdAt: row.created_at
  };
}

export function createJobRepository(db: AppDb) {
  const insertJob = db.prepare(`
    INSERT INTO research_jobs (id, status, payload_json, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?)
  `);
  const findById = db.prepare(`
    SELECT id, status, payload_json, created_at, updated_at
    FROM research_jobs
    WHERE id = ?
  `);
  const findNextPending = db.prepare(`
    SELECT id, status, payload_json, created_at, updated_at
    FROM research_jobs
    WHERE status = 'pending'
    ORDER BY created_at ASC
    LIMIT 1
  `);
  const updateStatus = db.prepare(`
    UPDATE research_jobs
    SET status = ?, updated_at = ?
    WHERE id = ?
  `);
  const insertReport = db.prepare(`
    INSERT INTO reports (id, job_id, ticker, company_name, summary_path, report_path, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  const findReportByJobId = db.prepare(`
    SELECT id, job_id, ticker, company_name, summary_path, report_path, created_at
    FROM reports
    WHERE job_id = ?
  `);

  return {
    insert(job: ResearchJobRecord) {
      insertJob.run(
        job.id,
        job.status,
        JSON.stringify(job.payload),
        job.createdAt,
        job.updatedAt
      );
      return job;
    },

    findById(id: string) {
      return toJobRecord(findById.get(id) as JobRow | undefined);
    },

    claimNextPending() {
      const job = toJobRecord(findNextPending.get() as JobRow | undefined);

      if (!job) {
        return null;
      }

      const updatedAt = new Date().toISOString();
      updateStatus.run("running", updatedAt, job.id);

      return {
        ...job,
        status: "running" as const,
        updatedAt
      };
    },

    markCompleted(jobId: string, report: StoredReport) {
      insertReport.run(
        report.reportId,
        report.jobId,
        report.ticker,
        report.companyName,
        report.summaryPath,
        report.reportPath,
        report.createdAt
      );
      updateStatus.run("completed", report.createdAt, jobId);
    },

    findReportByJobId(jobId: string) {
      return toStoredReportRecord(findReportByJobId.get(jobId) as ReportRow | undefined);
    }
  };
}
