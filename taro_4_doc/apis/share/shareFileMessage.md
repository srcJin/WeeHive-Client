# 转发文件到聊天
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareFileMessage.html)
## 类型[​](shareFileMessage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](shareFileMessage.html#参数)
参数类型option`Option`
### Option[​](shareFileMessage.html#option)
参数类型必填说明filePath`string`是要分享的视频地址，必须为本地路径或临时路径fileName`string`否自定义文件名，若留空则使用 filePath 中的文件名success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
- 
- 

-
