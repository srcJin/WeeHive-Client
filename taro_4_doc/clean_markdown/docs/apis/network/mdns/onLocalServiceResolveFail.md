# 监听 mDNS 服务解析失败的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html)
## 类型[​](onLocalServiceResolveFail.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onLocalServiceResolveFail.html#参数)
参数类型说明callback`Callback`mDNS 服务解析失败的事件的回调函数
### Callback[​](onLocalServiceResolveFail.html#callback)
mDNS 服务解析失败的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onLocalServiceResolveFail.html#callbackresult)
参数类型说明serviceName`string`服务的名称serviceType`string`服务的类型
- 
- 

- 
-
