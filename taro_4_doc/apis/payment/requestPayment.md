# 发起微信支付。了解更多信息，请查看[微信支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestPayment.html)
## 类型[​](requestPayment.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](requestPayment.html#参数)
参数类型option`Option`
### Option[​](requestPayment.html#option)
参数类型必填说明timeStamp`string`是时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间nonceStr`string`是随机字符串，长度为32个字符以下package`string`是统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***signType`keyof SignType`否签名算法paySign`string`是签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SignType[​](requestPayment.html#signtype)
参数说明MD5仅在微信支付 v2 版本接口适用HMAC-SHA256仅在微信支付 v2 版本接口适用RSA仅在微信支付 v3 版本接口适用
## 示例代码[​](requestPayment.html#示例代码)
```tsx
Taro.requestPayment({
 timeStamp: '',
 nonceStr: '',
 package: '',
 signType: 'MD5',
 paySign: '',
 success: function (res) { },
 fail: function (res) { }
})
```

- 
- 

- 
- 

-
