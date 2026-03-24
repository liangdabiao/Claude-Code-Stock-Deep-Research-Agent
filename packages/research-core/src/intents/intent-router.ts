export type QuickJudgeIntent = {
  type: "quick_judge";
  rawSymbolQuery: string;
};

export type Intent = QuickJudgeIntent;

const PREFIX_PATTERNS = [
  /^请帮我(?:看下|看看|分析|研究)?/u,
  /^帮我(?:看下|看看|分析|研究)?/u,
  /^我想(?:看下|看看|分析|研究)?/u
];

const SUFFIX_PATTERNS = [
  /值得继续研究吗$/u,
  /值不值得投资$/u,
  /值不值得继续看$/u,
  /怎么样$/u,
  /可以吗$/u,
  /好吗$/u
];

export function extractSymbolQuery(text: string): string {
  const original = text.trim();
  let cleaned = original;

  for (const pattern of PREFIX_PATTERNS) {
    cleaned = cleaned.replace(pattern, "").trim();
  }

  for (const pattern of SUFFIX_PATTERNS) {
    cleaned = cleaned.replace(pattern, "").trim();
  }

  return cleaned || original;
}

export function routeIntent(text: string): Intent {
  return {
    type: "quick_judge",
    rawSymbolQuery: extractSymbolQuery(text)
  };
}
