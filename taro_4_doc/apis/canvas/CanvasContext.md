# canvas 组件的绘图上下文
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.html)
## 方法[​](CanvasContext.html#方法)
参数类型说明fillStyle`string`填充颜色。用法同 [CanvasContext.setFillStyle()]。strokeStyle`string`边框颜色。用法同 [CanvasContext.setFillStyle()]。shadowOffsetX`number`阴影相对于形状在水平方向的偏移shadowOffsetY`number`阴影相对于形状在竖直方向的偏移shadowBlur`number`阴影的模糊级别shadowColor`string`阴影的颜色lineWidth`number`线条的宽度。用法同 [CanvasContext.setLineWidth()]。lineCap`keyof LineCap`线条的端点样式。用法同 [CanvasContext.setLineCap()]。lineJoin`keyof LineJoin`线条的交点样式。用法同 [CanvasContext.setLineJoin()]。miterLimit`number`最大斜接长度。用法同 [CanvasContext.setMiterLimit()]。lineDashOffset`number`虚线偏移量，初始值为0font`string`当前字体样式的属性。符合 [CSS font 语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 的 DOMString 字符串，至少需要提供字体大小和字体族名。默认值为 10px sans-serif。globalAlpha`number`全局画笔透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。globalCompositeOperation`string`在绘制新形状时应用的合成操作的类型。目前安卓版本只适用于 `fill` 填充块的合成，用于 `stroke` 线段的合成效果都是 `source-over`。

目前支持的操作有
- 安卓：xor, source-over, source-atop, destination-out, lighter, overlay, darken, lighten, hard-light
- iOS：xor, source-over, source-atop, destination-over, destination-out, lighter, multiply, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, saturation, luminosity
### arc[​](CanvasContext.html#arc)
创建一条弧线。

- 创建一个圆可以指定起始弧度为 0，终止弧度为 2 * Math.PI。
- 用 `stroke` 或者 `fill` 方法来在 `canvas` 中画弧线。
针对 arc(100, 75, 50, 0, 1.5 * Math.PI)的三个关键坐标如下：

- 绿色: 圆心 (100, 75)
- 红色: 起始弧度 (0)
- 蓝色: 终止弧度 (1.5 * Math.PI)
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arc.html)
```tsx
(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean, anticlockwise?: boolean) => void
```
参数类型说明x`number`圆心的 x 坐标y`number`圆心的 y 坐标r`number`圆的半径sAngle`number`起始弧度，单位弧度（在3点钟方向）eAngle`number`终止弧度counterclockwise`boolean`弧度的方向是否是逆时针anticlockwise`boolean`弧度的方向是否是逆时针
API 支持度: tt
#### 示例代码[​](CanvasContext.html#示例代码)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Draw coordinates
ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()
ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()
ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)
// Draw points
ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()
ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()
ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()
// Draw arc
ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()
ctx.draw()
```

### arcTo[​](CanvasContext.html#arcto)
根据控制点和半径绘制圆弧路径。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arcTo.html)
```tsx
(x1: number, y1: number, x2: number, y2: number, radius: number) => void
```
参数类型说明x1`number`第一个控制点的 x 轴坐标y1`number`第一个控制点的 y 轴坐标x2`number`第二个控制点的 x 轴坐标y2`number`第二个控制点的 y 轴坐标radius`number`圆弧的半径
### beginPath[​](CanvasContext.html#beginpath)
开始创建一个路径。需要调用 `fill` 或者 `stroke` 才会使用路径进行填充或描边

- 在最开始的时候相当于调用了一次 `beginPath`。
- 同一个路径内的多次 `setFillStyle`、`setStrokeStyle`、`setLineWidth`等设置，以最后一次设置为准。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.beginPath.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-1)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()
// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)
// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)
ctx.rect(10, 100, 100, 30)
// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

### bezierCurveTo[​](CanvasContext.html#beziercurveto)
创建三次方贝塞尔曲线路径。曲线的起始点为路径中前一个点。
针对 moveTo(20, 20) bezierCurveTo(20, 100, 200, 100, 200, 20) 的三个关键坐标如下：

- 红色：起始点(20, 20)
- 蓝色：两个控制点(20, 100) (200, 100)
- 绿色：终止点(200, 20)
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.bezierCurveTo.html)
```tsx
(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void
```
参数类型说明cp1x`number`第一个贝塞尔控制点的 x 坐标cp1y`number`第一个贝塞尔控制点的 y 坐标cp2x`number`第二个贝塞尔控制点的 x 坐标cp2y`number`第二个贝塞尔控制点的 y 坐标x`number`结束点的 x 坐标y`number`结束点的 y 坐标
#### 示例代码[​](CanvasContext.html#示例代码-2)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()
ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()
ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()
ctx.setFillStyle('black')
ctx.setFontSize(12)
// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)
ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()
// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()
ctx.draw()
```

### clearRect[​](CanvasContext.html#clearrect)
清除画布上在该矩形区域内的内容
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clearRect.html)
```tsx
(x: number, y: number, width: number, height: number) => void
```
参数类型说明x`number`矩形路径左上角的横坐标y`number`矩形路径左上角的纵坐标width`number`矩形路径的宽度height`number`矩形路径的高度
#### 示例代码[​](CanvasContext.html#示例代码-3)
clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，对 canvas 加了一层背景色。
```html
<canvas canvas-id="myCanvas" style="border: 1px solid; background: #123456;"/>
tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(0, 0, 150, 200)
ctx.setFillStyle('blue')
ctx.fillRect(150, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```

