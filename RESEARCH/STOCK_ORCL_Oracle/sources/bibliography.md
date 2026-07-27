# Oracle (ORCL) 参考文献与来源质量评级

> 研究日期：2026-07-24 至 2026-07-26

---

## ⚠️ 重要前置声明：本报告未能引用任何 A 级来源

| 尝试的 A 级来源 | 结果 |
|---|---|
| SEC EDGAR（10-K / 10-Q / 8-K / Form 4） | 🔴 **HTTP 403 拒绝访问** |
| Oracle 投资者关系官网原始财报 | 🔴 未能获取 |
| 信用评级机构（Moody's / S&P / Fitch）原始报告 | 🔴 未能获取 |

**后果**：
- 所有财务数据来自 **B 级二手聚合来源**（stockanalysis.com）
- **分部数据、客户集中度、RPO 明细、债务到期结构、折旧年限政策、内部人持股全部缺失**
- 涉及这些主题的结论均已在正文中标注为**推断**或**待补证据**

> **本报告的结论质量受此限制。任何实际投资决策前必须补齐 SEC 原始文件。**

---

## 一、B 级来源（主要数据来源）

### stockanalysis.com — Oracle

| # | 页面 | URL | 访问日期 | 用途 |
|---|---|---|---|---|
| B1 | ORCL Statistics | https://stockanalysis.com/stocks/orcl/statistics/ | 2026-07-24 | 估值倍数、财务比率、市场数据、Altman Z、Piotroski F |
| B2 | ORCL Financials | https://stockanalysis.com/stocks/orcl/financials/ | 2026-07-24 | FY2022–FY2026 利润表 |
| B3 | ORCL Cash Flow Statement | https://stockanalysis.com/stocks/orcl/financials/cash-flow-statement/ | 2026-07-24 | 五年现金流量表、资本开支、债务发行、股东回报 |
| B4 | ORCL Ratios | https://stockanalysis.com/stocks/orcl/financials/ratios/ | 2026-07-24 | 历史估值倍数、ROIC 时间序列 |
| B5 | ORCL Forecast | https://stockanalysis.com/stocks/orcl/forecast/ | 2026-07-10（页面更新日） | 分析师目标价、FY2027E 预测、评级分布 |
| B6 | ORCL 主页/概况 | https://stockanalysis.com/stocks/orcl/ | 2026-07-24 | 公司概况、新闻 |

### stockanalysis.com — 同业对照

| # | 公司 | URL | 访问日期 |
|---|---|---|---|
| B7 | Microsoft | https://stockanalysis.com/stocks/msft/statistics/ | 2026-07-24 |
| B8 | Alphabet | https://stockanalysis.com/stocks/googl/statistics/ | 2026-07-24 |
| B9 | Amazon | https://stockanalysis.com/stocks/amzn/statistics/ | 2026-07-24 |
| B10 | IBM | https://stockanalysis.com/stocks/ibm/statistics/ | 2026-07-24 |

**stockanalysis.com 评为 B 级的理由**：
- 🟢 数据直接源自 SEC 申报文件，经结构化整理
- 🟢 提供多年历史序列，便于趋势分析
- 🟡 属于二手聚合，存在整理误差可能
- 🔴 不提供分部数据、附注、风险因素等原始文件独有的信息
- 🔴 本报告在其 Forecast 页面上发现了内部不一致（见下）

---

## 二、发现的数据矛盾与处理

### 矛盾 1：Forecast 页面的收入预测自相矛盾

| 位置 | 数值 |
|---|---|
| 页面摘要区"Revenue Next Year" | **$130.47B** |
| 同页 FY2027 详细预测表 | **$89.32B** |
| 差异 | **46%** |

**处理**：全文采用详细表中的 **$89.32B**（与 +32.60% 增速表述一致）。摘要区数字可能为不同口径或错误。**已在正文标注。**

### 矛盾 2：分析师目标价与自身现金流预测不相容

| 同一页面上的两个数字 | |
|---|---|
| FY2027E 自由现金流 | **−$47.73B** |
| 平均目标价 | **$249.24（+116.75%）** |

**分析**：任何以自由现金流为基础的 DCF 都无法在 FCF 为 −$477 亿时得出 +117% 的目标价。**这说明分析师目标价大概率基于"PE × 非 GAAP EPS"倍数法，而非现金流折现。**

**处理**：本报告不采用分析师目标价作为估值依据，仅将其作为**市场情绪指标**引用。**已在 06 和 07 文件中说明。**

### 矛盾 3：ROE 与 ROA/ROIC 严重背离

| 指标 | 数值 |
|---|---|
| ROE | 53.38% |
| ROA | 6.51% |
| ROIC | 11.48% |

