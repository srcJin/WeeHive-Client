# 每一个 Taro 应用都需要一个入口组件（Vue 组件）用来注册应用。入口文件默认是 `src` 目录下的 `app.js`。
在入口组件中我们可以设置全局状态或访问小程序入口实例的生命周期。
#### 注意：[​](vue-entry.html#注意)

- 自 Taro v3.1 开始，Vue2 入口组件的写法有 **Breaking Changes**，详情请见 [3.1.0 发布信息](https://github.com/NervJS/taro/releases/tag/v3.1.0)。
- 由于 Vue3 Global API 有变化（[0009-global-api-change](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md)），Vue3 的入口组件写法和 Vue2 不同。
## 代码示例[​](vue-entry.html#代码示例)

- Vue2
- Vue3app.js
```js
import Vue from 'vue'
// 假设我们已经在 './store' 配置好了 vuex
import store from './store'

const App = {
 store,

 // 可以使用所有的 Vue 生命周期方法
 mounted() {},

 // 对应 onLaunch
 onLaunch() {},

 // 对应 onShow
 onShow(options) {},

 // 对应 onHide
 onHide() {},

 render(h) {
 // this.$slots.default 是将要会渲染的页面
 return h('block', this.$slots.default)
 },
}

export default App
```
app.js
```jsx
import { createApp } from 'vue'

const app = createApp({
 // 可以使用所有的 Vue 生命周期方法
 mounted () {},

 // 对应 onLaunch
 onLaunch () {},

 // 对应 onShow
 onShow (options) {},

 // 对应 onHide
 onHide () {},

 // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export app
```

## 入口组件配置[​](vue-entry.html#入口组件配置)
请参考 [全局配置](app-config.html)
## 生命周期方法[​](vue-entry.html#生命周期方法)
> 在 Vue2 和 Vue3 中，Taro 额外添加的生命周期方法的写法一致

入口组件除了支持 Vue 的生命周期方法外，还根据小程序的标准，额外支持以下生命周期：
### onLaunch (options)[​](vue-entry.html#onlaunch-options)
> 在小程序环境中对应 app 的
`> onLaunch
`> 。

在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。
#### 参数[​](vue-entry.html#参数)
##### options[​](vue-entry.html#options)
属性类型说明pathstring启动小程序的路径scenenumber启动小程序的场景值queryObject启动小程序的 query 参数shareTicketstringshareTicket，详见获取更多转发信息referrerInfoObject来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}
##### options.referrerInfo[​](vue-entry.html#optionsreferrerinfo)
属性类型说明appIdstring来源小程序，或者公众号（微信中）extraDataObject来源小程序传过来的数据，微信和百度小程序在 scene=1037 或 1038 时支持sourceServiceIdstring来源插件，当处于插件运行模式时可见
> options 参数的字段在不同小程序中可能存在差异，如：

> 场景值 scene，在微信小程序和百度小程序中存在区别，请分别参考
[> 微信小程序文档
](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)> 和
[> 百度小程序文档
](https://smartprogram.baidu.com/docs/data/scene/)
### onShow (options)[​](vue-entry.html#onshow-options)
程序启动，或切前台时触发。
和 `onLaunch` 生命周期一样，在此生命周期中通过访问 `options` 参数或调用 `getCurrentInstance().router`，可以访问到程序初始化参数。
参数与 `onLaunch` 中获取的基本一致，但**百度小程序**中补充两个参数如下：
属性类型说明entryTypestring展现的来源标识，取值为 user/ schema /sys :
user：表示通过 home 前后
切换或解锁屏幕等方式调起；
schema：表示通过协议调起;
sys：其它appURLstring展现时的调起协议，仅当 entryType 值为 schema 时存在
### onHide ()[​](vue-entry.html#onhide-)
程序切后台时触发。
### onError (error)[​](vue-entry.html#onerror-error)
信息
Taro v3.5.0+ 开始支持
小程序发生脚本错误或 API 调用报错时触发。
### onPageNotFound (Object)[​](vue-entry.html#onpagenotfound-object)
程序要打开的页面不存在时触发。
#### 参数[​](vue-entry.html#参数-1)
##### Object[​](vue-entry.html#object)
属性类型说明pathstring不存在页面的路径queryObject打开不存在页面的 query 参数isEntryPageboolean是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）
### onUnhandledRejection (Object)[​](vue-entry.html#onunhandledrejection-object)
信息
Taro v3.5.10+ 开始支持
小程序有未处理的 Promise 拒绝时触发。
#### 参数[​](vue-entry.html#参数-2)
##### Object[​](vue-entry.html#object-1)
属性类型说明reasonstring拒绝原因，一般是一个 Error 对象promisePromise被拒绝的 Promise 对象
> 注意：
**> 支付宝小程序
**> 需要在源码根目录的
`> project.alipay.json
`> 文件中添加配置
`> enableAppxNg: true
`> 才能在真机环境进行监听。

- 
- 
- 

- 
- 
- 
- 
- 
-
