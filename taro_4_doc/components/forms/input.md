# 输入框。该组件是原生组件，使用时请注意相关限制
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
## 类型[​](input.html#类型)
```tsx
ComponentType<InputProps>
```

## 示例代码[​](input.html#示例代码)

- React
- Vue
```tsx
class App extends Component {
 render () {
 return (
 <View className='example-body'>
 <Text>可以自动聚焦的 input</Text>
 <Input type='text' placeholder='将会获取焦点' focus/>
 <Text>控制最大输入长度的 input</Text>
 <Input type='text' placeholder='最大输入长度为 10' maxLength='10'/>
 <Text>数字输入的 input</Text>
 <Input type='number' placeholder='这是一个数字输入框'/>
 <Text>密码输入的 input</Text>
 <Input type='password' password placeholder='这是一个密码输入框'/>
 <Text>带小数点的 input</Text>
 <Input type='digit' placeholder='带小数点的数字键盘'/>
 <Text>身份证输入的 input</Text>
 <Input type='idcard' placeholder='身份证输入键盘'/>
 <Text>控制占位符颜色的 input</Text>
 <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red'/>
 </View>
 )
 }
}
html
<template>
 <view class="example-body">
 <text>可以自动聚焦的 input</text>
 <input type="text" placeholder="将会获取焦点" :focus="true" />
 <text>控制最大输入长度的 input</text>
 <input type="text" placeholder="最大输入长度为 10" maxLength="10"/>
 <text>数字输入的 input</text>
 <input type="number" placeholder="这是一个数字输入框"/>
 <text>密码输入的 input</text>
 <input type="password" :password="true" placeholder="这是一个密码输入框"/>
 <text>带小数点的 input</text>
 <input type="digit" placeholder="带小数点的数字键盘"/>
 <text>身份证输入的 input</text>
 <input type="idcard" placeholder="身份证输入键盘"/>
 <text>控制占位符颜色的 input</text>
 <input type="text" placeholder="占位符字体是红色的" placeholder-style="color:red;"/>
 </view>
</template>
```

