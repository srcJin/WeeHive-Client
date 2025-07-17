# 获取频道信息与当前人身份（FOR 机器人服务入口）
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_guild.html)
## 类型[​](getGuildInfo.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getGuildInfo.html#参数)
参数类型option`Option`
### Option[​](getGuildInfo.html#option)
参数类型必填说明open_guild_id`string`是频道idchannel_id`string`否子频道Idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getGuildInfo.html#successcallbackresult)
参数类型说明encryptedData`string`加密之后的数据，需要解密iv`string`对称解密算法初始向量(base64)signature`string`签名(base64)
- 
- 

- 
-
