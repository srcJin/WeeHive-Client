# 断开与低功耗蓝牙设备的连接。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)
## 类型[​](closeBLEConnection.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](closeBLEConnection.html#参数)
参数类型option`Option`
### Promised[​](closeBLEConnection.html#promised)
参数类型说明errMsg`string`成功：ok，错误：详细信息
### Option[​](closeBLEConnection.html#option)
参数类型必填说明deviceId`string`是用于区分设备的 idcomplete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
## 示例代码[​](closeBLEConnection.html#示例代码)
```tsx
Taro.closeBLEConnection({
 deviceId,
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
