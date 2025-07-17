# 多行输入框。该组件是原生组件，使用时请注意相关限制
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html)
## 类型[​](textarea.html#类型)
```tsx
ComponentType<TextareaProps>
```

## 示例代码[​](textarea.html#示例代码)

- React
- Vue
```tsx
export default class PageView extends Component {
 constructor() {
 super(...arguments)
 }

 render() {
 return (
 <View className='components-page'>
 <Text>输入区域高度自适应，不会出现滚动条</Text>
 <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>
 <Text>这是一个可以自动聚焦的 textarea</Text>
 <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <text>输入区域高度自适应，不会出现滚动条</text>
 <textarea style="background:#efefef;width:100%;min-height:80px;padding:0 30rpx;" :auto-height="true" />
 <text>这是一个可以自动聚焦的 textarea</text>
 <textarea style="background:#efefef;width:100%;height:80px;padding:0 30rpx;" :auto-focusd="true" />
 </view>
</template>
```

## TextareaProps[​](textarea.html#textareaprops)
参数类型默认值必填说明value`string`否输入框的内容defaultValue`string`否设置 React 非受控输入框的初始内容placeholder`string`否输入框为空时占位符placeholderStyle`string`否指定 placeholder 的样式
需传入对象，格式为 { fontSize: number, fontWeight: string, color: string }placeholderClass`string``"textarea-placeholder"`否指定 placeholder 的样式类disabled`boolean``false`否是否禁用maxlength`number``140`否最大输入长度，设置为 -1 的时候不限制最大长度autoFocus`boolean``false`否自动聚焦，拉起键盘focus`boolean``false`否获取焦点autoHeight`boolean``false`否是否自动增高，设置 autoHeight 时，style.height不生效fixed`boolean``false`否如果 Textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 truecursorSpacing`number``0`否指定光标与键盘的距离，单位 px 。取 Textarea 距离底部的距离和 cursorSpacing 指定的距离的最小值作为光标与键盘的距离cursor`number``-1`否指定 focus 时的光标位置showConfirmBar`boolean``true`否是否显示键盘上方带有”完成“按钮那一栏selectionStart`number``-1`否光标起始位置，自动聚集时有效，需与 selectionEnd 搭配使用selectionEnd`number``-1`否光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用adjustPosition`boolean``true`否键盘弹起时，是否自动上推页面holdKeyboard`boolean``false`否focus 时，点击页面的时候不收起键盘disableDefaultPadding`boolean``false`否是否去掉 iOS 下的默认内边距nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上confirmType"send" or "search" or "next" or "go" or "done" or "return"否设置键盘右下角按钮的文字confirmHold`boolean`否点击键盘右下角按钮时是否保持键盘不收起name`string`否组件名字，用于表单提交获取数据。showCount`boolean``true`否是否渲染字数统计功能（是否删除默认计数器/是否显示字数统计）。controlled`boolean``false`否是否为受控组件。为 true 时，value 内容会完全受 setData 控制。ariaLabel`string`否无障碍访问，（属性）元素的额外描述adjustKeyboardTo`boolean``false`否键盘对齐位置onFocus`CommonEventFunction<onFocusEventDetail>`否输入框聚焦时触发onBlur`CommonEventFunction<onBlurEventDetail>`否输入框失去焦点时触发onLineChange`CommonEventFunction<onLineChangeEventDetail>`否输入框行数变化时调用onInput`CommonEventFunction<onInputEventDetail>`否当键盘输入时，触发 input 事件

**onInput 处理函数的返回值并不会反映到 textarea 上**onConfirm`CommonEventFunction<onConfirmEventDetail>`否点击完成时， 触发 confirm 事件onKeyboardHeightChange`CommonEventFunction<onKeyboardHeightChangeEventDetail>`否键盘高度发生变化的时候触发此事件onSelectionChange`CommonEventFunction`否选区改变事件, {selectionStart, selectionEnd}onKeyboardCompositionStart`CommonEventFunction`否输入法开始新的输入时触发 （仅当输入法支持时触发）onKeyboardCompositionUpdate`CommonEventFunction`否输入法输入字符时触发（仅当输入法支持时触发）onKeyboardCompositionEnd`CommonEventFunction`否输入法输入结束时触发（仅当输入法支持时触发）
### API 支持度[​](textarea.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridTextareaProps.value✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.defaultValue✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.placeholder✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.placeholderStyle✔️✔️✔️✔️✔️✔️✔️TextareaProps.placeholderClass✔️✔️✔️✔️✔️✔️TextareaProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.maxlength✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.autoFocus✔️✔️✔️✔️✔️✔️TextareaProps.focus✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.autoHeight✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.fixed✔️✔️✔️✔️TextareaProps.cursorSpacing✔️✔️✔️✔️✔️TextareaProps.cursor✔️✔️✔️✔️✔️TextareaProps.showConfirmBar✔️✔️✔️✔️✔️TextareaProps.selectionStart✔️✔️✔️✔️✔️✔️TextareaProps.selectionEnd✔️✔️✔️✔️✔️✔️TextareaProps.adjustPosition✔️✔️✔️✔️✔️TextareaProps.holdKeyboard✔️✔️TextareaProps.disableDefaultPadding✔️✔️TextareaProps.nativeProps✔️✔️TextareaProps.confirmType✔️✔️✔️✔️TextareaProps.confirmHold✔️✔️✔️TextareaProps.name✔️TextareaProps.showCount✔️TextareaProps.controlled✔️TextareaProps.ariaLabel✔️TextareaProps.adjustKeyboardTo✔️TextareaProps.onFocus✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.onBlur✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.onLineChange✔️✔️✔️✔️✔️✔️TextareaProps.onInput✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.onConfirm✔️✔️✔️✔️✔️✔️✔️✔️✔️TextareaProps.onKeyboardHeightChange✔️✔️✔️TextareaProps.onSelectionChange✔️TextareaProps.onKeyboardCompositionStart✔️TextareaProps.onKeyboardCompositionUpdate✔️TextareaProps.onKeyboardCompositionEnd✔️
### onFocusEventDetail[​](textarea.html#onfocuseventdetail)
参数类型说明value`string`输入值height`number`键盘高度
### onBlurEventDetail[​](textarea.html#onblureventdetail)
参数类型说明value`string`输入值cursor`number`光标位置
### onLineChangeEventDetail[​](textarea.html#onlinechangeeventdetail)
参数类型height`number`heightRpx`number`lineCount`number`
### onInputEventDetail[​](textarea.html#oninputeventdetail)
参数类型说明value`string`输入值cursor`number`光标位置keyCode`number`键值
### onConfirmEventDetail[​](textarea.html#onconfirmeventdetail)
参数类型说明value`string`输入值
### onKeyboardHeightChangeEventDetail[​](textarea.html#onkeyboardheightchangeeventdetail)
参数类型说明height`number`键盘高度duration`number`持续时间
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
