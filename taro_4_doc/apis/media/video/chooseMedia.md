# 拍摄或从手机相册中选择图片或视频。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)
## 类型[​](chooseMedia.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseMedia.html#参数)
参数类型option`Option`
### Option[​](chooseMedia.html#option)
参数类型默认值必填说明count`number``9`否最多可以选择的文件个数
API 支持度: weapp, h5mediaType`(keyof mediaType)[]``['image', 'video']`否文件类型
API 支持度: weapp, h5sourceType`(keyof sourceType)[]``['album', 'camera']`否图片和视频选择的来源
API 支持度: weapp, h5maxDuration`number``10`否拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 60s 之间
API 支持度: weappsizeType("original" or "compressed")[]`['original', 'compressed']`否是否压缩所选文件
API 支持度: weappcamera`string``"back"`否仅在 sourceType 为 camera 时生效，使用前置或后置摄像头
API 支持度: weapp, h5complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数mediaId`string`否用来上传的input元素ID
API 支持度: h5
### SuccessCallbackResult[​](chooseMedia.html#successcallbackresult)
参数类型说明tempFiles`ChooseMedia[]`本地临时文件列表type`string`文件类型，有效值有 image 、video、mix
### ChooseMedia[​](chooseMedia.html#choosemedia)
本地临时文件列表
参数类型必填说明tempFilePath`string`是本地临时文件路径 (本地路径)size`number`是本地临时文件大小，单位 Bduration`number`是视频的时间长度height`number`是视频的高度width`number`是视频的宽度thumbTempFilePath`string`是视频缩略图临时文件路径fileType`string`是选择的文件的类型originalFileObj`File`否原始的浏览器 File 对象
API 支持度: h5
### mediaType[​](chooseMedia.html#mediatype)
参数说明video只能拍摄视频或从相册选择视频image只能拍摄图片或从相册选择图片mix可同时选择图片和视频
### sourceType[​](chooseMedia.html#sourcetype)
参数说明album从相册选择camera使用相机拍摄
### camera[​](chooseMedia.html#camera)
参数说明back使用后置摄像头front使用前置摄像头
## 示例代码[​](chooseMedia.html#示例代码)
```tsx
Taro.chooseMedia({
 count: 9,
 mediaType: ['image','video'],
 sourceType: ['album', 'camera'],
 maxDuration: 30,
 camera: 'back',
 success: (res) => {
 console.log(res.tempFiles)
 console.log(res.type)
 }
})
```

- 
- 

- 
- 
- 
- 
- 
- 

-
