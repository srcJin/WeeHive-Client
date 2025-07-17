# WebSocket 任务，可通过 [Taro.connectSocket()](SocketTask.html) 接口创建返回。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html)
## 方法[​](SocketTask.html#方法)
参数类型说明socketTaskId`number`websocket 当前的连接 ID。readyState`number`websocket 当前的连接状态。errMsg`string`websocket 接口调用结果。CONNECTING`number`websocket 状态值：连接中。OPEN`number`websocket 状态值：已连接。CLOSING`number`websocket 状态值：关闭中。CLOSED`number`websocket 状态值：已关闭。ws`WebSocket`浏览器 websocket 实例。（h5 端独有）
### send[​](SocketTask.html#send)
通过 WebSocket 连接发送数据
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html)
```tsx
(option: SendOption) => void
```
参数类型option`SendOption`
### close[​](SocketTask.html#close)
关闭 WebSocket 连接
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html)
```tsx
(option: CloseOption) => void
```
参数类型option`CloseOption`
### onOpen[​](SocketTask.html#onopen)
监听 WebSocket 连接打开事件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html)
```tsx
(callback: OnOpenCallback) => void
```
参数类型说明callback`OnOpenCallback`WebSocket 连接打开事件的回调函数
### onClose[​](SocketTask.html#onclose)
监听 WebSocket 连接关闭事件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html)
```tsx
(callback: OnCloseCallback) => void
```
参数类型说明callback`OnCloseCallback`WebSocket 连接关闭事件的回调函数
### onError[​](SocketTask.html#onerror)
监听 WebSocket 错误事件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html)
```tsx
(callback: OnErrorCallback) => void
```
参数类型说明callback`OnErrorCallback`WebSocket 错误事件的回调函数
### onMessage[​](SocketTask.html#onmessage)
监听 WebSocket 接受到服务器的消息事件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html)
```tsx
<T = any>(callback: OnMessageCallback<T>) => void
```
参数类型说明callback`T`WebSocket 接受到服务器的消息事件的回调函数
## 参数[​](SocketTask.html#参数)
### CloseOption[​](SocketTask.html#closeoption)
参数类型必填说明code`number`否一个数字值表示关闭连接的状态号，表示连接被关闭的原因。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数reason`string`否一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### OnCloseCallback[​](SocketTask.html#onclosecallback)
WebSocket 连接关闭事件的回调函数
```tsx
(result: OnCloseCallbackResult) => void
```
参数类型result`OnCloseCallbackResult`
### OnCloseCallbackResult[​](SocketTask.html#onclosecallbackresult)
参数类型说明code`number`一个数字值表示关闭连接的状态号，表示连接被关闭的原因。reason`string`一个可读的字符串，表示连接被关闭的原因。
### OnErrorCallback[​](SocketTask.html#onerrorcallback)
WebSocket 错误事件的回调函数
```tsx
(result: OnErrorCallbackResult) => void
```
参数类型result`OnErrorCallbackResult`
### OnErrorCallbackResult[​](SocketTask.html#onerrorcallbackresult)
参数类型说明errMsg`string`错误信息
### OnMessageCallback[​](SocketTask.html#onmessagecallback)
WebSocket 接受到服务器的消息事件的回调函数
```tsx
(result: OnMessageCallbackResult<T>) => void
```
参数类型result`OnMessageCallbackResult<T>`
### OnMessageCallbackResult[​](SocketTask.html#onmessagecallbackresult)
参数类型说明data`T`服务器返回的消息
### OnOpenCallback[​](SocketTask.html#onopencallback)
WebSocket 连接打开事件的回调函数
```tsx
(result: OnOpenCallbackResult) => void
```
参数类型result`OnOpenCallbackResult`
### OnOpenCallbackResult[​](SocketTask.html#onopencallbackresult)
参数类型说明header`TaroGeneral.IAnyObject`连接成功的 HTTP 响应 Header
### SendOption[​](SocketTask.html#sendoption)
参数类型必填说明datastring or ArrayBuffer是需要发送的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## API 支持度[​](SocketTask.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序H5React NativeHarmonyHarmony hybridSocketTask✔️✔️✔️✔️✔️✔️SocketTask.send✔️✔️✔️✔️✔️✔️✔️SocketTask.close✔️✔️✔️✔️✔️✔️✔️SocketTask.onOpen✔️✔️✔️✔️✔️✔️✔️SocketTask.onClose✔️✔️✔️✔️✔️✔️✔️SocketTask.onError✔️✔️✔️✔️✔️✔️✔️SocketTask.onMessage✔️✔️✔️✔️✔️✔️✔️
- 

- 
- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
