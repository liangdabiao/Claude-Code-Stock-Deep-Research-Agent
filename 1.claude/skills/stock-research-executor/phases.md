# Stock Research Executor - Phase-by-Phase Instructions

This document provides detailed instructions for each of the 8 phases of investment due diligence, including specific research objectives, agent deployment strategies, and output templates.

## Phase 1: Business Foundation (公司事实底座)

### Objective

Establish a factual understanding of what the company does, how it makes money, and its position in the industry value chain.

### Research Goals

1. Understand the core business model and product/service offerings
2. Identify revenue and profit sources by segment
3. Analyze customer base and use cases
4. Determine position in industry value chain
5. Track recent strategic changes (3-5 years)

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 1A: Core Business and Products

**Objective**: Map the company's business model and product/service portfolio

**Key Questions**:
- What products/services does the company offer?
- What are the main business segments?
- How does each segment make money?
- What's the revenue mix by segment?

**Data to Find**:
- Product/service descriptions
- Business segment breakdown (with revenue percentages)
- Main revenue drivers for each segment
- Product/service生命周期 (growth, mature, declining)

**Sources to Prioritize**:
- Annual reports (business overview section)
- Company website and investor presentations
- Segment reporting in financial statements

**Output Structure**:
```markdown
## Core Business and Products

**Business Model**: [1-2 sentence description]

**Product/Service Portfolio**:
| Segment | Description | Revenue | % of Total | Growth Trend |
|---------|-------------|---------|------------|--------------|
| [Segment 1] | [description] | [amount] | [%] | [trend] |
| [Segment 2] | [description] | [amount] | [%] | [trend] |

**Key Insights**:
- [Insight 1]
- [Insight 2]
```

---

#### Agent 1B: Revenue and Profit Composition

**Objective**: Understand how the company generates revenue and profit

**Key Questions**:
- What are the main revenue streams?
- Which segments/products are most profitable?
- How has revenue mix changed over time?
- Are there any high-revenue but low-profit segments?

**Data to Find**:
- Revenue breakdown by segment/product/geography
- Gross margin by segment
- Operating profit by segment
- 3-5 year trend analysis

**Sources to Prioritize**:
- Annual reports (segment reporting)
- Financial statement notes
- Management commentary (earnings calls)

**Output Structure**:
```markdown
## Revenue and Profit Composition

**Revenue Mix** (Most Recent Year):
| Source | Revenue | % of Total | YoY Growth |
|--------|---------|------------|------------|
| [Source 1] | [amount] | [%] | [%] |
| [Source 2] | [amount] | [%] | [%] |

**Profit Contribution**:
| Segment | Gross Margin | Operating Margin | Profit % |
|---------|--------------|------------------|----------|
| [Segment 1] | [%] | [%] | [%] |
| [Segment 2] | [%] | [%] | [%] |

**Key Insights**:
- Most profitable segment: [name] with [margin]%
- [Any mismatches: high revenue but low profit, or vice versa]
```

---

#### Agent 1C: Customers and Value Chain Position

**Objective**: Identify who the company sells to and where it sits in the value chain

**Key Questions**:
- Who are the main customers (industries, demographics, geographies)?
- Is the customer base concentrated or diversified?
- What's the company's position in the value chain (upstream, midstream, downstream)?
- Does it have pricing power or is it a price taker?

**Data to Find**:
- Customer segments (B2B vs B2C, industries, geographies)
- Top customers (if disclosed)
- Distribution channels (direct, indirect, online, offline)
- Value chain position and bargaining power

**Sources to Prioritize**:
- Annual reports (customer and market sections)
- Industry reports
- Company investor presentations

**Output Structure**:
```markdown
## Customers and Value Chain Position

**Customer Segments**:
| Segment | Description | Revenue % | Growth |
|---------|-------------|-----------|--------|
| [Segment 1] | [description] | [%] | [trend] |
| [Segment 2] | [description] | [%] | [trend] |

**Customer Concentration**:
- Top 5/10 customers: [X]% of revenue (if disclosed)
- Concentration risk: [High/Medium/Low]

**Value Chain Position**:
- Position: [upstream/midstream/downstream/integrated]
- Bargaining power: [strong/moderate/weak]
- Reason: [explanation]

**Distribution Channels**:
- Direct: [%] - [description]
- Indirect/distributors: [%] - [description]
- Online/digital: [%] - [description]
```

---

