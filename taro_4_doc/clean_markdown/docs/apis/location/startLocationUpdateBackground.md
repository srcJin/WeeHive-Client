# 开启小程序进入前后台时均接收位置消息，需引导用户开启[授权](../open-api/authorize/index.html#%E5%90%8E%E5%8F%B0%E5%AE%9A%E4%BD%8D)。授权以后，小程序在运行中或进入后台均可接受位置消息变化。
**注意**

- 安卓微信7.0.6版本，iOS 7.0.5版本起支持该接口
- 需在app.json中配置requiredBackgroundModes: ['location']后使用
- 获取位置信息需配置[地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html)
## 类型[​](startLocationUpdateBackground.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](startLocationUpdateBackground.html#参数)
参数类型option`Option`
### Option[​](startLocationUpdateBackground.html#option)
参数类型默认值必填说明type`string``"gcj02"`否wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
