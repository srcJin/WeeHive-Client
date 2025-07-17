# 此接口是用于发起支付的 API，此 API 暂仅支持企业支付宝小程序使用
支持情况：!!!!!
[> 参考文档
](https://opendocs.alipay.com/mini/api/openapi-pay)
## 类型[​](tradePay.html#类型)
```tsx
(Option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](tradePay.html#参数)
### Option[​](tradePay.html#option)
参数类型必填说明tradeNO`string`否接入小程序支付时传入此参数。此参数为支付宝交易号，注意参数有大小写区分（调用 小程序支付 时必填）orderStr`string`否完整的支付参数拼接成的字符串，从服务端获取（调用 支付宝预授权 时必填）success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### ResultCode[​](tradePay.html#resultcode)
参数说明4无权限调用（N22104）9000订单处理成功8000正在处理中。支付结果未知（有可能已经支付成功）4000订单处理失败6001用户中途取消6002网络连接出错6004处理结果未知（有可能已经成功）
### SuccessCallbackResult[​](tradePay.html#successcallbackresult)
参数类型说明response`{ resultCode: ResultCode; }`success 回调函数会携带一个 Object 类型的对象，其属性如下：
- 
- 

- 
- 
-
