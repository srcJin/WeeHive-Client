# script 类似微信小程序的 wxs 标签，支持引用各种小程序的 xs 文件 只能在 CompileMode 中使用
支持情况：!!!!!!!!!
## 类型[​](script.html#类型)
```tsx
ComponentType<ScriptProps>
```

## 示例代码[​](script.html#示例代码)

- React
```tsx
import { Component } from 'react'
import { View, Script } from '@tarojs/components'

export function Index () {
 return (
 <View compileMode>
 <Script src="./logic.wxs" module="logic"></Script>
 <Text>Hello, {logic.name}!</Text>
 </View>
 )
}
```

## ScriptProps[​](script.html#scriptprops)
参数类型说明src`string`xs 文件的相对路径module`string`xs 模块名
### API 支持度[​](script.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyScriptProps.src✔️✔️✔️✔️✔️✔️ScriptProps.module✔️✔️✔️✔️✔️✔️
- 
- 
- 

-
