# 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
**注意事项**

- 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 Taro.closeBluetoothAdapter 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
- 蓝牙设备在被搜索到时，系统返回的 name 字段一般为广播包中的 LocalName 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 name 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
## 类型[​](getBluetoothDevices.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBluetoothDevices.html#参数)
参数类型option`Option`
### Option[​](getBluetoothDevices.html#option)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBluetoothDevices.html#successcallbackresult)
参数类型说明devices`SuccessCallbackResultBlueToothDevice[]`uuid 对应的的已连接设备列表errMsg`string`成功：ok，错误：详细信息
### SuccessCallbackResultBlueToothDevice[​](getBluetoothDevices.html#successcallbackresultbluetoothdevice)
uuid 对应的的已连接设备列表
参数类型必填说明RSSI`number`是当前蓝牙设备的信号强度advertisData`ArrayBuffer`是当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。advertisServiceUUIDs`string[]`是当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段deviceId`string`是用于区分设备的 idlocalName`string`是当前蓝牙设备的广播数据段中的 LocalName 数据段name`string`是蓝牙设备名称，某些设备可能没有serviceData`TaroGeneral.IAnyObject`是当前蓝牙设备的广播数据段中的 ServiceData 数据段connectable`boolean`否当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ）
## 示例代码[​](getBluetoothDevices.html#示例代码)
```tsx
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
 var hexArr = Array.prototype.map.call(
 new Uint8Array(buffer),
 function(bit) {
 return ('00' + bit.toString(16)).slice(-2)
 }
 )
 return hexArr.join('');
}
Taro.getBluetoothDevices({
 success: function (res) {
 console.log(res)
 if (res.devices[0]) {
 console.log(ab2hex(res.devices[0].advertisData))
 }
 }
})
```

- 
- 

- 
- 
- 

-