#### Agent 1D: Recent Strategic Changes (3-5 Years)

**Objective**: Track significant strategic shifts, pivots, or transformations

**Key Questions**:
- What major strategic initiatives has the company undertaken?
- Have there been business model changes?
- Any M&A, divestitures, or restructurings?
- Technology investments or digital transformation?
- Market expansion or contraction?

**Data to Find**:
- Major acquisitions or divestitures
- New product launches or discontinuations
- Market entry/exit decisions
- Strategic partnerships or JVs
- Organizational restructuring

**Sources to Prioritize**:
- Annual reports (MD&A section, past 3-5 years)
- Press releases and announcements
- News archives for major events

**Output Structure**:
```markdown
## Recent Strategic Changes (Past 3-5 Years)

**Timeline of Major Events**:
| Year | Event | Impact | Status |
|------|-------|--------|--------|
| [Year] | [event] | [impact] | [ongoing/completed/failed] |
| [Year] | [event] | [impact] | [status] |

**Strategic Initiatives**:
1. **[Initiative 1]**: [description]
   - Launched: [year]
   - Investment: [amount if known]
   - Results to date: [description]

2. **[Initiative 2]**: [description]
   - ...

**Overall Assessment**:
- Strategy is [consistent/evolving/unclear]
- Success rate: [high/mixed/low]
```

---

### Phase 1 Synthesis and Report Generation

After all 4 agents complete:

1. **Compile findings** into coherent narrative
2. **Create summary table** of key business facts
3. **Identify any contradictions** between sources
4. **Generate Phase 1 report**: `01_Business_Foundation.md`

**Report Template**:
```markdown
# Phase 1: Business Foundation

## Executive Summary
[2-3 paragraph overview]

## 1.1 Core Business and Products
[Content from Agent 1A]

## 1.2 Revenue and Profit Composition
[Content from Agent 1B]

## 1.3 Customers and Value Chain Position
[Content from Agent 1C]

## 1.4 Recent Strategic Changes
[Content from Agent 1D]

## Key Takeaways
- [Takeaway 1]
- [Takeaway 2]
- [Takeaway 3]

## Red Flags Identified
- [Any concerning findings]
- [Areas requiring further investigation]

## Sources
[List all sources with A-E ratings]
```

---

## Phase 2: Industry Analysis (行业周期分析)

### Objective

Assess industry dynamics, competitive landscape, and where the industry sits in the business cycle.

### Research Goals

1. Determine industry cycle stage (recovery/expansion/recession/contraction)
2. Analyze supply-demand dynamics
3. Assess competitive landscape and concentration
4. Identify key industry drivers and trends
5. Evaluate policy and external factors

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 2A: Industry Cycle Stage

**Objective**: Determine where the industry is in the business cycle

**Key Questions**:
- Is the industry in recovery, expansion, recession, or contraction?
- What's the evidence (capacity utilization, inventory levels, pricing)?
- How long has the current cycle phase lasted?
- What typically triggers cycle inflection points?

**Data to Find**:
- Industry production/output trends
- Capacity utilization rates
- Inventory levels (raw materials, work-in-progress, finished goods)
- Pricing trends (inflation/deflation)
- CapEx trends (expansion or contraction)

**Sources to Prioritize**:
- Industry association reports
- Government statistics (bureau of statistics, industry ministry)
- Research reports (McKinsey, BCG, Bain - verify with primary sources)
- Company management commentary

**Output Structure**:
```markdown
## Industry Cycle Stage Assessment

**Current Stage**: [Recovery/Expansion/Recession/Contraction]

**Evidence**:
| Indicator | Current Level | Trend | Implication |
|-----------|--------------|-------|-------------|
| Capacity Utilization | [%] | [rising/stable/falling] | [implication] |
| Inventory Levels | [high/normal/low] | [trend] | [implication] |
| Pricing | [inflation/stable/deflation] | [trend] | [implication] |
| CapEx | [expansion/maintenance] | [trend] | [implication] |

**Cycle Duration**:
- Current phase started: [year/quarter]
- Typical cycle length: [X] years
- Time until next inflection: [estimate if possible]

**Leading Indicators** (1-2 year forward-looking):
1. [Indicator 1]: [what it signals]
2. [Indicator 2]: [what it signals]

**Lagging Indicators** (confirms what already happened):
1. [Indicator 1]: [what it confirms]
2. [Indicator 2]: [what it confirms]
```

