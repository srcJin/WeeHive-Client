# 创建 WebAudio 上下文。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createWebAudioContext.html)
## 类型[​](createWebAudioContext.html#类型)
```tsx
() => WebAudioContext
```

## 示例代码[​](createWebAudioContext.html#示例代码)
一个简单的播放demo
```tsx
const audioCtx = Taro.createWebAudioContext()

const loadAudio = (url) => {
 return new Promise((resolve) => {
 Taro.request({
 url,
 responseType: 'arraybuffer',
 success: res => {
 console.log('res.data', res.data)
 audioCtx.decodeAudioData(res.data, buffer => {
 resolve(buffer)
 }, err => {
 console.error('decodeAudioData fail', err)
 reject()
 })
 },
 fail: res => {
 console.error('request fail', res)
 reject()
 }
 })
 })
}

const play = () => {
 loadAudio('xxx-test.mp3').then(buffer => {
 const source = audioCtx.createBufferSource()
 source.buffer = buffer
 source.connect(audioCtx.destination)
 source.start()
 }).catch(() => {
 console.log('fail')
 })
}

play()
```

- 
-
