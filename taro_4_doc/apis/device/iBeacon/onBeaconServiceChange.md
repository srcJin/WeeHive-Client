# 监听 iBeacon 服务状态变化事件，仅能注册一个监听
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html)
## 类型[​](onBeaconServiceChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBeaconServiceChange.html#参数)
参数类型说明callback`Callback`iBeacon 服务状态变化事件的回调函数
### Callback[​](onBeaconServiceChange.html#callback)
iBeacon 服务状态变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBeaconServiceChange.html#callbackresult)
参数类型说明available`boolean`服务目前是否可用discovering`boolean`目前是否处于搜索状态
- 
- 

- 
-