---

#### Agent 2B: Supply-Demand Dynamics

**Objective**: Analyze supply and demand fundamentals

**Key Questions**:
- What's driving demand? (secular trends, cyclical factors, policy)
- What's the supply situation? (capacity, new entrants, constraints)
- Is the market in balance, oversupply, or shortage?
- What's the medium-term outlook (1-3 years)?

**Data to Find**:
- Demand drivers and trends
- Supply capacity and utilization
- Import/export dynamics
- New capacity announcements
- Order backlogs or delivery times

**Sources to Prioritize**:
- Industry reports
- Company disclosures (if industry participant)
- Trade publications
- Government trade data

**Output Structure**:
```markdown
## Supply-Demand Analysis

**Demand Drivers**:
| Driver | Type | Strength | Trend |
|--------|------|----------|-------|
| [Driver 1] | [secular/cyclical/policy] | [strong/moderate/weak] | [growing/stable/declining] |
| [Driver 2] | [type] | [strength] | [trend] |

**Supply Situation**:
- Current capacity: [amount]
- Capacity utilization: [%]
- New capacity coming online: [amount] by [year]
- Supply constraints: [any limitations]

**Market Balance**:
- Current: [surplus/balance/shortage]
- Gap: [amount if quantified]
- 12-24 month outlook: [improving/deteriorating/stable]

**Key Risks to Supply-Demand Balance**:
- Risk 1: [description]
- Risk 2: [description]
```

---

#### Agent 2C: Competitive Landscape and Concentration

**Objective**: Map the competitive environment

**Key Questions**:
- Who are the main competitors?
- What's the market structure (fragmented, oligopoly, monopoly)?
- What are the market shares (CR5, HHI if available)?
- How intense is competition? (price wars, innovation, differentiation)
- What are the barriers to entry/exit?

**Data to Find**:
- Major competitors and market shares
- Industry concentration (CR5, CR10)
- Competitive dynamics (price competition, innovation, consolidation)
- Recent M&A activity
- Barriers to entry (regulatory, capital, technology, brand)

**Sources to Prioritize**:
- Industry reports
- Company annual reports (competitive landscape sections)
- Antitrust/regulatory filings
- News archives for M&A

**Output Structure**:
```markdown
## Competitive Landscape

**Market Structure**: [Fragmented/Oligopoly/Dominant player/Monopoly]

**Major Competitors**:
| Rank | Company | Market Share | Key Strengths |
|------|---------|--------------|---------------|
| 1 | [Company] | [%] | [strengths] |
| 2 | [Company] | [%] | [strengths] |
| 3 | [Company] | [%] | [strengths] |

**Industry Concentration**:
- CR5 (top 5 share): [X]%
- Concentration level: [high/medium/low]
- Trend: [consolidating/stable/fragmenting]

**Competitive Dynamics**:
- Primary basis of competition: [price/quality/innovation/service/brand]
- Intensity: [fierce/moderate/limited]
- Recent M&A: [description of consolidation trends]

**Barriers to Entry**:
| Barrier Type | Level | Description |
|--------------|-------|-------------|
| Capital | [high/medium/low] | [description] |
| Regulatory | [high/medium/low] | [description] |
| Technology | [high/medium/low] | [description] |
| Brand/Network | [high/medium/low] | [description] |

**Barriers to Exit**:
- Sunk costs: [high/medium/low]
- Regulatory constraints: [yes/no]
- Union/employment issues: [yes/no]
```

---

#### Agent 2D: Policy and External Variables

**Objective**: Identify key external factors affecting the industry

**Key Questions**:
- What government policies impact this industry? (subsidies, taxes, regulations)
- What macroeconomic factors matter? (interest rates, exchange rates, inflation)
- What technological disruptions are looming?
- What social or demographic trends are relevant?
- What geopolitical risks exist?

**Data to Find**:
- Relevant regulations and policy changes
- Government support or restrictions
- Macro sensitivity (interest rate, currency, commodity exposure)
- Technology disruptions
- ESG and social trends

**Sources to Prioritize**:
- Government websites and policy documents
- Regulatory filings
- Industry association policy comments
- News for recent policy changes

