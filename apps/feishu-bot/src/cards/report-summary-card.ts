export function buildReportSummaryCard(input: {
  ticker: string;
  companyName: string;
  summary: string;
  question?: string;
  answer?: string;
}) {
  const sections = [
    {
      title: "摘要",
      content: input.summary
    }
  ];

  if (input.question && input.answer) {
    sections.push(
      {
        title: "追问",
        content: input.question
      },
      {
        title: "回答",
        content: input.answer
      }
    );
  }

  return {
    type: "template",
    data: {
      header: {
        title: `${input.companyName} ${input.ticker}`,
        subtitle: input.answer ? "报告追问" : "深研摘要"
      },
      sections
    }
  };
}
