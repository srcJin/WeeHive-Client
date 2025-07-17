# 压缩视频接口。 开发者可指定压缩质量 `quality` 进行压缩。当需要更精细的控制时，可指定 `bitrate`、`fps`、和 `resolution`，当 `quality` 传入时，这三个参数将被忽略。原视频的相关信息可通过 [getVideoInfo](getVideoInfo.html) 获取。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html)
## 类型[​](compressVideo.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](compressVideo.html#参数)
参数类型option`Option`
### Option[​](compressVideo.html#option)
参数类型必填说明src`string`是视频文件路径，可以是临时文件路径也可以是永久文件路径quality`keyof Quality`是压缩质量bitrate`number`是码率，单位 kbpsfps`number`是帧率resolution`number`是相对于原视频的分辨率比例，取值范围(0, 1]success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](compressVideo.html#successcallbackresult)
参数类型说明tempFilePath`string`压缩后的临时文件地址size`number`压缩后的大小，单位 kB
### Quality[​](compressVideo.html#quality)
参数说明low低medium中high高
## 示例代码[​](compressVideo.html#示例代码)
```tsx
Taro.chooseVideo({
 sourceType: ['album', 'camera'],
 maxDuration: 60,
 camera: 'back',
 compressed: false,
 success (res) {
 Taro.compressVideo({
 src: res.tempFilePath,
 quality: quality,
 bitrate: 1032,
 fps: 24,
 resolution:0.5,
 success (res) {
 console.log("压缩成功")
 },
 fail (err) {
 console.log("压缩失败")
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
