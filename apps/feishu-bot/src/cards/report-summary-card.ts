export function buildReportSummaryCard(input: {
  ticker: string;
  companyName: string;
  summary: string;
}) {
  return {
    type: "template",
    data: {
      header: {
        title: `${input.companyName} ${input.ticker}`,
        subtitle: "深研摘要"
      },
      sections: [
        {
          title: "摘要",
          content: input.summary
        }
      ]
    }
  };
}
