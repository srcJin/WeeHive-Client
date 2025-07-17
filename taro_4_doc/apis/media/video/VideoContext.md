# VideoContext 实例，可通过 [Taro.createVideoContext](createVideoContext.html) 获取。
VideoContext 通过 id 跟一个 video 组件绑定，操作对应的 video 组件。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.html)
## 方法[​](VideoContext.html#方法)
### exitBackgroundPlayback[​](VideoContext.html#exitbackgroundplayback)
退出后台音频播放模式。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitBackgroundPlayback.html)
```tsx
() => void
```

### exitFullScreen[​](VideoContext.html#exitfullscreen)
退出全屏
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitFullScreen.html)
```tsx
() => void
```

### exitPictureInPicture[​](VideoContext.html#exitpictureinpicture)
退出小窗，该方法可在任意页面调用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.exitPictureInPicture.html)
```tsx
(option: ExitPictureInPictureOption) => void
```
参数类型option`ExitPictureInPictureOption`
### hideStatusBar[​](VideoContext.html#hidestatusbar)
隐藏状态栏，仅在iOS全屏下有效
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.hideStatusBar.html)
```tsx
() => void
```

### pause[​](VideoContext.html#pause)
暂停视频
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.pause.html)
```tsx
() => void
```

### play[​](VideoContext.html#play)
播放视频
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.play.html)
```tsx
() => void
```

### playbackRate[​](VideoContext.html#playbackrate)
设置倍速播放
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.playbackRate.html)
```tsx
(rate: number) => void
```
参数类型说明rate`number`倍率，支持 0.5/0.8/1.0/1.25/1.5，2.6.3 起支持 2.0 倍速
### requestBackgroundPlayback[​](VideoContext.html#requestbackgroundplayback)
进入后台音频播放模式。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestBackgroundPlayback.html)
```tsx
() => void
```

### requestFullScreen[​](VideoContext.html#requestfullscreen)
进入全屏
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.requestFullScreen.html)
```tsx
(option: RequestFullScreenOption) => void
```
参数类型option`RequestFullScreenOption`
### seek[​](VideoContext.html#seek)
跳转到指定位置
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.seek.html)
```tsx
(position: number) => void
```
参数类型说明position`number`跳转到的位置，单位 s
### sendDanmu[​](VideoContext.html#senddanmu)
发送弹幕
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.sendDanmu.html)
```tsx
(data: Danmu) => void
```
参数类型说明data`Danmu`弹幕内容
### showStatusBar[​](VideoContext.html#showstatusbar)
显示状态栏，仅在iOS全屏下有效
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.showStatusBar.html)
```tsx
() => void
```

### stop[​](VideoContext.html#stop)
停止视频
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/VideoContext.stop.html)
```tsx
() => void
```

## 参数[​](VideoContext.html#参数)
### ExitPictureInPictureOption[​](VideoContext.html#exitpictureinpictureoption)
参数类型必填说明success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### RequestFullScreenOption[​](VideoContext.html#requestfullscreenoption)
参数类型必填说明direction0 or 90 or -90否设置全屏时视频的方向，不指定则根据宽高比自动判断。

可选值：
- 0: 正常竖向;
- 90: 屏幕逆时针90度;
- -90: 屏幕顺时针90度;
### Danmu[​](VideoContext.html#danmu)
弹幕内容
参数类型必填说明text`string`是弹幕文字color`string`否弹幕颜色
## API 支持度[​](VideoContext.html#api-支持度)
API微信小程序H5React NativeHarmonyHarmony hybridVideoContext✔️✔️✔️✔️VideoContext.exitBackgroundPlayback✔️VideoContext.exitFullScreen✔️✔️✔️✔️VideoContext.exitPictureInPicture✔️VideoContext.hideStatusBar✔️VideoContext.pause✔️✔️✔️✔️VideoContext.play✔️✔️✔️✔️VideoContext.playbackRate✔️✔️✔️✔️VideoContext.requestBackgroundPlayback✔️VideoContext.requestFullScreen✔️✔️✔️✔️VideoContext.seek✔️✔️✔️✔️VideoContext.sendDanmu✔️VideoContext.showStatusBar✔️VideoContext.stop✔️✔️✔️✔️
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
