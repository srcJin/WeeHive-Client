# 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.setBackgroundFetchToken.html)
## 类型[​](setBackgroundFetchToken.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setBackgroundFetchToken.html#参数)
参数类型option`Option`
### Option[​](setBackgroundFetchToken.html#option)
参数类型必填说明token`string`是自定义的登录态complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
