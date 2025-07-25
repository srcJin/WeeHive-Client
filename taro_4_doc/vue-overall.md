# Taro 3 支持将 Web 框架直接运行在各平台，开发者使用的是真实的 Vue/Vue3 和 React 等框架。
但是 Taro 在组件、API、路由等规范上，遵循微信小程序规范，所以在 Taro 中使用 Vue/Vue3 和开发者熟悉的 Web 端有一些差异，以下将详细列出。
信息
[Breaking] 旧项目升级到 Taro v3.4+ 时，使用 Vue2 请安装依赖 `@tarojs/plugin-framework-vue2`、使用 Vue3 请安装依赖 `@tarojs/plugin-framework-vue3`、
## 入口组件和页面组件[​](vue-overall.html#入口组件和页面组件)
因为 Taro 遵循小程序的路由规范，所以引入了[入口组件](vue-entry.html)和[页面组件](vue-page.html)的概念，分别对应小程序规范的入口组件 `app` 和页面组件 `page`。
一个 Taro 应用由一个入口组件和至少一个页面组件所组成。
## 内置组件[​](vue-overall.html#内置组件)
备注
自 Taro v3.3+，支持使用 H5 标签进行开发，详情请见 [使用 HTML 标签](use-h5.html)
Taro 中可以使用小程序规范的内置组件进行开发，如 `<view>`、`<text>`、`<button>` 等。
### Taro 规范[​](vue-overall.html#taro-规范)

