# InnerAudioContext 实例，可通过 [Taro.createInnerAudioContext](createInnerAudioContext.html) 接口获取实例。
**支持格式**
格式iOSAndroidflacx√m4a√√oggx√apex√amrx√wmax√wav√√mp3√√mp4x√aac√√aiff√xcaf√x
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html)
## 方法[​](InnerAudioContext.html#方法)
参数类型默认值只读必填说明src`string`否是音频资源的地址，用于直接播放。startTime`number``0`否是开始播放的位置（单位：s）autoplay`boolean``false`否是是否自动开始播放loop`boolean``false`否是是否循环播放obeyMuteSwitch`boolean``true`否是是否遵循系统静音开关。当此参数为 `false` 时，即使用户打开了静音开关，也能继续发出声音。从 2.3.0 版本开始此参数不生效，使用 [Taro.setInnerAudioOption](setInnerAudioOption.html) 接口统一设置。volume`number``1`否是音量。范围 0~1。playbackRate`number``1`否是播放速度。范围 0.5-2.0。duration`number`是是当前音频的长度（单位 s）。只有在当前有合法的 src 时返回currentTime`number`是是当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回，时间保留小数点后 6 位paused`boolean`是是当前是是否暂停或停止状态buffered`number`是是音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲referrerPolicy`string`否否origin: 发送完整的 referrer; no-referrer: 不发送
### play[​](InnerAudioContext.html#play)
播放
支持情况：!!!!!
```tsx
() => void
```

### pause[​](InnerAudioContext.html#pause)
暂停
支持情况：!!!!
```tsx
() => void
```

### stop[​](InnerAudioContext.html#stop)
停止
支持情况：!!!!!
```tsx
() => void
```

### seek[​](InnerAudioContext.html#seek)
跳转到指定位置，单位 s
支持情况：!!!!
```tsx
(position: number) => void
```
参数类型position`number`
### destroy[​](InnerAudioContext.html#destroy)
销毁当前实例
支持情况：!!!!
```tsx
() => void
```

