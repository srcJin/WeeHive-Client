# 创建自定义版交易组件订单，并发起支付。 仅接入了[自定义版交易组件](https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/Introduction2)的小程序需要使用，普通小程序可直接使用 `Taro.requestPayment`。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/payment/wx.requestOrderPayment.html)
## 类型[​](requestOrderPayment.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](requestOrderPayment.html#参数)
参数类型option`Option`
### Option[​](requestOrderPayment.html#option)
参数类型必填说明timeStamp`string`是时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间nonceStr`string`是随机字符串，长度为32个字符以下package`string`是统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=***orderInfo`any`否订单信息，仅在需要校验的场景下需要传递，具体见[接口说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ministore/minishopopencomponent2/API/order/requestOrderPayment)extUserUin`string`否外部 APP 用户 IDsignType`keyof SignType`否签名算法paySign`string`是签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3)complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SignType[​](requestOrderPayment.html#signtype)
参数说明MD5仅在微信支付 v2 版本接口适用HMAC-SHA256仅在微信支付 v2 版本接口适用RSA仅在微信支付 v3 版本接口适用
## 示例代码[​](requestOrderPayment.html#示例代码)
除 orderInfo 以外，其余字段与 [Taro.requestPayment](requestPayment.html) 一致
```tsx
Taro.requestOrderPayment({
 orderInfo: {},
 timeStamp: '',
 nonceStr: '',
 package: '',
 signType: 'MD5',
 paySign: '',
 success (res) { },
 fail (res) { }
})
```

- 
- 

- 
- 

-
