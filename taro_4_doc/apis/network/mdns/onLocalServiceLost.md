# 监听 mDNS 服务离开的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html)
## 类型[​](onLocalServiceLost.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onLocalServiceLost.html#参数)
参数类型说明callback`Callback`mDNS 服务离开的事件的回调函数
### Callback[​](onLocalServiceLost.html#callback)
mDNS 服务离开的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onLocalServiceLost.html#callbackresult)
参数类型说明serviceName`string`服务的名称serviceType`string`服务的类型
- 
- 

- 
-
