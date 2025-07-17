# 创建 canvas 的绘图上下文 [CanvasContext](CanvasContext.html) 对象
**Tip**: 需要指定 canvasId，该绘图上下文只作用于对应的 `<canvas/>`；另外，Web 端需要在 `useReady` 回调中执行它，否则会因为底层 canvas 渲染出来之前而去获取 CanvasContext，导致其底层的 context 为 `undefined`，从而不能正常绘图。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html)
## 类型[​](createCanvasContext.html#类型)
```tsx
(canvasId: string, component?: TaroGeneral.IAnyObject) => CanvasContext
```

## 参数[​](createCanvasContext.html#参数)
参数类型说明canvasId`string`要获取上下文的 [canvas](../../components/canvas.html) 组件 canvas-id 属性component`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，表示在这个自定义组件下查找拥有 canvas-id 的 [canvas](../../components/canvas.html) ，如果省略则不在任何自定义组件内查找
## 示例代码[​](createCanvasContext.html#示例代码)
```tsx
import { useReady } from '@tarojs/taro'

useReady(() => {
 const context = Taro.createCanvasContext('canvas')
 context.setStrokeStyle("#00ff00")
 context.setLineWidth(5)
 context.rect(0, 0, 200, 200)
 context.stroke()
 context.setStrokeStyle("#ff0000")
 context.setLineWidth(2)
 context.moveTo(160, 100)
 context.arc(100, 100, 60, 0, 2 * Math.PI, true)
 context.moveTo(140, 100)
 context.arc(100, 100, 40, 0, Math.PI, false)
 context.moveTo(85, 80)
 context.arc(80, 80, 5, 0, 2 * Math.PI, true)
 context.moveTo(125, 80)
 context.arc(120, 80, 5, 0, 2 * Math.PI, true)
 context.stroke()
 context.draw()
})
```

- 
- 
-
