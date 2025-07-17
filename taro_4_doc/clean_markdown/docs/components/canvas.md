# 画布
`<Canvas />` 组件的 RN 版本尚未实现。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html)
## 类型[​](canvas.html#类型)
```tsx
ComponentType<CanvasProps>
```

## 示例代码[​](canvas.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 // 如果是支付宝小程序，则要加上 id 属性，值和canvasId一致
 return (
 <Canvas style='width: 300px; height: 200px;' canvasId='canvas' />
 )
 }
}
html
<template>
 <!-- 如果是支付宝小程序，则要加上 id 属性，值和canvasId一致 -->
 <canvas style="width: 300px; height: 200px;" canvas-id="canvas" />
</template>
```

## CanvasProps[​](canvas.html#canvasprops)
参数类型默认值必填说明type`string`否指定 canvas 类型，支持 2d 和 webglcanvasId`string`否canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性disableScroll`boolean``false`否当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新id`string`否组件唯一标识符。
注意：同一页面中的 id 不可重复。width`string`否height`string`否nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上onTouchStart`CanvasTouchEventFunction`否手指触摸动作开始onTouchMove`CanvasTouchEventFunction`否手指触摸后移动onTouchEnd`CanvasTouchEventFunction`否手指触摸动作结束onTouchCancel`CanvasTouchEventFunction`否手指触摸动作被打断，如来电提醒，弹窗onLongTap`CommonEventFunction`否手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动onError`CommonEventFunction<onErrorEventDetail>`否当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}onTap`CommonEventFunction`否点击。onReady`CommonEventFunction`否canvas 组件初始化成功触发。
### API 支持度[​](canvas.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridCanvasProps.type✔️✔️✔️CanvasProps.canvasId✔️✔️✔️✔️✔️✔️✔️CanvasProps.disableScroll✔️✔️✔️✔️✔️CanvasProps.id✔️✔️✔️CanvasProps.width✔️✔️✔️CanvasProps.height✔️✔️✔️CanvasProps.nativeProps✔️✔️CanvasProps.onTouchStart✔️✔️✔️✔️✔️✔️✔️✔️CanvasProps.onTouchMove✔️✔️✔️✔️✔️✔️✔️✔️CanvasProps.onTouchEnd✔️✔️✔️✔️✔️✔️✔️✔️CanvasProps.onTouchCancel✔️✔️✔️✔️✔️✔️✔️✔️CanvasProps.onLongTap✔️✔️✔️✔️✔️✔️✔️CanvasProps.onError✔️✔️✔️✔️CanvasProps.onTap✔️CanvasProps.onReady✔️
### onErrorEventDetail[​](canvas.html#onerroreventdetail)
参数类型errMsg`string`
- 
- 
- 

- 
-
