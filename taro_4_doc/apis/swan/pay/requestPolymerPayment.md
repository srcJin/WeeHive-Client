# 1）百度收银台，聚合了主流的百度钱包、微信、支付宝、网银等多种支付渠道，方便开发者一站式快速接入多种支付渠道，让百度用户能在智能小程序场景下，直接完成支付、交易闭环，提升用户支付体验的同时，提高智能小程序的订单转化率。 2）上述支付渠道在 C 端收银台有两种展示方式，开发者可以选择其中一种实现。 方式一：将支付渠道内嵌在小程序提单页面中，实现方式参考文档[inline-payment-panel内嵌支付组件](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel/)。 方式二：在用户确认订单后，调起收银台半屏面板承载支付渠道，实现方式参考文档调起[百度收银台](https://smartprogram.baidu.com/docs/develop/function/tune_up_2.0/#%E7%99%BE%E5%BA%A6%E6%94%B6%E9%93%B6%E5%8F%B0%E6%8E%A5%E5%8F%A32-0-%E8%AF%B4%E6%98%8E)。
Web 态说明：为了保证用户交易行为全流程闭环体验，在 Web 态下调用该方法会做打开百度 App 对应小程序页面的降级处理。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/)
## 类型[​](requestPolymerPayment.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](requestPolymerPayment.html#参数)
参数类型option`Option`
### Option[​](requestPolymerPayment.html#option)
参数类型必填说明orderInfo`OrderInfo`是订单信息success`(res: TaroGeneral.CallbackResult) => any`否接口调用成功的回调函数fail`(err: FailCallbackResult) => any`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
### OrderInfo[​](requestPolymerPayment.html#orderinfo)
参数类型必填说明dealId`string`是跳转百度收银台支付必带参数之一，是百度收银台的财务结算凭证，与账号绑定的结算协议一一对应，每笔交易将结算到 dealId 对应的协议主体。
详见[核心参数获取与组装](https://smartprogram.baidu.com/docs/develop/function/parameter/)。appKey`string`是支付能力开通后分配的支付 appKey，用以表示应用身份的唯一 ID ，在应用审核通过后进行分配，一经分配后不会发生更改，来唯一确定一个应用。
详见[核心参数获取与组装](https://smartprogram.baidu.com/docs/develop/function/parameter/)。totalAmount`string`是订单金额（单位：人民币分）。注：小程序测试包测试金额不可超过 1000 分tpOrderId`string`是小程序开发者系统创建的唯一订单 ID ，当支付状态发生变化时，会通过此订单 ID 通知开发者。notifyUrl`string`否通知开发者支付状态的回调地址，必须是合法的 URL ，与开发者平台填写的支付回调地址作用一致，未填写的以平台回调地址为准dealTitle`string`是订单的名称。signFieldsRange`string`是用于区分验签字段范围，signFieldsRange 的值：0：原验签字段 appKey+dealId+tpOrderId；1：包含 totalAmount 的验签，验签字段包括appKey+dealId+tpOrderId+totalAmount。固定值为 1 。rsaSign`string`是对appKey+dealId+totalAmount+tpOrderId进行 RSA 加密后的签名，防止订单被伪造。
签名过程见[签名与验签](https://smartprogram.baidu.com/docs/develop/function/sign_v2/)。bizInfo`string`否订单详细信息，需要是一个可解析为 JSON Object 的字符串。
字段内容见： [bizInfo 组装](https://smartprogram.baidu.com/docs/develop/function/parameter/#%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0%E7%BB%84%E8%A3%85)。payResultUrl`string`否当前页面 path。Web 态小程序支付成功后跳回的页面路径，例如：'/pages/payResult/payResult'inlinePaySign`string`否内嵌支付组件返回的支付信息加密 key，与[内嵌支付组件](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel)配套使用，此值不传或者传空时默认调起支付面板。promotionTag`string`否平台营销信息，此处传可使用平台券的 spuid，支持通过英文逗号分割传入多个 spuid 值，仅与百度合作平台类目券的开发者需要填写
### FailCallbackResult[​](requestPolymerPayment.html#failcallbackresult)
参数类型说明errCode`number`错误码data`DetailFailData`详细错误信息。
注: 目前仅在内嵌支付组件调起 swan.requestPolymerPayment 时，选择数字人民币 APP 渠道支付且用户未下载数字人民币 APP 时，返回具体错误信息 data。
### DetailFailData[​](requestPolymerPayment.html#detailfaildata)
参数类型说明subErrCode`number`详细错误码。20014 表示【未下载数字人民币 APP】subErrMsg`string`详细错误信息
- 
- 

- 
- 
- 
-
