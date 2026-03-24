import {
  ClaudeCliExecutor,
  ReplayExecutor,
  createAppDb,
  createJobRepository,
  createReportStore
} from "@stock-bot/research-core";
import { fileURLToPath } from "node:url";

import { loadResearchWorkerConfig } from "./config.js";
import { createJobRunner } from "./job-runner.js";
import { createPollLoop } from "./poll-loop.js";

const workspaceRoot = fileURLToPath(new URL("../../../", import.meta.url));
const config = loadResearchWorkerConfig(process.env, workspaceRoot);
const db = createAppDb(config.sqlitePath);
const jobRepository = createJobRepository(db);
const reportStore = createReportStore(config.reportRoot);
const researchExecutor =
  config.executorMode === "claude_cli"
    ? new ClaudeCliExecutor({
        cliPath: config.claudeCliPath,
        outputRoot: config.reportRoot
      })
    : new ReplayExecutor(config.replayFixturesRoot);
const runner = createJobRunner({
  jobRepository,
  reportStore,
  researchExecutor
});
const loop = createPollLoop({
  runner,
  pollIntervalMs: config.pollIntervalMs
});

console.log(
  `[research-worker] starting. executor=${config.executorMode} sqlite=${config.sqlitePath} reportRoot=${config.reportRoot}`
);

if (config.executorMode === "claude_cli") {
  console.warn(
    "[research-worker] claude_cli mode is only an integration seam right now. Keep replay mode for local smoke tests."
  );
}

loop.start();
console.log(`[research-worker] polling every ${config.pollIntervalMs}ms and waiting for pending jobs.`);
