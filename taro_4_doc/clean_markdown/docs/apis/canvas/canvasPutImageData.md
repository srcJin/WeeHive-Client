# 将像素数据绘制到画布。在自定义组件下，第二个参数传入自定义组件实例 this，以操作组件内 `<canvas>` 组件
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html)
## 类型[​](canvasPutImageData.html#类型)
```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](canvasPutImageData.html#参数)
参数类型说明option`Option`component`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 [canvas](../../components/canvas.html) 组件
### Option[​](canvasPutImageData.html#option)
参数类型必填说明canvasId`string`是画布标识，传入 [canvas](../../components/canvas.html) 组件的 canvas-id 属性。data`Uint8ClampedArray`是图像像素点数据，一维数组，每四项表示一个像素点的 rgbaheight`number`是源图像数据矩形区域的高度width`number`是源图像数据矩形区域的宽度x`number`是源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）y`number`是源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](canvasPutImageData.html#示例代码)
```tsx
const data = new Uint8ClampedArray([255, 0, 0, 1])
Taro.canvasPutImageData({
 canvasId: 'myCanvas',
 x: 0,
 y: 0,
 width: 1,
 data: data,
 success: function (res) {}
})
```

- 
- 

- 

-
