# 拖动（横向/纵向）时触发手势 微信小程序下 skyline 的手势标签，只能在 CompileMode 中使用
支持情况：!!!!
## 类型[​](pan-gesture-handler.html#类型)
```tsx
ComponentType<PanGestureHandlerProps>
```

## 示例代码[​](pan-gesture-handler.html#示例代码)

- React
```tsx
import { Component } from 'react'
import { View, PanGestureHandler } from '@tarojs/components'

export function Index () {
 return (
 <View compileMode>
 <PanGestureHandler onGestureWorklet="onGesture">
 <View className='circle'></View>
 </PanGestureHandler>
 </View>
 )
}
```

## PanGestureHandlerProps[​](pan-gesture-handler.html#pangesturehandlerprops)
参数类型必填说明tag`string`否声明手势协商时的组件标识onGestureWorklet`string`否手势识别成功的回调shouldResponseOnMoveWorklet`string`否手指移动过程中手势是否响应shouldAcceptGestureWorklet`string`否手势是否应该被识别simultaneousHandlers`string[]`否声明可同时触发的手势节点nativeView`string`否代理的原生节点类型
### API 支持度[​](pan-gesture-handler.html#api-支持度)
API微信小程序H5React NativeHarmonyPanGestureHandlerProps.tag✔️PanGestureHandlerProps.onGestureWorklet✔️PanGestureHandlerProps.shouldResponseOnMoveWorklet✔️PanGestureHandlerProps.shouldAcceptGestureWorklet✔️PanGestureHandlerProps.simultaneousHandlers✔️PanGestureHandlerProps.nativeView✔️
- 
- 
- 

-
