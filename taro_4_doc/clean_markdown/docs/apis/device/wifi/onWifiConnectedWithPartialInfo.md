# 监听连接上 Wi-Fi 的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnectedWithPartialInfo.html)
## 类型[​](onWifiConnectedWithPartialInfo.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onWifiConnectedWithPartialInfo.html#参数)
参数类型说明callback`Callback`连接上 Wi-Fi 的事件的回调函数
### Callback[​](onWifiConnectedWithPartialInfo.html#callback)
连接上 Wi-Fi 的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onWifiConnectedWithPartialInfo.html#callbackresult)
参数类型说明wifi`Pick<WifiInfo, "SSID">`只包含 SSID 属性的 WifiInfo 对象
- 
- 

- 
-
