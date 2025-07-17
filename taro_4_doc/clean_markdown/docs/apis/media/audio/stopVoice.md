# 结束播放语音。 **注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](createInnerAudioContext.html) 接口**
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html)
## 类型[​](stopVoice.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](stopVoice.html#参数)
参数类型option`Option`
### Option[​](stopVoice.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](stopVoice.html#示例代码)
### 示例 1[​](stopVoice.html#示例-1)
```tsx
Taro.startRecord({
 success: function (res) {
 const filePath = res.tempFilePath
 Taro.playVoice({ filePath })

 setTimeout(Taro.stopVoice, 5000)
 }
})
```

### 示例 2[​](stopVoice.html#示例-2)
```tsx
Taro.startRecord(params).then(res => {
 const filePath = res.tempFilePath
 Taro.playVoice({ filePath })

 setTimeout(Taro.stopVoice, 5000)
})
```

- 
- 

- 

- 

- 
-
