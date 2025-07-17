# 一个可以监听下载进度变化事件，以及取消下载任务的对象
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.html)
## 方法[​](DownloadTask.html#方法)
### abort[​](DownloadTask.html#abort)
中断下载任务
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html)
```tsx
() => void
```

### onProgressUpdate[​](DownloadTask.html#onprogressupdate)
监听下载进度变化事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html)
```tsx
(callback: OnProgressUpdateCallback) => void
```
参数类型说明callback`OnProgressUpdateCallback`下载进度变化事件的回调函数
### offProgressUpdate[​](DownloadTask.html#offprogressupdate)
取消监听下载进度变化事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html)
```tsx
(callback: OnProgressUpdateCallback) => void
```
参数类型说明callback`OnProgressUpdateCallback`下载进度变化事件的回调函数
### onHeadersReceived[​](DownloadTask.html#onheadersreceived)
监听 HTTP Response Header 事件。会比请求完成事件更早
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html)
```tsx
(callback: OnHeadersReceivedCallback) => void
```
参数类型说明callback`OnHeadersReceivedCallback`HTTP Response Header 事件的回调函数
### offHeadersReceived[​](DownloadTask.html#offheadersreceived)
取消监听 HTTP Response Header 事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html)
```tsx
(callback: OnHeadersReceivedCallback) => void
```
参数类型说明callback`OnHeadersReceivedCallback`HTTP Response Header 事件的回调函数
## 参数[​](DownloadTask.html#参数)
### OnHeadersReceivedCallback[​](DownloadTask.html#onheadersreceivedcallback)
HTTP Response Header 事件的回调函数
```tsx
(result: OnHeadersReceivedCallbackResult) => void
```
参数类型result`OnHeadersReceivedCallbackResult`
### OnProgressUpdateCallback[​](DownloadTask.html#onprogressupdatecallback)
下载进度变化事件的回调函数
```tsx
(result: OnProgressUpdateCallbackResult) => void
```
参数类型result`OnProgressUpdateCallbackResult`
### OnHeadersReceivedCallbackResult[​](DownloadTask.html#onheadersreceivedcallbackresult)
参数类型说明header`TaroGeneral.IAnyObject`开发者服务器返回的 HTTP Response Header
### OnProgressUpdateCallbackResult[​](DownloadTask.html#onprogressupdatecallbackresult)
参数类型说明progress`number`下载进度百分比totalBytesExpectedToWrite`number`预期需要下载的数据总长度，单位 BytestotalBytesWritten`number`已经下载的数据长度，单位 Bytes
### DownloadTaskPromise[​](DownloadTask.html#downloadtaskpromise)
## 示例代码[​](DownloadTask.html#示例代码)
```tsx
const downloadTask = Taro.downloadFile({
 url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
 success (res) {
 Taro.playVoice({
 filePath: res.tempFilePath
 })
 }
})

downloadTask.onProgressUpdate((res) => {
 console.log('下载进度', res.progress)
 console.log('已经下载的数据长度', res.totalBytesWritten)
 console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
})

downloadTask.abort() // 取消下载任务
```

## API 支持度[​](DownloadTask.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序H5React NativeHarmonyHarmony hybridDownloadTask✔️✔️✔️✔️✔️✔️✔️DownloadTask.abort✔️✔️✔️✔️DownloadTask.onProgressUpdate✔️✔️✔️✔️DownloadTask.offProgressUpdate✔️✔️✔️✔️DownloadTask.onHeadersReceived✔️✔️DownloadTask.offHeadersReceived✔️✔️
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
