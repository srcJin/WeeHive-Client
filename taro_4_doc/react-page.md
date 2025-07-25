# 每一个 Taro 应用都至少包括一个页面组件，页面组件可以通过 Taro 路由进行跳转，也可以访问小程序页面的生命周期。
## 代码示例[​](react-page.html#代码示例)

- Class Component
- Functional Componentpage.js
```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

class Index extends Component {
 // 可以使用所有的 React 生命周期方法
 componentDidMount() {}

 // onLoad
 onLoad() {}

 // onReady
 onReady() {}

 // 对应 onShow
 componentDidShow() {}

 // 对应 onHide
 componentDidHide() {}

 // 对应 onPullDownRefresh，除了 componentDidShow/componentDidHide 之外，
 // 所有页面生命周期函数名都与小程序相对应
 onPullDownRefresh() {}

 render() {
 return <View className="index" />
 }
}

export default Index
```
page.js
```jsx
import React, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { useReady, useDidShow, useDidHide, usePullDownRefresh } from '@tarojs/taro'

function Index() {
 // 可以使用所有的 React Hooks
 useEffect(() => {})

 // 对应 onReady
 useReady(() => {})

 // 对应 onShow
 useDidShow(() => {})

 // 对应 onHide
 useDidHide(() => {})

 // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
 // 详情可查阅：【Hooks】
 usePullDownRefresh(() => {})

 return <View className="index" />
}

export default Index
```

## 页面组件配置[​](react-page.html#页面组件配置)
请参考 [页面配置](page-config.html)
## 生命周期方法[​](react-page.html#生命周期方法)
页面组件除了支持 React 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：
### onLoad (options)[​](react-page.html#onload-options)
> 在小程序环境中对应页面的
`> onLoad
`> 。

在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到页面路由参数。
### onUnload ()[​](react-page.html#onunload-)
信息
Taro v3.4.7 开始支持。
> 在小程序环境中对应页面的
`> onUnload
`> 。

一般情况下建议使用 React 的 `componentWillUnmount` 生命周期处理页面卸载时的逻辑。当某些特殊情况需要在页面的 `onUnload` 的同一个事件循环中实现逻辑时才使用它（如对小程序的生命周期执行顺序有强依赖关系时）。
### onReady ()[​](react-page.html#onready-)
> 在小程序环境中对应页面的
`> onReady
`> 。

从此生命周期开始可以使用 `createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。
#### 子组件的 onReady[​](react-page.html#子组件的-onready)
只在页面组件才会触发 `onReady` 生命周期。子组件可以使用 Taro 内置的[消息机制](apis/about/events.html)监听页面组件的 `onReady()` 生命周期：
页面中某个子组件
```jsx
import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
 $instance = getCurrentInstance()

 componentWillMount() {
 const onReadyEventId = this.$instance.router.onReady
 eventCenter.once(onReadyEventId, () => {
 console.log('onReady')

 // onReady 触发后才能获取小程序渲染层的节点
 Taro.createSelectorQuery()
 .select('#only')
 .boundingClientRect()
 .exec((res) => console.log(res, 'res'))
 })
 }

 render() {
 return <View id="only"></View>
 }
}
```

但是当子组件是**按需加载**的时候，页面 `onReady` 早已触发。如果此按需加载的子组件需要获取小程序渲染层的 DOM 节点，因为错过了页面 `onReady`，只能尝试使用 `Taro.nextTick` 模拟：
按需加载的子组件
```jsx
import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

class Test extends React.Component {
 componentDidMount() {
 Taro.nextTick(() => {
 // 使用 Taro.nextTick 模拟 setData 已结束，节点已完成渲染
 Taro.createSelectorQuery()
 .select('#only')
 .boundingClientRect()
 .exec((res) => console.log(res, 'res'))
 })
 }

