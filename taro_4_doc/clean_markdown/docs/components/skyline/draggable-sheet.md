# 半屏可拖拽组件 该组件需配合 DraggableSheetContext 接口使用。 目前仅在 Skyline 渲染引擎下支持。 页面内拖拽是一种常见的交互效果，开发者可通过手势系统灵活实现。draggable-sheet 组件封装了常见的交互逻辑，实现起来更加简单。 该组件需结合 scroll-view 使用。scroll-view 组件声明 associative-container 属性后，可与 draggable-sheet 关联起来。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/draggable-sheet.html)
## 类型[​](draggable-sheet.html#类型)
```tsx
ComponentType<DraggableSheetProps>
```

## DraggableSheetProps[​](draggable-sheet.html#draggablesheetprops)
参数类型默认值必填说明initialChildSize`number``0.5`否初始时占父容器的比例minChildSize`number``0.25`否最小时占父容器的比例maxChildSize`number``1.0`否最大时占父容器的比例snap`boolean``false`否拖拽后是否自动对齐关键点snapSizes`any[]``[]`否拖拽后对齐的关键点，无需包含最小和最大值onSizeUpdateWorklet`string`否尺寸发生变化时触发，仅支持 worklet 作为回调。event = {pixels, size}
### API 支持度[​](draggable-sheet.html#api-支持度)
API微信小程序H5React NativeHarmonyDraggableSheetProps.initialChildSize✔️DraggableSheetProps.minChildSize✔️DraggableSheetProps.maxChildSize✔️DraggableSheetProps.snap✔️DraggableSheetProps.snapSizes✔️DraggableSheetProps.onSizeUpdateWorklet✔️
- 
- 

-
