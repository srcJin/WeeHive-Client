# 本篇将讲述 Taro 开发和原生小程序开发的主要差异。希望能帮助掌握原生小程序开发，但不太了解 Taro 的同学快速进行迁移。
## 全局变量[​](come-from-miniapp.html#全局变量)
在使用 React/Vue 时，全局变量推荐使用 **React Redux**、**Vuex** 等状态管理工具进行管理。
而有时候一些从原生小程序转换过来的项目，会把全局变量挂载到 `app` 上，然后使用 `getApp()` 获取它们。改造为 **React Redux**、**Vuex** 等状态管理方式成本比较大。
对于这种模式，Taro 提供了一些兼容的手段：
### React[​](come-from-miniapp.html#react)
可以使用入口组件的 `taroGlobalData` 属性兼容这种写法：
app.js
```jsx
class App extends Component {
 // 设置全局变量 "x"
 taroGlobalData = {
 x: 1,
 }

 // ...
}
```
index.js
```jsx
function Index() {
 // 获取并使用全局变量 "x"
 const app = Taro.getApp()
 console.log(app.x)

 // ...
}
```

### Vue3[​](come-from-miniapp.html#vue3)
可以使用 Taro 提供的 Vue 插件 `setGlobalDataPlugin` 兼容这种写法：
app.js
```jsx
// 使用插件，设置全局变量 "x"
import { createApp } from 'vue'
import { setGlobalDataPlugin } from '@tarojs/taro'

const App = createApp(...)
App.use(setGlobalDataPlugin, {
 x: 1
})
```
index.vue
```html
<script>
 // 获取并使用全局变量 "x"
 const app = Taro.getApp()
 console.log(app.x)
</script>
```

## API 的 scope[​](come-from-miniapp.html#api-的-scope)
在原生小程序开发中，在自定义组件中调用一些 API，如 `createCanvasContext`、`createSelectorQuery` 等时，需要传入指向自定义组件自身的 `this`，这里暂且称为 `scope`。
但是 Taro 3 使用 `<template>` 标签进行渲染，一般不会使用上自定义组件，因此一般不需要传入。
只有两种情况会使用上自定义组件，这时需要正确传入 `scope`，否则此类 API 的调用会失败。
### 1. 层级过深[​](come-from-miniapp.html#1-层级过深)
对于[模板不支持递归](platform-plugin/template.html#%E9%80%92%E5%BD%92%E4%B8%8E%E9%9D%9E%E9%80%92%E5%BD%92%E6%A8%A1%E6%9D%BF)的小程序（微信、QQ、京东小程序等），当页面元素嵌套层级超过一定层数（默认为 16 层，可以通过配置 [baseLevel](config-detail.html#minibaselevel) 修改），会创建一个自定义组件协助递归。
此自定义组件的 `scope` 没有暴露给开发者，因此层级过深且需要调用此类 API 时，需要使用 `<CustomWrapper>` 组件包裹。
相关讨论：[#9357](https://github.com/NervJS/taro/issues/9357)。
### 2. 使用了 `<CustomWrapper>`[​](come-from-miniapp.html#2-使用了-customwrapper)
[`<CustomWrapper>`](optimized.html#2-customwrapper-%E7%BB%84%E4%BB%B6) 组件常用于优化更新性能。它本质上是一个小程序自定义组件。
Taro v3.6.3+ 推荐使用以下方式获取：

- React
- Vue示例代码
```jsx
class Index extends React.Component {
 onReady () {
 // 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
 const ctx = document.getElementById('demo').ctx
 }

 render () {
 return (
 <View className='index'>
 <CustomWrapper id='demo'>
 <Text>Hello world!</Text>
 </CustomWrapper>
 </View>
 )
 }
}
```
示例代码
```html
<template>
 <custom-wrapper id="demo" />
</template>

<script>
 import Taro from '@tarojs/taro'

 export default {
 onReady() {
 // 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
 const ctx = document.getElementById('demo').ctx
 },
 }
</script>
```

Taro v3.6.2 及以下版本可以通过以下方式获取（需要对应小程序平台支持 `selectComponent` API）：

- React
- Vue示例代码
```jsx
<CustomWrapper id="demo" />

const page = Taro.getCurrentInstance().page
// 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
const scope = page.selectComponent('#demo')
```
示例代码
```html
<template>
 <custom-wrapper id="demo" />
</template>

<script>
 import Taro from '@tarojs/taro'

 export default {
 onReady() {
 const page = Taro.getCurrentInstance().page
 // 获取到 CustomWrapper 这个自定义组件对象，也就是所说的 scope
 const scope = page.selectComponent('#demo')
 },
 }
</script>
```

## dataset[​](come-from-miniapp.html#dataset)
小程序的 `dataset` 概念在 Taro 中得到部分实现，详细请看：

- [React dataset](react-overall.html#dataset)
- [Vue dataset](vue-overall.html#dataset)
## wxs[​](come-from-miniapp.html#wxs)
信息
Taro v3.6.25 开始支持。目前只支持在 Taro React 小程序中使用，暂不支持 Taro Vue，暂不支持在其他端使用。
Taro 支持使用各类小程序的视图层脚步语言，如微信小程序的 `wxs`、支付宝小程序的 `sjs`、京东小程序的 `jds`、头条小程序的 `sjs` 等，详情请看：

- [使用 WXS](optimized.html#%E4%BD%BF%E7%94%A8-wxs)
- 

- 
- 

- 

- 
- [``](come-from-miniapp.html#2-使用了-customwrapper)

- 
-
