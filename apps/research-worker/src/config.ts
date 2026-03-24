import { isAbsolute, join } from "node:path";

import { loadCoreConfig } from "@stock-bot/research-core";

export type ResearchWorkerConfig = {
  sqlitePath: string;
  reportRoot: string;
  executorMode: "replay" | "claude_cli";
  claudeCliPath: string;
  pollIntervalMs: number;
  replayFixturesRoot: string;
};

function resolvePathFromRoot(inputPath: string, rootDir: string) {
  return isAbsolute(inputPath) ? inputPath : join(rootDir, inputPath);
}

export function loadResearchWorkerConfig(
  env: Record<string, string | undefined>,
  rootDir = process.cwd()
): ResearchWorkerConfig {
  const coreConfig = loadCoreConfig(env);
  const executorMode = env.RESEARCH_EXECUTOR_MODE === "claude_cli" ? "claude_cli" : "replay";
  const pollIntervalMs = Number(env.WORKER_POLL_INTERVAL_MS ?? "5000");

  return {
    sqlitePath: resolvePathFromRoot(coreConfig.sqlitePath, rootDir),
    reportRoot: resolvePathFromRoot(coreConfig.reportRoot, rootDir),
    executorMode,
    claudeCliPath: env.CLAUDE_CLI_PATH ?? "claude",
    pollIntervalMs: Number.isFinite(pollIntervalMs) && pollIntervalMs > 0 ? pollIntervalMs : 5000,
    replayFixturesRoot: resolvePathFromRoot(
      env.REPLAY_FIXTURE_ROOT ?? "tests/fixtures/reports",
      rootDir
    )
  };
}
