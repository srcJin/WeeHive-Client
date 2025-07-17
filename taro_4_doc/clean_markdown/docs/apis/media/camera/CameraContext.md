# [> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.html)
## 方法[​](CameraContext.html#方法)
### onCameraFrame[​](CameraContext.html#oncameraframe)
获取 Camera 实时帧数据
---

注： 使用该接口需同时在 [camera](../../../components/media/camera.html) 组件属性中指定 frame-size。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.onCameraFrame.html)
```tsx
(callback: OnCameraFrameCallback) => CameraFrameListener
```
参数类型说明callback`OnCameraFrameCallback`回调函数
#### 示例代码[​](CameraContext.html#示例代码)
```tsx
const context = wx.createCameraContext()
const listener = context.onCameraFrame((frame) => {
 console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
})
listener.start()
```

### setZoom[​](CameraContext.html#setzoom)
设置缩放级别
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.setZoom.html)
```tsx
(option: SetZoomOption) => void
```
参数类型option`SetZoomOption`
### startRecord[​](CameraContext.html#startrecord)
开始录像
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.startRecord.html)
```tsx
(option: StartRecordOption) => void
```
参数类型option`StartRecordOption`
### stopRecord[​](CameraContext.html#stoprecord)
结束录像
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.stopRecord.html)
```tsx
(option?: StopRecordOption) => void
```
参数类型option`StopRecordOption`
### takePhoto[​](CameraContext.html#takephoto)
拍摄照片
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraContext.takePhoto.html)
```tsx
(option: TakePhotoOption) => void
```
参数类型option`TakePhotoOption`
## 参数[​](CameraContext.html#参数)
### SetZoomOption[​](CameraContext.html#setzoomoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: StartRecordSuccessCallbackResult) => void`否接口调用成功的回调函数zoom`number`是缩放级别，范围[1, maxZoom]。zoom 可取小数，精确到小数后一位。maxZoom 可在 bindinitdone 返回值中获取。
### StartRecordSuccessCallbackResult[​](CameraContext.html#startrecordsuccesscallbackresult)
参数类型说明zoom`number`实际设置的缩放级别。由于系统限制，某些机型可能无法设置成指定值，会改用最接近的可设值。setZoom`number`
API 支持度: alipay
alipay: on android
### StartRecordOption[​](CameraContext.html#startrecordoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数timeoutCallback`StartRecordTimeoutCallback`否超过30s或页面 `onHide` 时会结束录像
### StartRecordTimeoutCallback[​](CameraContext.html#startrecordtimeoutcallback)
超过30s或页面 `onHide` 时会结束录像
```tsx
(result: StartRecordTimeoutCallbackResult) => void
```
参数类型result`StartRecordTimeoutCallbackResult`
### StartRecordTimeoutCallbackResult[​](CameraContext.html#startrecordtimeoutcallbackresult)
参数类型说明tempThumbPath`string`封面图片文件的临时路径tempVideoPath`string`视频的文件的临时路径height`string`视频文件的高度。
API 支持度: alipaywidth`string`视频文件的宽度。
API 支持度: alipaysize`string`视频文件的尺寸。
API 支持度: alipayduration`string`录制的持续时间。
API 支持度: alipay
### StopRecordOption[​](CameraContext.html#stoprecordoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: StopRecordSuccessCallbackResult) => void`否接口调用成功的回调函数
### StopRecordSuccessCallbackResult[​](CameraContext.html#stoprecordsuccesscallbackresult)
参数类型说明tempThumbPath`string`封面图片文件的临时路径tempVideoPath`string`视频的文件的临时路径errMsg`string`调用结果
### TakePhotoOption[​](CameraContext.html#takephotooption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数quality`keyof Quality`否成像质量success`(result: TakePhotoSuccessCallbackResult) => void`否接口调用成功的回调函数
### TakePhotoSuccessCallbackResult[​](CameraContext.html#takephotosuccesscallbackresult)
参数类型说明tempImagePath`string`照片文件的临时路径，安卓是jpg图片格式，ios是pngerrMsg`string`调用结果
### OnCameraFrameCallback[​](CameraContext.html#oncameraframecallback)
回调函数
```tsx
(result: OnCameraFrameCallbackResult) => void
```
参数类型result`OnCameraFrameCallbackResult`
### OnCameraFrameCallbackResult[​](CameraContext.html#oncameraframecallbackresult)
参数类型说明data`ArrayBuffer`图像像素点数据，一维数组，每四项表示一个像素点的 rgbaheight`number`图像数据矩形的高度width`number`图像数据矩形的宽度
### Quality[​](CameraContext.html#quality)
参数说明high高质量normal普通质量low低质量original原图
## API 支持度[​](CameraContext.html#api-支持度)
API微信小程序支付宝小程序抖音小程序H5React NativeHarmonyCameraContext.onCameraFrame✔️✔️✔️CameraContext.setZoom✔️✔️✔️CameraContext.startRecord✔️✔️✔️✔️CameraContext.stopRecord✔️✔️✔️✔️CameraContext.takePhoto✔️✔️✔️✔️
- 

- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
