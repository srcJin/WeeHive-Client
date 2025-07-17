# 打开另一个小程序
**使用限制**
##### 需要用户触发跳转[​](navigateToMiniProgram.html#需要用户触发跳转)
从 2.3.0 版本开始，若用户未点击小程序页面任意位置，则开发者将无法调用此接口自动跳转至其他小程序。
##### 需要用户确认跳转[​](navigateToMiniProgram.html#需要用户确认跳转)
从 2.3.0 版本开始，在跳转至其他小程序前，将统一增加弹窗，询问是否跳转，用户确认后才可以跳转其他小程序。如果用户点击取消，则回调 `fail cancel`。
##### 每个小程序可跳转的其他小程序数量限制为不超过 10 个[​](navigateToMiniProgram.html#每个小程序可跳转的其他小程序数量限制为不超过-10-个)
从 2.4.0 版本以及指定日期（具体待定）开始，开发者提交新版小程序代码时，如使用了跳转其他小程序功能，则需要在代码配置中声明将要跳转的小程序名单，限定不超过 10 个，否则将无法通过审核。该名单可在发布新版时更新，不支持动态修改。配置方法详见 [小程序全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。调用此接口时，所跳转的 appId 必须在配置列表中，否则回调 `fail appId "${appId}" is not in navigateToMiniProgramAppIdList`。
**关于调试**

- 在开发者工具上调用此 API 并不会真实的跳转到另外的小程序，但是开发者工具会校验本次调用跳转是否成功。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81)
- 开发者工具上支持被跳转的小程序处理接收参数的调试。[详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/different.html#%E8%B7%B3%E8%BD%AC%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B0%83%E8%AF%95%E6%94%AF%E6%8C%81)
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html)
## 类型[​](navigateToMiniProgram.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](navigateToMiniProgram.html#参数)
参数类型option`Option`
### Option[​](navigateToMiniProgram.html#option)
参数类型必填说明appId`string`否要打开的小程序 appIdpath`string`否打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [Taro.onShow](navigateToMiniProgram.html#) 回调函数、[Taro.getLaunchOptionsSync](../base/weapp/life-cycle/getLaunchOptionsSync.html) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。extraData`TaroGeneral.IAnyObject`否需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [Taro.onShow](navigateToMiniProgram.html#)、[Taro.getLaunchOptionsSync](../base/weapp/life-cycle/getLaunchOptionsSync.html) 中可以获取到这份数据数据。envVersion`keyof EnvVersion`否要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。shortLink`string`否小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### EnvVersion[​](navigateToMiniProgram.html#envversion)
参数说明develop开发版trial体验版release正式版
## 示例代码[​](navigateToMiniProgram.html#示例代码)
```tsx
Taro.navigateToMiniProgram({
 appId: '',
 path: 'page/index/index?id=123',
 extraData: {
 foo: 'bar'
 },
 envVersion: 'develop',
 success: function(res) {
 // 打开成功
 }
})
```

- 
- 

- 
- 

-
