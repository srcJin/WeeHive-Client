# BackgroundAudioManager 实例，可通过 [Taro.getBackgroundAudioManager](getBackgroundAudioManager.html) 获取。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html)
## 方法[​](BackgroundAudioManager.html#方法)
参数类型默认值只读必填说明src`string`否是音频的数据源（[2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持云文件ID）。默认为空字符串，**当设置了新的 src 时，会自动开始播放**，目前支持的格式有 m4a, aac, mp3, wav。startTime`number`否是音频开始播放的位置（单位：s）。title`string`否是音频标题，用于原生音频播放器音频标题（必填）。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。epname`string`否是专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。singer`string`否是歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。coverImgUrl`string`否是封面图 URL，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。webUrl`string`否是页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。protocol`string`否是音频协议。默认值为 'http'，设置 'hls' 可以支持播放 HLS 协议的直播音频。playbackRate`number``1`否否播放速度。范围 0.5-2.0。duration`number`是是当前音频的长度（单位：s），只有在有合法 src 时返回。currentTime`number`是是当前音频的播放位置（单位：s），只有在有合法 src 时返回。paused`boolean`是是当前是否暂停或停止。buffered`number`是是音频已缓冲的时间，仅保证当前播放时间点到此时间点内容已缓冲。referrerPolicy`string`否否origin: 发送完整的 referrer; no-referrer: 不发送
### play[​](BackgroundAudioManager.html#play)
播放
```tsx
() => void
```

### pause[​](BackgroundAudioManager.html#pause)
暂停
```tsx
() => void
```

### seek[​](BackgroundAudioManager.html#seek)
跳转到指定位置，单位 s
```tsx
(position: any) => void
```

### stop[​](BackgroundAudioManager.html#stop)
停止
```tsx
() => void
```

### onCanplay[​](BackgroundAudioManager.html#oncanplay)
背景音频进入可以播放状态，但不保证后面可以流畅播放
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onWaiting[​](BackgroundAudioManager.html#onwaiting)
音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onError[​](BackgroundAudioManager.html#onerror)
背景音频播放错误事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onPlay[​](BackgroundAudioManager.html#onplay)
背景音频播放事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onPause[​](BackgroundAudioManager.html#onpause)
背景音频暂停事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onSeeking[​](BackgroundAudioManager.html#onseeking)
背景音频开始跳转操作事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onSeeked[​](BackgroundAudioManager.html#onseeked)
背景音频完成跳转操作事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onEnded[​](BackgroundAudioManager.html#onended)
背景音频自然播放结束事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onStop[​](BackgroundAudioManager.html#onstop)
背景音频停止事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onTimeUpdate[​](BackgroundAudioManager.html#ontimeupdate)
背景音频播放进度更新事件
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onPrev[​](BackgroundAudioManager.html#onprev)
用户在系统音乐播放面板点击上一曲事件（iOS only）
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
### onNext[​](BackgroundAudioManager.html#onnext)
用户在系统音乐播放面板点击下一曲事件（iOS only）
```tsx
(callback?: () => void) => void
```
参数类型callback`() => void`
## 示例代码[​](BackgroundAudioManager.html#示例代码)
```tsx
const backgroundAudioManager = Taro.getBackgroundAudioManager()
backgroundAudioManager.title = '此时此刻'
backgroundAudioManager.epname = '此时此刻'
backgroundAudioManager.singer = '许巍'
backgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
// 设置了 src 之后会自动播放
backgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
```

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
