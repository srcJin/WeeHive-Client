# [NutUI](https://nutui.jd.com/#/) 已发布 4.0 版本，新版本支持 CSS 动态主题、抽离独立的 Icon 包、更高效的按需引入，提供 80+ 高质量组件，覆盖移动端主流场景。
NutUI 4.0 从功能、组件、性能、官网四方面放入手，不断在组件库的丰富性、轻量化、易用性上进行改进，力求打造一款好用的移动端组件库，为开发者提效，为业务赋能，为开源贡献一份力量。
## 预览体验[​](nutui.html#预览体验)
![NutUI](https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png)![NutUI](https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg)
## 介绍[​](nutui.html#介绍)
通过本文你可以掌握 NutUI 的安装和使用方法，操作简单易上手，开发简洁快速。
## 安装 Taro 脚手架[​](nutui.html#安装-taro-脚手架)
```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# 使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

## 使用 NutUI 模板创建项目[​](nutui.html#使用-nutui-模板创建项目)
#### 1、使用命令创建 Taro 项目：[​](nutui.html#1使用命令创建-taro-项目)
```bash
taro init myApp
```

#### 2、按照下方图片依次选择，选择 Vue3 + NutUI4.0 模板[​](nutui.html#2按照下方图片依次选择选择-vue3--nutui40-模板)
!
## 在 Taro 项目中使用 NutUI[​](nutui.html#在-taro-项目中使用-nutui)
#### 1、安装 NutUI[​](nutui.html#1安装-nutui)
```text
npm i @nutui/nutui-taro
```

#### 2、Taro 相关配置[​](nutui.html#2taro-相关配置)
安装 [@tarojs/plugin-html](use-h5.html)
```bash
npm i @tarojs/plugin-html
```

在项目中配置
```javascript
// config/index.js
config = {
 // 开启 HTML 插件
 plugins: ['@tarojs/plugin-html'],
 // 配置全局 Scss 变量
 sass: {
 data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
 },
 // 配置 NutUI 375 尺寸
 designWidth: 375,
 deviceRatio: {
 640: 2.34 / 2,
 750: 1,
 828: 1.81 / 2,
 375: 2 / 1,
 },
}
```

#### 3、组件用法[​](nutui.html#3组件用法)
**方法一、常规用法**
```javascript
// app.ts
import { createApp } from 'vue'
import { Button } from '@nutui/nutui-taro'
// 引入所有组件的样式文件
import '@nutui/nutui-taro/dist/style.css'

const App = createApp({
 onShow(options) {},
})
App.use(Button)
export default App
```

**方法二、自动按需引入**
安装 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
```bash
npm i unplugin-vue-components -D
```

在 `Taro` 中配置插件：
```javascript
// config/index.js
import ComponentsPlugin from 'unplugin-vue-components/webpack'

const NutUIResolver = () => {
 return (name) => {
 if (name.startsWith('Nut')) {
 const partialName = name.slice(3)
 return {
 name: partialName,
 from: '@nutui/nutui-taro',
 sideEffects: `@nutui/nutui-taro/dist/packages/${partialName.toLowerCase()}/style`,
 }
 }
 }
}

const config = {
 // 小程序开发
 mini: {
 webpackChain(chain) {
 chain.plugin('unplugin-vue-components').use(
 ComponentsPlugin({
 resolvers: [NutUIResolver()],
 })
 )
 },
 },
 // Taro-H5 开发
 h5: {
 webpackChain(chain) {
 chain.plugin('unplugin-vue-components').use(
 ComponentsPlugin({
 resolvers: [NutUIResolver()],
 })
 )
 },
 },
}
```

配置完成后，可以直接在模板中使用 NutUI 组件，`unplugin-vue-components` 插件会自动注册对应的组件，并按需引入组件样式。
```html
# 直接使用
<template>
 <nut-button></nut-button>
</template>
javascript
# 移除手动引入和注册的代码
// import { Button } from '@nutui/nutui-taro';
// app.use(Button);
```

## 注意事项[​](nutui.html#注意事项)
#### 1、按需引入插件升级[​](nutui.html#1按需引入插件升级)
NutUI 4.0 移除了 `babel-plugin-import` 插件的使用，按需引入样式不再依赖于 `babel`，开发者可以选择其他效率更高的编译工具。同时，NutUI 适配了支持自动引入和注册组件的 `unplugin-vue-components` 插件，这将使 `Taro` 的开发体验有所提升。
#### 2、检查 Taro 是否安装成功[​](nutui.html#2检查-taro-是否安装成功)
```bash
taro -v
```

出现 Taro 版本号说明安装成功。
#### 3、安装 Taro 过程中出现 Saas 相关错误[​](nutui.html#3安装-taro-过程中出现-saas-相关错误)
可以考虑安装 `mirror-config-china` 后重试。
```bash
npm install -g mirror-config-china
```

#### 4、在 webpack 下使用按需引入时组件没有类型提示[​](nutui.html#4在-webpack-下使用按需引入时组件没有类型提示)
解决方案：`unplugin-vue-components` 插件会为引入的组件自动生成全局类型文件 `components.d.ts`，请保留该文件并在 `tsconfig.json` 中将它添加至 `include` 字段中。
```json
{
 "include": [
 ...
 "components.d.ts"
 ],
}
```

#### 5、技术栈使用[​](nutui.html#5技术栈使用)
工程开发需使用 **taro 3.5 以上版本 + vue3**，示例仓库：[taro3-nutui](https://github.com/jdf2e/nutui-demo/tree/master/taro)。

- 
- 
- 
- 
- 
-
