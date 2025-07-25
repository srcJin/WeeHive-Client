# Taro3 支持使用 [Vant Weapp](https://youzan.github.io/vant-weapp/#/intro) 组件库进行开发，示例仓库：[taro3-vant-sample](https://github.com/NervJS/taro3-vant-sample)。
> 注意：使用原生第三方组件库进行开发的项目，
**> 不再具有多端转换的能力
**> 。

**[> Taroify
](https://github.com/mallfoundry/taroify)**> 是移动端组件库 Vant 的 Taro 版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。

> 但是，如果你想使用 Vant Weapp 又想拥有多端转换的能力，强烈推荐 Vant Weapp 社区衍生库
**[> @antmjs/vantui
](https://github.com/AntmJS/vantui)**> ， 它是基于 Vant Weapp 开发的多端组件库，同时支持 Taro 和 React。拥有 Taro 多端转换的能力，同时和 Vant Weapp 的 UI 和 API 高度保持一致。

## 使用方法[​](vant.html#使用方法)
### 配置忽略 vant 的样式尺寸转换[​](vant.html#配置忽略-vant-的样式尺寸转换)
如果直接使用 vant 组件，会发现样式偏小的情况，这是因为 Taro 默认将 vant 的样式尺寸从 **px** 转换为了 **rpx**，可以通过配置 [selectorblacklist](size.html#selectorblacklist) 来禁止转换。
配置方法：
config/index.js
```js
const config = {
 // ...
 mini: {
 postcss: {
 pxtransform: {
 enable: true,
 config: {
 selectorBlackList: [/van-/],
 },
 },
 },
 },
}
```

### 配置 copy 小程序原生文件[​](vant.html#配置-copy-小程序原生文件)
vant 组件中包含一些小程序原生文件的依赖，目前 Taro 没有对这些依赖进行分析。因此需要配置 `copy` 把这些依赖移动到 `dist` 目录中，例如需要 copy `wxs` 和样式文件，部分配置如下
config/index.js
```js
const config = {
 // ...
 copy: {
 patterns: [
 { from: 'src/components/vant-weapp/dist/wxs', to: 'dist/components/vant-weapp/dist/wxs' },
 { from: 'src/components/vant-weapp/dist/common/style', to: 'dist/components/vant-weapp/dist/common/style' },
 {
 from: 'src/components/vant-weapp/dist/common/index.wxss',
 to: 'dist/components/vant-weapp/dist/common/index.wxss',
 },
 {
 from: 'src/components/vant-weapp/dist/calendar/index.wxs',
 to: 'dist/components/vant-weapp/dist/calendar/index.wxs',
 },
 {
 from: 'src/components/vant-weapp/dist/calendar/utils.wxs',
 to: 'dist/components/vant-weapp/dist/calendar/utils.wxs',
 },
 {
 from: 'src/components/vant-weapp/dist/calendar/calendar.wxml',
 to: 'dist/components/vant-weapp/dist/calendar/calendar.wxml',
 },
 {
 from: 'src/components/vant-weapp/dist/calendar/components/month/index.wxs',
 to: 'dist/components/vant-weapp/dist/calendar/components/month/index.wxs',
 },
 ],
 options: {},
 },
}
```

### 引用 vant 组件[​](vant.html#引用-vant-组件)
首先需要在 **app 的 config** 或**页面的 config** 文件中配置 `usingComponents` 字段，如：
```js
export default {
 navigationBarTitleText: '首页',
 usingComponents: {
 'van-button': '../../components/vant-weapp/dist/button/index',
 },
}
```

然后在页面中便可以直接使用。
### 使用 vant 组件[​](vant.html#使用-vant-组件)
#### 1. 绑定属性[​](vant.html#1-绑定属性)

- React
- Vue
```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
 render() {
 return (
 <View>
 <van-button type="primary" loading loading-text="ing">
 Button
 </van-button>
 </View>
 )
 }
}
html
<template>
 <view>
 <van-button type="primary" :loading="true" loading-text="ing">Button</van-button>
 </view>
</template>

<script>
 export default {
 name: 'index',
 }
</script>
```

> 注意：如果组件的某些属性在 vant 文档里写着带有默认值
`> true
`> ，在 Taro 中使用时仍然需要
**> 显式设置为 true
**> 。

#### 2. 绑定事件[​](vant.html#2-绑定事件)

- React
- Vue
```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
 handleClick = () => {
 console.log('click')
 }

 onAfterRead = (res) => {
 console.log(res)
 }

 render() {
 return (
 <View>
 // 对应 bind:click 事件
 <van-button type="primary" onClick={this.handleClick}>
 Button
 </van-button>
 // 对应 bind:after-read 事件
 <van-uploader fileList={[]} onAfterRead={this.onAfterRead} />
 </View>
 )
 }
}
html
<template>
 <view>
 <van-button type="primary" @click="handleClick">Button</van-button>
 <van-uploader :fileList="[]" @after-read="onAfterRead" />
 </view>
</template>

<script>
 export default {
 methods: {
 handleClick() {
 console.log('click')
 },
 onAfterRead(res) {
 console.log(res)
 },
 },
 }
</script>
```

#### 3. Slot[​](vant.html#3-slot)

- React
- Vue
```jsx
import React, { Component } from 'react'
import { View, Slot } from '@tarojs/components'

export default class Index extends Component {
 render() {
 return (
 <View>
 <van-calendar poppable show>
 <Slot name="title">
 <View>Hello world</View>
 </Slot>
 </van-calendar>
 </View>
 )
 }
}
html
<template>
 <view>
 <van-calendar :poppable="true" :show="true">
 <slot-view :name='"title"'>
 <view>Hello world</view>
 </slot-view>
 </van-calendar>
 </view>
</template>

<script>
 export default {
 name: 'index',
 }
</script>
```

### 处理 Vant 组件默认值失效的问题[​](vant.html#处理-vant-组件默认值失效的问题)
> v1.0.2+ 开始支持，且需要 Taro v3.4.10+

在默认情况下，第三方自定义组件的属性会被编译为形如：`<van-empty image="{{i.image}}" />`。
这时自定义组件声明的默认值会失效（详情请浏览 [#11575](https://github.com/NervJS/taro/issues/11575)）。
```js
Component({
 props: {
 image: {
 type: String,
 value: 'default',
 },
 },
})
```

所以我们需要使用 [@tarojs/plugin-inject](https://github.com/NervJS/taro-plugin-inject/tree/v1.0.2#6-thirdpartycomponents) 为此属性增加默认值，把它编译为形如：`<van-empty image="{{i.image===undefined?'default':i.image}}" />`。
用法：
```js
const config = {
 plugins: [
 [
 '@tarojs/plugin-inject',
 {
 thirdPartyComponents: {
 // 为 `van-empty` 组件的 image 属性设置默认值 'default'
 'van-empty': {
 image: "'default'",
 },
 },
 },
 ],
 ],
}
```

## 常见问题[​](vant.html#常见问题)
### Vue3[​](vant.html#vue3)

- [`readonly` 属性不生效](https://github.com/NervJS/taro/issues/10337#issuecomment-989641124)
- 传递函数类型的属性失败：[React 写法](https://github.com/NervJS/taro/issues/8495#issuecomment-1179526364)、[Vue3 写法](https://github.com/NervJS/taro/issues/10337#issuecomment-989834523)
- 

- 
- 
- 
- 
- 

- 

-
