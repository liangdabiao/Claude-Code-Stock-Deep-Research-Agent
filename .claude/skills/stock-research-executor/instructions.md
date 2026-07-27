# Stock Research Executor - Instructions

## Purpose

This document provides detailed instructions for executing the 8-phase investment due diligence process. It expands on the core SKILL.md with specific guidance, workflows, and best practices.

## Prerequisites

Before using this skill, you should have:

1. **A structured research prompt** from `stock-question-refiner`
   - Contains: Stock ticker, investment style, time horizon, research scope, output requirements
   - If missing, invoke `stock-question-refiner` first

2. **Clear understanding of constraints**
   - Investment parameters (style, risk tolerance, priorities)
   - Data sources to use (and avoid)
   - Output format and structure

3. **Permission to use required tools**
   - Task (for deploying research agents)
   - WebSearch, WebFetch (for research)
   - Read, Write (for generating reports)
   - TodoWrite (for tracking progress)

## Research Execution Framework

### Overview: The 8-Phase Process

```
┌─────────────────────────────────────────────────────────────┐
│              Stock Research Execution Framework              │
└─────────────────────────────────────────────────────────────┘

Input: Structured Research Prompt (from stock-question-refiner)
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 1: Verify and Understand Prompt                        │
│  - Check completeness                                        │
│  - Clarify if needed                                         │
│  - Create execution plan                                     │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: Create Research Plan                                │
│  - Prioritize phases                                         │
│  - Design multi-agent strategy                               │
│  - Define output structure                                   │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3: Deploy Multi-Agent Research (Phases 1-7)            │
│  For each phase:                                             │
│    1. Launch 3-5 agents in PARALLEL                          │
│    2. Collect and synthesize findings                        │
│    3. Generate phase report                                  │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: Quality Assurance                                   │
│  - Citation verification (use citation-validator skill)      │
│  - Cross-validation checks                                   │
│  - Completeness review                                       │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: Generate Final Synthesis Report                     │
│  - Executive summary with signal rating                      │
│  - All phase reports                                         │
│  - Financial data tables                                     │
│  - Valuation analysis                                        │
│  - Risk monitoring checklist                                 │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
Output: Complete Investment Due Diligence Report
        (in RESEARCH/STOCK_[ticker]_[company]/)
```

---

## Step 1: Verify and Understand the Structured Prompt

### Checklist: Prompt Completeness

Before proceeding, verify the structured prompt contains:

**Basic Information**:
- [ ] Stock ticker/code (e.g., 600519.SH, NVDA, 03333.HK)
- [ ] Company full name
- [ ] Market (A-share / Hong Kong / US)

**Investment Parameters**:
- [ ] Investment style (value/growth/turnaround/dividend)
- [ ] Holding period (short/medium/long)
- [ ] Risk tolerance (conservative/balanced/aggressive)

**Research Scope**:
- [ ] All 8 phases listed
- [ ] Priority phases identified (2-3 phases for deep dive)
- [ ] Phases that can be streamlined noted

**Output Requirements**:
- [ ] Report format specified (executive summary, full report, tables)
- [ ] Valuation methods specified
- [ ] Special requirements noted (language, timeframe, geography)

**Research Constraints**:
- [ ] Data sources prioritized
- [ ] Mandatory verification requirements listed
- [ ] "What NOT to do" section clear

### If Incomplete: Ask User

Don't make assumptions. Ask targeted questions:

```
I've received your research request, but I need clarification on [specific missing item].

For example:
- "You mentioned value investing, but didn't specify which phases are most important.
  Should I prioritize business quality, governance, and valuation?"
- "You didn't specify a timeframe. Should I analyze the past 3 years, 5 years, or 10 years?"

Please clarify so I can tailor the research appropriately.
```

### If Complete: Proceed to Planning

Acknowledge receipt and summarize understanding:

```
I've received your structured research request. Let me confirm my understanding:

**Target**: [ticker] [company name]
**Approach**: [investment style], [holding period], [risk tolerance]
**Priority Phases**: [list priority phases]
**Output**: [describe report structure]

I'll now create a detailed research execution plan. One moment...
```

