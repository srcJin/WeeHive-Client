# 连接低功耗蓝牙设备。
若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
**注意**

- 请保证尽量成对的调用 `createBLEConnection` 和 `closeBLEConnection` 接口。安卓如果多次调用 `createBLEConnection` 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
- 蓝牙连接随时可能断开，建议监听 Taro.onBLEConnectionStateChange 回调事件，当蓝牙设备断开时按需执行重连操作
- 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
## 类型[​](createBLEConnection.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](createBLEConnection.html#参数)
参数类型option`Option`
### Promised[​](createBLEConnection.html#promised)
参数类型说明errMsg`string`成功：ok，错误：详细信息
### Option[​](createBLEConnection.html#option)
参数类型必填说明deviceId`string`是用于区分设备的 idcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数timeout`number`否超时时间，单位ms，不填表示不会超时
## 示例代码[​](createBLEConnection.html#示例代码)
```tsx
Taro.createBLEConnection({
 // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 deviceId,
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
