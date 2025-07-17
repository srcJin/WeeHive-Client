# 检查是否支持面部识别
支持情况：!!!!
## 类型[​](checkIsSupportFacialRecognition.html#类型)
```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数[​](checkIsSupportFacialRecognition.html#参数)
参数类型option`Option`
### Option[​](checkIsSupportFacialRecognition.html#option)
参数类型必填说明checkAliveType`number`否交互方式complete`(res: CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: CallbackResult) => void`否接口调用失败的回调函数success`(result: CallbackResult) => void`否接口调用成功的回调函数
### CallbackResult[​](checkIsSupportFacialRecognition.html#callbackresult)
参数类型说明errMsg`string`错误信息errCode`number`错误码
- 
- 

- 
-
