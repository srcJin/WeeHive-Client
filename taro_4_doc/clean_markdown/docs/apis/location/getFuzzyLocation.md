# 获取当前的模糊地理位置
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getFuzzyLocation.html)
## 类型[​](getFuzzyLocation.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getFuzzyLocation.html#参数)
参数类型option`Option`
### Option[​](getFuzzyLocation.html#option)
参数类型必填说明type`keyof Type`否wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### Type[​](getFuzzyLocation.html#type)
参数说明wgs84返回 gps 坐标gcj02返回 gcj02 坐标
### SuccessCallbackResult[​](getFuzzyLocation.html#successcallbackresult)
参数类型说明latitude`number`纬度，范围为 -90~90，负数表示南纬longitude`number`经度，范围为 -180~180，负数表示西经
## 示例代码[​](getFuzzyLocation.html#示例代码)
```tsx
Taro.getFuzzyLocation({
 type: 'wgs84',
 success (res) {
 const latitude = res.latitude
 const longitude = res.longitude
 },
})
```

- 
- 

- 
- 
- 

-
