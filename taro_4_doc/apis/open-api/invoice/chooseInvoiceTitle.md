# 选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了[微信认证](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1496554031_RD4xe)的，才能调用 chooseInvoiceTitle。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)
## 类型[​](chooseInvoiceTitle.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseInvoiceTitle.html#参数)
参数类型option`Option`
### Option[​](chooseInvoiceTitle.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](chooseInvoiceTitle.html#successcallbackresult)
参数类型说明bankAccount`string`银行账号bankName`string`银行名称companyAddress`string`单位地址errMsg`string`错误信息taxNumber`string`抬头税号telephone`string`手机号码title`string`抬头名称type`keyof InvoiceType`抬头类型
### InvoiceType[​](chooseInvoiceTitle.html#invoicetype)
抬头类型
参数类型0`"单位"`1`"个人"`
## 示例代码[​](chooseInvoiceTitle.html#示例代码)
```tsx
Taro.chooseInvoiceTitle({
 success: function(res) {}
})
```

- 
- 

- 
- 
- 

-
