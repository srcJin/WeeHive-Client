# 获取设置过的自定义登录态。若无，则返回 fail。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchToken.html)
## 类型[​](getBackgroundFetchToken.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](getBackgroundFetchToken.html#参数)
参数类型option`Option`
### Option[​](getBackgroundFetchToken.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBackgroundFetchToken.html#successcallbackresult)
参数类型说明token`string`自定义的登录态errMsg`string`接口调用结果
- 
- 

- 
-
