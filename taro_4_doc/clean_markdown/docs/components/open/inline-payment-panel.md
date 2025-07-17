# 内嵌支付组件
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/inline_payment_panel/)
## 类型[​](inline-payment-panel.html#类型)
```tsx
ComponentType<InlinePaymentPanelProps>
```

## InlinePaymentPanelProps[​](inline-payment-panel.html#inlinepaymentpanelprops)
参数类型默认值必填说明totalAmount`string`否总金额，金额单位分，tip：仅支持整数型字符串dealId`string`否百度收银台的财务结算凭证，详见平台术语appKey`string`否支付能力开通后分配的支付 appKey，详见平台术语promotionTagstring or string[]否平台营销信息，此处传当前订单中可使用平台券的 spuid，同时需在 支付能力中搭配使用传入该参数；注：仅与百度合作平台类目券的开发者需要填写该参数enablePageBackModal`boolean``false`否是否设置挽留弹窗customStyle`string`否自定义样式设置styleType"tiny" or "small" or "default" or "medium" or "large"`"default"`否自定义样式档位配置，各档位配置项包括支付渠道/优惠券条高度、渠道图标大小、支付渠道文案字体大小、营销文案字体大小、选择器图标大小onGetPaymentInfo`CommonEventFunction`否获取支付相关信息，具体信息在返回值的 detail 字段中onError`CommonEventFunction`否当发生错误时触发 error 事件，具体信息在返回值的 detail 字段中，例如 {detail: {errMsg: "something is wrong"}}
### API 支持度[​](inline-payment-panel.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyInlinePaymentPanelProps.totalAmount✔️InlinePaymentPanelProps.dealId✔️InlinePaymentPanelProps.appKey✔️InlinePaymentPanelProps.promotionTag✔️InlinePaymentPanelProps.enablePageBackModal✔️InlinePaymentPanelProps.customStyle✔️InlinePaymentPanelProps.styleType✔️InlinePaymentPanelProps.onGetPaymentInfo✔️InlinePaymentPanelProps.onError✔️
- 
- 

-