- 组件名遵从**小程序规范**（全小写，kebab-case）。
- 组件属性遵从**小程序规范**（全小写，kebab-case）。
- `Boolean` 值的组件属性需要显式绑定为 `true`，不支持简写。
- 事件规范请看下一节：[组件事件](vue-overall.html#%E4%BA%8B%E4%BB%B6)。
### 示例代码[​](vue-overall.html#示例代码)
```html
<template>
 <swiper
 class="box"
 :autoplay="true"
 :interval="interval"
 indicator-color="#999"
 @tap="handleTap"
 @animationfinish="handleAnimationFinish"
 >
 <swiper-item>
 <view class="text">1</view>
 </swiper-item>
 <swiper-item>
 <view class="text">2</view>
 </swiper-item>
 <swiper-item>
 <view class="text">3</view>
 </swiper-item>
 </swiper>
</template>

<script>
 export default {
 data() {
 return {
 interval: 1000,
 }
 },
 methods: {
 handleTap() {
 console.log('tap')
 },
 handleAnimationFinish() {
 console.log('finish')
 },
 },
 }
</script>
```

注意：如果某平台新增的组件或组件的属性还没被 Taro 支持，可以提交 [Issues](https://github.com/NervJS/taro/issues)，我们会尽快修复。
## 事件[​](vue-overall.html#事件)
事件和 Web 端一样。在事件回调函数中，第一个参数是事件对象，回调中调用 `stopPropagation` 可以阻止冒泡。
### Taro 规范[​](vue-overall.html#taro-规范-1)

- 使用 `@` 修饰符（或 `v-on:`，更多用法可以参考[Vue 文档](https://cn.vuejs.org/v2/guide/events.html)）替代小程序事件名中的 `bind`(替代支付宝小程序事件名中的 `on`)。
- Vue 中点击事件使用 `@tap`。
- 事件名称一般遵循组件属性规范（全部小写）。
- 在 `vue@3.0.6` 或之后版本使用 JSX 时，事件名遵循 **onCamelcase** 规范，例如 `onGetphonenumber`。具体原因可参考 [#8796](https://github.com/NervJS/taro/issues/8796#issuecomment-802796286)。
### 示例代码[​](vue-overall.html#示例代码-1)
```html
<template>
 <!-- 注意，Vue 中点击事件需要绑定 @tap，-->
 <!-- 其余小程序事件名把 bind 换成 @ 即是 Taro 事件名（支付宝小程序除外，它的事件就是以 on 开头，需要把 on 换成 @）-->
 <scroll-view
 style="height: 300px"
 :scroll-y="true"
 @tap="handleClick"
 @scroll="handleScroll"
 @scrolltoupper="handleScrollToUpper"
 >
 <view style="height: 200px">1</view>
 <view style="height: 200px">2</view>
 <view style="height: 200px">3</view>
 </scroll-view>
</template>

<script>
 export default {
 methods: {
 handleClick(e) {
 console.log('handleClick')
 e.stopPropagation() // 阻止冒泡
 },
 handleScroll() {
 console.log('handleScroll')
 },
 handleScrollToUpper() {
 console.log('handleScrollToUpper')
 },
 },
 }
</script>
```

### Taro 3 在小程序端的事件机制[​](vue-overall.html#taro-3-在小程序端的事件机制)
在 Taro 1 & 2 中，Taro 会根据开发者是否使用了 `e.stopPropagation()`，来决定在小程序模板中绑定的事件是以 `bind` 还是以 `catch` 形式。因此事件冒泡是由小程序控制的。
但是在 Taro 3，我们在小程序逻辑层实现了一套事件系统，包括事件触发和事件冒泡。在小程序模板中绑定的事件都是以 `bind` 的形式。
一般情况下，这套在逻辑层实现的小程序事件系统是可以正常工作的，事件回调能正确触发、冒泡、停止冒泡。
但是，小程序模板中绑定的 `catchtouchmove` 事件除了可以阻止回调函数冒泡触发外，还能阻止视图的**滚动穿透**，这点 Taro 的事件系统是做不到的。
### 阻止滚动穿透[​](vue-overall.html#阻止滚动穿透)
上一点中，我们介绍了 Taro 3 的事件机制。因为事件都以 `bind` 的形式进行绑定，因此不能使用 `e.stopPropagation()` 阻止滚动穿透。
针对滚动穿透，目前总结了两种解决办法：
#### 一、样式[​](vue-overall.html#一样式)
使用样式解决：[禁止被穿透的组件滚动](https://github.com/NervJS/taro/issues/5984#issuecomment-614502302)。
这也是最推荐的做法。
#### 二、catchMove[​](vue-overall.html#二catchmove)
> Taro 3.0.21 版本开始支持

但是地图组件本身就是可以滚动的，即使固定了它的宽高。所以第一种办法处理不了冒泡到地图组件上的滚动事件。
这时候可以为 `view` 组件增加 **catch-move** 属性：
```jsx
// 这个 View 组件会绑定 catchtouchmove 事件而不是 bindtouchmove
<view :catch-move="true"></view>
```

### dataset[​](vue-overall.html#dataset)
#### 一般情况[​](vue-overall.html#一般情况)
我们建议按 Vue、 React 的 DSL 特性进行思考，因为 `dataset` 是小程序的特性。
#### dataset[​](vue-overall.html#dataset-1)
`dataset` 是特别的模版属性，主要作用是可以在事件回调的 `event` 对象中获取到 `dataset` 相关数据。
**这点 Taro 是支持的**，在事件回调对象中可以通过 `event.target.dataset` 或 `event.currentTarget.dataset` 获取到。
#### 模板属性[​](vue-overall.html#模板属性)
上一点所说的，Taro 对于小程序 `dataset` 的模拟是在小程序的**逻辑层**实现的。**并没有真正在模板设置这个属性**。
但在小程序中有一些 API（如：`createIntersectionObserver`）获取到页面的节点的时候，由于节点上实际没有对应的属性而获取不到。
这时可以考虑使用 [taro-plugin-inject](https://github.com/NervJS/taro-plugin-inject) 插件注入一些通用属性，如：
config/index.js
```js
const config = {
 plugins: [
 [
 '@tarojs/plugin-inject',
 {
 components: {
 View: {
 'data-index': "'dataIndex'",
 },
 ScrollView: {
 'data-observe': "'dataObserve'",
 },
 },
 },
 ],
 ],
}
```

## 生命周期触发机制[​](vue-overall.html#生命周期触发机制)
Taro 3 在小程序逻辑层上实现了一份遵循 Web 标准 BOM 和 DOM API。因此 Vue 使用的 `document.appendChild`、`document.removeChild` 等 API 其实是 Taro 模拟实现的，最终的效果是把 Vue 的虚拟 DOM 树渲染为 Taro 模拟的 Web 标准 DOM 树。
因此在 Taro3 Vue 的生命周期触发时机和我们平常在 Web 开发中理解的概念有一些偏差。
### Vue 的生命周期[​](vue-overall.html#vue-的生命周期)
Vue 组件的生命周期方法在 Taro 中都支持使用。
触发时机：
##### 1. beforeMount ()[​](vue-overall.html#1-beforemount-)
[onLoad](vue-page.html#onload-options) 之后，页面组件渲染到 Taro 的虚拟 DOM 之前触发。
##### 2. mounted ()[​](vue-overall.html#2-mounted-)
页面组件渲染到 Taro 的虚拟 DOM 之后触发。
此时能访问到 Taro 的虚拟 DOM（使用 Vue ref、document.getElementById 等手段），并支持对其进行操作（设置 DOM 的 style 等）。
但此时不代表 Taro 的虚拟 DOM 数据已经完成从逻辑层 `setData` 到视图层。因此这时**无法通过 `createSelectorQuery` 等方法获取小程序渲染层 DOM 节点。** 只能在 [onReady](vue-page.html#onready-) 生命周期中获取。
### 小程序页面的方法[​](vue-overall.html#小程序页面的方法)
小程序页面的方法，在 Taro 的页面中同样可以使用：在 Vue 对象中书写同名方法。
**注意：**小程序页面方法在各端的支持程度不一，请查阅对应小程序的文档。
## Ref[​](vue-overall.html#ref)
[节点获取](ref.html)
## v-html[​](vue-overall.html#v-html)
在小程序端，使用 `v-html` 时有一些额外的配置选项和需要注意的地方，详情请参考[《渲染 HTML》](html.html)。
## 兼容 `<transition>`[​](vue-overall.html#兼容-transition)
`<transition>` 组件内部使用了 `getComputedStyle`，用于嗅探组件上的动画样式。但是在小程序中没有办法实现 `getComputedStyle`，可以通过以下方法进行 hack：
为元素的 `style` 设置 `transitionDuration` 或 `animationDuration` 指定过渡时间，即可兼容 `<transition>`。
```jsx
<transition>
 <view style="animationDuration: 0.5s" />
</transition>
```

## 其它限制[​](vue-overall.html#其它限制)

- 由于小程序访问元素位置为异步 API，因此小程序中无法使用内置的 `transition-group` 组件。
- 小程序中不支持 `<style scoped>`，建议使用 cssModules 代替。[#6662](https://github.com/NervJS/taro/issues/6662)
- 所有组件的 `id` 必须在整个应用中保持唯一（即使他们在不同的页面），否则可能导致事件不触发的问题，[#7317](https://github.com/NervJS/taro/issues/7317)
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
- [``](vue-overall.html#兼容-transition)
-
