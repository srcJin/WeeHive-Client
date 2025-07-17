# 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用。开启高精度定位，接口耗时会增加，可指定 highAccuracyExpireTime 作为超时时间。
**注意**

- 工具中定位模拟使用IP定位，可能会有一定误差。且工具目前仅支持 gcj02 坐标。
- 使用第三方服务进行逆地址解析时，请确认第三方服务默认的坐标系，正确进行坐标转换。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html)
## 类型[​](getLocation.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getLocation.html#参数)
参数类型option`Option`
### Option[​](getLocation.html#option)
参数类型默认值必填说明altitude`boolean``false`否传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数highAccuracyExpireTime`number`否高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果isHighAccuracy`boolean``false`否开启高精度定位success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数type`string``"wgs84"`否wgs84 返回 gps 坐标，gcj02 返回可用于 Taro.openLocation 的坐标needFullAccuracy`boolean``false`否针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。
传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框
API 支持度: swan
### SuccessCallbackResult[​](getLocation.html#successcallbackresult)
参数类型必填说明accuracy`number`是位置的精确度altitude`number`是高度，单位 mhorizontalAccuracy`number`是水平精度，单位 mlatitude`number`是纬度，范围为 -90~90，负数表示南纬longitude`number`是经度，范围为 -180~180，负数表示西经speed`number`是速度，单位 m/sverticalAccuracy`number`是垂直精度，单位 m（Android 无法获取，返回 0）street`string`否城市名称
API 支持度: swancityCode`string`否国家代码
API 支持度: swancity`string`否城市名称
API 支持度: swan, ttcountry`string`否国家
API 支持度: swancountryCode`string`否国家代码
API 支持度: swanprovince`string`否省份
API 支持度: swanstreetNumber`string`否街道号码
API 支持度: swandistrict`string`否区
API 支持度: swanisFullAccuracy`boolean`否是不是精确定位信息
API 支持度: swanerrMsg`string`是调用结果
## 示例代码[​](getLocation.html#示例代码)
```tsx
Taro.getLocation({
type: 'wgs84',
success: function (res) {
 const latitude = res.latitude
 const longitude = res.longitude
 const speed = res.speed
 const accuracy = res.accuracy
}
})
```

- 
- 

- 
- 

-
