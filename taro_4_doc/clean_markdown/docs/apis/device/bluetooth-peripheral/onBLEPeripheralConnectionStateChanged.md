# 监听当前外围设备被连接或断开连接事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-peripheral/wx.onBLEPeripheralConnectionStateChanged.html)
## 类型[​](onBLEPeripheralConnectionStateChanged.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBLEPeripheralConnectionStateChanged.html#参数)
参数类型说明callback`Callback`监听当前外围设备被连接或断开连接事件
### Callback[​](onBLEPeripheralConnectionStateChanged.html#callback)
当前外围设备被连接或断开连接事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBLEPeripheralConnectionStateChanged.html#callbackresult)
参数类型说明deviceId`string`蓝牙设备 idserverId`string`server 的 UUIDconnected`boolean`连接目前状态
- 
- 

- 
-
