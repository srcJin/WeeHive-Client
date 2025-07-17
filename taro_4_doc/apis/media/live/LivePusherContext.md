# `LivePusherContext` 实例，可通过 `Taro.createLivePusherContext` 获取。 `LivePusherContext` 与页面内唯一的 `live-pusher` 组件绑定，操作对应的 `live-pusher` 组件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.html)
## 方法[​](LivePusherContext.html#方法)
### pause[​](LivePusherContext.html#pause)
暂停推流
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pause.html)
```tsx
(option?: PauseOption) => void
```
参数类型option`PauseOption`
### pauseBGM[​](LivePusherContext.html#pausebgm)
暂停背景音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.pauseBGM.html)
```tsx
(option?: PauseBGMOption) => void
```
参数类型option`PauseBGMOption`
### playBGM[​](LivePusherContext.html#playbgm)
播放背景音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.playBGM.html)
```tsx
(option: PlayBGMOption) => void
```
参数类型option`PlayBGMOption`
### resume[​](LivePusherContext.html#resume)
恢复推流
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resume.html)
```tsx
(option?: ResumeOption) => void
```
参数类型option`ResumeOption`
### resumeBGM[​](LivePusherContext.html#resumebgm)
恢复背景音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.resumeBGM.html)
```tsx
(option?: ResumeBGMOption) => void
```
参数类型option`ResumeBGMOption`
### sendMessage[​](LivePusherContext.html#sendmessage)
发送SEI消息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.sendMessage.html)
```tsx
(option?: SendMessageOption) => void
```
参数类型option`SendMessageOption`
### setBGMVolume[​](LivePusherContext.html#setbgmvolume)
设置背景音音量
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setBGMVolume.html)
```tsx
(option: SetBGMVolumeOption) => void
```
参数类型option`SetBGMVolumeOption`
### setMICVolume[​](LivePusherContext.html#setmicvolume)
设置麦克风音量
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.setMICVolume.html)
```tsx
(option: SetMICVolumeOption) => void
```
参数类型option`SetMICVolumeOption`
### snapshot[​](LivePusherContext.html#snapshot)
快照
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.snapshot.html)
```tsx
(option?: SnapshotOption) => void
```
参数类型option`SnapshotOption`
### start[​](LivePusherContext.html#start)
开始推流，同时开启摄像头预览
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.start.html)
```tsx
(option?: StartOption) => void
```
参数类型option`StartOption`
### startPreview[​](LivePusherContext.html#startpreview)
开启摄像头预览
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.startPreview.html)
```tsx
(option?: StartPreviewOption) => void
```
参数类型option`StartPreviewOption`
### stop[​](LivePusherContext.html#stop)
停止推流，同时停止摄像头预览
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stop.html)
```tsx
(option?: StopOption) => void
```
参数类型option`StopOption`
### stopBGM[​](LivePusherContext.html#stopbgm)
停止背景音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopBGM.html)
```tsx
(option?: StopBGMOption) => void
```
参数类型option`StopBGMOption`
### stopPreview[​](LivePusherContext.html#stoppreview)
关闭摄像头预览
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.stopPreview.html)
```tsx
(option?: StopPreviewOption) => void
```
参数类型option`StopPreviewOption`
### switchCamera[​](LivePusherContext.html#switchcamera)
切换前后摄像头
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.switchCamera.html)
```tsx
(option?: SwitchCameraOption) => void
```
参数类型option`SwitchCameraOption`
### toggleTorch[​](LivePusherContext.html#toggletorch)
切换手电筒
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/live/LivePusherContext.toggleTorch.html)
```tsx
(option?: ToggleTorchOption) => void
```
参数类型option`ToggleTorchOption`
## 参数[​](LivePusherContext.html#参数)
### PauseOption[​](LivePusherContext.html#pauseoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### PauseBGMOption[​](LivePusherContext.html#pausebgmoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### PlayBGMOption[​](LivePusherContext.html#playbgmoption)
参数类型必填说明url`string`是加入背景混音的资源地址complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ResumeOption[​](LivePusherContext.html#resumeoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ResumeBGMOption[​](LivePusherContext.html#resumebgmoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SendMessageOption[​](LivePusherContext.html#sendmessageoption)
参数类型必填说明msg`string`是SEI消息complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SetBGMVolumeOption[​](LivePusherContext.html#setbgmvolumeoption)
参数类型必填说明volume`number`是音量大小，范围是 0-1complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SetMICVolumeOption[​](LivePusherContext.html#setmicvolumeoption)
参数类型必填说明volume`number`是音量大小，范围是 0-1complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SnapshotOption[​](LivePusherContext.html#snapshotoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StartOption[​](LivePusherContext.html#startoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StartPreviewOption[​](LivePusherContext.html#startpreviewoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StopOption[​](LivePusherContext.html#stopoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StopBGMOption[​](LivePusherContext.html#stopbgmoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StopPreviewOption[​](LivePusherContext.html#stoppreviewoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SwitchCameraOption[​](LivePusherContext.html#switchcameraoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ToggleTorchOption[​](LivePusherContext.html#toggletorchoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## API 支持度[​](LivePusherContext.html#api-支持度)
API微信小程序H5React NativeHarmonyLivePusherContext✔️LivePusherContext.pause✔️LivePusherContext.pauseBGM✔️LivePusherContext.playBGM✔️LivePusherContext.resume✔️LivePusherContext.resumeBGM✔️LivePusherContext.sendMessage✔️LivePusherContext.setBGMVolume✔️LivePusherContext.setMICVolume✔️LivePusherContext.snapshot✔️LivePusherContext.start✔️LivePusherContext.startPreview✔️LivePusherContext.stop✔️LivePusherContext.stopBGM✔️LivePusherContext.stopPreview✔️LivePusherContext.switchCamera✔️LivePusherContext.toggleTorch✔️
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
- 
- 

-
