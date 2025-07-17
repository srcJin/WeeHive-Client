# ## 二次开发[​](convert-to-react.html#二次开发)
原生小程序代码：
```jsx
Page({
 data: {
 text: 'Hello World'
 }
})

<view class="container">
 {{ text }}
</view>
```

转换后：
```javascript
import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import Title from '../../components/title/index'
import './index.scss'

@withWeapp({
 data: {
 text: 'Hello World',
 },
})
class _C extends React.Component {
 render() {
 const { text } = this.data
 return <View className="container">{text}</View>
 }
}

export default _C
```

它看起来就像普通的 Taro 组件，最重要的区别就在于 `@withWeapp()` 这个装饰器，你可以将它理解为转换代码的运行时，`@withWeapp()` 会增加一些原来 Taro 没有方法和属性，例如：
### `this.setData`[​](convert-to-react.html#thissetdata)
转换后的 `this.setData` 的 API 相当于小程序的 `this.setData` 的 polyfill，他和 `this.setState` 最大的区别就在于，`this.setData` 之后 `data` 的数据是同步更新，而渲染是异步更新，而 `setState` 两者都是异步的。
### `this.data` 和 `this.properties`[​](convert-to-react.html#thisdata-和-thisproperties)
`this.data` 和 `this.properties` 相当于 Taro 的 `this.state` 和 `this.props` 的 alias，当它们的数据更新时，对应的 `state` 和 `props` 也会同步更新。
### 生命周期[​](convert-to-react.html#生命周期)
Taro 会将原生小程序的生命周期转换为 Taro 的生命周期，完整对应关系如下：
小程序生命周期Taro 生命周期onShowcomponentDidShowonHidecomponentDidHideApp.onLaunchonLaunchPage.onLoadonLoadPage.onReadyonReadyPage.onUnloadcomponentWillUnmountComponent.createdcomponentWillMountComponent.attachedcomponentDidMountComponent.readyPage.onReadyComponent.detachedcomponentWillUnmount
- 

- [``](convert-to-react.html#thissetdata)
- [````](convert-to-react.html#thisdata-和-thisproperties)
-
