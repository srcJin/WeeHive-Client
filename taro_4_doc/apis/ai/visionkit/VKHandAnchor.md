# 手势 anchor
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKHandAnchor.html)
## 方法[​](VKHandAnchor.html#方法)
参数类型说明id`number`唯一标识type`7`类型detectId`number`识别序号size`ISize`相对视窗的尺寸，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘origin`IOrigin`相对视窗的位置信息，取值范围为 [0, 1]，0 为左/上边缘，1 为右/下边缘confidence`number[]`关键点的置信度points`IPoint[]`关键点score`number`总体置信值gesturekeyof IGesture or -1手势分类, 返回整数 -1 到 18, -1 表示无效手势
## 参数[​](VKHandAnchor.html#参数)
### IType[​](VKHandAnchor.html#itype)
类型
参数说明7手势
### ISize[​](VKHandAnchor.html#isize)
相对视窗的尺寸
参数类型说明width`number`宽度height`number`高度
### IOrigin[​](VKHandAnchor.html#iorigin)
相对视窗的位置信息
参数类型说明x`number`横坐标y`number`纵坐标
### IPoint[​](VKHandAnchor.html#ipoint)
关键点
参数类型说明x`number`横坐标y`number`纵坐标
### IGesture[​](VKHandAnchor.html#igesture)
手势分类
参数说明0单手比心1布（数字5）2剪刀（数字2）3握拳4数字15热爱6点赞7数字38摇滚9数字610数字811双手抱拳（恭喜发财）12数字413比ok14不喜欢（踩）15双手比心16祈祷（双手合十）17双手抱拳18无手势动作
## API 支持度[​](VKHandAnchor.html#api-支持度)
API微信小程序H5React NativeHarmonyVKHandAnchor✔️
- 
- 

- 
- 
- 
- 
- 

-
