import { mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

import {
  buildDeepResearchPrompt,
  FULL_REPORT_FILE_NAME,
  SUMMARY_FILE_NAME,
  type CompletedResearchReport,
  type DeepResearchRequest,
  type ResearchExecutor
} from "./research-executor.js";

export type ClaudeCliInvocation = {
  cliPath: string;
  outputDir: string;
  prompt: string;
  request: DeepResearchRequest;
};

export type ClaudeCliRunner = (input: ClaudeCliInvocation) => Promise<void>;

function createDefaultRunner(): ClaudeCliRunner {
  return async () => {
    throw new Error("ClaudeCliExecutor requires an injected runner.");
  };
}

export class ClaudeCliExecutor implements ResearchExecutor {
  private readonly cliPath: string;
  private readonly outputRoot: string;
  private readonly invoke: ClaudeCliRunner;

  constructor(options: {
    cliPath: string;
    outputRoot: string;
    invoke?: ClaudeCliRunner;
  }) {
    this.cliPath = options.cliPath;
    this.outputRoot = options.outputRoot;
    this.invoke = options.invoke ?? createDefaultRunner();
  }

  async run(request: DeepResearchRequest): Promise<CompletedResearchReport> {
    const outputDir = join(this.outputRoot, request.reportId);
    const prompt = buildDeepResearchPrompt(request);

    await mkdir(outputDir, { recursive: true });
    await this.invoke({
      cliPath: this.cliPath,
      outputDir,
      prompt,
      request
    });

    const [summaryMarkdown, fullReportMarkdown] = await Promise.all([
      readFile(join(outputDir, SUMMARY_FILE_NAME), "utf8"),
      readFile(join(outputDir, FULL_REPORT_FILE_NAME), "utf8")
    ]);

    return {
      reportId: request.reportId,
      jobId: request.jobId,
      symbol: request.symbol,
      summaryMarkdown,
      fullReportMarkdown,
      generatedAt: new Date().toISOString()
    };
  }
}
