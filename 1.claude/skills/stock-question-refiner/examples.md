# Stock Question Refiner - Examples

This document provides detailed examples of how the Stock Question Refiner skill works in practice.

## Table of Contents

1. [Example 1: Value Investing - A-share Blue Chip](#example-1-value-investing)
2. [Example 2: Growth Investing - US Tech Stock](#example-2-growth-investing)
3. [Example 3: Turnaround - Distressed Company](#example-3-turnaround)
4. [Example 4: Dividend Investing - High-Yield Stock](#example-4-dividend-investing)
5. [Example 5: Incomplete Information](#example-5-incomplete-information)

---

## Example 1: Value Investing - A-share Blue Chip

### User's Initial Request

```
User: 我想知道贵州茅台 600519 值不值得投资
```

### Question Refiner's Response

```
我可以帮您对贵州茅台进行投资研究，但我不能直接告诉您"值不值得买"或给
出投资建议。不过，我可以帮您系统性地研究这家公司，帮您做出自己的判断。

为了给您提供最合适的研究，我需要了解一些信息：

**1. 您的投资风格是什么？**
   A. 价值投资 - 寻找被低估的优质资产，关注安全边际
   B. 成长投资 - 关注高成长性，愿意为成长付出溢价
   C. 红利投资 - 关注稳定分红和现金流
   D. 其他

**2. 您的持有周期？**
   A. 短期（6个月以内）
   B. 中期（6-18个月）
   C. 长期（1-3年以上）

**3. 您最关心哪些方面？（选2-3个）**
   - 生意质量：护城河、定价权、商业模式
   - 财务质量：现金流、盈利质量
   - 行业态势：行业周期、竞争格局
   - 公司治理：管理层、资本配置
   - 估值：是否便宜、安全边际
   - 催化剂：近期催化因素

**4. 您的风险偏好？**
   - 保守：避免高负债、风险资产
   - 平衡：可接受适度风险
   - 激进：可承受高波动

请告诉我您的选择，我会据此生成针对性的研究计划。
```

### User's Response

```
User:
1. 价值投资，关注安全边际
2. 长期持有，3年以上
3. 最关心：生意质量、公司治理、估值
4. 风险偏好：保守
```

### Generated Structured Research Prompt

```markdown
### Investment Research Target

**Stock Ticker**: 600519.SH
**Company Name**: 贵州茅台股份有限公司 (Kweichow Moutai Co., Ltd.)
**Market**: A-share (Shanghai Stock Exchange)
**Industry/Sector**: Consumer Staples - Baijiu (White Spirits)

### Investment Parameters

**Investment Style**: Value Investing (深度价值)
- Philosophy: Buy high-quality assets at discounts to intrinsic value
- Focus: Business quality, competitive moat, margin of safety
- Implications: Prioritize durable competitive advantages, normalized earnings power,
  asset quality, conservative valuation

**Holding Period**: Long-term (3+ years)
- Time horizon: Multi-year ownership, compounding focus
- Research implications: Emphasize business sustainability, moat durability,
  long-term competitive position over short-term noise

**Risk Tolerance**: Conservative
- Risk constraints:
  - Avoid companies with high debt or financial leverage
  - Require proven business model with long operating history
  - Demand strong cash generation and balance sheet
  - No accounting or governance red flags

### Research Scope

**Must Cover** (All 8 Phases):
1. ✅ Business Foundation (facts, products, revenue structure)
2. ✅ Industry Analysis (baijiu industry cycle, competition, premiumization trends)
3. ✅ Business Breakdown (profit drivers, pricing power, moat)
4. ✅ Financial Quality (cash flow vs. earnings, capital efficiency)
5. ✅ Governance Analysis (state-owned enterprise, management track record)
6. ✅ Market Sentiment (bull/bear cases on luxury baijiu demand)
7. ✅ Valuation & Moat (brand moat assessment, historical and relative valuation)
8. ✅ Final Synthesis (signal rating, investment thesis, monitoring checklist)

**Deep Dive Priority** (User's Top Focus Areas):
- Priority 1: **Business Quality & Moat**
  - Brand strength and pricing power
  - Competitive advantages vs. Wuliangye, Yanghe, and other premium baijiu
  - Moat durability (threats from changing consumer preferences, counterfeit products)
  - Economic moat rating (0-5 scale) with evidence

- Priority 2: **Governance & Capital Allocation**
  - SOE governance structure and incentives
  - Capital allocation history (dividends, capex, M&A)
  - Management quality and track record
  - Shareholder return policies

- Priority 3: **Valuation & Margin of Safety**
  - Intrinsic value assessment using multiple methods (DCF, PE relative to history,
    peer comparison, sum-of-parts)
  - Historical valuation range analysis (5-10 years)
  - Current valuation vs. intrinsic value discount/premium
  - Margin of safety assessment

**Can Streamline** (Quick Pass):
- Phase 6: Market Sentiment (less critical for long-term value investor,
  focus on fundamentals over sentiment)

### Output Requirements

**Format**:
- [x] Executive Summary with signal light rating
  - 🟢🟢🟢 Strong Buy (significant margin of safety, strong moat)
  - 🟡🟡🟡 Hold (fairly valued or limited margin of safety)
  - 🔴🔴 Avoid (overvalued or deteriorating fundamentals)

- [x] 8-Phase detailed reports (one file per phase)
  - Language: Bilingual (Chinese primary, English key terms)
  - Structure: Executive summary + detailed analysis + key takeaways

- [x] Key financial data tables
  - 5-10 year history: Revenue, net income, operating cash flow, free cash flow
  - Margins: Gross margin, operating margin, net margin, FCF margin
  - Growth rates: Revenue CAGR, net income CAGR (3-year, 5-year, 10-year)
  - Efficiency: ROE, ROIC, asset turnover, cash conversion cycle
  - Balance sheet: Debt ratios, cash position, working capital trends

- [x] Valuation dashboard
  - Historical multiples: PE (TTM, forward), PB, PS, EV/EBITDA, FCF yield
  - Historical percentiles (5-year, 10-year)
  - Peer comparison: Wuliangye, Yanghe, Fenjiu, international luxury peers (LVMH,
    Kering)
  - DCF valuation with conservative assumptions
  - Reverse DCF: What growth is implied by current price?

- [x] Monitoring checklist
  - Conditions to strengthen thesis (e.g., maintains premium pricing, growth
    stabilizes, dividend increases)
  - Exit triggers (e.g., moat erosion, volume declines, margin compression,
    governance issues)

- [x] Bibliography with source quality ratings
  - A: Annual reports, regulatory filings, peer-reviewed research
  - B: Industry reports, reputable analyst research
  - C: Company presentations, management commentary
  - D: News articles, secondary sources
  - E: Social media, forums (verify with primary sources)

**Valuation Methods Required**:
- [x] Relative valuation (PE, PB, PS, EV/EBITDA)
  - Historical percentile analysis (5-year, 10-year)
  - Peer comparison (Wuliangye 000858.SZ, Yanghe 002304.SZ, Fenjiu 600809.SH)
  - International luxury goods comparison (LVMH, Kering, Hermes)

- [x] DCF valuation (essential for long-term value investor)
  - Base case, bull case, bear case scenarios
  - Conservative assumptions: WACC, terminal growth rate (2-3%)
  - Sensitivity analysis (WACC × growth rate)

- [x] Sum-of-the-parts (if applicable)
  - Moutai core business vs. series (飞天茅台 vs. 系列酒)
  - Wholesale vs. direct-to-consumer channels

- [x] Reverse DCF
  - What long-term growth rate is implied by current stock price?
  - Is this growth rate achievable or overly optimistic?

**Special Requirements**:
- **Data timeframe**: 5-10 years historical data for valuation context
- **Geography focus**: China domestic market, but benchmark against global luxury peers
- **Language**: Chinese primary, with English financial terms and ratios
- **Include charts/visualizations descriptions**: Yes (describe key charts that would
  help understanding)
- **Emphasis on**:
  - Cash flow quality over reported earnings
  - Sustainable competitive advantages (moat)
  - Conservative intrinsic value estimation
  - Margin of safety assessment

### Research Constraints

**Data Sources** (Priority Order):
1. Most authoritative:
   - Annual reports (年报)
   - IPO prospectus and offering documents
   - Regulatory filings (CSRC, Shanghai Stock Exchange)
   - Company announcements (定期报告、临时公告)

2. High quality:
   - Earnings call transcripts (业绩说明会纪要)
   - Investor relations presentations
   - Industry association reports (China Alcoholic Drinks Association)

3. Supplementary:
   - Brokerage research (use with skepticism, check conflicts of interest)
   - Industry reports (Jiémian, Wall Street CN, Bloomberg)
   - Academic research on baijiu industry

4. Market sentiment (for Phase 6 only):
   - News coverage (Caixin, FT, Bloomberg)
   - Social media (雪球, East Money - verify claims)

**Mandatory Verification**:
- ✅ Profit vs. cash flow cross-validation
  - Operating cash flow / Net income (historical 5-year trend)
  - Free cash flow / Net income
  - Accruals analysis (change in working capital)

- ✅ Company vs. peer comparison
  - Valuation multiples vs. Wuliangye, Yanghe, Fenjiu
  - Margin comparison (gross, operating, net)
  - Growth rates comparison
  - ROE and ROIC comparison

- ✅ Bear case analysis (identify risks and failure scenarios)
  - Premiumization trend reversal
  - Regulatory risks (anti-corruption, pricing restrictions)
  - Competition from premium foreign spirits
  - Counterfeit products and brand dilution
  - Volume growth slowdown (demographic headwinds)

- ✅ Source quality rating
  - All factual claims must cite sources with A-E rating
  - Distinguish between company disclosures and third-party analysis

**What NOT to Do**:
- ❌ Do NOT predict stock price or target price
- ❌ Do NOT give buy/sell/hold recommendations (only provide signal light rating
  based on fundamentals)
- ❌ Do NOT time market entry/exit points
- ❌ Do NOT guarantee investment outcomes or returns
- ❌ Do NOT provide trading strategies or technical analysis
- ❌ Do NOT make assumptions about Chinese government policy changes

### Final Instructions

**Output Directory**: `RESEARCH/STOCK_600519_Kweichow_Moutai/`

**File Structure**:
```
RESEARCH/STOCK_600519_Kweichow_Moutai/
├── README.md
├── 00_Executive_Summary.md
│   - Signal light rating with rationale
│   - One-paragraph investment thesis
│   - Key metrics summary table
│   - Margin of safety assessment
│   - Top 3 reasons to buy/avoid
├── 01_Business_Foundation.md
│   - Company overview
│   - Product portfolio (飞天茅台, 系列酒)
│   - Revenue and profit structure
│   - Channel structure (直销 vs. 经销)
│   - Strategic initiatives (i茅台APP, direct-to-consumer)
├── 02_Industry_Analysis.md
│   - Baijiu industry overview
│   - Premiumization trend
│   - Competitive landscape (tier 1 vs. tier 2 baijiu)
│   - Industry cycle position
│   - Key risks (regulation, demographics, competition)
├── 03_Business_Breakdown.md
│   - One-sentence business essence (品牌护城河 + 定价权 + 稀缺性)
│   - Business segment analysis
│   - Profit engine analysis
│   - Pricing power and volume dynamics
│   - Customer analysis (gift-giving, business entertainment, personal consumption)
├── 04_Financial_Quality.md
│   - 5-10 year financial trends
│   - Profitability trends (margins, ROE, ROIC)
│   - Cash flow quality analysis (OCF/NI, FCF/NI)
│   - Balance sheet strength (debt, cash, working capital)
│   - Red flag check (accruals, related party transactions, accounting quality)
├── 05_Governance_Analysis.md
│   - Ownership structure (SOE, state ownership)
│   - Management team and track record
│   - Capital allocation history (dividends, capex)
│   - Executive compensation and incentives
│   - Related party transactions and governance risks
├── 06_Market_Sentiment.md
│   - Bull case (premiumization, pricing power, scarcity value)
│   - Bear case (volume saturation, regulation, competition)
│   - Key debates and what data will resolve them
├── 07_Valuation_Moat.md
│   - Moat assessment (brand, network effects, cost advantage, regulatory)
│   - Moat rating (0-5) with evidence table
│   - Historical valuation analysis (multiples, percentiles)
│   - Peer comparison table
│   - DCF valuation with scenarios
│   - Reverse DCF implied growth
│   - Margin of safety assessment
├── Financial_Data/
│   ├── key_metrics_table.md
│   ├── cashflow_analysis.md
│   ├── peer_comparison.md
│   └── historical_trends.md
├── Valuation/
│   ├── historical_multiples.md
│   ├── dcf_analysis.md
│   ├── reverse_dcf_implied_growth.md
│   └── peer_valuation_matrix.md
├── Risk_Monitoring/
│   ├── bear_case.md
│   ├── black_swans.md
│   └── monitoring_checklist.md
└── sources/
    ├── bibliography.md
    └── data_sources.md
```

**Quality Standards**:
- Every factual claim includes: Author/Org, Date, Title, URL/DOI, Page (if applicable)
- Clear distinction between [公司披露] [行业数据] [分析师观点] [市场传闻]
- All judgments supported by evidence or logical reasoning
- Use Chain-of-Verification for controversial claims
- Identify contradictions between sources explicitly
- Flag areas of uncertainty or insufficient data

**Reminders for Value Investing Approach**:
- Be conservative in assumptions (better to miss an opportunity than overpay)
- Focus on what can be known (facts), not what must be assumed (speculation)
- Demand margin of safety (price should be significantly below intrinsic value)
- Assess business quality first, then valuation (don't buy a bad business just because it's cheap)
- Think like an owner (would you buy this entire company?)
- Ignore short-term price volatility and focus on business fundamentals
- Assess moat durability (can this business maintain advantages for 10+ years?)

**Important Disclaimer**:
> 本研究报告仅供教育和信息用途，不构成投资建议或推荐。所有投资均有风险，包括本金损失。过往表现不代表未来结果。请自行进行尽职调查，并在做出投资决策前咨询合格的财务顾问。
>
> This research is for educational and informational purposes only and does not constitute investment advice. All investments involve risk. Past performance does not guarantee future results. Always conduct your own due diligence and consult with qualified financial advisors.

---

Begin the investment research on Kweichow Moutai (600519.SH) following the 8-phase due diligence framework tailored for conservative value investing.
```

---

## Example 2: Growth Investing - US Tech Stock

### User's Initial Request

```
User: Should I invest in Nvidia (NVDA)?
```

### Question Refiner's Response

```
I can't tell you whether you should invest in Nvidia or not, but I can help you
conduct thorough investment research on the company.

To create a tailored research plan, I need to understand your context:

**1. What's your investment approach for tech stocks?**
   A. Growth investing - Focus on secular trends and high growth potential
   B. GARP (Growth At Reasonable Price) - Balance growth and valuation
   C. Momentum - Focus on price momentum and trends

**2. How long do you plan to hold?**
   A. Short-term (less than 1 year)
   B. Medium-term (1-3 years)
   C. Long-term (3+ years)

**3. What's most important to you?**
   - AI/data center growth story
   - Competitive positioning in GPUs
   - Valuation (is it overvalued?)
   - Financials and margins
   - Management/vision

**4. Risk tolerance?**
   A. Conservative (avoid volatile stocks)
   B. Balanced (can tolerate some volatility)
   C. Aggressive (comfortable with high volatility)

Please let me know your preferences so I can tailor the research accordingly.
```

### User's Response

```
User:
- Growth investing, believe in AI long-term thesis
- Long-term holder (5+ years)
- Focus: competitive positioning, AI growth potential, management execution
- Risk tolerance: Aggressive (I know tech is volatile)
```

### Key Elements of Generated Prompt

```markdown
### Investment Research Target

**Stock Ticker**: NVDA
**Company Name**: NVIDIA Corporation
**Market**: US (NASDAQ)
**Industry/Sector**: Technology - Semiconductors (AI, Data Center, Gaming)

### Investment Parameters

**Investment Style**: Growth Investing (成长投资)
- Focus: Secular AI trends, market leadership, growth sustainability
- Philosophy: Invest in category leaders with strong moats in growing markets
- Willing to pay premium for growth, but assess whether growth is sustainable

**Holding Period**: Long-term (5+ years)
- Time horizon: Multi-decade AI secular trend
- Focus: Long-term competitive positioning, not near-term volatility
- Research implications: Emphasize moat durability, TAM expansion, technology leadership

**Risk Tolerance**: Aggressive
- Accept: High volatility, high valuation multiple, binary outcomes
- Focus: Upside potential vs. downside scenarios
- Still verify: Financial sustainability, balance sheet strength

### Research Scope

**Must Cover** (All 8 Phases):
1. ✅ Business Foundation (GPU business, data center, AI opportunity)
2. ✅ Industry Analysis (semiconductor cycle, AI adoption trends, competition)
3. ✅ Business Breakdown (revenue by segment, growth drivers, moat)
4. ✅ Financial Quality (growth rates, margins, cash flow)
5. ✅ Governance (Jensen Huang, management team, capital allocation)
6. ✅ Market Sentiment (bull/bear cases on AI trade)
7. ✅ Valuation & Moat (competitive moat in AI hardware, valuation assessment)
8. ✅ Final Synthesis

**Deep Dive Priority**:
- Priority 1: **Competitive Positioning & AI Moat**
  - GPU market share and trends
  - CUDA ecosystem and switching costs
  - Competition from AMD, Intel, custom chips (TPU, Trainium)
  - AI accelerator market leadership sustainability

- Priority 2: **AI Growth Potential**
  - Data center TAM and penetration
  - Generative AI trends and capex from hyperscalers
  - Long-term growth drivers (autonomous driving, robotics, edge AI)

- Priority 3: **Management Execution & Vision**
  - Jensen Huang's track record and vision
  - Strategic decisions (ARM acquisition attempt, Mellanox, software focus)
  - Capital allocation (R&D, M&A, buybacks)

**Can Streamline**:
- Balance sheet strength (Nvidia has strong financials, less emphasis needed)
- Dividend policy (not a dividend-focused investment)

### Output Requirements

**Valuation Methods for Growth Stock**:
- [x] Relative valuation (forward P/E, PEG ratio, PS)
- [x] DCF with aggressive growth assumptions (high growth in years 1-5,
  terminal growth 3-4%)
- [x] User value model (if data available)
- [x] Reverse DCF: What growth rate is implied by current valuation?
- [x] Scenario analysis (base, bull, bear cases)

**Special Requirements**:
- Emphasis on: TAM analysis, competitive moat, technology leadership
- Include: AI adoption curve projections
- Comparison: AMD, Intel, and custom chip competitors
- Data timeframe: 5-10 years (tech evolves rapidly, too long history may be
  less relevant)

### Research Constraints

**Key Questions to Address**:
- Is the AI growth story sustainable or cyclical?
- How defensible is Nvidia's GPU moat against competition?
- Is current pricing in 5+ years of growth?
- What are the key risks (regulation, export controls, geopolitics)?
- What could go wrong (bear case scenarios)?

**Mandatory Bear Case Analysis**:
- Cyclical oversupply risk
- Competition from custom chips
- Export controls to China
- AI winter / disappointing adoption
- Valuation compression risk

---

[Rest of prompt follows similar structure to Example 1, tailored for growth investing]
```

---

## Example 3: Turnaround - Distressed Company

### User's Initial Request

```
User: 分析一下中国恒大 03333.HK，还有救吗？
```

### Question Refiner's Response

```
我可以帮您分析中国恒大的情况，但需要先了解您的目的：

**重要提示**：
中国恒大目前处于债务危机和重组过程中，这属于**高风险的特殊情况投资**，
不是普通的股票分析。

**1. 您的研究目的是什么？**
   A. 考虑买入重组后的股票（高风险，可能归零）
   B. 了解债务重组进展和债权人回收率
   C. 学习案例研究（不打算投资）
   D. 其他

**2. 您的风险承受能力？**
   A. 可以承受本金全部损失（高风险投机）
   B. 只是好奇，不会实际投资
   C. 想了解房地产行业风险

**3. 您希望了解什么？**
   - 债务重组方案和进展
   - 资产质量和清算价值
   - 业务可持续性
   - 行业周期和政策影响
   - 其他

请告诉我您的情况，我会相应调整研究重点。
```

### Key Elements of Generated Prompt

```markdown
### Investment Research Target

**Stock Ticker**: 03333.HK
**Company Name**: China Evergrande Group
**Status**: Distressed / Under debt restructuring
**Market**: Hong Kong
**Industry/Sector**: Real Estate Development

### Investment Parameters

**Investment Style**: Turnaround / Special Situations (困境反转/特殊机会)
- Focus: Distressed debt restructuring, asset liquidation, recovery scenarios
- Philosophy: Binary outcome investing, requires deep analysis of liquidation value
  vs. going-concern value

**Holding Period**: Indeterminate (depends on restructuring timeline)
- Time horizon: Uncertain, could be 1-3 years for restructuring to resolve
- Key events: Debt restructuring approval, asset sales, business stabilization

**Risk Tolerance**: Aggressive / Speculative
- This is a highly distressed situation with significant risk of total loss
- Suitable only for investors who can tolerate 100% capital loss
- Not suitable for conservative investors

### Research Scope

**Must Cover** (Modified 8 Phases for Distressed Situation):

1. ✅ **Business Foundation** (current state, not historical)
   - What businesses are still operating?
   - What assets are being sold or liquidated?
   - Cash flow generation from ongoing operations

2. ✅ **Industry Analysis** (China property crisis context)
   - Industry cycle: property market downturn
   - Policy environment: "three red lines", regulatory tightening
   - Solvency issues across sector

3. ✅ **Business Breakdown** (asset quality, not growth)
   - Asset base and quality (land bank, projects under development)
   - Liability structure (onshore vs. offshore debt, seniority)
   - Liquidation value vs. going-concern value

4. ✅ **Financial Quality** (solvency, not profitability)
   - Debt maturity profile
   - Liquidity and cash resources
   - Solvency ratios and covenants
   - Default scenarios

5. ✅ **Governance** (critical for distressed situations)
   - Management role in restructuring
   - Creditor committee and negotiations
   - Government involvement and support

6. ✅ **Market Sentiment** (critical)
   - Creditor positions and negotiations
   - Government stance on bailouts vs. liquidation
   - Market perception of recovery probability

7. ✅ **Valuation** (distressed valuation methods)
   - Liquidation value (fire sale vs. orderly liquidation)
   - Going-concern value (if restructuring succeeds)
   - Recovery scenarios for different security classes
   - Option value of restructuring success

8. ✅ **Final Synthesis** (binary outcomes)
   - Signal rating: 🟡🟡🟡 Speculative Hold / 🔴🔴 Avoid
   - Probability-weighted scenarios (restructuring success vs. liquidation)
   - Risk/reward assessment

**Deep Dive Priority**:
- Priority 1: **Solvency and Liquidity**
  - Can the company meet near-term debt obligations?
  - What's the cash runway?
  - What assets can be sold quickly?

- Priority 2: **Restructuring Progress**
  - What's the current restructuring plan?
  - Creditor support level
  - Government position
  - Timeline and milestones

- Priority 3: **Recovery Scenarios**
  - Liquidation value analysis
  - Going-concern value if restructuring succeeds
  - Probability-weighted expected value
  - Equity recovery rate under different scenarios

### Output Requirements

**Valuation Methods for Distressed Situation**:
- [x] Liquidation value (asset fire sale value)
- [x] Orderly liquidation value (12-24 month sales process)
- [x] Going-concern DCF (highly uncertain, wide range)
- [x] Recovery rate analysis (cents on dollar for equity)
- [x] Option value (equity as option on assets after debt repayment)
- [x] Scenario analysis with probabilities

**Special Requirements**:
- Emphasis on: Solvency, liquidity, restructuring progress
- Include: Probability-weighted expected value
- Key metrics: Debt/EBITDA (not meaningful due to losses), interest coverage,
  debt maturity profile, cash runway
- Timeline: Restructuring milestones and expected resolution date

### Research Constraints

**Key Questions to Address**:
- Can the company survive without government bailout?
- What's the liquidation value vs. going-concern value?
- What's the recovery rate for equity holders under restructuring?
- What's the probability of successful restructuring vs. liquidation?
- What are the key milestones and events to watch?

**Mandatory Analysis**:
- Bear case: Liquidation, equity wiped out
- Base case: Restructuring with significant dilution, partial recovery
- Bull case: Successful restructuring, business stabilization, equity recovery
- Probability assessment for each scenario

**Data Sources**:
- Restructuring plans and creditor communications
- Legal filings and court documents
- Government statements and policy announcements
- Asset sale announcements and valuations
- Industry distress comparisons

**Risk Warnings**:
- ⚠️ High probability of total equity loss
- ⚠️ Highly uncertain outcome
- ⚠️ Binary outcome (success or failure)
- ⚠️ Long restructuring timeline with little clarity
- ⚠️ Not suitable for risk-averse investors

---

[Rest of prompt follows structure, but emphasizes distressed company analysis]
```

---

## Example 4: Dividend Investing - High-Yield Stock

### User's Initial Request

```
User: 我想买个收息股，看好烟草行业的龙头，帮我研究一下
```

### Question Refiner's Response

```
我可以帮您研究烟草行业的收息股。让我先了解一下您的需求：

**1. 您说的烟草龙头是指？**
   A. 中烟香港 06055.HK (中国烟草旗下)
   B. 其他具体公司（请告知股票代码）
   C. 想要我推荐整个行业的收息机会

**2. 关于收息投资，您最看重？**
   A. 股息率越高越好（可能接受股价下跌）
   B. 股息增长稳定性（即使当前收益率低一些）
   C. 股息安全性和可持续性
   D. 综合考虑收益率、安全性、增长性

**3. 您的投资期限？**
   - 短期（1-2年，主要为了收息）
   - 中长期（3-5年，希望股息增长）
   - 长期持有（10年以上，复利增长）

**4. 风险偏好？**
   - 可以接受行业政策风险
   - 希望稳健为主，避免政策风险高的行业

请告诉我更多信息，我会为您定制研究计划。
```

### Key Elements of Generated Prompt

```markdown
### Investment Research Target

**Stock Ticker**: [User-specified tobacco stock]
**Market**: Hong Kong (or A-share)
**Industry**: Tobacco / Tobacco Distribution

### Investment Parameters

**Investment Style**: Dividend / Income Investing (红利/收益投资)
- Focus: Dividend yield sustainability, payout ratio, dividend growth
- Philosophy: Buy cash-generating businesses that return capital to shareholders
- Priority: Income generation over capital appreciation (but both matter)

**Holding Period**: Medium to Long-term (3-10+ years)
- Time horizon: Multi-year dividend collection
- Emphasis: Dividend sustainability and growth, not just current yield

**Risk Tolerance**: Conservative to Balanced
- Require: Stable cash flows, proven business model
- Prefer: Defensive industries, consistent earnings
- Avoid: High payout ratios that threaten dividend sustainability

### Research Scope

**Must Cover** (All 8 Phases with Dividend Emphasis):

1. ✅ Business Foundation (tobacco business model, regulations)
2. ✅ Industry Analysis (tobacco industry trends, regulatory risks, volumes)
3. ✅ Business Breakdown (revenue sources, cash generation, payout capacity)
4. ✅ Financial Quality (dividend critical metrics: FCF, payout ratio, debt)
5. ✅ Governance (capital allocation, dividend policy, shareholder returns)
6. ✅ Market Sentiment (dividend sustainability concerns, regulatory risks)
7. ✅ Valuation (dividend discount model, yield vs. alternatives)
8. ✅ Final Synthesis

**Deep Dive Priority**:
- Priority 1: **Dividend Sustainability**
  - Payout ratio analysis (dividends / FCF, dividends / net income)
  - FCF generation and stability
  - Debt service capacity and leverage
  - Dividend coverage ratio

- Priority 2: **Industry and Regulatory Risks**
  - Tobacco control policies (tax increases, packaging restrictions, smoking bans)
  - Volume decline trends (can price increases offset volume declines?)
  - Regulatory risks to business model

- Priority 3: **Valuation vs. Yield**
  - Dividend yield vs. historical average
  - Dividend yield vs. alternative income investments (bonds, real estate)
  - Dividend growth rate and sustainability
  - Dividend discount model (DDM)

**Can Streamline**:
- Growth analysis (tobacco is a slow-growth or declining volume industry)
- Competitive moat (tobacco has natural moat due to regulation and addiction)

### Output Requirements

**Valuation Methods for Dividend Stock**:
- [x] Dividend Discount Model (DDM)
- [x] Dividend yield vs. historical average
- [x] Yield vs. peer comparison
- [x] Payout ratio analysis and sustainability
- [x] FCF dividend coverage
- [x] Total return projection (dividend yield + dividend growth + capital appreciation)

**Special Requirements**:
- Emphasis on: Cash flow, dividend sustainability, regulatory risks
- Include: Dividend history and growth rate
- Key metrics: Dividend yield, payout ratio, FCF/dividend coverage, debt/EBITDA,
  dividend growth rate
- Scenario analysis: What if payout ratio increases? What if earnings decline?

### Research Constraints

**Key Questions to Address**:
- Is the dividend sustainable? (FCF coverage, payout ratio)
- Can the dividend grow? (earnings growth, payout buffer)
- What are the key risks to dividends? (regulation, volume decline, leverage)
- Is the yield attractive vs. alternatives? (bonds, real estate, other dividend stocks)
- What's the total return potential? (yield + growth + valuation change)

**Mandatory Dividend Analysis**:
- 5-10 year dividend history (has dividend ever been cut?)
- Payout ratio trend (is it increasing or stable?)
- FCF generation vs. dividend payments
- Dividend policy and management commitment
- Industry dividend comparison

**Risk Analysis**:
- Regulatory risk (tobacco control policies)
- Volume decline risk (can price increases offset?)
- Financial risk (leverage, refinancing risk)
- Currency risk (if investing in foreign market)

---

[Rest of prompt emphasizes dividend investing analysis]
```

---

## Example 5: Incomplete Information - How to Follow Up

### User's Initial Request

```
User: Research Tesla TSLA
```

### Question Refiner's Response

```
I'd be happy to help you research Tesla (TSLA). To create a tailored investment
research plan, I need to understand your context:

**1. What's your investment approach for Tesla?**
   Are you viewing Tesla as:
   A. A growth stock (EV revolution, autonomous driving potential)
   B. A mature auto manufacturer (focus on profitability and margins)
   C. A technology company (software, FSD, robotics)
   D. Not sure yet

**2. How long do you plan to hold?**
   A. Short-term (<1 year)
   B. Medium-term (1-3 years)
   C. Long-term (3+ years)
   D. Not sure

**3. What aspects are most important to you?**
   - EV market share and competitive position
   - Autonomous driving (FSD) progress
   - Financials and profitability
   - Elon Musk and management
   - Valuation (is it overvalued?)
   - Energy storage and solar business
   - Other

**4. Risk tolerance?**
   A. Conservative (avoid high volatility)
   B. Balanced
   C. Aggressive (comfortable with high volatility and binary outcomes)

Please share your preferences so I can tailor the research accordingly. Even if
you're not sure about some questions, telling me what you DO know will help.
```

### If User Says "I don't know / I'm new to investing"

```
No problem! Let me help you figure this out.

**To determine your investment style, think about**:

1. **What's more important to you?**
   - Buying companies growing fast, even if expensive (Growth)
   - Buying undervalued companies (Value)
   - Receiving regular dividend income (Income)

2. **How would you react if Tesla stock dropped 30%?**
   - Panic and sell (suggests conservative approach, Tesla may not be suitable)
   - Hold if fundamentals are strong (balanced)
   - Buy more if the story is intact (aggressive)

3. **What are you hoping for?**
   - Quick gains (short-term trading - this research framework is not ideal)
   - Long-term wealth creation (buy and hold for 5+ years)

**Based on Tesla specifically**:
- Tesla is a **high-volatility, high-growth stock** best suited for:
  - Growth investors
  - Long-term holders (3-5+ years)
  - Aggressive risk tolerance

- If you're conservative or have low risk tolerance, Tesla may not be suitable.

Would you like me to generate a **balanced research prompt** that covers all bases,
or would you prefer to think about your investment approach first and then come back?
```

---

## Summary of Key Examples

| Investment Style | Key Emphasis | Valuation Methods | Risk Considerations |
|-----------------|--------------|-------------------|---------------------|
| **Value** | Intrinsic value, margin of safety, moat | P/B, EV/EBITDA, DCF (conservative) | Overpaying, value traps, moat erosion |
| **Growth** | TAM, competitive positioning, growth sustainability | PEG, DCF (aggressive), user value | Valuation compression, growth slowdown, competition |
| **Turnaround** | Liquidity, solvency, restructuring, catalysts | Liquidation value, option value, recovery scenarios | Total loss, binary outcome, timeline uncertainty |
| **Dividend** | Yield sustainability, payout ratio, FCF generation | DDM, yield vs. alternatives, FCF coverage | Dividend cuts, payout ratio too high, regulatory risks |

---

## Notes

- All examples maintain the principle of **NOT providing investment advice**
- Each example emphasizes **different aspects** based on investment style
- **Risk tolerance** is always incorporated into constraints and warnings
- **Time horizon** affects which phases are prioritized
- **User's stated concerns** are always addressed specifically in the research prompt
- **Disclaimers** are always included to remind users this is research assistance, not financial advice
