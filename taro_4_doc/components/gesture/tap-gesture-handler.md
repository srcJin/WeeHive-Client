# 点击时触发手势 微信小程序下 skyline 的手势标签，只能在 CompileMode 中使用
支持情况：!!!!
## 类型[​](tap-gesture-handler.html#类型)
```tsx
ComponentType<TapGestureHandlerProps>
```

## 示例代码[​](tap-gesture-handler.html#示例代码)

- React
```tsx
import { Component } from 'react'
import { View, TapGestureHandler } from '@tarojs/components'

export function Index () {
 return (
 <View compileMode>
 <TapGestureHandler onGestureWorklet="onGesture">
 <View className='circle'></View>
 </TapGestureHandler>
 </View>
 )
}
```

## TapGestureHandlerProps[​](tap-gesture-handler.html#tapgesturehandlerprops)
参数类型必填说明tag`string`否声明手势协商时的组件标识onGestureWorklet`string`否手势识别成功的回调shouldResponseOnMoveWorklet`string`否手指移动过程中手势是否响应shouldAcceptGestureWorklet`string`否手势是否应该被识别simultaneousHandlers`string[]`否声明可同时触发的手势节点nativeView`string`否代理的原生节点类型
### API 支持度[​](tap-gesture-handler.html#api-支持度)
API微信小程序H5React NativeHarmonyTapGestureHandlerProps.tag✔️TapGestureHandlerProps.onGestureWorklet✔️TapGestureHandlerProps.shouldResponseOnMoveWorklet✔️TapGestureHandlerProps.shouldAcceptGestureWorklet✔️TapGestureHandlerProps.simultaneousHandlers✔️TapGestureHandlerProps.nativeView✔️
- 
- 
- 

-
