# 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEMTUChange.html)
## 类型[​](onBLEMTUChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBLEMTUChange.html#参数)
参数类型说明callback`Callback`蓝牙低功耗的最大传输单元变化事件的回调函数
### CallbackResult[​](onBLEMTUChange.html#callbackresult)
参数类型说明deviceId`string`蓝牙设备IDmtu`string`最大传输单元
### Callback[​](onBLEMTUChange.html#callback)
蓝牙低功耗的最大传输单元变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
## 示例代码[​](onBLEMTUChange.html#示例代码)
```tsx
Taro.onBLEMTUChange(function (res) {
 console.log('bluetooth mtu is', res.mtu)
})
```

- 
- 

- 
- 

-
