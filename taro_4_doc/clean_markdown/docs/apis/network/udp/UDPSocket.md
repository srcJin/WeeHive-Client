# 一个 UDP Socket 实例，默认使用 IPv4 协议。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.html)
## 方法[​](UDPSocket.html#方法)
### bind[​](UDPSocket.html#bind)
绑定一个系统随机分配的可用端口，或绑定一个指定的端口号
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.bind.html)
```tsx
(port: number) => number
```
参数类型说明port`number`指定要绑定的端口号，不传则返回系统随机分配的可用端口
#### 示例代码[​](UDPSocket.html#示例代码)
```tsx
const udp = Taro.createUDPSocket()
udp.close()
```

### setTTL[​](UDPSocket.html#setttl)
设置 IP_TTL 套接字选项，用于设置一个 IP 数据包传输时允许的最大跳步数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.setTTL.html)
```tsx
(ttl: number) => void
```
参数类型说明ttl`number`ttl 参数可以是 0 到 255 之间
#### 示例代码[​](UDPSocket.html#示例代码-1)
```tsx
const udp = Taro.createUDPSocket()
udp.onListening(function () {
 udp.setTTL(64)
})
udp.bind()
```

### send[​](UDPSocket.html#send)
向指定的 IP 和 port 发送消息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.send.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
#### 示例代码[​](UDPSocket.html#示例代码-2)
```tsx
const udp = Taro.createUDPSocket()
udp.bind()
udp.send({
 address: '192.168.193.2',
 port: 8848,
 message: 'hello, how are you'
})
```

### connect[​](UDPSocket.html#connect)
预先连接到指定的 IP 和 port，需要配合 write 方法一起使用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.connect.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
### write[​](UDPSocket.html#write)
用法与 send 方法相同，如果没有预先调用 connect 则与 send 无差异（注意即使调用了 connect 也需要在本接口填入地址和端口参数）
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.write.html)
```tsx
() => void
```

### close[​](UDPSocket.html#close)
关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 `UDPSocket.send` 将会触发错误事件，并且 message 事件回调函数也不会再也执行。在 `UDPSocket` 实例被创建后将被 Native 强引用，保证其不被 GC。在 `UDPSocket.close` 后将解除对其的强引用，让 UDPSocket 实例遵从 GC。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.close.html)
```tsx
() => void
```

### onClose[​](UDPSocket.html#onclose)
监听关闭事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onClose.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`关闭事件的回调函数
### offClose[​](UDPSocket.html#offclose)
取消监听关闭事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offClose.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`关闭事件的回调函数
### onError[​](UDPSocket.html#onerror)
监听错误事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onError.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`错误事件的回调函数
### offError[​](UDPSocket.html#offerror)
取消监听错误事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offError.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`错误事件的回调函数
### onListening[​](UDPSocket.html#onlistening)
监听开始监听数据包消息的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onListening.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听开始监听数据包消息的事件
### offListening[​](UDPSocket.html#offlistening)
取消监听开始监听数据包消息的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offListening.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听开始监听数据包消息的事件
### onMessage[​](UDPSocket.html#onmessage)
监听收到消息的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.onMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`收到消息的事件的回调函数
### offMessage[​](UDPSocket.html#offmessage)
取消监听收到消息的事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/udp/UDPSocket.offMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`收到消息的事件的回调函数
## 参数[​](UDPSocket.html#参数)
### connect[​](UDPSocket.html#connect-1)
#### Option[​](UDPSocket.html#option)
参数类型说明address`string`要发消息的地址port`number`要发送消息的端口号
### onClose[​](UDPSocket.html#onclose-1)
#### Callback[​](UDPSocket.html#callback)
当一个 socket 完全关闭就发出该事件的回调函数
```tsx
(args: unknown[]) => void
```
参数类型args`unknown[]`
### onError[​](UDPSocket.html#onerror-1)
#### Callback[​](UDPSocket.html#callback-1)
错误事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](UDPSocket.html#callbackresult)
参数类型说明errMsg`string`错误信息
### onListening[​](UDPSocket.html#onlistening-1)
#### Callback[​](UDPSocket.html#callback-2)
监听开始监听数据包消息的事件
```tsx
(args: unknown[]) => void
```
参数类型args`unknown[]`
### onMessage[​](UDPSocket.html#onmessage-1)
#### Callback[​](UDPSocket.html#callback-3)
收到消息的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](UDPSocket.html#callbackresult-1)
参数类型说明message`ArrayBuffer`收到的消息remoteInfo`RemoteInfo`发送端地址信息localInfo`LocalInfo`接收端地址信息
#### RemoteInfo[​](UDPSocket.html#remoteinfo)
发送端地址信息
参数类型说明address`string`发送消息的 socket 的地址family`string`使用的协议族，为 IPv4 或者 IPv6port`number`端口号
#### LocalInfo[​](UDPSocket.html#localinfo)
接收端地址信息
参数类型说明address`string`接收消息的 socket 的地址family`string`使用的协议族，为 IPv4 或者 IPv6port`number`端口号size`number`message 的大小，单位：字节
### send[​](UDPSocket.html#send-1)
#### Option[​](UDPSocket.html#option-1)
参数类型默认值必填说明address`string`是要发消息的地址。在基础库 <= 2.9.3 版本必须是和本机同网段的 IP 地址，或安全域名列表内的域名地址；之后版本可以是任意 IP 和域名port`number`是要发送消息的端口号messagestring or ArrayBuffer是要发送的数据offset`number``0`否发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效length`number``message.byteLength`否发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效
## API 支持度[​](UDPSocket.html#api-支持度)
API微信小程序H5React NativeHarmonyUDPSocket✔️UDPSocket.bind✔️UDPSocket.setTTL✔️UDPSocket.send✔️UDPSocket.connect✔️UDPSocket.write✔️UDPSocket.close✔️UDPSocket.onClose✔️UDPSocket.offClose✔️UDPSocket.onError✔️UDPSocket.offError✔️UDPSocket.onListening✔️UDPSocket.offListening✔️UDPSocket.onMessage✔️UDPSocket.offMessage✔️
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
- 
- 
- 

-