---

## Step 2: Create Research Execution Plan

### Plan Template

```markdown
## Research Execution Plan

### Research Target
**Stock**: [ticker] [company name]
**Market**: [A-share/HK/US]
**Industry**: [sector/classification]

### Investment Parameters
**Style**: [value/growth/turnaround/dividend]
- Implications: [what this means for research focus]

**Holding Period**: [short/medium/long]
- Time horizon: [specific timeframe]
- Research implications: [which phases matter most/least]

**Risk Tolerance**: [conservative/balanced/aggressive]
- Constraints: [specific filters or red flags to emphasize]

### Phase Prioritization

**Deep Dive Phases** (allocate more resources):
- **Phase [X]**: [phase name]
  - Why prioritized: [user's specific concern]
  - Extra depth: [specific analysis to perform]

**Standard Coverage**:
- Phase [X], [Y], [Z]: Standard depth

**Quick Pass** (if user specified):
- Phase [X]: Streamlined coverage

### Multi-Agent Deployment Strategy

**Phase 1: Business Foundation**
- Agent 1A: Core business and products
- Agent 1B: Revenue and profit composition
- Agent 1C: Customers and value chain position
- Agent 1D: Recent strategic changes (3-5 years)

**Phase 2: Industry Analysis**
- Agent 2A: Industry cycle stage assessment
- Agent 2B: Supply-demand dynamics
- Agent 2C: Competitive landscape and concentration
- Agent 2D: Policy and external variables

**Phase 3: Business Breakdown**
- Agent 3A: Business segment analysis
- Agent 3B: Profit engine and economics
- Agent 3C: Customer and pricing power analysis
- Agent 3D: Subsidiaries and non-core items

**Phase 4: Financial Quality**
- Agent 4A: Key metrics trends (5-10 years)
- Agent 4B: Cash flow quality analysis
- Agent 4C: Anomaly screening (red flags)
- Agent 4D: Peer comparison

**Phase 5: Governance Analysis**
- Agent 5A: Ownership structure
- Agent 5B: Management quality and incentives
- Agent 5C: Capital allocation track record
- Agent 5D: Shareholder returns history

**Phase 6: Market Sentiment**
- Agent 6A: Bull case research
- Agent 6B: Bear case research
- Agent 6C: Key debate points identification
- Agent 6D: Verification nodes (what data will resolve debates)

**Phase 7: Valuation & Moat**
- Agent 7A: Competitive moat assessment
- Agent 7B: Relative valuation (historical + peers)
- Agent 7C: Absolute valuation (DCF, reverse DCF)
- Agent 7D: Risk scenarios and failure modes

**Total Agents**: ~28 agents (4 per phase × 7 phases)

### Output Structure

**Directory**: `RESEARCH/STOCK_[ticker]_[company_name]/`

**Files**:
1. README.md - Navigation and overview
2. 00_Executive_Summary.md - Signal rating, thesis, summary
3. 01_Business_Foundation.md
4. 02_Industry_Analysis.md
5. 03_Business_Breakdown.md
6. 04_Financial_Quality.md
7. 05_Governance_Analysis.md
8. 06_Market_Sentiment.md
9. 07_Valuation_Moat.md
10. Financial_Data/key_metrics_table.md
11. Financial_Data/cashflow_analysis.md
12. Financial_Data/peer_comparison.md
13. Valuation/historical_multiples.md
14. Valuation/dcf_analysis.md
15. Valuation/reverse_dcf_implied_growth.md
16. Risk_Monitoring/bear_case.md
17. Risk_Monitoring/black_swans.md
18. Risk_Monitoring/monitoring_checklist.md
19. sources/bibliography.md
20. sources/data_sources.md

### Data Sources (Priority Order)
1. [List primary sources from prompt]
2. [List secondary sources]
3. [List sources to avoid or verify]

### Quality Checks
- [ ] All claims cited with source quality ratings (A-E)
- [ ] Profit vs. cash flow cross-validation
- [ ] Company vs. peer comparison
- [ ] Bear case analysis included
- [ ] No investment advice given

### Estimated Timeline
- Phase 1: ~[time] minutes
- Phase 2: ~[time] minutes
- ...
- **Total estimated time**: ~[total time]

---

**Ready to proceed?** I'll begin by deploying parallel agents for Phase 1.
```

