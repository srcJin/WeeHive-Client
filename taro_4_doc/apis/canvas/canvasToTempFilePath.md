# 把当前画布指定区域的内容导出生成指定大小的图片。在 `draw()` 回调里调用该方法才能保证图片导出成功。
**Bug & Tip：**

- `tip`: 在 `draw` 回调里调用该方法才能保证图片导出成功。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html)
## 类型[​](canvasToTempFilePath.html#类型)
```tsx
(option: Option, component?: TaroGeneral.IAnyObject) => Promise<SuccessCallbackResult>
```

## 参数[​](canvasToTempFilePath.html#参数)
参数类型说明option`Option`component`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 [canvas](../../components/canvas.html) 组件
### Option[​](canvasToTempFilePath.html#option)
参数类型默认值必填说明canvas`Canvas`否画布标识，传入 [canvas](../../components/canvas.html) 组件实例 （canvas type="2d" 时使用该属性）。canvasId`string`否画布标识，传入 [canvas](../../components/canvas.html) 组件的 canvas-idquality`number`否图片的质量，目前仅对 jpg 有效。取值范围为 (0, 1]，不在范围内时当作 1.0 处理。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）destHeight`number`否输出的图片的高度destWidth`number`否输出的图片的宽度fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数fileType`keyof FileType``"png"`否目标文件的类型height`number`否指定的画布区域的高度success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数width`number`否指定的画布区域的宽度x`number`否指定的画布区域的左上角横坐标y`number`否指定的画布区域的左上角纵坐标
### SuccessCallbackResult[​](canvasToTempFilePath.html#successcallbackresult)
参数类型必填说明tempFilePath`string`是生成文件的临时路径apFilePath`string`否图片路径(本地临时文件)。
API 支持度: alipayerrMsg`string`是调用结果
### FileType[​](canvasToTempFilePath.html#filetype)
参数说明jpgjpg 图片pngpng 图片
### CanvasProps[​](canvasToTempFilePath.html#canvasprops)
参数类型默认值必填说明type`string`否指定 canvas 类型，支持 2d 和 webglcanvasId`string`否canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性disableScroll`boolean``false`否当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新onTouchStart`TaroGeneral.CommonEventFunction`否手指触摸动作开始onTouchMove`TaroGeneral.CommonEventFunction`否手指触摸后移动onTouchEnd`TaroGeneral.CommonEventFunction`否手指触摸动作结束onTouchCancel`TaroGeneral.CommonEventFunction`否手指触摸动作被打断，如来电提醒，弹窗onLongTap`TaroGeneral.CommonEventFunction`否手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动onError`TaroGeneral.CommonEventFunction<onErrorEventDetail>`否当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
#### onErrorEventDetail[​](canvasToTempFilePath.html#onerroreventdetail)
参数类型errMsg`string`
## 示例代码[​](canvasToTempFilePath.html#示例代码)
```tsx
Taro.canvasToTempFilePath({
 x: 100,
 y: 200,
 width: 50,
 height: 50,
 destWidth: 100,
 destHeight: 100,
 canvasId: 'myCanvas',
 success: function (res) {
 console.log(res.tempFilePath)
 }
})
```

- 
- 

- 
- 
- 
- 

-
