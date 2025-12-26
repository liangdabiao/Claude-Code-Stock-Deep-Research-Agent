# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains **two specialized deep research frameworks** for Claude Code:

1. **Stock Investment Research** (股票投资尽调) - A specialized 8-phase investment due diligence framework for analyzing publicly traded companies. This is the **primary focus** of this repository.

2. **General Deep Research** - A flexible 7-phase framework for general research topics (available but secondary focus).

**Core Philosophy**: Transform vague research questions into comprehensive, well-cited research reports through structured processes with multi-agent parallel research.

---

# Stock Investment Research System (股票投资尽调系统)

## Key Commands

### Primary Stock Research Command

```bash
# Execute complete stock investment due diligence (recommended)
/stock-research [stock ticker or company name]

# Examples:
/stock-research 600519              # Kweichow Moutai (A-share)
/stock-research AAPL                # Apple Inc. (US)
/stock-research 腾讯 00700.HK       # Tencent (Hong Kong)
```

### How It Works

1. **Question Refinement**: System asks about investment style (value/growth/turnaround/dividend), holding period, risk tolerance, research priorities
2. **8-Phase Research**: Deploy ~28 parallel research agents across 7 phases
3. **Quality Assurance**: Cross-validation (profit vs. cash flow, company vs. peers), citation verification
4. **Structured Report**: Generate comprehensive due diligence report with signal rating

### Stock Research Workflow

```
Stock Ticker → stock-question-refiner skill (clarifies needs)
                ↓
     Structured Research Prompt (investment parameters, priorities)
                ↓
     stock-research-executor skill (8-phase process)
                ├─ Phase 1: Business Foundation (4 agents)
                ├─ Phase 2: Industry Analysis (4 agents)
                ├─ Phase 3: Business Breakdown (4 agents)
                ├─ Phase 4: Financial Quality (4 agents)
                ├─ Phase 5: Governance Analysis (4 agents)
                ├─ Phase 6: Market Sentiment (4 agents)
                └─ Phase 7: Valuation & Moat (4 agents)
                ↓
     citation-validator skill (verify accuracy)
                ↓
     Investment Due Diligence Report (RESEARCH/STOCK_[ticker]_[company]/)
```

### Stock Research Output Structure

```
RESEARCH/STOCK_[ticker]_[company_name]/
├── README.md                          # Navigation and overview
├── 00_Executive_Summary.md            # Signal rating (🟢🟢🟢/🟡🟡🟡/🔴🔴) + thesis
├── 01_Business_Foundation.md          # Phase 1: Products, revenue, customers
├── 02_Industry_Analysis.md            # Phase 2: Industry cycle, competition
├── 03_Business_Breakdown.md           # Phase 3: Profit drivers, economics
├── 04_Financial_Quality.md            # Phase 4: Cash flow, margins, red flags
├── 05_Governance_Analysis.md          # Phase 5: Ownership, management, capital allocation
├── 06_Market_Sentiment.md             # Phase 6: Bull/bear cases
├── 07_Valuation_Moat.md               # Phase 7: Moat rating, valuation scenarios
├── Financial_Data/
│   ├── key_metrics_table.md           # 5-10 year metrics, CAGR, ROE
│   ├── cashflow_analysis.md           # OCF/NI ratio, accruals analysis
│   └── peer_comparison.md             # vs. competitors
├── Valuation/
│   ├── historical_multiples.md        # P/E, P/B percentiles (5-10 years)
│   ├── dcf_analysis.md                # DCF with scenarios
│   └── reverse_dcf_implied_growth.md  # What growth is priced in?
├── Risk_Monitoring/
│   ├── bear_case.md                   # Downside scenarios
│   ├── black_swans.md                 # Tail risks
│   └── monitoring_checklist.md        # Future tracking (strengthen/exit triggers)
└── sources/
    ├── bibliography.md                # All citations with A-E quality ratings
    └── data_sources.md                # Data source descriptions
```

### Stock Research Skills

Located in `.claude/skills/`:

