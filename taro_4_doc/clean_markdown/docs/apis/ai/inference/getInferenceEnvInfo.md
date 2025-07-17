# 获取通用AI推理引擎版本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/inference/wx.getInferenceEnvInfo.html)
## 类型[​](getInferenceEnvInfo.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getInferenceEnvInfo.html#参数)
参数类型option`Option`
### Option[​](getInferenceEnvInfo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getInferenceEnvInfo.html#successcallbackresult)
参数类型说明ver`string`AI推理引擎版本
- 
- 

- 
-
