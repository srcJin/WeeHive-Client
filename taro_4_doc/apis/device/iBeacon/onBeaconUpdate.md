# 监听 iBeacon 设备更新事件，仅能注册一个监听
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html)
## 类型[​](onBeaconUpdate.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBeaconUpdate.html#参数)
参数类型说明callback`Callback`iBeacon 设备更新事件的回调函数
### Callback[​](onBeaconUpdate.html#callback)
iBeacon 设备更新事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBeaconUpdate.html#callbackresult)
参数类型说明beacons`IBeaconInfo[]`当前搜寻到的所有 iBeacon 设备列表
- 
- 

- 
-
