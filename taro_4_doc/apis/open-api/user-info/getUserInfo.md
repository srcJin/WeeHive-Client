# 获取用户信息。
**接口调整说明** 在用户未授权过的情况下调用此接口，将不再出现授权弹窗，会直接进入 fail 回调（详见[《公告》](https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01))。在用户已授权的情况下调用此接口，可成功获取用户信息。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
## 类型[​](getUserInfo.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getUserInfo.html#参数)
参数类型option`Option`
### Option[​](getUserInfo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数lang`keyof Language`否显示用户信息的语言success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数withCredentials`boolean`否是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 Taro.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
### SuccessCallbackResult[​](getUserInfo.html#successcallbackresult)
参数类型必填说明cloudID`string`否敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)encryptedData`string`是包括敏感数据在内的完整用户信息的加密数据，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)iv`string`是加密算法的初始向量，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)rawData`string`是不包括敏感信息的原始数据字符串，用于计算签名signature`string`是使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 [用户数据的签名验证和加解密](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)userInfo`UserInfo`是用户信息对象，不包含 openid 等敏感信息errMsg`string`是调用结果
## 示例代码[​](getUserInfo.html#示例代码)
```tsx
// 必须是在用户已经授权的情况下调用

Taro.getUserInfo({
 success: function(res) {
 var userInfo = res.userInfo
 var nickName = userInfo.nickName
 var avatarUrl = userInfo.avatarUrl
 var gender = userInfo.gender //性别 0：未知、1：男、2：女
 var province = userInfo.province
 var city = userInfo.city
 var country = userInfo.country
 }
})
```

敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。 获取得到的开放数据为以下 json 结构：
```json
{
 "openId": "OPENID",
 "nickName": "NICKNAME",
 "gender": GENDER,
 "city": "CITY",
 "province": "PROVINCE",
 "country": "COUNTRY",
 "avatarUrl": "AVATARURL",
 "unionId": "UNIONID",
 "watermark": {
 "appid":"APPID",
 "timestamp": TIMESTAMP
 }
}
```

- 
- 

- 
- 

-
