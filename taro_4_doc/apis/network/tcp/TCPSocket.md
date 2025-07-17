# 一个 TCP Socket 实例，默认使用 IPv4 协议
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.html)
## 方法[​](TCPSocket.html#方法)
### connect[​](TCPSocket.html#connect)
在给定的套接字上启动连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.connect.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
#### 示例代码[​](TCPSocket.html#示例代码)
```tsx
const tcp = Taro.createTCPSocket()
tcp.connect({ address: '192.168.193.2', port: 8848 })
```

### write[​](TCPSocket.html#write)
在 socket 上发送数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.write.html)
```tsx
(data: string | ArrayBuffer) => void
```
参数类型说明datastring or ArrayBuffer要发送的数据
#### 示例代码[​](TCPSocket.html#示例代码-1)
```tsx
const tcp = Taro.createTCPSocket()
tcp.write('hello, how are you')
```

### close[​](TCPSocket.html#close)
关闭连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.close.html)
```tsx
() => void
```

#### 示例代码[​](TCPSocket.html#示例代码-2)
```tsx
const tcp = Taro.createTCPSocket()
tcp.close()
```

### onClose[​](TCPSocket.html#onclose)
监听关闭事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onClose.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当一个 socket 完全关闭就发出该事件的回调函数
### offClose[​](TCPSocket.html#offclose)
取消监听当一个 socket 完全关闭就发出该事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offClose.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当一个 socket 完全关闭就发出该事件的回调函数
### onConnect[​](TCPSocket.html#onconnect)
监听当一个 socket 连接成功建立的时候触发该事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onConnect.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当一个 socket 连接成功建立的时候触发该事件的回调函数
### offConnect[​](TCPSocket.html#offconnect)
取消监听当一个 socket 连接成功建立的时候触发该事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offConnect.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当一个 socket 连接成功建立的时候触发该事件的回调函数
### onError[​](TCPSocket.html#onerror)
监听当错误发生时触发
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onError.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听当错误发生时触发的回调函数
### offError[​](TCPSocket.html#offerror)
取消监听当错误发生时触发
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offError.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听当错误发生时触发的回调函数
### onMessage[​](TCPSocket.html#onmessage)
监听当接收到数据的时触发该事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.onMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当接收到数据的时触发该事件的回调函数
### offMessage[​](TCPSocket.html#offmessage)
取消监听当接收到数据的时触发该事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/tcp/TCPSocket.offMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`当接收到数据的时触发该事件的回调函数
## 参数[​](TCPSocket.html#参数)
### connect[​](TCPSocket.html#connect-1)
#### Option[​](TCPSocket.html#option)
参数类型说明address`string`套接字要连接的地址port`number`套接字要连接的端口
### onClose[​](TCPSocket.html#onclose-1)
#### Callback[​](TCPSocket.html#callback)
当一个 socket 完全关闭就发出该事件的回调函数
```tsx
(args: unknown[]) => void
```
参数类型args`unknown[]`
### onConnect[​](TCPSocket.html#onconnect-1)
#### Callback[​](TCPSocket.html#callback-1)
当一个 socket 连接成功建立的时候触发该事件的回调函数
```tsx
(args: unknown[]) => void
```
参数类型args`unknown[]`
### onError[​](TCPSocket.html#onerror-1)
#### Callback[​](TCPSocket.html#callback-2)
监听当错误发生时触发的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](TCPSocket.html#callbackresult)
参数类型说明errMsg`string`错误信息
### onMessage[​](TCPSocket.html#onmessage-1)
#### Callback[​](TCPSocket.html#callback-3)
当接收到数据的时触发该事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](TCPSocket.html#callbackresult-1)
参数类型说明message`ArrayBuffer`收到的消息remoteInfo`RemoteInfo`发送端地址信息localInfo`LocalInfo`接收端地址信息
#### RemoteInfo[​](TCPSocket.html#remoteinfo)
发送端地址信息
参数类型说明address`string`发送消息的 socket 的地址family`string`使用的协议族，为 IPv4 或者 IPv6port`number`端口号size`number`message 的大小，单位：字节
#### LocalInfo[​](TCPSocket.html#localinfo)
接收端地址信息
参数类型说明address`string`接收消息的 socket 的地址family`string`使用的协议族，为 IPv4 或者 IPv6port`number`端口号
## API 支持度[​](TCPSocket.html#api-支持度)
API微信小程序H5React NativeHarmonyTCPSocket✔️TCPSocket.connect✔️TCPSocket.write✔️TCPSocket.close✔️TCPSocket.onClose✔️TCPSocket.offClose✔️TCPSocket.onConnect✔️TCPSocket.offConnect✔️TCPSocket.onError✔️TCPSocket.offError✔️TCPSocket.onMessage✔️TCPSocket.offMessage✔️
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