### clip[​](CanvasContext.html#clip)
从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 `clip` 方法前通过使用 `save` 方法对当前画布区域进行保存，并在以后的任意时间通过`restore`方法对其进行恢复。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.clip.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-4)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
Taro.downloadFile({
 url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
 success: function(res) {
 ctx.save()
 ctx.beginPath()
 ctx.arc(50, 50, 25, 0, 2*Math.PI)
 ctx.clip()
 ctx.drawImage(res.tempFilePath, 25, 25)
 ctx.restore()
 ctx.draw()
 }
})
```

### closePath[​](CanvasContext.html#closepath)
关闭一个路径。会连接起点和终点。如果关闭路径后没有调用 `fill` 或者 `stroke` 并开启了新的路径，那之前的路径将不会被渲染。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.closePath.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-5)
##### 示例 1[​](CanvasContext.html#示例-1)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.closePath()
ctx.stroke()
ctx.draw()
```

##### 示例 2[​](CanvasContext.html#示例-2)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.closePath()
// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)
// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)
ctx.rect(10, 100, 100, 30)
// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

### createCircularGradient[​](CanvasContext.html#createcirculargradient)
创建一个圆形的渐变颜色。起点在圆心，终点在圆环。返回的`CanvasGradient`对象需要使用 [CanvasGradient.addColorStop()](CanvasGradient.html#addcolorstop) 来指定渐变点，至少要两个。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createCircularGradient.html)
```tsx
(x: number, y: number, r: number) => CanvasGradient
```
参数类型说明x`number`圆心的 x 坐标y`number`圆心的 y 坐标r`number`圆的半径
#### 示例代码[​](CanvasContext.html#示例代码-6)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Create circular gradient
const grd = ctx.createCircularGradient(75, 50, 50)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')
// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

### createLinearGradient[​](CanvasContext.html#createlineargradient)
创建一个线性的渐变颜色。返回的`CanvasGradient`对象需要使用 [CanvasGradient.addColorStop()](CanvasGradient.html#addcolorstop) 来指定渐变点，至少要两个。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createLinearGradient.html)
```tsx
(x0: number, y0: number, x1: number, y1: number) => CanvasGradient
```
参数类型说明x0`number`起点的 x 坐标y0`number`起点的 y 坐标x1`number`终点的 x 坐标y1`number`终点的 y 坐标
#### 示例代码[​](CanvasContext.html#示例代码-7)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Create linear gradient
const grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, 'red')
grd.addColorStop(1, 'white')
// Fill with gradient
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```

### createPattern[​](CanvasContext.html#createpattern)
对指定的图像创建模式的方法，可在指定的方向上重复元图像
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.createPattern.html)
```tsx
(image: string, repetition: keyof Repetition) => CanvasPattern | Promise<CanvasPattern>
```
参数类型说明image`string`重复的图像源，仅支持包内路径和临时路径repetition`keyof Repetition`如何重复图像
### draw[​](CanvasContext.html#draw)
将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
支持情况：!!!!!!!!!!
> H5: 第二次调用 draw 前需要等待上一次 draw 调用结束后再调用，否则新的一次 draw 调用栈不会清空而导致结果异常。

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.draw.html)
```tsx
(reserve?: boolean, callback?: (...args: any[]) => any, useHardwareAccelerate?: boolean) => void | Promise<void>
```
参数类型说明reserve`boolean`本次绘制是否接着上一次绘制。即 reserve 参数为 false，则在本次调用绘制之前 native 层会先清空画布再继续绘制；若 reserve 参数为 true，则保留当前画布上的内容，本次调用 drawCanvas 绘制的内容覆盖在上面，默认 false。callback`(...args: any[]) => any`绘制完成后执行的回调函数useHardwareAccelerate`boolean`是否使用硬件加速
API 支持度: jd
#### 示例代码[​](CanvasContext.html#示例代码-8)
##### 示例 1[​](CanvasContext.html#示例-1-1)
第二次 draw() reserve 为 true。所以保留了上一次的绘制结果，在上下文设置的 fillStyle 'red' 也变成了默认的 'black'。
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw(false, () => {
 ctx.fillRect(50, 50, 150, 100)
 ctx.draw(true)
})
```

##### 示例 2[​](CanvasContext.html#示例-2-1)
第二次 draw() reserve 为 false。所以没有保留了上一次的绘制结果和在上下文设置的 fillStyle 'red'。
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.draw(false, () => {
 ctx.fillRect(50, 50, 150, 100)
 ctx.draw()
})
```

### drawImage[​](CanvasContext.html#drawimage)
绘制图像到画布
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html)
```tsx
{ (imageResource: string, dx: number, dy: number): void; (imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number): void; (imageResource: string, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void; }
```
参数类型说明imageResource`string`所要绘制的图片资源（网络图片要通过 getImageInfo / downloadFile 先下载）sx`number`需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 x 坐标sy`number`需要绘制到画布中的，imageResource的矩形（裁剪）选择框的左上角 y 坐标sWidth`number`需要绘制到画布中的，imageResource的矩形（裁剪）选择框的宽度sHeight`number`需要绘制到画布中的，imageResource的矩形（裁剪）选择框的高度dx`number`imageResource的左上角在目标 canvas 上 x 轴的位置dy`number`imageResource的左上角在目标 canvas 上 y 轴的位置dWidth`number`在目标画布上绘制imageResource的宽度，允许对绘制的imageResource进行缩放dHeight`number`在目标画布上绘制imageResource的高度，允许对绘制的imageResource进行缩放
#### 示例代码[​](CanvasContext.html#示例代码-9)
##### 示例 1[​](CanvasContext.html#示例-1-2)
有三个版本的写法：

- drawImage(imageResource, dx, dy)
- drawImage(imageResource, dx, dy, dWidth, dHeight)
- drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
Taro.chooseImage({
 success: function(res){
 ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
 ctx.draw()
 }
})
```

##### 示例 2[​](CanvasContext.html#示例-2-2)
有三个版本的写法：

- drawImage(imageResource, dx, dy)
- drawImage(imageResource, dx, dy, dWidth, dHeight)
- drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
Taro.chooseImage({
 success: function(res){
 ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
 ctx.draw()
 }
})
```

##### 示例 3[​](CanvasContext.html#示例-3)
有三个版本的写法：

- drawImage(imageResource, dx, dy)
- drawImage(imageResource, dx, dy, dWidth, dHeight)
- drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
Taro.chooseImage({
 success: function(res){
 ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
 ctx.draw()
 }
})
```

### fill[​](CanvasContext.html#fill)
对当前路径中的内容进行填充。默认的填充色为黑色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fill.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-10)
##### 示例 1[​](CanvasContext.html#示例-1-3)
如果当前路径没有闭合，fill() 方法会将起点和终点进行连接，然后填充。
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.fill()
ctx.draw()
```

##### 示例 2[​](CanvasContext.html#示例-2-3)
fill() 填充的的路径是从 beginPath() 开始计算，但是不会将 fillRect() 包含进去。
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setFillStyle('yellow')
ctx.fill()
// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)
// only fill this rect, not in current path
ctx.setFillStyle('blue')
ctx.fillRect(10, 70, 100, 30)
ctx.rect(10, 100, 100, 30)
// it will fill current path
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

### fillRect[​](CanvasContext.html#fillrect)
填充一个矩形。用 [`setFillStyle`](CanvasContext.html#setfillstyle) 设置矩形的填充色，如果没设置默认是黑色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillRect.html)
```tsx
(x: number, y: number, width: number, height: number) => void
```
参数类型说明x`number`矩形路径左上角的横坐标y`number`矩形路径左上角的纵坐标width`number`矩形路径的宽度height`number`矩形路径的高度
#### 示例代码[​](CanvasContext.html#示例代码-11)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

### fillText[​](CanvasContext.html#filltext)
在画布上绘制被填充的文本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.fillText.html)
```tsx
(text: string, x: number, y: number, maxWidth?: number) => void
```
参数类型说明text`string`在画布上输出的文本x`number`绘制文本的左上角 x 坐标位置y`number`绘制文本的左上角 y 坐标位置maxWidth`number`需要绘制的最大宽度，可选
#### 示例代码[​](CanvasContext.html#示例代码-12)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFontSize(20)
ctx.fillText('Hello', 20, 20)
ctx.fillText('MINA', 100, 100)
ctx.draw()
```

### lineTo[​](CanvasContext.html#lineto)
增加一个新点，然后创建一条从上次指定点到目标点的线。用 `stroke` 方法来画线条
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.lineTo.html)
```tsx
(x: number, y: number) => void
```
参数类型说明x`number`目标位置的 x 坐标y`number`目标位置的 y 坐标
#### 示例代码[​](CanvasContext.html#示例代码-13)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.rect(10, 10, 100, 50)
ctx.lineTo(110, 60)
ctx.stroke()
ctx.draw()
```

### measureText[​](CanvasContext.html#measuretext)
测量文本尺寸信息。目前仅返回文本宽度(width)。同步接口。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.measureText.html)
```tsx
(text: string) => TextMetrics
```
参数类型说明text`string`要测量的文本
### moveTo[​](CanvasContext.html#moveto)
把路径移动到画布中的指定点，不创建线条。用 `stroke` 方法来画线条
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.moveTo.html)
```tsx
(x: number, y: number) => void
```
参数类型说明x`number`目标位置的 x 坐标y`number`目标位置的 y 坐标
#### 示例代码[​](CanvasContext.html#示例代码-14)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.moveTo(10, 50)
ctx.lineTo(100, 50)
ctx.stroke()
ctx.draw()
```

