# 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html)
## 类型[​](onAudioInterruptionBegin.html#类型)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数[​](onAudioInterruptionBegin.html#参数)
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`音频因为受到系统占用而被中断开始事件的回调函数
- 
-
