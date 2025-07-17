# `AudioContext` 实例，可通过 `Taro.createAudioContext` 获取。
`AudioContext` 通过 `id` 跟一个 `audio` 组件绑定，操作对应的 audio 组件。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.html)
## 方法[​](AudioContext.html#方法)
### pause[​](AudioContext.html#pause)
暂停音频。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.pause.html)
```tsx
() => void
```

### play[​](AudioContext.html#play)
播放音频。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.play.html)
```tsx
() => void
```

### seek[​](AudioContext.html#seek)
跳转到指定位置。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.seek.html)
```tsx
(position: number) => void
```
参数类型说明position`number`跳转位置，单位 s
### setSrc[​](AudioContext.html#setsrc)
设置音频地址
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/AudioContext.setSrc.html)
```tsx
(src: string) => void
```
参数类型说明src`string`音频地址
## API 支持度[​](AudioContext.html#api-支持度)
API微信小程序H5React NativeHarmonyHarmony hybridAudioContext✔️✔️AudioContext.pause✔️✔️AudioContext.play✔️✔️AudioContext.seek✔️AudioContext.setSrc✔️
- 

- 
- 
- 
- 

-