**Output Structure**:
```markdown
## Policy and External Variables

**Government Policies**:
| Policy | Impact | Direction | Timeline |
|--------|--------|----------|----------|
| [Policy 1] | [positive/negative/neutral] | [tightening/loosing/stable] | [immediate/gradual] |
| [Policy 2] | [impact] | [direction] | [timeline] |

**Macroeconomic Sensitivities**:
| Factor | Sensitivity | Current Trend | Impact |
|--------|-------------|---------------|--------|
| Interest Rates | [high/medium/low] | [rising/stable/falling] | [impact description] |
| Exchange Rates | [high/medium/low] | [trend] | [impact] |
| Inflation | [high/medium/low] | [trend] | [impact] |
| [Commodity] | [high/medium/low] | [trend] | [impact] |

**Technological Disruptions**:
- Disruption 1: [description] - [timing] - [impact level]
- Disruption 2: [description] - [timing] - [impact level]

**ESG/Social Trends**:
- Trend 1: [description] - [impact]
- Trend 2: [description] - [impact]

**Geopolitical Risks**:
- Risk 1: [description] - [probability] - [potential impact]
- Risk 2: [description] - [probability] - [potential impact]

**Structural vs. Cyclical Factors**:
- Structural (long-term): [factors]
- Cyclical (short-term): [factors]
```

---

### Phase 2 Synthesis

**Report Template**: `02_Industry_Analysis.md`

Include:
- Industry cycle stage with evidence
- Supply-demand outlook
- Competitive positioning map
- External risk assessment
- Investment implications based on industry cycle

---

## Phase 3: Business Breakdown (业务拆解)

### Objective

Understand the economics of how the company makes money at a granular level.

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 3A: Business Segment Deep Dive

**Objective**: Detailed financial analysis of each business segment

**Key Questions**:
- What's the revenue and profit contribution of each segment?
- Which segments are growing vs. declining?
- Which segments have the best margins?
- Are there cross-subsidies (profitable segments funding unprofitable ones)?

**Data to Find**:
- Segment revenue, margins, growth (5-year history)
- Segment capital allocation (capex by segment)
- Intersegment transactions and transfer pricing
- Segment ROIC

**Output Structure**:
```markdown
## Business Segment Analysis

**Segment Financials** (Most Recent Year):
| Segment | Revenue | Growth | Gross Margin | Op Margin | ROIC |
|---------|---------|--------|--------------|-----------|------|
| [Seg 1] | [amount] | [%] | [%] | [%] | [%] |
| [Seg 2] | [amount] | [%] | [%] | [%] | [%] |

**5-Year Growth Trends**:
| Segment | CAGR | Trend | Driver |
|---------|------|-------|--------|
| [Seg 1] | [%] | [accelerating/stable/decelerating] | [driver] |
| [Seg 2] | [%] | [trend] | [driver] |

**Key Insights**:
- Core profit driver: [segment]
- Hidden gems: [segments with high potential but overlooked]
- Drag on performance: [segments losing money or growing slowly]
```

---

#### Agent 3B: Profit Engine and Economics

**Objective**: Understand the unit economics and profit drivers

**Key Questions**:
- How does the company make money on a per-unit basis?
- What are the key cost components?
- Are there economies of scale?
- What's the incremental margin on new business?

**Data to Find**:
- Unit economics (if disclosed)
- Cost structure (fixed vs. variable)
- Operating leverage
- Gross margin trends and drivers

**Output Structure**:
```markdown
## Profit Engine Analysis

**One-Sentence Business Essence**:
[Company makes money by: [what it sells] → [to whom] → [why they can charge a premium / have cost advantage]]

**Cost Structure**:
| Cost Category | % of Revenue | Type | Trend |
|---------------|--------------|------|-------|
| [COGS component 1] | [%] | [fixed/variable] | [trend] |
| [COGS component 2] | [%] | [fixed/variable] | [trend] |
| SG&A | [%] | [mostly fixed/mixed] | [trend] |
| R&D | [%] | [mostly fixed/discretionary] | [trend] |

**Economies of Scale**:
- Scale advantages: [yes/no/partial]
- Evidence: [what shows scale benefits]
- Incremental margin on new revenue: [X]%

**Pricing Power**:
- Ability to raise prices: [strong/moderate/weak/none]
- Evidence: [historical price increases, margin stability]
- Customer price sensitivity: [high/medium/low]
```

---

#### Agent 3C: Customer and Pricing Analysis

**Objective**: Understand customer economics and pricing power

**Key Questions**:
- Who are the core customers and how valuable are they?
- How sticky are customers? (churn, switching costs)
- Does the company have pricing power?
- How are prices determined? (market-driven, cost-plus, value-based)

