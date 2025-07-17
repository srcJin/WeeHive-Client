# 删除该小程序下已保存的本地缓存文件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html)
## 类型[​](removeSavedFile.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](removeSavedFile.html#参数)
参数类型option`Option`
### Option[​](removeSavedFile.html#option)
参数类型必填说明filePath`string`是需要删除的文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveSavedFileFailCallbackResult[​](removeSavedFile.html#removesavedfilefailcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail file not exist': 指定的 tempFilePath 找不到文件;
## 示例代码[​](removeSavedFile.html#示例代码)
```tsx
Taro.getSavedFileList({
 success: function (res) {
 if (res.fileList.length > 0){
 Taro.removeSavedFile({
 filePath: res.fileList[0].filePath,
 complete: function (res) {
 console.log(res)
 }
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
