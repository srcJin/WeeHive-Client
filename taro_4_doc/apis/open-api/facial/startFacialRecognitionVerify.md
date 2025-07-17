# 开始人脸识别认证
支持情况：!!!!
## 类型[​](startFacialRecognitionVerify.html#类型)
```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数[​](startFacialRecognitionVerify.html#参数)
参数类型option`Option`
### Option[​](startFacialRecognitionVerify.html#option)
参数类型必填说明name`string`是身份证名称idCardNumber`string`是身份证名称checkAliveType`number`否交互方式complete`(res: CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: CallbackResult) => void`否接口调用失败的回调函数success`(result: CallbackResult) => void`否接口调用成功的回调函数
### CallbackResult[​](startFacialRecognitionVerify.html#callbackresult)
参数类型说明errMsg`string`错误信息errCode`number`错误码verifyResult`string`认证结果
- 
- 

- 
-
