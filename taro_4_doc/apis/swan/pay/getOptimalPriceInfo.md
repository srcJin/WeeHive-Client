# 获取商品使用百度平台券后的价格 通过百度收银台支付的商品，用户在支付时可以享受百度平台券提供的优惠。 使用 API swan.getOptimalPriceInfo 可以提前获知用户在支付时享受的优惠价格。（当用户有多张平台券时，按照平台最优优惠价格计算，与支付时默认选中的优惠券对应的优惠一致）
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-getOptimalPriceInfo/)
## 类型[​](getOptimalPriceInfo.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getOptimalPriceInfo.html#参数)
参数类型option`Option`
### Option[​](getOptimalPriceInfo.html#option)
参数类型必填说明productsInfo`ProductInfo[]`是商品信息success`(res: SuccessCallbackResult) => any`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => any`否接口调用失败的回调函数
### ProductInfo[​](getOptimalPriceInfo.html#productinfo)
参数类型说明appKey`string`支付的 appKeyproducts`Product[]`商品信息
### Product[​](getOptimalPriceInfo.html#product)
参数类型必填说明amount`number`是商品单价(原价)promotionTag`string`否商品标识productId`string`是开发者自定义商品 ID，在success回调中，会与减免信息一起返回。
### SuccessCallbackResult[​](getOptimalPriceInfo.html#successcallbackresult)
参数类型说明productsInfo`ProductInfoSuccess[]`商品信息
### ProductInfoSuccess[​](getOptimalPriceInfo.html#productinfosuccess)
参数类型说明appKey`string`支付的 appKeyproducts`ProductSuccess[]`减免后的商品信息
### ProductSuccess[​](getOptimalPriceInfo.html#productsuccess)
参数类型说明amount`number`商品单价(原价)productId`string`开发者自定义商品 IDpromotionTag`string`商品标识reduceAmount`number`百度平台券减免金额afterPayAmount`number`百度平台券减免后金额
- 
- 

- 
- 
- 
- 
- 
-
