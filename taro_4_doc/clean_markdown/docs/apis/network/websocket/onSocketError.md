# 监听 WebSocket 错误事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html)
## 类型[​](onSocketError.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onSocketError.html#参数)
参数类型说明callback`Callback`WebSocket 错误事件的回调函数
### Callback[​](onSocketError.html#callback)
WebSocket 错误事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onSocketError.html#callbackresult)
参数类型说明errMsg`string`错误信息
## 示例代码[​](onSocketError.html#示例代码)
```tsx
Taro.connectSocket({
 url: 'test.php'
})
Taro.onSocketOpen(function (res){
 console.log('WebSocket连接已打开！')
})
Taro.onSocketError(function (res){
 console.log('WebSocket连接打开失败，请检查！')
})
```

- 
- 

- 
- 

-
