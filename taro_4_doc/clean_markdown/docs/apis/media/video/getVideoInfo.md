# 获取视频详细信息
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html)
## 类型[​](getVideoInfo.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getVideoInfo.html#参数)
参数类型option`Option`
### Option[​](getVideoInfo.html#option)
参数类型必填说明src`string`是视频文件路径，可以是临时文件路径也可以是永久文件路径success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](getVideoInfo.html#successcallbackresult)
参数类型说明orientation`keyof Orientation`画面方向type`string`视频格式duration`number`视频长度size`number`视频大小，单位 kBheight`number`视频的长，单位 pxwidth`number`视频的宽，单位 pxfps`number`视频帧率bitrate`number`视频码率，单位 kbps
### Orientation[​](getVideoInfo.html#orientation)
参数说明up默认down180 度旋转left逆时针旋转 90 度right顺时针旋转 90 度up-mirrored同 up，但水平翻转down-mirrored同 down，但水平翻转left-mirrored同 left，但垂直翻转right-mirrored同 right，但垂直翻转
## 示例代码[​](getVideoInfo.html#示例代码)
```tsx
Taro.downloadFile({
 url: 'https://mock.taro.org/mock_video.mp4',
 success(res) {
 Taro.getVideoInfo({
 src: res.tempFilePath,
 success (res) {
 console.log('获取文件地址成功')
 console.log(res)
 },
 fail (res) {
 console.log('获取文件地址失败')
 console.log(res)
 },
 complete (res) {
 console.log('获取文件地址')
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