### Present Plan to User

Show the plan and wait for approval (unless in automated mode):

```
I've created a research execution plan for [company] ([ticker]).

**Key highlights**:
- [number] phases, deploying ~[total] research agents in parallel
- Priority focus on: [list priority phases]
- Expected output: [number] files in standardized directory structure
- Estimated time: [time range]

Would you like me to proceed? Or would you like to adjust the plan?
```

**If user wants adjustments**: Modify plan accordingly
**If user approves**: Begin execution
**If no response (automated mode)**: Proceed after brief pause

---

## Step 3: Deploy Multi-Agent Research

### Critical Rule: ALWAYS Launch Agents in Parallel

**❌ WRONG (Sequential)**:
```
Launching Agent 1A...
[Wait for completion]
Launching Agent 1B...
[Wait for completion]
```

**✅ RIGHT (Parallel)**:
```
Launching 4 agents in parallel for Phase 1...

[Agent 1A] Research business foundation - products
[Agent 1B] Research business foundation - revenue
[Agent 1C] Research business foundation - customers
[Agent 1D] Research business foundation - strategy

[All agents now running concurrently]
```

### How to Launch Parallel Agents

Use the **Task tool with multiple invocations in a single message**:

```python
# Pseudocode example (actual implementation uses Task tool)

response = [
    Task(agent_1a_task),
    Task(agent_1b_task),
    Task(agent_1c_task),
    Task(agent_1d_task)
]

# All 4 agents start immediately and run in parallel
# Wait for all to complete, then collect results
```

### Agent Template Structure

Each agent should receive:

**1. Clear Objective**:
```
You are a research agent focused on [specific aspect] of [company].

**Your Mission**: [specific, measurable objective]
**Time Period**: [what timeframe to research]
**Output Format**: [structured summary with citations]
```

**2. Tools to Use**:
```
**Available Tools**:
1. WebSearch - Start here for broad searches
2. WebFetch - Extract content from specific URLs
3. mcp__web_reader__webReader - Better content extraction
4. mcp__4_5v_mcp__analyze_image - Analyze charts/graphs (if needed)

**Search Strategy**:
- Use specific, targeted queries
- Prioritize [primary sources] from [time period]
- Cross-reference claims across [number] sources
```

**3. Research Focus**:
```
**Key Questions to Answer**:
1. [Question 1]
2. [Question 2]
3. [Question 3]

**Data Points to Find**:
- [Data point 1]
- [Data point 2]
- [Data point 3]

**Sources to Prioritize**:
- Most authoritative: [list primary sources]
- Secondary: [list secondary sources]
- Avoid or verify: [list low-quality sources]
```

**4. Output Requirements**:
```
**Provide in Your Report**:

1. **Executive Summary** (2-3 paragraphs)
   - Key findings overview

2. **Detailed Findings** (structured with subsections)
   - Answer each key question
   - Support with data and sources

3. **Key Data Table**
   - Relevant metrics, statistics, trends

4. **Source Citations**
   - Every claim cites: Author, Date, Title, URL
   - Indicate source quality (A-E scale)

5. **Confidence Assessment**
   - High: Supported by multiple authoritative sources
   - Medium: Supported by limited sources or some uncertainty
   - Low: Based on projections, estimates, or weak sources

6. **Contradictions and Gaps**
   - Note where sources disagree
   - Identify what couldn't be determined

7. **Red Flags** (if applicable)
   - Any concerning findings
   - Areas requiring further investigation
```

**5. Quality Standards**:
```
**Research Standards**:
- Only make claims supported by sources
- Distinguish between [FACT] and [OPINION/ANALYSIS]
- Explicitly flag uncertainties
- Avoid hype or fear language
- Maintain objectivity

**Citation Format**:
Use this format for all citations:
[Author/Organization, Publication Title, Date, URL]
```

