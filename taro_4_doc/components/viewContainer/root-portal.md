# root-portal 使整个子树从页面中脱离出来，类似于在 CSS 中使用 fixed position 的效果。主要用于制作弹窗、弹出层等。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/root-portal.html)
## 类型[​](root-portal.html#类型)
```tsx
ComponentType<RootPortalProps>
```

## 示例代码[​](root-portal.html#示例代码)

- React
```tsx
import { useState } from 'react'
import { RootPortal, View, Button } from '@tarojs/components'

export default function RootPortalExample {
 const [show, setShow] = useState(false)
 const toggle = () => {
 setShow(!show)
 }
 render () {
 return (
 <View>
 <Button onClick={toggle}>显示root-portal</Button>
 {
 show && (<RootPortal><View>content</View></RootPortal>)
 }
 </View>
 )
 }
}
```

## RootPortalProps[​](root-portal.html#rootportalprops)
参数类型默认值必填说明enable`boolean``true`否是否从页面中脱离出来
### API 支持度[​](root-portal.html#api-支持度)
API微信小程序支付宝小程序H5React NativeHarmonyRootPortalProps.enable✔️✔️
- 
- 
- 

-
