# 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html)
## 类型[​](getFileInfo.html#类型)
```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数[​](getFileInfo.html#参数)
参数类型option`Option`
### Option[​](getFileInfo.html#option)
参数类型默认值必填说明filePath`string`是要读取的文件路径apFilePath`string`否本地文件路径
API 支持度: alipaydigestAlgorithm"md5" or "sha1"`'md5'`否计算文件摘要的算法complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### FailCallbackResult[​](getFileInfo.html#failcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'fail file not exist': 指定的 filePath 找不到文件;
### SuccessCallbackResult[​](getFileInfo.html#successcallbackresult)
参数类型说明size`number`文件大小，以字节为单位digest`string`按照传入的 digestAlgorithm 计算得出的的文件摘要errMsg`string`调用结果
## 示例代码[​](getFileInfo.html#示例代码)
```tsx
Taro.getFileInfo({
 success: function (res) {
 console.log(res.size)
 console.log(res.digest)
 }
})
```

- 
- 

- 
- 
- 

-
