# 获取**全局唯一**的录音管理器 RecorderManager
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html)
## 类型[​](getRecorderManager.html#类型)
```tsx
() => RecorderManager
```

## 示例代码[​](getRecorderManager.html#示例代码)
```tsx
const recorderManager = Taro.getRecorderManager()
recorderManager.onStart(() => {
 console.log('recorder start')
})
recorderManager.onPause(() => {
 console.log('recorder pause')
})
recorderManager.onStop((res) => {
 console.log('recorder stop', res)
 const { tempFilePath } = res
})
recorderManager.onFrameRecorded((res) => {
 const { frameBuffer } = res
 console.log('frameBuffer.byteLength', frameBuffer.byteLength)
})
const options = {
 duration: 10000,
 sampleRate: 44100,
 numberOfChannels: 1,
 encodeBitRate: 192000,
 format: 'aac',
 frameSize: 50
}
recorderManager.start(options)
```

- 
-