### quadraticCurveTo[​](CanvasContext.html#quadraticcurveto)
创建二次贝塞尔曲线路径。曲线的起始点为路径中前一个点。
针对 moveTo(20, 20) quadraticCurveTo(20, 100, 200, 20) 的三个关键坐标如下：

- 红色：起始点(20, 20)
- 蓝色：控制点(20, 100)
- 绿色：终止点(200, 20)
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.quadraticCurveTo.html)
```tsx
(cpx: number, cpy: number, x: number, y: number) => void
```
参数类型说明cpx`number`贝塞尔控制点的 x 坐标cpy`number`贝塞尔控制点的 y 坐标x`number`结束点的 x 坐标y`number`结束点的 y 坐标
#### 示例代码[​](CanvasContext.html#示例代码-15)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// Draw points
ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()
ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()
ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()
ctx.setFillStyle('black')
ctx.setFontSize(12)
// Draw guides
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(200, 20)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()
// Draw quadratic curve
ctx.beginPath()
ctx.moveTo(20, 20)
ctx.quadraticCurveTo(20, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()
ctx.draw()
```

### rect[​](CanvasContext.html#rect)
创建一个矩形路径。需要用 [`fill`](CanvasContext.html#fill) 或者 [`stroke`](CanvasContext.html#stroke) 方法将矩形真正的画到 `canvas` 中
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rect.html)
```tsx
(x: number, y: number, width: number, height: number) => void
```
参数类型说明x`number`矩形路径左上角的横坐标y`number`矩形路径左上角的纵坐标width`number`矩形路径的宽度height`number`矩形路径的高度
#### 示例代码[​](CanvasContext.html#示例代码-16)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.rect(10, 10, 150, 75)
ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```

### reset[​](CanvasContext.html#reset)
重置绘图上下文状态
支持情况：!!!!!
[> 参考文档
](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/reset)
```tsx
() => void
```

### restore[​](CanvasContext.html#restore)
恢复之前保存的绘图上下文
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.restore.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-17)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```

### rotate[​](CanvasContext.html#rotate)
以原点为中心顺时针旋转当前坐标轴。多次调用旋转的角度会叠加。原点可以用 `translate` 方法修改。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.rotate.html)
```tsx
(rotate: number) => void
```
参数类型说明rotate`number`旋转角度，以弧度计 degrees * Math.PI/180；degrees 范围为 0-360
#### 示例代码[​](CanvasContext.html#示例代码-18)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.rotate(20 * Math.PI / 180)
ctx.strokeRect(100, 10, 150, 100)
ctx.draw()
```

