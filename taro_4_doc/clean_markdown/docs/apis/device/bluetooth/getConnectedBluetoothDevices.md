# 根据 uuid 获取处于已连接状态的设备。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
## 类型[​](getConnectedBluetoothDevices.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getConnectedBluetoothDevices.html#参数)
参数类型option`Option`
### Option[​](getConnectedBluetoothDevices.html#option)
参数类型必填说明services`string[]`是蓝牙设备主 service 的 uuid 列表complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getConnectedBluetoothDevices.html#successcallbackresult)
参数类型说明devices`BluetoothDeviceInfo[]`搜索到的设备列表errMsg`string`成功：ok，错误：详细信息
### BluetoothDeviceInfo[​](getConnectedBluetoothDevices.html#bluetoothdeviceinfo)
搜索到的设备
参数类型说明deviceId`string`用于区分设备的 idname`string`蓝牙设备名称，某些设备可能没有
## 示例代码[​](getConnectedBluetoothDevices.html#示例代码)
```tsx
Taro.getConnectedBluetoothDevices({
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

-
