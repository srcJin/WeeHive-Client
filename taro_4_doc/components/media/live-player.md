# 实时音视频播放。相关api：Taro.createLivePlayerContext
需要先通过类目审核，再在小程序管理后台，“设置”-“接口设置”中自助开通该组件权限。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)
## 类型[​](live-player.html#类型)
```tsx
ComponentType<LivePlayerProps>
```

## 示例代码[​](live-player.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 return (
 <LivePlayer src='url' mode='live' autoplay />
 )
 }
}
html
<template>
 <live-player src="url" mode="live" :autoplay="true" />
</template>
```

## LivePlayerProps[​](live-player.html#liveplayerprops)
参数类型默认值必填说明src`string`否音视频地址。目前仅支持 flv, rtmp 格式mode`keyof Mode``"live"`否模式autoplay`boolean``false`否自动播放muted`boolean``false`否是否静音orientation`keyof Orientation``"vertical"`否画面方向objectFit`keyof objectFit``"contain"`否填充模式backgroundMute`boolean``false`否进入后台时是否静音（已废弃，默认退台静音）
**不推荐使用**minCache`number``1`否最小缓冲区，单位smaxCache`number``3`否最大缓冲区，单位ssoundMode`keyof soundMode``"speaker"`否声音输出方式autoPauseIfNavigate`boolean``true`否当跳转到本小程序的其他页面时，是否自动暂停本页面的实时音视频播放pictureInPictureMode"" or "push" or "pop" or ("push" or "pop")[]否设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）autoPauseIfOpenNative`boolean``true`否当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放referrerPolicy"origin" or "no-referrer"`'no-referrer'`否格式固定为 [https://servicewechat.com/{appid}/{version}/page-frame.html](https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html) ，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；signature`string`否设置署名水印enableMetadata`string`否是否回调metadataid`string`否live-player 属性的唯一标志符enableAutoRotation`boolean``false`否是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效enableCasting`boolean``false`否是否支持投屏。开启后，可以通过 LivePlayerContext 上相关方法进行操作。onStateChange`CommonEventFunction<onStateChangeEventDetail>`否播放状态变化事件，detail = {code}onFullScreenChange`CommonEventFunction<onFullScreenChangeEventDetail>`否全屏变化事件，detail = {direction, fullScreen}onNetStatus`CommonEventFunction<onNetStatusEventDetail>`否网络状态通知，detail = {info}onAudioVolumeNotify`CommonEventFunction<{}>`否播放音量大小通知，detail = {}onEnterPictureInPicture`CommonEventFunction`否播放器进入小窗onLeavePictureInPicture`CommonEventFunction`否播放器退出小窗onError`CommonEventFunction`否播放错误事件onMetaDataChange`CommonEventFunction`否metadata通知，detail = {info}onCastingUserSelectCommonEventFunction<{ state: "success" or "fail"; }>否用户选择投屏设备时触发 detail = { state: "success"/"fail" }onCastingStateChangeCommonEventFunction<{ type: any; state: "success" or "fail"; }>否投屏成功/失败时触发 detail = { type, state: "success"/"fail" }onCastingInterrupt`CommonEventFunction`否投屏被中断时触发
### API 支持度[​](live-player.html#api-支持度)
API微信小程序百度小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyLivePlayerProps.src✔️✔️✔️✔️✔️LivePlayerProps.mode✔️✔️✔️LivePlayerProps.autoplay✔️✔️✔️✔️✔️LivePlayerProps.muted✔️✔️✔️✔️✔️LivePlayerProps.orientation✔️✔️✔️✔️✔️LivePlayerProps.objectFit✔️✔️✔️✔️✔️LivePlayerProps.backgroundMute✔️✔️LivePlayerProps.minCache✔️✔️✔️LivePlayerProps.maxCache✔️✔️✔️LivePlayerProps.soundMode✔️✔️✔️LivePlayerProps.autoPauseIfNavigate✔️✔️LivePlayerProps.pictureInPictureMode✔️LivePlayerProps.autoPauseIfOpenNative✔️✔️LivePlayerProps.referrerPolicy✔️LivePlayerProps.signature✔️LivePlayerProps.enableMetadata✔️LivePlayerProps.id✔️LivePlayerProps.enableAutoRotation✔️LivePlayerProps.enableCasting✔️LivePlayerProps.onStateChange✔️✔️✔️✔️✔️LivePlayerProps.onFullScreenChange✔️✔️✔️✔️✔️LivePlayerProps.onNetStatus✔️✔️✔️LivePlayerProps.onAudioVolumeNotify✔️LivePlayerProps.onEnterPictureInPicture✔️LivePlayerProps.onLeavePictureInPicture✔️LivePlayerProps.onError✔️LivePlayerProps.onMetaDataChange✔️LivePlayerProps.onCastingUserSelect✔️LivePlayerProps.onCastingStateChange✔️LivePlayerProps.onCastingInterrupt✔️
### Mode[​](live-player.html#mode)
mode 的合法值
参数说明live直播RTC实时通话，该模式时延更低
### Orientation[​](live-player.html#orientation)
orientation 的合法值
参数说明vertical竖直horizontal水平
### objectFit[​](live-player.html#objectfit)
objectFit 的合法值
参数说明contain图像长边填满屏幕，短边区域会被填充⿊⾊fillCrop图像铺满屏幕，超出显示区域的部分将被截掉
### soundMode[​](live-player.html#soundmode)
soundMode 的合法值
参数说明speaker扬声器ear听筒
### onStateChangeEventDetail[​](live-player.html#onstatechangeeventdetail)
参数类型说明code`number`状态码
### onFullScreenChangeEventDetail[​](live-player.html#onfullscreenchangeeventdetail)
参数类型说明direction`number`方向fullScreennumber or boolean全屏
### onNetStatusEventDetail[​](live-player.html#onnetstatuseventdetail)
参数类型info`NetStatus`
### Status[​](live-player.html#status)
状态码
参数说明2001已经连接服务器2002已经连接 RTMP 服务器,开始拉流2003网络接收到首个视频数据包(IDR)2004视频播放开始2005视频播放进度2006视频播放结束2007视频播放Loading2008解码器启动2009视频分辨率改变-2301网络断连，且经多次重连抢救无效，更多重试请自行重启播放-2302获取加速拉流地址失败2101当前视频帧解码失败2102当前音频帧解码失败2103网络断连, 已启动自动重连2104网络来包不稳：可能是下行带宽不足，或由于主播端出流不均匀2105当前视频播放出现卡顿2106硬解启动失败，采用软解2107当前视频帧不连续，可能丢帧2108当前流硬解第一个I帧失败，SDK自动切软解3001RTMP -DNS解析失败3002RTMP服务器连接失败3003RTMP服务器握手失败3005RTMP 读/写失败
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
