# 打开半屏小程序。接入指引请参考 [半屏小程序能力](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html)。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.openEmbeddedMiniProgram.html)
## 类型[​](openEmbeddedMiniProgram.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openEmbeddedMiniProgram.html#参数)
参数类型option`Option`
### Option[​](openEmbeddedMiniProgram.html#option)
参数类型必填说明appId`string`否要打开的小程序 appIdpath`string`否打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 `App.onLaunch`、`App.onShow` 和 `Page.onLoad` 的回调函数或小游戏的 [Taro.onShow](openEmbeddedMiniProgram.html#) 回调函数、[Taro.getLaunchOptionsSync](../base/weapp/life-cycle/getLaunchOptionsSync.html) 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。extraData`TaroGeneral.IAnyObject`否需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch`，`App.onShow` 中获取到这份数据。如果跳转的是小游戏，可以在 [Taro.onShow](openEmbeddedMiniProgram.html#)、[Taro.getLaunchOptionsSync](../base/weapp/life-cycle/getLaunchOptionsSync.html) 中可以获取到这份数据数据。envVersion`keyof EnvVersion`否要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。shortLink`string`否小程序链接，当传递该参数后，可以不传 appId 和 path。链接可以通过【小程序菜单】->【复制链接】获取。verify`keyof Verify`否校验方式 。默认为bindingnoRelaunchIfPathUnchanged`boolean`否不 reLaunch 目标小程序，直接打开目标跳转的小程序退后台时的页面，需满足以下条件：1. 目标跳转的小程序生命周期未被销毁；2. 且目标当次启动的path、query、apiCategory与上次启动相同。默认值为 false 。allowFullScreen`boolean`否打开的小程序是否支持全屏success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### Verify[​](openEmbeddedMiniProgram.html#verify)
参数说明binding校验小程序管理后台的绑定关系unionProduct校验目标打开链接是否为小程序联盟商品。
### EnvVersion[​](openEmbeddedMiniProgram.html#envversion)
参数说明develop开发版trial体验版release正式版
- 
- 

- 
- 
-
