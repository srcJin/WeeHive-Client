# 备注
Taro v3.6 开始支持。
本篇将介绍如何在 Taro 中使用前端路由库，包括 [react-router](https://reactrouter.com/en/main) 和 [vue-router](https://router.vuejs.org/zh/)。
## Taro 页面路由管理[​](router-extend.html#taro-页面路由管理)
前端路由库的基本原理是监听 `popstate` 或 `hashchange` 事件触发后，读取 `location` 对象对视图进行操控更新。 Taro 为了支持前端路由库的使用，在运行时中引入了 `histroy``location` 对象的实现，且尽可能与 Web 端规范对齐，你可以在 `window` 对象上访问到 `history` 和 `location` 对象。
> 我们将
`> history
`> 和
`> location
`> 对象统称为页面路由状态。

小程序天然支持多页面(`pages`数组)，Taro 并非以整个应用为一个路由系统，而是顺应小程序规范以页面维度进行路由管理。每当切换页面时，会将当前页面的页面路由状态缓存。跳转至新页面后会重新创建页面路由状态，并挂载在 `window` 对象上。当返回上一级页面时，会重新将当前页面的页面路由状态挂载到 `window` 对象中。
> 你可以在 “示例 DEMO” 中观察页面切换过程中，
`> history
`> 与
`> location
`> 对象的变化.

需要说明的是，`location` 对象仅描述当前页面的链接状态，页面的跳转仍需要调用 `Taro.navigateTo()` 方法。
页面跳转
```js
// ❌ 错误
window.location.assign('...')
window.location.href = '...' // 无法实现页面跳转，但可以重新赋值
// ✅ 正确
Taro.navigateTo({ url: '...' })
```

## 页面路由初始化[​](router-extend.html#页面路由初始化)
当通过指定 `url` 进行页面跳转，进入新页面后，页面路由状态会初始化，例如：
```jsx
// 传入参数 id=2&type=test#a=1&b=2
Taro.navigateTo({
 url: '/pages/page/path/name?id=2&type=test#a=1&b=2',
})
```

此时可以从 `location.href` 上读取到完整链接信息 `https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2`，此时 `history.state` 为：
```json
{
 "state": null,
 "title": "",
 "url": "https://taro.com/pages/page/path/name?id=2&type=test#a=1&b=2"
}
```

## 使用路由库[​](router-extend.html#使用路由库)
信息
Taro 需要升级至 **v3.6**
### 应用配置[​](router-extend.html#应用配置)
在路由库中，诸如`<Link>` 组件内部会动态生成 `<a>` 标签，因此需要引入 [`@tarojs/plugin-html`](use-h5.html) 插件以支持在 Taro 中使用 `html` 标签开发组件。
config/index.js
```json
{
 "plugins": ["@tarojs/plugin-html"]
}
```

当 Taro DOM 序列化数据的 nn 字段为 HTML 标签时，会映射为对应的小程序组件名称。由于无法提前预知动态标签，因此需要应用显式告知可能会使用到的动态标签。例如在应用中塞入一个无样式的标签名即可：
```html
<View>
 <a></a>
</View>
```

### 代码示例[​](router-extend.html#代码示例)

- React
- Vue/pages/index/index.js
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default class Index extends Component {
 render() {
 return (
 <BrowserRouter>
 <View className="drawer-box">
 <View className="box-item">
 <Link to="/pages/router/index/view1?a=1&b=2">view1</Link>
 </View>
 <View className="box-item">
 <Link to="/pages/router/index/view2#a=3&b=4">view2</Link>
 </View>
 <View className="box-item">
 <Link to="/pages/router/index/2?a=1&b=2#a=3&b=4">view3</Link>
 </View>
 </View>

 <Routes>
 <Route path="/pages/browser-router/index" element={<Home />}></Route>
 <Route path="/pages/router/index/view1" element={<View1 />}></Route>
 <Route path="/pages/router/index/view2" element={<View2 />}></Route>
 <Route path="/pages/router/index/:id" element={<View3 />}></Route>
 </Routes>
 </BrowserRouter>
 )
 }
}
```
app.js
```js
import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
// 自定义组件
import Home from './components/home.vue'
import Tab1 from './components/tab-1.vue'
import Tab2 from './components/tab-2.vue'
import Tab3 from './components/tab-3.vue'

const routes = [
 { path: '/', component: Home },
 { path: '/tab1', component: Tab1 },
 { path: '/tab2', component: Tab2 },
 { path: '/tab3/:groupId/:id', component: Tab3 },
]

const router = createRouter({
 history: createWebHistory(),
 routes,
})

const App = createApp({
 onShow(options) {},
})

App.use(router)

export default App
```
/pages/index/index.vue
```html
<template>
 <view>
 <view>
 <a></a>
 <view>
 <view class="tab-box">
 <router-link class="tab-item" to="/" replace>Home</router-link>
 <router-link class="tab-item" to="/tab1?name=advancedcat&from=china" replace>Tab 1</router-link>
 <router-link class="tab-item" to="/tab2">Tab 2</router-link>
 <router-link class="tab-item" to="/tab3/1234/8765">Tab 3</router-link>
 <router-link class="tab-item" :to="{ name: 'user', params: { id: '9876' }}">User</router-link>
 </view>
 <router-view></router-view>
 </view>
 </view>
 </view>
</template>

<script setup></script>
```

支付宝小程序的 `navigator` 组件不支持 `onTap` 事件，这导致 `<Link>` 组件或 `<a>` 标签无法捕获点击事件，从而无法拦截事件触发路由更新。 因此，如果你需要适配支付宝小程序，需要额外处理 `<Link>` 组件或 `<a>` 标签的动态转换，指定 `as` 属性，`@tarojs/plugin-html` 插件会将其转换为指定的标签名：
```jsx
<a as="view"></a> // => 将其转换为 view 标签展示
<Link as="view" to="xxx" />
<NavLink as="view" to="xxx" />
```

## 示例 DEMO[​](router-extend.html#示例-demo)
在引入路由库前，可以从以下 demo 中看到更多路由特性用法。

- [React + react-router v6](https://github.com/AdvancedCat/taro-react-router)
- [Vue3 + vue-router v4](https://github.com/AdvancedCat/taro-vue-router)
## API[​](router-extend.html#api)
### window.location[​](router-extend.html#windowlocation)
> 在小程序环境中，跨域三要素锁定为
`> https://taro.com
`> 。

#### 属性[​](router-extend.html#属性)
属性类型默认值说明protocol`string``https:`协议头部hostname`string``taro.com`域名主体port`string``""`端口号pathname`string``/`路径部分search`string``""`查询参数，非空则包含 `?` 字符hash`string``""`hash 部分，非空则包含 `#` 字符toString`() => string`返回完整 `href`
可以通过 `window.location.xxx = 'yyy'` 来重新赋值对应属性.特别的，`window.location.href = 'new url'` 会按照对应部分分别设置相应属性(除了跨域三要素不可修改)， 同时 `history` 历史栈增加一条记录。
#### 事件[​](router-extend.html#事件)
##### hashchange[​](router-extend.html#hashchange)
当 `hash` 部分发生变化时，同步触发 `hashchange` 事件：
```js
window.addEventListener('hashchange', () => {
 console.log('hash发生变化')
})
```

### window.history[​](router-extend.html#windowhistory)
#### 属性[​](router-extend.html#属性-1)
属性类型说明state`{state: any; title: string; url: string}`历史堆栈的顶部状态length`number`历史堆栈长度go`(delta: number) => {}`切换至相对位置的历史状态，越界时取历史堆栈的边界值back`() => {}`等价于 `go(-1)`forward`() => {}`等价于 `go(1)`pushState`(state: any, title: string, url: string) => {}`按指定的名称和 URL（如果提供该参数）将数据 push 进历史堆栈replaceState`(state: any, title: string, url: string) => {}`更新 state，但不修改历史堆栈
#### 事件[​](router-extend.html#事件-1)
##### popstate[​](router-extend.html#popstate)
当调用 `history.go()` 方法时，同步触发 `hashchange` 事件，`history.state` 会更新：
```js
window.addEventListener('popstate', () => {
 console.log('popstate触发')
})
```

## 注意事项[​](router-extend.html#注意事项)

- 在 Web 端可以通过赋值 location.href 实现页面加载，但在小程序中不适用，小程序端的页面跳转仍建议使用 `Taro.navigateTo` 等官方 api。在小程序侧，应该将 `location` 上的属性视为只读。
- `location.origin` 将默认为 `https://taro.com`，`location.assign()``location.replace()` 在小程序侧无效；
- 需要为支付宝小程序做额外适配，见文档说明；
## 详细设计[​](router-extend.html#详细设计)
详细设计请看 [RFC](https://github.com/NervJS/taro-rfcs/blob/feat/history/rfcs/0009-router-support.md)。

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