**Data to Find**:
- Customer retention/churn rates
- Customer acquisition vs. retention cost
- Historical pricing changes
- Customer concentration (top 5/10 customers)
- Contract structure (recurring vs. one-off)

**Output Structure**:
```markdown
## Customer and Pricing Analysis

**Customer Base**:
- Total customers: [number if disclosed]
- Customer segments: [B2B/B2C mix]
- Customer concentration: Top 5 = [X]%, Top 10 = [X]%
- Churn rate: [X]% (if disclosed)

**Customer Stickiness**:
| Factor | Level | Evidence |
|--------|-------|----------|
| Switching Costs | [high/medium/low] | [evidence] |
| Contract Length | [long/medium/short] | [evidence] |
| Renewal Rate | [%] | [source] |
| Customer Satisfaction | [high/medium/low] | [evidence] |

**Pricing Power Assessment**:
- Historical price changes: [list significant price increases/decreases]
- Price vs. competitors: [premium/parity/discount]
- Margin stability: [stable/volatile - indicates pricing power]
- Customer pushback: [high/medium/low resistance to price hikes]

**Pricing Strategy**:
- Approach: [market-driven/cost-plus/value-based/dynamic]
- Flexibility: [high/medium/low]
- Price competition intensity: [fierce/moderate/limited]
```

---

#### Agent 3D: Subsidiaries and Non-Core Items

**Objective**: Analyze non-core businesses, investments, and one-time items

**Key Questions**:
- What subsidiaries or investments does the company have?
- What's the contribution from non-operating items? (investment income, asset sales, government subsidies)
- Are there hidden assets or liabilities?
- What non-core activities could be divested?

**Data to Find**:
- List of major subsidiaries and associates
- Investment income and gains
- Asset sales and one-time gains
- Government subsidies and grants
- Non-operating items in P&L

**Output Structure**:
```markdown
## Subsidiaries and Non-Core Items

**Major Subsidiaries/Associates**:
| Entity | Business | Ownership | Contribution | Strategy |
|--------|----------|-----------|--------------|----------|
| [Sub 1] | [description] | [%] | [profit/loss] | [core/strategic/non-core] |
| [Sub 2] | [description] | [%] | [profit/loss] | [core/strategic/non-core] |

**Non-Operating Income** (Recent Year):
| Source | Amount | % of Net Income | Sustainability |
|--------|--------|-----------------|----------------|
| Investment Income | [amount] | [%] | [recurring/one-time] |
| Asset Sales | [amount] | [%] | [recurring/one-time] |
| Government Subsidies | [amount] | [%] | [recurring/declining/one-time] |
| [Other] | [amount] | [%] | [sustainability] |

**Hidden Assets**:
- Asset 1: [description] - [estimated value if available]
- Asset 2: [description] - [estimated value if available]

**Hidden Liabilities/Risks**:
- Risk 1: [description]
- Risk 2: [description]

**Core vs. Non-Core Assessment**:
- True core business profits: [amount] (excluding non-core)
- Non-core contribution to net income: [X]%
- Assessment: [core business strong/weak/non-core is critical/distraction]
```

---

### Phase 3 Synthesis

**Report Template**: `03_Business_Breakdown.md`

Include:
- One-sentence business essence
- Segment profitability matrix
- Customer economics summary
- Assessment of sustainable vs. non-sustainable profits

---

## Phase 4: Financial Quality (财务质量)

### Objective

Assess the quality of earnings, financial health, and sustainability of the business model.

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 4A: Key Metrics and Trend Analysis

**Objective**: Calculate and analyze key financial metrics over 5-10 years

**Key Questions**:
- What are the growth rates (revenue, net income, CAGR)?
- What's the profitability (margins, ROE, ROIC)?
- How have metrics trended over time?
- Are there any inflection points or concerning trends?

**Data to Find**:
- 5-10 year history of: revenue, net income, operating income, gross margin, net margin, ROE, ROIC
- Calculate CAGR (3-year, 5-year, 10-year if available)
- Volatility of metrics

