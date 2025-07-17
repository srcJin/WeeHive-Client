# 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。
另外，必须先启用 `notifyBLECharacteristicValueChange` 才能监听到设备 `characteristicValueChange` 事件
**注意**

- 订阅操作成功后需要设备主动更新特征值的 value，才会触发 Taro.onBLECharacteristicValueChange 回调。
- 安卓平台上，在调用 `notifyBLECharacteristicValueChange` 成功后立即调用 `writeBLECharacteristicValue` 接口，在部分机型上会发生 10008 系统错误
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
## 类型[​](notifyBLECharacteristicValueChange.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](notifyBLECharacteristicValueChange.html#参数)
参数类型option`Option`
### Promised[​](notifyBLECharacteristicValueChange.html#promised)
参数类型说明errMsg`string`成功：ok，错误：详细信息
### Option[​](notifyBLECharacteristicValueChange.html#option)
参数类型默认值必填说明characteristicId`string`是蓝牙特征值的 uuiddeviceId`string`是蓝牙设备 idserviceId`string`是蓝牙特征值对应服务的 uuidstate`boolean`是是否启用 notifytype`keyof Type``"indication"`否设置特征订阅类型，有效值有 notification 和 indicationcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### Type[​](notifyBLECharacteristicValueChange.html#type)
## 示例代码[​](notifyBLECharacteristicValueChange.html#示例代码)
```tsx
Taro.notifyBLECharacteristicValueChange({
 state: true, // 启用 notify 功能
 // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 deviceId,
 // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
 serviceId,
 // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
 characteristicId,
 success: function (res) {
 console.log('notifyBLECharacteristicValueChange success', res.errMsg)
 }
})
```

- 
- 

- 
- 
- 

-
