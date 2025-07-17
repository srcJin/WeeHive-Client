# 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.chooseContact.html)
## 类型[​](chooseContact.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseContact.html#参数)
参数类型option`Option`
### Option[​](chooseContact.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](chooseContact.html#successcallbackresult)
参数类型说明phoneNumber`string`手机号displayName`string`联系人姓名phoneNumberList`string`选定联系人的所有手机号（部分 Android 系统只能选联系人而不能选特定手机号）
- 
- 

- 
-
