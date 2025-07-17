# 查询蓝牙设备是否配对，仅安卓支持
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.isBluetoothDevicePaired.html)
## 类型[​](isBluetoothDevicePaired.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](isBluetoothDevicePaired.html#参数)
参数类型option`Option`
### Option[​](isBluetoothDevicePaired.html#option)
参数类型必填说明deviceId`string`是蓝牙设备 idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
