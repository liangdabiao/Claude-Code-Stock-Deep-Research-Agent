# 数据来源与研究方法说明 — Intel (INTC)

---

## 一、研究执行方式说明

> ### ⚠️ 与项目标准流程的差异（重要披露）
>
> 本项目 `CLAUDE.md` 定义的标准流程是"跨 7 个阶段部署约 28 个并行研究子代理（subagent）"。
>
> **本次研究未使用子代理。** 原因是本次会话的运行时指令明确规定：
> - "Do not call the AgentTool unless the user requested it"
> - "Do not use workflows or deep-research unless the user requested it"
>
> 用户的请求是"分别分析这些股票，默认配置，不要询问我"，未明确要求多代理编排。
>
> **实际执行方式**：单线程串行研究，全部数据通过 WebFetch 直接抓取，由主循环完成分析与撰写。
>
> **这一差异的影响**：
> - 🔴 来源发现的广度低于并行代理方案
> - 🔴 未能进行多代理交叉验证
> - 🟢 但所有数据来自同一组一致的端点，内部一致性更高
> - 🟢 分析框架的连贯性更强（同一上下文完成全部 22 份文件）

---

## 二、数据采集流水线

对每只股票，本研究使用固定的 6 个 stockanalysis.com 端点：

| # | 端点 | 提取内容 |
|---|---|---|
| 1 | `/stocks/intc/statistics/` | 当前估值、WACC、ROIC、股本、Beta、Altman Z、Piotroski F、技术指标、空头数据、员工数 |
| 2 | `/stocks/intc/financials/` | 六年利润表（收入、毛利、营业利润、净利润、EPS） |
| 3 | `/stocks/intc/financials/cash-flow-statement/` | 六年现金流量表（OCF、Capex、FCF、股息、回购、发行、债务） |
| 4 | `/stocks/intc/financials/ratios/` | 六年估值倍数、回报率、市值序列、稀释率 |
| 5 | `/stocks/intc/forecast/` | 分析师目标价、评级分布、FY2026/FY2027 共识预测 |
| 6 | `/stocks/intc/` | 公司概况、分部名称、成立年份、新闻标题 |

**同业数据**：对 AMD、TSM、NVDA 各抓取 `/statistics/` 端点。

---

## 三、尝试但失败的数据源

| 数据源 | 结果 | 影响 |
|---|---|---|
| **SEC EDGAR** | 🔴 **HTTP 403 Forbidden** | 无法取得 10-K / 10-Q / DEF 14A，**导致本报告零 A 级来源** |
| **WebSearch 工具** | 🔴 **API 错误**（`output_config.effort 'xhigh' is not supported when thinking is disabled`） | 无法进行广泛来源发现，无法找到券商研报、行业报告 |
| **stockanalysis.com `/holders/`** | 🔴 **HTTP 404** | 无法取得机构持股明细与内部人交易记录 |
| stockanalysis.com Forecast 详细分项（FY2027） | 🟡 **付费墙** | FY2027 仅取得收入与 EPS 两个数字 |

---

## 四、分析方法论

### 4.1 强制交叉验证项（项目标准）

| 验证项 | 执行情况 | 结果 |
|---|---|---|
| **利润 vs 现金流** | ✅ 已执行 | OCF/NI 六年序列；确认为良性背离 |
| **公司 vs 同业** | ✅ 已执行 | 与 AMD / TSM / NVDA 全维度对比 |
| **熊市情景分析** | ✅ 已执行 | 见 `Risk_Monitoring/bear_case.md` |
| **数据源内部一致性** | ✅ 已执行 | 发现并披露 4 处口径矛盾 |

### 4.2 本报告采用的分析框架

| 框架 | 用途 | 文件位置 |
|---|---|---|
| **市值增长归因分解**（Cap = PS × Revenue） | 区分"业绩驱动"与"估值驱动" | `Financial_Data/historical_trends.md` |
| **边际毛利率**（Δ毛利 ÷ Δ收入） | 在无分部数据时反推增量经济性 | `03_Business_Breakdown.md` |
| **增量资本回报检验** | 检验巨额资本开支是否创造价值 | `03_Business_Breakdown.md` |
| **反向 DCF**（戈登模型） | 反推市场隐含的假设 | `Valuation/reverse_dcf_implied_growth.md` |
| **三情景概率加权 DCF** | 二元性极强标的的估值 | `Valuation/dcf_analysis.md` |
| **ROIC − WACC 价差** | 护城河的量化检验 | `07_Valuation_Moat.md` |
| **PE ÷ ROIC 启发式** | 质量调整后的估值比较 | `Valuation/peer_valuation_matrix.md` |
| **股东回报资金来源检验** | 区分内生回报与融资回报 | `04_Financial_Quality.md` |
| **复苏进度条** | 量化基本面 vs 股价的赛跑 | `Financial_Data/historical_trends.md` |
| **反事实检验**（若 Capex 不变） | 归因分析 | `Financial_Data/cashflow_analysis.md` |

### 4.3 Chain-of-Verification（CoVe）应用

对每个关键结论，本报告执行了"生成 → 验证 → 修正"：

| 结论 | 验证方式 | 结果 |
|---|---|---|
| TTM 营业利润 −$77M | 用 EBITDA − D&A 独立验算 | ✅ 确认，统计页 $4.46B 为非 GAAP |
| FCF 转正靠砍 Capex | 反事实计算（Capex 维持各年水平） | ✅ 差额 $136.45 亿完全对应 |
| 市值增长 98.3% 来自估值扩张 | 用 PS × 收入双向分解 | ✅ 确认 |
| 五年现金缺口 $532 亿 | 逐年加总现金流量表各行 | ✅ 与融资流入 $323 亿 + 存量现金基本吻合 |
| 反向 DCF 要求 6.32× 峰值 FCF | 对 WACC 做 8%–14.86% 敏感性 | ✅ 即使 8% WACC 仍要求 2.13× |

