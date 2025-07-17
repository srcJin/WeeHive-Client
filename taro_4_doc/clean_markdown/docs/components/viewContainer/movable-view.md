# 可移动的视图容器，在页面中可以拖拽滑动。movable-view 必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html)
## 类型[​](movable-view.html#类型)
```tsx
ComponentType<MovableViewProps>
```

## 示例代码[​](movable-view.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 return (
 <MovableArea style='height: 200px; width: 200px; background: red;'>
 <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'></MovableView>
 </MovableArea>
 )
 }
}
html
 <movable-area style='height: 200px; width: 200px; background: red;'>
 <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>带我走</movable-view>
 </movable-area>
```

## MovableViewProps[​](movable-view.html#movableviewprops)
参数类型默认值必填说明direction"all" or "vertical" or "horizontal" or "none"`none`否movable-view 的移动方向，属性值有`all`、`vertical`、`horizontal`、`none`inertia`boolean``false`否movable-view 是否带有惯性outOfBounds`boolean``false`否超过可移动区域后，movable-view 是否还可以移动xstring or number否定义 x 轴方向的偏移，如果 x 的值不在可移动范围内，会自动移动到可移动范围；改变 x 的值会触发动画ystring or number否定义 y 轴方向的偏移，如果 y 的值不在可移动范围内，会自动移动到可移动范围；改变 y 的值会触发动画damping`number``20`否阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快friction`number``2`否摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于 0，否则会被设置成默认值disabled`boolean``false`否是否禁用scale`boolean``false`否是否支持双指缩放，默认缩放手势生效区域是在 movable-view 内scaleMin`number``0.5`否定义缩放倍数最小值scaleMax`number``10`否定义缩放倍数最大值scaleValue`number``1`否定义缩放倍数，取值范围为 0.5 - 10animation`boolean``true`否是否使用动画onChange`CommonEventFunction<onChangeEventDetail>`否拖动过程中触发的事件onChangeEnd`CommonEventFunction<onChangeEventDetail>`否拖动结束触发的事件onDragStart`CommonEventFunction`否开始拖动时触发onDragEnd`CommonEventFunction`否拖动结束时触发onScale`CommonEventFunction<onScaleEventDetail>`否缩放过程中触发的事件onTouchStart`CommonEventFunction`否触摸动作开始，事件会向父节点传递。onTouchMove`CommonEventFunction`否触摸动作开始，事件仅作用于组件，不向父节点传递。onTouchEnd`TouchEventFunction`否手指触摸动作结束onTouchCancel`CommonEventFunction`否触摸动作被打断，如来电提醒、弹窗。onHTouchMove`TouchEventFunction`否初次手指触摸后移动为横向的移动，如果 catch 此事件，则意味着 touchmove 事件也被 catchonVTouchMove`TouchEventFunction`否初次手指触摸后移动为纵向的移动，如果 catch 此事件，则意味着 touchmove 事件也被 catchcatchTouchStart`CommonEventFunction`否触摸移动事件，事件仅作用于组件，不向父节点传递。catchTouchMove`CommonEventFunction`否触摸移动事件，事件仅作用于组件，不向父节点传递。catchTouchEnd`CommonEventFunction`否触摸动作结束，事件仅作用于组件，不向父节点传递。
### API 支持度[​](movable-view.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序H5React NativeHarmonyHarmony hybridMovableViewProps.direction✔️✔️✔️✔️✔️✔️✔️✔️MovableViewProps.inertia✔️✔️✔️✔️✔️✔️✔️MovableViewProps.outOfBounds✔️✔️✔️✔️✔️✔️✔️MovableViewProps.x✔️✔️✔️✔️✔️✔️✔️✔️MovableViewProps.y✔️✔️✔️✔️✔️✔️✔️✔️MovableViewProps.damping✔️✔️✔️✔️✔️✔️✔️MovableViewProps.friction✔️✔️✔️✔️✔️✔️✔️MovableViewProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️MovableViewProps.scale✔️✔️✔️✔️✔️✔️✔️MovableViewProps.scaleMin✔️✔️✔️✔️✔️✔️✔️MovableViewProps.scaleMax✔️✔️✔️✔️✔️✔️✔️MovableViewProps.scaleValue✔️✔️✔️✔️✔️✔️✔️MovableViewProps.animation✔️✔️✔️✔️✔️✔️✔️MovableViewProps.onChange✔️✔️✔️✔️✔️MovableViewProps.onChangeEnd✔️MovableViewProps.onDragStart✔️MovableViewProps.onDragEnd✔️MovableViewProps.onScale✔️✔️✔️✔️✔️✔️✔️MovableViewProps.onTouchStart✔️MovableViewProps.onTouchMove✔️MovableViewProps.onTouchEnd✔️✔️(此事件的触发顺序会因为当前事件机制引起组件内外注册的事件执行顺序不正常，外部注册的事件可能会优先于内部执行，如需保证执行顺序一致，需要在回调函数中包裹 setTimeout 临时处理)✔️MovableViewProps.onTouchCancel✔️MovableViewProps.onHTouchMove✔️✔️✔️✔️✔️MovableViewProps.onVTouchMove✔️✔️✔️✔️✔️MovableViewProps.catchTouchStart✔️MovableViewProps.catchTouchMove✔️MovableViewProps.catchTouchEnd✔️
### TChangeSource[​](movable-view.html#tchangesource)
拖动过程中触发的事件
参数说明touch拖动touch-out-of-bounds超出移动范围out-of-bounds超出移动范围后的回弹friction惯性setData
### onChangeEventDetail[​](movable-view.html#onchangeeventdetail)
参数类型说明x`number`X 坐标y`number`Y 坐标source`keyof TChangeSource`触发事件
### onScaleEventDetail[​](movable-view.html#onscaleeventdetail)
参数类型说明x`number`X 坐标y`number`Y 坐标scale`number`缩放比例
- 
- 
- 

- 
- 
- 
-
