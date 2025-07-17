# 实时音视频通话房间
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/media_rtc-room/)
## 类型[​](rtc-room.html#类型)
```tsx
ComponentType<RtcRoomProps>
```

## RtcRoomProps[​](rtc-room.html#rtcroomprops)
参数类型默认值必填说明id`string`否rtc-room 组件的唯一标识符enableCamera`boolean``true`否是否开启摄像头enableAutoFocus`boolean``true`否是否开启摄像头自动对焦enableZoom`boolean``false`否是否支持双手滑动调整摄像头聚焦devicePosition"front" or "back"`"front"`否设置前置还是后置摄像头，有效值：front、backenableMic`boolean``true`否是否开启麦克风enableAgc`boolean``false`否是否开启音频自动增益enableAns`boolean``false`否是否开启音频噪声抑制bitrate`number``900`否最大码率videoWidth`number``360`否视频分辨率宽videoHeight`number``640`否视频分辨率高enableRemoteMirror`boolean``false`否设置远端看到的画面的镜像效果，该属性的变化不会影响到本地画面，仅影响远端看到的画面效果localMirror"auto" or "enable" or "disable"`"auto"`否设置本地摄像头预览画面的镜像效果，有效值：auto、enable、disablesoundMode"speaker" or "ear"`"speaker"`否设置声音输出方式，有效值：speaker、earonStateChange`CommonEventFunction`否房间状态变化事件，参考下方状态码，detail = { code, msg, userInfo }onError`CommonEventFunction`否错误事件。参考下方错误码，detail = { errMsg, errCode }
### API 支持度[​](rtc-room.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyRtcRoomProps.id✔️RtcRoomProps.enableCamera✔️RtcRoomProps.enableAutoFocus✔️RtcRoomProps.enableZoom✔️RtcRoomProps.devicePosition✔️RtcRoomProps.enableMic✔️RtcRoomProps.enableAgc✔️RtcRoomProps.enableAns✔️RtcRoomProps.bitrate✔️RtcRoomProps.videoWidth✔️RtcRoomProps.videoHeight✔️RtcRoomProps.enableRemoteMirror✔️RtcRoomProps.localMirror✔️RtcRoomProps.soundMode✔️RtcRoomProps.onStateChange✔️RtcRoomProps.onError✔️
- 
- 

-