---

## 五、评分体系说明

本报告使用的所有评分均为**本报告自行构建的框架**，非任何机构的标准：

| 评分维度 | 英特尔得分 | 评分范围 |
|---|---|---|
| 护城河 | **2.5 / 5** | 0（无）– 5（极宽） |
| 财务质量 | **1.8 / 5** | 0（危险）– 5（优秀） |
| 治理质量 | **2.0 / 5** | 0（恶劣）– 5（优秀） |
| 估值吸引力 | **1.0 / 5** | 0（极贵）– 5（极便宜） |

**信号评级**：
| 信号 | 含义 |
|---|---|
| 🟢🟢🟢 | 优质 + 低估 |
| 🟡🟡🟡 | 中性 / 合理估值 |
| 🟡🟡🔴 | 谨慎 |
| **🔴🔴** | **高风险** ← **英特尔** |

---

## 六、数据时点与时效性

| 数据类别 | 时点 | 时效性风险 |
|---|---|---|
| 股价、市值、估值倍数 | 2026-07-24 收盘 | 🔴 **高**——股价日内可变动 5%+（Beta 2.19） |
| TTM 财务数据 | 截至 2026 年 Q2（含 7 月 23 日财报） | 🟡 中 |
| 年度财务数据 | FY2021–FY2025 | 🟢 低 |
| 分析师共识 | 2026-07-25 更新 | 🟡 中——财报后正在快速调整 |
| 同业数据 | 2026-07-24 | 🟡 中 |
| 新闻 | 2026-07-23/24 | 🔴 高 |

> ⚠️ **英特尔的 Beta 为 2.19，52 周振幅为 $18.97–$142.35（7.5 倍）。本报告的所有价格相关结论对时点极度敏感。**

---

## 七、本报告的已知偏差与局限

| # | 局限 | 说明 |
|---|---|---|
| 1 | **零 A 级来源** | 未能引用任何原始监管文件 |
| 2 | **分部数据完全缺失** | 无法回答"哪块业务在亏"这一核心问题 |
| 3 | **单一数据源依赖** | 几乎全部数据来自 stockanalysis.com，存在系统性偏差风险 |
| 4 | **未访问新闻原文** | 仅使用聚合页标题 |
| 5 | **DCF 高度依赖假设** | 预测期现金流接近零，价值 100% 由终值驱动 |
| 6 | **情景概率为主观判断** | 25/45/30% 无统计依据 |
| 7 | **未建模政府补贴的具体影响** | 数据不可得 |
| 8 | **未使用多代理交叉验证** | 见第一节说明 |
| 9 | **可能低估技术转折的速度** | 本报告对 18A/14A 的判断基于历史记录，可能过于保守 |
| 10 | **可能高估估值均值回归的必然性** | 结构性变化可能支持永久性更高的倍数 |

### 🔑 对本报告结论最重要的一条反面提示

> **本报告的核心判断是"转型是真的，价格已经透支"。**
>
> **这个判断中"价格已经透支"的部分，完全依赖于本报告设定的 FY2030 情景假设。如果英特尔赢得一个大型代工客户——一个本报告给予 15–20% 概率的事件——牛市情景（$165）将成为基准情景，本报告的判断将被证明是错误的。**
>
> **请将本报告视为"对当前价格下赔率结构的分析"，而非"对英特尔未来的预言"。**

---

## 八、文件清单（22 份）

```
RESEARCH/STOCK_INTC_Intel/
├── README.md                                    导航与五个必知数字
├── 00_Executive_Summary.md                      信号评级与投资论点
├── 01_Business_Foundation.md                    Phase 1 公司事实底座
├── 02_Industry_Analysis.md                      Phase 2 行业周期分析
├── 03_Business_Breakdown.md                     Phase 3 业务拆解
├── 04_Financial_Quality.md                      Phase 4 财务质量
├── 05_Governance_Analysis.md                    Phase 5 股权治理
├── 06_Market_Sentiment.md                       Phase 6 市场分歧
├── 07_Valuation_Moat.md                         Phase 7 估值与护城河
├── Financial_Data/
│   ├── key_metrics_table.md                     六年核心指标全表
│   ├── cashflow_analysis.md                     现金流深度分析
│   ├── peer_comparison.md                       同业对比
│   └── historical_trends.md                     历史趋势与归因
├── Valuation/
│   ├── historical_multiples.md                  历史估值分位
│   ├── reverse_dcf_implied_growth.md            反向 DCF
│   ├── dcf_analysis.md                          三情景 DCF
│   └── peer_valuation_matrix.md                 同业估值矩阵
├── Risk_Monitoring/
│   ├── bear_case.md                             熊市情景
│   ├── black_swans.md                           黑天鹅与灰犀牛
│   └── monitoring_checklist.md                  持续监控清单
└── sources/
    ├── bibliography.md                          引用与质量评级
    └── data_sources.md                          本文件
```

---

> ## ⚠️ 免责声明
>
> 本报告由 AI 研究工具生成，**不构成投资建议**。所有数据来自公开渠道且未经独立审计。信号评级仅基于基本面分析，不预测股价。所有投资均有风险，包括本金全部损失。请自行进行尽职调查并咨询持牌财务顾问。