**Output Structure**:
```markdown
## Key Financial Metrics (5-10 Year History)

**Growth Metrics**:
| Metric | 3Y CAGR | 5Y CAGR | 10Y CAGR | Trend |
|--------|---------|---------|----------|-------|
| Revenue | [%] | [%] | [%] | [accelerating/stable/decelerating] |
| Net Income | [%] | [%] | [%] | [trend] |
| Operating Income | [%] | [%] | [%] | [trend] |

**Profitability Metrics**:
| Metric | Latest | 5Y Avg | 10Y Avg | Trend |
|--------|--------|--------|---------|-------|
| Gross Margin | [%] | [%] | [%] | [improving/stable/declining] |
| Operating Margin | [%] | [%] | [%] | [trend] |
| Net Margin | [%] | [%] | [%] | [trend] |
| ROE | [%] | [%] | [%] | [trend] |
| ROIC | [%] | [%] | [%] | [trend] |

**DuPont Analysis (ROE Decomposition)**:
- ROE = Net Margin × Asset Turnover × Financial Leverage
- Net Margin: [%] - [trend]
- Asset Turnover: [X] - [trend]
- Financial Leverage: [X] - [trend]
- Driver of ROE changes: [which component]

**Key Inflection Points**:
- [Year]: [event/trend change] - [impact]
```

---

#### Agent 4B: Cash Flow Quality

**Objective**: Assess earnings quality through cash flow analysis

**Key Questions**:
- Do earnings convert to cash? (OCF/NI, FCF/NI)
- Are there red flags in cash flow? (consistent shortfall, working capital drag)
- What's the free cash flow generation?
- How is cash being used? (capex, dividends, buybacks, debt repayment)

**Data to Find**:
- Operating cash flow (OCF), free cash flow (FCF) for 5-10 years
- OCF/Net Income ratio
- FCF/Net Income ratio
- Cash flow from operations vs. net income reconciliation
- Use of cash (capex, dividends, buybacks, M&A, debt)

**Output Structure**:
```markdown
## Cash Flow Quality Analysis

**Cash Flow vs. Earnings**:
| Year | Net Income | OCF | OCF/NI | FCF | FCF/NI |
|------|-----------|-----|--------|-----|--------|
| [Year] | [amount] | [amount] | [ratio] | [amount] | [ratio] |
| [Year] | [amount] | [amount] | [ratio] | [amount] | [ratio] |

**Assessment**:
- Average OCF/NI (5-year): [ratio]
  - [Excellent if > 1.0, Good if 0.8-1.0, Concerning if < 0.8, Red flag if < 0.5]
- Average FCF/NI (5-year): [ratio]
- Trend: [improving/stable/deteriorating]

**Red Flags**:
- [ ] Persistent OCF < Net Income (low quality earnings)
- [ ] Declining OCF/NI ratio (deteriorating quality)
- [ ] Large working capital swings (volatile cash conversion)
- [ ] High capex eating into cash flow (low FCF)

**Free Cash Flow Uses** (5-Year Total):
| Use | Amount | % of FCF |
|-----|--------|----------|
| Capex (maintenance) | [amount] | [%] |
| Capex (growth) | [amount] | [%] |
| Dividends | [amount] | [%] |
| Buybacks | [amount] | [%] |
| M&A | [amount] | [%] |
| Debt Repayment | [amount] | [%] |

**FCF Generation Capacity**:
- [Strong/Adequate/Weak]
- Sustainable dividend/buyback capacity: [yes/no/partially]
```

---

#### Agent 4C: Anomaly Screening (Red Flags)

**Objective**: Identify financial irregularities or accounting concerns

**Key Questions**:
- Are there any unusual items in the financials?
- Are receivables or inventory growing faster than sales?
- Are there frequent one-time items or accounting changes?
- Any related party transactions or off-balance sheet items?
- Any audit concerns or going doubt issues?

**Data to Find**:
- Receivables growth vs. revenue growth
- Inventory growth vs. revenue growth
- Non-recurring items (frequency, magnitude)
- Accounting changes or restatements
- Related party transactions
- Audit opinion (unqualified, qualified, going concern)
- Off-balance sheet items

