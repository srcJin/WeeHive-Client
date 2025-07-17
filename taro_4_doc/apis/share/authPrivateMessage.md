# 验证私密消息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.authPrivateMessage.html)
## 类型[​](authPrivateMessage.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](authPrivateMessage.html#参数)
参数类型option`Option`
### Option[​](authPrivateMessage.html#option)
参数类型必填说明shareTicket`string`是shareTicketsuccess`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](authPrivateMessage.html#successcallbackresult)
参数类型必填说明cloudID`string`否敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)encryptedData`string`是包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)errMsg`string`是错误信息iv`string`是加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)
## 示例代码[​](authPrivateMessage.html#示例代码)
```tsx
Taro.authPrivateMessage({
 shareTicket: 'xxxxxx',
 success(res) {
 console.log('authPrivateMessage success', res)
 // res
 // {
 // errMsg: 'authPrivateMessage:ok'
 // valid: true
 // iv: 'xxxx',
 // encryptedData: 'xxxxxx'
 // }
 },
 fail(res) {
 console.log('authPrivateMessage fail', res)
 }
})
```

- 
- 

- 
- 

-
