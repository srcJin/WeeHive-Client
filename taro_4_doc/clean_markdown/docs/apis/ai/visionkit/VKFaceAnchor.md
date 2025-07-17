# 人脸 anchor
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFaceAnchor.html)
## 方法[​](VKFaceAnchor.html#方法)
参数类型说明id`number`唯一标识type`3`类型detectId`number`识别序号origin`IOrigin`相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘size`ISize`相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘points`IPoint[]`人脸 106 个关键点的坐标angle`number[]`人脸角度信息confidence`number`关键点的置信度
## 参数[​](VKFaceAnchor.html#参数)
### IType[​](VKFaceAnchor.html#itype)
类型
参数说明3人脸
### ISize[​](VKFaceAnchor.html#isize)
相对视窗的尺寸
参数类型说明width`number`宽度height`number`高度
### IOrigin[​](VKFaceAnchor.html#iorigin)
相对视窗的位置信息
参数类型说明x`number`横坐标y`number`纵坐标
### IPoint[​](VKFaceAnchor.html#ipoint)
关键点
参数类型说明x`number`横坐标y`number`纵坐标
## API 支持度[​](VKFaceAnchor.html#api-支持度)
API微信小程序H5React NativeHarmonyVKFaceAnchor✔️
- 
- 

- 
- 
- 
- 

-
