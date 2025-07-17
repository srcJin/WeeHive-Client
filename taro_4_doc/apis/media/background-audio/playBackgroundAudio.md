# 使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html)
## 类型[​](playBackgroundAudio.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](playBackgroundAudio.html#参数)
参数类型option`Option`
### Option[​](playBackgroundAudio.html#option)
参数类型必填说明dataUrl`string`是音乐链接，目前支持的格式有 m4a, aac, mp3, wavcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）coverImgUrl`string`否封面URLfail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数title`string`否音乐标题
## 示例代码[​](playBackgroundAudio.html#示例代码)
```tsx
Taro.playBackgroundAudio({
 dataUrl: '',
 title: '',
 coverImgUrl: ''
})
```

- 
- 

- 

-
