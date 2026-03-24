type QuickJudgeCardInput = {
  symbol: {
    ticker: string;
    companyName: string;
    market: "A" | "HK" | "US";
  };
  verdict: string;
  valuationTemperature: "偏低" | "中性" | "偏高";
  reasons: string[];
  risks: string[];
  nextAction: "生成完整深研";
};

export function buildQuickJudgeCard(input: QuickJudgeCardInput) {
  return {
    type: "template",
    data: {
      header: {
        title: `${input.symbol.companyName} ${input.symbol.ticker}`,
        subtitle: `快判结论：${input.verdict}`
      },
      sections: [
        {
          title: "估值温度",
          content: input.valuationTemperature
        },
        {
          title: "核心依据",
          items: input.reasons
        },
        {
          title: "主要风险",
          items: input.risks
        }
      ],
      actions: [
        {
          type: "button",
          action: "create_deep_research",
          text: input.nextAction
        }
      ]
    }
  };
}
