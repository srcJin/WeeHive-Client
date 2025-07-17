# 系统相机
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)
## 类型[​](camera.html#类型)
```tsx
ComponentType<CameraProps>
```

## CameraProps[​](camera.html#cameraprops)
参数类型默认值必填说明mode`keyof Mode``"normal"`否模式，有效值为normal, scanCoderesolution`keyof Resolution``"medium"`否分辨率，不支持动态修改devicePosition`keyof DevicePosition``"back"`否摄像头朝向flash`keyof Flash``"auto"`否闪光灯frameSize`keyof FrameSize``"medium"`否指定期望的相机帧数据尺寸outputDimension"360P" or "540P" or "720P" or "1080P" or "max"`"720P"`否相机拍照，录制的分辨率。onStop`CommonEventFunction`否摄像头在非正常终止时触发，
如退出后台等情况onError`CommonEventFunction`否用户不允许使用摄像头时触发onInitDone`CommonEventFunction<onInitDoneEventDetail>`否相机初始化完成时触发onReady`CommonEventFunction<onInitDoneEventDetail>`否相机初始化成功时触发。onScanCode`CommonEventFunction<onScanCodeEventDetail>`否在成功识别到一维码时触发，
仅在 mode="scanCode" 时生效
### API 支持度[​](camera.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyCameraProps.mode✔️✔️✔️✔️✔️✔️CameraProps.resolution✔️✔️CameraProps.devicePosition✔️✔️✔️✔️✔️✔️✔️CameraProps.flash✔️✔️✔️✔️✔️✔️✔️CameraProps.frameSize✔️✔️✔️CameraProps.outputDimension✔️CameraProps.onStop✔️✔️✔️✔️✔️✔️✔️CameraProps.onError✔️✔️✔️✔️✔️✔️✔️CameraProps.onInitDone✔️✔️✔️CameraProps.onReady✔️CameraProps.onScanCode✔️✔️✔️✔️✔️
### Mode[​](camera.html#mode)
mode 的合法值
参数说明normal相机模式scanCode扫码模式
### Resolution[​](camera.html#resolution)
resolution 的合法值
参数说明low低medium中high高
### DevicePosition[​](camera.html#deviceposition)
device-position 的合法值
参数说明front前置back后置
### Flash[​](camera.html#flash)
flash 的合法值
参数说明auto自动on打开off关闭torch常亮
### FrameSize[​](camera.html#framesize)
frame-size 的合法值
参数说明small小尺寸帧数据medium中尺寸帧数据large大尺寸帧数据
### onInitDoneEventDetail[​](camera.html#oninitdoneeventdetail)
参数类型说明maxZoom`number`最大变焦
### onScanCodeEventDetail[​](camera.html#onscancodeeventdetail)
参数类型说明charSet`string`字符集rawData`string`原始数据type`string`码类型result`string`识别结果fullResult`string`识别结果(完整)
#### API 支持度[​](camera.html#api-支持度-1)
API微信小程序支付宝小程序H5React NativeHarmonyonScanCodeEventDetail.rawData✔️onScanCodeEventDetail.fullResult✔️
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
