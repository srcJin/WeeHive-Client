> Taro v3.3+ 开始支持

多年以来 Web 端沉淀了大量优秀的库和组件，我们希望能直接在小程序端进行复用。此外，我们希望能减少 H5 应用迁移到小程序端的成本，甚至能够直接运行在小程序端。因此，自 v3.3 起支持使用 HTML 标签编写 Taro 应用。
## 使用方法[​](use-h5.html#使用方法)
### 配置插件[​](use-h5.html#配置插件)

- 首先下载安装插件 `@tarojs/plugin-html`
```bash
yarn add @tarojs/plugin-html
```

- 然后在项目配置中添加使用插件
```js
// config/index.js
config = {
 // ...
 plugins: ['@tarojs/plugin-html'],
}
```

### 示例代码[​](use-h5.html#示例代码)

- React
- Vue示例代码
```jsx
function Index() {
 return <div>Hello World!</div>
}
```
示例代码
```html
<template>
 <div>Hello World!</div>
</template>
```

## 示例项目[​](use-h5.html#示例项目)

- [taro-weui](https://github.com/NervJS/taro-weui)
- [taro-antd-mobile](https://github.com/NervJS/taro-antd-mobile)
- [taro-vant](https://github.com/NervJS/taro-vant)
## 样式相关问题[​](use-h5.html#样式相关问题)
### 浏览器默认样式[​](use-h5.html#浏览器默认样式)
Taro 提供了两种内置的浏览器默认样式，可以根据项目需要进行引入。
根据经验，在 Web 端的项目中常常会写一些样式去重置部分浏览器的默认样式，因此一般情况下开发者并不需要所有的这些默认样式。我们建议手动挑选项目需要的默认样式添加到全局样式中。
#### 1. HTML4[​](use-h5.html#1-html4)
W3C HTML4 的内置样式。只有 HTML4 标签样式，体积较小，兼容性强，能适应大多数情况。
用法：
app.js
```js
import '@tarojs/taro/html.css'
```

#### 2. HTML5[​](use-h5.html#2-html5)
Chrome(Blink) HTML5 的内置样式。内置样式丰富，包括了大多数 HTML5 标签，体积较大，不一定支持所有小程序容器。
用法：
app.js
```js
import '@tarojs/taro/html5.css'
```

### 第三方组件库的尺寸变小了一倍[​](use-h5.html#第三方组件库的尺寸变小了一倍)
Taro 默认会使用 `postcss`**把 px 按比例解析为 rpx**，详情请见 [《设计稿及尺寸单位》](size.html)。
但很多第三方 H5 组件库不需要解析 `px` 单位，用户可以配置 `@tarojs/plugin-html` 插件的 [pxtransformBlackList](use-h5.html#pxtransformblacklist) 选项进行过滤。
### `<span>` 默认表现为块级样式[​](use-h5.html#span-默认表现为块级样式)
`<span>` 是行内元素，本来需要映射为同样是行内元素的 `<Text>` 组件。
但小程序的 `<Text>` 组件有一个限制，它只能嵌套 `<Text>` 自身，嵌套 `<View>`、`<Image>` 等组件都会不显示。也就是说，如果 `<span>` 映射为 `<Text>`，`<span>` 只能嵌套同样映射为 `<Text>` 的 `<i>`、`<b>` 等行内元素。
但是我们在适配一些 H5 组件库的时候发现，`<span>` 里很可能会嵌套 `<div>`、`<img>` 等标签，用法十分多样。因此我们决定把 `<span>` 映射为 `<View>`，以兼容 H5 标签写法的多样性。
这样做的缺点是，开发者需要自行使用样式令 `<span>` 默认表现为行内样式：
app.css
```scss
// 方法一：只使用部分需要的浏览器默认样式
.h5-span {
 display: inline;
}

// 方法二：直接引入全套浏览器默认样式
import '@tarojs/taro/html.css';
```

至于 `<i>` 等行内标签还是默认映射为 `<Text>`。如果需要修改映射规则，可以配置 `@tarojs/plugin-html` 插件的 [modifyElements](use-h5.html#modifyelements) 选项。
### 不支持部分 CSS 选择器[​](use-h5.html#不支持部分-css-选择器)
在小程序中部分 CSS 选择器不会生效，如：

- 通配符 `*`
- 媒体查询
- 属性选择器，当属性不是对应小程序组件的内置属性时
### 不支持使用 rem[​](use-h5.html#不支持使用-rem)
暂不支持 rem。
## 其它限制[​](use-h5.html#其它限制)
HTML 标准和小程序标准存在着很大的差异，有一些 Taro 能够抹平，但仍有部分差异无法处理。
### 表单组件[​](use-h5.html#表单组件)
HTML 标签和小程序组件两种规范之间，存在较大差异的部分主要是表单组件。

- 在使用 `<input type='checkbox'>` 或 `<input type='radio'>` 时，需要手动补充 `<CheckboxGroup>`、`<RadioGroup>` 组件。
- HTML 使用 `<select>` + `<option>` 实现选择器，而小程序使用 `<Picker>`。两者差异巨大，因此不作映射。当用户使用了 `<select>` 时，会提示用户直接使用 `<Picker>` 组件。
### 不能同步获取元素尺寸[​](use-h5.html#不能同步获取元素尺寸)
在 H5 中我们可以调用 DOM API **同步**获取元素的尺寸：
h5
```js
const el = document.getElementById('#inner')
const res = el.getBoundingClientRect()
console.log(res)
```

但是在小程序中，获取元素尺寸的 API 是**异步**的：
小程序
```js
const query = Taro.createSelectorQuery()
query
 .select('#inner')
 .boundingClientRect()
 .exec((res) => {
 console.log(res)
 })
```

因此 Taro 提供了这些 API 的异步版本，如 `getBoundingClientRect`。（如有遗漏，可以提交 [Issues](https://issue.taro.zone/) 让官方进行补充）
Taro
```js
const el = document.getElementById('#inner')
const res = await el.getBoundingClientRect()
console.log(res)
```

### DOM API 差异[​](use-h5.html#dom-api-差异)
`canvas`、`video`、`audio` 等元素在 H5 端可以直接调用 `HTMLElement` 上的方法。
h5
```js
const el = document.getElementById('myVideo')
el.play()
```

但是在 Taro 中，要调用组件上的原生方法，必须先创建对应的 `Context`：
小程序
```js
const ctx = Taro.createVideoContext('myVideo')
ctx.play()
```

### `<img>` 图片尺寸问题[​](use-h5.html#img-图片尺寸问题)
在 H5 中，不设置 `<img>` 的宽高时，浏览器会使用原图的宽高作为标签的宽高。
而在小程序中，不设置 `<Image>` 的宽高时，会使用默认样式中规定的宽高。
解决办法：用户在使用 `<img>` 时必须显式设置它的宽高。
### 不支持 ReactDOM 部分 API[​](use-h5.html#不支持-reactdom-部分-api)
Taro 使用 **React Reconciler** 实现了自定义的渲染器，相对于 ReactDOM 来说功能十分精简。
因此部分基于 ReactDOM 实现的 H5 组件会无法使用，如使用了：`unstable_renderSubtreeIntoContainer`。
### 不支持 React `Portal`[​](use-h5.html#不支持-react-portal)
### 不支持 Vue3 `Teleport`[​](use-h5.html#不支持-vue3-teleport)
### 不支持使用 SVG[​](use-h5.html#不支持使用-svg)
暂不支持使用 SVG。
## 插件配置项[​](use-h5.html#插件配置项)
### pxtransformBlackList[​](use-h5.html#pxtransformblacklist)
`regexp array`
命中数组中任意正则表达式的类名选择器，其样式声明块中的 `px` 单位不会被 Taro 解析。
用法：
config/index.js
```js
config = {
 plugins: [
 [
 '@tarojs/plugin-html',
 {
 // 包含 `demo-`、`van-` 的类名选择器中的 px 单位不会被解析
 pxtransformBlackList: [/demo-/, /van-/],
 },
 ],
 ],
}
```

### modifyElements[​](use-h5.html#modifyelements)
`function`
修改普通块级元素和行内元素的映射规则。
用法：
config/index.js
```ts
config = {
 plugins: [
 [
 '@tarojs/plugin-html',
 {
 modifyElements(inline: string[], block: string[]) {
 // 行内元素增加 <xxx>
 inline.push('xxx')
 // 行内元素添加 <span>，块级元素删除 <span>
 inline.push('span')
 block.splice(block.indexOf('span'), 1)
 },
 },
 ],
 ],
}
```

### enableSizeAPIs[​](use-h5.html#enablesizeapis)
`boolean`
默认值：`true`
设置是否能够使用 H5 同步获取元素尺寸的 API 的 异步版本，如 `getBoundingClientRect`。
用法：
config/index.js
```js
config = {
 plugins: [
 [
 '@tarojs/plugin-html',
 {
 // 这些异步 API 的代码将会从运行时代码中删除
 enableSizeAPIs: false,
 },
 ],
 ],
}
```

## 插件 postcss 配置项[​](use-h5.html#插件-postcss-配置项)
`@tarojs/plugin-html` 会启用 postcss 插件：`postcss-html-transform` 对样式进行一些处理，例如去除 `*` 选择符等。以下是 `postcss-html-transform` 的一些配置项：
### removeCursorStyle[​](use-h5.html#removecursorstyle)
信息
Taro v3.4.3 开始支持。
`boolean`
默认值：`true`
设置是否去除 `cursor` 相关样式。
用法：
config/index.js
```js
config = {
 // ...
 mini: {
 // ...
 postcss: {
 htmltransform: {
 enable: true,
 config: {
 removeCursorStyle: false,
 },
 },
 },
 },
}
```

## 详细设计[​](use-h5.html#详细设计)
RFC 文档：[《0004-rendering-html》](https://github.com/NervJS/taro-rfcs/blob/html-support/rfcs/0004-rendering-html.md)
## 附录[​](use-h5.html#附录)
### 一、标签名映射规则[​](use-h5.html#一标签名映射规则)
HTML 标签小程序组件块级标签view内联标签textspanviewimgimageanavigatora["href=javascript;"]viewinputinputinput["type=checkbox"]checkboxinput["type=radio"]radiobuttonbuttontextareatextareaprogressprogresslabellabelformformaudioaudiocanvascanvasvideovideoiframeweb-viewslotslot
### 二、属性名映射规则[​](use-h5.html#二属性名映射规则)
#### 1. HTML `<a>` 标签[​](use-h5.html#1-html-a-标签)
`<a>` 属性`<Navigator>` 属性hrefurltargetopenType
1.1 `<a>` 标签的 `target` 属性值对应关系：
`a[target]` 属性值`Navigator[open-type]` 属性值_blanknavigate_selfredirect
#### 2. HTML `<input>` 标签[​](use-h5.html#2-html-input-标签)
`<input>` 属性`<Input>` 属性autofocusfocusreadonlydisabled
2.1 `<input>` 标签的 `type` 属性值对应关系：
`input[type]` 属性值`Input[type]` 属性值telnumber`input[type=password]``input[password=true]`
#### 3. HTML `<textarea>` 标签[​](use-h5.html#3-html-textarea-标签)
`<textarea>` 属性`<Textarea>` 属性autofocusfocusreadonlydisabled
#### 4. HTML `<progress>` 标签[​](use-h5.html#4-html-progress-标签)
`<progress>` 属性`<Progress>` 属性value / max * 100precent
#### 5. HTML `<button>` 标签的 `type` 属性值对应关系[​](use-h5.html#5-html-button-标签的-type-属性值对应关系)
`button[type]``Button[form-type]``button[type=submit]``Button[form-type=submit]``button[type=reset]``Button[form-type=reset]`
### 三、事件映射规则[​](use-h5.html#三事件映射规则)
#### 1. 通用规则[​](use-h5.html#1-通用规则)
HTML 事件小程序组件事件clicktap
#### 2. HTML `<input>` 标签[​](use-h5.html#2-html-input-标签-1)
`<input>` 事件`<Input>` 事件onChangeonInputkeypressonConfirm
#### 2. HTML checkbox 控件[​](use-h5.html#2-html-checkbox-控件)
`input[type=checkbox]` 事件`<Checkbox>` 事件onChangebindtap
#### 3. HTML radio 控件[​](use-h5.html#3-html-radio-控件)
`input[type=radio]` 事件`<Radio>` 事件onChangebindtap
- 

- 
- 

- 
- 

- 
- 
- [``](use-h5.html#span-默认表现为块级样式)
- 
- 

- 

- 
- 
- 
- [``](use-h5.html#img-图片尺寸问题)
- 
- [``](use-h5.html#不支持-react-portal)
- [``](use-h5.html#不支持-vue3-teleport)
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
