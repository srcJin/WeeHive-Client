# Taro 3 为了兼容 React、Vue 等 Web 开发框架，在运行时对浏览器环境进行模拟，实现了 BOM 和 DOM 等一系列 API。相比 Taro 1/2，Taro 3 是一款重运行时、轻编译时的框架，在性能方面会有一定损耗。因此 Taro 3 提供了一系列的性能优化手段，从而提升 Taro 3 应用的性能。
## 半编译模式 —— CompileMode[​](optimized.html#半编译模式--compilemode)
详情请看[半编译模式](complier-mode.html)。
## 模版不使用 XS[​](optimized.html#模版不使用-xs)
信息
`4.0.7` 开始支持
模版的拼接使用 xs，会有时间上的损耗，如果要追求极致的性能，可以禁用在模版中使用 xs，但这会导致包体积变大。 用法：
在 Taro 编译配置中禁用模版 xs：
config/index.js
```js
const config = {
 mini: {
 experimental: {
 useXsForTemplate: false
 }
 }
 // ...
}
```

## 使用 WXS[​](optimized.html#使用-wxs)
信息
Taro v3.6.25 开始支持。目前只支持在 Taro React 小程序中使用，暂不支持 Taro Vue，暂不支持在其他端使用。
借助 **CompileMode**，Taro 可以支持使用各类小程序的视图层脚步语言，如微信小程序的 `wxs`、支付宝小程序的 `sjs`、京东小程序的 `jds`、头条小程序的 `sjs` 等。
用法：
pages/index/index.jsx
```jsx
import { View, ScrollView, Script } from '@tarojs/components'

export default function Index() {
 return (
 {/* 首先需要开启编译模式 */}
 <View compileMode>

 {/* <Script> 组件等于小程序 <wxs> 组件，需要填写 src 和 module 属性，详情请参考小程序官方文档 */}
 <Script src='./animation.wxs' module='ani'></Script>

 {/* 访问 WXS 的导出值 */}
 <View>{ani.msg}</View>
 <View>{ani.getMsg()}</View>
 <View hoverClass={ani.hoverClass}></View>
 <View hoverClass={ani.getHoverClass()}></View>

 {/* WXS 响应事件 */}
 <ScrollView onScrollToUpper={ani.toupper}>
 <View onTouchStart={ani.touchstart} onTouchMove={ani.touchmove} onTouchEnd={ani.touchend}></View>
 </ScrollView>
 </View>
 )
}
```

## 优化初次渲染性能[​](optimized.html#优化初次渲染性能)
提示
一般情况下不需要开启，请根据实际情况进行使用。
当初次渲染的数据量非常大时，可能会导致页面白屏一段时间。因此 Taro 提供了[预渲染](prerender.html)功能来解决此问题。
## 优化更新性能[​](optimized.html#优化更新性能)
提示
经验证明，此项优化能大大减少 Taro3 的更新卡顿问题，尤其是在低端机上。
Taro3 使用小程序的 `template` 进行渲染，一般情况下并不会使用原生自定义组件。这会导致一个问题，所有的 `setData` 更新都是由页面对象调用，如果我们的页面结构比较复杂，更新的性能就会下降。
层级过深时 `setData` 的数据结构：
```js
page.setData({
 'root.cn.[0].cn.[0].cn.[0].cn.[0].markers': [],
})
```

针对这个问题，主要的思路是**借用小程序的原生自定义组件，以达到局部更新的效果**，从而提升更新性能。
期望的 `setData` 数据结构：
```js
component.setData({
 'cn.[0].cn.[0].markers': [],
})
```

