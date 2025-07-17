# Canvas 实例，可通过 SelectorQuery 获取。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.html)
## 方法[​](index.html#方法)
参数类型说明height`number`画布高度width`number`画布宽度
### cancelAnimationFrame[​](index.html#cancelanimationframe)
取消由 requestAnimationFrame 添加到计划中的动画帧请求。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.cancelAnimationFrame.html)
```tsx
(requestID: number) => void
```
参数类型requestID`number`
### createImageData[​](index.html#createimagedata)
创建一个 ImageData 对象。仅支持在 2D Canvas 中使用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImageData.html)
```tsx
() => ImageData
```

### createImage[​](index.html#createimage)
创建一个图片对象。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.createImage.html)
```tsx
() => Image
```

### createPath2D[​](index.html#createpath2d)
创建 Path2D 对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Path2D.html)
```tsx
(path: Path2D) => Path2D
```
参数类型path`Path2D`
### getContext[​](index.html#getcontext)
支持获取 2D 和 WebGL 绘图上下文
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.getContext.html)
```tsx
(contextType: string) => RenderingContext
```
参数类型contextType`string`
### requestAnimationFrame[​](index.html#requestanimationframe)
在下次进行重绘时执行。 支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.requestAnimationFrame.html)
```tsx
(callback: (...args: any[]) => any) => number
```
参数类型说明callback`(...args: any[]) => any`执行的 callback
### toDataURL[​](index.html#todataurl)
返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.toDataURL.html)
```tsx
(type: string, encoderOptions: number) => string
```
参数类型说明type`string`图片格式，默认为 image/pngencoderOptions`number`在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
### toTempFilePath[​](index.html#totempfilepath)
把当前画布指定区域保存为图片
支持情况：!!!!!
[> 参考文档
](https://opendocs.alipay.com/mini/api/toTempFilePath?pathHash=e79fe218)
```tsx
(oprion: Option) => void
```
参数类型oprion`Option`
## API 支持度[​](index.html#api-支持度)
API微信小程序支付宝小程序抖音小程序H5React NativeHarmonyCanvas.cancelAnimationFrame✔️✔️✔️Canvas.createImageData✔️Canvas.createImage✔️✔️✔️Canvas.createPath2D✔️Canvas.getContext✔️✔️✔️Canvas.requestAnimationFrame✔️Canvas.toDataURL✔️Canvas.toTempFilePath✔️
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