**Output Structure**:
```markdown
## Financial Anomaly Screening

**Working Capital Trends**:
| Item | Growth (3Y) | Revenue Growth (3Y) | Delta | Assessment |
|------|------------|---------------------|-------|------------|
| Receivables | [%] | [%] | [%] | [OK/concerning] |
| Inventory | [%] | [%] | [%] | [OK/concerning] |
| Payables | [%] | [%] | [%] | [OK/concerning] |

**Red Flag Indicators**:
| Indicator | Status | Evidence | Concern Level |
|-----------|--------|----------|---------------|
| Receivables growing faster than sales | [yes/no] | [data] | [high/medium/low/n/a] |
| Inventory buildup | [yes/no] | [data] | [level] |
| Rising days sales outstanding (DSO) | [yes/no] | [data] | [level] |
| Frequent one-time items | [yes/no] | [list] | [level] |
| Accounting changes | [yes/no] | [description] | [level] |
| Related party transactions | [yes/no] | [description] | [level] |
| Audit concerns | [yes/no] | [description] | [level] |

**Accruals Analysis** (Balance Sheet Accruals):
- Accruals = (ΔCurrent Assets - ΔCash) - (ΔCurrent Liabilities - ΔShort-term Debt)
- High accruals may indicate low earnings quality

**Non-Recurring Items** (Past 3-5 Years):
| Year | Item | Amount | Impact on NI | Type |
|------|------|--------|--------------|------|
| [Year] | [item] | [amount] | [%] | [gain/charge/restructuring] |

**Overall Assessment**:
- Financial quality: [Excellent/Good/Fair/Poor]
- Red flags: [number] significant, [number] minor
- Key concern: [biggest red flag if any]
```

---

#### Agent 4D: Peer Comparison

**Objective**: Benchmark financial metrics against competitors

**Key Questions**:
- How does the company compare to peers on key metrics?
- Is it above or below average?
- Are there any significant outliers?
- What explains the differences?

**Data to Find**:
- Peer list (3-5 main competitors)
- Key metrics comparison: growth, margins, ROE, valuation multiples
- Differences in business models that explain metric differences

**Output Structure**:
```markdown
## Peer Comparison

**Peer Group**:
[Company] vs. [Peer 1], [Peer 2], [Peer 3]

**Metric Comparison** (Most Recent Year):
| Metric | [Company] | Peer Avg | Best Peer | Worst Peer | Rank |
|--------|-----------|----------|-----------|------------|------|
| Revenue Growth | [%] | [%] | [%] | [%] | [X/5] |
| Gross Margin | [%] | [%] | [%] | [%] | [X/5] |
| Operating Margin | [%] | [%] | [%] | [%] | [X/5] |
| Net Margin | [%] | [%] | [%] | [%] | [X/5] |
| ROE | [%] | [%] | [%] | [%] | [X/5] |
| ROIC | [%] | [%] | [%] | [%] | [X/5] |

**Outliers** (Significant deviations):
- [Metric]: [Company] is [better/worse] than peers by [X]pp
  - Explanation: [business model, strategy, or other factor]
- [Metric]: [Company] is [better/worse] than peers by [X]pp
  - Explanation: [reason]

**Competitive Positioning**:
- Overall financial quality: [above/at/below] peer average
- Strengths vs. peers: [list]
- Weaknesses vs. peers: [list]
```

---

### Phase 4 Synthesis

**Report Template**: `04_Financial_Quality.md`

Include:
- Financial health score (Excellent/Good/Fair/Poor)
- Cash flow quality assessment
- Red flag summary
- Peer ranking table

---

## Phase 5: Governance Analysis (股权与治理)

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 5A: Ownership Structure

#### Agent 5B: Management Quality and Incentives

#### Agent 5C: Capital Allocation Track Record

#### Agent 5D: Shareholder Returns and Overhang

*(Detailed instructions similar to above phases)*

---

## Phase 6: Market Sentiment (市场分歧)

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 6A: Bull Case Research

#### Agent 6B: Bear Case Research

#### Agent 6C: Key Debate Points

#### Agent 6D: Verification Nodes

*(Detailed instructions)*

---

## Phase 7: Valuation & Moat (估值与护城河)

### Multi-Agent Deployment Strategy

Deploy **4 agents in parallel**:

#### Agent 7A: Competitive Moat Assessment

#### Agent 7B: Relative Valuation

#### Agent 7C: Absolute Valuation (DCF, Reverse DCF)

#### Agent 7D: Risk Scenarios

*(Detailed instructions)*

---

## Phase 8: Final Synthesis

### Objective

Combine all findings into a comprehensive investment due diligence report.

### Tasks

1. Review all 7 phase reports
2. Generate executive summary with signal rating
3. Create financial data summary tables
4. Create monitoring checklist
5. Compile bibliography

---

For execution examples demonstrating these phases, see [examples.md](examples.md).
