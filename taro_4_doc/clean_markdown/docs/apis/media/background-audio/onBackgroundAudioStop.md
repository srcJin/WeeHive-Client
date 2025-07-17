# 监听音乐停止。
**bug & tip：**

- `bug`: `iOS``6.3.30` Taro.seekBackgroundAudio 会有短暂延迟
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html)
## 类型[​](onBackgroundAudioStop.html#类型)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```

## 参数[​](onBackgroundAudioStop.html#参数)
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`音乐停止事件的回调函数
- 
-
