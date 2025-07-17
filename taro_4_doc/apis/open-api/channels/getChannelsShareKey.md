# 获取视频号直播卡片/视频卡片的分享来源， 仅当卡片携带了分享信息、同时用户已授权该小程序获取视频号分享信息且启动场景值为 1177、1184、1195、1208 时可用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/channels/wx.getChannelsShareKey.html)
## 类型[​](getChannelsShareKey.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getChannelsShareKey.html#参数)
参数类型option`Option`
### Option[​](getChannelsShareKey.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getChannelsShareKey.html#successcallbackresult)
参数类型说明sharerOpenId`string`分享者 openidpromoter`Promoter`推广员
### Promoter[​](getChannelsShareKey.html#promoter)
参数类型说明finderNickname`string`推广员昵称promoterId`string`推广员idpromoterOpenId`string`推广员openid
- 
- 

- 
- 
-