### Collecting Agent Results

After agents complete:

**1. Compile All Findings**:
```
Phase [X] Agent Results Summary:

**Agent XA**: [2-sentence summary of key findings]
**Agent XB**: [2-sentence summary of key findings]
**Agent XC**: [2-sentence summary of key findings]
**Agent XD**: [2-sentence summary of key findings]
```

**2. Identify Overlaps and Redundancies**:
```
**Consensus Findings** (mentioned by 2+ agents):
- [Finding 1]
- [Finding 2]

**Unique Findings** (from single agent):
- [Finding from Agent XB only]
- [Finding from Agent XC only]
```

**3. Resolve Contradictions**:
```
**Contradictions Identified**:
- Issue: [Agent XA says Y, Agent XB says Z]
- Resolution: [Examine sources, determine which is more credible,
  or present both perspectives]
```

**4. Create Coherent Narrative**:
```
**Synthesis**: Combine findings into logical flow:
- Start with most important/consensus findings
- Address unique insights
- Acknowledge contradictions and explain them
- Highlight uncertainties and gaps
```

---

## Step 4: Quality Assurance

### Citation Verification

After completing research for a phase, perform citation checks:

**Use citation-validator skill**:
```
Please validate the citations in [file path].

Check for:
- Completeness (author, date, title, URL)
- Format consistency
- Source quality ratings
- Missing citations
- Contradictory claims

Provide correction recommendations where needed.
```

**Self-Check Before Invoking Validator**:
- [ ] Every factual claim has a citation
- [ ] Citation format is consistent
- [ ] Source is rated (A-E scale)
- [ ] No claims like "experts say" without attribution
- [ ] URLs are accessible (check a sample)

### Cross-Validation Checks

**1. Profit vs. Cash Flow**:
```markdown
## Cash Flow Quality Analysis

**Operating Cash Flow / Net Income**:
| Year | Net Income | OCF | OCF/NI Ratio |
|------|-----------|-----|-------------|
| 2023 | [amount]  | [amount] | [ratio] |
| 2022 | [amount]  | [amount] | [ratio] |
| 2021 | [amount]  | [amount] | [ratio] |

**Assessment**:
- [ ] Ratio > 1.0: Excellent (cash exceeds earnings)
- [ ] Ratio 0.8-1.0: Good (cash roughly matches earnings)
- [ ] Ratio 0.5-0.8: Concerning (significant accruals)
- [ ] Ratio < 0.5: Red flag (earnings not converting to cash)

**Explanation**: [If ratio is low, explain why: working capital changes,
  capex, one-time items, etc.]
```

**2. Company vs. Peers**:
```markdown
## Peer Comparison

**Key Ratios Comparison**:
| Metric | [Company] | [Peer 1] | [Peer 2] | [Peer 3] |
|--------|-----------|----------|----------|----------|
| P/E (TTM) | [value] | [value] | [value] | [value] |
| P/B | [value] | [value] | [value] | [value] |
| ROE | [value] | [value] | [value] | [value] |
| Net Margin | [value] | [value] | [value] | [value] |
| Revenue Growth | [value] | [value] | [value] | [value] |

**Assessment**:
- [Company] is [below/above/peer average] on [metric]
- This [is/is not] justified because: [explanation]
- Key outlier: [metric] where company significantly differs
```

**3. Bear Case Analysis**:
```markdown
## Bear Case Scenarios

**Key Risks Identified**:

1. **[Risk 1]**: [Description]
   - Likelihood: [High/Medium/Low]
   - Impact: [High/Medium/Low]
   - Trigger events: [What would cause this]
   - Mitigation: [How company could avoid it]

2. **[Risk 2]**: [Description]
   - ...

**Worst Case Scenario**:
[Describe what could go wrong, how bad it could get, probability assessment]

**Critical Monitoring Points**:
- [Data point 1]: [threshold level that would signal risk is materializing]
- [Data point 2]: [threshold level]
```

### Completeness Review

Before final synthesis, ensure:

