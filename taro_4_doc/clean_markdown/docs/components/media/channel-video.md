# 小程序内嵌视频号视频组件，支持在小程序中播放视频号视频，并无弹窗跳转至视频号。注意：使用该组件打开的视频号视频需要与小程序相同主体或关联主体。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/channel-video.html)
## 类型[​](channel-video.html#类型)
```tsx
ComponentType<ChannelVideoProps>
```

## ChannelVideoProps[​](channel-video.html#channelvideoprops)
参数类型默认值必填说明feedId`string`是仅视频号视频与小程序同主体时生效。若内嵌非同主体视频，请使用 feed-token。finderUserName`string`是视频号 id，以“sph”开头的id，可在视频号助手获取。视频号必须与当前小程序相同主体。loop`boolean``false`否是否循环播放muted`boolean``false`否是否静音播放objectFit"fill" or "contain" or "cover"`"contain"`否当视频大小与 video 容器大小不一致时，视频的表现形式autoplay`boolean``false`否是否自动播放feedToken`string`否仅内嵌小程序非同主体视频号视频时使用，获取方式参考[本指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/channels-activity.html#feed-token)。onError`CommonEventFunction`否视频播放出错时触发
### API 支持度[​](channel-video.html#api-支持度)
API微信小程序H5React NativeHarmonyChannelVideoProps.feedId✔️ChannelVideoProps.finderUserName✔️ChannelVideoProps.loop✔️ChannelVideoProps.muted✔️ChannelVideoProps.objectFit✔️ChannelVideoProps.autoplay✔️ChannelVideoProps.feedToken✔️ChannelVideoProps.onError✔️
- 
- 

-
