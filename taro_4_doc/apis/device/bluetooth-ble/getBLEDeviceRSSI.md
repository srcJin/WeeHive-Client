# 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html)
## 类型[​](getBLEDeviceRSSI.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBLEDeviceRSSI.html#参数)
参数类型option`Option`
### Option[​](getBLEDeviceRSSI.html#option)
参数类型必填说明deviceId`string`是蓝牙设备 idcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBLEDeviceRSSI.html#successcallbackresult)
参数类型说明RSSI`number`信号强度，单位 dBm
- 
- 

- 
-