| Skill | Purpose | When Used |
|-------|---------|-----------|
| `stock-question-refiner` | Clarifies investment research needs | User asks about a stock |
| `stock-research-executor` | Executes 8-phase investment due diligence | Structured prompt ready |
| `citation-validator` | Verifies citation accuracy and quality | Finalizing reports |
| `synthesizer` | Combines multi-agent findings | Multiple agents complete |
| `got-controller` | Manages Graph of Thoughts for complex topics | Especially complex stocks |

### 8-Phase Stock Research Process

1. **Business Foundation** (公司事实底座): Core business, products, revenue composition, customers, value chain position, strategic changes
2. **Industry Analysis** (行业周期分析): Industry cycle stage, supply-demand dynamics, competition, policy impacts
3. **Business Breakdown** (业务拆解): Segment analysis, profit engines, pricing power, customer economics, subsidiaries
4. **Financial Quality** (财务质量): Metrics trends, cash flow vs. earnings, red flags, peer comparison
5. **Governance Analysis** (股权治理): Ownership structure, management incentives, capital allocation track record
6. **Market Sentiment** (市场分歧): Bull case, bear case, key debates, verification nodes
7. **Valuation & Moat** (估值护城河): Competitive moat rating (0-5), relative/absolute valuation, risk scenarios
8. **Final Synthesis** (综合报告): Signal rating, investment thesis, monitoring checklist

### Stock Research Example

```
User: /stock-research 贵州茅台 600519

Claude: [Uses stock-question-refiner skill]
       我可以帮您研究贵州茅台。让我先了解您的投资需求：

       1. 投资风格：价值投资/成长投资/困境反转/红利投资？
       2. 持有周期：短期(<6月)/中期(6-18月)/长期(1-3年以上)?
       3. 关注重点：生意质量/财务质量/估值/公司治理 (选2-3个)
       4. 风险偏好：保守/平衡/激进？

User: 价值投资，长期持有3年以上，关注：生意质量、公司治理、估值，风险保守

Claude: [Generates structured research prompt]
       [Deploys 28 parallel research agents across 7 phases]
       [Synthesizes findings into comprehensive report]
       [Validates all citations]

Output: RESEARCH/STOCK_600519_Kweichow_Moutai/
       🟡🟡🟡 Hold / Fairly Valued
       - Strong brand moat (5/5)
       - Exceptional margins (91% gross, 53% net)
       - Full valuation (P/E 32x, limited margin of safety)
       - Recommendation: Wait for 10-15% pullback
```

---

# General Deep Research System

**Note**: This general research system is available but secondary to the stock investment system.

## Key Commands

```bash
# Step-by-step general research workflow
/refine-question [raw question]
/plan-research [structured prompt]
/synthesize-findings [directory]
/validate-citations [file]
```

## General Research Skills

| Skill | Purpose | When Used |
|-------|---------|-----------|
| `question-refiner` | Converts raw questions to structured prompts | General research questions |
| `research-executor` | Executes 7-phase deep research process | Structured prompts ready |
| `got-controller` | Manages Graph of Thoughts | Complex topics |
| `synthesizer` | Combines multi-agent findings | Multiple agents complete |
| `citation-validator` | Verifies citation accuracy | Finalizing reports |

## 7-Phase General Research Process

1. **Question Scoping**: Clarify objectives, constraints, output format
2. **Retrieval Planning**: Break topic into subtopics, create search queries
3. **Iterative Querying**: Deploy parallel agents for research
4. **Source Triangulation**: Cross-validate claims, rate sources (A-E)
5. **Knowledge Synthesis**: Structure findings, write with citations
6. **Quality Assurance**: Check for hallucinations, verify citations
7. **Output & Packaging**: Generate formatted report

## General Research Output

```
RESEARCH/[topic_name]/
├── README.md
├── executive_summary.md
├── full_report.md
├── data/
├── visuals/
├── sources/
└── research_notes/
```

---

# Shared Framework Components

## Citation Requirements

**Every factual claim must include**:
1. Author/Organization name
2. Publication date
3. Source title
4. Direct URL/DOI
5. Page numbers (if applicable)

**Source Quality Rating** (A-E scale):
- **A**: Annual reports, regulatory filings, peer-reviewed research
- **B**: Industry reports, reputable analyst research, company presentations
- **C**: News articles, expert commentary
- **D**: Preprints, preliminary research, blogs
- **E**: Social media, forums (verify with primary sources)

