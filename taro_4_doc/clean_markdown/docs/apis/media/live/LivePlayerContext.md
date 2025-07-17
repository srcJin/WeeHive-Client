# `LivePlayerContext` 实例，可通过 `Taro.createLivePlayerContext` 获取。 `LivePlayerContext` 通过 `id` 跟一个 `live-player` 组件绑定，操作对应的 `live-player` 组件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.html)
## 方法[​](LivePlayerContext.html#方法)
### exitCasting[​](LivePlayerContext.html#exitcasting)
退出投屏。仅支持在 tap 事件回调内调用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitCasting.html)
```tsx
(option?: ExitCastingOption) => void
```
参数类型option`ExitCastingOption`
### exitFullScreen[​](LivePlayerContext.html#exitfullscreen)
退出全屏
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitFullScreen.html)
```tsx
(option?: ExitFullScreenOption) => void
```
参数类型option`ExitFullScreenOption`
### exitPictureInPicture[​](LivePlayerContext.html#exitpictureinpicture)
退出小窗，该方法可在任意页面调用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.exitPictureInPicture.html)
```tsx
(option?: ExitPictureInPictureOption) => void
```
参数类型option`ExitPictureInPictureOption`
### mute[​](LivePlayerContext.html#mute)
静音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.mute.html)
```tsx
(option?: MuteOption) => void
```
参数类型option`MuteOption`
### pause[​](LivePlayerContext.html#pause)
暂停
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.pause.html)
```tsx
(option?: PauseOption) => void
```
参数类型option`PauseOption`
### play[​](LivePlayerContext.html#play)
播放
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.play.html)
```tsx
(option?: PlayOption) => void
```
参数类型option`PlayOption`
### reconnectCasting[​](LivePlayerContext.html#reconnectcasting)
重连投屏设备。仅支持在 tap 事件回调内调用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.reconnectCasting.html)
```tsx
(option?: ReconnectCastingOption) => void
```
参数类型option`ReconnectCastingOption`
### requestFullScreen[​](LivePlayerContext.html#requestfullscreen)
进入全屏
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestFullScreen.html)
```tsx
(option: RequestFullScreenOption) => void
```
参数类型option`RequestFullScreenOption`
### requestPictureInPicture[​](LivePlayerContext.html#requestpictureinpicture)
进入全屏
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.requestPictureInPicture.html)
```tsx
(option: RequestPictureInPictureOption) => void
```
参数类型option`RequestPictureInPictureOption`
### resume[​](LivePlayerContext.html#resume)
恢复
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.resume.html)
```tsx
(option?: ResumeOption) => void
```
参数类型option`ResumeOption`
### snapshot[​](LivePlayerContext.html#snapshot)
截图
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.snapshot.html)
```tsx
(option?: SnapshotOption) => void
```
参数类型option`SnapshotOption`
### startCasting[​](LivePlayerContext.html#startcasting)
开始投屏, 拉起半屏搜索设备。仅支持在 tap 事件回调内调用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.startCasting.html)
```tsx
(option?: StartCastingOption) => void
```
参数类型option`StartCastingOption`
### stop[​](LivePlayerContext.html#stop)
停止
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.stop.html)
```tsx
(option?: StopOption) => void
```
参数类型option`StopOption`
### switchCasting[​](LivePlayerContext.html#switchcasting)
切换投屏设备。仅支持在 tap 事件回调内调用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePlayerContext.switchCasting.html)
```tsx
(option?: SwitchCastingOption) => void
```
参数类型option`SwitchCastingOption`
## 参数[​](LivePlayerContext.html#参数)
### ExitCastingOption[​](LivePlayerContext.html#exitcastingoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ExitFullScreenOption[​](LivePlayerContext.html#exitfullscreenoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ExitPictureInPictureOption[​](LivePlayerContext.html#exitpictureinpictureoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### MuteOption[​](LivePlayerContext.html#muteoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### PauseOption[​](LivePlayerContext.html#pauseoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### PlayOption[​](LivePlayerContext.html#playoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ReconnectCastingOption[​](LivePlayerContext.html#reconnectcastingoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RequestFullScreenOption[​](LivePlayerContext.html#requestfullscreenoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）direction0 or 90 or -90否设置全屏时的方向

可选值：
- 0: 正常竖向;
- 90: 屏幕逆时针90度;
- -90: 屏幕顺时针90度;fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RequestPictureInPictureOption[​](LivePlayerContext.html#requestpictureinpictureoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ResumeOption[​](LivePlayerContext.html#resumeoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SnapshotOption[​](LivePlayerContext.html#snapshotoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SnapshotSuccessCallbackResult) => void`否接口调用成功的回调函数
### SnapshotSuccessCallbackResult[​](LivePlayerContext.html#snapshotsuccesscallbackresult)
参数类型说明height`string`图片的高度tempImagePath`string`图片文件的临时路径width`string`图片的宽度errMsg`string`调用结果
### StartCastingOption[​](LivePlayerContext.html#startcastingoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StopOption[​](LivePlayerContext.html#stopoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SwitchCastingOption[​](LivePlayerContext.html#switchcastingoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## API 支持度[​](LivePlayerContext.html#api-支持度)
API微信小程序H5React NativeHarmonyLivePlayerContext✔️LivePlayerContext.exitCasting✔️LivePlayerContext.exitFullScreen✔️LivePlayerContext.exitPictureInPicture✔️LivePlayerContext.mute✔️LivePlayerContext.pause✔️LivePlayerContext.play✔️LivePlayerContext.reconnectCasting✔️LivePlayerContext.requestFullScreen✔️LivePlayerContext.requestPictureInPicture✔️LivePlayerContext.resume✔️LivePlayerContext.snapshot✔️LivePlayerContext.startCasting✔️LivePlayerContext.stop✔️LivePlayerContext.switchCasting✔️
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
