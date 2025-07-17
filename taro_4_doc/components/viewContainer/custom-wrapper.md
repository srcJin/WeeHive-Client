# custom-wrapper 自定义组件包裹器 当数据更新层级较深时，可用此组件将需要更新的区域包裹起来，这样更新层级将大大减少
支持情况：!!!!!!!!!!
## 类型[​](custom-wrapper.html#类型)
```tsx
ComponentType<CustomWrapperProps>
```

## 示例代码[​](custom-wrapper.html#示例代码)
```tsx
import { Component } from 'react'
import { CustomWrapper, View, Text } from '@tarojs/components'

export default class C extends Component {
 render () {
 return (
 <View>
 <CustomWrapper>
 <Text>Hello, world!</Text>
 </CustomWrapper>
 </View>
 )
 }
}
```

## CustomWrapperProps[​](custom-wrapper.html#customwrapperprops)

- 
- 
-
