# 打开视频编辑器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html)
## 类型[​](openVideoEditor.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](openVideoEditor.html#参数)
参数类型option`Option`
### Option[​](openVideoEditor.html#option)
参数类型必填说明filePath`string`是视频源的路径，只支持本地路径success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](openVideoEditor.html#successcallbackresult)
参数类型说明duration`number`剪辑后生成的视频文件的时长，单位毫秒（ms）size`number`剪辑后生成的视频文件大小，单位字节数（byte）tempFilePath`string`编辑后生成的视频文件的临时路径tempThumbPath`string`编辑后生成的缩略图文件的临时路径
## 示例代码[​](openVideoEditor.html#示例代码)
```tsx
Taro.openVideoEditor({
 filePath: ''
})
```

- 
- 

- 
- 

-
