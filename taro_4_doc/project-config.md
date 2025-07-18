# 各类小程序平台均有自己的项目配置文件，例如：

- 微信小程序，[project.config.json](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html?search-key=%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE)
- 百度小程序，[project.swan.json](https://smartprogram.baidu.com/docs/develop/devtools/projectconfig/)
- 抖音小程序，[project.config.json](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure)
- QQ 小程序，project.config.json
- 支付宝小程序，[mini.project.json](https://opendocs.alipay.com/mini/framework/project)
- 京东小程序，暂无发现
- 飞书小程序，[project.config.json](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/gadget-project-configuration?from=taro)
- ASCF元服务，[project.config.json](https://developer.huawei.com/consumer/cn/doc/atomic-ascf/project-json-config)
为了能够适配不同小程序平台的配置文件不同的情况，Taro 支持为各个小程序平台添加各自的项目配置文件。
通过 Taro 模板创建的项目都会默认拥有 `project.config.json` 这一项目配置文件，这个文件 **只能用于微信小程序**，若要兼容到其他小程序平台，请按如下对应规则来增加相应平台的配置文件，其配置与各自小程序平台要求的一致：
小程序平台添加配置文件微信小程序project.config.json百度小程序project.swan.json抖音小程序project.tt.jsonQQ 小程序project.qq.json支付宝小程序project.alipay.json飞书小程序project.lark.jsonASCF元服务ascf.config.json注意
飞书小程序从[插件](https://www.npmjs.com/package/@tarojs/plugin-platform-lark)1.0.2 版本开始，配置文件修改为`project.lark.json`，之前版本为`project.tt.json`。 推荐升级[飞书插件](https://www.npmjs.com/package/@tarojs/plugin-platform-lark)到最新版，避免使用 Taro 同时开发抖音小程序和飞书小程序配置文件 appId 冲突的问题。
