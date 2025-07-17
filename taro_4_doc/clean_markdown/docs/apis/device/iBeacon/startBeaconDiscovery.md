# 开始搜索附近的 iBeacon 设备
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html)
## 类型[​](startBeaconDiscovery.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.IBeaconError>
```

## 参数[​](startBeaconDiscovery.html#参数)
参数类型option`Option`
### Option[​](startBeaconDiscovery.html#option)
参数类型默认值必填说明uuids`string[]`是iBeacon 设备广播的 uuid 列表complete`(res: TaroGeneral.IBeaconError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.IBeaconError) => void`否接口调用失败的回调函数ignoreBluetoothAvailable`boolean``false`否是否校验蓝牙开关，仅在 iOS 下有效success`(res: TaroGeneral.IBeaconError) => void`否接口调用成功的回调函数
## 示例代码[​](startBeaconDiscovery.html#示例代码)
```tsx
Taro.startBeaconDiscovery({
 success: function (res) { }
})
```

- 
- 

- 

-
