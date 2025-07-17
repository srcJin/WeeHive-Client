# 监听寻找到新设备的事件
**注意**

- 若在 Taro.onBluetoothDeviceFound 回调了某个设备，则此设备会添加到 Taro.getBluetoothDevices 接口获取到的数组中。
- 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)
## 类型[​](onBluetoothDeviceFound.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBluetoothDeviceFound.html#参数)
参数类型说明callback`Callback`寻找到新设备的事件的回调函数
### Callback[​](onBluetoothDeviceFound.html#callback)
寻找到新设备的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBluetoothDeviceFound.html#callbackresult)
参数类型说明devices`CallbackResultBlueToothDevice[]`新搜索到的设备列表
### CallbackResultBlueToothDevice[​](onBluetoothDeviceFound.html#callbackresultbluetoothdevice)
新搜索到的设备
参数类型必填说明RSSI`number`是当前蓝牙设备的信号强度，单位 dBmadvertisData`ArrayBuffer`是当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。advertisServiceUUIDs`string[]`是当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段deviceId`string`是用于区分设备的 idlocalName`string`是当前蓝牙设备的广播数据段中的 LocalName 数据段name`string`是蓝牙设备名称，某些设备可能没有serviceData`TaroGeneral.IAnyObject`是当前蓝牙设备的广播数据段中的 ServiceData 数据段connectable`boolean`否当前蓝牙设备是否可连接（ Android 8.0 以下不支持返回该值 ）
## 示例代码[​](onBluetoothDeviceFound.html#示例代码)
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
Taro.onBluetoothDeviceFound(function (res) {
 var devices = res.devices;
 console.log('new device list has founded')
 console.dir(devices)
 console.log(ab2hex(devices[0].advertisData))
})
```

- 
- 

- 
- 
- 

-
