# 本篇将介绍如何在 Taro 中配置路由、实现路由跳转和传参等方法。
## 路由配置[​](router.html#路由配置)
Taro 遵循微信小程序的路由规范。只需要修改全局配置的 [pages](app-config.html#pages) 属性，配置为 Taro 应用中每个页面的路径即可。
> 使用 react-router、vue-router 等路由库，请参照
[> 下一节
](router-extend.html)> 。

## 路由跳转[​](router.html#路由跳转)
可以通过 Taro 提供的 API 来跳转到目的页面。路由 API 的详细用法请查看 API 文档的 [导航](apis/route/navigateTo.html) 章节。
示例代码
```jsx
// 跳转到目的页面，打开新页面
Taro.navigateTo({
 url: '/pages/page/path/name',
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
 url: '/pages/page/path/name',
})
```

### 路由传参[​](router.html#路由传参)
可以通过在所有跳转的 `url` 后面添加查询字符串参数进行跳转传参，例如：
```jsx
// 传入参数 id=2&type=test
Taro.navigateTo({
 url: '/pages/page/path/name?id=2&type=test',
})
```

### 获取路由参数[​](router.html#获取路由参数)
跳转成功后，在目标页面的**生命周期**方法中，可以通过 `Taro.getCurrentInstance().router.params` 获取路由参数。

- React
- Vue示例代码
```jsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'

class Index extends Component {
 // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
 // 而不是频繁地调用此 API
 $instance = getCurrentInstance()

 componentDidMount() {
 // 获取路由参数
 console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
 }

 render() {
 return <View className="index" />
 }
}

export default Index
```
示例代码
```html
<template>
 <view className="index" />
</template>

<script>
 import Taro from '@tarojs/taro'

 export default {
 created() {
 // 建议在页面初始化时把 getCurrentInstance() 的结果保存下来供后面使用，
 // 而不是频繁地调用此 API
 this.$instance = Taro.getCurrentInstance()
 },
 mounted() {
 // 获取路由参数
 console.log(this.$instance.router.params) // 输出 { id: 2, type: 'test' }
 },
 }
</script>
```

## H5[​](router.html#h5)
H5 路由还支持设置路由模式、设置 basename、路由守卫等能力，详情请看 [Taro H5 文档](h5.html#%E8%B7%AF%E7%94%B1)。

- 
- 

- 
- 

-