**Content Completeness**:
- [ ] All 8 phases covered
- [ ] User's priority phases given extra depth
- [ ] Executive summary synthesizes all findings
- [ ] Red flags and risks identified
- [ ] Both bull and bear cases presented

**Structural Completeness**:
- [ ] All required files created
- [ ] Directory structure matches template
- [ ] README.md provides navigation
- [ ] sources/bibliography.md complete

**Quality Completeness**:
- [ ] No placeholders like "[to be filled]"
- [ ] No vague statements without support
- [ ] No contradictions left unresolved
- [ ] No important areas marked as "unknown" without explanation

---

## Step 5: Generate Final Synthesis Report

### Executive Summary Structure

```markdown
# Executive Summary

## Signal Rating

🟢🟢🟢 **Strong Buy** / 🟡🟡🟡 **Hold** / 🔴🔴 **Avoid**

**Rationale**: [2-3 sentences explaining the rating]

## Investment Thesis

**One-Liner**: [Single sentence capturing the essence]

**Detailed Thesis**: [2-3 paragraph narrative explaining:
- Why this company is (or isn't) attractive
- Key competitive advantages (or lack thereof)
- Primary risks and concerns
- What would make the thesis change]

## Key Metrics Summary

| Metric | Value | Context |
|--------|-------|---------|
| Market Cap | [amount] | [context: large/mid/small cap] |
| TTM Revenue | [amount] | [growth rate vs. prior year] |
| TTM Net Income | [amount] | [margin %] |
| P/E (TTM) | [value] | [percentile vs. 5-year history] |
| P/B | [value] | [percentile vs. 5-year history] |
| ROE | [value] | [above/below peer average] |
| Dividend Yield | [value] | [if applicable] |

## Top 3 Reasons to Consider

1. **[Reason 1]**: [2-3 sentences with evidence]
2. **[Reason 2]**: [2-3 sentences with evidence]
3. **[Reason 3]**: [2-3 sentences with evidence]

## Top 3 Reasons to Avoid

1. **[Risk 1]**: [2-3 sentences with evidence]
2. **[Risk 2]**: [2-3 sentences with evidence]
3. **[Risk 3]**: [2-3 sentences with evidence]

## Financial Health Score

**Overall**: [Excellent/Good/Fair/Poor]

**Breakdown**:
- Profitability: [score/rating]
- Cash Flow Quality: [score/rating]
- Balance Sheet Strength: [score/rating]
- Growth Sustainability: [score/rating]

## Valuation Assessment

**Relative Valuation**: [Undervalued/Fairly Valued/Overvalued]
- Trading at [percentile]th percentile of [X]-year historical [PE/PB]
- [Premium/Discount] to peers of [X]%

**Absolute Valuation**:
- DCF intrinsic value: [price/value per share]
- Margin of safety: [X]% (if undervalued)
- Implied growth: [X]% (from reverse DCF)

## Moat Assessment

**Overall Rating**: [0-5]/5

**Components**:
- Pricing Power: [score/5] - [evidence]
- Switching Costs: [score/5] - [evidence]
- Network Effects: [score/5] - [evidence]
- Cost Advantages: [score/5] - [evidence]
- Intangible Assets: [score/5] - [evidence]

## Monitoring Checklist

**Thesis Strengthening Conditions**:
- [ ] [Event/indicator that would make the bull case stronger]
- [ ] [Event/indicator that would make the bull case stronger]

**Thesis-Breaking Exit Triggers**:
- [ ] [Event/indicator that would invalidate the investment thesis, exit immediately]
- [ ] [Event/indicator that would invalidate the investment thesis, exit immediately]

## Key Risks

1. **[Risk Category]**: [description]
   - Probability: [High/Medium/Low]
   - Impact: [High/Medium/Low]
   - Monitoring: [what to watch]

2. **[Risk Category]**: [description]
   - ...

## Conclusion

[2-3 sentence conclusion summarizing the investment case]

---

**Report Generated**: [Date]
**Research Phases Completed**: 8/8
**Sources Analyzed**: [number]
**Confidence Level**: [High/Medium/Low]

**Disclaimer**: This research is for educational and informational purposes only and does not constitute investment advice. All investments involve risk. Past performance does not guarantee future results. Always conduct your own due diligence and consult with qualified financial advisors.
```

