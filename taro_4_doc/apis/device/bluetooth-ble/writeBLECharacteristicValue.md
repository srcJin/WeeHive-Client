# 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。
**注意**

- 并行调用多次会存在写失败的可能性。
- 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙4.0单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过20字节。
- 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
- 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
## 类型[​](writeBLECharacteristicValue.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](writeBLECharacteristicValue.html#参数)
参数类型option`Option`
### Promised[​](writeBLECharacteristicValue.html#promised)
参数类型说明errMsg`string`成功：ok，错误：详细信息
### Option[​](writeBLECharacteristicValue.html#option)
参数类型必填说明characteristicId`string`是蓝牙特征值的 uuiddeviceId`string`是蓝牙设备 idserviceId`string`是蓝牙特征值对应服务的 uuidvalue`ArrayBuffer`是蓝牙设备特征值对应的二进制值writeType`keyof WriteType`否蓝牙特征值的写模式设置，有两种模式，iOS 优先 write，安卓优先 writeNoResponse 。（基础库 2.22.0 开始支持）complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### WriteType[​](writeBLECharacteristicValue.html#writetype)
参数说明write强制回复写，不支持时报错writeNoResponse强制无回复写，不支持时报错
## 示例代码[​](writeBLECharacteristicValue.html#示例代码)
```tsx
// 向蓝牙设备发送一个0x00的16进制数据
let buffer = new ArrayBuffer(1)
let dataView = new DataView(buffer)
dataView.setUint8(0, 0)
Taro.writeBLECharacteristicValue({
 // 这里的 deviceId 需要在 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
 deviceId,
 // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
 serviceId,
 // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
 characteristicId,
 // 这里的value是ArrayBuffer类型
 value: buffer,
 success: function (res) {
 console.log('writeBLECharacteristicValue success', res.errMsg)
 }
})
```

- 
- 

- 
- 
- 

-
