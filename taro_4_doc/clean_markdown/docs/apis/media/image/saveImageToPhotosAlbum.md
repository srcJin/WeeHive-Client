# 保存图片到系统相册。需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.writePhotosAlbum
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html)
## 类型[​](saveImageToPhotosAlbum.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](saveImageToPhotosAlbum.html#参数)
参数类型option`Option`
### Option[​](saveImageToPhotosAlbum.html#option)
参数类型必填说明filePath`string`是图片文件路径，可以是临时文件路径或永久文件路径，不支持网络图片路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](saveImageToPhotosAlbum.html#示例代码)
```tsx
Taro.saveImageToPhotosAlbum({
 success: function (res) { }
})
```

- 
- 

- 

-
