import { join } from "node:path";

import { loadCoreConfig } from "@stock-bot/research-core";

export type ResearchWorkerConfig = {
  sqlitePath: string;
  reportRoot: string;
  executorMode: "replay" | "claude_cli";
  claudeCliPath: string;
  pollIntervalMs: number;
  replayFixturesRoot: string;
};

export function loadResearchWorkerConfig(
  env: Record<string, string | undefined>,
  cwd = process.cwd()
): ResearchWorkerConfig {
  const coreConfig = loadCoreConfig(env);
  const executorMode = env.RESEARCH_EXECUTOR_MODE === "claude_cli" ? "claude_cli" : "replay";
  const pollIntervalMs = Number(env.WORKER_POLL_INTERVAL_MS ?? "5000");

  return {
    sqlitePath: coreConfig.sqlitePath,
    reportRoot: coreConfig.reportRoot,
    executorMode,
    claudeCliPath: env.CLAUDE_CLI_PATH ?? "claude",
    pollIntervalMs: Number.isFinite(pollIntervalMs) && pollIntervalMs > 0 ? pollIntervalMs : 5000,
    replayFixturesRoot: env.REPLAY_FIXTURE_ROOT ?? join(cwd, "tests/fixtures/reports")
  };
}
