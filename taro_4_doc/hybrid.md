# Taro 支持使用小程序原生的**页面**、**组件**和**插件**。
#### 示例项目：[​](hybrid.html#示例项目)

- React：[https://github.com/NervJS/taro-sample-weapp/tree/next](https://github.com/NervJS/taro-sample-weapp/tree/next)
- Vue：[https://github.com/NervJS/taro-sample-weapp/tree/vue](https://github.com/NervJS/taro-sample-weapp/tree/vue)
> 注意：如果在 Taro 项目引用了小程序原生的页面、组件和插件，那么该项目将
**> 不再具备多端转换的能力
**> 。 例如，如果使用了微信小程序的原生组件，那么项目只能转换成微信小程序，转义成其他平台会失效，使用其他小程序原生组件同理。

## 使用原生组件[​](hybrid.html#使用原生组件)
### 使用方法[​](hybrid.html#使用方法)
#### 1. 在 app 或页面配置文件中配置 `usingComponents` 属性。[​](hybrid.html#1-在-app-或页面配置文件中配置-usingcomponents-属性)
page.config.js
```js
export default {
 usingComponents: {
 // 定义需要引入的第三方组件
 // 1. key 值指定第三方组件名字，以小写开头
 // 2. value 值指定第三方组件 js 文件的相对路径
 'ec-canvas': '../../components/ec-canvas/ec-canvas',
 },
}
```

> 注意：Taro3 的组件是没有配置文件的，因此 usingComponents 必须配置在“页面”的配置文件中。

#### 2. 使用组件[​](hybrid.html#2-使用组件)

- React
- Vue
```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Index extends Component {
 this.state = {
 ec: {
 onInit: function () {}
 }
 }

 render () {
 return (
 <View>
 <ec-canvas id='mychart-dom-area' canvas-id='mychart-area' ec={this.state.ec} />
 </View>
 )
 }
}
html
<template>
 <view class="echarts">
 <ec-canvas id="mychart-dom-area" canvas-id="mychart-area" :ec="ec"></ec-canvas>
 </view>
</template>

<script>
 export default {
 data() {
 return {
 ec: {
 onInit: function () {},
 },
 }
 },
 }
</script>
```

### 属性绑定[​](hybrid.html#属性绑定)
属性名和原生语法保持一致。

- React
- Vue
```jsx
<van-button type="primary" loading loading-text="ing">
 Button
</van-button>
html
<van-button type="primary" :loading="true" loading-text="ing">Button</van-button>
```

> 注意：在 Vue 中，如果组件的某些属性带有默认值
`> true
`> ，在 Taro 中使用时仍然需要
**> 显式设置为 true
**> 。

### 事件绑定[​](hybrid.html#事件绑定)
原生组件派发的事件名称有多种格式，首先开发者要明确原生组件派发的事件名具体是什么。不同的事件名对应不同的模板绑定语法，会影响对应的 React 和 Vue 语法。以下是一些例子：
> 可以看出，小程序原生组件派发的事件名区分大小写，并且支持
`> -
`> 。

模板绑定语法事件名称bindmyevent / bind:myeventmyeventbindmyEvent / bind:myEventmyEventbindMyEvent / bind:MyEventMyEventbind:my-eventmy-eventbind:my-Eventmy-Eventbind:My-EventMy-Event
#### React[​](hybrid.html#react)
在 JSX 中事件绑定语法为 `onCamelCase`，它的单一性无法适配小程序原生组件事件名的多样性。
因此 Taro 只能根据开发者 JSX 的事件绑定语法，遵循以下规则生成对应的模板绑定语法（在区分原生组件派发的事件名大小写的情况下，需要使用一个 `bind` 属性进行 hack 处理）：
JSX 事件绑定语法模板绑定语法事件名称`<Comp onMyevent={} />`bindmyeventmyevent`<Comp onMyEvent={} bindmyEvent />`bindmyEventmyEvent`<Comp onMyEvent={} bindMyEvent />`bindMyEventMyEvent`<Comp onMyEvent={} />`bind:my-eventmy-event--my-Event--My-Event
#### Vue[​](hybrid.html#vue)
**Vue** 绑定事件时虽然支持 `-`，但对大小写不敏感。因此针对不同的事件名需要编写不同的 Vue Template 语法，大小写敏感时同样也需要使用 `bind` 属性进行 hack 处理：
Vue Template 语法模板绑定语法事件名称`<comp @myevent='' />`bindmyeventmyevent`<comp @myevent='' bindmyEvent />`bindmyEventmyEvent`<comp @myevent='' bindMyEvent />`bindMyEventMyEvent`<comp @my-event='' />`bind:my-eventmy-event--my-Event--My-Event
#### 例子[​](hybrid.html#例子)

- React
- Vue
```jsx
// 对应 bind:click 事件
<van-button type='primary' onClick={this.handleClick} >Button</van-button>
// 对应 bind:after-read 事件
<van-uploader fileList={[]} onAfterRead={this.onAfterRead} />
html
<!-- 对应 bind:click 事件 -->
<van-button type="primary" @click="handleClick">Button</van-button>
<!-- 对应 bind:after-read 事件 -->
<van-uploader :fileList="[]" @after-read="onAfterRead" />
```

### 使用 Slot[​](hybrid.html#使用-slot)
**React** 中使用 `<Slot>` 组件实现。
**Vue** 中使用 `<slot-view>` 组件实现。

- React
- Vue
```jsx
import React, { Component } from 'react'
import { View, Slot } from '@tarojs/components'

export default class Index extends Component {
 render() {
 return (
 <View>
 <van-calendar poppable show>
 <Slot name="title">
 <View>Hello world</View>
 </Slot>
 </van-calendar>
 </View>
 )
 }
}
html
<template>
 <view>
 <van-calendar :poppable="true" :show="true">
 <slot-view :name='"title"'>
 <view>Hello world</view>
 </slot-view>
 </van-calendar>
 </view>
</template>

<script>
 export default {
 name: 'index',
 }
</script>
```

### selectComponent[​](hybrid.html#selectcomponent)
可以使用小程序页面实例的 `selectComponent` API 获取第三方原生组件的实例。
```js
import { getCurrentInstance } from '@tarojs/taro'

const { page } = getCurrentInstance()
page.selectComponent('#mychart-dom-area')
```

### 使用 vant-weapp[​](hybrid.html#使用-vant-weapp)
[详细文档](vant.html)
### 常见问题[​](hybrid.html#常见问题)
#### 1. Vue3 出现 warning: "[Vue warn]: Failed to resolve component"[​](hybrid.html#1-vue3-出现-warning-vue-warn-failed-to-resolve-component)
!
原因是 Vue 把它当做 Vue 组件来解析，我们可以修改 VueLoader 的编译配置 `compilerOptions.isCustomElement`，把此组件声明为原生组件。

- **Taro v3.4 之前**的版本需要通过 WebpackChain 去修改（请参考 [#10838](https://github.com/NervJS/taro/issues/10838#issuecomment-988448778)）
- **Taro v3.4 之后**可以通过配置 [Taro Vue3 插件](vue3.html#compileroptions) 的选项去修改。
- 传递函数类型的属性失败：[React 写法](https://github.com/NervJS/taro/issues/8495#issuecomment-1179526364)、[Vue3 写法](https://github.com/NervJS/taro/issues/10337#issuecomment-989834523)
## 使用原生页面[​](hybrid.html#使用原生页面)
只需要在 app 配置中，设置好原生页面的路由即可。
app.config.js
```js
export default {
 pages: ['pages/native/native'],
}
```

## 使用小程序插件[​](hybrid.html#使用小程序插件)
### 引入插件[​](hybrid.html#引入插件)
使用插件前，使用者要在 `app.confg.js` 的配置中声明需要使用的插件，例如
app.config.js
```js
export default {
 plugins: {
 myPlugin: {
 version: '1.0.0',
 provider: 'wxidxxxxxxxxxxxxxxxx',
 },
 },
}
```

如上例所示， `plugins` 定义段中可以包含多个插件声明，每个插件声明以一个使用者自定义的插件引用名作为标识，并指明插件的 `appid` 和需要使用的版本号。其中，引用名（如上例中的 myPlugin）由使用者自定义，无需和插件开发者保持一致或与开发者协调。在后续的插件使用中，该引用名将被用于表示该插件。
### 使用插件组件[​](hybrid.html#使用插件组件)
#### 配置使用[​](hybrid.html#配置使用)
在页面的配置文件中定义需要引入的插件组件，使用 `plugin://` 协议指明插件的引用名和自定义组件名，例如：
page.config.js
```js
export default {
 // 定义需要引入的插件
 usingComponents: {
 'hello-component': 'plugin://myPlugin/hello-component',
 },
}
```

#### 组件写法[​](hybrid.html#组件写法)
和使用原生组件一致，请参考 [《使用原生组件》](hybrid.html#%E4%BD%BF%E7%94%A8%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6)。
#### 限制[​](hybrid.html#限制)
出于对插件的保护，插件提供的自定义组件在使用上有一定的限制：

- 默认情况下，页面中的 `this.$scope.selectComponent` 接口无法获得插件的自定义组件实例对象；
- `Taro.createSelectorQuery` 等接口的 `>>>` 选择器无法选入插件内部。
### 使用插件页面[​](hybrid.html#使用插件页面)
插件的页面从小程序基础库版本 2.1.0 开始支持。
需要跳转到插件页面时，url 使用 `plugin://` 前缀，形如 `plugin://PLUGIN_NAME//PLUGIN_PAGE`， 如：
```jsx
<Navigator url="plugin://myPlugin/hello-page">Go to pages/hello-page!</Navigator>
```

### 使用 js 接口[​](hybrid.html#使用-js-接口)
使用插件的 `js` 接口时，可以使用 `Taro.requirePlugin` 方法。例如，插件提供一个名为 `hello` 的方法和一个名为 `world` 的变量，则可以像下面这样调用：
```js
import { requirePlugin } from '@tarojs/taro'

const myPluginInterface = requirePlugin('myPlugin')
const myWorld = myPluginInterface.world

myPluginInterface.hello()
```

- 

- 
- 
- 
- 
- 
- 
- 

- 
- 

- 
- 
- 
-
