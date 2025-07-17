# 监听网络状态变化。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html)
## 类型[​](onNetworkStatusChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onNetworkStatusChange.html#参数)
参数类型说明callback`Callback`网络状态变化事件的回调函数
### Callback[​](onNetworkStatusChange.html#callback)
网络状态变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onNetworkStatusChange.html#callbackresult)
参数类型说明isConnected`boolean`当前是否有网络连接networkType`keyof NetworkType`网络类型
## 示例代码[​](onNetworkStatusChange.html#示例代码)
```tsx
Taro.onNetworkStatusChange(function (res) {
 console.log(res.isConnected)
 console.log(res.networkType)
})
```

- 
- 

- 
- 

-
