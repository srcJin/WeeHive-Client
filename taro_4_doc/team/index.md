# ## 团队构成[​](index.html#团队构成)
Taro 各个模块的核心开发者。设计并实现 Taro 的核心功能，把控模块的功能规划、特性引入和实现进度，当社区无法达成共识时做出最终决定。
![团队架构图](https://docs.taro.zone/assets/images/team-structure-10226f3a291bc921edb809ba425777f0.png)
运行机制包含技术委员会以及下设的 5 个团队（Core 团队、Plugins 团队、Platform 团队、创新团队、社区团队）。技术委员会由技术委员会委员组成，负责技术方向、项目管理、贡献政策、仓库托管、行为准则、维护合作者列表等，技术委员会主席负责定期组织会议。工作组由合作者成员组成，每个方向有一个 Owner，负责相关工作组的开发进展。
### [Core 团队](team-core.html)[​](index.html#core-团队)

- **Cli 工作组** 主要负责 Taro 命令行工具的开发和维护工作。
- **Compile 工作组** 负责维护、优化小程序和 H5 的编译系统。
- **Runtime 工作组** 负责维护小程序运行时系统。
### [Plugin 团队](team-plugin.html)[​](index.html#plugin-团队)
负责维护各 Taro 插件，包括端平台插件，React、Vue DevTools 等。

- **端平台插件工作组** 负责维护各端平台插件，包括对微信、支付宝、百度、字节跳动、QQ、京东、企业微信、飞书、快手、钉钉、小红书等厂商小程序的适配等。
- **混合开发工作组** 负责维护 Taro 与原生小程序的相互调用功能、Taro 开发原生插件等。
### [Platform 团队](team-platform.html)[​](index.html#platform-团队)
负责 App、Web、Open Harmony 等跨平台开发。

- **H5 工作组** 负责维护 H5 的各模块，包括路由、组件库、API 库等。
- **React Native 工作组** 负责 React Native 适配核心、组件库、API 库等部分的开发。
- **Open Harmony 工作组** 负责鸿蒙适配核心、组件库、API 库等部分的开发。
- **快应用工作组**
### [创新团队](team-innovate.html)[​](index.html#创新团队)
Taro 创新特新、新方向探索，如 wasm、rust、vite、flutter、electron 等。

- **UI 框架兴趣组** TaroUI、NutUI 等 UI 库和其他类型生态工具的研发与管理。
### [社区团队](team-community.html)[​](index.html#社区团队)
负责 Taro 生态与运营，和 Taro 社区的运营推广工作。
## 战略合作伙伴（联合团队）[​](index.html#战略合作伙伴联合团队)
共同参与 Taro 的研发和推广，监督 Taro 的发展流程，推动 Taro 在各领域真实业务场景中的落地和实践，促进 Taro 在业界的广泛应用。
[!](https://www.58.com/)[!](https://www.anjuke.com/)
Taro 3 React Native 部分由 58 的团队开发。[RN 相关的 RFC 可以关注](https://github.com/NervJS/taro-rfcs/pull/8)
58 同城技术委员会前端分会成立于 2016 年，由各个事业群、部门的前端团队联合组成，旨在促进公司内前端领域技术共享交流、协同共建、代码开源，统一技术标准和开发方案，提高公司整体前端基础建设水平，提升各团队之间沟通协作效率。58 也在积极参与开源社区建设，已对外开源 [Fair](https://github.com/wuba/Fair)、[WBBlades](https://github.com/wuba/WBBlades)、[Picasso](https://github.com/wuba/Picasso)、[React Native ECharts](https://github.com/wuba/react-native-echarts) 等多个项目，更多开源请关注：[https://github.com/wuba](https://github.com/wuba)。
[!](https://youshu.tencent.com/)[!](https://cdc.tencent.com/)[!](https://cdc.tencent.com/)[!](https://www.quickapp.cn/)[!](https://smartprogram.baidu.com/developer/index.html)[!](https://q.qq.com/)[!](https://open.alipay.com/channel/miniIndex.htm)[!](https://www.midea.cn/)[!](https://www.sxl.cn/)[!](index.html#)[!](https://www.16888.com/)[!](https://www.ikandy.cn/)
## [技术委员会](role-committee.html)[​](index.html#技术委员会)
负责技术方向、项目管理、项目发布、贡献政策、仓库托管、行为准则、维护合作者列表，定期参加 TSC 活动，主席（主持人）会在线上主持活动，并做好活动记录并公布。

- 技术委员会双周会

- 时间：每双周周四前，在技术委员会中预告下次会议的内容和日期。
- 议题：来自 Taro 下各项目中标注了 tsc-agenda 标签的事宜。会议结束后提交[会议纪要](https://tarojs.notion.site/979a8aad451b4316b04878d252073987?v=88c5bbd1d2c0416590a25cefebde1c74)。每次会议可邀请非委会参加，但无投票权。

- 基于共识决策的投票机制 *各个晋升投票环节，基于共识决策原则，原则上达成多数一致。*

- 待投票的议题需要在会议前周知各成员，给与成员足够调研思考时间
- 议题在即将达成一致时，在结题前必须询问“有人反对吗？”，以周知最后反对的机会
- 议题无法达成一致时，可以投票多数支持是否延期到下一个会议，否则必须继续讨论
- 议题满足“多数胜利”后即可通过，成员可以弃票

- 引导 / 培训机制

- 助手、合作者和技术委员会成员每个阶段，均提供相应的引导和培训，让新晋升者可以快速开展工作。
## [合作者 & 生态合作者](role-collaborator.html)[​](index.html#合作者--生态合作者)
维护 taro 相关仓库，帮助用户和初级贡献者，参加具体工作组为当前项目贡献代码和文档，评审和评论 issues 和 pull requests。

- 目的

- 旨在不断丰富 Taro 特性、性能、安全等。

- 权益

- Github NervJS 组 Member 权限，Github Write 权限，可以提交 commit 到 [NervJS/taro](https://github.com/NervJS/taro) 仓库，可以配置持续集成任务，负责 pull request 评审及合并
- 1 个 PR 合并需至少 2 名合作者或 1 名技术委员会成员同意即可进入观察期，观察期 3 个月即可正式成为合作者。

- 申请方法

- 合作者提名有突出贡献的个人贡献者，通过投票机制决定是否可以成为合作者。一名合格的合作者需具备：技术精进，业务精湛；沟通无障碍，至少读写无阻碍；人品优良，能钻研，不轻易半途而废；态度谦逊，能接受他人意见；Owner 心态，积极主动。
- 申请 pull request 参考模版如下： ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Collaborator.png)

- 退出机制

- 对不活跃的合作者，技术委员会有权进行移除或设置为荣休状态，荣休成员可以重新向技术委员会申请为活跃状态。如果一个合作者超过 6 个月无任何贡献，会自动设置成荣休状态。
## [助手](role-triage.html)[​](index.html#助手)
负责 taro 相关仓库新 issues 的维护，负责给 issues 或 pull requests 打标签，以及负责评论、关闭和重新开启 issue 或 pull request，负责将 bug 或 feature 分流给具体工作组。

- 目的

- 旨在减少 issue 列表，保持 issue 及时跟踪，促进新人参与及贡献 pull request。

- 权益

- Github NervJS 组 Member 权限，相关项目 Triage 权限，可以管理 issues 和 pull requests（没有写权限）。

- 申请方法

- 对 Taro 项目有全面了解和深度开发经验的任何人，可以在 NervJS/taro README.md 中提交一个 pull request，说明申请成为助手的动机并同意本项目的行为守则，经 2 名合作者同意即可通过。
- 申请 pull request 参考模版如下： ![PR 模板](https://storage.360buyimg.com/aotu-team/zakary-blog/2022-03-29-Taro-community/PR-Triage.png)

- 退出机制

- 对 6 个月不活跃的小助手进行定期移除。
## [个人贡献者](role-committer.html)[​](index.html#个人贡献者)
感谢为 Taro 贡献过代码的每一位开发者。
[![contributors](https://opencollective.com/taro/contributors.svg?width=890&button=false)](https://github.com/NervJS/taro/graphs/contributors)
## 特别鸣谢[​](index.html#特别鸣谢)
[![nanjingboy](https://avatars1.githubusercontent.com/u/1390888?s=100&v=4)](https://github.com/nanjingboy/)[![jsNewbee](https://avatars3.githubusercontent.com/u/20449400?s=100&v=4)](https://github.com/js-newbee/)[![Qiyu8](https://avatars2.githubusercontent.com/u/15245051?s=100&v=4)](https://github.com/Qiyu8/)[![Garfield550](https://avatars2.githubusercontent.com/u/3471836?s=100&v=4)](https://github.com/Garfield550/)[![zhiqingchen](https://avatars3.githubusercontent.com/u/1876158?s=100&v=4)](https://github.com/zhiqingchen)[nanjingboy](https://github.com/nanjingboy/)[jsNewbee](https://github.com/js-newbee/)[Qiyu8](https://github.com/Qiyu8/)[Garfield Lee](https://github.com/Garfield550/)[zhiqingchen](https://github.com/zhiqingchen)
- 

- 
- 
- 
- 
- 

- 
- 
- 
- 
- 
-
