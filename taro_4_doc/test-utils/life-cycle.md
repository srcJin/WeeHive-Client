# 生命周期监听，这里会在对应**生命周期事件执行完成后，下次渲染前执行**，说白了就是一个"after lifecycle"的钩子
## AppLifecycle[​](life-cycle.html#applifecycle)
> APP 生命周期

对应生命周期的说明可以参考官网：[传送门](../react-entry.html)
### onLaunch[​](life-cycle.html#onlaunch)
监听 onLaunch 生命周期执行回调
```ts
function onLaunch(): Promise<void>
```

用法：
```ts
// 等待onLaunch响应完成
await testUtils.AppLifecycle.onLaunch()
```

### onShow[​](life-cycle.html#onshow)
程序启动，或切前台时触发
监听 onShow / componentDidShow 生命周期执行回调
```ts
function onShow(): Promise<void>
```

用法：
```ts
// 等待onShow响应完成
await testUtils.AppLifecycle.onShow()
```

### onHide[​](life-cycle.html#onhide)
程序切后台时触发
监听 onHide / componentDidHide 生命周期执行回调
```ts
function onHide(): Promise<void>
```

用法：
```ts
// 等待onHide响应完成
await testUtils.AppLifecycle.onHide()
```

### onError[​](life-cycle.html#onerror)
小程序发生脚本错误或 API 调用报错时触发。
```ts
function onError(): Promise<Error>
```

用法：
```ts
// 等待onError响应完成
await testUtils.AppLifecycle.onError()
```

### onPageNotFound[​](life-cycle.html#onpagenotfound)
程序要打开的页面不存在时触发。
```ts
function onPageNotFound(): Promise<{ path: string; query: object; isEntryPage: boolean }>
```

回调参数：
属性类型说明pathstring不存在页面的路径queryObject打开不存在页面的 query 参数isEntryPageboolean是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
用法：
```ts
// 等待onPageNotFound响应完成
await testUtils.AppLifecycle.onPageNotFound()
```

### onUnhandledRejection[​](life-cycle.html#onunhandledrejection)
小程序有未处理的 Promise 拒绝时触发。
```ts
function onUnhandledRejection(): Promise<{ reason: string; promise: Promise<unknown> }>
```

回调参数： <<<<<<< HEAD
属性类型说明reasonstring拒绝原因，一般是一个 Error 对象promisePromise被拒绝的 Promise 对象
======= | 属性 | 类型 | 说明 | | ------- | ------- | ------------------------------- | | reason | string | 拒绝原因，一般是一个 Error 对象 | | promise | Promise | 被拒绝的 Promise 对象 |
> master

用法：
```ts
// 等待onUnhandledRejection响应完成
await testUtils.AppLifecycle.onUnhandledRejection()
```

## PageLifecycle[​](life-cycle.html#pagelifecycle)
> Page 生命周期

页面级别的生命周期使用方式与`AppLifecycle`类似，除了用于监听的`onXXX`外，页面级别的生命周期 api 还提供了`triggerXXX`用于模拟触发一些特定的生命周期。 比如`onReachBottom`，需要触发它的条件需要监听用户上拉触底的事件，我们写事件去模拟比较麻烦，所以我们干脆提供了`triggerReachBottom`给用户在测试时可直接触发到`onReachBottom`这个生命周期。
对应生命周期的说明可以参考官网：[传送门](../react-page.html)
用法：
```js
// 等待pages/index/index这个路由页面展示
await testUtils.PageLifecycle.onShow('pages/index/index')
// 手动触发onReachBottom事件
testUtils.PageLifecycle.triggerReachBottom()
// 等待onReachBottom响应完成
await testUtils.PageLifecycle.onReachBottom()
```
方法说明onLoad(path: string)在此生命周期中通过访问 options 参数或调用 getCurrentInstance().router，可以访问到页面路由参数。onUnload(path: string)在小程序环境中对应页面的 onUnload。onShow(path: string)页面显示/切入前台时触发。onHide(path: string)页面隐藏/切入后台时触发。onReady(path: string)从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API 访问小程序渲染层的 DOM 节点。onPullDownRefresh(path: string)监听用户下拉动作triggerPullDownRefresh(path: string)触发`onPullDownRefresh`生命周期onReachBottom(path: string)监听用户上拉触底事件triggerReachBottom(path: string)触发`onReachBottom`生命周期onPageScroll(path: string)监听用户滑动页面事件triggerPageScroll(path: string, opt: PageScrollObject)触发`onPageScroll`生命周期onAddToFavorites(path: string)监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容triggerAddToFavorites(path: string)触发`onAddToFavorites`生命周期onShareAppMessage(path: string)监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容triggerShareAppMessage(path: string, opt: ShareAppMessageObject)触发`onShareAppMessage`生命周期onShareTimeline(path: string)监听右上角菜单“分享到朋友圈”按钮的行为，并自定义分享内容triggerShareTimeline(path: string)触发`onShareTimeline`生命周期onResize(path: string)监听屏幕旋转时triggerResize(path: string, opt: PageResizeObject)触发`onResize`生命周期onTabItemTap(path: string)点击 tab 时触发triggerTabItemTap(path: string, opt: TabItemTapObject)触发`onTabItemTap`生命周期onSaveExitState(path: string)每当小程序可能被销毁之前，页面回调函数 onSaveExitState 会被调用，可以进行退出状态的保存triggerSaveExitState(path: string)触发`onSaveExitState`生命周期onTitleClick(path: string)点击标题触发triggerTitleClick(path: string)触发`onTitleClick`生命周期onOptionMenuClick(path: string)点击导航栏额外图标触发triggerOptionMenuClick(path: string)触发`onOptionMenuClick`生命周期onPopMenuClick(path: string)triggerPopMenuClick(path: string)触发`onPopMenuClick`生命周期onPullIntercept(path: string)下拉截断时 onPullIntercept 触发triggerPullIntercept(path: string)触发`onPageScroll`生命周期
- 

- 
- 
- 
- 
- 
- 

-
