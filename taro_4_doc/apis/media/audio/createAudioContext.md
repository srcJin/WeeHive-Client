# 创建 audio 上下文 AudioContext 对象。 **注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.createInnerAudioContext](createInnerAudioContext.html) 接口**
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html)
## 类型[​](createAudioContext.html#类型)
```tsx
(id: string, component?: TaroGeneral.IAnyObject) => AudioContext
```

## 参数[​](createAudioContext.html#参数)
参数类型说明id`string`[audio](../../../components/media/audio.html) 组件的 idcomponent`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 [audio](../../../components/media/audio.html) 组件
## 示例代码[​](createAudioContext.html#示例代码)
```tsx
const audioCtx = Taro.createAudioContext('myAudio')
```

- 
- 
-