## InputProps[​](input.html#inputprops)
参数类型默认值必填说明value`string`否输入框的初始内容defaultValue`string`否设置 React 非受控输入框的初始内容type`keyof Type``"text"`否input 的类型password`boolean``false`否是否是密码类型placeholder`string`否输入框为空时占位符placeholderStyle`string`否指定 placeholder 的样式placeholderClass`string``"input-placeholder"`否指定 placeholder 的样式类placeholderTextColor`string`否指定 placeholder 的文本颜色disabled`boolean``false`否是否禁用maxlength`number``140`否最大输入长度，设置为 -1 的时候不限制最大长度cursorSpacing`number``0`否指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离autoFocus`boolean``false`否(即将废弃，请直接使用 focus )自动聚焦，拉起键盘
**不推荐使用**focus`boolean``false`否获取焦点confirmType`keyof ConfirmType``done`否设置键盘右下角按钮的文字，仅在type='text'时生效confirmHold`boolean``false`否点击键盘右下角按钮时是否保持键盘不收起cursor`number`否指定focus时的光标位置cursorColor`string`否光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制selectionStart`number``-1`否光标起始位置，自动聚集时有效，需与selection-end搭配使用selectionEnd`number``-1`否光标结束位置，自动聚集时有效，需与selection-start搭配使用adjustPosition`boolean``true`否键盘弹起时，是否自动上推页面holdKeyboard`boolean``false`否focus 时，点击页面的时候不收起键盘alwaysEmbed`boolean``false`否强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)safePasswordCertPath`string`否安全键盘加密公钥的路径，只支持包内路径safePasswordLength`number`否安全键盘输入密码长度safePasswordTimeStamp`number`否安全键盘加密时间戳safePasswordNonce`string`否安全键盘加密盐值safePasswordSalt`string`否安全键盘计算hash盐值，若指定custom-hash 则无效safePasswordCustomHash`string`否安全键盘计算hash的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))`randomNumber`boolean``false`否当 type 为 number, digit, idcard 数字键盘是否随机排列controlled`boolean``false`否是否为受控组件。为 true 时，value 内容会完全受 setData 控制。

建议当 type 值为 text 时不要将 controlled 设置为 true,详见 [Bugs & Tips](https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip)nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上name`string`否组件名字，用于表单提交获取数据。alwaysSystem`boolean``false`否是否强制使用系统键盘和 Web-view 创建的 input 元素。为 true 时，confirm-type、confirm-hold 可能失效。ariaLabel`string`否无障碍访问，（属性）元素的额外描述clueType`number``0`否用于分发目的。取值：0 和 1，其中 0 表示默认，1 表示手机号，需要和留资分发配置一起使用，详情见留资分发配置。onInput`CommonEventFunction<inputEventDetail>`否当键盘输入时，触发input事件，event.detail = {value, cursor, keyCode}，处理函数可以直接 return 一个字符串，将替换输入框的内容。onFocus`CommonEventFunction<inputForceEventDetail>`否输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度onBlur`CommonEventFunction<inputValueEventDetail>`否输入框失去焦点时触发onConfirm`CommonEventFunction<inputValueEventDetail>`否点击完成按钮时触发onKeyboardHeightChange`CommonEventFunction<onKeyboardHeightChangeEventDetail>`否键盘高度发生变化的时候触发此事件onNickNameReview`CommonEventFunction`否用户昵称审核完毕后触发，仅在 type 为 "nickname" 时有效，event.detail = { pass, timeout }onSelectionChange`CommonEventFunction`否选区改变事件, {selectionStart, selectionEnd}onKeyboardCompositionStart`CommonEventFunction`否输入法开始新的输入时触发 （仅当输入法支持时触发）onKeyboardCompositionUpdate`CommonEventFunction`否输入法输入字符时触发（仅当输入法支持时触发）onKeyboardCompositionEnd`CommonEventFunction`否输入法输入结束时触发（仅当输入法支持时触发）onKeyoardHeightChangeWorklet`string`否键盘高度变化时触发。event.detail = {height: height, pageBottomPadding: pageBottomPadding}； height: 键盘高度，pageBottomPadding: 页面上推高度
### API 支持度[​](input.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridInputProps.value✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.defaultValue✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.type✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.password✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.placeholder✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.placeholderStyle✔️✔️✔️✔️✔️✔️✔️✔️InputProps.placeholderClass✔️✔️✔️✔️✔️✔️InputProps.placeholderTextColor✔️✔️InputProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.maxlength✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.cursorSpacing✔️✔️✔️✔️✔️InputProps.autoFocus✔️✔️✔️✔️✔️InputProps.focus✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.confirmType✔️✔️✔️(confirm-type 与 enableNative 属性冲突，若希望 confirm-type 生效，enableNative 不能设定为 false，而且不能设定 always-system)✔️✔️✔️✔️✔️InputProps.confirmHold✔️✔️✔️✔️✔️✔️InputProps.cursor✔️✔️✔️✔️✔️✔️✔️✔️InputProps.cursorColor✔️InputProps.selectionStart✔️✔️✔️✔️✔️✔️✔️InputProps.selectionEnd✔️✔️✔️✔️✔️✔️✔️InputProps.adjustPosition✔️✔️✔️✔️✔️✔️InputProps.holdKeyboard✔️✔️InputProps.alwaysEmbed✔️InputProps.safePasswordCertPath✔️InputProps.safePasswordLength✔️InputProps.safePasswordTimeStamp✔️InputProps.safePasswordNonce✔️InputProps.safePasswordSalt✔️InputProps.safePasswordCustomHash✔️InputProps.randomNumber✔️InputProps.controlled✔️InputProps.nativeProps✔️✔️InputProps.name✔️InputProps.alwaysSystem✔️InputProps.ariaLabel✔️InputProps.clueType✔️InputProps.onInput✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.onFocus✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.onBlur✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.onConfirm✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️InputProps.onKeyboardHeightChange✔️✔️✔️✔️InputProps.onNickNameReview✔️InputProps.onSelectionChange✔️InputProps.onKeyboardCompositionStart✔️InputProps.onKeyboardCompositionUpdate✔️InputProps.onKeyboardCompositionEnd✔️InputProps.onKeyoardHeightChangeWorklet✔️
### Type[​](input.html#type)
Input 类型
参数说明text文本输入键盘number数字输入键盘idcard身份证输入键盘digit带小数点的数字键盘safe-password密码安全输入键盘[指引](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/safe-password.html)nickname昵称输入键盘numberpad数字输入键盘digitpad带小数点的数字键盘idcardpad身份证输入键盘
#### API 支持度[​](input.html#api-支持度-1)
API微信小程序支付宝小程序H5React NativeHarmonyHarmony hybridType.text✔️✔️✔️✔️✔️Type.number✔️✔️✔️✔️✔️Type.idcard✔️✔️✔️Type.digit✔️✔️✔️✔️✔️Type.safe-password✔️✔️Type.nickname✔️✔️Type.numberpad✔️Type.digitpad✔️Type.idcardpad✔️
### ConfirmType[​](input.html#confirmtype)
Confirm 类型
参数说明send右下角按钮为“发送”search右下角按钮为“搜索”next右下角按钮为“下一个”go右下角按钮为“前往”done右下角按钮为“完成”
### inputEventDetail[​](input.html#inputeventdetail)
> 注意：React-Native 端
`> inputEventDetail
`> 仅实现参数
`> value
`> ，若需实时获取光标位置则可通过
[`> onSelectionChange
`](https://reactnative.dev/docs/textinput#onselectionchange)> 实现。

参数类型说明value`string`输入值cursor`number`光标位置keyCode`number`键值
### inputForceEventDetail[​](input.html#inputforceeventdetail)
参数类型说明value`string`输入值height`number`键盘高度
### inputValueEventDetail[​](input.html#inputvalueeventdetail)
参数类型说明value`string`输入值
### onKeyboardHeightChangeEventDetail[​](input.html#onkeyboardheightchangeeventdetail)
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
