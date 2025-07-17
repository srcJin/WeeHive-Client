# 离屏 canvas 实例，可通过 Taro.createOffscreenCanvas 创建。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.html)
## 方法[​](OffscreenCanvas.html#方法)
参数类型说明width`number`画布宽度height`number`画布高度
### createImage[​](OffscreenCanvas.html#createimage)
创建一个图片对象。支持在 2D Canvas 和 WebGL Canvas 下使用, 但不支持混用 2D 和 WebGL 的方法
> 注意不允许混用 webgl 和 2d 画布创建的图片对象，使用时请注意尽量使用 canvas 自身的 createImage 创建图片对象。

支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.createImage.html)
```tsx
() => Image
```

### getContext[​](OffscreenCanvas.html#getcontext)
该方法返回 OffscreenCanvas 的绘图上下文
> 当前仅支持获取 WebGL 绘图上下文

支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/OffscreenCanvas.getContext.html)
```tsx
(contextType: "webgl" | "2d") => RenderingContext
```
参数类型contextType"webgl" or "2d"
## API 支持度[​](OffscreenCanvas.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyOffscreenCanvas✔️OffscreenCanvas.createImage✔️OffscreenCanvas.getContext✔️✔️
- 

- 
- 

-