### onCanplay[​](InnerAudioContext.html#oncanplay)
音频进入可以播放状态，但不保证后面可以流畅播放
支持情况：!!!!
```tsx
(callback?: OnCanplayCallback) => void
```
参数类型callback`OnCanplayCallback`
### onPlay[​](InnerAudioContext.html#onplay)
音频播放事件
支持情况：!!!!!
```tsx
(callback?: OnPlayCallback) => void
```
参数类型callback`OnPlayCallback`
### onPause[​](InnerAudioContext.html#onpause)
音频暂停事件
支持情况：!!!!
```tsx
(callback?: OnPauseCallback) => void
```
参数类型callback`OnPauseCallback`
### onStop[​](InnerAudioContext.html#onstop)
音频停止事件
支持情况：!!!!!
```tsx
(callback?: OnStopCallback) => void
```
参数类型callback`OnStopCallback`
### onEnded[​](InnerAudioContext.html#onended)
音频自然播放结束事件
支持情况：!!!!!
```tsx
(callback?: OnEndedCallback) => void
```
参数类型callback`OnEndedCallback`
### onTimeUpdate[​](InnerAudioContext.html#ontimeupdate)
音频播放进度更新事件
支持情况：!!!!
```tsx
(callback?: OnTimeUpdateCallback) => void
```
参数类型callback`OnTimeUpdateCallback`
### onError[​](InnerAudioContext.html#onerror)
音频播放错误事件
支持情况：!!!!!
```tsx
(callback?: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### onWaiting[​](InnerAudioContext.html#onwaiting)
音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
支持情况：!!!!
```tsx
(callback?: OnWaitingCallback) => void
```
参数类型callback`OnWaitingCallback`
### onSeeking[​](InnerAudioContext.html#onseeking)
音频进行 seek 操作事件
支持情况：!!!!
```tsx
(callback?: OnSeekingCallback) => void
```
参数类型callback`OnSeekingCallback`
### onSeeked[​](InnerAudioContext.html#onseeked)
音频完成 seek 操作事件
支持情况：!!!!
```tsx
(callback?: OnSeekedCallback) => void
```
参数类型callback`OnSeekedCallback`
### offCanplay[​](InnerAudioContext.html#offcanplay)
取消监听 canplay 事件
支持情况：!!!!
```tsx
(callback?: OnCanplayCallback) => void
```
参数类型callback`OnCanplayCallback`
### offPlay[​](InnerAudioContext.html#offplay)
取消监听 play 事件
支持情况：!!!!
```tsx
(callback?: OnPlayCallback) => void
```
参数类型callback`OnPlayCallback`
### offPause[​](InnerAudioContext.html#offpause)
取消监听 pause 事件
支持情况：!!!!
```tsx
(callback?: OnPauseCallback) => void
```
参数类型callback`OnPauseCallback`
### offStop[​](InnerAudioContext.html#offstop)
取消监听 stop 事件
支持情况：!!!!
```tsx
(callback?: OnStopCallback) => void
```
参数类型callback`OnStopCallback`
### offEnded[​](InnerAudioContext.html#offended)
取消监听 ended 事件
支持情况：!!!!
```tsx
(callback?: OnEndedCallback) => void
```
参数类型callback`OnEndedCallback`
### offTimeUpdate[​](InnerAudioContext.html#offtimeupdate)
取消监听 timeUpdate 事件
支持情况：!!!!
```tsx
(callback?: OnTimeUpdateCallback) => void
```
参数类型callback`OnTimeUpdateCallback`
### offError[​](InnerAudioContext.html#offerror)
取消监听 error 事件
支持情况：!!!!
```tsx
(callback?: OnErrorCallback) => void
```
参数类型callback`OnErrorCallback`
### offWaiting[​](InnerAudioContext.html#offwaiting)
取消监听 waiting 事件
支持情况：!!!!
```tsx
(callback?: OnWaitingCallback) => void
```
参数类型callback`OnWaitingCallback`
### offSeeking[​](InnerAudioContext.html#offseeking)
取消监听 seeking 事件
支持情况：!!!!
```tsx
(callback?: OnSeekingCallback) => void
```
参数类型callback`OnSeekingCallback`
### offSeeked[​](InnerAudioContext.html#offseeked)
取消监听 seeked 事件
支持情况：!!!!
```tsx
(callback?: OnSeekedCallback) => void
```
参数类型callback`OnSeekedCallback`
## 参数[​](InnerAudioContext.html#参数)
### onErrorDetail[​](InnerAudioContext.html#onerrordetail)
参数类型说明errCode`number`错误码errMsg`string`错误信息
### onErrorDetailErrCode[​](InnerAudioContext.html#onerrordetailerrcode)
参数说明10001系统错误10002网络错误10003文件错误10004格式错误-1未知错误
### OnCanplayCallback[​](InnerAudioContext.html#oncanplaycallback)
音频进入可以播放状态事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnPlayCallback[​](InnerAudioContext.html#onplaycallback)
音频播放事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnPauseCallback[​](InnerAudioContext.html#onpausecallback)
音频暂停事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnStopCallback[​](InnerAudioContext.html#onstopcallback)
音频停止事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnEndedCallback[​](InnerAudioContext.html#onendedcallback)
音频自然播放结束事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnTimeUpdateCallback[​](InnerAudioContext.html#ontimeupdatecallback)
音频播放进度更新事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnErrorCallback[​](InnerAudioContext.html#onerrorcallback)
音频播放错误事件的回调函数
```tsx
(res: onErrorDetail) => void
```
参数类型res`onErrorDetail`
### OnWaitingCallback[​](InnerAudioContext.html#onwaitingcallback)
音频加载中事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnSeekingCallback[​](InnerAudioContext.html#onseekingcallback)
音频进行 seek 操作事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
### OnSeekedCallback[​](InnerAudioContext.html#onseekedcallback)
音频完成 seek 操作事件的回调函数
```tsx
(res: TaroGeneral.CallbackResult) => void
```
参数类型res`TaroGeneral.CallbackResult`
## 示例代码[​](InnerAudioContext.html#示例代码)
```tsx
const innerAudioContext = Taro.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
innerAudioContext.onPlay(() => {
 console.log('开始播放')
})
innerAudioContext.onError((res) => {
 console.log(res.errMsg)
 console.log(res.errCode)
})
```

## API 支持度[​](InnerAudioContext.html#api-支持度)
API微信小程序H5React NativeHarmonyHarmony hybridInnerAudioContext.play✔️✔️✔️✔️InnerAudioContext.pause✔️✔️✔️InnerAudioContext.stop✔️✔️✔️✔️InnerAudioContext.seek✔️✔️✔️InnerAudioContext.destroy✔️✔️InnerAudioContext.onCanplay✔️✔️✔️InnerAudioContext.onPlay✔️✔️✔️✔️InnerAudioContext.onPause✔️✔️✔️InnerAudioContext.onStop✔️✔️✔️✔️InnerAudioContext.onEnded✔️✔️✔️✔️InnerAudioContext.onTimeUpdate✔️✔️✔️InnerAudioContext.onError✔️✔️✔️✔️InnerAudioContext.onWaiting✔️✔️✔️InnerAudioContext.onSeeking✔️✔️✔️InnerAudioContext.onSeeked✔️✔️✔️InnerAudioContext.offCanplay✔️✔️✔️InnerAudioContext.offPlay✔️✔️✔️InnerAudioContext.offPause✔️✔️✔️InnerAudioContext.offStop✔️✔️✔️InnerAudioContext.offEnded✔️✔️✔️InnerAudioContext.offTimeUpdate✔️✔️✔️InnerAudioContext.offError✔️✔️✔️InnerAudioContext.offWaiting✔️✔️✔️InnerAudioContext.offSeeking✔️✔️✔️InnerAudioContext.offSeeked✔️✔️✔️
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
- 
- 
- 
- 

- 
-
