# 保存文件到本地。**注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用**
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html)
## 类型[​](saveFile.html#类型)
```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数[​](saveFile.html#参数)
参数类型option`Option`
### Option[​](saveFile.html#option)
参数类型必填说明tempFilePath`string`是临时存储文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数filePath`string`否要存储的文件路径apFilePath`string`否要保存的本地临时文件路径
API 支持度: alipaysuccess`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### FailCallbackResult[​](saveFile.html#failcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail tempFilePath file not exist': 指定的 tempFilePath 找不到文件;
- 'fail permission denied, open "${filePath}"': 指定的 filePath 路径没有写权限;
- 'fail no such file or directory "${dirPath}"': 上级目录不存在;
- 'fail the maximum size of the file storage limit is exceeded': 存储空间不足;
### SuccessCallbackResult[​](saveFile.html#successcallbackresult)
参数类型说明savedFilePath`string`存储后的文件路径errMsg`string`调用结果
## 示例代码[​](saveFile.html#示例代码)
```tsx
Taro.chooseImage({
 success: function (res) {
 var tempFilePaths = res.tempFilePaths
 Taro.saveFile({
 tempFilePath: tempFilePaths[0],
 success: function (res) {
 var savedFilePath = res.savedFilePath
 }
 })
 }
})
```

- 
- 

- 
- 
- 

-
