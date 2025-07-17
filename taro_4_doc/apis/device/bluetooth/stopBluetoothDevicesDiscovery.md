# 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
## 类型[​](stopBluetoothDevicesDiscovery.html#类型)
```tsx
(option?: Option) => Promise<Promised>
```

## 参数[​](stopBluetoothDevicesDiscovery.html#参数)
参数类型option`Option`
### Promised[​](stopBluetoothDevicesDiscovery.html#promised)
参数类型说明errMsg`string`成功：ok，错误：详细信息
### Option[​](stopBluetoothDevicesDiscovery.html#option)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
## 示例代码[​](stopBluetoothDevicesDiscovery.html#示例代码)
```tsx
Taro.stopBluetoothDevicesDiscovery({
 success: function (res) {
 console.log(res)
 }
})
```

- 
- 

- 
- 

-
