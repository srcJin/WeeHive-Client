# 富文本
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html)
## 类型[​](rich-text.html#类型)
```tsx
ComponentType<RichTextProps>
```

## 示例代码[​](rich-text.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 state = {
 nodes: [{
 name: 'div',
 attrs: {
 class: 'div_class',
 style: 'line-height: 60px; color: red;'
 },
 children: [{
 type: 'text',
 text: 'Hello World!'
 }]
 }]
 }
 render () {
 return (
 <RichText nodes={this.state.nodes} />
 )
 }
}
html
<template>
 <view class="components-page">
 <rich-text :nodes="nodes"></rich-text>
 </view>
</template>

<script>
export default {
 name: 'Index',
 data() {
 return {
 nodes: [{
 name: 'div',
 attrs: {
 class: 'div_class',
 style: 'line-height: 60px; color: red;'
 },
 children: [{
 type: 'text',
 text: 'Hello World!'
 }]
 }]
 }
 },
 onReady () {
 console.log('onReady')
 }
}
</script>
```

## RichTextProps[​](rich-text.html#richtextprops)
参数类型默认值必填说明userSelect`boolean``false`否文本是否可选，该属性会使节点显示为 blocknodes`Nodes`否节点列表/ HTML Stringspace`keyof TSpace`否显示连续空格selectable`string``false（基础库 3.150.1 以前版本）true（基础库 3.150.1 及以后版本）`否富文本是否可以长按选中，可用于复制，粘贴，长按搜索等场景imageMenuPrevent`string``false`否阻止长按图片时弹起默认菜单（将该属性设置为image-menu-prevent或image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性preview`string`否富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 previewonTap`CommonEventFunction`否触摸。onTouchstart`CommonEventFunction`否触摸动作开始。onTouchmove`CommonEventFunction`否触摸移动事件。onTouchcancel`CommonEventFunction`否触摸动作被打断。onTouchend`CommonEventFunction`否触摸动作结束。onLongtap`CommonEventFunction`否触摸后，超过 500ms 再离开。mode"default" or "compat" or "aggressive" or "inline-block" or "web"`default`否布局兼容模式
### API 支持度[​](rich-text.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridRichTextProps.userSelect✔️✔️✔️✔️RichTextProps.nodes✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️RichTextProps.space✔️✔️✔️✔️✔️✔️✔️✔️RichTextProps.selectable✔️✔️✔️RichTextProps.imageMenuPrevent✔️RichTextProps.preview✔️RichTextProps.onTap✔️RichTextProps.onTouchstart✔️RichTextProps.onTouchmove✔️RichTextProps.onTouchcancel✔️RichTextProps.onTouchend✔️RichTextProps.onLongtap✔️RichTextProps.mode✔️
### TSpace[​](rich-text.html#tspace)
space 的合法值
参数说明ensp中文字符空格一半大小emsp中文字符空格大小nbsp根据字体设置的空格大小
### Text[​](rich-text.html#text)
文本节点
参数类型默认值说明备注type`"text"`文本类型text`string``""`文本字符串`支持 entities`
### HTMLElement[​](rich-text.html#htmlelement)
元素节点，默认为元素节点 全局支持class和style属性，不支持 id 属性。
参数类型必填说明备注type`"node"`否HTML 类型name`string`是标签名`支持部分受信任的 HTML 节点`attrs`Object`否属性`支持部分受信任的属性，遵循 Pascal 命名法`children`Nodes`否子节点列表`结构和 nodes 一致`
## Nodes[​](rich-text.html#nodes)
节点类型
> 现支持两种节点，通过type来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的HTML节点 元素节点：type = node*

### 类型[​](rich-text.html#类型-1)
```tsx
(Text | HTMLElement)[] | string
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
