# Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被CanvasRenderingContext2D 对象使用。CanvasRenderingContext2D 接口的 路径方法 也存在于 Path2D 这个接口中，允许你在 canvas 中根据需要创建可以保留并重用的路径。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html)
## 方法[​](Path2D.html#方法)
### addPath[​](Path2D.html#addpath)
添加路径到当前路径。
支持情况：!!!!
```tsx
(path: Path2D) => void
```
参数类型说明path`Path2D`添加的 Path2D 路径
### arc[​](Path2D.html#arc)
添加一段圆弧路径
支持情况：!!!!
```tsx
(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean) => void
```
参数类型说明x`number`圆心横坐标y`number`圆心纵坐标radius`number`圆形半径，必须为正数startAngle`number`圆弧开始角度endAngle`number`圆弧结束角度counterclockwise`boolean`是否逆时针绘制。如果传 true, 则会从 endAngle 开始绘制到 startAngle
### arcTo[​](Path2D.html#arcto)
通过给定控制点添加一段圆弧路径
支持情况：!!!!
```tsx
(x1: number, y1: number, x2: number, y2: number, radius: number) => void
```
参数类型说明x1`number`第一个控制点横坐标y1`number`第一个控制点纵坐标x2`number`第二个控制点横坐标y2`number`第二个控制点纵坐标radius`number`圆形半径，必须为非负数
### bezierCurveTo[​](Path2D.html#beziercurveto)
添加三次贝塞尔曲线路径
支持情况：!!!!
```tsx
(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void
```
参数类型说明cp1x`number`第一个控制点横坐标cp1y`number`第一个控制点纵坐标cp2x`number`第二个控制点横坐标cp2y`number`第二个控制点纵坐标x`number`结束点横坐标y`number`结束点纵坐标
### closePath[​](Path2D.html#closepath)
闭合路径到起点
支持情况：!!!!
```tsx
() => void
```

### ellipse[​](Path2D.html#ellipse)
添加椭圆弧路径
支持情况：!!!!
```tsx
(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise: boolean) => void
```
参数类型说明x`number`椭圆圆心横坐标y`number`椭圆圆心纵坐标radiusX`number`椭圆长轴半径，必须为非负数radiusY`number`椭圆短轴半径，必须为非负数rotation`number`椭圆旋转角度startAngle`number`圆弧开始角度endAngle`number`圆弧结束角度counterclockwise`boolean`是否逆时针绘制。如果传 true, 则会从 endAngle 开始绘制到 startAngle
### lineTo[​](Path2D.html#lineto)
添加直线路径
支持情况：!!!!
```tsx
(x: number, y: number) => void
```
参数类型说明x`number`结束点横坐标y`number`结束点纵坐标
### moveTo[​](Path2D.html#moveto)
移动路径开始点
支持情况：!!!!
```tsx
(x: number, y: number) => void
```
参数类型说明x`number`横坐标y`number`纵坐标
### quadraticCurveTo[​](Path2D.html#quadraticcurveto)
添加二次贝塞尔曲线路径
支持情况：!!!!
```tsx
(cpx: number, cpy: number, x: number, y: number) => void
```
参数类型说明cpx`number`控制点横坐标cpy`number`控制点纵坐标x`number`结束点横坐标y`number`结束点纵坐标
### rect[​](Path2D.html#rect)
添加方形路径
支持情况：!!!!
```tsx
(x: number, y: number, width: number, height: number) => void
```
参数类型说明x`number`开始点横坐标y`number`开始点纵坐标width`number`方形宽度，正数向右，负数向左height`number`方形高度，正数向下，负数向上
## API 支持度[​](Path2D.html#api-支持度)
API微信小程序H5React NativeHarmonyPath2D✔️Path2D.addPath✔️Path2D.arc✔️Path2D.arcTo✔️Path2D.bezierCurveTo✔️Path2D.closePath✔️Path2D.ellipse✔️Path2D.lineTo✔️Path2D.moveTo✔️Path2D.quadraticCurveTo✔️Path2D.rect✔️
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
