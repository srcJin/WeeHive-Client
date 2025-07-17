# 多选项目
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/checkbox.html)
## 类型[​](checkbox.html#类型)
```tsx
ComponentType<CheckboxProps>
```

## 示例代码[​](checkbox.html#示例代码)

- React
- Vue
```tsx
export default class PageCheckbox extends Component {
 state = {
 list: [
 {
 value: '美国',
 text: '美国',
 checked: false
 },
 {
 value: '中国',
 text: '中国',
 checked: true
 },
 {
 value: '巴西',
 text: '巴西',
 checked: false
 },
 {
 value: '日本',
 text: '日本',
 checked: false
 },
 {
 value: '英国',
 text: '英国',
 checked: false
 },
 {
 value: '法国',
 text: '法国',
 checked: false
 }
 ]
 }
 render () {
 return (
 <View className='page-body'>
 <View className='page-section'>
 <Text>默认样式</Text>
 <Checkbox value='选中' checked>选中</Checkbox>
 <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
 </View>
 <View className='page-section'>
 <Text>推荐展示样式</Text>
 {this.state.list.map((item, i) => {
 return (
 <Label className='checkbox-list__label' for={i} key={i}>
 <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>
 </Label>
 )
 })}
 </View>
 </View>
 )
 }
}
html
<template>
 <view class="container">
 <view class="page-section">
 <text>默认样式</text>
 <checkbox value="选中" :checked="true">选中</checkbox>
 <checkbox style="margin-left: 20rpx;" value="未选中">未选中</checkbox>
 </view>
 <view class="page-section">
 <text>推荐展示样式(Taro 团队成员):</text>
 <label v-for="item in list" class="checkbox-list__label">
 <checkbox class="checkbox-list__checkbox" :value="item.value" :checked="item.checked">{{ item.text }}</checkbox>
 </label>
 </view>
 </view>
</template>

<script>
export default {
 data() {
 return {
 list: [
 {
 value: '美国',
 text: '美国',
 checked: false
 },
 {
 value: '中国',
 text: '中国',
 checked: true
 },
 {
 value: '巴西',
 text: '巴西',
 checked: false
 },
 {
 value: '日本',
 text: '日本',
 checked: false
 },
 {
 value: '英国',
 text: '英国',
 checked: false
 },
 {
 value: '法国',
 text: '法国',
 checked: false
 }
 ]
 }
 }
}
</script>
```

## CheckboxProps[​](checkbox.html#checkboxprops)
参数类型默认值必填说明value`string`是`<Checkbox/>`标识，选中时触发`<CheckboxGroup/>`的 change 事件，并携带 `<Checkbox/>` 的 valuedisabled`boolean``false`否是否禁用checked`boolean``false`否当前是否选中，可用来设置默认选中color`string`否checkbox的颜色，同 css 的 colorname`string`否Checkbox 的名字nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上ariaLabel`string`否无障碍访问，（属性）元素的额外描述onChange`CommonEventFunction<{ value: string[]; }>`否选中项发生变化时触发 change 事件，小程序无此 API
### API 支持度[​](checkbox.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridCheckboxProps.value✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️CheckboxProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️CheckboxProps.checked✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️CheckboxProps.color✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️CheckboxProps.name✔️✔️✔️CheckboxProps.nativeProps✔️✔️CheckboxProps.ariaLabel✔️CheckboxProps.onChange✔️✔️✔️✔️✔️
- 
- 
- 

-
