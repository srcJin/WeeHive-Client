# 停止播放音乐。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html)
## 类型[​](stopBackgroundAudio.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](stopBackgroundAudio.html#参数)
参数类型option`Option`
### Option[​](stopBackgroundAudio.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](stopBackgroundAudio.html#示例代码)
```tsx
Taro.stopBackgroundAudio()
```

- 
- 

- 

-
