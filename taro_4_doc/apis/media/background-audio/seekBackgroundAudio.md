# 控制音乐播放进度。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html)
## 类型[​](seekBackgroundAudio.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](seekBackgroundAudio.html#参数)
参数类型option`Option`
### Option[​](seekBackgroundAudio.html#option)
参数类型必填说明position`number`是音乐位置，单位：秒complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](seekBackgroundAudio.html#示例代码)
```tsx
Taro.seekBackgroundAudio({
 position: 30
})
```

- 
- 

- 

-
