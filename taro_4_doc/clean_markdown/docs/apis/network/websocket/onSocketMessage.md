# 监听 WebSocket 接受到服务器的消息事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html)
## 类型[​](onSocketMessage.html#类型)
```tsx
<T = any>(callback: Callback<T>) => void
```

## 参数[​](onSocketMessage.html#参数)
参数类型说明callback`T`WebSocket 接受到服务器的消息事件的回调函数
### Callback[​](onSocketMessage.html#callback)
WebSocket 接受到服务器的消息事件的回调函数
```tsx
(result: CallbackResult<T>) => void
```
参数类型result`CallbackResult<T>`
### CallbackResult[​](onSocketMessage.html#callbackresult)
参数类型说明data`T`服务器返回的消息
## 示例代码[​](onSocketMessage.html#示例代码)
```tsx
Taro.connectSocket({
 url: 'test.php'
})
Taro.onSocketMessage(function (res) {
 console.log('收到服务器内容：' + res.data)
})
```

- 
- 

- 
- 

-
