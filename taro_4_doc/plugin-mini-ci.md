# Taro 小程序端构建后支持 CI（持续集成）的插件 `@tarojs/plugin-mini-ci`。 目前已支持（企业）微信、京东、字节、支付宝、钉钉、百度小程序
功能包括：

- 构建完毕后自动唤起小程序开发者工具并打开项目
- 上传代码作为开发版并生成预览二维码
- 上传代码作为体验版并生成体验二维码
- 支持 上传、预览 hooks 回调
## 使用[​](plugin-mini-ci.html#使用)
### 安装[​](plugin-mini-ci.html#安装)
```shell
npm i @tarojs/plugin-mini-ci -D
```

> 本插件 Taro 3.x 版本均可使用，无需和其他 taro 包版本号保持一致；
[> 点击
](https://www.npmjs.com/package/@tarojs/plugin-mini-ci?activeTab=versions)> 查看最新版本。

### 使用插件[​](plugin-mini-ci.html#使用插件)
`/config/index.js`
```js
// 示例, 如果你使用 `vs code` 作为开发工具， 你还可以使用注释的语法引入插件包含的声明文件，可获得类似于typescript的友好提示
/**
 * @typedef { import("@tarojs/plugin-mini-ci").CIOptions } CIOptions
 * @type {CIOptions}
 */
const CIPluginOpt = {
 weapp: {
 appid: '微信小程序appid',
 privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/private.appid.key',
 },
 tt: {
 email: '字节小程序邮箱',
 password: '字节小程序密码',
 },
 alipay: {
 appid: '支付宝小程序appid',
 toolId: '工具id',
 privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem',
 },
 dd: {
 appid: '钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项',
 token: '令牌，从钉钉后台获取',
 },
 swan: {
 token: '鉴权需要的token令牌',
 },
 // 版本号
 version: '1.0.0',
 // 版本发布描述
 desc: '版本描述',
}
const config = {
 plugins: [['@tarojs/plugin-mini-ci', CIPluginOpt]],
}
```

除了给插件传入对象， 你也可以传入一个异步函数，在编译时动态返回相关配置。
```js
const CIPluginFn = async () => {
 // 可以在这里做一些异步事情， 比如请求接口获取配置
 /**
 * @typedef { import("@tarojs/plugin-mini-ci").CIOptions } CIOptions
 * @type {CIOptions}
 */
 return {
 weapp: {
 appid: '微信小程序appid',
 privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/private.appid.key',
 },
 tt: {
 email: '字节小程序邮箱',
 password: '字节小程序密码',
 },
 alipay: {
 appid: '支付宝小程序appid',
 toolId: '工具id',
 privateKeyPath: '密钥文件相对项目根目录的相对路径，例如 key/pkcs8-private-pem',
 },
 dd: {
 appid: '钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项',
 token: '令牌，从钉钉后台获取',
 },
 swan: {
 token: '鉴权需要的token令牌',
 },
 // 版本号
 version: '1.0.0',
 // 版本发布描述
 desc: '版本描述',
 }
}

const config = {
 plugins: [['@tarojs/plugin-mini-ci', CIPluginFn]],
}
```

### 作为选项配合 build 命令使用[​](plugin-mini-ci.html#作为选项配合-build-命令使用)
`package.json` 的 `scripts` 字段使用命令参数
```json
{
 "scripts": {
 // 构建完后自动 “打开开发者工具”
 "build:weapp": "taro build --type weapp --open",
 // 构建完后自动 “上传代码作为开发版并生成预览二维码”
 "build:weapp:preview": "taro build --type weapp --preview",
 // 构建完后自动“上传代码作为体验版”
 "build:weapp:upload": "taro build --type weapp --upload",
 // 构建完后自动“上传 dist/xxx 目录的代码作为体验版”， `--projectPath` 参数 适用于 taro 和 原生混合的场景
 "build:weapp:upload": "taro build --type weapp --upload --projectPath dist/xxx"
 },
 "taroConfig": {
 "version": "1.0.0",
 "desc": "上传描述"
 }
}
```

由上面的示例可知，插件为 taro cli 命令扩展了 4 个选项：

- --open 打开开发者工具，类似于网页开发中自动打开谷歌浏览器
- --preview 上传代码作为开发版并生成预览二维码
- --upload 上传代码作为体验版
此 3 个选项在一条命令里不能同时使用（互斥）

- --projectPath 指定要操作（打开、预览、上传）的目录路径， 默认情况下是操作构建后目录路径，即 [outputRoot 选项](config-detail.html#outputroot)；
此选项必须搭配上述三个选项之一一起使用；
此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](config-detail.html#outputroot)。
### 作为命令单独使用（3.6.0 开始支持）[​](plugin-mini-ci.html#作为命令单独使用360-开始支持)
```json
{
 "scripts": {
 // 直接 “打开开发者工具并载入项目”
 "build:weapp": "taro open --type weapp --projectPath dist/xxx",
 // 直接 “上传代码作为开发版并生成预览二维码”
 "build:weapp:preview": "taro preview --type weapp",
 // 直接“上传代码作为体验版”
 "build:weapp:upload": "taro upload --type weapp",
 // 上传指定目录代码作为体验版
 "build:weapp:upload2": "taro upload --type weapp --projectPath dist/xxx"
 },
 "taroConfig": {
 "version": "1.0.0",
 "desc": "上传描述"
 }
}
```

由上面的示例可知，插件额外新增了 3 个独立命令，让你可以直接操作指定目录。适用于把 `taro` 作为项目一部分的使用场景。
当直接作为命令使用时，有两个选项：

- --type 传入平台名称
- --projectPath 传入路径。 此选项优先级为： 终端传入的`--projectPath` > CI 配置的`projectPath` 选项 > [outputRoot 选项](config-detail.html#outputroot)
### Hooks 使用（3.6.0 开始支持）[​](plugin-mini-ci.html#hooks-使用360-开始支持)
在插件执行完 `预览`、`上传` 操作后， 插件会触发 2 个钩子事件：
事件名传递参数对象说明onPreviewComplete详细见下文CI 执行预览后触发onUploadComplete详细见下文CI 执行上传后触发
两个钩子被触发时传入的数据对象描述如下
```ts
interface HooksData {
 /** 是否预览、构建成功 */
 success: boolean
 data: {
 /** 当前构建的小程序平台 */
 platform: string
 /** 预览码本地路径 */
 qrCodeLocalPath: string
 /** 预览码内容 */
 qrCodeContent: string
 /** 插件传递的预览版本号 */
 version: string
 /** 插件传递的描述文本 */
 desc: string
 /** 预览或上传的目录路径 */
 projectPath: string
 }
 /** 错误对象 */
 error?: Error
}
```

你可以写一个自定义插件，来接收上述 2 个事件传递的值：
```js
// config/test.js
module.exports = function (ctx) {
 ctx.register({
 name: 'onPreviewComplete',
 fn: ({ success, data, error }) => {
 console.log('接收预览后数据', success, data, error)
 // 你可以在这里发送钉钉或者飞书消息
 },
 })
 ctx.register({
 name: 'onUploadComplete',
 fn: ({ success, data, error }) => {
 console.log('接收上传后数据', success, data, error)
 // 你可以在这里发送钉钉或者飞书消息
 },
 })
}
```

然后把自己写的插件配置应用起来：
```js
// config/index.js
const config = {
 plugins: [
 ['@tarojs/plugin-mini-ci', CI插件参数],
 // 应用自己写的插件
 require('path').join(__dirname, './test'),
 ],
 // 其他配置省略
}

module.exports = function (merge) {
 if (process.env.NODE_ENV === 'development') {
 return merge({}, config, require('./dev'))
 }
 return merge({}, config, require('./prod'))
}
```

### 各平台 支持的功能情况对比[​](plugin-mini-ci.html#各平台-支持的功能情况对比)
平台/功能自动打开 IDE输出预览二维码输出体验二维码weapp✅✅✅qywx✅✅✅tt✅✅✅alipay✅✅✅dd✅✅❌swan✅✅✅
> ps: 各平台上传都是支持的，只是不一定会输出二维码 企业微信和微信的各项参数是一样的，共用一个配置

## API[​](plugin-mini-ci.html#api)
### 插件配置[​](plugin-mini-ci.html#插件配置)
参数类型说明weappObject（企业）微信小程序 CI 配置ttObject抖音小程序配置alipayObject支付宝小程序配置ddObject钉钉小程序配置（3.6.0 版本开始支持）swanObject百度小程序配置versionstring上传版本号，不传时默认读取 package.json 下的 taroConfig 下的 version 字段descstring上传时的描述信息，不传时默认读取 package.json 下的 taroConfig 下的 desc 字段projectPathstring目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ）（3.6.0 版本开始支持）
### （企业）微信小程序 CI 配置[​](plugin-mini-ci.html#企业微信小程序-ci-配置)
参数类型说明appidstring小程序/小游戏项目的 appidprivateKeyPathstring私钥文件在项目中的相对路径，在获取项目属性和上传时用于鉴权使用devToolsInstallPathstring微信开发者工具安装路径，如果你安装微信开发者工具时选的默认路径，则不需要传入此参数(选填)projectPathstring上传的小程序的路径（默认取的 outputRoot ）（3.6.0 版本已废弃）ignoresstring[]上传需要排除的目录(选填)robotnumber指定使用哪一个 ci 机器人，可选值：1 ~ 30(选填, 3.6.0 版本开始支持)
官方 CI 文档[点这里](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)
### 抖音小程序 CI 配置[​](plugin-mini-ci.html#抖音小程序-ci-配置)
参数类型说明emailstring字节小程序邮箱passwordstring字节小程序密码
官方 CI 文档[点这里](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/development-assistance/ide-order-instrument/)
### 支付宝小程序 CI 配置[​](plugin-mini-ci.html#支付宝小程序-ci-配置)
参数类型说明appidstring小程序 appid(`3.6.0` 之前参数名是 `appId` ， `3.6.0` 开始统一成`appid`)toolIdstring工具 id，[查看这里复制](https://open.alipay.com/dev/workspace/key-manage/tool)privateKeyPathstring密钥文件相对项目根目录的相对路径, 私钥可通过[支付宝开放平台开发助手](https://opendocs.alipay.com/common/02kipl)生成privateKeystring私钥文本内容, 生成方式同上(privateKeyPath 和 privateKey 之间必须要填写其中一个； 3.6.0 版本开始支持)devToolsInstallPathstring小程序开发者工具安装路径(选填, 3.6.0 版本开始支持)clientTypestring上传的终端,终端类型见下表（选填，默认值 alipay）
```md
终端类型值及其含义：

alipay: 支付宝

ampe：AMPE

amap：高德

genie：天猫精灵

alios：ALIOS

uc：UC

quark：夸克

koubei：口碑

alipayiot：IoT

cainiao：菜鸟

alihealth：阿里健康

health: 阿里医院
```

官方 CI 文档[点这里](https://opendocs.alipay.com/mini/02q29z)
### 钉钉小程序 CI 配置（3.6.0 版本开始支持）[​](plugin-mini-ci.html#钉钉小程序-ci-配置360-版本开始支持)
参数类型说明appidstring钉钉小程序 appid,即钉钉开放平台后台应用管理的 MiniAppId 选项（必填）tokenstring令牌，从钉钉后台获取 （必填）devToolsInstallPathstring小程序开发者工具安装路径（选填）
`taro` 集成的钉钉 CI 使用了[钉钉官方仓库](https://github.com/open-dingtalk/dingtalk-design-cli)中的 `dingtalk-miniapp-opensdk` 包，查阅源码封装而成
### 百度小程序 CI 配置[​](plugin-mini-ci.html#百度小程序-ci-配置)
参数类型说明tokenstring有该小程序发布权限的登录密钥minSwanVersionstring最低基础库版本, 不传默认为 3.350.6
官方 CI 文档[点这里](https://smartprogram.baidu.com/docs/develop/devtools/commandtool/)
### 完整 ts 接口描述[​](plugin-mini-ci.html#完整-ts-接口描述)
```ts
export interface CIOptions {
 /** 发布版本号，默认取 package.json 文件的 taroConfig.version 字段 */
 version?: string
 /** 版本发布描述， 默认取 package.json 文件的 taroConfig.desc 字段 */
 desc?: string
 /** 目标项目目录，对所有小程序生效（不传默认取 outputRoot 字段 ） */
 projectPath?: string
 /** 微信小程序CI配置, 官方文档地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html */
 weapp?: WeappConfig
 /** 抖音小程序配置, 官方文档地址：https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/development-assistance/ide-order-instrument/ */
 tt?: TTConfig
 /** 支付宝系列小程序配置，官方文档地址： https://opendocs.alipay.com/mini/miniu/api */
 alipay?: AlipayConfig
 /** 钉钉小程序配置 */
 dd?: DingtalkConfig
 /** 百度小程序配置, 官方文档地址：https://smartprogram.baidu.com/docs/develop/devtools/commandtool/ */
 swan?: SwanConfig
}

export type ProjectType = 'miniProgram' | 'miniGame' | 'miniProgramPlugin' | 'miniGamePlugin'

/** 微信小程序配置 */
export interface WeappConfig {
 /** 小程序/小游戏项目的 appid */
 appid: string
 /** 私钥文件路径，在获取项目属性和上传时用于鉴权使用 */
 privateKeyPath: string
 /** 微信开发者工具安装路径 */
 devToolsInstallPath?: string
 /** 类型，默认miniProgram 小程序 */
 type?: ProjectType
 /** 上传需要排除的目录 */
 ignores?: Array<string>
 /** 指定使用哪一个 ci 机器人，可选值：1 ~ 30 */
 robot?: number
}

/** 抖音小程序配置 */
export interface TTConfig {
 /** 绑定的邮箱账号 */
 email: string
 /** 密码 */
 password: string
}

/** 终端类型 */
export type AlipayClientType =
 | 'alipay' /** 支付宝 */
 | 'ampe' /** AMPE */
 | 'amap' /** 高德 */
 | 'genie' /** 天猫精灵 */
 | 'alios' /** ALIOS */
 | 'uc' /** UC */
 | 'quark' /** 夸克 */
 | 'koubei' /** 口碑 */
 | 'alipayiot' /** loT */
 | 'cainiao' /** 菜鸟 */
 | 'alihealth' /** 阿里健康(医蝶谷) */
 | 'health' /** 阿里医院 */

/** 支付宝系列小程序配置 */
export interface AlipayConfig {
 /** 小程序appid */
 appid: string
 /** 工具id */
 toolId: string
 /** 私钥文件路径，在获取项目属性和上传时用于鉴权使用(privateKeyPath和privateKey之间必须要填写其中一个) */
 privateKeyPath: string
 /** 私钥文本内容，在获取项目属性和上传时用于鉴权使用(privateKeyPath和privateKey之间必须要填写其中一个) */
 privateKey: string
 /** 小程序开发者工具安装路径 */
 devToolsInstallPath?: string
 /** 上传的终端, 默认alipay */
 clientType?: AlipayClientType
}

export type DingtalkProjectType =
 /** 第三方个人应用 */
 | 'dingtalk-personal'
 /** 第三方企业应用 */
 | 'dingtalk-biz-isv'
 /** 企业内部应用 */
 | 'dingtalk-biz'
 /** 企业定制应用 */
 | 'dingtalk-biz-custom'
 /** 工作台组件 */
 | 'dingtalk-biz-worktab-plugin'
export interface DingtalkConfig {
 /** 钉钉小程序appid,即钉钉开放平台后台应用管理的 MiniAppId 选项（必填） */
 appid: string
 /** 令牌，从钉钉后台获取 */
 token: string
 /** 小程序开发者工具安装路径 */
 devToolsInstallPath?: string
 /** 钉钉应用类型， 默认为:'dingtalk-biz' (企业内部应用) */
 projectType?: DingtalkProjectType
}

/** 百度小程序配置 */
export interface SwanConfig {
 /** 有该小程序发布权限的登录密钥 */
 token: string
 /** 最低基础库版本, 不传默认为 3.350.6 */
 minSwanVersion?: string
}
```

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
- 
- 
-
