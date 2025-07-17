# 获取 canvas 区域隐含的像素数据。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html)
## 类型[​](canvasGetImageData.html#类型)
```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>
```

## 参数[​](canvasGetImageData.html#参数)
参数类型说明option`Option`component`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 [canvas](../../components/canvas.html) 组件
### Option[​](canvasGetImageData.html#option)
参数类型必填说明canvasId`string`是画布标识，传入 [canvas](../../components/canvas.html) 组件的 `canvas-id` 属性。height`number`是将要被提取的图像数据矩形区域的高度width`number`是将要被提取的图像数据矩形区域的宽度x`number`是将要被提取的图像数据矩形区域的左上角横坐标y`number`是将要被提取的图像数据矩形区域的左上角纵坐标complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](canvasGetImageData.html#successcallbackresult)
参数类型说明data`Uint8ClampedArray`图像像素点数据，一维数组，每四项表示一个像素点的 rgbaheight`number`图像数据矩形的高度width`number`图像数据矩形的宽度errMsg`string`调用结果
## 示例代码[​](canvasGetImageData.html#示例代码)
```tsx
Taro.canvasGetImageData({
 canvasId: 'myCanvas',
 x: 0,
 y: 0,
 width: 100,
 height: 100,
 success: function (res) {
 console.log(res.width) // 100
 console.log(res.height) // 100
 console.log(res.data instanceof Uint8ClampedArray) // true
 console.log(res.data.length) // 100 * 100 * 4
 }
})
```

- 
- 

- 
- 

-