## Graph of Thoughts (GoT) Framework

Based on [SPCL/ETH Zürich research](https://github.com/spcl/graph-of-thoughts):

- **Nodes**: Research findings with quality scores (0-10)
- **Operations**: Generate (explore), Aggregate (merge), Refine (improve), Score (evaluate)
- **Patterns**: Balanced, Depth-first, Breadth-first exploration

**When to use GoT**:
- Complex, multifaceted topics
- High-stakes research where quality is critical
- Topics with many interdependent sub-questions

## Key Tools

### Built-in Tools
- `WebSearch`: General web searches
- `WebFetch`: Extract content from URLs
- `Read`/`Write`: Manage research documents
- `Task`: Deploy autonomous research agents
- `TodoWrite`: Track research progress
- `Skill`: Invoke specialized skills

### MCP Servers
- `mcp__web_reader__webReader`: Enhanced web content extraction
- `mcp__4_5v_mcp__analyze_image`: Analyze charts/graphs/images

## Implementation Notes

### File Management
- Stock research: `RESEARCH/STOCK_[ticker]_[company]/`
- General research: `RESEARCH/[topic_name]/`
- Break large reports into smaller files (avoid context limits)
- Use descriptive filenames

### Multi-Agent Coordination
- **Always** launch agents in **parallel** (single message, multiple Task calls)
- Each agent should have distinct focus
- Always include cross-reference/verification agent
- Use TodoWrite to track progress

### Research Quality
- **Stock Research**: Mandatory profit vs. cash flow validation, company vs. peer comparison, bear case analysis
- Use **Chain-of-Verification (CoVe)**: Generate → Verify → Correct
- Rate confidence (High/Medium/Low)
- Acknowledge contradictions between sources

### Context Management
- Research can generate 50K+ tokens
- Manage with: Modular file structure, progressive summarization, incremental synthesis

## Common Patterns

### Stock Research Pattern
```
User: /stock-research [ticker]

Claude: [stock-question-refiner]
       "I'll help you research [company]. Let me clarify:
        1. Investment style? (value/growth/turnaround/dividend)
        2. Holding period? (short/medium/long)
        3. Focus areas? (business/financials/valuation/governance)
        4. Risk tolerance? (conservative/balanced/aggressive)"

User: [Answers]

Claude: [stock-research-executor]
       [Deploys ~28 agents across 7 phases]
       [Generates comprehensive due diligence report]
       [citation-validator]
       [Outputs structured report]
```

### Using Skills Directly
```
"Use the stock-question-refiner skill to help refine my stock research on [ticker]"
"Use the stock-research-executor skill to execute due diligence on [company]"
"Use the citation-validator skill on RESEARCH/STOCK_[ticker]/full_report.md"
```

## Documentation Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file - quick reference for Claude Code |
| `CLAUDE2.md` | Complete Graph of Thoughts implementation |
| `PROJECT_UNDERSTANDING.md` | Architecture and design decisions |
| `IMPLEMENTATION_GUIDE.md` | User guide for commands and skills |
| `STOCK_RESEARCH_IMPLEMENTATION_PLAN.md` | Stock research system implementation plan |
| `skills.md` | Skill documentation (Chinese) |

## Important Disclaimers

**Stock Research System**:
- ⚠️ **Does NOT provide investment advice**
- ⚠️ **Does NOT predict stock prices**
- ⚠️ **Signal rating is based ONLY on fundamental analysis** (business quality, financial health, valuation, moat)
- ⚠️ **All investments involve risk, including loss of principal**
- ⚠️ **Past performance does not guarantee future results**
- ⚠️ **Always conduct your own due diligence and consult qualified financial advisors**

## Credits

- **Graph of Thoughts Framework**: [SPCL, ETH Zürich](https://github.com/spcl/graph-of-thoughts) (MIT License)
- **7-Phase Methodology**: Inspired by OpenAI and Google Gemini deep research playbooks
- **8-Phase Stock Research**: Based on professional investment due diligence frameworks
- **Developed by**: Ankit at [My Business Care Team (MyBCAT)](https://mybcat.com)
