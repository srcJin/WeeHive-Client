# 获取当前支持的音频输入源
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html)
## 类型[​](getAvailableAudioSources.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getAvailableAudioSources.html#参数)
参数类型option`Option`
### Option[​](getAvailableAudioSources.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getAvailableAudioSources.html#successcallbackresult)
参数类型说明audioSources`(keyof audioSources)[]`支持的音频输入源列表，可在 [RecorderManager.start()](../recorder/RecorderManager.html#start)用。返回值定义参考 [https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource](https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource)errMsg`string`调用结果
### audioSources[​](getAvailableAudioSources.html#audiosources)
支持的音频输入源
参数说明auto自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用buildInMic手机麦克风，仅限 iOSheadsetMic耳机麦克风，仅限 iOSmic麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Androidcamcorder同 mic，适用于录制音视频内容，仅限 Androidvoice_communication同 mic，适用于实时沟通，仅限 Androidvoice_recognition同 mic，适用于语音识别，仅限 Android
- 
- 

- 
- 
-
