---
date: 2026-11-02
repo: RayElg/kafgres
category: data
categoryLabel: 数据 / 数据库
rating: 3
language: Rust
stars: 424
starGain: 1
url: https://github.com/RayElg/kafgres
tags: [broker, cdc, event-sourcing, events, kafka, pgrx, postgres, postgresql]
generatedAt: 2026-11-03T03:03:51.004Z
---

# RayElg/kafgres · 项目解读

> **一句话**：把 Kafka broker 塞进 Postgres：原生 Kafka 客户端连 9092 端口，感知不到区别。

| 指标 | 值 |
| --- | --- |
| 分类 | 数据 / 数据库 |
| 评分 | 🌟🌟🌟 3.0 / 5.0 |
| 语言 | Rust |
| 星标 | 424 |
| 今日新增 | +1 |
| 仓库 | https://github.com/RayElg/kafgres |

## 1. 它解决什么问题

「数据库写完要发一条事件」这个动作，标准解法是 CDC（Debezium）或事务后手工 produce，两者都有同一个毛病：数据库事务与消息投递不是原子的。事务提交了但消息没发出去，或者消息发了但事务回滚，运维就得写补偿逻辑。kafgres 的做法是把 Kafka broker 直接做成 Postgres 扩展，topic、partition、offset、consumer group 与日志本身都落在数据库里，于是 `INSERT` 与 `produce` 可以写在同一个 `BEGIN ... COMMIT` 里——要么都成功，要么都不发生。

## 2. 为什么是现在

59 天、424 星，本轮 +1。它属于那种「日增几乎为零但概念极硬」的项目：解决的是分布式系统里最难被优雅解决的一类问题（双写一致性），思路激进——不用外部消息系统，直接把 broker 变成数据库的一部分。风险也在这里：这意味着消息吞吐要跟数据库共用一套存储与 WAL，高吞吐场景下会不会把库拖死，是所有人第一反应会问的问题。

## 3. 关键能力

- Postgres 扩展内嵌 Kafka broker，未修改的 Kafka 客户端连 9092 端口即可用（librdkafka、Java client、Sarama、kafka-python、kcat、kafka-*.sh 工具）
- topic / partition / offset / consumer group 与日志全部存于数据库
- 事务性耦合：INSERT 与 kafgres_produce() 可同处一个事务，一起提交或一起回滚
- 管理 API 兼容 kafka-topics.sh、kafka-configs.sh、kafka-consumer-groups.sh
- 保留策略回收磁盘，cleanup.policy=compact 的 topic 在两端都会压缩
- SCRAM-SHA-256 对接 Postgres 角色，或走 mTLS 证书认证
- 异步副本提升时消费者截断而非读取分叉数据
- 一致性测试套件驱动五种真实客户端（Java、librdkafka、Sarama、franz-go 等）

## 4. 架构与实现

把 Kafka 的日志抽象映射到 Postgres 的表存储：每个 partition 是一条追加写的记录序列，offset 即行序号，索引由数据库承担；produce 走扩展函数在事务上下文内写入，因此与业务表共享同一套 WAL 与提交语义。协议层用 Rust 实现了 Kafka wire protocol 的服务端，使原生客户端无需改动即可连接。最巧妙也最危险的一点是 segment 引擎复用了数据库的存储管理——省掉了自研日志的复杂度，但把消息吞吐与数据库 IO 绑在了一起。

## 5. 上手路径

1. 先只在一个非关键服务上验证：它改变的是消息系统的信任边界，不适合直接替换生产 Kafka
2. 压测重点看三件事：produce 延迟对同库 OLTP 的影响、WAL 膨胀速度、consumer 追赶时的 IO 争抢
3. 认证优先走 Postgres 角色 + SCRAM，别一开始就上 mTLS，排查成本高
4. compact topic 的行为要用真实客户端验证一遍，各语言客户端对 offset 语义的假设不完全一致
5. CDC 场景可以先拿它替代 Debezium 的 outbox 流程，这是它最有说服力的用法

## 6. 风险与边界

- 许可证标注 NOASSERTION，商用前必须确认授权条款
- 59 天的新项目，Kafka 协议面极宽，客户端兼容性很难全面覆盖
- 消息吞吐与数据库共享存储，高写入场景可能互相拖累，这是架构级风险而非配置问题
- broker 与数据库同生命周期：库挂了消息面一起挂，「消息系统解耦」的初衷被部分抵消
- 运维心智负担转移：现在既要懂 Postgres 又要懂 Kafka，故障定位链路更长

## 7. 谁该用 / 谁别碰

被 outbox / 双写一致性问题困扰的后端团队、事件溯源与 CDC 场景的架构师、以及愿意为「事务性消息」接受架构耦合的团队。

## 8. 评分依据

热度增速 **67** · 社区规模 **47** · 更新活跃 **61** · 工程成熟 **70**
（权重 45% / 25% / 18% / 12%，合成分映射到 1.0–5.0 星，按 0.5 取整 → **3.0 星**）

**结论**：概念上非常漂亮：用数据库的事务语义一次性消灭双写问题，比任何 outbox 框架都干净。但它把消息系统与数据库焊死在一起，等于用「耦合」换「一致」——这笔账在低吞吐、强一致的场景划算，在高吞吐场景很可能不划算。

---

<sub>本解读由 OpenSource Radar 每日流水线生成 · 期次 2026-11-02 · 依据仓库 README 与 GitHub 元数据</sub>
