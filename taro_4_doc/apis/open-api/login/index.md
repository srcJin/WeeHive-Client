# 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。更多使用方法详见 [小程序登录](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)
## 类型[​](index.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](index.html#参数)
参数类型option`Option`
### Option[​](index.html#option)
参数类型默认值必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数timeout`number`否超时时间，单位msforce`boolean``true`否未登录时, 是否强制调起登录框
API 支持度: tt
### SuccessCallbackResult[​](index.html#successcallbackresult)
参数类型必填说明code`string`是用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)，使用 code 换取 openid 和 session_key 等信息errMsg`string`是调用结果anonymousCode`string`否用于标识当前设备, 无论登录与否都会返回, 有效期 5 分钟。
API 支持度: ttisLogin`boolean`否判断在当前 APP（头条、抖音等）是否处于登录状态。
API 支持度: tt
## 示例代码[​](index.html#示例代码)
```tsx
Taro.login({
 success: function (res) {
 if (res.code) {
 //发起网络请求
 Taro.request({
 url: 'https://test.com/onLogin',
 data: {
 code: res.code
 }
 })
 } else {
 console.log('登录失败！' + res.errMsg)
 }
 }
})
```

- 
- 

- 
- 

-
