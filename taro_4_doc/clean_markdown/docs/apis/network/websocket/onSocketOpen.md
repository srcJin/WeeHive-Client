# 监听 WebSocket 连接打开事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html)
## 类型[​](onSocketOpen.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onSocketOpen.html#参数)
参数类型说明callback`Callback`WebSocket 连接打开事件的回调函数
### Callback[​](onSocketOpen.html#callback)
WebSocket 连接打开事件的回调函数
```tsx
(result: OpenCallbackResult) => void
```
参数类型result`OpenCallbackResult`
### OpenCallbackResult[​](onSocketOpen.html#opencallbackresult)
参数类型说明header`TaroGeneral.IAnyObject`连接成功的 HTTP 响应 Header
## 示例代码[​](onSocketOpen.html#示例代码)
```tsx
Taro.connectSocket({
 url: 'test.php'
})
Taro.onSocketOpen(function (res) {
 console.log('WebSocket连接已打开！')
})
```

- 
- 

- 
- 

-
