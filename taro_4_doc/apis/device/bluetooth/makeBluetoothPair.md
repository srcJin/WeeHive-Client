# 蓝牙配对接口，仅安卓支持
通常情况下（需要指定 pin 码或者密码时）系统会接管配对流程，直接调用 [Taro.createBLEConnection](../bluetooth-ble/createBLEConnection.html) 即可。该接口只应当在开发者不想让用户手动输入 pin 码且真机验证确认可以正常生效情况下用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.makeBluetoothPair.html)
## 类型[​](makeBluetoothPair.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](makeBluetoothPair.html#参数)
参数类型option`Option`
### Option[​](makeBluetoothPair.html#option)
参数类型默认值必填说明deviceId`string`是蓝牙设备 idpin`string`是pin 码，Base64 格式timeout`string``20000`否超时时间，单位 mscomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