**分析**：非数据错误，而是 8.2 倍权益乘数的数学后果。**处理**：正文中明确指出 ROE 不可用于评价 Oracle 的经营质量。

### 矛盾 4：ROIC 的两个口径

| 来源 | ROIC |
|---|---|
| Statistics 页 | 11.24% / 11.48% |
| Ratios 页（FY2026） | 12.81% |

**处理**：正文中区分"当前 TTM"（11.48%）与"FY2026 财年"（12.81%），并在时间序列中使用后者。

---

## 三、C 级来源（新闻与推断基础）

| # | 内容 | 质量 | 处理方式 |
|---|---|---|---|
| C1 | Oracle 与超大规模 AI 客户的合约（公开新闻报道） | C | **未引用具体金额**，仅作定性风险讨论，正文标注为推断 |
| C2 | 五角大楼 $7B 合同 | C | 作为政府业务壁垒的例证，标注来源等级 |
| C3 | Cerner 收购（FY2023 现金流出 $27,721M） | **B** | 该项有现金流量表数据支持，升为 B 级 |
| C4 | 行业内 GPU 折旧年限争议（3–8 年） | C | 作为敏感性分析的区间来源，明确标注为假设 |
| C5 | IBM 云战略收缩历史 | C | 定性对照，其财务数据（B10）为 B 级 |

---

## 四、本报告的原创计算（非引用，属分析师推断）

以下数字**不是来源数据，是本报告基于 B 级数据的计算结果**：

| 计算项 | 结果 | 所在文件 |
|---|---|---|
| 五年累计 FCF vs 股东回报缺口 | −$45,613M ≈ 净新增债务 +$43,552M | cashflow_analysis.md |
| 边际毛利率（Δ毛利/Δ收入） | FY2023 37.6% → FY2026 38.8% → FY2027E 42.5% | historical_trends.md |
| 权益乘数（ROE/ROA） | 8.2 倍 | key_metrics_table.md |
| 增量资本回报要求 | 需约 $21,720M 年 EBIT | 03_Business_Breakdown.md |
| 折旧滞后影响 | FY2027 真实 Fwd PE 可能为 ≈21.8 而非 14.28 | bear_case.md |
| 隐含永续 FCF | $32,113M | reverse_dcf_implied_growth.md |
| 稳态模型（收入 $1,500 亿 + 28% 利润率） | 与隐含要求吻合 | reverse_dcf_implied_growth.md |
| 三情景 DCF | 牛 $310 / 基 $135 / 熊 $45 | dcf_analysis.md |
| FY2027E 资本开支 ≈$950 亿 | 由 FCF 与 OCF 反推 | cashflow_analysis.md |
| "每单位经济利润的价格" | ORCL 8.93 vs MSFT 1.20 | peer_valuation_matrix.md |
| 三年再融资需求 ≈$970 亿 | reverse_dcf_implied_growth.md |

> **所有原创计算的假设均已在各文件内披露。读者可用不同假设自行重算。**

---

## 五、来源质量汇总

| 等级 | 定义 | 本报告数量 | 占比 |
|---|---|---|---|
| **A** | 年报、监管申报、同行评议 | **0** | **0%** 🔴 |
| **B** | 行业报告、可信数据聚合、公司演示 | **10** | ~67% |
| **C** | 新闻报道、专家评论 | 5 | ~33% |
| **D** | 预印本、博客 | 0 | 0% |
| **E** | 社交媒体、论坛 | 0 | 0% |

**总体来源质量：B−**

**主要弱点**：完全缺乏 A 级原始文件，导致分部、客户、治理三个维度的分析只能依靠推断。

---

## 六、研究方法说明

| 项目 | 说明 |
|---|---|
| 研究方式 | **串行、单线程、直接 WebFetch**（未使用子代理并行研究） |
| 原因 | 会话级指令限制使用 Agent/Workflow 工具 |
| WebSearch | 🔴 **全程不可用**（API 报错），所有数据靠已知 URL 直接抓取 |
| 交叉验证 | 已执行：利润 vs 现金流、公司 vs 同业、分析师预期 vs 现金流预测 |
| 未执行 | 多源交叉验证（因只有单一数据源）、原始文件核对 |

> ⚠️ **单一数据源是本报告的重大方法论局限。** 若 stockanalysis.com 的某项数据有误，本报告无法发现。

---

## 七、引用格式说明

正文中的引用格式：
```
[来源机构, 日期, 标题, URL, Source Quality: 等级]
```

---

> ⚠️ 免责声明：本报告不构成投资建议，不预测股价。所有分析基于公开信息，可能存在错误或遗漏。投资有风险，可能损失全部本金。请自行尽调并咨询持牌顾问。
