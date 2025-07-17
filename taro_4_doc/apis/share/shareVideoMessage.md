# 转发视频到聊天
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.shareVideoMessage.html)
## 类型[​](shareVideoMessage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](shareVideoMessage.html#参数)
参数类型option`Option`
### Option[​](shareVideoMessage.html#option)
参数类型必填说明videoPath`string`是要分享的视频地址，必须为本地路径或临时路径thumbPath`string`否缩略图路径，若留空则使用视频首帧success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](shareVideoMessage.html#示例代码)
callback 写法
```tsx
Taro.downloadFile({
 url: URL, // 下载url
 success (res) {
 // 下载完成后转发
 Taro.shareVideoMessage({
 videoPath: res.tempFilePath,
 success() {},
 fail: console.error,
 })
 },
 fail: console.error,
})
```

async await 写法
```tsx
const { tempFilePath } = await Taro.downloadFile({
 url: URL, // 下载url
})
// 下载完成后转发
await Taro.shareVideoMessage({
 videoPath: res.tempFilePath,
})
```

- 
- 

- 

-
