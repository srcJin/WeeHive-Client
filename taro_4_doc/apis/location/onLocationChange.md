# 监听实时地理位置变化事件，需结合 Taro.startLocationUpdateBackground、Taro.startLocationUpdate 使用。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html)
## 类型[​](onLocationChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onLocationChange.html#参数)
参数类型说明callback`Callback`实时地理位置变化事件的回调函数
### Callback[​](onLocationChange.html#callback)
实时地理位置变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onLocationChange.html#callbackresult)
参数类型必填说明accuracy`number`是位置的精确度altitude`number`是高度，单位 mhorizontalAccuracy`number`是水平精度，单位 mlatitude`number`是纬度，范围为 -90~90，负数表示南纬longitude`number`是经度，范围为 -180~180，负数表示西经speed`number`是速度，单位 m/sverticalAccuracy`number`是垂直精度，单位 m（Android 无法获取，返回 0）street`string`否街道名称
API 支持度: swancityCode`string`否城市编码
API 支持度: swancity`string`否城市名称
API 支持度: swan, tt
tt: iOS 不支持country`string`否国家
API 支持度: swancountryCode`string`否国家代码
API 支持度: swanprovince`string`否省份
API 支持度: swanstreetNumber`string`否街道号码
API 支持度: swandistrict`string`否区
API 支持度: swanisFullAccuracy`boolean`否是不是精确定位信息
API 支持度: swan
## 示例代码[​](onLocationChange.html#示例代码)
```tsx
const _locationChangeFn = function (res) {
 console.log('location change', res)
}
Taro.onLocationChange(_locationChangeFn)
Taro.offLocationChange(_locationChangeFn)
```

- 
- 

- 
- 

-
