# 激励视频广告组件。激励视频广告组件是一个原生组件，层级比普通组件高。激励视频广告是一个单例（小游戏端是全局单例，小程序端是页面内单例，在小程序端的单例对象不允许跨页面使用），默认是隐藏的，需要调用 RewardedVideoAd.show() 将其显示。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.html)
## 方法[​](RewardedVideoAd.html#方法)
### load[​](RewardedVideoAd.html#load)
加载激励视频广告。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.load.html)
```tsx
() => Promise<any>
```

### show[​](RewardedVideoAd.html#show)
显示激励视频广告。激励视频广告将从屏幕下方推入。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.show.html)
```tsx
() => Promise<any>
```

### destroy[​](RewardedVideoAd.html#destroy)
销毁激励视频广告实例。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.destroy.html)
```tsx
() => void
```

### offClose[​](RewardedVideoAd.html#offclose)
取消监听用户点击 `关闭广告` 按钮的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offClose.html)
```tsx
(callback: OnCloseCallback) => void
```
参数类型callback`OnCloseCallback`
### offError[​](RewardedVideoAd.html#offerror)
取消监听激励视频错误事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### offLoad[​](RewardedVideoAd.html#offload)
取消监听激励视频广告加载事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.offLoad.html)
```tsx
(callback: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
### onClose[​](RewardedVideoAd.html#onclose)
监听用户点击 `关闭广告` 按钮的事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onClose.html)
```tsx
(callback: OnCloseCallback) => void
```
参数类型callback`OnCloseCallback`
### onError[​](RewardedVideoAd.html#onerror)
监听激励视频错误事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### onLoad[​](RewardedVideoAd.html#onload)
监听激励视频广告加载事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/RewardedVideoAd.onLoad.html)
```tsx
(callback: OnLoadCallback) => void
```
参数类型callback`OnLoadCallback`
## 参数[​](RewardedVideoAd.html#参数)
### OnErrorCallbackResult[​](RewardedVideoAd.html#onerrorcallbackresult)
参数类型说明errCodestring or number or symbol错误码
[参考地址](../General.html#aderrcode)errMsg`string`错误信息
### OnCloseCallbackResult[​](RewardedVideoAd.html#onclosecallbackresult)
参数类型说明isEnded`boolean`视频是否是在用户完整观看的情况下被关闭的
### OnCloseCallback[​](RewardedVideoAd.html#onclosecallback)
用户点击 `关闭广告` 按钮的事件的回调函数
```tsx
(result: OnCloseCallbackResult) => void
```
参数类型result`OnCloseCallbackResult`
### OnErrorCallback[​](RewardedVideoAd.html#onerrorcallback)
激励视频错误事件的回调函数
```tsx
(result: OnErrorCallbackResult) => void
```
参数类型result`OnErrorCallbackResult`
### OnLoadCallback[​](RewardedVideoAd.html#onloadcallback)
激励视频广告加载事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
## API 支持度[​](RewardedVideoAd.html#api-支持度)
API微信小程序H5React NativeHarmonyRewardedVideoAd.load✔️RewardedVideoAd.show✔️RewardedVideoAd.destroy✔️RewardedVideoAd.offClose✔️RewardedVideoAd.offError✔️RewardedVideoAd.offLoad✔️RewardedVideoAd.onClose✔️RewardedVideoAd.onError✔️RewardedVideoAd.onLoad✔️
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
