# 文本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/text.html)
## 类型[​](text.html#类型)
```tsx
ComponentType<TextProps>
```

## 示例代码[​](text.html#示例代码)

- React
- Vue
```tsx
export default class PageView extends Component {
 state = {
 contents: [],
 contentsLen: 0
 }

 add = () => {
 this.setState(prev => {
 const cot = prev.contents.slice()
 cot.push({ text: 'hello world' })
 return {
 contents: cot,
 contentsLen: cot.length
 }
 })
 }

 remove = () => {
 this.setState(prev => {
 const cot = prev.contents.slice()
 cot.pop()
 return {
 contents: cot,
 contentsLen: cot.length
 }
 })
 }

 render () {
 return (
 <View className='container'>
 {this.state.contents.map((item, index) => (
 <Text key={index}>{item.text}</Text>
 ))}
 <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>add line</Button>
 <Button className='btn-max-w button_style' plain type='default' disabled={this.state.contentsLen ? false : true} onClick={this.remove}>remove line</Button>
 </View>
 )
 }
}
html
<template>
 <view class="container">
 <view v-for="(item, index) in contents">
 <text>{{item.text}} line {{index + 1}}</text>
 </view>
 <button class="btn-max-w button_style" :plain="true" type="default" @tap="add">add line</button>
 <button class="btn-max-w button_style" :plain="true" type="default" :disabled="contentsLen ? false : true" @tap="remove">remove line</button>
</template>

<script>
export default {
 data() {
 return {
 contents: [],
 contentsLen: 0
 }
 },
 methods: {
 add () {
 const cot = this.contents.slice()
 cot.push({ text: 'hello world' })
 this.contents = cot
 this.contentsLen = cot.length
 },

 remove () {
 const cot = this.contents.slice()
 cot.pop()
 this.contents = cot
 this.contentsLen = cot.length
 }
 }
}
</script>
```

## TextProps[​](text.html#textprops)
参数类型默认值必填说明selectable`boolean``false`否文本是否可选userSelect`boolean``false`否文本是否可选，该属性会使文本节点显示为 inline-blockspace`keyof TSpace`否显示连续空格decode`boolean``false`否是否解码numberOfLines`number`否多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致。overflow`keyof Overflow``'visible'`否文本溢出处理maxLines`number`否限制文本最大行数
### API 支持度[​](text.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridTextProps.selectable✔️✔️✔️✔️✔️✔️✔️✔️✔️TextProps.userSelect✔️✔️✔️TextProps.space✔️✔️✔️✔️✔️✔️✔️✔️TextProps.decode✔️✔️✔️✔️✔️(默认解码，不支持设置)TextProps.numberOfLines✔️TextProps.overflow✔️TextProps.maxLines✔️✔️
### TSpace[​](text.html#tspace)
space 的合法值
参数说明ensp中文字符空格一半大小emsp中文字符空格大小nbsp根据字体设置的空格大小
### Overflow[​](text.html#overflow)
参数说明clip修剪文本fade淡出ellipsis显示省略号visible文本不截断
- 
- 
- 

- 
- 
-
