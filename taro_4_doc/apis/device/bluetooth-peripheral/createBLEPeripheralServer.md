# 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.createBLEPeripheralServer.html)
## 类型[​](createBLEPeripheralServer.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](createBLEPeripheralServer.html#参数)
参数类型option`Option`
### Option[​](createBLEPeripheralServer.html#option)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](createBLEPeripheralServer.html#successcallbackresult)
参数类型说明server`BLEPeripheralServer`外围设备的服务端
- 
- 

- 
-
