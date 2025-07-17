# 通过 WebSocket 连接发送数据。需要先 Taro.connectSocket，并在 Taro.onSocketOpen 回调之后才能发送。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html)
## 类型[​](sendSocketMessage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](sendSocketMessage.html#参数)
参数类型option`Option`
### Option[​](sendSocketMessage.html#option)
参数类型必填说明datastring or ArrayBuffer是需要发送的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](sendSocketMessage.html#示例代码)
```tsx
let socketOpen = false
const socketMsgQueue = []
Taro.connectSocket({
 url: 'test.php'
})
Taro.onSocketOpen(function(res) {
 socketOpen = true
 for (let i = 0; i < socketMsgQueue.length; i++){
 sendSocketMessage(socketMsgQueue[i])
 }
 socketMsgQueue = []
})
function sendSocketMessage(msg) {
 if (socketOpen) {
 Taro.sendSocketMessage({
 data:msg
 })
 } else {
 socketMsgQueue.push(msg)
 }
}
```

- 
- 

- 

-
