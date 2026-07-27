# 02 行业周期分析（Industry Analysis）—— 存储半导体

## 2.1 行业周期定位

**判断：本轮处于「扩张期尾段 / 景气顶部区域」，而非复苏早期。**

依据（全部为可验证的财务事实，而非预测）：

| 周期特征 | 复苏早期应有的样子 | Micron 当前实际 |
|---|---|---|
| 毛利率 | 从低位回升，仍低于历史均值 | **72.57%**，远超历史最高（FY2022 45.18%） |
| 资本开支 | 谨慎、低于折旧 | **$25.26B**，约为 D&A（$9.0B）的 **2.8 倍** |
| ROIC | 单位数向双位数爬升 | **67.64%** |
| 估值（PB） | 接近或低于历史中枢 | **10.32x**，历史区间 1.26–2.53x |
| 卖方情绪 | 分歧、观望 | 45 家覆盖，Strong Buy 31 家 |

来源：[StockAnalysis.com, accessed 2026-07-26, MU Ratios, https://stockanalysis.com/stocks/mu/financials/ratios/, Source Quality: C]；[StockAnalysis.com, accessed 2026-07-26, MU Forecast, https://stockanalysis.com/stocks/mu/forecast/, Source Quality: C]

## 2.2 历史周期振幅（Micron 作为行业代理变量）

| 财年 | 收入（$M） | 毛利率 | 阶段 |
|---|---|---|---|
| FY2021 | 27,705 | 37.62% | 上行 |
| FY2022 | 30,758 | 45.18% | **上一轮顶部** |
| FY2023 | 15,540 | **−9.11%** | **崩塌**（收入腰斩，毛利转负） |
| FY2024 | 25,111 | 22.35% | 复苏 |
| FY2025 | 37,378 | 39.79% | 扩张 |
| FY2026 TTM | 90,274 | 72.57% | **本轮顶部区域？** |

> **周期振幅的量化**：从 FY2022 顶部到 FY2023 谷底，收入下降 **49.5%**，毛利率下降 **54.3 个百分点**。这是理解 Micron 风险的唯一必要事实 —— 存储行业的下行不是「增速放缓」，而是**收入腰斩 + 毛利转负**。
> [StockAnalysis.com, accessed 2026-07-26, MU Financials, https://stockanalysis.com/stocks/mu/financials/, Source Quality: C]

## 2.3 供需驱动

### 需求侧（本轮的真实变化）
- **AI 训练/推理对 HBM 的需求是「按 GPU 配比」的刚性需求**，不同于 PC 内存的可选升级。每颗 AI 加速卡搭配的 HBM 容量随代际提升，形成量价齐升。
- 需求集中于极少数买家（超大规模云厂商 + AI 芯片设计公司），议价对手方数量少。
- 新闻流佐证：MU 股价对 Alphabet、Tesla、Microsoft 财报即时反应。[StockAnalysis.com, accessed 2026-07-26, MU News Feed, https://stockanalysis.com/stocks/mu/, Source Quality: C]

### 供给侧（本轮的风险所在）
- HBM 消耗的晶圆产能显著高于同容量标准 DRAM（因 TSV 堆叠与良率损失），因此 HBM 扩产会**同时抽走标准 DRAM 供给**，这是本轮标准 DRAM 也涨价的机制。
- 但这个机制是**双向的**：一旦 HBM 需求增速放缓，被挤占的产能会同时回流标准 DRAM 市场，形成双重打击。
- 三大厂（Samsung / SK Hynix / Micron）同时扩产中，Micron 自身 TTM 资本开支已达 $25.26B。

## 2.4 竞争格局

**DRAM 全球三寡头**：Samsung Electronics、SK Hynix、Micron。三家合计份额估计 >90%（CR3），NAND 市场参与者更多（加上 Kioxia、SanDisk、YMTC 等），集中度较低。

> ⚠️ 具体市占率数字需以 TrendForce / Omdia 等行业数据源核实，本轮未取得可引用的原始报告，故不给出精确百分比。

**竞争强度判断**：
- 寡头结构 → 理论上有供给纪律
- 但历史证明（FY2023 毛利转负）供给纪律在需求冲击面前**多次失效**
- 新闻流显示 MU 与 SK Hynix 被市场并列交易、且相对表现被逐日比较（"Why Micron Stock Is Lagging SK Hynix After Google Earnings"），说明市场把二者视为**同质化的周期敞口**，而非差异化公司。

## 2.5 价格机制

- 标准 DRAM/NAND：现货 + 合约价，季度议价，价格波动剧烈（历史上单年 ±50% 常见）。
- HBM：更接近**长期协议 + 产能预订**模式，价格黏性更高。
- **本轮关键问题**：HBM 的合约属性能否在需求转弱时保护整体毛利率？截至目前没有经历过完整的下行测试 —— 这是一个**未经验证的假设**，不是已确立的事实。

## 2.6 政策与外部变量

1. **中美芯片政策**：媒体报道公司处于中美芯片博弈的中心（"Trump Caught Between Apple and Micron in Fight Over Chinese Chips"）。中国既是重要终端市场，也存在准入限制风险。[The Wall Street Journal, 约 2026-07-25, 经 https://stockanalysis.com/stocks/mu/ 索引, Source Quality: C]
2. **出口管制**：对华高端存储/HBM 的出口限制会同时影响收入与竞争格局（限制中国本土厂商亦利好三寡头）。
3. **产业补贴**：美国本土建厂补贴影响资本开支的实际现金负担（需核实具体金额与拨付进度）。
4. **中国本土替代**：长江存储（NAND）与长鑫存储（DRAM）的产能爬坡是中长期结构性变量。

## 2.7 行业结论

| 维度 | 评级 | 说明 |
|---|---|---|
| 长期需求增长 | **强** | AI 算力对内存带宽的需求是结构性的 |
| 供给纪律 | **中** | 寡头但历史多次破功，且当前三家同时扩产 |
| 定价权 | **中** | HBM 有改善，但标准品仍为商品 |
| 周期位置 | **顶部区域** | 毛利率、ROIC、资本开支、估值四项同时处于历史极值 |
| 政策风险 | **高** | 中美博弈直接作用于收入与产能 |