 render() {
 return <View id="only" />
 }
}
```

### componentDidShow ()[​](react-page.html#componentdidshow-)
> 在小程序环境中对应页面的
`> onShow
`> 。

页面显示/切入前台时触发。
#### 子组件的 onShow[​](react-page.html#子组件的-onshow)
只在页面组件才会触发 `onShow` 生命周期。子组件可以使用 Taro 内置的[消息机制](apis/about/events.html)监听页面组件的 `onShow()` 生命周期：
页面中某个子组件
```jsx
import React from 'react'
import { View } from '@tarojs/components'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
 $instance = getCurrentInstance()

 componentWillMount() {
 const onShowEventId = this.$instance.router.onShow
 // 监听
 eventCenter.on(onShowEventId, this.onShow)
 }

 componentWillUnmount() {
 const onShowEventId = this.$instance.router.onShow
 // 卸载
 eventCenter.off(onShowEventId, this.onShow)
 }

 onShow = () => {
 console.log('onShow')
 }

 render() {
 return <View id="only" />
 }
}
```

### componentDidHide ()[​](react-page.html#componentdidhide-)
> 在小程序环境中对应页面的
`> onHide
`> 。

页面隐藏/切入后台时触发。
#### 子组件的 onHide[​](react-page.html#子组件的-onhide)
只在页面组件才会触发 `onHide` 生命周期。子组件可以使用 Taro 内置的[消息机制](apis/about/events.html)监听页面组件的 `onHide()` 生命周期：
页面中某个子组件
```jsx
import React from 'react'
import { View } from '@tarojs/components'
import { eventCenter, getCurrentInstance } from '@tarojs/taro'

class Test extends React.Component {
 $instance = getCurrentInstance()

 componentWillMount() {
 const onHideEventId = this.$instance.router.onHide
 // 监听
 eventCenter.on(onHideEventId, this.onHide)
 }

 componentWillUnmount() {
 const onHideEventId = this.$instance.router.onHide
 // 卸载
 eventCenter.off(onHideEventId, this.onHide)
 }

 onHide = () => {
 console.log('onHide')
 }

