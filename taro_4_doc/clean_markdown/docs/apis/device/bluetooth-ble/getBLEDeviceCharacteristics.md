# 获取蓝牙设备某个服务中所有特征值(characteristic)。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
## 类型[​](getBLEDeviceCharacteristics.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBLEDeviceCharacteristics.html#参数)
参数类型option`Option`
### Option[​](getBLEDeviceCharacteristics.html#option)
参数类型必填说明deviceId`string`是蓝牙设备 idserviceId`string`是蓝牙服务 uuid，需要使用 `getBLEDeviceServices` 获取complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBLEDeviceCharacteristics.html#successcallbackresult)
参数类型说明characteristics`BLECharacteristic[]`设备特征值列表errMsg`string`成功：ok，错误：详细信息
### BLECharacteristic[​](getBLEDeviceCharacteristics.html#blecharacteristic)
设备特征值列表
参数类型说明properties`Properties`该特征值支持的操作类型uuid`string`蓝牙设备特征值的 uuid
### Properties[​](getBLEDeviceCharacteristics.html#properties)
该特征值支持的操作类型
参数类型说明indicate`boolean`该特征值是否支持 indicate 操作notify`boolean`该特征值是否支持 notify 操作read`boolean`该特征值是否支持 read 操作write`boolean`该特征值是否支持 write 操作writeNoResponse`boolean`该特征是否支持无回复写操作writeDefault`boolean`该特征是否支持有回复写操作
## 示例代码[​](getBLEDeviceCharacteristics.html#示例代码)
```tsx
Taro.getBLEDeviceCharacteristics({
 // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 deviceId,
 // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
 serviceId,
 success: function (res) {
 console.log('device getBLEDeviceCharacteristics:', res.characteristics)
 }
})
```

- 
- 

- 
- 
- 
- 

-
