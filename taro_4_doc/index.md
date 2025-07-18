# ## 简介[​](index.html#简介)
**Taro** 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 [微信](https://mp.weixin.qq.com/) / [京东](https://mp.jd.com/?entrance=taro) / [百度](https://smartprogram.baidu.com/) / [支付宝](https://mini.open.alipay.com/) / [字节跳动](https://developer.open-douyin.com/) / [QQ](https://q.qq.com/) / [飞书](https://open.feishu.cn/document/uYjL24iN/ucDOzYjL3gzM24yN4MjN) / [快手](https://mp.kuaishou.com/) 小程序 / H5 / RN 等应用。
现如今市面上端的形态多种多样，Web、React Native、微信小程序等各种端大行其道。当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。
## 特性[​](index.html#特性)
### 多端转换支持[​](index.html#多端转换支持)
Taro 3 可以支持转换到 H5、ReactNative 以及任意小程序平台。
目前官方支持转换的平台如下：

- [! H5](https://developer.mozilla.org/zh-CN/docs/Web?from=taro)
- [! React Native](https://reactnative.dev/?from=taro)
- [! 微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/?from=taro)
- [! 京东小程序](https://mp.jd.com/?from=taro)
- [! 百度智能小程序](https://smartprogram.baidu.com/developer/index.html?from=taro)
- [! 支付宝小程序](https://opendocs.alipay.com/mini/developer/getting-started?from=taro)
- [! 抖音小程序](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview?from=taro)
- [! QQ 小程序](https://q.qq.com/wiki/develop/miniprogram/frame/?from=taro)
- [! 钉钉小程序](https://open.dingtalk.com/document/org/develop-org-mini-programs?from=taro)
- [! 企业微信小程序](https://developers.weixin.qq.com/miniprogram/dev/devtools/qywx-dev.html?from=taro)
- [! 支付宝 IOT 小程序](https://opendocs.alipay.com/iot/multi-platform/vcs0fv?from=taro)
- [! 飞书小程序](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro)
- [! 快手小程序](https://mp.kuaishou.com/docs/develop/frame/config/conf_appjson.html?from=taro)
### 框架支持[​](index.html#框架支持)
在 Taro 3 中可以使用完整的 [**! React**](https://react.dev/) / [**! Vue**](https://vuejs.org/) / [**! Preact**](https://preactjs.com/) / [**! Svelte**](https://svelte.dev/) / [** Nerv**](https://github.com/NervJS/nerv) 开发体验，具体请参考：

- [基础教程——React](react-overall.html)
- [基础教程——Vue](vue-overall.html)
- [基础教程——Vue3](vue3.html)
- [基础教程——Preact](preact.html)
- React
- Vue示例代码
```jsx
import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

export default class Index extends Component {
 state = {
 msg: 'Hello World！',
 }

 componentWillMount() {}

 componentDidShow() {}

 componentDidHide() {}

 render() {
 return (
 <View className="index">
 <Text>{this.state.msg}</Text>
 </View>
 )
 }
}
```
示例代码
```html
<template>
 <view class="index">
 <text>{{msg}}</text>
 </view>
</template>

<script>
 export default {
 data() {
 return {
 msg: 'Hello World！',
 }
 },
 created() {},
 onShow() {},
 onHide() {},
 }
</script>
```

## 新闻资讯[​](index.html#新闻资讯)
## Taro UI[​](index.html#taro-ui)
> Taro 3 只能配合使用 taro-ui@next 版本

> 安装命令：
`> npm i taro-ui@next
`
一款基于 `Taro` 框架开发的多端 UI 组件库。
[Taro UI](https://taro-ui.jd.com) 特性：

- 基于 `Taro` 开发 UI 组件
- 一套组件可以在多端适配运行（`ReactNative` 端暂不支持）
- 提供友好的 API，可灵活的使用组件
## 学习资源[​](index.html#学习资源)
[【资讯】Taro 团队博客](https://docs.taro.zone/blog)
[【教程】5 分钟上手 Taro 开发](guide.html)
[【视频】5 分钟快速上手 Taro 开发小程序](https://mp.weixin.qq.com/s?__biz=MzU3NDkzMTI3MA==&mid=2247484205&idx=1&sn=935bb7a35c11c33563eeb7c3aaca3321&chksm=fd2bab04ca5c2212b4cd8aeb5858bd08517aeb31e20727b22d1eee00b394184e7e61359e7dd9&token=1180618535&lang=zh_CN#rd)
[【掘金小册】Taro 多端开发实现原理与实战](https://juejin.im/book/5b73a131f265da28065fb1cd?referrer=5ba228f16fb9a05d3251492d) (已下架，仅购买用户可阅)
更多的资源请点击查看 [更多资源](composition.html) ，如果您有好的资源或教程和大家分享，欢迎提交资源到 [awesome-taro](https://github.com/NervJS/awesome-taro)。
## 项目状态[​](index.html#项目状态)
![](https://repobeats.axiom.co/api/embed/275806b6f177f7e4c005e956d94440562635c36d.svg)
## 使用案例[​](index.html#使用案例)
Taro 已经投入了我们的生产环境中使用，业界也在广泛地使用 Taro 开发多端应用。
[查看更多的案例，请点击](https://docs.taro.zone/showcase)
[我们正在征集更多优秀案例，欢迎点击提交](https://github.com/NervJS/taro/issues/244)
![](https://raw.githubusercontent.com/NervJS/taro-user-cases/master/user-cases.jpg)

- 
- 

- 
- 

- 
- 
- 
- 
-
