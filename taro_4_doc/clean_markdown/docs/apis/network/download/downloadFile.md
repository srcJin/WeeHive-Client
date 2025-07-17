# 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径，单次下载允许的最大文件为 50MB。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html)
## 类型[​](downloadFile.html#类型)
```tsx
(option: Option) => DownloadTaskPromise
```

## 参数[​](downloadFile.html#参数)
参数类型option`Option`
### Option[​](downloadFile.html#option)
参数类型默认值必填说明url`string`是下载资源的 urlfilePath`string`否指定文件下载后存储的路径header`TaroGeneral.IAnyObject`否HTTP 请求的 Header，Header 中不能设置 Referertimeout`number`否超时时间，单位为毫秒withCredentials`boolean``true`否是否应使用传出凭据 (cookie) 发送此请求
API 支持度: h5complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: FileSuccessCallbackResult) => void`否接口调用成功的回调函数
### FileSuccessCallbackResult[​](downloadFile.html#filesuccesscallbackresult)
参数类型必填说明filePath`string`是用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致statusCode`number`是开发者服务器返回的 HTTP 状态码tempFilePath`string`是临时文件路径。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件errMsg`string`是调用结果header`TaroGeneral.IAnyObject`否开发者服务器返回的 HTTP Response Header
API 支持度: weapp
weapp: 非官方文档标注属性dataLength`number`否数据长度，单位 Byte
API 支持度: weapp
weapp: 非官方文档标注属性cookies`string[]`否cookies
API 支持度: weapp
weapp: 非官方文档标注属性profile`TaroGeneral.IAnyObject`否网络请求过程中一些调试信息
## 示例代码[​](downloadFile.html#示例代码)
```tsx
Taro.downloadFile({
 url: 'https://example.com/audio/123', //仅为示例，并非真实的资源
 success: function (res) {
 // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
 if (res.statusCode === 200) {
 Taro.playVoice({
 filePath: res.tempFilePath
 })
 }
 }
})
```

- 
- 

- 
- 

-
