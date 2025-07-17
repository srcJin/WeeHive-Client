# 开始播放语音。同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html)
## 类型[​](playVoice.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](playVoice.html#参数)
参数类型option`Option`
### Option[​](playVoice.html#option)
参数类型必填说明filePath`string`是需要播放的语音文件的文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）duration`number`否指定录音时长，到达指定的录音时长后会自动停止录音，单位：秒fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](playVoice.html#示例代码)
```tsx
Taro.startRecord({
 success: function (res) {
 const tempFilePath = res.tempFilePath
 Taro.playVoice({
 filePath: tempFilePath,
 complete: function () { }
 })
 }
})
```

- 
- 

- 

-
