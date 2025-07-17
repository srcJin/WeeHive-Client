# 网络请求任务对象
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.html)
## 方法[​](RequestTask.html#方法)
### abort[​](RequestTask.html#abort)
中断请求任务
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.abort.html)
```tsx
() => void
```

### onHeadersReceived[​](RequestTask.html#onheadersreceived)
监听 HTTP Response Header 事件。会比请求完成事件更早
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onHeadersReceived.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`HTTP Response Header 事件的回调函数
### offHeadersReceived[​](RequestTask.html#offheadersreceived)
取消监听 HTTP Response Header 事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offHeadersReceived.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`HTTP Response Header 事件的回调函数
### onChunkReceived[​](RequestTask.html#onchunkreceived)
监听 Transfer-Encoding Chunk Received 事件。当接收到新的chunk时触发。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.onChunkReceived.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`Transfer-Encoding Chunk Received 事件的回调函数
### offChunkReceived[​](RequestTask.html#offchunkreceived)
移除 Transfer-Encoding Chunk Received 事件的监听函数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/RequestTask.offChunkReceived.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`Transfer-Encoding Chunk Received 事件的回调函数
## 参数[​](RequestTask.html#参数)
### onHeadersReceived[​](RequestTask.html#onheadersreceived-1)
#### Callback[​](RequestTask.html#callback)
HTTP Response Header 事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](RequestTask.html#callbackresult)
参数类型说明header`TaroGeneral.IAnyObject`开发者服务器返回的 HTTP Response Header
### onChunkReceived[​](RequestTask.html#onchunkreceived-1)
#### Callback[​](RequestTask.html#callback-1)
Transfer-Encoding Chunk Received 事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](RequestTask.html#callbackresult-1)
开发者服务器每次返回新 chunk 时的 Response
参数类型说明data`ArrayBuffer`返回的chunk buffer
## 示例代码[​](RequestTask.html#示例代码)
### 示例 1[​](RequestTask.html#示例-1)
回调函数(Callback)用法：
```tsx
const requestTask = Taro.request({
 url: 'test.php', //仅为示例，并非真实的接口地址
 data: {
 x: '' ,
 y: ''
 },
 header: {
 'content-type': 'application/json' // 默认值
 },
 success: function (res) {
 console.log(res.data)
 }
})
requestTask.abort()
```

### 示例 2[​](RequestTask.html#示例-2)
Promise 用法：
```tsx
const requestTask = Taro.request({
 url: 'test.php', //仅为示例，并非真实的接口地址
 data: {
 x: '' ,
 y: ''
 },
 header: {
 'content-type': 'application/json' // 默认值
 },
 success: function (res) {
 console.log(res.data)
 }
})
requestTask.then(res => {
 console.log(res.data)
})
requestTask.abort()
```

### 示例 3[​](RequestTask.html#示例-3)
async/await 用法：
```tsx
const requestTask = Taro.request(params)
const res = await requestTask
requestTask.abort()
```

## API 支持度[​](RequestTask.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序H5React NativeHarmonyHarmony hybridRequestTask✔️✔️✔️✔️✔️✔️✔️✔️RequestTask.abort✔️✔️✔️RequestTask.onHeadersReceived✔️✔️RequestTask.offHeadersReceived✔️✔️RequestTask.onChunkReceived✔️RequestTask.offChunkReceived✔️
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
