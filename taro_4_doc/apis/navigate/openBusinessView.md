# 商户通过调用订单详情接口打开微信支付分小程序，引导用户查看订单详情（小程序端）
支持情况：!!!!
[> 参考文档
](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)
## 类型[​](openBusinessView.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openBusinessView.html#参数)
参数类型option`Option`
### ScoreEnableExtraData[​](openBusinessView.html#scoreenableextradata)
wxpayScoreEnable 业务参数
[> 参考文档
](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_9.shtml)
参数类型说明apply_permissions_token`string`用于跳转到微信侧小程序授权数据,跳转到微信侧小程序传入，有效期为1小时；apply_permissions_token可以从[《商户预授权API》](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_2.shtml)接口的返回参数中获取。
示例值：1230000109
### ScoreUsedExtraData[​](openBusinessView.html#scoreusedextradata)
wxpayScoreUse 业务参数
[> 参考文档
](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_13.shtml)
参数类型说明mch_id`string`商户号：微信支付分配的商户号。
示例值：1230000109package`string`可在【创建订单】接口的返回字段package中获取。
示例值：XXXXXXXXtimestamp`string`时间戳：生成签名时间戳，单位秒。
示例值：1530097563nonce_str`string`随机字符串：生成签名随机串。由数字、大小写字母组成，长度不超过32位。
示例值：zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2sign_type`string`签名方式：签名类型，仅支持HMAC-SHA256。
示例值：HMAC-SHA256sign`string`签名：使用字段mch_id、service_id、out_order_no、timestamp、nonce_str、sign_type按照签名生成算法计算得出的签名值。
示例值：029B52F67573D7E3BE74904BF9AEA
### ScoreDetailExtraData[​](openBusinessView.html#scoredetailextradata)
wxpayScoreDetail 业务参数
[> 参考文档
](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter6_1_25.shtml)
参数类型说明mch_id`string`商户号：微信支付分配的商户号。
示例值：1230000109service_id`string`服务ID
示例值：88888888000011out_order_no`string`商户服务订单号：商户系统内部服务订单号（不是交易单号）。
示例值：234323JKHDFE1243252timestamp`string`时间戳：生成签名时间戳，单位秒。
示例值：1530097563nonce_str`string`随机字符串：生成签名随机串。由数字、大小写字母组成，长度不超过32位。
示例值：zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2sign_type`string`签名方式：签名类型，仅支持HMAC-SHA256。
示例值：HMAC-SHA256sign`string`签名：使用字段mch_id、service_id、out_order_no、timestamp、nonce_str、sign_type按照签名生成算法计算得出的签名值。
示例值：029B52F67573D7E3BE74904BF9AEA
### Option[​](openBusinessView.html#option)
参数类型必填说明businessType`string`是跳转类型：固定配置：wxpayScoreDetail
示例值：wxpayScoreDetail
memberof: OptionextraDataScoreEnableExtraData or ScoreUsedExtraData or ScoreDetailExtraData是业务参数：需要传递给支付分的业务数据success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](openBusinessView.html#示例代码)
```tsx
if (Taro.openBusinessView) {
 Taro.openBusinessView({
 businessType: 'wxpayScoreDetail',
 extraData: {
 mch_id: '1230000109',
 service_id: '88888888000011',
 out_order_no: '1234323JKHDFE1243252',
 timestamp: '1530097563',
 nonce_str: 'zyx53Nkey8o4bHpxTQvd8m7e92nG5mG2',
 sign_type: 'HMAC-SHA256',
 sign: '029B52F67573D7E3BE74904BF9AEA'
 },
 success() {
 //dosomething
 },
 fail() {
 //dosomething
 },
 complete() {
 //dosomething
 }
 });
} else {
 //引导用户升级微信版本
}
```

- 
- 

- 
- 
- 
- 

-
