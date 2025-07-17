# ## 方法[​](VideoDecoder.html#方法)
### getFrameData[​](VideoDecoder.html#getframedata)
获取下一帧的解码数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.getFrameData.html)
```tsx
() => Promise<Result>
```

### off[​](VideoDecoder.html#off)
取消监听录制事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.off.html)
```tsx
(eventName: keyof EventName, callback: Callback) => void
```
参数类型说明eventName`keyof EventName`事件名callback`Callback`事件触发时执行的回调函数
### on[​](VideoDecoder.html#on)
注册监听录制事件的回调函数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.on.html)
```tsx
(eventName: keyof EventName, callback: Callback) => void
```
参数类型说明eventName`keyof EventName`事件名callback`Callback`事件触发时执行的回调函数
### remove[​](VideoDecoder.html#remove)
移除解码器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.remove.html)
```tsx
() => Promise<void>
```

### seek[​](VideoDecoder.html#seek)
跳到某个时间点解码
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.seek.html)
```tsx
(position: number) => Promise<void>
```
参数类型说明position`number`跳转的解码位置，单位 ms
### start[​](VideoDecoder.html#start)
开始解码
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.start.html)
```tsx
(option: Option) => Promise<void>
```
参数类型option`Option`
### stop[​](VideoDecoder.html#stop)
停止解码
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/VideoDecoder.stop.html)
```tsx
() => Promise<void>
```

## 参数[​](VideoDecoder.html#参数)
### getFrameData[​](VideoDecoder.html#getframedata-1)
#### Result[​](VideoDecoder.html#result)
参数类型说明width`number`帧数据宽度height`number`帧数据高度data`ArrayBuffer`帧数据pkPts`number`帧原始 ptspkDts`number`帧原始 dts
### on[​](VideoDecoder.html#on-1)
#### EventName[​](VideoDecoder.html#eventname)
eventName 的合法值
参数说明start开始事件。返回 {width, height}stop结束事件。seekseek 完成事件。bufferchange缓冲区变化事件。ended解码结束事件。
#### Callback[​](VideoDecoder.html#callback)
事件触发时执行的回调函数
```tsx
(res: { width: number; height: number; }) => void
```
参数类型res`{ width: number; height: number; }`
### start[​](VideoDecoder.html#start-1)
#### Option[​](VideoDecoder.html#option)
参数类型默认值必填说明source`string`是需要解码的视频源文件。mode`number``1`否解码模式。0：按 pts 解码；1：以最快速度解码abortAudio`boolean``false`否是否不需要音频轨道abortVideo`boolean``false`否是否不需要视频轨道
## API 支持度[​](VideoDecoder.html#api-支持度)
API微信小程序H5React NativeHarmonyVideoDecoder.getFrameData✔️VideoDecoder.off✔️VideoDecoder.on✔️VideoDecoder.remove✔️VideoDecoder.seek✔️VideoDecoder.start✔️VideoDecoder.stop✔️
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
