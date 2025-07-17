# 获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
## 类型[​](chooseAddress.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseAddress.html#参数)
参数类型option`Option`
### Option[​](chooseAddress.html#option)
参数类型必填说明complete`(res: SuccessCallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](chooseAddress.html#successcallbackresult)
参数类型说明userName`string`收货人姓名postalCode`string`邮编
API 支持度: weapp, qqprovinceName`string`国标收货地址第一级地址cityName`string`国标收货地址第二级地址countyName`string`国标收货地址第三级地址streetName`string`国标收货地址第四级地址
API 支持度: weapp, qqdetailInfo`string`详细收货地址信息detailInfoNew`string`新选择器详细收货地址信息
API 支持度: weapp, qqnationalCode`string`收货地址国家码
API 支持度: weapp, qqtelNumber`string`收货人手机号码
## 示例代码[​](chooseAddress.html#示例代码)
```tsx
Taro.chooseAddress({
 success: function (res) {
 console.log(res.userName)
 console.log(res.postalCode)
 console.log(res.provinceName)
 console.log(res.cityName)
 console.log(res.countyName)
 console.log(res.detailInfo)
 console.log(res.nationalCode)
 console.log(res.telNumber)
 }
})
```

- 
- 

- 
- 

-
