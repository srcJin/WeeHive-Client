# 人体 anchor
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKBodyAnchor.html)
## 方法[​](VKBodyAnchor.html#方法)
参数类型说明id`number`唯一标识type`5`类型detectId`number`识别序号size`ISize`相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘origin`IOrigin`相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘confidence`number[]`关键点的置信度points`IPoint[]`关键点score`number`总体置信值
## 参数[​](VKBodyAnchor.html#参数)
### IType[​](VKBodyAnchor.html#itype)
类型
参数说明5人体
### ISize[​](VKBodyAnchor.html#isize)
相对视窗的尺寸
参数类型说明width`number`宽度height`number`高度
### IOrigin[​](VKBodyAnchor.html#iorigin)
相对视窗的位置信息
参数类型说明x`number`横坐标y`number`纵坐标
### IPoint[​](VKBodyAnchor.html#ipoint)
关键点
参数类型说明x`number`横坐标y`number`纵坐标
## API 支持度[​](VKBodyAnchor.html#api-支持度)
API微信小程序H5React NativeHarmonyVKBodyAnchor✔️
- 
- 

- 
- 
- 
- 

-
