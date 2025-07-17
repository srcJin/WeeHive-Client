# vision kit 会话对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.html)
## 方法[​](VKSession.html#方法)
参数类型说明state`keyof IState`会话状态config`IConfig`会话配置cameraSize`ISize`相机尺寸
### addMarker[​](VKSession.html#addmarker)
添加一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addMarker.html)
```tsx
(path: string) => number
```
参数类型说明path`string`图片路径，目前只支持本地用户图片
### addOSDMarker[​](VKSession.html#addosdmarker)
添加一个 OSD marker（one-shot detection marker），要求调 Taro.createVKSession 时传入的 track.OSD 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.addOSDMarker.html)
```tsx
(path: string) => number
```
参数类型说明path`string`图片路径，目前只支持本地用户图片
### cancelAnimationFrame[​](VKSession.html#cancelanimationframe)
取消由 requestAnimationFrame 添加到计划中的动画帧请求
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.cancelAnimationFrame.html)
```tsx
(requestID: number) => void
```
参数类型requestID`number`
### destroy[​](VKSession.html#destroy)
销毁会话
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.destroy.html)
```tsx
() => void
```

### detectBody[​](VKSession.html#detectbody)
静态图像人体关键点检测。当 Taro.createVKSession 参数传入 {track: {body: {mode: 2} } } 时可用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectBody.html)
```tsx
(option: IDetectBodyOption) => void
```
参数类型option`IDetectBodyOption`
### detectDepth[​](VKSession.html#detectdepth)
深度识别。当 Taro.createVKSession 参数传入 {track: {depth: {mode: 2} } } 时可用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectDepth.html)
```tsx
(option: IDetectDepthOption) => void
```
参数类型option`IDetectDepthOption`
### detectFace[​](VKSession.html#detectface)
静态图像人脸关键点检测。当 Taro.createVKSession 参数传入 {track: {face: {mode: 2} } } 时可用。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectFace.html)
```tsx
(option: IDetectFaceOption) => void
```
参数类型option`IDetectFaceOption`
### detectHand[​](VKSession.html#detecthand)
静态图像手势关键点检测。当 Taro.createVKSession 参数传入 {track: {hand: {mode: 2} } } 时可用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.detectHand.html)
```tsx
(option: IDetectHandOption) => void
```
参数类型option`IDetectHandOption`
### getAllMarker[​](VKSession.html#getallmarker)
获取所有 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllMarker.html)
```tsx
() => IMarker[]
```

### getAllOSDMarker[​](VKSession.html#getallosdmarker)
获取所有 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getAllOSDMarker.html)
```tsx
() => IOSDMarker[]
```

### getVKFrame[​](VKSession.html#getvkframe)
获取帧对象，每调用一次都会触发一次帧分析过程
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.getVKFrame.html)
```tsx
(width: number, height: number) => VKFrame
```
参数类型说明width`number`宽度height`number`高度
### hitTest[​](VKSession.html#hittest)
触摸检测，v1 版本只支持单平面（即 hitTest 生成一次平面后，后续 hitTest 均不会再生成平面，而是以之前生成的平面为基础进行检测）。
如果需要重新识别其他平面，可以在调用此方法时将 reset 参数置为 true。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.hitTest.html)
```tsx
(x: number, y: number, reset?: boolean) => IHitTestResult[]
```
参数类型说明x`number`相对视窗的横坐标，取值范围为 [0, 1]，0 为左边缘，1 为右边缘y`number`相对视窗的纵坐标，取值范围为 [0, 1]，0 为上边缘，1 为下边缘reset`boolean`是否需要重新识别其他平面，v2 版本不再需要此参数
### off[​](VKSession.html#off)
取消监听会话事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.off.html)
```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称fn`TaroGeneral.EventCallback`事件监听函数
### on[​](VKSession.html#on)
监听会话事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.on.html)
```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称fn`TaroGeneral.EventCallback`事件监听函数
### removeMarker[​](VKSession.html#removemarker)
删除一个 marker，要求调 Taro.createVKSession 时传入的 track.marker 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeMarker.html)
```tsx
(markerId: number) => number
```
参数类型说明markerId`number`marker id
### removeOSDMarker[​](VKSession.html#removeosdmarker)
删除一个 OSD marker，要求调 Taro.createVKSession 时传入的 track.OSD 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.removeOSDMarker.html)
```tsx
(markerId: number) => number
```
参数类型说明markerId`number`marker id
### requestAnimationFrame[​](VKSession.html#requestanimationframe)
在下次进行重绘时执行。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.requestAnimationFrame.html)
```tsx
(callback: TaroGeneral.TFunc) => number
```
参数类型说明callback`TaroGeneral.TFunc`执行函数
### runOCR[​](VKSession.html#runocr)
静态图像 OCR 检测。当 Taro.createVKSession 参数传入 {track: {OCR: {mode: 2} } } 时可用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.runOCR.html)
```tsx
(option: IRunOCROption) => void
```
参数类型option`IRunOCROption`
### start[​](VKSession.html#start)
开启会话。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.start.html)
```tsx
(callback: (status: keyof IStartStatus) => void) => void
```
参数类型说明callback`(status: keyof IStartStatus) => void`开启会话回调
### stop[​](VKSession.html#stop)
停止会话。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.stop.html)
```tsx
() => void
```

