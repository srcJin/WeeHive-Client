# 信息
Taro v3.6.23 开始支持，目前只支持 **React**，暂不支持 Vue。底层实现原理请参考 [RFC 文档](https://github.com/NervJS/taro/discussions/14708)。
在节点数量增多到一定量级时，Taro3 的渲染性能会大幅下降，出现白屏时间长、交互延时等问题。经排查发现是目前 Taro 的 `<template>` 模板语法所造成的，为此我们参考 Taro 1/2 的思路，提供了 **CompileMode** 渲染模式。`CompileMode` 适合长列表 Item 这类会被重复渲染多次的组件使用，在长列表场景能提升 **30%** 以上的首开速度，同时能有效减少节点过多时产生的交互延时问题。CompileMode 可以说是应对复杂页面性能优化的“银弹”。
## 使用方法[​](complier-mode.html#使用方法)
首先在 Taro 编译配置中开启使用半编译模式：
config/index.js
```js
const config = {
 mini: {
 experimental: {
 compileMode: true
 }
 }
 // ...
}
```

然后只需要给 Taro 基础组件添加 `compileMode` 属性，该组件及其 children 将会被编译为单独的小程序模板：
```jsx
function GoodsItem () {
 return (
 <View compileMode>
 ...
 </View>
 )
}
```

更为详细的用法请看 [详细用法](complier-mode.html#%E8%AF%A6%E7%BB%86%E7%94%A8%E6%B3%95)
## 常见问题[​](complier-mode.html#常见问题)
### 1. 编译出的模板文件会增加包体积[​](complier-mode.html#1-编译出的模板文件会增加包体积)
半编译模式使用了空间来换时间，编译出模板会令包体积增大。增加的文件大小视 JSX 写法而定，可以在编译后的页面目录下找到对应的模板文件，如 `pages/index/index.jsx` 编译出的模板位置在 `dist/pages/index/index-templates.wxml`。因此开发者应权衡后使用。
### 2. 只能优化部分语法[​](complier-mode.html#2-只能优化部分语法)
编译阶段只能识别、优化部分语法，不支持的语法会自动回退到 Taro3 默认的渲染模式，具体支持的语法可以查阅 [RFC 文档](https://github.com/NervJS/taro/discussions/14708)。
有一种常见语法需要注意：编译阶段只能识别 Taro 基础组件，而 React、Vue 组件的渲染会自动回退到旧的渲染模式。如果这些 React、Vue 组件也需要使用半编译模式，需要在组件内部再次添加 `compileMode` 属性：
```jsx
function Index () {
 return (
 <View compileMode>
 <Text>Hello</Text> {/* 能被编译阶段识别 */}
 <Foo /> {/*会自动回退到 Taro3 默认的渲染模式*/}
 </View>
 )
}

function Foo () {
 return (
 // 如果希望 Foo 组件也使用半编译模式，需要在 Foo 组件内部再次添加 compileMode 属性
 <View compileMode>
 ...
 </View>
 )
}

```

## 详细用法[​](complier-mode.html#详细用法)
### 条件表达式 + 自定义组件[​](complier-mode.html#条件表达式--自定义组件)
通过状态来控制展示哪一个自定义组件的场景在业务中是很常见的，比如以下场景
```jsx
export default function Index () {
 const [show, setShow] = useState(true)

 return (
 <View compileMode>
 <Button onClick={()=>setShow(!show)}>toggle show</Button>
 <View>
 {
 show ? <Item/> : null
 }
 </View>
 </View>
 )
}

function Item () {
 return (
 <View compileMode>
 item
 </View>
 )
}
```

正常来说，上面这段代码是没问题的，但是由于 compileMode 得在编译的时候，给元素加上 compileIf 的属性，所以必须是一个确切的标签，所以以上写法暂不支持。后续计划设法把这个属性直接写入在 template 节点上，以支持以上写法。现阶段，先用以下的降级方法：
```jsx
export default function Index () {
 const [show, setShow] = useState(true)

 return (
 <View compileMode>
 <Button onClick={()=>setShow(!show)}>toggle show</Button>
 <View>
 <Item show={show}/>
 </View>
 </View>
 )
}

function Item (props) {
 const { show } = props
 return (
 show 
 ?
 <View compileMode>
 item
 </View>
 : null
 )
}
```

即把组件的展示，放到子组件中去进行判断。
### 使用 jsx 变量[​](complier-mode.html#使用-jsx-变量)
直接使用 jsx 变量，在半编译的情况下是会报错，如以下代码：
```jsx
export default function Index () {

 const item = (<View>item</View>)
 return (
 <View compileMode>
 <View>
 {item}
 </View>
 </View>
 )
}
```

要改为 render 开头的渲染函数，如下：
```jsx
export default function Index () {

 const renderItem = () => <View>item</View>
 return (
 <View compileMode>
 <View>
 {renderItem()}
 </View>
 </View>
 )
}
```

不过这种写法，并不会把 `renderItem` 的返回值直接打入模版里面，所以这种写法对性能会有一定的消耗。
### 表单驱动 jsx 元素[​](complier-mode.html#表单驱动-jsx-元素)
这个场景下，其实就是 「使用 jsx 变量」 的一个延伸，如以下代码：
```jsx
export default function Index () {

 const itemMap = {
 a: <View compileMode>itemA</View>,
 b: <View compileMode>itemB</View>,
 c: <View compileMode>itemC</View>
 }
 return (
 <View compileMode>
 {itemMap.a}
 {itemMap.b}
 {itemMap.c}
 </View>
 )
}
```

需要改为以下写法：
```jsx
export default function Index () {
 const itemMap = {
 renderA: ()=> <View compileMode>itemA</View>,
 renderB: ()=> <View compileMode>itemB</View>,
 renderC: ()=> <View compileMode>itemC</View>
 }
 return (
 <View compileMode>
 <View>
 {itemMap.renderA()}
 {itemMap.renderB()}
 {itemMap.renderC()}
 </View>
 </View>
 )
}
```

## 半编译预处理[​](complier-mode.html#半编译预处理)
信息
`4.0.7` 开始支持
允许在组件中自定义的以 `render` 开头的函数，来实现组件内部的模块化能力。
### 使用方法[​](complier-mode.html#使用方法-1)

- 函数必须是 `render` 开头
- 函数 `return` 的第一个标签必须带上 `compileMode="subRenderFn"` 属性
### 限制[​](complier-mode.html#限制)

- `render` 开头的函数暂不支持拥有自己的作用域代码
- 传递给 `render` 开头的函数的参数，现阶段必须是一个变量
### 例子[​](complier-mode.html#例子)
```jsx
const ComponentA = (props) => {
 const { data1, data2 } = props
 const renderXxxx = (props1, props2, ...) => { 
 //1. 这里暂不支持编码，涉及到作用域的问题
 return (
 //return 的第一个标签必须带上 compileMode="subRenderFn" 属性
 <View compileMode="subRenderFn">
 {props1}
 {props2}
 ...
 </View>
 )
 }
 
 return (
 <View compileMode>
 // 2. props 暂时只支持传递变量，涉及到变量替换的问题
 {renderXxxx(data1, data2)}
 </View>
 )
}
```

## 最佳实践[​](complier-mode.html#最佳实践)
总的来说，要最大限度的发挥半编译模式的优势，就是要把尽量把静态节点，尽可能的写到同一个 jsx 里面去。自我检查的最简单的方式就是看看编译后的模版数量是否足够少，每个模版是否包含了足够多节点。 如果一个 template 只是包含了少数节点，那其实无法带来很大的提升。可以结合半编译预处理，使用组件内的 `render` 开头的函数，进行模块化拆分 如以下代码：
```jsx
import { View, Image, Text } from "@tarojs/components";

import './index.scss'

const dataList = [
 {
 src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/35189432_1009333_ED.jpg?defaultImage=NoImageAvailableInternal",
 title: "这是标题1",
 subTitle: "这是子标题1",
 tag:[
 {
 name: "标签1",
 type: 1
 },
 {
 name: "标签2",
 type: 2
 },
 {
 name: "标签3",
 type: 3
 }
 ],
 des: "这是描述1",
 subDes:'这是子描述1',
 prices: {
 normal: {
 int: '86',
 float: '88'
 },
 line: 100
 }
 },
 {
 src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/62866950_989218_ED.jpg?defaultImage=NoImageAvailableInternal",
 title: "这是标题2",
 subTitle: "这是子标题2",
 tag:[
 {
 name: "标签1",
 type: 1
 },
 {
 name: "标签2",
 type: 2
 },
 {
 name: "标签3",
 type: 3
 }
 ],
 tagType: 2,
 des: "这是描述2",
 subDes:'这是子描述2',
 prices: {
 normal: {
 int: '60',
 float: '70'
 },
 line: 100
 }
 },
 {
 src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/62507586_989743_ED_M.jpg?defaultImage=NoImageAvailableInternal",
 title: "这是标题3",
 subTitle: "这是子标题3",
 tag:[
 {
 name: "标签1",
 type: 1
 },
 {
 name: "标签2",
 type: 2
 },
 {
 name: "标签3",
 type: 3
 }
 ],
 des: "这是描述3",
 subDes:'这是子描述3',
 prices: {
 normal: {
 int: '85',
 float: '10'
 },
 line: 100
 }
 },
 {
 src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/33263465_997778_ED.jpg?defaultImage=NoImageAvailableInternal",
 title: "这是标题4",
 subTitle: "这是子标题4",
 tag:[
 {
 name: "标签1",
 type: 1
 },
 {
 name: "标签2",
 type: 2
 },
 {
 name: "标签3",
 type: 3
 }
 ],
 des: "这是描述4",
 subDes:'这是子描述4',
 prices: {
 normal: {
 int: '8',
 float: '88'
 },
 line: 100
 }
 },
 {
 src: "https://media.tiffany.cn/is/image/Tiffany/EcomBrowseM/60957401_1023440_ED.jpg?defaultImage=NoImageAvailableInternal",
 title: "这是标题5",
 subTitle: "这是子标题5",
 tag:[
 {
 name: "标签1",
 type: 1
 },
 {
 name: "标签2",
 type: 2
 },
 {
 name: "标签3",
 type: 3
 }
 ],
 des: "这是描述5",
 subDes:'这是子描述5',
 prices: {
 normal: {
 int: '77',
 float: '88'
 },
 line: 100
 }
 }
]

const Item = (props) =>{
 const { itemIndex } = props
 const sectionIndex = itemIndex % 5
 const data = dataList[sectionIndex]
 const { tag, src, title, subTitle, des, subDes, prices } = data

 const renderCard = ()=> {
 return (
 <View className='item-body-wrap' compileMode="subRenderFn">
 {renderImage()}
 {renderContent()}
 </View>
 )
 }
 const renderImage = ()=> {
 return (
 <View className='image-wrap' compileMode="subRenderFn">
 <Image src={src} mode='aspectFill' className='image-wrap' />
 </View>
 )
 }

 const renderContent = () =>{
 return (
 <View className='body-left'compileMode="subRenderFn">
 {renderTitle()}
 {renderDes()}
 {renderTags(tag)}
 {renderPrices()}
 {renderBtn()}
 </View>
 )

 }

 const renderTitle = () =>{
 return (
 <View className='title-wrap' compileMode="subRenderFn">
 <View className='title'>
 {title}
 </View>
 <View className='sub-title'>
 {subTitle}
 </View>
 </View>
 )
 }

 const renderDes = () => {
 return (
 <View className='des-wrap' compileMode="subRenderFn">
 <View className='des'>
 {des}
 </View>
 <View className='sub-des'>
 {subDes}
 </View>
 </View>
 )
 }

 const renderPrices = () =>{
 return (
 <View className='price-wrap' compileMode="subRenderFn">
 <View className='price-normal'>
 <Text className='price-normal-int'>{prices.normal.int}</Text>
 <Text className='price-normal-float'>.{prices.normal.float}</Text>
 </View>
 <View className='price-line'>
 {prices.line}
 </View>
 </View>
 )
 }

 const renderTag1 = (tag, key)=>{
 return <View compileMode="subRenderFn" className="tag1" key={key}>{tag}</View>
 }
 const renderTag2 = (tag, key)=>{
 return <View compileMode="subRenderFn" className="tag2" key={key}>{tag}</View>
 }
 const renderTag3 = (tag, key)=>{
 return <View compileMode="subRenderFn" className="tag3" key={key}>{tag}</View>
 }

 const renderTags = (tags)=>{
 return (<View className="tag-wrap" compileMode="subRenderFn">
 {
 tags.map((e, index)=>{
 const { name, type } = e
 return (
 <>
 {
 type === 1 ? renderTag1(name, index) :
 type === 2 ? renderTag2(name, index) :
 type === 3 ? renderTag3(name, index) : null
 }
 </>
 )
 })
 }
 </View>)
 }

 const renderBtn = ()=>{
 return (
 <View className='add' compileMode="subRenderFn">
 <Image src='https://img12.360buyimg.com/imagetools/jfs/t1/169993/8/27041/5311/61b1b219E03cffee0/778c223bd7677925.png' mode='aspectFill' className='add-image' />
 </View>
 )
 }

 return (
 <View key={`s${sectionIndex}i${itemIndex}`} compileMode>
 {renderCard()}
 </View>
 )
 
}

export default Item 
css
.item {
 &-header{
 background-color: black;
 color: white;
 display: flex;
 align-items: center;
 height: 100%;
 border: 1px red solid;
 z-index: 10;
 box-sizing: border-box;
 }
 &-body{
 display: flex;
 align-items: center;
 border: 1px red solid;
 box-sizing: border-box;
 &-wrap {
 width: 100%;
 display: flex;
 align-items: center;
 .image-wrap {
 width: 70px;
 height: 70px;
 }

 .body-left {
 flex: 1;
 position: relative;
 margin-left: 20px;
 .title-wrap {
 display: flex;
 align-items: center;
 .sub-title {
 font-size: 14px;
 color: gray;
 margin-left: 5px;
 }
 .title {
 font-size: 20px;
 }
 }
 
 .des-wrap {
 display: flex;
 .sub-des {
 margin-left: 4px;
 font-size: 12px;
 color: gray;
 }
 .des {
 font-size: 16px;
 }
 }

 .tag-wrap {
 .tag1 {
 border: 1px gray solid;
 border-radius: 1px;
 margin-right: 2px;
 font-size: 12px;
 }
 .tag2 {
 border: 1px red dashed;
 border-radius: 1px;
 margin-right: 2px;
 font-size: 12px;
 }
 .tag3 {
 border: 1px green solid;
 border-radius: 1px;
 margin-right: 2px;
 font-size: 12px;
 }
 display: flex;
 }
 .price {
 &-wrap{
 display: flex;
 align-items: flex-end;
 }

 &-normal {
 color: red;
 display: flex;
 align-items: flex-end;
 &-int{
 line-height: 12px;
 font-size: 12px;
 }
 &-float{
 line-height: 10px;
 font-size: 10px;
 } 
 }
 &-line {
 line-height: 10px;
 font-size: 10px;
 color: gray;
 text-decoration: line-through;
 }
 }
 .add {
 position: absolute;
 right: 5px;
 bottom: 5px;
 .add-image{
 width: 20px;
 height: 20px;
 }
 }

 }
 }
 }
}
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
