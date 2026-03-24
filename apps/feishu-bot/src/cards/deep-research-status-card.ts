export function buildDeepResearchStatusCard(input: {
  ticker: string;
  companyName: string;
  jobId: string;
}) {
  return {
    type: "template",
    data: {
      header: {
        title: `${input.companyName} ${input.ticker}`,
        subtitle: "深研任务已创建"
      },
      sections: [
        {
          title: "任务状态",
          content: `已创建任务 ${input.jobId}，等待异步执行`
        }
      ]
    }
  };
}
