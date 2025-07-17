# CameraContext.onCameraFrame() 返回的监听器。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.html)
## 方法[​](CameraFrameListener.html#方法)
### start[​](CameraFrameListener.html#start)
开始监听帧数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.start.html)
```tsx
(option?: StartOption) => void
```
参数类型option`StartOption`
### stop[​](CameraFrameListener.html#stop)
停止监听帧数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/CameraFrameListener.stop.html)
```tsx
(option?: StopOption) => void
```
参数类型option`StopOption`
## 参数[​](CameraFrameListener.html#参数)
### StartOption[​](CameraFrameListener.html#startoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### StopOption[​](CameraFrameListener.html#stopoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## API 支持度[​](CameraFrameListener.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyCameraFrameListener.start✔️✔️CameraFrameListener.stop✔️✔️
- 

- 
- 

- 

- 
- 

-