开发者有两种办法可以实现这个优化：
### 1. 全局配置项 baseLevel[​](optimized.html#1-全局配置项-baselevel)
对于不支持模板递归的小程序（微信、QQ、京东小程序），在 DOM 层级达到一定数量后，Taro 会使用原生自定义组件协助递归。
简单理解就是 DOM 结构超过 N 层后，会使用原生自定义组件进行渲染。N 默认是 16 层，可以通过修改配置项 [baseLevel](config-detail.html#minibaselevel) 修改 N。
把 `baseLevel` 设置为 `8` 甚至 `4` 层，能非常有效地提升更新时的性能。但是设置是全局性的，会带来若干问题：

- `flex` 布局在跨原生自定义组件时会失效，这是影响最大的一个问题。
- `SelectorQuery.select` 方法的[跨自定义组件的后代选择器](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.select.html)写法需要增加 `>>>`：`.the-ancestor >>> .the-descendant`
### 2. CustomWrapper 组件[​](optimized.html#2-customwrapper-组件)
为了解决全局配置不灵活的问题，我们增加了一个基础组件 `CustomWrapper`。它的作用是创建一个原生自定义组件，对后代节点的 `setData` 将由此自定义组件进行调用，达到局部更新的效果。
开发者可以使用它去**包裹遇到更新性能问题的模块**，提升更新时的性能。因为 `CustomWrapper` 组件需要手动使用，开发者能够清楚“这层使用了自定义组件，需要避免自定义组件的两个问题”。

- React
- Vue示例代码
```jsx
import { View, Text } from '@tarojs/components'

export default function () {
 return (
 <View className="index">
 <Text>Demo</Text>
 <CustomWrapper>
 <GoodsList />
 </CustomWrapper>
 </View>
 )
}
```
示例代码
```html
<template>
 <view class="index">
 <text>Demo</text>
 <custom-wrapper>
 <GoodsList />
 </custom-wrapper>
 </view>
</template>

<script>
 import GoodsList from '@/components/goods-list'

 export default {
 components: {
 GoodsList,
 },
 }
</script>
```

## 优化长列表性能[​](optimized.html#优化长列表性能)
针对长列表的场景，Taro 提供了 [VirtualList](virtual-list.html) 组件辅助开发者进行优化。
它**只会渲染当前可视区域内的组件**，非可视区域的组件将会在用户滚动到可视区域内后再渲染，从而减少实际渲染的组件、优化渲染性能。
## 跳转预加载[​](optimized.html#跳转预加载)
信息
Taro 1 / 2 中提供的 componentWillPreload 钩子在 Taro 3 中已废弃。
在小程序中，从调用 `Taro.navigateTo` 等路由跳转 API 后，到小程序页面触发 `onLoad` 会有一定延时，因此一些网络请求可以提前到发起跳转的前一刻去请求。
Taro 3 提供了 `Taro.preload` API，可以把需要预加载的内容作为参数传入，然后在新页面加载后通过 `Taro.getCurrentInstance().preloadData` 获取到预加载的内容。
例子：

- React
- Vue示例代码（用法一）
```jsx
// A 页面
// 调用跳转方法前使用 Taro.preload
Taro.preload(fetchSomething())
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
componentWillMount () {
 console.log(Taro.getCurrentInstance().preloadData)
}
```
示例代码（用法一）
```js
// A 页面
// 调用跳转方法前使用 Taro.preload
Taro.preload(fetchSomething())
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
mounted () {
 console.log(Taro.getCurrentInstance().preloadData)
}
```

- React
- Vue示例代码（用法二）
```jsx
// A 页面
Taro.preload('x', 1)
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
componentWillMount () {
 console.log(Taro.getCurrentInstance().preloadData)
}
```
示例代码（用法二）
```js
// A 页面
Taro.preload('x', 1)
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
mounted () {
 console.log(Taro.getCurrentInstance().preloadData)
}
```

## 写法最佳实践[​](optimized.html#写法最佳实践)
对小程序的性能影响较大的有两个因素，分别是 `setData` 的**数据量**和单位时间 `setData` 函数的**调用次数**。
当遇到性能问题时，在项目中打印 `setData` 的数据将非常有利于帮助定位问题。开发者可以通过进入 Taro 项目的 `dist/taro.js` 文件，搜索定位 `.setData` 的调用位置，然后对数据进行打印。
在 Taro 中，会对 `setData` 做 **batch** 捆绑更新操作，因此更多时候只需要考虑 **setData 的数据量大小**问题。
以下是我们梳理的开发者需要注意的写法问题：
### 1. 删除楼层节点要谨慎处理[​](optimized.html#1-删除楼层节点要谨慎处理)
假设有一种这样一种结构：
```jsx
<View>
 <!-- 轮播 -->
 <Slider />
 <!-- 商品组 -->
 <Goods />
 <!-- 模态弹窗 -->
 {isShowModal && <Modal />}
</View>
```

Taro3 目前对节点的删除处理是有缺陷的。当 `isShowModal` 由 `true` 变为 `false` 时，模态弹窗会从消失。此时 `Modal` 组件的兄弟节点都会被更新，`setData` 的数据是 `Slider` + `Goods` 组件的 DOM 节点信息。
一般情况下，影响不会太大，开发者无须由此产生心智负担。但倘若待删除节点的兄弟节点的 DOM 结构非常复杂，如一个个楼层组件，删除操作的副作用会导致 `setData` 数据量较大，从而影响性能。
##### 解决办法：[​](optimized.html#解决办法)
目前我们可以这样优化，隔离删除操作：
```jsx
<View>
 <!-- 轮播 -->
 <Slider />
 <!-- 商品组 -->
 <Goods />
 <!-- 模态弹窗 -->
 <View>
 {isShowModal && <Modal />}
 </View>
</View>
```

> 我们正在对删除节点的算法进行优化，完全规避这种不必要的 setData，于 v3.1 推出。

### 2. 基础组件的属性要保持引用[​](optimized.html#2-基础组件的属性要保持引用)
> React

假设基础组件（如 `View`、`Input` 等）的属性值为非基本类型时，尽量保持对象的引用。
假设有以下写法：
```jsx
<Map
 latitude={22.53332}
 longitude={113.93041}
 markers={[
 {
 latitude: 22.53332,
 longitude: 113.93041,
 },
 ]}
/>
```

每次渲染时，React 会对基础组件的属性做浅对比，这时发现 `markers` 的引用不同，就会去更新组件属性。最后导致 `setData` 次数增多、`setData` 数据量增大。
#### 解决办法：[​](optimized.html#解决办法-1)
可以通过 `state`、闭包等手段保持对象的引用：
```jsx
<Map latitude={22.53332} longitude={113.93041} markers={this.state.markers} />
```

### 3. 基础组件不要挂载额外属性[​](optimized.html#3-基础组件不要挂载额外属性)
基础组件（如 `View`、`Input` 等）如若设置了非标准的属性，目前这些额外属性会被一并进行 `setData`，而实际上小程序并不会理会这些属性，所以 `setData` 的这部分数据是冗余的。
例如 `Text` 组件的标准属性有 `selectable`、`user-select`、`space `、`decode` 四个，如果我们为它设置一个额外属性 `something`，那么这个额外的属性也是会被 setData。
```jsx
<Text something="extra" />
```

## 实战文章[​](optimized.html#实战文章)

- [《Taro 助力京喜拼拼项目性能体验优化》](https://docs.taro.zone/blog/2021-02-08-taro-jxpp)
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