### save[​](CanvasContext.html#save)
保存绘图上下文。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.save.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-19)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)
ctx.draw()
```

### scale[​](CanvasContext.html#scale)
在调用后，之后创建的路径其横纵坐标会被缩放。多次调用倍数会相乘。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.scale.html)
```tsx
(scaleWidth: number, scaleHeight: number) => void
```
参数类型说明scaleWidth`number`横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)scaleHeight`number`纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)
#### 示例代码[​](CanvasContext.html#示例代码-20)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.draw()
```

### setFillStyle[​](CanvasContext.html#setfillstyle)
设置填充色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFillStyle.html)
```tsx
(color: string | CanvasGradient) => void
```
参数类型说明colorstring or CanvasGradient填充的颜色，默认颜色为 black。
#### 示例代码[​](CanvasContext.html#示例代码-21)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

### setFontSize[​](CanvasContext.html#setfontsize)
设置字体的字号
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setFontSize.html)
```tsx
(fontSize: number) => void
```
参数类型说明fontSize`number`字体的字号
#### 示例代码[​](CanvasContext.html#示例代码-22)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFontSize(20)
ctx.fillText('20', 20, 20)
ctx.setFontSize(30)
ctx.fillText('30', 40, 40)
ctx.setFontSize(40)
ctx.fillText('40', 60, 60)
ctx.setFontSize(50)
ctx.fillText('50', 90, 90)
ctx.draw()
```

### setGlobalAlpha[​](CanvasContext.html#setglobalalpha)
设置全局画笔透明度。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setGlobalAlpha.html)
```tsx
(alpha: number) => void
```
参数类型说明alpha`number`透明度。范围 0-1，0 表示完全透明，1 表示完全不透明。
#### 示例代码[​](CanvasContext.html#示例代码-23)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('yellow')
ctx.fillRect(100, 100, 150, 100)
ctx.draw()
```

