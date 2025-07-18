# 动画对象
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.html)
## 方法[​](index.html#方法)
### export[​](index.html#export)
导出动画队列。**export 方法每次调用后会清掉之前的动画操作**。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.export.html)
```tsx
() => { actions: TaroGeneral.IAnyObject[]; }
```

### step[​](index.html#step)
表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.step.html)
```tsx
(option?: StepOption) => Animation
```
参数类型option`StepOption`
### matrix[​](index.html#matrix)
同 [transform-function matrix](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix)
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix.html)
```tsx
(a: number, b: number, c: number, d: number, tx: number, ty: number) => Animation
```
参数类型a`number`b`number`c`number`d`number`tx`number`ty`number`
### matrix3d[​](index.html#matrix3d)
同 [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d)
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.matrix3d.html)
```tsx
(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, c3: number, d3: number, a4: number, b4: number, c4: number, d4: number) => Animation
```
参数类型a1`number`b1`number`c1`number`d1`number`a2`number`b2`number`c2`number`d2`number`a3`number`b3`number`c3`number`d3`number`a4`number`b4`number`c4`number`d4`number`
### rotate[​](index.html#rotate)
从原点顺时针旋转一个角度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`旋转的角度。范围 [-180, 180]
### rotate3d[​](index.html#rotate3d)
从 固定 轴顺时针旋转一个角度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotate3d.html)
```tsx
(x: number, y?: number, z?: number, angle?: number) => Animation
```
参数类型说明x`number`旋转轴的 x 坐标y`number`旋转轴的 y 坐标z`number`旋转轴的 z 坐标angle`number`旋转的角度。范围 [-180, 180]
### rotateX[​](index.html#rotatex)
从 X 轴顺时针旋转一个角度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateX.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`旋转的角度。范围 [-180, 180]
### rotateY[​](index.html#rotatey)
从 Y 轴顺时针旋转一个角度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateY.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`旋转的角度。范围 [-180, 180]
### rotateZ[​](index.html#rotatez)
从 Z 轴顺时针旋转一个角度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.rotateZ.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`旋转的角度。范围 [-180, 180]
### scale[​](index.html#scale)
缩放
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale.html)
```tsx
(sx: number, sy?: number) => Animation
```
参数类型说明sx`number`当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放sx倍数sy`number`在 Y 轴缩放 sy 倍数
### scale3d[​](index.html#scale3d)
缩放
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scale3d.html)
```tsx
(sx: number, sy: number, sz: number) => Animation
```
参数类型说明sx`number`x 轴的缩放倍数sy`number`y 轴的缩放倍数sz`number`z 轴的缩放倍数
### scaleX[​](index.html#scalex)
缩放 X 轴
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleX.html)
```tsx
(scale: number) => Animation
```
参数类型说明scale`number`X 轴的缩放倍数
### scaleY[​](index.html#scaley)
缩放 Y 轴
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleY.html)
```tsx
(scale: number) => Animation
```
参数类型说明scale`number`Y 轴的缩放倍数
### scaleZ[​](index.html#scalez)
缩放 Z 轴
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.scaleZ.html)
```tsx
(scale: number) => Animation
```
参数类型说明scale`number`Z 轴的缩放倍数
### skew[​](index.html#skew)
对 X、Y 轴坐标进行倾斜
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skew.html)
```tsx
(ax: number, ay: number) => Animation
```
参数类型说明ax`number`对 X 轴坐标倾斜的角度，范围 [-180, 180]ay`number`对 Y 轴坐标倾斜的角度，范围 [-180, 180]
### skewX[​](index.html#skewx)
对 X 轴坐标进行倾斜
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewX.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`倾斜的角度，范围 [-180, 180]
### skewY[​](index.html#skewy)
对 Y 轴坐标进行倾斜
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.skewY.html)
```tsx
(angle: number) => Animation
```
参数类型说明angle`number`倾斜的角度，范围 [-180, 180]
### translate[​](index.html#translate)
平移变换
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate.html)
```tsx
(tx?: number, ty?: number) => Animation
```
参数类型说明tx`number`当仅有该参数时表示在 X 轴偏移 tx，单位 pxty`number`在 Y 轴平移的距离，单位为 px
### translate3d[​](index.html#translate3d)
对 xyz 坐标进行平移变换
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translate3d.html)
```tsx
(tx?: number, ty?: number, tz?: number) => Animation
```
参数类型说明tx`number`在 X 轴平移的距离，单位为 pxty`number`在 Y 轴平移的距离，单位为 pxtz`number`在 Z 轴平移的距离，单位为 px
### translateX[​](index.html#translatex)
对 X 轴平移
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateX.html)
```tsx
(translation: number) => Animation
```
参数类型说明translation`number`在 X 轴平移的距离，单位为 px
### translateY[​](index.html#translatey)
对 Y 轴平移
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateY.html)
```tsx
(translation: number) => Animation
```
参数类型说明translation`number`在 Y 轴平移的距离，单位为 px
### translateZ[​](index.html#translatez)
对 Z 轴平移
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.translateZ.html)
```tsx
(translation: number) => Animation
```
参数类型说明translation`number`在 Z 轴平移的距离，单位为 px
### opacity[​](index.html#opacity)
设置透明度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.opacity.html)
```tsx
(value: number) => Animation
```
参数类型说明value`number`透明度，范围 0-1
### backgroundColor[​](index.html#backgroundcolor)
设置背景色
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.backgroundColor.html)
```tsx
(value: string) => Animation
```
参数类型说明value`string`颜色值
### width[​](index.html#width)
设置宽度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.width.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
### height[​](index.html#height)
设置高度
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.height.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
### left[​](index.html#left)
设置 left 值
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.left.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
### right[​](index.html#right)
设置 right 值
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.right.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
### top[​](index.html#top)
设置 top 值
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.top.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
### bottom[​](index.html#bottom)
设置 bottom 值
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/Animation.bottom.html)
```tsx
(value: string | number) => Animation
```
参数类型说明valuestring or number长度值，如果传入 number 则默认使用 px，可传入其他自定义单位的长度值
## 参数[​](index.html#参数)
### StepOption[​](index.html#stepoption)
参数类型必填说明delay`number`否动画延迟时间，单位 msduration`number`否动画持续时间，单位 mstimingFunction`keyof TimingFunction`否动画的效果transformOrigin`string`否
### TimingFunction[​](index.html#timingfunction)
参数说明linear动画从头到尾的速度是相同的ease动画以低速开始，然后加快，在结束前变慢ease-in动画以低速开始ease-in-out动画以低速开始和结束ease-out动画以低速结束step-start动画第一帧就跳至结束状态直到结束step-end动画一直保持开始状态，最后一帧跳到结束状态
## API 支持度[​](index.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyHarmony hybridAnimation✔️✔️✔️✔️Animation.export✔️✔️✔️✔️Animation.step✔️✔️✔️✔️Animation.matrix✔️✔️✔️✔️Animation.matrix3d✔️✔️✔️✔️Animation.rotate✔️✔️✔️✔️Animation.rotate3d✔️✔️✔️✔️Animation.rotateX✔️✔️✔️✔️Animation.rotateY✔️✔️✔️✔️Animation.rotateZ✔️✔️✔️✔️Animation.scale✔️✔️✔️✔️Animation.scale3d✔️✔️✔️✔️Animation.scaleX✔️✔️✔️✔️Animation.scaleY✔️✔️✔️✔️Animation.scaleZ✔️✔️✔️✔️Animation.skew✔️✔️✔️✔️Animation.skewX✔️✔️✔️✔️Animation.skewY✔️✔️✔️✔️Animation.translate✔️✔️✔️✔️Animation.translate3d✔️✔️✔️✔️Animation.translateX✔️✔️✔️✔️Animation.translateY✔️✔️✔️✔️Animation.translateZ✔️✔️✔️✔️Animation.opacity✔️✔️✔️✔️Animation.backgroundColor✔️✔️✔️✔️Animation.width✔️✔️✔️✔️Animation.height✔️✔️✔️✔️Animation.left✔️✔️✔️✔️Animation.right✔️✔️✔️✔️Animation.top✔️✔️✔️✔️Animation.bottom✔️✔️✔️✔️
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
