# 扩展一个编译平台，需要编写一个 [Taro 插件](../plugin.html)，对编译时和运行时分别进行兼容。
## 端平台插件架构[​](how.html#端平台插件架构)
### 插件目录组织[​](how.html#插件目录组织)
以 `@tarojs/plugin-platform-weapp` 为例：
```text
├── src 源码目录
| ├── index.ts 插件入口
| ├── program.ts 编译时入口
| ├── template.ts 模板处理逻辑
| ├── runtime.ts 运行时入口
| ├── runtime-utils.ts 运行时依赖工具
| ├── apis.ts API 相关处理
| ├── apis-list.ts API 列表
| ├── components.ts 组件列表
| └── components-react.ts 给 React 使用的组件类型
├── types 类型
├── index.js 编译时入口
├── tsconfig.json
├── rollup.config.json
├── package.json
└── README.md
```

### 架构图[​](how.html#架构图)
!
## 编译时[​](how.html#编译时)
处理编译相关操作，如 Webpack 配置、模板生成规则等。
### 一、编写 Taro 插件[​](how.html#一编写-taro-插件)
前置阅读：[【如何编写一个 Taro 插件】](../plugin-custom.html)。
首先我们需要编写一个 Taro 插件来注册我们的编译平台，如：
index.ts
```js
export default (ctx) => {
 ctx.registerPlatform({
 name: 'weapp',
 useConfigName: 'mini',
 async fn(arg) {
 // ...
 },
 })
}
```

#### ctx.registerPlatform(options: object)[​](how.html#ctxregisterplatformoptions-object)
注册一个编译平台
##### options.name[​](how.html#optionsname)
`string`
平台名称，用于 CLI 编译命令。
如配置了 'xxx'，则编译此平台时使用的 CLI 命令为：
```shell
taro build --type xxx
taro build --type xxx --watch
```

