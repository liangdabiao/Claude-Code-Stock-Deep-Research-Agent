import {
  ClaudeCliExecutor,
  ReplayExecutor,
  createAppDb,
  createJobRepository,
  createReportStore
} from "@stock-bot/research-core";

import { loadResearchWorkerConfig } from "./config.js";
import { createJobRunner } from "./job-runner.js";
import { createPollLoop } from "./poll-loop.js";

const config = loadResearchWorkerConfig(process.env);
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

loop.start();
