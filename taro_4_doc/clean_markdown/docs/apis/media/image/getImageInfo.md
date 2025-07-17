# 获取图片信息。网络图片需先配置download域名才能生效。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html)
## 类型[​](getImageInfo.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getImageInfo.html#参数)
参数类型option`Option`
### Option[​](getImageInfo.html#option)
参数类型必填说明src`string`是图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getImageInfo.html#successcallbackresult)
参数类型默认值说明height`number`图片原始高度，单位px。不考虑旋转。orientation`keyof Orientation``"up"`[拍照时设备方向](http://sylvana.net/jpegcrop/exif_orientation.html)path`string`图片的本地路径type`string`图片格式width`number`图片原始宽度，单位px。不考虑旋转。errMsg`string`调用结果
### Orientation[​](getImageInfo.html#orientation)
参数说明up默认方向（手机横持拍照），对应 Exif 中的 1。或无 orientation 信息。up-mirrored同 up，但镜像翻转，对应 Exif 中的 2down旋转180度，对应 Exif 中的 3down-mirrored同 down，但镜像翻转，对应 Exif 中的 4left-mirrored同 left，但镜像翻转，对应 Exif 中的 5right顺时针旋转90度，对应 Exif 中的 6right-mirrored同 right，但镜像翻转，对应 Exif 中的 7left逆时针旋转90度，对应 Exif 中的 8
## 示例代码[​](getImageInfo.html#示例代码)
```tsx
Taro.getImageInfo({
 src: 'images/a.jpg',
 success: function (res) {
 console.log(res.width)
 console.log(res.height)
 }
})
Taro.chooseImage({
 success: function (res) {
 Taro.getImageInfo({
 src: res.tempFilePaths[0],
 success: function (res) {
 console.log(res.width)
 console.log(res.height)
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

-
