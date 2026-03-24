import type {
  ResearchExecutor,
  ResearchJobRecord,
  StoredReport
} from "@stock-bot/research-core";

export function createJobRunner(deps: {
  jobRepository: {
    claimNextPending(): ResearchJobRecord | null;
    markCompleted(jobId: string, report: StoredReport): void;
  };
  reportStore: {
    saveCompletedReport(report: Awaited<ReturnType<ResearchExecutor["run"]>>): Promise<StoredReport>;
  };
  researchExecutor: ResearchExecutor;
}) {
  return {
    async runNext() {
      const job = deps.jobRepository.claimNextPending();

      if (!job) {
        return null;
      }

      const report = await deps.researchExecutor.run(job.payload);
      const storedReport = await deps.reportStore.saveCompletedReport(report);

      deps.jobRepository.markCompleted(job.id, storedReport);

      return {
        jobId: job.id,
        reportId: storedReport.reportId,
        status: "completed" as const
      };
    }
  };
}
