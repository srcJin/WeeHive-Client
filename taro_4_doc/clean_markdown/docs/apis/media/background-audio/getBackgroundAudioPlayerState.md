# 获取后台音乐播放状态。 **注意：1.2.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.getBackgroundAudioManager](getBackgroundAudioManager.html) 接口**
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html)
## 类型[​](getBackgroundAudioPlayerState.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBackgroundAudioPlayerState.html#参数)
参数类型option`Option`
### Option[​](getBackgroundAudioPlayerState.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBackgroundAudioPlayerState.html#successcallbackresult)
参数类型说明currentPosition`number`选定音频的播放位置（单位：s），只有在音乐播放中时返回dataUrl`string`歌曲数据链接，只有在音乐播放中时返回downloadPercent`number`音频的下载进度百分比，只有在音乐播放中时返回duration`number`选定音频的长度（单位：s），只有在音乐播放中时返回status`keyof Status`播放状态errMsg`string`调用结果
### Status[​](getBackgroundAudioPlayerState.html#status)
参数说明0暂停中1播放中2没有音乐播放
## 示例代码[​](getBackgroundAudioPlayerState.html#示例代码)
```tsx
Taro.getBackgroundAudioPlayerState({
 success: function (res) {
 var status = res.status
 var dataUrl = res.dataUrl
 var currentPosition = res.currentPosition
 var duration = res.duration
 var downloadPercent = res.downloadPercent
 }
})
```

- 
- 

- 
- 
- 

-
