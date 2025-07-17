# 插屏广告组件。插屏广告组件是一个原生组件，层级比普通组件高。插屏广告组件每次创建都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用），默认是隐藏的，需要调用 InterstitialAd.show() 将其显示。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html)
## 方法[​](InterstitialAd.html#方法)
### destroy[​](InterstitialAd.html#destroy)
销毁插屏广告实例。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html)
```tsx
() => void
```

### offClose[​](InterstitialAd.html#offclose)
取消监听插屏广告关闭事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html)
```tsx
(callback: OnCloseCallback) => void
```
参数类型callback`OnCloseCallback`
### offError[​](InterstitialAd.html#offerror)
取消监听插屏错误事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### offLoad[​](InterstitialAd.html#offload)
取消监听插屏广告加载事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html)
```tsx
(callback: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
### onClose[​](InterstitialAd.html#onclose)
监听插屏广告关闭事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html)
```tsx
(callback: OnCloseCallback) => void
```
参数类型callback`OnCloseCallback`
### onError[​](InterstitialAd.html#onerror)
监听插屏错误事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### onLoad[​](InterstitialAd.html#onload)
监听插屏广告加载事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html)
```tsx
(callback: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
### load[​](InterstitialAd.html#load)
加载插屏广告。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html)
```tsx
() => Promise<any>
```

### show[​](InterstitialAd.html#show)
显示插屏广告。
**错误码信息表**
如果插屏广告显示失败，InterstitialAd.show() 方法会返回一个rejected Promise，开发者可以获取到错误码及对应的错误信息。
代码异常情况理由2001触发频率限制小程序启动一定时间内不允许展示插屏广告2002触发频率限制距离小程序插屏广告或者激励视频广告上次播放时间间隔不足，不允许展示插屏广告2003触发频率限制当前正在播放激励视频广告或者插屏广告，不允许再次展示插屏广告2004广告渲染失败该项错误不是开发者的异常情况，或因小程序页面切换导致广告渲染失败2005广告调用异常插屏广告实例不允许跨页面调用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html)
```tsx
() => Promise<any>
```

## 参数[​](InterstitialAd.html#参数)
### OnCloseCallback[​](InterstitialAd.html#onclosecallback)
插屏广告关闭事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnErrorCallback[​](InterstitialAd.html#onerrorcallback)
插屏错误事件的回调函数
```tsx
(result: OnErrorCallbackResult) => void
```
参数类型result`OnErrorCallbackResult`
### OnLoadCallback[​](InterstitialAd.html#onloadcallback)
插屏广告加载事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnErrorCallbackResult[​](InterstitialAd.html#onerrorcallbackresult)
参数类型说明errCodestring or number or symbol错误码
[参考地址](../General.html#aderrcode)errMsg`string`错误信息
## API 支持度[​](InterstitialAd.html#api-支持度)
API微信小程序H5React NativeHarmonyInterstitialAd.destroy✔️InterstitialAd.offClose✔️InterstitialAd.offError✔️InterstitialAd.offLoad✔️InterstitialAd.onClose✔️InterstitialAd.onError✔️InterstitialAd.onLoad✔️InterstitialAd.load✔️InterstitialAd.show✔️
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
