# ## 方法[​](MediaRecorder.html#方法)
### destroy[​](MediaRecorder.html#destroy)
销毁录制器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.destroy.html)
```tsx
() => Promise<void>
```

### off[​](MediaRecorder.html#off)
取消监听录制事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.off.html)
```tsx
(eventName: keyof EventName, callback: Callback) => Promise<void>
```
参数类型说明eventName`keyof EventName`事件名callback`Callback`事件触发时执行的回调函数
### on[​](MediaRecorder.html#on)
注册监听录制事件的回调函数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.on.html)
```tsx
(eventName: keyof EventName, callback: Callback) => Promise<void>
```
参数类型说明eventName`keyof EventName`事件名callback`Callback`事件触发时执行的回调函数
### pause[​](MediaRecorder.html#pause)
暂停录制
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.pause.html)
```tsx
() => Promise<void>
```

### requestFrame[​](MediaRecorder.html#requestframe)
请求下一帧录制，在 callback 里完成一帧渲染后开始录制当前帧
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.requestFrame.html)
```tsx
(callback: Callback) => Promise<void>
```
参数类型callback`Callback`
### resume[​](MediaRecorder.html#resume)
恢复录制
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.resume.html)
```tsx
() => Promise<void>
```

### start[​](MediaRecorder.html#start)
开始录制
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.start.html)
```tsx
() => Promise<void>
```

### stop[​](MediaRecorder.html#stop)
结束录制
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/MediaRecorder.stop.html)
```tsx
() => Promise<void>
```

## 参数[​](MediaRecorder.html#参数)
### on[​](MediaRecorder.html#on-1)
#### EventName[​](MediaRecorder.html#eventname)
eventName 的合法值
参数说明start录制开始事件。stop录制结束事件。返回 {tempFilePath, duration, fileSize}pause录制暂停事件。resume录制继续事件。timeupdate录制时间更新事件。
#### Callback[​](MediaRecorder.html#callback)
事件触发时执行的回调函数
```tsx
(res: { tempFilePath: string; duration: number; fileSize: number; }) => void
```
参数类型res`{ tempFilePath: string; duration: number; fileSize: number; }`
### requestFrame[​](MediaRecorder.html#requestframe-1)
#### Callback[​](MediaRecorder.html#callback-1)
事件触发时执行的回调函数
```tsx
() => void
```

## API 支持度[​](MediaRecorder.html#api-支持度)
API微信小程序H5React NativeHarmonyMediaRecorder.destroy✔️MediaRecorder.off✔️MediaRecorder.on✔️MediaRecorder.pause✔️MediaRecorder.requestFrame✔️MediaRecorder.resume✔️MediaRecorder.start✔️MediaRecorder.stop✔️
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
