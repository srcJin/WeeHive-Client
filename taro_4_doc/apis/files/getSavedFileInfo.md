# 获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 [Taro.getFileInfo](getFileInfo.html) 接口。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html)
## 类型[​](getSavedFileInfo.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getSavedFileInfo.html#参数)
参数类型option`Option`
### Option[​](getSavedFileInfo.html#option)
参数类型必填说明filePath`string`是文件路径apFilePath`string`否文件路径
API 支持度: alipaycomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getSavedFileInfo.html#successcallbackresult)
参数类型说明createTime`number`文件保存时的时间戳，从1970/01/01 08:00:00 到该时刻的秒数size`number`文件大小，单位 BerrMsg`string`调用结果
## 示例代码[​](getSavedFileInfo.html#示例代码)
```tsx
Taro.getSavedFileInfo({
 filePath: 'wxfile://somefile', //仅做示例用，非真正的文件路径
 success: function (res) {
 console.log(res.size)
 console.log(res.createTime)
 }
})
```

- 
- 

- 
- 

-