### setLineCap[​](CanvasContext.html#setlinecap)
设置线条的端点样式
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineCap.html)
```tsx
(lineCap: keyof LineCap) => void
```
参数类型说明lineCap`keyof LineCap`线条的结束端点样式
#### 示例代码[​](CanvasContext.html#示例代码-24)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()
ctx.beginPath()
ctx.setLineCap('butt')
ctx.setLineWidth(10)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()
ctx.beginPath()
ctx.setLineCap('round')
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()
ctx.beginPath()
ctx.setLineCap('square')
ctx.setLineWidth(10)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()
ctx.draw()
```

### setLineDash[​](CanvasContext.html#setlinedash)
设置虚线样式。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineDash.html)
```tsx
(pattern: number[], offset: number) => void
```
参数类型说明pattern`number[]`一组描述交替绘制线段和间距（坐标空间单位）长度的数字offset`number`虚线偏移量
#### 示例代码[​](CanvasContext.html#示例代码-25)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setLineDash([10, 20], 5);
ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();
ctx.draw()
```

### setLineJoin[​](CanvasContext.html#setlinejoin)
设置线条的交点样式
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineJoin.html)
```tsx
(lineJoin: keyof LineJoin) => void
```
参数类型说明lineJoin`keyof LineJoin`线条的结束交点样式
#### 示例代码[​](CanvasContext.html#示例代码-26)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()
ctx.draw()
```

### setLineWidth[​](CanvasContext.html#setlinewidth)
设置线条的宽度
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setLineWidth.html)
```tsx
(lineWidth: number) => void
```
参数类型说明lineWidth`number`线条的宽度，单位px
#### 示例代码[​](CanvasContext.html#示例代码-27)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(150, 10)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(5)
ctx.moveTo(10, 30)
ctx.lineTo(150, 30)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.moveTo(10, 50)
ctx.lineTo(150, 50)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(15)
ctx.moveTo(10, 70)
ctx.lineTo(150, 70)
ctx.stroke()
ctx.draw()
```

