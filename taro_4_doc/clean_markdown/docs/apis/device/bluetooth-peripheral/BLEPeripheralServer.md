# 外围设备的服务端
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.html)
## 方法[​](BLEPeripheralServer.html#方法)
### addService[​](BLEPeripheralServer.html#addservice)
添加服务
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.addService.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
### close[​](BLEPeripheralServer.html#close)
关闭当前服务端
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.close.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
### offCharacteristicReadRequest[​](BLEPeripheralServer.html#offcharacteristicreadrequest)
取消监听已连接的设备请求读当前外围设备的特征值事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicReadRequest.html)
```tsx
(callback?: Callback) => void
```
参数类型说明callback`Callback`已连接的设备请求读当前外围设备的特征值事件的回调函数
### offCharacteristicSubscribed[​](BLEPeripheralServer.html#offcharacteristicsubscribed)
取消监听特征订阅事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicSubscribed.html)
```tsx
(callback?: Callback) => void
```
参数类型说明callback`Callback`特征订阅事件的回调函数
### offCharacteristicUnsubscribed[​](BLEPeripheralServer.html#offcharacteristicunsubscribed)
取消监听取消特征订阅事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicUnsubscribed.html)
```tsx
(callback?: Callback) => void
```
参数类型说明callback`Callback`取消特征订阅事件的回调函数
### offCharacteristicWriteRequest[​](BLEPeripheralServer.html#offcharacteristicwriterequest)
取消监听已连接的设备请求写当前外围设备的特征值事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.offCharacteristicWriteRequest.html)
```tsx
(callback?: Callback) => void
```
参数类型说明callback`Callback`已连接的设备请求写当前外围设备的特征值事件的回调函数
### onCharacteristicReadRequest[​](BLEPeripheralServer.html#oncharacteristicreadrequest)
监听已连接的设备请求读当前外围设备的特征值事件
收到该消息后需要立刻调用 [writeCharacteristicValue](BLEPeripheralServer.html#writecharacteristicvalue) 写回数据，否则主机不会收到响应。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicReadRequest.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`已连接的设备请求读当前外围设备的特征值事件的回调函数
### onCharacteristicSubscribed[​](BLEPeripheralServer.html#oncharacteristicsubscribed)
监听特征订阅事件，仅 iOS 支持
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicSubscribed.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`特征订阅事件的回调函数
### onCharacteristicUnsubscribed[​](BLEPeripheralServer.html#oncharacteristicunsubscribed)
监听取消特征订阅事件，仅 iOS 支持
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicUnsubscribed.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`取消特征订阅事件的回调函数
### onCharacteristicWriteRequest[​](BLEPeripheralServer.html#oncharacteristicwriterequest)
监听已连接的设备请求写当前外围设备的特征值事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.onCharacteristicWriteRequest.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`已连接的设备请求写当前外围设备的特征值事件的回调函数
### removeService[​](BLEPeripheralServer.html#removeservice)
移除服务
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.removeService.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
### startAdvertising[​](BLEPeripheralServer.html#startadvertising)
开始广播本地创建的外围设备
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.startAdvertising.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
### stopAdvertising[​](BLEPeripheralServer.html#stopadvertising)
停止广播
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.stopAdvertising.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
### writeCharacteristicValue[​](BLEPeripheralServer.html#writecharacteristicvalue)
往指定特征写入二进制数据值，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/BLEPeripheralServer.writeCharacteristicValue.html)
```tsx
(option: Option) => Promise<TaroGeneral.BluetoothError>
```
参数类型option`Option`
## 参数[​](BLEPeripheralServer.html#参数)
### addService[​](BLEPeripheralServer.html#addservice-1)
#### Option[​](BLEPeripheralServer.html#option)
参数类型必填说明service`service`是描述 service 的 Objectcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
#### service[​](BLEPeripheralServer.html#service)
参数类型说明uuid`string`蓝牙服务的 UUIDcharacteristics`characteristic[]`characteristics 列表
#### characteristic[​](BLEPeripheralServer.html#characteristic)
参数类型必填说明uuid`string`是characteristic 的 UUIDproperties`properties`否特征支持的操作permission`characteristicPermission`否特征权限value`ArrayBuffer`否特征对应的二进制值descriptors`descriptor[]`否描述符数据
#### properties[​](BLEPeripheralServer.html#properties)
特征支持的操作
参数类型默认值必填说明write`boolean``false`否写writeNoResponse`boolean``false`否无回复写read`boolean``false`否读notify`boolean``false`否订阅indicate`boolean``false`否回包
#### characteristicPermission[​](BLEPeripheralServer.html#characteristicpermission)
特征权限
参数类型默认值必填说明readable`boolean``false`否可读writeable`boolean``false`否可写readEncryptionRequired`boolean``false`否加密读请求writeEncryptionRequired`boolean``false`否加密写请求
#### descriptor[​](BLEPeripheralServer.html#descriptor)
描述符数据
参数类型必填说明uuid`string`是Descriptor 的 UUIDpermission`descriptorPermission`否描述符的权限value`ArrayBuffer`是描述符数据
#### descriptorPermission[​](BLEPeripheralServer.html#descriptorpermission)
描述符的权限
参数类型默认值必填说明write`boolean``false`否写read`boolean``false`否读
### close[​](BLEPeripheralServer.html#close-1)
#### Option[​](BLEPeripheralServer.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### onCharacteristicReadRequest[​](BLEPeripheralServer.html#oncharacteristicreadrequest-1)
#### Callback[​](BLEPeripheralServer.html#callback)
已连接的设备请求读当前外围设备的特征值事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](BLEPeripheralServer.html#callbackresult)
参数类型说明serviceId`string`蓝牙特征对应服务的 UUIDcharacteristicId`string`蓝牙特征的 UUIDcallbackId`number`唯一标识码，调用 [writeCharacteristicValue](BLEPeripheralServer.html#writecharacteristicvalue) 时使用
### onCharacteristicSubscribed[​](BLEPeripheralServer.html#oncharacteristicsubscribed-1)
#### Callback[​](BLEPeripheralServer.html#callback-1)
特征订阅事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](BLEPeripheralServer.html#callbackresult-1)
参数类型说明serviceId`string`蓝牙特征对应服务的 UUIDcharacteristicId`string`蓝牙特征的 UUID
### onCharacteristicUnsubscribed[​](BLEPeripheralServer.html#oncharacteristicunsubscribed-1)
#### Callback[​](BLEPeripheralServer.html#callback-2)
取消特征订阅事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](BLEPeripheralServer.html#callbackresult-2)
参数类型说明serviceId`string`蓝牙特征对应服务的 UUIDcharacteristicId`string`蓝牙特征的 UUID
### onCharacteristicWriteRequest[​](BLEPeripheralServer.html#oncharacteristicwriterequest-1)
#### Callback[​](BLEPeripheralServer.html#callback-3)
已连接的设备请求写当前外围设备的特征值事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](BLEPeripheralServer.html#callbackresult-3)
参数类型说明serviceId`string`蓝牙特征对应服务的 UUIDcharacteristicId`string`蓝牙特征的 UUIDcallbackId`number`唯一标识码，调用 [writeCharacteristicValue](BLEPeripheralServer.html#writecharacteristicvalue) 时使用value`ArrayBuffer`请求写入特征的二进制数据值
### removeService[​](BLEPeripheralServer.html#removeservice-1)
#### Option[​](BLEPeripheralServer.html#option-2)
参数类型必填说明serviceId`string`是service 的 UUIDcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### startAdvertising[​](BLEPeripheralServer.html#startadvertising-1)
#### Option[​](BLEPeripheralServer.html#option-3)
参数类型默认值必填说明advertiseRequest`advertiseRequest`是广播自定义参数powerLevel`keyof PowerLevel``"medium"`否广播功率complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
#### advertiseRequest[​](BLEPeripheralServer.html#advertiserequest)
广播自定义参数
参数类型默认值必填说明connectable`boolean``true`否当前设备是否可连接deviceName`string``""`否广播中 deviceName 字段，默认为空serviceUuids`string[]`否要广播的服务 UUID 列表。使用 16/32 位 UUID 时请参考注意事项。manufacturerData`manufacturerData[]`否广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。beacon`beacon`否以 beacon 设备形式广播的参数。
#### manufacturerData[​](BLEPeripheralServer.html#manufacturerdata)
广播的制造商信息。仅安卓支持，iOS 因系统限制无法定制。
参数类型必填说明manufacturerId`string`是制造商ID，0x 开头的十六进制manufacturerSpecificData`ArrayBuffer`否制造商信息
#### beacon[​](BLEPeripheralServer.html#beacon)
以 beacon 设备形式广播的参数。
参数类型必填说明uuid`string`是Beacon 设备广播的 UUIDmajor`number`是Beacon 设备的主 IDminor`number`是Beacon 设备的次 IDmeasuredPower`number`否用于判断距离设备 1 米时 RSSI 大小的参考值
#### PowerLevel[​](BLEPeripheralServer.html#powerlevel)
广播功率合法值
参数说明low功率低medium功率适中high功率高
### stopAdvertising[​](BLEPeripheralServer.html#stopadvertising-1)
#### Option[​](BLEPeripheralServer.html#option-4)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### writeCharacteristicValue[​](BLEPeripheralServer.html#writecharacteristicvalue-1)
#### Option[​](BLEPeripheralServer.html#option-5)
参数类型必填说明serviceId`string`是蓝牙特征对应服务的 UUIDcharacteristicId`string`是蓝牙特征的 UUIDvalue`ArrayBuffer`是characteristic 对应的二进制值needNotify`boolean`是是否需要通知主机 value 已更新callbackId`number`否可选，处理回包时使用complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
## API 支持度[​](BLEPeripheralServer.html#api-支持度)
API微信小程序京东小程序H5React NativeHarmonyBLEPeripheralServer✔️BLEPeripheralServer.addService✔️✔️BLEPeripheralServer.close✔️BLEPeripheralServer.offCharacteristicReadRequest✔️✔️BLEPeripheralServer.offCharacteristicSubscribed✔️✔️BLEPeripheralServer.offCharacteristicUnsubscribed✔️BLEPeripheralServer.offCharacteristicWriteRequest✔️✔️BLEPeripheralServer.onCharacteristicReadRequest✔️✔️BLEPeripheralServer.onCharacteristicSubscribed✔️✔️BLEPeripheralServer.onCharacteristicUnsubscribed✔️✔️BLEPeripheralServer.onCharacteristicWriteRequest✔️✔️BLEPeripheralServer.removeService✔️✔️BLEPeripheralServer.startAdvertising✔️✔️BLEPeripheralServer.stopAdvertising✔️✔️BLEPeripheralServer.writeCharacteristicValue✔️✔️
- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