 render() {
 return <View id="only" />
 }
}
```

### onPullDownRefresh ()[​](react-page.html#onpulldownrefresh-)
监听用户下拉动作。

- 需要在全局配置的 window 选项中或页面配置中设置 `enablePullDownRefresh: true`。
- 可以通过 [Taro.startPullDownRefresh](apis/ui/pull-down-refresh/startPullDownRefresh.html) 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
- 当处理完数据刷新后，[Taro.stopPullDownRefresh](apis/ui/pull-down-refresh/stopPullDownRefresh.html) 可以停止当前页面的下拉刷新.
### onReachBottom ()[​](react-page.html#onreachbottom-)
监听用户上拉触底事件。

- 可以在全局配置的 window 选项中或页面配置中设置触发距离 `onReachBottomDistance`。
- 在触发距离内滑动期间，本事件只会被触发一次
> 需要
`> enablePullDownRefresh
`> 配置

### onPageScroll (Object)[​](react-page.html#onpagescroll-object)
监听用户滑动页面事件。
> 需要
`> enablePullDownRefresh
`> 配置

#### 参数[​](react-page.html#参数)
##### Object[​](react-page.html#object)
参数类型说明scrollTopNumber页面在垂直方向已滚动的距离（单位 px）
### onAddToFavorites (Object)[​](react-page.html#onaddtofavorites-object)
监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。
> Taro 3.0.3 版本开始支持。 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持。

#### 参数[​](react-page.html#参数-1)
##### Object[​](react-page.html#object-1)
参数类型说明webviewUrlString页面中包含 web-view 组件时，返回当前 web-view 的 url
此事件处理函数需要 return 一个 Object，用于自定义收藏内容：
字段说明默认值title自定义标题页面标题或账号名称imageUrl自定义图片，显示图片长宽比为 1：1页面截图query自定义 query 字段当前页面的 query
#### 示例代码[​](react-page.html#示例代码)
page.js
```js
onAddToFavorites (res) {
 // webview 页面返回 webviewUrl
 console.log('WebviewUrl: ', res?.webviewUrl)
 return {
 title: '自定义标题',
 imageUrl: 'https://demo.png',
 query: 'name=xxx&age=xxx',
 }
}
```

### onShareAppMessage (Object)[​](react-page.html#onshareappmessage-object)
监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。
**注意：**

- 当 `onShareAppMessage` 没有触发时，请在页面配置中设置 `enableShareAppMessage: true`
- 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
#### 参数[​](react-page.html#参数-2)
##### Object[​](react-page.html#object-2)
参数类型说明fromString转发事件来源。
button：页面内转发按钮；
menu：右上角转发菜单targetObject如果 `from` 值是 `button`，则 `target` 是触发这次转发事件的 `button`，否则为 `undefined`webViewUrlString页面中包含 `WebView` 组件时，返回当前 `WebView` 的 url
此事件需要 return 一个 Object，用于自定义转发内容，返回内容如下：
自定义转发内容
字段类型说明title转发标题当前小程序名称path转发路径当前页面 path ，必须是以 / 开头的完整路径imageUrl自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持 PNG 及 JPG 。显示图片长宽比是 5:4使用默认截图
#### 示例代码[​](react-page.html#示例代码-1)
page.js
```jsx
export default class Index extends Component {
 onShareAppMessage(res) {
 if (res.from === 'button') {
 // 来自页面内转发按钮
 console.log(res.target)
 }
 return {
 title: '自定义转发标题',
 path: '/page/user?id=123',
 }
 }
}
```
page.config.js
```jsx
export default {
 // 当 `onShareAppMessage` 没有触发时，可以尝试配置此选项
 enableShareAppMessage: true,
}
```

### onShareTimeline ()[​](react-page.html#onsharetimeline-)
监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。
> Taro 3.0.3 版本开始支持 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**注意：**

- 当 `onShareTimeline` 没有触发时，请在页面配置中设置 `enableShareTimeline: true`
- 只有定义了此事件处理函数，同时监听了 `onShareAppMessage`，右上角菜单才会显示“分享到朋友圈”按钮
#### 返回值[​](react-page.html#返回值)
事件处理函数可以返回一个 Object，用于自定义分享内容，不支持自定义页面路径，返回内容如下：
字段说明默认值title自定义标题当前小程序名称query自定义页面路径中携带的参数当前页面路径携带的参数imageUrl自定义图片路径，可以是本地文件或者网络图片。支持 PNG 及 JPG，显示图片长宽比是 1:1。默认使用小程序 Logo
#### 示例代码[​](react-page.html#示例代码-2)
page.js
```jsx
class Index extends Component {
 onShareAppMessage() {}
 onShareTimeline() {
 console.log('onShareTimeline')
 return {}
 }
}
```
page.config.js
```jsx
export default {
 // 当 `onShareAppMessage` 没有触发时，可以尝试配置此选项
 enableShareAppMessage: true,
 // 当 `onShareTimeline` 没有触发时，可以尝试配置此选项
 enableShareTimeline: true,
}
```

### onResize (Object)[​](react-page.html#onresize-object)
小程序屏幕旋转时触发。详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#%E5%9C%A8%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%90%AF%E7%94%A8%E5%B1%8F%E5%B9%95%E6%97%8B%E8%BD%AC%E6%94%AF%E6%8C%81)。
### onTabItemTap (Object)[​](react-page.html#ontabitemtap-object)
点击 tab 时触发。
#### 参数[​](react-page.html#参数-3)
##### Object[​](react-page.html#object-3)
参数类型说明indexString被点击 tabItem 的序号，从 0 开始pagePathString被点击 tabItem 的页面路径textString被点击 tabItem 的按钮文字
### onSaveExitState[​](react-page.html#onsaveexitstate)
信息
Taro v3.5.0+ 开始支持
每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。
> 只有微信小程序支持，基础库 2.7.4 开始支持。

### onTitleClick ()[​](react-page.html#ontitleclick-)
> 只有支付宝小程序支持

点击标题触发
### onOptionMenuClick ()[​](react-page.html#onoptionmenuclick-)
> 只有支付宝小程序支持

点击导航栏额外图标触发
### onPopMenuClick ()[​](react-page.html#onpopmenuclick-)
> 只有支付宝小程序支持

暂无说明
### onPullIntercept ()[​](react-page.html#onpullintercept-)
> 只有支付宝小程序支持

下拉截断时触发

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
