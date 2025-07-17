# 使用微信内置地图查看位置
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html)
## 类型[​](openLocation.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openLocation.html#参数)
参数类型option`Option`
### Option[​](openLocation.html#option)
参数类型必填说明latitude`number`是纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系longitude`number`是经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系scale`number`否缩放比例
weapp: 范围 5~18，默认值18
alipay: 范围 3~19，默认值15name`string`否位置名address`string`否地址的详细说明ignoredApps`any[]`否定义在拉起的地图 App 面板中需要被屏蔽的地图类 App
API 支持度: swancomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](openLocation.html#示例代码)
```tsx
Taro.getLocation({
 type: 'gcj02', //返回可以用于 Taro.openLocation的经纬度
 success: function (res) {
 const latitude = res.latitude
 const longitude = res.longitude
 Taro.openLocation({
 latitude,
 longitude,
 scale: 18
 })
 }
})
```

- 
- 

- 

-
