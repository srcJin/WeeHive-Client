# 获取视频号直播预告信息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsLiveNoticeInfo.html)
## 类型[​](getChannelsLiveNoticeInfo.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getChannelsLiveNoticeInfo.html#参数)
参数类型option`Option`
### Option[​](getChannelsLiveNoticeInfo.html#option)
参数类型必填说明finderUserName`string`是视频号 id，以“sph”开头的id，可在视频号助手获取complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getChannelsLiveNoticeInfo.html#successcallbackresult)
参数类型必填说明nonceId`string`是预告 nonceIdstatus`number`是预告状态：0可用 1取消 2已用startTime`string`是开始时间headUrl`string`是直播封面nickname`string`是视频号昵称reservable`boolean`是是否可预约otherInfos`string[]`否除最近的一条预告信息外，其他的预告信息列表（注意：每次最多返回按时间戳增序排列的15个预告信息，其中时间最近的那个预告信息会在接口其他的返回参数中展示，其余的预告信息会在该字段中展示）。
### Status[​](getChannelsLiveNoticeInfo.html#status)
参数说明0可用1取消2已用
- 
- 

- 
- 
-
