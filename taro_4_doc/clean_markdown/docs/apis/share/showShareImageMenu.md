# 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareImageMenu.html)
## 类型[​](showShareImageMenu.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](showShareImageMenu.html#参数)
参数类型option`Option`
### Option[​](showShareImageMenu.html#option)
参数类型必填说明path`string`是要分享的图片地址，必须为本地路径或临时路径success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](showShareImageMenu.html#示例代码)
```tsx
Taro.downloadFile({
 url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/demo.ef5c5bef.jpg',
 success: (res) => {
 Taro.showShareImageMenu({
 path: res.tempFilePath
 })
 }
})
```

- 
- 

- 

-
