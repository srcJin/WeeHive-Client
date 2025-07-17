# 监听持续定位接口返回失败时触发
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChangeError.html)
## 类型[​](onLocationChangeError.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onLocationChangeError.html#参数)
参数类型说明callback`Callback`监听持续定位接口返回失败时触发的回调函数
### Callback[​](onLocationChangeError.html#callback)
监听持续定位接口返回失败时触发的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onLocationChangeError.html#callbackresult)
参数类型必填说明errCode`number`是错误码errMsg`string`否错误信息
API 支持度: tt
tt: 最低支持版本 2.48.0
- 
- 

- 
-
