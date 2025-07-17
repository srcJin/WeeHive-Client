# 监听 mDNS 服务发现的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html)
## 类型[​](onLocalServiceFound.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onLocalServiceFound.html#参数)
参数类型说明callback`Callback`mDNS 服务发现的事件的回调函数
### Callback[​](onLocalServiceFound.html#callback)
mDNS 服务发现的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onLocalServiceFound.html#callbackresult)
参数类型说明ip`string`服务的 ip 地址port`number`服务的端口serviceName`string`服务的名称serviceType`string`服务的类型
- 
- 

- 
-
