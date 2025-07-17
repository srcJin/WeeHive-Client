# 编译的原生组件支持使用 slot 插槽
支持情况：!!!!!!!!!!
[> 参考文档
](https://github.com/NervJS/taro/pull/12627)
## 类型[​](native-slot.html#类型)
```tsx
ComponentType<NativeSlotProps>
```

## 示例代码[​](native-slot.html#示例代码)
```tsx
import { NativeSlot, View } from '@tarojs/components'

export default function () {
 render () {
 return (
 <View>
 <NativeSlot />
 </View>
 )
 }
}
```

## NativeSlotProps[​](native-slot.html#nativeslotprops)
参数类型默认值必填说明name`string``none`否指定插入的 slot 位置
### API 支持度[​](native-slot.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyNativeSlotProps.name✔️✔️✔️✔️✔️✔️
- 
- 
- 

-
