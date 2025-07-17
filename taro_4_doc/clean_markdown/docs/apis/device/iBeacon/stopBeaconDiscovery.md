# 停止搜索附近的 iBeacon 设备
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html)
## 类型[​](stopBeaconDiscovery.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.IBeaconError>
```

## 参数[​](stopBeaconDiscovery.html#参数)
参数类型option`Option`
### Option[​](stopBeaconDiscovery.html#option)
参数类型必填说明complete`(res: TaroGeneral.IBeaconError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.IBeaconError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.IBeaconError) => void`否接口调用成功的回调函数
## 示例代码[​](stopBeaconDiscovery.html#示例代码)
```tsx
Taro.stopBeaconDiscovery(params).then(...)
```

- 
- 

- 

-
