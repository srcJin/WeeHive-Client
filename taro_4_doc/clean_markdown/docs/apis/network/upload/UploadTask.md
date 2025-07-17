# 一个可以监听上传进度变化事件，以及取消上传任务的对象
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.html)
## 方法[​](UploadTask.html#方法)
### abort[​](UploadTask.html#abort)
中断上传任务
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.abort.html)
```tsx
() => void
```

### onProgressUpdate[​](UploadTask.html#onprogressupdate)
监听上传进度变化事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onProgressUpdate.html)
```tsx
(callback: OnProgressUpdateCallback) => void
```
参数类型说明callback`OnProgressUpdateCallback`上传进度变化事件的回调函数
### offProgressUpdate[​](UploadTask.html#offprogressupdate)
取消监听上传进度变化事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offProgressUpdate.html)
```tsx
(callback: OnProgressUpdateCallback) => void
```
参数类型说明callback`OnProgressUpdateCallback`上传进度变化事件的回调函数
### onHeadersReceived[​](UploadTask.html#onheadersreceived)
监听 HTTP Response Header 事件。会比请求完成事件更早
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.onHeadersReceived.html)
```tsx
(callback: OnHeadersReceivedCallback) => void
```
参数类型说明callback`OnHeadersReceivedCallback`HTTP Response Header 事件的回调函数
### offHeadersReceived[​](UploadTask.html#offheadersreceived)
取消监听 HTTP Response Header 事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/UploadTask.offHeadersReceived.html)
```tsx
(callback: OnHeadersReceivedCallback) => void
```
参数类型说明callback`OnHeadersReceivedCallback`HTTP Response Header 事件的回调函数
## 参数[​](UploadTask.html#参数)
### OnHeadersReceivedCallback[​](UploadTask.html#onheadersreceivedcallback)
HTTP Response Header 事件的回调函数
```tsx
(result: OnHeadersReceivedCallbackResult) => void
```
参数类型result`OnHeadersReceivedCallbackResult`
### OnProgressUpdateCallback[​](UploadTask.html#onprogressupdatecallback)
上传进度变化事件的回调函数
```tsx
(result: OnProgressUpdateCallbackResult) => void
```
参数类型result`OnProgressUpdateCallbackResult`
### OnHeadersReceivedCallbackResult[​](UploadTask.html#onheadersreceivedcallbackresult)
参数类型说明header`TaroGeneral.IAnyObject`开发者服务器返回的 HTTP Response Header
### OnProgressUpdateCallbackResult[​](UploadTask.html#onprogressupdatecallbackresult)
参数类型说明progress`number`上传进度百分比totalBytesExpectedToSend`number`预期需要上传的数据总长度，单位 BytestotalBytesSent`number`已经上传的数据长度，单位 Bytes
### UploadTaskPromise[​](UploadTask.html#uploadtaskpromise)
## 示例代码[​](UploadTask.html#示例代码)
```tsx
const uploadTask = Taro.uploadFile({
 url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
 filePath: tempFilePaths[0],
 name: 'file',
 formData:{
 'user': 'test'
 },
 success (res){
 const data = res.data
 //do something
 }
})

uploadTask.onProgressUpdate((res) => {
 console.log('上传进度', res.progress)
 console.log('已经上传的数据长度', res.totalBytesSent)
 console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
})

uploadTask.abort() // 取消上传任务
```

## API 支持度[​](UploadTask.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序H5React NativeHarmonyHarmony hybridUploadTask✔️✔️✔️✔️✔️✔️✔️UploadTask.abort✔️✔️✔️✔️UploadTask.onProgressUpdate✔️✔️✔️✔️UploadTask.offProgressUpdate✔️✔️✔️✔️UploadTask.onHeadersReceived✔️✔️✔️UploadTask.offHeadersReceived✔️✔️✔️
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
