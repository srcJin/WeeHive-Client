# 设置 [InnerAudioContext](InnerAudioContext.html)项。设置之后对当前小程序全局生效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html)
## 类型[​](setInnerAudioOption.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setInnerAudioOption.html#参数)
参数类型option`Option`
### Option[​](setInnerAudioOption.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数mixWithOther`boolean`否是否与其他音频混播，设置为 true 之后，不会终止其他应用或微信内的音乐obeyMuteSwitch`boolean`否（仅在 iOS 生效）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
