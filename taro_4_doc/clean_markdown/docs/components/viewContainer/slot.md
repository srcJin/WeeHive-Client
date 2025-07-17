# slot 插槽
支持情况：!!!!!!!!!!
## 类型[​](slot.html#类型)
```tsx
ComponentType<SlotProps>
```

## 示例代码[​](slot.html#示例代码)
```tsx
import { Slot, View, Text } from '@tarojs/components'

export default class SlotView extends Component {
 render () {
 return (
 <View>
 <custom-component>
 <Slot name='title'>
 <Text>Hello, world!</Text>
 </Slot>
 </custom-component>
 </View>
 )
 }
}
```

## SlotProps[​](slot.html#slotprops)
参数类型默认值必填说明name`string``none`否指定插入的 slot 位置varName`string``none`否scoped slot 传入数据源
### API 支持度[​](slot.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonySlotProps.name✔️✔️✔️✔️✔️✔️SlotProps.varName✔️
- 
- 
- 

-
