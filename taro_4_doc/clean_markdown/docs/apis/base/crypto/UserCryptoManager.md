# 用户加密模块
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.html)
## 方法[​](UserCryptoManager.html#方法)
### getLatestUserKey[​](UserCryptoManager.html#getlatestuserkey)
获取最新的用户加密密钥
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getLatestUserKey.html)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```
参数类型option`Option`
#### 示例代码[​](UserCryptoManager.html#示例代码)
```tsx
const userCryptoManager = Taro.getUserCryptoManager()
userCryptoManager.getLatestUserKey({
 success: res => {
 const { encryptKey, iv, version, expireTime } = res
 console.log(encryptKey, iv, version, expireTime)
 }
})
```

### getRandomValues[​](UserCryptoManager.html#getrandomvalues)
获取密码学安全随机数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
#### 示例代码[​](UserCryptoManager.html#示例代码-1)
```tsx
Taro.getUserCryptoManager().getRandomValues({
 length: 6 // 生成 6 个字节长度的随机数,
 success: res => {
 console.log(Taro.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
 }
})
```

## 参数[​](UserCryptoManager.html#参数)
### getLatestUserKey[​](UserCryptoManager.html#getlatestuserkey-1)
#### Option[​](UserCryptoManager.html#option)
参数类型必填说明success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: SuccessCallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### SuccessCallbackResult[​](UserCryptoManager.html#successcallbackresult)
参数类型说明encryptKey`string`用户加密密钥iv`string`密钥初始向量version`number`密钥版本expireTime`number`密钥过期时间
### getRandomValues[​](UserCryptoManager.html#getrandomvalues-1)
#### Option[​](UserCryptoManager.html#option-1)
参数类型必填说明length`number`是整数，生成随机数的字节数，最大 1048576success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: SuccessCallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
#### SuccessCallbackResult[​](UserCryptoManager.html#successcallbackresult-1)
参数类型说明randomValues`ArrayBuffer`随机数内容，长度为传入的字节数
## API 支持度[​](UserCryptoManager.html#api-支持度)
API微信小程序H5React NativeHarmonyUserCryptoManager✔️UserCryptoManager.getLatestUserKey✔️UserCryptoManager.getRandomValues✔️
- 

- 
- 

- 

- 
- 

-