### update3DMode[​](VKSession.html#update3dmode)
开启 3D 模式
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.update3DMode.html)
```tsx
(open3d: boolean) => void
```
参数类型说明open3d`boolean`是否开启
### updateOSDThreshold[​](VKSession.html#updateosdthreshold)
更新 OSD 识别精确度，要求调 Taro.createVKSession 时传入的 track.OSD 为 true
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKSession.updateOSDThreshold.html)
```tsx
(threshold: number) => void
```
参数类型说明threshold`number`阈值
## 参数[​](VKSession.html#参数)
### IState[​](VKSession.html#istate)
state 的合法值
参数说明0不可用1运行中2暂停中3初始化中
### IConfig[​](VKSession.html#iconfig)
会话配置
参数类型说明version`keyof IVersion`不可用track`ITrack`运行中marker`boolean`marker 跟踪配置，基础库(3.0.0)开始允许同时支持v2的水平面检测能力OSD`boolean`OSD 跟踪配置depth`IDepth`深度识别配置face`IFace`人脸检测配置。安卓微信8.0.25开始支持，iOS微信8.0.24开始支持。OCR`IOCR`OCR 检测配置。body`IBody`人体检测配置。hand`IHand`手势检测配置。threeDof`boolean`提供基础AR功能，输出相机旋转的3个自由度的位姿，利用手机陀螺仪传感器，实现快速稳定的AR定位能力，适用于简单AR场景。gl`WebGLRenderingContext`绑定的 WebGLRenderingContext 对象
### IVersion[​](VKSession.html#iversion)
vision kit 版本
参数说明v1旧版本v2v2 版本，目前只有 iOS 基础库 2.22.0 以上支持
### ITrack[​](VKSession.html#itrack)
跟踪配置
参数类型说明plane`IPlane`平面跟踪配置
### IPlane[​](VKSession.html#iplane)
平面跟踪配置
参数类型说明mode`keyof IPlaneMode`平面跟踪配置模式
### IPlaneMode[​](VKSession.html#iplanemode)
平面跟踪配置模式合法值
参数说明1检测横向平面2检测纵向平面，只有 v2 版本支持3检测横向和纵向平面，只有 v2 版本支持
### IDepth[​](VKSession.html#idepth)
深度识别配置
参数类型mode`keyof IDepthMode`
### IDepthMode[​](VKSession.html#idepthmode)
深度识别模式
参数说明1通过摄像头实时检测2静态图片检测
### IFace[​](VKSession.html#iface)
人脸检测模式
参数类型mode`keyof IFaceMode`
### IFaceMode[​](VKSession.html#ifacemode)
人脸检测模式
参数说明1通过摄像头实时检测2静态图片检测
### IOCR[​](VKSession.html#iocr)
OCR 检测配置
参数类型mode`keyof IOCRMode`
### IOCRMode[​](VKSession.html#iocrmode)
OCR 检测模式
参数说明1通过摄像头实时检测2静态图片检测
### IBody[​](VKSession.html#ibody)
人体检测模式
参数类型mode`keyof IBodyMode`
### IBodyMode[​](VKSession.html#ibodymode)
人体检测模式
参数说明1通过摄像头实时检测2静态图片检测
### IHand[​](VKSession.html#ihand)
手势检测配置
参数类型mode`keyof IHandMode`
### IHandMode[​](VKSession.html#ihandmode)
手势检测模式
参数说明1通过摄像头实时检测2静态图片检测
### ISize[​](VKSession.html#isize)
相机尺寸
参数类型说明width`number`宽度height`number`高度
### IDetectBodyOption[​](VKSession.html#idetectbodyoption)
参数类型必填说明frameBuffer`ArrayBuffer`是人脸图像像素点数据，每四项表示一个像素点的 RGBAwidth`number`是图像宽度height`number`是图像高度scoreThreshold`number`否评分阈值。正常情况传入 0.8 即可。默认值 0.8sourceType`keyof ISourceType`否图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1
### ISourceType[​](VKSession.html#isourcetype)
图像源类型。
参数说明1表示输入的图片是随机的图片0表示输入的图片是来自一个连续视频的每一帧图像
### IDetectDepthOption[​](VKSession.html#idetectdepthoption)
参数类型说明frameBuffer`ArrayBuffer`人需要识别深度的图像像素点数据，每四项表示一个像素点的 RGBAwidth`number`图像宽度height`number`图像高度
### IDetectFaceOption[​](VKSession.html#idetectfaceoption)
参数类型必填说明frameBuffer`ArrayBuffer`是人脸图像像素点数据，每四项表示一个像素点的 RGBAwidth`number`是图像宽度height`number`是图像高度scoreThreshold`number`否评分阈值。正常情况传入 0.8 即可。默认值 0.8sourceType`keyof ISourceType`否图像源类型。正常情况传入 1 即可。当输入的图片是来自一个连续视频的每一帧图像时，sourceType 传入 0 会得到更优的效果。默认值1modelModel`keyof IModelModel`否算法模型类型。正常情况传入 1 即可。0、1、2 分别表示小、中、大模型，模型越大识别准确率越高，但资源占用也越高。建议根据用户设备性能进行选择。
### IModelModel[​](VKSession.html#imodelmodel)
算法模型类型
参数说明0小模型1中模型2大模型
### IDetectHandOption[​](VKSession.html#idetecthandoption)
参数类型必填说明frameBuffer`ArrayBuffer`是人脸图像像素点数据，每四项表示一个像素点的 RGBAwidth`number`是图像宽度height`number`是图像高度scoreThreshold`number`否评分阈值。正常情况传入 0.8 即可。默认值0.8algoMode`keyof IAlgoMode`否算法检测模式
### IAlgoMode[​](VKSession.html#ialgomode)
算法检测模式
参数说明0检测模式，输出框和点1手势模式，输出框和手势分类2结合0和1模式，输出框、点、手势分类
### IMarker[​](VKSession.html#imarker)
参数类型说明markerId`number`marker idpath`string`图片路径
### IOSDMarker[​](VKSession.html#iosdmarker)
OSD marker
参数类型说明markerId`number`marker idpath`string`图片路径
### IRunOCROption[​](VKSession.html#irunocroption)
参数类型说明frameBuffer`ArrayBuffer`待识别图像的像素点数据，每四项表示一个像素点的 RGBAwidth`number`图像宽度height`number`图像高度
### IHitTestResult[​](VKSession.html#ihittestresult)
hitTest 检测结果
参数类型说明transform`Float32Array`包含位置、旋转、放缩信息的矩阵，以列为主序
### IStartStatus[​](VKSession.html#istartstatus)
start status 的合法值
参数说明0成功2000000系统错误2000001参数错误2000002设备不支持2000003系统不支持2003000会话不可用2003001未开启系统相机权限2003002未开启小程序相机权限
## API 支持度[​](VKSession.html#api-支持度)
API微信小程序H5React NativeHarmonyVKSession✔️VKSession.addMarker✔️VKSession.addOSDMarker✔️VKSession.cancelAnimationFrame✔️VKSession.destroy✔️VKSession.detectBody✔️VKSession.detectDepth✔️VKSession.detectFace✔️VKSession.detectHand✔️VKSession.getAllMarker✔️VKSession.getAllOSDMarker✔️VKSession.getVKFrame✔️VKSession.hitTest✔️VKSession.off✔️VKSession.on✔️VKSession.removeMarker✔️VKSession.removeOSDMarker✔️VKSession.requestAnimationFrame✔️VKSession.runOCR✔️VKSession.start✔️VKSession.stop✔️VKSession.update3DMode✔️VKSession.updateOSDThreshold✔️
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
