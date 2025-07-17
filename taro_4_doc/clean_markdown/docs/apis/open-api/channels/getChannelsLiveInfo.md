# 获取视频号直播信息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveInfo.html)
## 类型[​](getChannelsLiveInfo.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getChannelsLiveInfo.html#参数)
参数类型option`Option`
### Option[​](getChannelsLiveInfo.html#option)
参数类型必填说明finderUserName`string`是视频号 id，以“sph”开头的id，可在视频号助手获取complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getChannelsLiveInfo.html#successcallbackresult)
参数类型必填说明feedId`string`是直播 feedIdnonceId`string`是直播 nonceIddescription`string`是直播主题status`number`是直播状态，2直播中，3直播结束headUrl`string`是视频号头像nickname`string`是视频号昵称replayStatus`number`是直播回放状态otherInfos`string[]`否除最近的一条直播外，其他的直播列表（注意：每次最多返回按时间戳增序排列的15个直播信息，其中时间最近的那个直播会在接口其他的返回参数中展示，其余的直播会在该字段中展示）。
### Status[​](getChannelsLiveInfo.html#status)
参数说明2直播中3直播结束
### ReplayStatus[​](getChannelsLiveInfo.html#replaystatus)
参数说明0未生成1已生成3生成中6已过期
- 
- 

- 
- 
- 
-
