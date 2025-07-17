# 获取蓝牙设备所有服务(service)。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
## 类型[​](getBLEDeviceServices.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBLEDeviceServices.html#参数)
参数类型option`Option`
### Option[​](getBLEDeviceServices.html#option)
参数类型必填说明deviceId`string`是蓝牙设备 idcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBLEDeviceServices.html#successcallbackresult)
参数类型说明services`BLEService[]`设备服务列表errMsg`string`成功：ok，错误：详细信息
### BLEService[​](getBLEDeviceServices.html#bleservice)
设备服务列表
参数类型说明isPrimary`boolean`该服务是否为主服务uuid`string`蓝牙设备服务的 uuid
## 示例代码[​](getBLEDeviceServices.html#示例代码)
```tsx
Taro.getBLEDeviceServices({
 // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
 deviceId,
 success: function (res) {
 console.log('device services:', res.services)
 }
})
```

- 
- 

- 
- 
- 

-
