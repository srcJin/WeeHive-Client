# 打开视频号主页
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.openChannelsUserProfile.html)
## 类型[​](openChannelsUserProfile.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openChannelsUserProfile.html#参数)
参数类型option`Option`
### Option[​](openChannelsUserProfile.html#option)
参数类型必填说明finderUserName`string`是视频号 idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