### setMiterLimit[​](CanvasContext.html#setmiterlimit)
设置最大斜接长度。斜接长度指的是在两条线交汇处内角和外角之间的距离。当 [CanvasContext.setLineJoin()](CanvasContext.html#setlinejoin) 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setMiterLimit.html)
```tsx
(miterLimit: number) => void
```
参数类型说明miterLimit`number`最大斜接长度
#### 示例代码[​](CanvasContext.html#示例代码-28)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()
ctx.beginPath()
ctx.setLineWidth(10)
ctx.setLineJoin('miter')
ctx.setMiterLimit(4)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()
ctx.draw()
```

### setShadow[​](CanvasContext.html#setshadow)
设定阴影样式。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setShadow.html)
```tsx
(offsetX: number, offsetY: number, blur: number, color: string) => void
```
参数类型说明offsetX`number`阴影相对于形状在水平方向的偏移，默认值为 0。offsetY`number`阴影相对于形状在竖直方向的偏移，默认值为 0。blur`number`阴影的模糊级别，数值越大越模糊。范围 0- 100。，默认值为 0。color`string`阴影的颜色。默认值为 black。
#### 示例代码[​](CanvasContext.html#示例代码-29)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setFillStyle('red')
ctx.setShadow(10, 50, 50, 'blue')
ctx.fillRect(10, 10, 150, 75)
ctx.draw()
```

### setStrokeStyle[​](CanvasContext.html#setstrokestyle)
设置描边颜色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setStrokeStyle.html)
```tsx
(color: string | CanvasGradient) => void
```
参数类型说明colorstring or CanvasGradient描边的颜色，默认颜色为 black。
#### 示例代码[​](CanvasContext.html#示例代码-30)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

### setTextAlign[​](CanvasContext.html#settextalign)
设置文字的对齐
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextAlign.html)
```tsx
(align: keyof Align) => void
```
参数类型说明align`keyof Align`文字的对齐方式
#### 示例代码[​](CanvasContext.html#示例代码-31)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()
ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)
await ctx.draw(true)
ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)
await ctx.draw(true)
ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)
await ctx.draw(true)
```

### setTextBaseline[​](CanvasContext.html#settextbaseline)
设置文字的竖直对齐
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTextBaseline.html)
```tsx
(textBaseline: keyof TextBaseline) => void
```
参数类型说明textBaseline`keyof TextBaseline`文字的竖直对齐方式
#### 示例代码[​](CanvasContext.html#示例代码-32)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()
ctx.setFontSize(20)
ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)
await ctx.draw(true)
ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)
await ctx.draw(true)
ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)
await ctx.draw(true)
ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)
await ctx.draw(true)
```

### setTransform[​](CanvasContext.html#settransform)
使用矩阵重新设置（覆盖）当前变换的方法
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.setTransform.html)
```tsx
{ (scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: ...
```
参数类型说明scaleX`number`水平缩放skewX`number`水平倾斜skewY`number`垂直倾斜scaleY`number`垂直缩放translateX`number`水平移动translateY`number`垂直移动
### stroke[​](CanvasContext.html#stroke)
画出当前路径的边框。默认颜色色为黑色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.stroke.html)
```tsx
() => void
```

#### 示例代码[​](CanvasContext.html#示例代码-33)
##### 示例 1[​](CanvasContext.html#示例-1-4)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

##### 示例 2[​](CanvasContext.html#示例-2-4)
stroke() 描绘的的路径是从 beginPath() 开始计算，但是不会将 strokeRect() 包含进去。
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
// begin path
ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()
// begin another path
ctx.beginPath()
ctx.rect(10, 40, 100, 30)
// only stoke this rect, not in current path
ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)
ctx.rect(10, 100, 100, 30)
// it will stroke current path
ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

