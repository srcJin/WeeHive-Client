# 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html)
## 类型[​](onAudioInterruptionEnd.html#类型)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数[​](onAudioInterruptionEnd.html#参数)
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`音频中断结束事件的回调函数
- 
-
