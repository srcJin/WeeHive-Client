# 监听获取到 Wi-Fi 列表数据事件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html)
## 类型[​](onGetWifiList.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onGetWifiList.html#参数)
参数类型说明callback`Callback`获取到 Wi-Fi 列表数据事件的回调函数
### Callback[​](onGetWifiList.html#callback)
获取到 Wi-Fi 列表数据事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onGetWifiList.html#callbackresult)
参数类型说明wifiList`WifiInfo[]`Wi-Fi 列表数据
- 
- 

- 
-
