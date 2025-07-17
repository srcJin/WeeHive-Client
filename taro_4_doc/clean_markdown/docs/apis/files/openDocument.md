# 新开页面打开文档，支持格式
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html)
## 类型[​](openDocument.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openDocument.html#参数)
参数类型option`Option`
### Option[​](openDocument.html#option)
参数类型必填说明filePath`string`是文件路径，可通过 downloadFile 获得showMenu`boolean`否是否显示右上角菜单complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数fileType`keyof FileType`否文件类型，指定文件类型打开文件success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### FileType[​](openDocument.html#filetype)
文件类型
参数说明docdoc 格式docxdocx 格式xlsxls 格式xlsxxlsx 格式pptppt 格式pptxpptx 格式pdfpdf 格式
## 示例代码[​](openDocument.html#示例代码)
```tsx
Taro.downloadFile({
 url: 'https://example.com/somefile.pdf',
 success: function (res) {
 var filePath = res.tempFilePath
 Taro.openDocument({
 filePath: filePath,
 success: function (res) {
 console.log('打开文档成功')
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
