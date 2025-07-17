# 开启小程序进入前台时接收位置消息
**注意**

- 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html)
## 类型[​](startLocationUpdate.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](startLocationUpdate.html#参数)
参数类型option`Option`
### Option[​](startLocationUpdate.html#option)
参数类型默认值必填说明type`string``"gcj02"`否wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标needFullAccuracy`boolean``false`否针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。
传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框
API 支持度: swancomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
