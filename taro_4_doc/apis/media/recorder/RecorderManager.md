# 全局唯一的录音管理器
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.html)
## 方法[​](RecorderManager.html#方法)
### onError[​](RecorderManager.html#onerror)
监听录音错误事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型说明callback`OnErrorCallback`录音错误事件的回调函数
### onFrameRecorded[​](RecorderManager.html#onframerecorded)
监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onFrameRecorded.html)
```tsx
(callback: OnFrameRecordedCallback) => void
```
参数类型说明callback`OnFrameRecordedCallback`已录制完指定帧大小的文件事件的回调函数
### onInterruptionBegin[​](RecorderManager.html#oninterruptionbegin)
监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionBegin.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`录音因为受到系统占用而被中断开始事件的回调函数
### onInterruptionEnd[​](RecorderManager.html#oninterruptionend)
监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onInterruptionEnd.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`录音中断结束事件的回调函数
### onPause[​](RecorderManager.html#onpause)
监听录音暂停事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onPause.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`录音暂停事件的回调函数
### onResume[​](RecorderManager.html#onresume)
监听录音继续事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onResume.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`录音继续事件的回调函数
### onStart[​](RecorderManager.html#onstart)
监听录音开始事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStart.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`录音开始事件的回调函数
### onStop[​](RecorderManager.html#onstop)
监听录音结束事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.onStop.html)
```tsx
(callback: OnStopCallback) => void
```
参数类型说明callback`OnStopCallback`录音结束事件的回调函数
### pause[​](RecorderManager.html#pause)
暂停录音
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.pause.html)
```tsx
() => void
```

### resume[​](RecorderManager.html#resume)
继续录音
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.resume.html)
```tsx
() => void
```

### start[​](RecorderManager.html#start)
开始录音
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html)
```tsx
(option: StartOption) => void
```
参数类型option`StartOption`
### stop[​](RecorderManager.html#stop)
停止录音
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.stop.html)
```tsx
() => void
```

## 参数[​](RecorderManager.html#参数)
### OnErrorCallback[​](RecorderManager.html#onerrorcallback)
录音错误事件的回调函数
```tsx
(result: OnErrorCallbackResult) => void
```
参数类型result`OnErrorCallbackResult`
### OnErrorCallbackResult[​](RecorderManager.html#onerrorcallbackresult)
参数类型说明errMsg`string`错误信息
### OnFrameRecordedCallback[​](RecorderManager.html#onframerecordedcallback)
已录制完指定帧大小的文件事件的回调函数
```tsx
(result: OnFrameRecordedCallbackResult) => void
```
参数类型result`OnFrameRecordedCallbackResult`
### OnFrameRecordedCallbackResult[​](RecorderManager.html#onframerecordedcallbackresult)
参数类型说明frameBuffer`ArrayBuffer`录音分片数据isLastFrame`boolean`当前帧是否正常录音结束前的最后一帧
### OnStopCallback[​](RecorderManager.html#onstopcallback)
录音结束事件的回调函数
```tsx
(result: OnStopCallbackResult) => void
```
参数类型result`OnStopCallbackResult`
### OnStopCallbackResult[​](RecorderManager.html#onstopcallbackresult)
参数类型说明duration`number`录音总时长，单位：msfileSize`number`录音文件大小，单位：BytetempFilePath`string`录音文件的临时路径
### StartOption[​](RecorderManager.html#startoption)
参数类型必填说明audioSource`keyof AudioSource`否指定录音的音频输入源，可通过 [Taro.getAvailableAudioSources()](../audio/getAvailableAudioSources.html) 获取当前可用的音频源duration`number`否录音的时长，单位 ms，最大值 600000（10 分钟）encodeBitRate`number`否编码码率，有效值见下表格format`keyof Format`否音频格式frameSize`number`否指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。numberOfChannels`keyof NumberOfChannels`否录音通道数sampleRate`keyof SampleRate`否采样率
### AudioSource[​](RecorderManager.html#audiosource)
指定录音的音频输入源
参数说明auto自动设置，默认使用手机麦克风，插上耳麦后自动切换使用耳机麦克风，所有平台适用buildInMic手机麦克风，仅限 iOSheadsetMic耳机麦克风，仅限 iOSmic麦克风（没插耳麦时是手机麦克风，插耳麦时是耳机麦克风），仅限 Androidcamcorder同 mic，适用于录制音视频内容，仅限 Androidvoice_communication同 mic，适用于实时沟通，仅限 Androidvoice_recognition同 mic，适用于语音识别，仅限 Android
### Format[​](RecorderManager.html#format)
音频格式
参数说明mp3mp3 格式aacaac 格式wavwav 格式PCMpcm 格式
### NumberOfChannels[​](RecorderManager.html#numberofchannels)
录音通道数
参数说明11 个通道22 个通道
### SampleRate[​](RecorderManager.html#samplerate)
采样率
参数说明编码码率80008000 采样率`16000 ~ 48000`1102511025 采样率`16000 ~ 48000`1200012000 采样率`24000 ~ 64000`1600016000 采样率`24000 ~ 96000`2205022050 采样率`32000 ~ 128000`2400024000 采样率`32000 ~ 128000`3200032000 采样率`48000 ~ 192000`4410044100 采样率`64000 ~ 320000`4800048000 采样率`64000 ~ 320000`
## API 支持度[​](RecorderManager.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyRecorderManager.onError✔️✔️✔️RecorderManager.onFrameRecorded✔️✔️RecorderManager.onInterruptionBegin✔️RecorderManager.onInterruptionEnd✔️RecorderManager.onPause✔️✔️✔️RecorderManager.onResume✔️✔️✔️RecorderManager.onStart✔️✔️✔️RecorderManager.onStop✔️✔️✔️RecorderManager.pause✔️✔️RecorderManager.resume✔️✔️✔️RecorderManager.start✔️✔️✔️RecorderManager.stop✔️✔️✔️
- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
