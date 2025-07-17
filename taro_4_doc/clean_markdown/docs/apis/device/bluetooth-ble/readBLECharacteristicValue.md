# 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。
**注意**

- 并行调用多次会存在读失败的可能性。
- 接口读取到的信息需要在 `onBLECharacteristicValueChange` 方法注册的回调中获取。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
## 类型[​](readBLECharacteristicValue.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```

## 参数[​](readBLECharacteristicValue.html#参数)
参数类型option`Option`
### Option[​](readBLECharacteristicValue.html#option)
参数类型必填说明characteristicId`string`是蓝牙特征值的 uuiddeviceId`string`是蓝牙设备 idserviceId`string`是蓝牙特征值对应服务的 uuidcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
## 示例代码[​](readBLECharacteristicValue.html#示例代码)
```tsx
// 必须在这里的回调才能获取
Taro.onBLECharacteristicValueChange(function(characteristic) {
 console.log('characteristic value comed:', characteristic)
})
Taro.readBLECharacteristicValue({
 // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 deviceId,
 // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
 serviceId,
 // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
 characteristicId,
 success: function (res) {
 console.log('readBLECharacteristicValue:', res.errCode)
 }
})
```

- 
- 

- 

-
