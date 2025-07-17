# MediaAudioPlayer 实例，可通过 [Taro.createMediaAudioPlayer](createMediaAudioPlayer.html) 接口获取实例。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.html)
## 方法[​](MediaAudioPlayer.html#方法)
参数类型默认值说明volume`number``1`音量。范围 0~1
### start[​](MediaAudioPlayer.html#start)
启动播放器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.start.html)
```tsx
() => Promise<void>
```

### addAudioSource[​](MediaAudioPlayer.html#addaudiosource)
添加音频源
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.addAudioSource.html)
```tsx
(source: VideoDecoder) => Promise<void>
```
参数类型说明source`VideoDecoder`视频解码器实例。作为音频源添加到音频播放器中
### removeAudioSource[​](MediaAudioPlayer.html#removeaudiosource)
移除音频源
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.removeAudioSource.html)
```tsx
(source: VideoDecoder) => Promise<void>
```
参数类型说明source`VideoDecoder`视频解码器实例
### stop[​](MediaAudioPlayer.html#stop)
停止播放器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.stop.html)
```tsx
() => Promise<void>
```

### destroy[​](MediaAudioPlayer.html#destroy)
销毁播放器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/MediaAudioPlayer.destroy.html)
```tsx
() => Promise<void>
```

## API 支持度[​](MediaAudioPlayer.html#api-支持度)
API微信小程序H5React NativeHarmonyMediaAudioPlayer✔️MediaAudioPlayer.start✔️MediaAudioPlayer.addAudioSource✔️MediaAudioPlayer.removeAudioSource✔️MediaAudioPlayer.stop✔️MediaAudioPlayer.destroy✔️
- 

- 
- 
- 
- 
- 

-