### strokeRect[​](CanvasContext.html#strokerect)
画一个矩形(非填充)。 用 [`setStrokeStyle`](CanvasContext.html#setstrokestyle) 设置矩形线条的颜色，如果没设置默认是黑色。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeRect.html)
```tsx
(x: number, y: number, width: number, height: number) => void
```
参数类型说明x`number`矩形路径左上角的横坐标y`number`矩形路径左上角的纵坐标width`number`矩形路径的宽度height`number`矩形路径的高度
#### 示例代码[​](CanvasContext.html#示例代码-34)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.setStrokeStyle('red')
ctx.strokeRect(10, 10, 150, 75)
ctx.draw()
```

### strokeText[​](CanvasContext.html#stroketext)
给定的 (x, y) 位置绘制文本描边的方法
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.strokeText.html)
```tsx
(text: string, x: number, y: number, maxWidth?: number) => void
```
参数类型说明text`string`要绘制的文本x`number`文本起始点的 x 轴坐标y`number`文本起始点的 y 轴坐标maxWidth`number`需要绘制的最大宽度，可选
### transform[​](CanvasContext.html#transform)
使用矩阵多次叠加当前变换的方法 使用矩阵叠加当前变换。矩阵由方法的参数进行描述，可以缩放、旋转、移动和倾斜上下文
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.transform.html)
```tsx
{ (scaleX: number, skewX: number, skewY: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, skewY: number, skewX: number, scaleY: number, translateX: number, translateY: number): void; (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: ...
```
参数类型说明scaleX`number`水平缩放skewX`number`水平倾斜skewY`number`垂直倾斜scaleY`number`垂直缩放translateX`number`水平移动translateY`number`垂直移动
### translate[​](CanvasContext.html#translate)
对当前坐标系的原点 (0, 0) 进行变换。默认的坐标系原点为页面左上角。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.translate.html)
```tsx
(x: number, y: number) => void
```
参数类型说明x`number`水平坐标平移量y`number`竖直坐标平移量
#### 示例代码[​](CanvasContext.html#示例代码-35)
```tsx
const ctx = Taro.createCanvasContext('myCanvas')
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.translate(20, 20)
ctx.strokeRect(10, 10, 150, 100)
ctx.draw()
```

## 参数[​](CanvasContext.html#参数)
### Repetition[​](CanvasContext.html#repetition)
参数 repetition 可选值
参数说明repeat水平竖直方向都重复repeat-x水平方向重复repeat-y竖直方向重复no-repeat不重复
### LineCap[​](CanvasContext.html#linecap)
参数 lineCap 可选值
参数说明butt向线条的每个末端添加平直的边缘。round向线条的每个末端添加圆形线帽。square向线条的每个末端添加正方形线帽。
### LineJoin[​](CanvasContext.html#linejoin)
参数 lineJoin 可选值
参数说明bevel斜角round圆角miter尖角
### Align[​](CanvasContext.html#align)
参数 align 可选值
参数说明left左对齐center居中对齐right右对齐
### TextBaseline[​](CanvasContext.html#textbaseline)
参数 textBaseline 可选值
参数说明top顶部对齐
API 支持度: weapp, alipay, swan, jd, qq, tt, h5bottom底部对齐
API 支持度: weapp, alipay, swan, jd, qq, tt, h5middle居中对齐
API 支持度: weapp, alipay, swan, jd, qq, tt, h5normal
API 支持度: weapp, alipay, swan, jd, qq, tt, h5hanging文本基线为悬挂基线。
API 支持度: alipay, tt, h5alphabetic文本基线是标准的字母基线
API 支持度: alipay, tt, h5ideographic文字基线是表意字基线。如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。
API 支持度: alipay, tt, h5
## API 支持度[​](CanvasContext.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridCanvasContext.arc✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.arcTo✔️✔️✔️✔️✔️✔️CanvasContext.beginPath✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.bezierCurveTo✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.clearRect✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.clip✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.closePath✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.createCircularGradient✔️✔️✔️✔️✔️✔️✔️CanvasContext.createLinearGradient✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.createPattern✔️✔️✔️✔️✔️✔️CanvasContext.draw✔️✔️✔️✔️✔️✔️✔️(第二次调用 draw 前需要等待上一次 draw 调用结束后再调用，否则新的一次 draw 调用栈不会清空而导致结果异常。)✔️CanvasContext.drawImage✔️✔️✔️CanvasContext.fill✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.fillRect✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.fillText✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.lineTo✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.measureText✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.moveTo✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.quadraticCurveTo✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.rect✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.reset✔️✔️CanvasContext.restore✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.rotate✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.save✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.scale✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setFillStyle✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setFontSize✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setGlobalAlpha✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setLineCap✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setLineDash✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setLineJoin✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setLineWidth✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setMiterLimit✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setShadow✔️✔️✔️✔️✔️✔️✔️CanvasContext.setStrokeStyle✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setTextAlign✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setTextBaseline✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.setTransform✔️✔️✔️✔️✔️✔️CanvasContext.stroke✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.strokeRect✔️✔️✔️✔️✔️✔️✔️✔️CanvasContext.strokeText✔️✔️✔️✔️✔️✔️✔️CanvasContext.transform✔️✔️✔️✔️✔️CanvasContext.translate✔️✔️✔️✔️✔️✔️✔️✔️
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
