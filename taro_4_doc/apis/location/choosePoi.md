# 打开POI列表选择位置，支持模糊定位（精确到市）和精确定位混选。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.choosePoi.html)
## 类型[​](choosePoi.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](choosePoi.html#参数)
参数类型option`Option`
### Option[​](choosePoi.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](choosePoi.html#successcallbackresult)
参数类型说明type`number`选择城市时，值为 1，选择精确位置时，值为 2city`number`城市名称name`string`位置名称address`string`详细地址latitude`number`纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系longitude`number`经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系
- 
- 

- 
-