##### options.useConfigName[​](how.html#optionsuseconfigname)
`string`
把 Taro 编译配置中的指定字段纳入编译。
Taro 小程序相关配置默认放在 `mini` 字段下，因此一般情况配置 `usingConfigName: mini` 即可。
##### options.fn(arg)[​](how.html#optionsfnarg)
`function`
端平台编译的入口函数，接受一个参数 `arg`，在此函数内我们可以开始编写端平台编译的逻辑。
###### arg[​](how.html#arg)
`object`
整合上述 [options.useConfigName](how.html#optionsuseconfigname) 指定字段后的 Taro 编译配置，编译配置各字段详情请看[编译配置详情](../config-detail.html)。
### 二、编写平台类[​](how.html#二编写平台类)
接下来给上一节中提到的插件入口函数添加内容。
我们把编译时常用的逻辑抽象出了一个基类 [TaroPlatformBase](platform-mini.html)，开发者可以[继承](platform-mini.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B9%B3%E5%8F%B0%E7%B1%BB)于此基类，从而实现端平台的编译。
然后在插件入口函数中调用上述自定义平台类的编译接口：
index.ts
```js
import Weapp from './program'

export default (ctx) => {
 ctx.registerPlatform({
 name: 'weapp',
 useConfigName: 'mini',
 async fn(arg) {
 // 调用自定义平台类的 start 函数，开始端平台编译
 const program = new Weapp(ctx, config)
 await program.start()
 },
 })
}
```

## 运行时[​](how.html#运行时)
处理运行时相关操作，如 API、组件、Taro runtime 逻辑等。
### 一、处理运行时入口[​](how.html#一处理运行时入口)
#### 1. 编写 runtime.ts[​](how.html#1-编写-runtimets)
`runtime.ts` 是我们运行时的入口文件，`Webpack` 编译时会把它注入到 `app.js` 中进行引用。
例子：
runtime.ts
```js
import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import { hostConfig, components } from './runtime-utils'

mergeReconciler(hostConfig)
mergeInternalComponents(components)
```
runtime-utils.ts
```js
export * from './components'
export const hostConfig = {}
```

`runtime.ts` 主要负责：

- 使用 `mergeReconciler` 函数把自定义的 `hostConfig` 合并到全局 [Reconciler](reconciler.html) 中。
- 使用 `mergeInternalComponents` 函数把自定义组件信息 [components.ts](platform-mini.html#31-%E7%BC%96%E5%86%99-componentsts) 合并到全局 `internalComponents` 组件信息对象中。
> 抽取 runtime-utils.ts 是为了方便其它插件引用

#### 2. 连接插件入口[​](how.html#2-连接插件入口)
为了让 `Webpack` 知道去哪里引用上述运行时入口文件，需要配置 `runtimePath`：
program.ts
```js
class Weapp extends TaroPlatformBase {
 runtimePath = '@tarojs/plugin-platform-weapp/dist/runtime'
}
```

### 二、处理 API[​](how.html#二处理-api)
在 Taro 中，用户需要从 `@tarojs/taro` 中引用 Taro 的内置 API 和 **Promise 化** 后的小程序 API。
```js
import Taro from '@tarojs/taro'

// 内置 API
Taro.getCurrentInstance()
// 小程序 API
Taro.request()
```

#### 1. 配置 initNativeApi[​](how.html#1-配置-initnativeapi)
原始的 `@tarojs/taro` 包只提供了内置 API。我们需要通过配置 `Reconciler` 的 [initNativeApi](reconciler.html#initnativeapi-taro) 选项，为全局 Taro 对象增加小程序的 API 和我们想要挂载在 Taro 对象上的 API。
apis-list.ts
```js
// 需要新增额外的原生 API 时，分拆一个单独的 `apis-list.ts` 文件能有利于维护。

// 同步 API
export const noPromiseApis = new Set(['getAccountInfoSync'])

// 异步 API，这些 API 都可以设置 `success`、`fail`、`complete` 回调，需要对它们进行 Promise 化。
export const needPromiseApis = new Set(['addCard'])
```
apis.ts
```js
import { processApis } from '@tarojs/shared'
import { noPromiseApis, needPromiseApis } from './apis-list'

declare const wx: any

export function initNativeApi (taro) {
 // 下文将详细介绍 processApis 函数
 processApis(taro, wx, {
 noPromiseApis,
 needPromiseApis
 })
 // 可以为 taro 挂载任意的 API
 taro.cloud = wx.cloud
}
```
runtime-utils.ts
```js
import { initNativeApi } from './apis'
export const hostConfig = { initNativeApi }
```

#### 2. processApis(taro, global, options)[​](how.html#2-processapistaro-global-options)
##### 入参[​](how.html#入参)
参数类型说明taroobjectTaro 对象globalobject小程序全局对象，如微信的 wxoptionsobject配置项
###### options[​](how.html#options)
属性类型说明noPromiseApisSet`<string>`新增的同步 APIneedPromiseApisSet`<string>`新增的异步 API
上述 `processApis` 函数帮助我们做了三件事情：

- 挂载所有平台公共的小程序 API 到 Taro 对象上
- 挂载常用的小程序全局对象属性 到 Taro 对象上
- 挂载用户传入的小程序 API 到 Taro 对象上
## 打包[​](how.html#打包)
插件使用 `Rollup` 进行打包，需要打包出以下文件：
入口文件模式必要说明src/index.tscjs是插件入口，供 Taro CLI 解析src/runtime.tses是运行时入口src/runtime-utils.tses否运行时工具集合，供继承的子类引用src/components-react.tses否有新增组件时需要实现，供 React 引用
注意，Taro 相关的包需要配置 `external`，以免重复打包：
rollup.config.js
```js
{
 external: ['@tarojs/shared', '@tarojs/service']
}
```

## 类型[​](how.html#类型)
Taro 核心库维护的类型可能没有包括当前插件新增的组件和 API，这时我们需要对 `@tarojs/taro` 和 `@tarojs/components` 进行[模块补充 (module augmentation)](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation)。
创建一个类型定义文件：
types/shims-iot.d.ts
```ts
// 为支付宝 IOT 小程序拓展新增的 API 和组件定义
import { ComponentType } from 'react'
import Taro from '@tarojs/taro'

declare module '@tarojs/taro' {
 interface Ix {
 onCashierEventReceive(cb: any): void
 }
 interface TaroStatic {
 ix: Ix
 }
}

interface PosterProps {
 posid: string
 audible?: boolean
 onSuccess?: () => void
 onFail?: () => void
 onChange?: () => void
}

declare module '@tarojs/components' {
 export const Poster: ComponentType<PosterProps>
}
```

开发者在类型定义文件中引入此文件即可：
global.d.ts
```ts
/// <reference types="@tarojs/plugin-platform-alipay-iot/types/shims-iot" />
```

## Web 端平台插件[​](how.html#web-端平台插件)
编译时常用的逻辑抽象出了一个基类 [TaroPlatformWeb](platform-web.html)，开发者可以[继承](platform-web.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B9%B3%E5%8F%B0%E7%B1%BB)于此基类，从而实现端平台的编译。
信息
自 3.6 版本开始支持 Web 端平台插件，并提供 `@tarojs/plugin-platform-h5` 插件

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
