# 信息
Taro v3.0.25 开始支持
## 基础混合用法[​](taro-in-miniapp.html#基础混合用法)
### 示例项目[​](taro-in-miniapp.html#示例项目)
[blended-basic](https://github.com/NervJS/taro/tree/next/examples/blended-basic)
### 用法[​](taro-in-miniapp.html#用法)
#### 1. 开发环境[​](taro-in-miniapp.html#1-开发环境)
1.1 推荐在 Taro 项目中进行开发调试，在生产环境下再把产物移动到原生小程序中进行预览。
```bash
# 和编译普通 Taro 项目一样
$ taro build --type [platform] --watch
```

1.2 小程序开发者工具导入 **Taro 项目**进行预览。
#### 2. 生产环境[​](taro-in-miniapp.html#2-生产环境)
1.1 编译项目时使用 `--blended` 参数以输出混合模式的代码。
```bash
# 以混合模式进行打包
$ taro build --type [platform] --blended
```

1.2 移动 Taro 项目的输出目录到原生项目内
也可以编写一个 **Taro 插件**自动移动，可以参考 [plugin-mv](https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js)。
1.3 原生项目的 `app.js` 中引用 Taro 入口文件
app.config.js
```js
// 必须引用 Taro 项目的入口文件
const taroApp = require('./taro/app.js').taroApp

App({
 onShow() {
 // 可选，调用 Taro 项目 app 的 onShow 生命周期
 taroApp.onShow()
 },

 onHide() {
 // 可选，调用 Taro 项目 app 的 onHide 生命周期
 taroApp.onHide()
 },
})
```

### Taro 项目引用原生项目的 JS 文件[​](taro-in-miniapp.html#taro-项目引用原生项目的-js-文件)
有时我们需要在 Taro 项目中引用原生项目中的公共 JS 模块（如上报 sdk）。但是 Webpack 会把这些公共模块一并打包，导致公共模块存在两份（Taro 产物中一份，原生项目中一份）。
为了优化包体积大小，我们希望不要打包到 Taro 产物中，而是直接引用原生项目中的代码，可以使用 Webpack 的 [externals](https://webpack.js.org/configuration/externals/) 配置去实现。
#### 例子[​](taro-in-miniapp.html#例子)
假设以下项目结构：
```text
├── miniapp 原生项目
| └── utils
| └── util.js
└── taro-project Taro 项目
 ├── config
 | └── index.js
 └── src
 └── pages
 └── index 此页面中希望引用 miniapp/utils/util.js
```

- 配置 `alias`，目的是让 `externals` 更方便地筛选出不需要打包的依赖。
- 配置 Webpack `externals`，选择出不需要打包的依赖，并计算好相对路径。
- 设置环境变量 `process.env.NODE_ENV` 为 `production` 时，externals 生效。（当没有手动设置环境变量时，默认在 `watch` 模式时环境变量为 `development`，否则为 `production`）config/index.js
```js
const config = {
 alias: {
 '@/utils':
 process.env.NODE_ENV === 'production'
 ? // 生产环境路径计算：
 // Webpack 编译发生在 taro-project 下，假设编译后的 taro-project/dist 会被移到到 miniapp/taro。
 // path.resolve(__dirname, '..') 为 taro-project。taro-project/dist 之于 taro-project，相当于 miniapp/taro 之于 miniapp。
 // 再根据 miniapp/utils 与 miniapp 的相对路径，得出 path.resolve(__dirname, '../utils')
 path.resolve(__dirname, '../utils')
 : // 开发环境直接引用原生项目下的依赖，方便开发
 path.resolve(__dirname, '../../miniapp/utils'),
 },
 mini: {
 webpackChain(chain) {
 chain.merge({
 externals: [
 (context, request, callback) => {
 const externalDirs = ['@/utils']
 const externalDir = externalDirs.find((dir) => request.startsWith(dir))

 if (process.env.NODE_ENV === 'production' && externalDir) {
 const externalDirPath = config.alias[externalDir]
 const res = request.replace('@/utils', path.relative(context, externalDirPath))

 return callback(null, `commonjs ${res}`)
 }

 callback()
 },
 ],
 })
 },
 },
}
```

#### 效果[​](taro-in-miniapp.html#效果)
taro-project/src/pages/index/index.js
```js
import { logSomething } from '@/utils/util'
logSomething()
```
webpack 打包结果
```js
{
 "./src/pages/index/index.jsx": (function(m, e, __webpack_require__) {
 var _utils_util = __webpack_require__("@/utils/util");
 // ...
 }),
 "@/utils/util": (function(module, exports) {
 // 成功 external
 module.exports = require("../../../utils/util");
 })
}
```

### Taro 项目引用原生项目的原生组件[​](taro-in-miniapp.html#taro-项目引用原生项目的原生组件)
有时我们需要在 Taro 项目中引用原生项目中的公共自定义组件。
和[引用原生项目的 js 文件](taro-in-miniapp.html#%E5%BC%95%E7%94%A8%E5%8E%9F%E7%94%9F%E9%A1%B9%E7%9B%AE%E7%9A%84-js-%E6%96%87%E4%BB%B6)一样，我们希望在开发环境能正确解析组件路径，在生产环境则直接引用原生项目的组件而不是重复打包，可以使用 Taro 的 [alias](config-detail.html#alias) 配置去实现。
#### 例子[​](taro-in-miniapp.html#例子-1)
假设以下项目结构：
```text
├── miniapp 原生项目
| └── components
| └── title
| ├── index.js
| ├── index.wxml
| ├── index.wxss
| └── index.json
└── taro-project Taro 项目
 ├── config
 | └── index.js
 └── src
 ├── components 小程序不支持引用根目录之外的组件，因此只能把原生项目的组件拷贝过来，让开发环境能正确解析组件
 | └── title
 └── pages
 └── index 此页面中希望引用 miniapp/components/title
```

- 把原生项目的组件拷贝到 Taro 项目，让开发环境能正确解析组件。
- 根据开发环境和生产环境，正确配置 `alias`config/index.js
```js
const config = {
 alias: {
 '@/components':
 process.env.NODE_ENV === 'production'
 ? // 生产环境路径计算：
 // Webpack 编译发生在 taro-project 下，假设编译后的 taro-project/dist 会被移到到 miniapp/taro。
 // path.resolve(__dirname, '..') 为 taro-project。taro-project/dist 之于 taro-project，相当于 miniapp/taro 之于 miniapp。
 // 再根据 miniapp/components 与 miniapp 的相对路径，得出 path.resolve(__dirname, '../components')
 path.resolve(__dirname, '../components')
 : // 开发环境引用 taro-project/src 下的组件
 path.resolve(__dirname, '../src/components'),
 },
}
```
taro-project/src/pages/index/index.config.js
```js
export default {
 usingComponents: {
 title: '@/components/title/index',
 },
}
```

### 对 Taro 项目的部分页面分包[​](taro-in-miniapp.html#对-taro-项目的部分页面分包)
在原生项目中直接配置 subPackages 指向 Taro 编译后的页面即可。
#### 依赖细分[​](taro-in-miniapp.html#依赖细分)
Taro 默认会把页面共用的普通依赖打包为主包里的 `common.js`，node_modules 依赖打包为主包里的 `vendor.js`。
但是在分包时，我们会希望把**只有在分包中共用的依赖**打包到分包中，而不是打在主包的 `common.js` 和 `vendor.js` 中。这就需要我们对依赖进行细分。可以借助 Webpack 的 [splitChunk](https://webpack.js.org/plugins/split-chunks-plugin/) 和 Taro 的 [addChunkPages](config-detail.html#miniaddchunkpages) 配置去实现。
#### 例子[​](taro-in-miniapp.html#例子-2)
假设以下项目结构：
```text
├── dist
| |── common.js 公共依赖
| |── vendors.js node_modules 依赖
| └── subPackages
| ├── foo
| ├── bar
| └── common.js 只有 subPackages 子包中使用的公共依赖
└── src
 └── subPackages
 ├── foo
 └── bar
```

- 使用 **Webpack splitChunks** 把只有 `subpackages` 子包独有的依赖打包到 `subpackages/common.js` 中。
- 使用 **Taro addChunkPages** 配置，在子包中所有页面的头部添加对 `subpackages/common.js` 的引用。config/index.js
```js
const config = {
 mini: {
 addChunkPages(pages) {
 pages.set('subpackages/bar/index', ['subpackages/common']),
 pages.set('subpackages/foo/index', ['subpackages/common'])
 },
 webpackChain(chain) {
 chain.merge({
 optimization: {
 splitChunks: {
 cacheGroups: {
 subpackagesCommon: {
 name: 'subpackages/common',
 minChunks: 2,
 test: (module, chunks) => {
 const isNoOnlySubpackRequired = chunks.find((chunk) => !/\bsubpackages\b/.test(chunk.name))
 return !isNoOnlySubpackRequired
 },
 priority: 200,
 },
 },
 },
 },
 })
 },
 },
}
```

## 把 Taro 项目作为一个完整分包[​](taro-in-miniapp.html#把-taro-项目作为一个完整分包)
### 示例项目[​](taro-in-miniapp.html#示例项目-1)
[blended-apart](https://github.com/NervJS/taro/tree/next/examples/blended-apart)
### 使用方法[​](taro-in-miniapp.html#使用方法)
#### 1. 安装使用插件[​](taro-in-miniapp.html#1-安装使用插件)
安装插件 [@tarojs/plugin-indie](https://github.com/NervJS/taro-plugin-indie)
```bash
npm i @tarojs/plugin-indie --save-dev
```

使用插件
config/index.js
```js
const config = {
 plugins: ['@tarojs/plugin-indie'],
}
```

#### 2. 开发环境[​](taro-in-miniapp.html#2-开发环境)
2.1 推荐在 Taro 项目中进行开发调试，在生产环境下再把产物移动到原生小程序中进行预览。
```bash
# 和编译普通 Taro 项目一样
$ taro build --type [platform] --watch
```

2.2 小程序开发者工具导入 **Taro 项目**进行预览。
#### 3. 生产环境[​](taro-in-miniapp.html#3-生产环境)
3.1 编译项目时使用 `--blended` 参数以输出混合模式的代码。
```bash
# 以混合模式进行打包
$ taro build --type [platform] --blended
```

3.2 移动 Taro 项目的输出目录到原生项目内
也可以编写一个 **Taro 插件**自动移动，可以参考 [plugin-mv](https://github.com/NervJS/taro/blob/next/examples/blended-basic/taro-project/plugin-mv/index.js)。
3.3 设置原生项目的分包配置
### 把 Taro 项目拆分到多个分包[​](taro-in-miniapp.html#把-taro-项目拆分到多个分包)
假设有一个 Taro 项目，它含有页面 A 和页面 B。我们需要把页面 A 加入原生项目的其中一个分包 M，把页面 B 加入到另一个分包 N。
为此，和普通打出**一个分包**不同的是，首先需要配置 Webpack 的 `output.jsonpFunction` 配置，避免 `chunkid` 的冲突。
config/index.js
```js
config = {
 mini: {
 webpackChain(chain) {
 chain.merge({
 output: {
 // 可以配合 npm script 和环境变量来动态修改
 jsonpFunction: process.env.JSONP_NAME || 'webpackJsonp',
 },
 })
 },
 },
}
```

然后分别对 A、B 页面使用混合模式打包，步骤和[把 Taro 项目作为一个完整分包](taro-in-miniapp.html#%E6%8A%8A-taro-%E9%A1%B9%E7%9B%AE%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%AE%8C%E6%95%B4%E5%88%86%E5%8C%85)一致。
## 把 Taro 组件编译为原生自定义组件[​](taro-in-miniapp.html#把-taro-组件编译为原生自定义组件)
信息
Taro v3.1.2 开始支持使用 React 开发，Taro v3.5.6 开始支持使用 Vue3 开发。
Taro 支持把组件编译为**原生小程序自定义组件**，供原生项目使用。
### 示例项目[​](taro-in-miniapp.html#示例项目-2)

- [blended-taro-component](https://github.com/NervJS/taro/tree/next/examples/blended-taro-component)
- [blended-taro-component-vue3](https://github.com/NervJS/taro/tree/next/examples/blended-taro-component-vue3)
### 使用方法[​](taro-in-miniapp.html#使用方法-1)
#### 1. 配置组件路径[​](taro-in-miniapp.html#1-配置组件路径)
修改 `app.config.js`，增加 `components` 配置，指向组件入口文件的路径：
app.config.js
```js
export default {
 // ...
 components: ['pages/index/index', 'components/picker/index'],
}
```

#### 2. 开始编译[​](taro-in-miniapp.html#2-开始编译)
使用 `taro build native-components` 命令，配合参数 `type`，即可编译出对应平台的自定义组件。
```bash
taro build native-components --type [platform] [--watch]
```

### props 传递[​](taro-in-miniapp.html#props-传递)
传递 props 给 Taro 编译出来的原生自定义组件时，需要统一通过 `props` 参数来传递：
page/index/index.js
```js
Page({
 data: {
 pickerProps: {
 mode: 'format',
 value: [0, 0, 0],
 onInitial(value, index) {
 console.log('onInitial')
 },
 },
 },
})
```
page/index/index.wxml
```xml
<!--index.wxml-->
<view>
 <picker props="{{pickerProps}}"></picker>
</view>
```
Taro 组件 - Picker
```jsx
function Picker ({ mode, value, onInitial }) {
 return (
 // ...
 )
}
```

### 小程序自定义组件对象实例[​](taro-in-miniapp.html#小程序自定义组件对象实例)
React 开发者可以通过 `props.$scope` 获取到小程序的自定义组件对象实例，而 Vue3 开发者可以通过 `props._scope` 获取。
使用某些小程序 API 时可能需要使用此实例，如获取视图层 DOM：
`Taro.createSelectorQuery().in(props.$scope)`
### 组件间通信与事件[​](taro-in-miniapp.html#组件间通信与事件)
支持使用两种方式进行组件间通信。
#### 使用小程序的 triggerEvent[​](taro-in-miniapp.html#使用小程序的-triggerevent)
和小程序原生自定义组件的[组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)一样，子组件使用 `triggerEvent` 发送事件。
子组件
```js
props.$scope.triggerEvent('myevent', myEventDetail, myEventOption)
```

#### 通过 props 传递事件回调[​](taro-in-miniapp.html#通过-props-传递事件回调)
父组件
```js
Page({
 data: {
 childProps: {
 // props 里可以传递函数
 onMyEvent (value, index) {
 console.log(value, index)
 }
 }
 }
})
// 和普通 props 传递一样
<child props="{{childProps}}">
```
子组件
```js
props.onMyEvent(value, index)
```

### 组件配置[​](taro-in-miniapp.html#组件配置)
信息
Taro v3.3.20 开始支持
微信小程序的自定义组件支持配置 [styleIsolation](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)、[virtualHost](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E8%99%9A%E6%8B%9F%E5%8C%96%E7%BB%84%E4%BB%B6%E8%8A%82%E7%82%B9) 等特性。在 Taro 中可以通过修改组件的配置文件进行设置：
index.config.js
```js
export default {
 styleIsolation: 'isolated',
 virtualHost: true,
}
```

### 使用 Slot[​](taro-in-miniapp.html#使用-slot)
信息
Taro v3.5.7 开始支持
组件可以使用 `<NativeSlot>` 作为小程序的 slot 节点。用法介绍：

- React
- VueTaro 组件
```jsx
import { View, NativeSlot } from '@tarojs/components'

export default function () {
 return (
 <View>
 <NativeSlot />
 </View>
 )
}
```
Taro 组件
```html
<template>
 <view>
 <native-slot />
 </view>
</template>
```
原生组件 - index.wxml
```xml
<comp>
 <view>Slot Content</view>
</comp>
```

## 新混合模式[​](taro-in-miniapp.html#新混合模式)
信息
Taro v3.6.13 开始支持使用 React 开发。
### 模式介绍[​](taro-in-miniapp.html#模式介绍)
新的混合模式在项目打包过程中会同时处理 `Taro组件编译为原生自定义组件` 的任务，该模式适用于同时需要用到 `页面混合模式` 以及 `Taro组件编译为原生自定义组件` 的场景。
> 以往使用
`> taro build native-components
`> 命令编译的自定义组件会额外包含一套Taro运行时，而这个特性可以帮助你在编译原生自定义组件的同时与taro页面共享同一套运行时代码，避免了两套运行时导致包体增大的问题。通过这种优化，我们能够更加高效地使用混合模式，并减少包体积的增长。

### 示例项目[​](taro-in-miniapp.html#示例项目-3)
[new-blended](https://github.com/NervJS/taro/tree/next/examples/new-blended)
### 使用方法[​](taro-in-miniapp.html#使用方法-2)
#### 1. 以新混合模式进行项目打包[​](taro-in-miniapp.html#1-以新混合模式进行项目打包)
编译项目时使用 --new-blended 参数替代老的 --blended 以输出新混合模式的代码。
```bash
$ taro build --type [platform] --new-blended
```

#### 2. 把 Taro 组件编译为原生自定义组件(可选)[​](taro-in-miniapp.html#2-把-taro-组件编译为原生自定义组件可选)
配置组件路径 修改 `app.config.js`，增加 `components` 配置，指向组件入口文件的路径：
app.config.js
```js
export default {
 // ...
 components: ['pages/index/index', 'components/picker/index'],
}
```

#### 3. 其他用法同 [普通混合模式](taro-in-miniapp.html#%E5%9F%BA%E7%A1%80%E6%B7%B7%E5%90%88%E7%94%A8%E6%B3%95).[​](taro-in-miniapp.html#3-其他用法同-普通混合模式)
### 注意事项[​](taro-in-miniapp.html#注意事项)
该特性已集成 `@tarojs/plugin-indie` 插件能力，不需要再启用该插件，即可把 Taro 项目作为一个完整分包使用。

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
- 
- 
- 

- 

- 
- 
- 
-
