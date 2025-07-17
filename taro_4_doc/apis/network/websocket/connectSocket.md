# 创建一个 WebSocket 连接。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
**并发数**

- 1.7.0 及以上版本，最多可以同时存在 5 个 WebSocket 连接。
- 1.7.0 以下版本，一个小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html)
## 类型[​](connectSocket.html#类型)
```tsx
(option: Option) => Promise<SocketTask>
```

## 参数[​](connectSocket.html#参数)
参数类型option`Option`
### Option[​](connectSocket.html#option)
参数类型必填说明url`string`是开发者服务器 wss 接口地址complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数header`TaroGeneral.IAnyObject`否HTTP Header，Header 中不能设置 Refererprotocols`string[]`否子协议数组success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数tcpNoDelay`boolean`否建立 TCP 连接的时候的 TCP_NODELAY 设置
## 示例代码[​](connectSocket.html#示例代码)
### 示例 1[​](connectSocket.html#示例-1)
```tsx
Taro.connectSocket({
 url: 'wss://example.qq.com',
 header:{
 'content-type': 'application/json'
 },
 protocols: ['protocol1']
})
```

### 示例 2[​](connectSocket.html#示例-2)
```tsx
Taro.connectSocket({
 url: 'ws://echo.websocket.org/echo',
 success: function () {
 console.log('connect success')
 }
}).then(task => {
 task.onOpen(function () {
 console.log('onOpen')
 task.send({ data: 'xxx' })
 })
 task.onMessage(function (msg) {
 console.log('onMessage: ', msg)
 task.close()
 })
 task.onError(function () {
 console.log('onError')
 })
 task.onClose(function (e) {
 console.log('onClose: ', e)
 })
})
```

- 
- 

- 

- 

- 
-
