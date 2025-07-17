# 获取本地已保存的文件列表
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html)
## 类型[​](getSavedFileList.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getSavedFileList.html#参数)
参数类型option`Option`
### Option[​](getSavedFileList.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getSavedFileList.html#successcallbackresult)
参数类型说明fileList`FileItem[]`文件数组errMsg`string`调用结果
### FileItem[​](getSavedFileList.html#fileitem)
文件数组
参数类型必填说明createTime`number`是文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数filePath`string`是本地路径apFilePath`string`否文件路径
API 支持度: alipaysize`number`是本地文件大小，以字节为单位
## 示例代码[​](getSavedFileList.html#示例代码)
```tsx
Taro.getSavedFileList({
 success: function (res) {
 console.log(res.fileList)
 }
})
```

- 
- 

- 
- 
- 

-
