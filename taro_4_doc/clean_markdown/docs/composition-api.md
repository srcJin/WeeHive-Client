# 信息
Taro v3.4.0+ 开始支持
Vue3 提供了 [Composition API（组合式 API）](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 特性，和传统的 Options API 不同，Composition API 提供了全新的编码方式 ，可以让我们更好地去组织和复用代码逻辑。
本文将会介绍 Taro 提供的一些**自定义 Composition APIs**。而关于 Composition API 的相关用法和内置 API 等信息，请参阅 Vue 文档：

- [介绍](https://v3.vuejs.org/guide/composition-api-introduction.html)
- [Setup 函数](https://v3.vuejs.org/guide/composition-api-setup.html)
- [生命周期](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html)
- [Provider / Inject](https://v3.vuejs.org/guide/composition-api-provide-inject.html)
- [Template Refs](https://v3.vuejs.org/guide/composition-api-template-refs.html)
- [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax)
## Taro Composition APIs[​](composition-api.html#taro-composition-apis)
Taro 内置的一些 Composition API，可以从 `@tarojs/taro` 包中引入使用。
例子：
在 setup 函数中使用
```html
<script>
 import { useDidShow } from '@tarojs/taro'

 export default {
 setup() {
 useDidShow(() => console.log('onShow'))
 },
 }
</script>
```
在 <script setup> 中使用
```html
<script setup>
 import { useDidShow } from '@tarojs/taro'

 useDidShow(() => console.log('onShow'))
</script>
```

### useRouter[​](composition-api.html#userouter)
等同于 `Taro.getCurrentInstance().router`。
示例代码
```jsx
// { path: '', params: { ... } }
const router = useRouter()
```

### useLoad[​](composition-api.html#useload)
信息
Taro v3.5.0+ 开始支持
等同于页面的 `onLoad` 生命周期钩子。
示例代码
```jsx
useLoad(() => {
 console.log('onLoad')
})
```

### useReady[​](composition-api.html#useready)
等同于页面的 `onReady` 生命周期钩子。
从此生命周期开始可以使用 `createCanvasContext` 或 `createSelectorQuery` 等 API 访问小程序渲染层的 DOM 节点。
示例代码
```js
useReady(() => {
 const query = wx.createSelectorQuery()
})
```

### useDidShow[​](composition-api.html#usedidshow)
页面显示/切入前台时触发。等同于 `onShow` 页面生命周期钩子。
示例代码
```jsx
useDidShow(() => {
 console.log('onShow')
})
```

### useDidHide[​](composition-api.html#usedidhide)
页面隐藏/切入后台时触发。等同于 `onHide` 页面生命周期钩子。
示例代码
```jsx
useDidHide(() => {
 console.log('onHide')
})
```

### useUnload[​](composition-api.html#useunload)
信息
Taro v3.5.0+ 开始支持
等同于页面的 `onUnload` 生命周期钩子。
示例代码
```jsx
useUnload(() => {
 console.log('onUnload')
})
```

### usePullDownRefresh[​](composition-api.html#usepulldownrefresh)
监听用户下拉动作。等同于 `onPullDownRefresh` 页面生命周期钩子。
示例代码
```jsx
usePullDownRefresh(() => {
 console.log('onPullDownRefresh')
})
```

### useReachBottom[​](composition-api.html#usereachbottom)
监听用户上拉触底事件。等同于 `onReachBottom` 页面生命周期钩子。
示例代码
```jsx
useReachBottom(() => {
 console.log('onReachBottom')
})
```

### usePageScroll[​](composition-api.html#usepagescroll)
监听用户滑动页面事件。等同于 `onPageScroll` 页面生命周期钩子。
示例代码
```jsx
usePageScroll((res) => {
 console.log(res.scrollTop)
})
```

### useResize[​](composition-api.html#useresize)
小程序屏幕旋转时触发。等同于 `onResize` 页面生命周期钩子。
示例代码
```jsx
useResize((res) => {
 console.log(res.size.windowWidth)
 console.log(res.size.windowHeight)
})
```

### useShareAppMessage[​](composition-api.html#useshareappmessage)
监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。等同于 `onShareAppMessage` 页面生命周期钩子。
**使用时，必须为页面配置 `enableShareAppMessage: true`。（修改配置文件后请重新编译项目）**
page.vue
```html
<script setup>
 import { useShareAppMessage } from '@tarojs/taro'

 useShareAppMessage((res) => {
 if (res.from === 'button') {
 // 来自页面内转发按钮
 console.log(res.target)
 }
 return {
 title: '自定义转发标题',
 path: '/page/user?id=123',
 }
 })
</script>
```
page.config.js
```js
export default {
 enableShareAppMessage: true,
}
```

### useTabItemTap[​](composition-api.html#usetabitemtap)
点击 tab 时触发。等同于 `onTabItemTap` 页面生命周期钩子。
示例代码
```jsx
useTabItemTap((item) => {
 console.log(item.index)
 console.log(item.pagePath)
 console.log(item.text)
})
```

### useShareTimeline[​](composition-api.html#usesharetimeline)
监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容。等同于 `onShareTimeline` 页面生命周期钩子。
> 只有微信小程序支持，基础库 2.11.3 开始支持，本接口为 Beta 版本，暂只在 Android 平台支持

**使用时，必须为页面配置 `enableShareTimeline: true`。（修改配置文件后请重新编译项目）**
page.vue
```html
<script setup>
 import { useShareTimeline } from '@tarojs/taro'

 useShareTimeline(() => {
 console.log('onShareTimeline')
 })
</script>
```
page.config.js
```js
export default {
 enableShareTimeline: true,
}
```

### useAddToFavorites[​](composition-api.html#useaddtofavorites)
监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容。等同于 `onAddToFavorites` 页面生命周期钩子。
> 只有微信小程序支持，本接口为 Beta 版本，安卓 7.0.15 版本起支持，暂只在安卓平台支持

示例代码
```jsx
useAddToFavorites((res) => {
 // webview 页面返回 webviewUrl
 console.log('WebviewUrl: ', res.webviewUrl)
 return {
 title: '自定义标题',
 imageUrl: 'https://demo.png',
 query: 'name=xxx&age=xxx',
 }
})
```

### useSaveExitState[​](composition-api.html#usesaveexitstate)
信息
Taro v3.5.0+ 开始支持
每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用，可以进行[退出状态](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html#_4-%E9%80%80%E5%87%BA%E7%8A%B6%E6%80%81)的保存。
> 只有微信小程序支持，基础库 2.7.4 开始支持。

示例代码
```jsx
useSaveExitState(() => {
 const exitState = { myDataField: 'myData' } // 需要保存的数据
 return {
 data: exitState,
 expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000, // 超时时刻
 }
})
```

### useTitleClick[​](composition-api.html#usetitleclick)
> 只有支付宝小程序支持。等同于
`> onTitleClick
`> 页面生命周期钩子。

点击标题触发。
示例代码
```jsx
useTitleClick(() => console.log('onTitleClick'))
```

### useOptionMenuClick[​](composition-api.html#useoptionmenuclick)
> 只有支付宝小程序支持。等同于
`> onOptionMenuClick
`> 页面生命周期钩子。

点击导航栏额外图标触发。
示例代码
```jsx
useOptionMenuClick(() => console.log('onOptionMenuClick'))
```

### usePullIntercept[​](composition-api.html#usepullintercept)
> 只有支付宝小程序支持。等同于
`> onPullIntercept
`> 页面生命周期钩子。

下拉截断时触发。
示例代码
```jsx
usePullIntercept(() => console.log('onPullIntercept'))
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
- 
- 
- 
-
