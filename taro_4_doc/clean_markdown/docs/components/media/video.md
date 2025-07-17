# 视频。相关api：Taro.createVideoContext
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)
## 类型[​](video.html#类型)
```tsx
ComponentType<VideoProps>
```

## 示例代码[​](video.html#示例代码)

- React
- Vue
```tsx
export default class PageView extends Component {
 constructor() {
 super(...arguments)
 }

 render() {
 return (
 <View className='components-page'>
 <Video
 id='video'
 src='https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
 poster='https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
 initialTime={0}
 controls={true}
 autoplay={false}
 loop={false}
 muted={false}
 />
 </View>
 )
 }
}
html
<template>
 <video
 id="video"
 src="https://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
 poster="https://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg"
 initial-time="0"
 :controls="true"
 :autoplay="false"
 :loop="false"
 :muted="false"
 />
</template>
```

## VideoProps[​](video.html#videoprops)
参数类型默认值必填说明src`string`是要播放视频的资源地址duration`number`否指定视频时长controls`boolean``true`否是否显示默认播放控件（播放/暂停按钮、播放进度、时间）danmuList`any[]`否弹幕列表danmuBtn`boolean``false`否是否显示弹幕按钮，只在初始化时有效，不能动态变更enableDanmu`boolean``false`否是否展示弹幕，只在初始化时有效，不能动态变更autoplay`boolean``false`否是否自动播放loop`boolean``false`否是否循环播放muted`boolean``false`否是否静音播放initialTime`number`否指定视频初始播放位置pageGesture`boolean``false`否在非全屏模式下，是否开启亮度与音量调节手势direction`number`否设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）showProgress`boolean``true`否若不设置，宽度大于240时才会显示showFullscreenBtn`boolean``true`否是否显示全屏按钮showPlayBtn`boolean``true`否是否显示视频底部控制栏的播放按钮showCenterPlayBtn`boolean``true`否是否显示视频中间的播放按钮enableProgressGesture`boolean``true`否是否开启控制进度的手势objectFit`keyof ObjectFit``"contain"`否当视频大小与 video 容器大小不一致时，视频的表现形式poster`string`否视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效showMuteBtn`boolean``false`否是否显示静音按钮title`string`否视频的标题，全屏时在顶部展示playBtnPosition`keyof PlayBtnPosition``'bottom'`否播放按钮的位置
- `bottom`: controls bar 上
- `center`: 视频中间enablePlayGesture`boolean``false`否是否开启播放手势，即双击切换播放/暂停autoPauseIfNavigate`boolean``true`否当跳转到其它小程序页面时，是否自动暂停本页面的视频autoPauseIfOpenNative`boolean``true`否当跳转到其它微信原生页面时，是否自动暂停本页面的视频vslideGesture`boolean``false`否在非全屏模式下，是否开启亮度与音量调节手势（同 `page-gesture`）vslideGestureInFullscreen`boolean``true`否在全屏模式下，是否开启亮度与音量调节手势adUnitId`string`否视频前贴广告单元ID，更多详情可参考开放能力[视频前贴广告](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/ad/video-patch-ad.html)posterForCrawler`string`否用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址showCastingButton`boolean`否显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议pictureInPictureMode"" or "push" or "pop" or ("push" or "pop")[]否设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）enableAutoRotation`boolean`否是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效showScreenLockButton`boolean`否是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作showSnapshotButton`boolean`否是否显示截屏按钮，仅在全屏时显示showBackgroundPlaybackButton`boolean`否是否展示后台音频播放按钮backgroundPoster`string`否进入后台音频播放后的通知栏图标（Android 独有）nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上showBottomProgress`boolean``true`否是否展示底部进度条pictureInPictureShowProgress`string`否是否在小窗模式下显示播放进度referrerPolicy"origin" or "no-referrer"否格式固定为 [https://servicewechat.com/{appid}/{version}/page-frame.html，其中](https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html%EF%BC%8C%E5%85%B6%E4%B8%AD) {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；isDrm`boolean`否是否是 DRM 视频源provisionUrl`string`否DRM 设备身份认证 url，仅 is-drm 为 true 时生效 (Android)certificateUrl`string`否DRM 设备身份认证 url，仅 is-drm 为 true 时生效 (iOS)licenseUrl`string`否DRM 获取加密信息 url，仅 is-drm 为 true 时生效posterSize`string`否当 poster 高宽比跟视频高宽不匹配时，如何显示 poster，设置规则同 background-size 一致。showThinProgressBar`string`否当底部工具条隐藏时，是否显示细进度条（controls=false 时设置无效）。mobilenetHintType`number`否移动网络提醒样式。

0 - 不提醒
1 - tip 提醒
2 - 阻塞提醒(无消耗流量大小)
3 - 阻塞提醒(有消耗流量大小提醒)floatingMode`string`否浮窗设置。暂时不支持全局浮窗。
可选值：

none：无浮窗。
page：页面内浮窗。showNoWifiTip`string`否非 wifi 环境下是否显示继续播放浮层showLockBtn`string`否全屏模式下，是否显示锁屏按钮showRateBtn`string`否是否显示倍速播放按钮showVslideBtnInFullscreen`string`否全屏模式下，是否显示侧边栏控制按钮silentPlay`string`否是否进入无声视频模式，进入无声视频模式后，视频将静音播放且不响应系统物理音量变化，点击播放器提示无声视频，手势调节失效preRollUnitId`string`否前贴广告的 unit idpostRollUnitId`string`否后贴广告的 unit idshowPlaybackRateBtn`string`否是否显示倍速控件，点击倍速控件后可选择倍速，可选值： 0.75/1.0/1.25/1.5/2enablePlayInBackground`string`否video 播放时宿主退出后台后开启小窗播放，iOS 14 及以上版本支持。开启时首次退出后台后给予弹窗提示用户授权，授权完成后可以到小程序「设置」中重设。支持场景见后台小窗播放signature`string`否设置署名水印preferredPeakBitRate`number`否指定码率上界，单位为比特每秒isLive`boolean`否是否为直播源definition`string`否清晰度，设置清晰度列表和默认播放的清晰度。切换清晰度按钮仅在全屏时展示，属性说明详见 Definition 类型说明。需要保证 src 和 definition 中有一个为必填，若同时设置了 src 和 definition，definition 优先级高于 srconPlay`CommonEventFunction`否当开始/继续播放时触发 play 事件onPause`CommonEventFunction`否当暂停播放时触发 pause 事件onEnded`CommonEventFunction`否当播放到末尾时触发 ended 事件onTimeUpdate`CommonEventFunction<onTimeUpdateEventDetail>`否播放进度变化时触发, 触发频率 250ms 一次onFullscreenChange`CommonEventFunction<onFullscreenChangeEventDetail>`否当视频进入和退出全屏时触发onWaiting`CommonEventFunction<onWaitingEventDetail>`否视频出现缓冲时触发onError`CommonEventFunction`否视频播放出错时触发onProgress`CommonEventFunction<onProgressEventDetail>`否加载进度变化时触发，只支持一段加载onLoadedMetaData`CommonEventFunction<onLoadedMetaDataEventDetail>`否视频元数据加载完成时触发onEnterPictureInPicture`CommonEventFunction`否播放器进入小窗onLeavePictureInPicture`CommonEventFunction`否播放器退出小窗onSeekComplete`CommonEventFunction`否seek 完成时触发onFullScreenChange`CommonEventFunction<onFullscreenChangeEventDetail>`否视频进入和退出全屏时触发onControlsToggle`CommonEventFunction<onControlsToggleEventDetail>`否切换 controls 显示隐藏时触发。onLoading`CommonEventFunction`否视频出现缓冲时触发。onTap`CommonEventFunction<onTapEventDetail>`否点击视频 view 时触发onUserAction`CommonEventFunction<onUserActionEventDetail>`否用户操作事件onStop`CommonEventFunction`否视频播放终止。onRenderStart`CommonEventFunction`否当视频加载完真正开始播放时触发。onAdStart`CommonEventFunction<onAdTypeCommonEventDetail>`否贴片广告开始播放时触发onAdEnded`CommonEventFunction<onAdTypeCommonEventDetail>`否贴片广告播放结束时触发onAdClose`CommonEventFunction<onAdTypeCommonEventDetail>`否贴片广告非自然结束时触发，如：用户关闭广告或广告播放过程中 video 组件被销毁onAdError`CommonEventFunction<onAdTypeCommonEventDetail>`否贴片广告加载失败时触发onPlayBackRateChange`CommonEventFunction<{ playbackRate: string; }>`否视频倍速改变完成时触发。返回改变后的倍速值onMuteChange`CommonEventFunction<{ isMuted: boolean; }>`否静音状态改变完成时触发。返回当前是否静音onControlTap`CommonEventFunction<{ controlType: any; }>`否点击控件时触发。返回当前点击的控件类型onEnterBackground`CommonEventFunction`否进入小窗播放时触发onCloseBackground`CommonEventFunction`否关闭小窗播放时触发onLeaveBackground`CommonEventFunction`否离开小窗进入 app 事件时触发onLoadedData`CommonEventFunction`否否onLoadStart`CommonEventFunction`否否onSeeked`CommonEventFunction`否否onSeeking`CommonEventFunction`否否onAdLoad`CommonEventFunction`否贴片广告加载成功时触发，event.detail = { adType: 'preRollAd' or 'postRollAd' }onCastingUserSelect`CommonEventFunction`否用户选择投屏设备时触发 detail = { state: "success"/"fail" }onCastingStateChange`CommonEventFunction`否投屏成功/失败时触发 detail = { type, state: "success"/"fail" }onCastingInterrupt`CommonEventFunction`否投屏被中断时触发
### API 支持度[​](video.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridVideoProps.src✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.duration✔️✔️✔️✔️✔️✔️✔️VideoProps.controls✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.danmuList✔️✔️✔️✔️✔️VideoProps.danmuBtn✔️✔️✔️✔️✔️VideoProps.enableDanmu✔️✔️✔️✔️✔️VideoProps.autoplay✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.loop✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.muted✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.initialTime✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.pageGesture✔️✔️✔️VideoProps.direction✔️✔️✔️✔️✔️VideoProps.showProgress✔️✔️✔️✔️✔️VideoProps.showFullscreenBtn✔️✔️✔️✔️✔️✔️✔️VideoProps.showPlayBtn✔️✔️✔️✔️✔️✔️✔️VideoProps.showCenterPlayBtn✔️✔️✔️✔️✔️✔️✔️VideoProps.enableProgressGesture✔️✔️✔️✔️✔️✔️✔️VideoProps.objectFit✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.poster✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.showMuteBtn✔️✔️✔️✔️✔️✔️✔️VideoProps.title✔️✔️✔️VideoProps.playBtnPosition✔️✔️✔️VideoProps.enablePlayGesture✔️✔️✔️✔️✔️✔️VideoProps.autoPauseIfNavigate✔️✔️VideoProps.autoPauseIfOpenNative✔️✔️VideoProps.vslideGesture✔️✔️✔️✔️✔️VideoProps.vslideGestureInFullscreen✔️✔️✔️✔️✔️VideoProps.adUnitId✔️VideoProps.posterForCrawler✔️VideoProps.showCastingButton✔️VideoProps.pictureInPictureMode✔️VideoProps.enableAutoRotation✔️VideoProps.showScreenLockButton✔️✔️VideoProps.showSnapshotButton✔️VideoProps.showBackgroundPlaybackButton✔️VideoProps.backgroundPoster✔️VideoProps.nativeProps✔️✔️VideoProps.showBottomProgress✔️VideoProps.pictureInPictureShowProgress✔️VideoProps.referrerPolicy✔️VideoProps.isDrm✔️VideoProps.provisionUrl✔️VideoProps.certificateUrl✔️VideoProps.licenseUrl✔️VideoProps.posterSize✔️VideoProps.showThinProgressBar✔️VideoProps.mobilenetHintType✔️✔️VideoProps.floatingMode✔️VideoProps.showNoWifiTip✔️VideoProps.showLockBtn✔️VideoProps.showRateBtn✔️VideoProps.showVslideBtnInFullscreen✔️VideoProps.silentPlay✔️VideoProps.preRollUnitId✔️VideoProps.postRollUnitId✔️VideoProps.showPlaybackRateBtn✔️VideoProps.enablePlayInBackground✔️VideoProps.signature✔️VideoProps.preferredPeakBitRate✔️VideoProps.isLive✔️VideoProps.definition✔️VideoProps.onPlay✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.onPause✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.onEnded✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.onTimeUpdate✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.onFullscreenChange✔️✔️✔️✔️✔️VideoProps.onWaiting✔️✔️✔️✔️✔️VideoProps.onError✔️✔️✔️✔️✔️✔️✔️✔️✔️VideoProps.onProgress✔️✔️✔️✔️✔️✔️VideoProps.onLoadedMetaData✔️✔️✔️✔️✔️✔️VideoProps.onEnterPictureInPicture✔️VideoProps.onLeavePictureInPicture✔️VideoProps.onSeekComplete✔️✔️VideoProps.onFullScreenChange✔️✔️✔️✔️✔️✔️VideoProps.onControlsToggle✔️✔️VideoProps.onLoading✔️VideoProps.onTap✔️VideoProps.onUserAction✔️VideoProps.onStop✔️VideoProps.onRenderStart✔️VideoProps.onAdStart✔️VideoProps.onAdEnded✔️VideoProps.onAdClose✔️VideoProps.onAdError✔️VideoProps.onPlayBackRateChange✔️VideoProps.onMuteChange✔️VideoProps.onControlTap✔️VideoProps.onEnterBackground✔️VideoProps.onCloseBackground✔️VideoProps.onLeaveBackground✔️VideoProps.onLoadedData✔️VideoProps.onLoadStart✔️VideoProps.onSeeked✔️✔️VideoProps.onSeeking✔️✔️VideoProps.onAdLoad✔️VideoProps.onCastingUserSelect✔️VideoProps.onCastingStateChange✔️VideoProps.onCastingInterrupt✔️
### direction[​](video.html#direction)
direction 的合法值
参数说明0正常竖向90屏幕逆时针90度-90屏幕顺时针90度
### ObjectFit[​](video.html#objectfit)
objectFit 的合法值
参数说明contain包含fill填充cover覆盖
### PlayBtnPosition[​](video.html#playbtnposition)
playBtnPosition 的合法值
参数说明bottomcontrols bar上center视频中间
### onTimeUpdateEventDetail[​](video.html#ontimeupdateeventdetail)
参数类型说明currentTime`number`当前时间duration`number`持续时间userPlayDuration`number`用户实际观看时长videoDuration`number`视频总时长
#### API 支持度[​](video.html#api-支持度-1)
API微信小程序支付宝小程序H5React NativeHarmonyonTimeUpdateEventDetail.userPlayDuration✔️onTimeUpdateEventDetail.videoDuration✔️
### onFullscreenChangeEventDetail[​](video.html#onfullscreenchangeeventdetail)
参数类型说明direction"vertical" or "horizontal"方向fullScreennumber or boolean全屏
### onWaitingEventDetail[​](video.html#onwaitingeventdetail)
参数类型说明direction"vertical" or "horizontal"方向fullScreennumber or boolean全屏
### onProgressEventDetail[​](video.html#onprogresseventdetail)
参数类型说明buffered`number`百分比
### onLoadedMetaDataEventDetail[​](video.html#onloadedmetadataeventdetail)
参数类型说明width`number`视频宽度height`number`视频高度duration`number`持续时间
### onControlsToggleEventDetail[​](video.html#oncontrolstoggleeventdetail)
参数类型说明show`boolean`是否显示
### onTapEventDetail[​](video.html#ontapeventdetail)
参数类型ptInView`{ x: number; y: number; }`
### onUserActionEventDetail[​](video.html#onuseractioneventdetail)
参数类型说明tag`string`用户操作的元素value`number`
### UserActionTag[​](video.html#useractiontag)
参数说明play底部播放按钮centerplay中心播放按钮mute静音按钮fullscreen全屏按钮retry重试按钮mobilenetplay网络提醒的播放按钮
### onAdTypeCommonEventDetail[​](video.html#onadtypecommoneventdetail)
参数类型说明adType"preRollAd" or "postRollAd"广告类型
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
