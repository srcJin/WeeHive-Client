# 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html)
## 类型[​](onBLEConnectionStateChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBLEConnectionStateChange.html#参数)
参数类型说明callback`Callback`低功耗蓝牙连接状态的改变事件的回调函数
### CallbackResult[​](onBLEConnectionStateChange.html#callbackresult)
参数类型说明connected`boolean`是否处于已连接状态deviceId`string`蓝牙设备ID
### Callback[​](onBLEConnectionStateChange.html#callback)
低功耗蓝牙连接状态的改变事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
## 示例代码[​](onBLEConnectionStateChange.html#示例代码)
```tsx
Taro.onBLEConnectionStateChange(function (res) {
 // 该方法回调中可以用于处理连接意外断开等异常情况
 console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
})
```

- 
- 

- 
- 

-
