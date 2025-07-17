# 人脸识别，使用前需要通过 Taro.initFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/face/wx.faceDetect.html)
## 类型[​](faceDetect.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](faceDetect.html#参数)
参数类型option`Option`
### Option[​](faceDetect.html#option)
参数类型默认值必填说明frameBuffer`ArrayBuffer`是图像像素点数据，每四项表示一个像素点的 RGBAwidth`number`是图像宽度height`number`是图像高度enablePoint`boolean``false`否是否返回当前图像的人脸（106 个点）enableConf`boolean``false`否是否返回当前图像的人脸的置信度（可表示器官遮挡情况）enableAngle`boolean``false`否是否返回当前图像的人脸角度信息enableMultiFace`boolean``false`否是否返回多张人脸的信息complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackOption) => void`否接口调用成功的回调函数
### SuccessCallbackOption[​](faceDetect.html#successcallbackoption)
参数类型必填说明faceInfo`face`否多人模式（enableMultiFace）下的人脸信息，每个对象包含上述其它属性
### face[​](faceDetect.html#face)
参数类型说明detectRect`detectRect`脸部正方框数值，对象包含 height, weight, originX, originY 四个属性x`number`脸部中心点横坐标，检测不到人脸则为 -1y`number`脸部中心点纵坐标，检测不到人脸则为 -1pointArray`point[]`人脸 106 个点位置数组，数组每个对象包含 x 和 yconfArray`conf[]`人脸置信度，取值范围 [0, 1]，数值越大置信度越高（遮挡越少）angleArray`angle[]`人脸角度信息，取值范围 [-1, 1]，数值越接近 0 表示越正对摄像头
### detectRect[​](faceDetect.html#detectrect)
脸部正方框数值
参数类型height`number`weight`number`originX`number`originY`number`
### point[​](faceDetect.html#point)
参数类型x`number`y`number`
### conf[​](faceDetect.html#conf)
参数类型说明global`number`整体可信度leftEye`number`左眼可信度rightEye`number`右眼可信度mouth`number`嘴巴可信度nose`number`鼻子可信度
### angle[​](faceDetect.html#angle)
参数类型说明pitch`number`仰俯角（点头）yaw`number`偏航角（摇头）roll`number`翻滚角（左右倾）
- 
- 

- 
- 
- 
- 
- 
- 
-
