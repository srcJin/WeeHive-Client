# 暂停正在播放的语音。再次调用 [Taro.playVoice](stopVoice.html)。 **注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](createInnerAudioContext.html) 接口**
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html)
## 类型[​](pauseVoice.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](pauseVoice.html#参数)
参数类型option`Option`
### Option[​](pauseVoice.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](pauseVoice.html#示例代码)
```tsx
Taro.startRecord({
 success: function (res) {
 var tempFilePath = res.tempFilePath
 Taro.playVoice({
 filePath: tempFilePath
 })
 setTimeout(function() {
 //暂停播放
 Taro.pauseVoice()
 }, 5000)
 }
})
```

- 
- 

- 

-
