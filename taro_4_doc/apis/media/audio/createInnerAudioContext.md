# 创建内部 audio 上下文 InnerAudioContext 对象。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html)
## 类型[​](createInnerAudioContext.html#类型)
```tsx
(option?: Option) => InnerAudioContext
```

## 参数[​](createInnerAudioContext.html#参数)
参数类型option`Option`
### Option[​](createInnerAudioContext.html#option)
参数类型说明useWebAudioImplement`boolean`是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项。
API 支持度: weapp
## 示例代码[​](createInnerAudioContext.html#示例代码)
```tsx
const innerAudioContext = Taro.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'https://storage.360buyimg.com/jdrd-blog/27.mp3'
innerAudioContext.onPlay(() => {
 console.log('开始播放')
})
innerAudioContext.onError((res) => {
 console.log(res.errMsg)
 console.log(res.errCode)
})
```

- 
- 

- 

-
