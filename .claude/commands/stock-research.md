---
description: 对指定股票执行完整的投资尽调研究，从问题细化到最终报告生成。执行8阶段投资研究流程：公司事实底座、行业周期分析、业务拆解、财务质量、股权治理、市场分歧、估值护城河、综合报告。
argument-hint: [股票代码或公司名称，例如：600519, AAPL, 茅台]
allowed-tools: Task, WebSearch, WebFetch, mcp__web_reader__webReader, Read, Write, TodoWrite, Skill
---

# Stock Research

Execute comprehensive investment due diligence on the given stock using the 8-phase research framework.

## Stock Ticker / Company Name

$ARGUMENTS

**Examples**:
- `600519` or `贵州茅台` (Kweichow Moutai, A-share)
- `AAPL` or `Apple` (Apple Inc., US)
- `00700.HK` or `腾讯` (Tencent, Hong Kong)
- `TSLA` or `Tesla` (Tesla Inc., US)

---

## Research Workflow

This command will execute the following steps:

### Step 1: Question Refinement (问题细化)

Use the **stock-question-refiner** skill to gather context and clarify research needs.

**The skill will ask about**:
1. **Basic Information**: Stock ticker, company name, market (A-share/HK/US)
2. **Investment Style**: Value investing, growth investing, turnaround, or dividend investing
3. **Holding Period**: Short-term (<6 months), medium-term (6-18 months), or long-term (1-3+ years)
4. **Research Priorities**: Business quality, financials, valuation, governance, etc. (select 2-3)
5. **Research Depth**: Quick scan, standard due diligence, or deep analysis
6. **Specific Concerns**: Any particular worries or red flags to investigate

**Wait for user responses** before proceeding to Step 2.

### Step 2: Research Execution Plan (研究计划)

Create a detailed execution plan based on user's preferences:
- Prioritize phases based on user's focus areas
- Design multi-agent deployment strategy (~28 agents total)
- Define output structure and file organization
- Present plan to user for confirmation

### Step 3: Multi-Agent Research (多智能体研究)

Deploy multiple **parallel research agents** (using Task tool) for each phase:

**Phase 1**: Business Foundation (4 agents)
- Products and business model
- Revenue and profit composition
- Customers and value chain
- Recent strategic changes

**Phase 2**: Industry Analysis (4 agents)
- Industry cycle stage
- Supply-demand dynamics
- Competitive landscape
- Policy and external variables

**Phase 3**: Business Breakdown (4 agents)
- Business segment deep dive
- Profit engine and economics
- Customer and pricing analysis
- Subsidiaries and non-core items

**Phase 4**: Financial Quality (4 agents)
- Key metrics and trend analysis
- Cash flow quality
- Anomaly screening (red flags)
- Peer comparison

**Phase 5**: Governance Analysis (4 agents)
- Ownership structure
- Management quality and incentives
- Capital allocation track record
- Shareholder returns and overhang

**Phase 6**: Market Sentiment (4 agents)
- Bull case research
- Bear case research
- Key debate points
- Verification nodes

**Phase 7**: Valuation & Moat (4 agents)
- Competitive moat assessment
- Relative valuation
- Absolute valuation (DCF, reverse DCF)
- Risk scenarios

**Critical Rule**: Always launch agents in **parallel** (single message with multiple Task tool calls), not sequentially.

### Step 4: Quality Assurance (质量保证)

**Mandatory Cross-Validation**:
- Profit vs. cash flow (OCF/NI ratio analysis)
- Company vs. peer comparison
- Bear case analysis (identify 3-5 key risks)

**Citation Verification**:
- Use **citation-validator** skill to verify all claims have citations
- Ensure source quality ratings (A-E scale)
- Check for missing or problematic citations

### Step 5: Final Synthesis (综合报告)

Generate comprehensive investment due diligence report in the directory:

```
RESEARCH/STOCK_[ticker]_[company_name]/
├── README.md                          # Navigation and overview
├── 00_Executive_Summary.md            # Signal rating + thesis
├── 01_Business_Foundation.md          # Phase 1
├── 02_Industry_Analysis.md            # Phase 2
├── 03_Business_Breakdown.md           # Phase 3
├── 04_Financial_Quality.md            # Phase 4
├── 05_Governance_Analysis.md          # Phase 5
├── 06_Market_Sentiment.md             # Phase 6
├── 07_Valuation_Moat.md               # Phase 7
├── Financial_Data/
│   ├── key_metrics_table.md
│   ├── cashflow_analysis.md
│   └── peer_comparison.md
├── Valuation/
│   ├── historical_multiples.md
│   ├── dcf_analysis.md
│   └── reverse_dcf_implied_growth.md
├── Risk_Monitoring/
│   ├── bear_case.md
│   ├── black_swans.md
│   └── monitoring_checklist.md
└── sources/
    ├── bibliography.md
    └── data_sources.md
```

---

## Output Format

### Executive Summary Includes:

**Signal Light Rating**:
- 🟢🟢🟢 **Strong Buy** - Significant margin of safety, strong moat, attractive valuation
- 🟡🟡🟡 **Hold** - Fairly valued or limited margin of safety
- 🔴🔴 **Avoid** - Overvalued, deteriorating fundamentals, or excessive risks

