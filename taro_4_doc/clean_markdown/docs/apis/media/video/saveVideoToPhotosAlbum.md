# 保存视频到系统相册。支持mp4视频格式。需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.writePhotosAlbum
**Bug & Tip：**

- `tip`: camera 参数在部分 Android 手机下由于系统 ROM 不支持无法生效
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html)
## 类型[​](saveVideoToPhotosAlbum.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](saveVideoToPhotosAlbum.html#参数)
参数类型option`Option`
### Option[​](saveVideoToPhotosAlbum.html#option)
参数类型必填说明filePath`string`是视频文件路径，可以是临时文件路径也可以是永久文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](saveVideoToPhotosAlbum.html#示例代码)
```tsx
Taro.saveVideoToPhotosAlbum({
 filePath: 'file://xxx',
 success: function (res) {
 console.log(res.errMsg)
 }
})
```

- 
- 

- 

-
