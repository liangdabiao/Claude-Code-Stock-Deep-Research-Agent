import { readFile } from "node:fs/promises";

export type ReportQaInput = {
  reportId: string;
  question: string;
};

export type ReportQaAnswer = {
  reportId: string;
  ticker: string;
  companyName: string;
  summary: string;
  answer: string;
};

type StoredReportLookupRecord = {
  id: string;
  ticker: string;
  companyName: string;
  summaryPath: string;
  reportPath: string;
};

function extractSummary(markdown: string) {
  return markdown
    .split(/\r?\n/gu)
    .map((line) => line.replace(/^#+\s*/u, "").trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");
}

function deriveKeywords(question: string) {
  if (question.includes("风险")) {
    return ["风险", "监管", "放缓"];
  }

  if (question.includes("结论") || question.includes("总结") || question.includes("看点")) {
    return ["结论", "总结", "看点"];
  }

  return question.split(/[，。！？?\s]+/u).filter(Boolean);
}

function answerAgainstStoredMarkdown(markdown: string, question: string) {
  const keywords = deriveKeywords(question);
  const lines = markdown
    .split(/\r?\n/gu)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
  const matchedLines = lines.filter((line) => keywords.some((keyword) => line.includes(keyword)));

  if (matchedLines.length > 0) {
    return matchedLines.slice(0, 2).join(" ");
  }

  return "未在已存报告中找到直接相关内容。";
}

export function createReportQaService(deps: {
  reportLookup: {
    findById(reportId: string): StoredReportLookupRecord | null;
  };
}) {
  return {
    async answer(input: ReportQaInput): Promise<ReportQaAnswer> {
      const report = deps.reportLookup.findById(input.reportId);

      if (!report) {
        throw new Error(`report not found: ${input.reportId}`);
      }

      const [summaryMarkdown, fullReportMarkdown] = await Promise.all([
        readFile(report.summaryPath, "utf8"),
        readFile(report.reportPath, "utf8")
      ]);

      return {
        reportId: report.id,
        ticker: report.ticker,
        companyName: report.companyName,
        summary: extractSummary(summaryMarkdown),
        answer: answerAgainstStoredMarkdown(fullReportMarkdown, input.question)
      };
    }
  };
}
