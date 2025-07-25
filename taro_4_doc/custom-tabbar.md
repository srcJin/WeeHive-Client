# Taro 支持使用 React、Vue、或者小程序原生语法来编写小程序自定义 TabBar 组件。
## 示例项目[​](custom-tabbar.html#示例项目)

- [微信小程序自定义 TabBar（React）](https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-react)
- [微信小程序自定义 TabBar（Vue3）](https://github.com/NervJS/taro/tree/next/examples/custom-tabbar-vue3)
## 如何使用[​](custom-tabbar.html#如何使用)
配置方法和微信小程序相同，开发前请仔细阅读 [《微信小程序自定义 TabBar 文档》](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)。
### 配置信息[​](custom-tabbar.html#配置信息)

- 在 `app.config` 中按正常填写 **tabBar 项**的相关配置（为了向下兼容），并把 **tabBar 项**的 `custom` 字段设置为 `true`。
- 所有作为 TabBar 页面的 `config` 里需要声明 `usingComponents` 项，也可以在 `app.config` 设置全局开启。
**示例：**
app.config.js
```js
export default {
 tabBar: {
 custom: true,
 color: '#000000',
 selectedColor: '#000000',
 backgroundColor: '#000000',
 list: [
 {
 pagePath: 'page/component/index',
 text: '组件',
 },
 {
 pagePath: 'page/API/index',
 text: '接口',
 },
 ],
 },
}
```
page/component/index.config.js
```js
export default {
 navigationBarTitleText: '组件页',
 usingComponents: {},
}
```
page/API/index.config.js
```js
export default {
 navigationBarTitleText: '接口页',
 usingComponents: {},
}
```

### 添加 custom-tab-bar[​](custom-tabbar.html#添加-custom-tab-bar)
在 **src 目录**下添加 `custom-tab-bar` 目录，在里面书写组件，支持 React、Vue 和原生写法。
**React：**
```text
├── config
├── src
| └── custom-tab-bar
| ├── index.json.js
| └── index.jsx
└── package.json
```

**Vue：**
```text
├── config
├── src
| └── custom-tab-bar
| ├── index.json.js
| └── index.vue
└── package.json
```

**原生写法：**
```text
├── config
├── src
| └── custom-tab-bar
| ├── index.js
| ├── index.json
| ├── index.wxss
| └── index.wxml
└── package.json
```

### 图片资源引用[​](custom-tabbar.html#图片资源引用)
使用 React/Vue 开发自定义 TabBar 时，可以不使用 `import` 或 `require` 引用图片资源（Taro 会自动根据 TabBar 配置处理）。
如果使用了 `import`、`require` 或使用 `background-image` 时需要关注图片是否被 `url-loader` 处理为 base64，base64 的图片在 TabBar 中不能展示。
### 状态管理[​](custom-tabbar.html#状态管理)
默认 TabBar 与自定义 TabBar 的最大不同点在于，**默认 TabBar 在所有 TabBar 页共享一个组件实例，而自定义 TabBar 在各个 TabBar 页面初始化时都会创建一个新的组件实例**。
也就是说各个 TabBar 页内的自定义 TabBar 组件实例的状态是不共享的。因此对 TabBar 的状态管理（例如 `selected` 选中态）则尤为重要。
对于不同写法的自定义 TabBar，Taro 提供了不同的状态管理方案：
#### 1. 原生写法[​](custom-tabbar.html#1-原生写法)
微信小程序原生写法推荐使用 `getTabBar` 方法进行管理，如果你的自定义组件是使用原生写法编写的，那么可以参考[小程序官方提供的示例](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)。
**唯一需要注意的是**，在小程序原生页面是调用 `this.getTabBar`，但 Taro 的页面是 React/Vue 组件，`this` 指向的并不是原生页面对象。因此需要先获取原生页面对象再进行调用：
```js
// 页面 onShow 时
Taro.getCurrentInstance().page.getTabBar()
```

#### 2. React / Vue[​](custom-tabbar.html#2-react--vue)
React 和 Vue 推荐使用**状态管理工具**（Redux、Vuex 等）对 TabBar 页的状态进行管理。优点在于无须侵入各个 TabBar 页面的代码，逻辑可以归集在 TabBar 组件中。
如果开发者不希望使用状态管理工具，Taro 提供了 `Taro.getTabBar` API 以获取自定义 TabBar 组件（React/Vue 组件），然后开发者可以调用它上面的方法去更新 TabBar 组件的状态。
```js
// 页面 onShow 时
const pageObj = Taro.getCurrentInstance().page
const tabbar = Taro.getTabBar(pageObj)
```

[> 示例项目
](custom-tabbar.html#%E7%A4%BA%E4%BE%8B%E9%A1%B9%E7%9B%AE)> 中提供了两个例子，React 版本的例子展示了如何使用
`> Taro.getTabBar
`> 管理状态，Vue3 版本的例子则展示了如何使用状态管理工具来管理状态。

### 组件配置项[​](custom-tabbar.html#组件配置项)
自定义 TabBar 组件使用小程序的 `Component` 构造器构造，开发者在处理样式隔离等问题时可以需要对 `Component` 进行配置。这时开发者可以给 React/Vue 编写的自定义组件这些配置项属性，Taro 会把它们放置到 `Component` 构造对象上，目前支持：`options`、`externalClasses`、`behaviors`。
**例子：**

- React
- Vue示例代码
```jsx
// Class Component
class CustomTabBar extends Component {
 static options = {
 addGlobalClass: true,
 }
}

// Functional Component
function CustomTabBar() {}
CustomTabBar.options = {
 addGlobalClass: true,
}
```
示例代码
```html
<script>
 // 只支持 Options API 写法，不支持 <script setup>
 export default {
 options: {
 addGlobalClass: true,
 },
 }
</script>
```

## 常见问题[​](custom-tabbar.html#常见问题)
### 闪烁问题[​](custom-tabbar.html#闪烁问题)
#### 第一次加载 TabBar 页时 TabBar 会闪烁[​](custom-tabbar.html#第一次加载-tabbar-页时-tabbar-会闪烁)
自定义 TabBar 在各个 TabBar 页面初始化时都会创建一个新的组件实例导致。可以到微信小程序开发者社区寻找相关解决方案。
#### 切换 Tab 时图片闪烁[​](custom-tabbar.html#切换-tab-时图片闪烁)
尽量使用本地图片或 iconfont。
### 相关讨论[​](custom-tabbar.html#相关讨论)

- [https://github.com/NervJS/taro/issues/7302](https://github.com/NervJS/taro/issues/7302)
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
