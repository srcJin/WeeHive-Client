# 将本地资源上传到服务器。客户端发起一个 HTTPS POST 请求，其中 `content-type` 为 `multipart/form-data`。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html)
## 类型[​](uploadFile.html#类型)
```tsx
(option: Option) => UploadTaskPromise
```

## 参数[​](uploadFile.html#参数)
参数类型option`Option`
### Option[​](uploadFile.html#option)
参数类型默认值必填说明url`string`是开发者服务器地址filePath`string`是要上传文件资源的路径name`string`是文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容header`TaroGeneral.IAnyObject`否HTTP 请求 Header，Header 中不能设置 RefererformData`TaroGeneral.IAnyObject`否HTTP 请求中其他额外的 form datatimeout`number`否超时时间，单位为毫秒fileName`string`否上传的文件名
API 支持度: h5withCredentials`boolean``true`否是否应使用传出凭据 (cookie) 发送此请求
API 支持度: h5complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](uploadFile.html#successcallbackresult)
参数类型必填说明data`string`是开发者服务器返回的数据statusCode`number`是开发者服务器返回的 HTTP 状态码errMsg`string`是调用结果header`TaroGeneral.IAnyObject`否开发者服务器返回的 HTTP Response Header
API 支持度: weapp
weapp: 非官方文档标注属性cookies`string[]`否cookies
API 支持度: weapp
weapp: 非官方文档标注属性
## 示例代码[​](uploadFile.html#示例代码)
### 示例 1[​](uploadFile.html#示例-1)
```tsx
Taro.chooseImage({
 success (res) {
 const tempFilePaths = res.tempFilePaths
 Taro.uploadFile({
 url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
 filePath: tempFilePaths[0],
 name: 'file',
 formData: {
 'user': 'test'
 },
 success (res){
 const data = res.data
 //do something
 }
 })
 }
})
```

### 示例 2[​](uploadFile.html#示例-2)
```tsx
const uploadTask = Taro.uploadFile({
 url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
 filePath: tempFilePaths[0],
 name: 'file',
 formData:{
 'user': 'test'
 },
 success: function (res){
 var data = res.data
 //do something
 }
})
uploadTask.progress((res) => {
 console.log('上传进度', res.progress)
 console.log('已经上传的数据长度', res.totalBytesSent)
 console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
})
uploadTask.abort() // 取消上传任务
```

- 
- 

- 
- 

- 

- 
-
