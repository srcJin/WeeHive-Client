# 实时音视频录制。需要用户授权 scope.camera、scope.record 需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
## 类型[​](live-pusher.html#类型)
```tsx
ComponentType<LivePusherProps>
```

## 示例代码[​](live-pusher.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 return (
 <LivePusher url='url' mode='RTC' autopush />
 )
 }
}
html
<template>
 <live-pusher url="url" mode="RTC" :autopush="true" />
</template>
```

## LivePusherProps[​](live-pusher.html#livepusherprops)
实时音视频录制。 需要用户授权 scope.camera、scope.record 暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。
参数类型默认值必填说明url`string`否推流地址。目前仅支持 rtmp 格式mode"SD" or "HD" or "FHD" or "RTC"`"RTC"`否SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话）autopush`boolean``false`否自动推流enableVideoCustomRender`boolean``false`否自定义渲染，允许开发者自行处理所采集的视频帧muted`boolean``false`否是否静音。即将废弃，可用 enable-mic 替代
**不推荐使用**enableCamera`boolean``true`否开启摄像头autoFocus`boolean``true`否自动聚集orientation`keyof Orientation``"vertical"`否画面方向beauty`number``0`否美颜，取值范围 0-9 ，0 表示关闭whiteness`number``0`否美白，取值范围 0-9 ，0 表示关闭aspect"9:16" or "3:4"`"9:16"`否宽高比，可选值有 3:4, 9:16minBitrate`number``200`否最小码率maxBitrate`number``1000`否最大码率audioQuality`string``"high"`否高音质(48KHz)或低音质(16KHz)，值为high, lowwaitingImage`string`否进入后台时推流的等待画面waitingImageHash`string`否等待画面资源的MD5值zoom`boolean``false`否调整焦距devicePosition`string``"front"`否前置或后置，值为front, backbackgroundMute`boolean``false`否进入后台时是否静音mirror`boolean``false`否设置推流画面是否镜像，产生的效果在 LivePlayer 反应到remoteMirror`boolean``false`否设置推流画面是否镜像，产生的效果在 LivePlayer 反应到

**Note:** 同 mirror 属性，后续 mirror 将废弃localMirror`keyof LocalMirror``"auto"`否控制本地预览画面是否镜像audioReverbType`keyof AudioReverbType``0`否音频混响类型enableMic`boolean``true`否开启或关闭麦克风enableAgc`boolean``false`否是否开启音频自动增益enableAns`boolean``false`否是否开启音频噪声抑制audioVolumeType`keyof AudioVolumeType``"voicecall"`否音量类型videoWidth`number``360`否上推的视频流的分辨率宽度videoHeight`number``640`否上推的视频流的分辨率高度beautyStyle`keyof BeautyStyleType``smooth`否设置美颜类型filter`keyof FilterType``standard`否设置色彩滤镜pictureInPictureModestring or any[]否设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）customEffect`boolean``false`否是否启动自定义特效，设定后不能更改skinWhiteness`number``0`否自定义特效美白效果，取值 0~1。需要开启 custom-effectskinSmoothness`number``0`否自定义特效磨皮效果，取值 0~1。需要开启 custom-effectfaceThinness`number``0`否自定义特效瘦脸效果，取值 0~1。需要开启 custom-effecteyeBigness`number``0`否自定义特效大眼效果，取值 0~1。需要开启 custom-effectvoiceChangerType`number``0`否0：关闭变声；1：熊孩子；2：萝莉；3：大叔；4：重金属；6：外国人；7：困兽；8：死肥仔；9：强电流；10：重机械；11：空灵fps`number``15`否帧率，有效值为 1~30onStateChange`CommonEventFunction<onStateChangeEventDetail>`否状态变化事件，detail = {code}onError`CommonEventFunction<onErrorEventDetail>`否渲染错误事件，detail = {errMsg, errCode}onBgmProgress`CommonEventFunction<onBgmProgressEventDetail>`否背景音进度变化时触发，detail = {progress, duration}onBgmComplete`CommonEventFunction`否背景音播放完成时触发onAudioVolumeNotify`CommonEventFunction`否返回麦克风采集的音量大小onNetStatus`CommonEventFunction`否网络状态通知，detail = {info}onEnterPictureInPicture`string`否进入小窗onLeavePictureInPicture`string`否退出小窗onBgmStart`CommonEventFunction`否背景音开始播放时触发
### API 支持度[​](live-pusher.html#api-支持度)
API微信小程序QQ 小程序H5React NativeHarmonyLivePusherProps.url✔️✔️LivePusherProps.mode✔️✔️LivePusherProps.autopush✔️✔️LivePusherProps.enableVideoCustomRender✔️LivePusherProps.muted✔️✔️LivePusherProps.enableCamera✔️✔️LivePusherProps.autoFocus✔️✔️LivePusherProps.orientation✔️✔️LivePusherProps.beauty✔️✔️LivePusherProps.whiteness✔️✔️LivePusherProps.aspect✔️✔️LivePusherProps.minBitrate✔️✔️LivePusherProps.maxBitrate✔️✔️LivePusherProps.audioQuality✔️✔️LivePusherProps.waitingImage✔️✔️LivePusherProps.waitingImageHash✔️✔️LivePusherProps.zoom✔️✔️LivePusherProps.devicePosition✔️✔️LivePusherProps.backgroundMute✔️✔️LivePusherProps.mirror✔️✔️LivePusherProps.remoteMirror✔️LivePusherProps.localMirror✔️LivePusherProps.audioReverbType✔️✔️LivePusherProps.enableMic✔️LivePusherProps.enableAgc✔️LivePusherProps.enableAns✔️LivePusherProps.audioVolumeType✔️LivePusherProps.videoWidth✔️LivePusherProps.videoHeight✔️LivePusherProps.beautyStyle✔️LivePusherProps.filter✔️LivePusherProps.pictureInPictureMode✔️LivePusherProps.customEffect✔️LivePusherProps.skinWhiteness✔️LivePusherProps.skinSmoothness✔️LivePusherProps.faceThinness✔️LivePusherProps.eyeBigness✔️LivePusherProps.voiceChangerType✔️LivePusherProps.fps✔️LivePusherProps.onStateChange✔️✔️LivePusherProps.onError✔️✔️LivePusherProps.onBgmProgress✔️✔️LivePusherProps.onBgmComplete✔️✔️LivePusherProps.onAudioVolumeNotify✔️LivePusherProps.onNetStatus✔️✔️LivePusherProps.onEnterPictureInPicture✔️LivePusherProps.onLeavePictureInPicture✔️LivePusherProps.onBgmStart✔️✔️
### Orientation[​](live-pusher.html#orientation)
orientation 的合法值
参数说明vertical竖直horizontal水平
### LocalMirror[​](live-pusher.html#localmirror)
localMirror 的合法值
参数说明auto前置摄像头镜像，后置摄像头不镜像enable前后置摄像头均镜像disable前后置摄像头均不镜像
### AudioReverbType[​](live-pusher.html#audioreverbtype)
audioReverbType 的合法值
参数说明0关闭1KTV2小房间3大会堂4低沉5洪亮6金属声7磁性
### AudioVolumeType[​](live-pusher.html#audiovolumetype)
audioVolumeType 的合法值
参数说明auto自动media媒体音量voicecall通话音量
### BeautyStyleType[​](live-pusher.html#beautystyletype)
beautyStyleType 的合法值
参数说明smooth光滑美颜nature自然美颜
### FilterType[​](live-pusher.html#filtertype)
filterType 的合法值
参数说明standard标准pink粉嫩nostalgia怀旧blues蓝调romantic浪漫cool清凉fresher清新solor日系aestheticism唯美whitening美白cerisered樱红
### onStateChangeEventDetail[​](live-pusher.html#onstatechangeeventdetail)
参数类型说明code`number`状态码
### onNetstatusEventDetail[​](live-pusher.html#onnetstatuseventdetail)
参数类型说明info`NetStatus`网络状态
### onErrorEventDetail[​](live-pusher.html#onerroreventdetail)
参数类型说明errMsg`string`错误信息errCodestring or number错误码
### onBgmProgressEventDetail[​](live-pusher.html#onbgmprogresseventdetail)
参数类型说明progress`any`进展duration`number`持续时间
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