---

## Special Scenarios

### Scenario 1: Distressed Company (e.g., bankruptcy risk)

**Adjustments**:
- Emphasize Phases 4 (solvency) and 7 (liquidation value)
- Add: "Going Concern vs. Liquidation" analysis
- Valuation: Focus on recovery scenarios, probability-weighted expected value
- Risk analysis: Emphasize binary outcomes and timing risks

### Scenario 2: High-Growth Company (unprofitable)

**Adjustments**:
- Phase 4: Focus on cash burn rate, runway, path to profitability
- Valuation: Use user value models, TAM penetration, growth-over-earnings
- Skip: Traditional P/E, DCF (if no current cash flow)
- Add: Growth sustainability assessment, competitive moat durability

### Scenario 3: Newly Public (IPO)

**Adjustments**:
- Phase 1: Emphasize IPO prospectus analysis
- Phase 4: Limited historical data (use prospectus financials)
- Phase 5: Check for lock-up expirations, insider selling plans
- Valuation: Difficult (no trading history), focus on prospectus guidance

### Scenario 4: Foreign Company (e.g., Chinese A-share)

**Adjustments**:
- Data sources: Emphasize local language sources (Chinese for A-shares)
- Translation: Provide bilingual or clarify if using English sources
- Regulatory: Include country-specific regulatory risks
- Accounting: Note if using IFRS, GAAP, or local standards (CAS for China)

---

## Best Practices

### 1. Maintain Objectivity

**DO**:
- Present balanced facts
- Acknowledge uncertainties
- Include bear case alongside bull case

**DON'T**:
- Use hype language ("incredible opportunity", "must-buy")
- Use fear language ("disaster waiting to happen")
- Cherry-pick data to support a narrative

### 2. Prioritize Primary Sources

**Source Hierarchy**:
1. Company filings (annual reports, regulatory submissions)
2. Regulatory documents
3. Direct company communications
4. Reputable third-party research (with skepticism)
5. News and secondary analysis (verify claims)

### 3. Be Transparent About Limitations

When you can't find information:
```markdown
**Limitation**: [What couldn't be determined]
- [Why it couldn't be determined (e.g., not disclosed, conflicting sources)]
- [What this means for the analysis]
- [What additional research would be needed]
```

### 4. Use TodoWrite for Progress Tracking

Track your research progress:

```python
TodoWrite([
    {"content": "Phase 1: Business Foundation", "status": "completed"},
    {"content": "Phase 2: Industry Analysis", "status": "in_progress"},
    {"content": "Phase 3-7: Pending", "status": "pending"}
])
```

This helps user see progress and allows resumption if interrupted.

---

## Troubleshooting

### Issue: Agents Return Contradictory Findings

**Solution**:
1. Examine sources for each contradictory claim
2. Assess source quality (A-E scale)
3. Check publication dates (older info may be outdated)
4. Present both perspectives with source attribution
5. Explain likely reasons for contradiction

### Issue: Cannot Find Information

**Solution**:
1. Try alternative search queries
2. Search in different languages (if foreign company)
3. Look in regulatory filings instead of news
4. Acknowledge limitation explicitly in report
5. Flag for user to investigate further

### Issue: WebSearch Returns Poor Results

**Solution**:
1. Use more specific, targeted queries
2. Add site: filters (e.g., "site:sec.gov", "site:cninfo.com.cn")
3. Use file type filters (e.g., "filetype:pdf annual report")
4. Try alternative search terms
5. Check if company has changed names or tickers

### Issue: Information Overload (Too Many Sources)

**Solution**:
1. Prioritize authoritative sources (annual reports, regulatory filings)
2. Limit analysis to most recent 3-5 years unless historical context needed
3. Focus on material information (ignore trivial details)
4. Synthesize across sources rather than listing all

---

For detailed phase-by-phase instructions, see [phases.md](phases.md).
For execution examples, see [examples.md](examples.md).