**Plus**:
- Investment thesis (one-liner + detailed explanation)
- Key metrics summary table
- Top 3 reasons to consider
- Top 3 reasons to avoid
- Financial health score
- Valuation assessment (relative + absolute)
- Moat rating (0-5 scale)
- Monitoring checklist (strengthen/exit conditions)

### Each Phase Report Includes:

- Executive summary (2-3 paragraphs)
- Detailed findings with subsections
- Key data tables
- Source quality assessment (A-E ratings)
- Contradictions and gaps
- Key takeaways (3-5 bullet points)

---

## Citation Requirements

**Every factual claim must include**:
1. Author/Organization name
2. Publication date (at least year)
3. Source title
4. Direct URL/DOI
5. Page numbers (if applicable)

**Source Quality Rating** (A-E scale):
- **A**: Annual reports, regulatory filings, peer-reviewed research
- **B**: Industry reports, reputable analyst research, company presentations
- **C**: News articles, expert commentary
- **D**: Preprints, preliminary research, blogs
- **E**: Social media, forums (verify with primary sources)

**Citation Format Example**:
```markdown
According to the 2023 Annual Report, Kweichow Moutai's revenue grew by 18.2% to
¥127.5 billion, driven by a 16.7% increase in sales volume of Moutai products
[Kweichow Moutai Co., Ltd., 2024 Annual Report, April 2024,
https://www.cninfo.com.cn/new/disclosure/detail?stockCode=600519&announcementId=122]
```

---

## What This System Does

✅ **Comprehensive Research**: 8-phase due diligence covering all material aspects
✅ **Multi-Agent Parallel Execution**: ~28 research agents working concurrently
✅ **Fact-Based**: All claims verified with sources and quality ratings
✅ **Balanced**: Both bull and bear cases presented
✅ **Structured**: Standardized output for easy navigation

---

## What This System Does NOT Do

❌ **No Investment Advice**: Does NOT give buy/sell/hold recommendations
❌ **No Price Predictions**: Does NOT predict future stock prices
❌ **No Market Timing**: Does NOT identify entry/exit points
❌ **No Trading Strategies**: Does NOT provide technical analysis or trading signals

**The signal light rating (🟢🟢🟢 / 🟡🟡🟡 / 🔴🔴)** is based **only on fundamental analysis** (business quality, financial health, valuation, moat). It is **not** investment advice.

---

## Important Disclaimer

> **重要提示 / Important Warning**:
>
> 本研究报告仅供教育和信息用途，不构成投资建议或推荐。所有投资均有风险，包括本金损失。过往表现不代表未来结果。请自行进行尽职调查，并在做出投资决策前咨询合格的财务顾问。
>
> This research is for educational and informational purposes only and does not constitute investment advice or recommendations. All investments involve risk, including the loss of principal. Past performance does not guarantee future results. Always conduct your own due diligence and consult with qualified financial advisors before making investment decisions.

---

## Usage Examples

### Example 1: Value Investing (A-share)

```
User: /stock-research 贵州茅台 600519

Claude: [Uses stock-question-refiner skill]
       我可以帮您研究贵州茅台。让我先了解您的投资需求：

       1. 您的投资风格是什么？（价值投资/成长投资/红利投资）
       2. 持有周期？（短期/中期/长期）
       3. 最关心哪些方面？（生意质量/财务质量/估值/公司治理）
       4. 风险偏好？（保守/平衡/激进）

       请告诉我您的选择...
```

### Example 2: Growth Investing (US Tech)

```
User: /stock-research NVDA

Claude: [Uses stock-question-refiner skill]
       I can help you research Nvidia (NVDA). To tailor the research, I need to understand:

       1. Investment style: Growth investing, value investing, or other?
       2. Time horizon: Short-term, medium-term, or long-term?
       3. Focus areas: AI growth potential, competitive positioning, valuation?
       4. Risk tolerance: Conservative, balanced, or aggressive?

       Please share your preferences...
```

### Example 3: Quick Scan

```
User: /stock-research AAPL, I want a quick overview

Claude: [Uses stock-question-refiner skill]
       I can do a quick scan of Apple (AAPL). This will take 30-60 minutes and provide:

       - Overview of business and key metrics
       - Obvious red flags if any
       - Brief valuation assessment
       - Condensed summary

       Note: A quick scan will NOT include:
       - Detailed competitive analysis
       - Comprehensive financial trends
       - DCF valuation
       - In-depth governance review

       If you're making a significant investment, I recommend "Standard Due Diligence" (2-4 hours).

       Should I proceed with a quick scan?
```

---

## Related Commands

For step-by-step control, you can use skills directly:

```
"Use the stock-question-refiner skill to help clarify my research on [stock]"
"Use the stock-research-executor skill to execute due diligence on [stock]"
"Use the citation-validator skill to verify citations in [file]"
```

---

## Estimated Time

| Research Depth | Time | Agents Deployed |
|----------------|------|-----------------|
| Quick Scan | 30-60 min | ~8-10 |
| Standard Due Diligence | 2-4 hours | ~28 |
| Deep Analysis | 4-8 hours | ~40+ |

**Actual time varies by**:
- Stock complexity (number of business segments, geographic exposure)
- Data availability (A-shares have Chinese sources, US stocks more data)
- Research depth priority (more priority phases = more time)

---

## Begin Research

现在开始执行股票投资尽调研究流程。

Begin the stock investment due diligence research process now.
