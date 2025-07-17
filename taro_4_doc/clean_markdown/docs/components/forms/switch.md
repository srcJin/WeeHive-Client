# 开关选择器
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html)
## 类型[​](switch.html#类型)
```tsx
ComponentType<SwitchProps>
```

## 示例代码[​](switch.html#示例代码)

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
 <Text>默认样式</Text>
 <Switch checked/>
 <Switch/>
 <Text>推荐展示样式</Text>
 <Switch checked/>
 <Switch/>
 </View>
 )
 }
}
html
<template>
 <view class='components-page'>
 <text>默认样式</text>
 <switch :checked="true" />
 <switch />
 <text>推荐展示样式</text>
 <switch :checked="true" />
 <switch />
 </view>
</template>
```

## SwitchProps[​](switch.html#switchprops)
参数类型默认值必填说明checked`boolean``false`否是否选中defaultChecked`boolean`否设置在 React 非受控状态下，当前是否选中disabled`boolean``false`否是否禁用type"switch" or "checkbox"`"switch"`否样式，有效值：switch, checkboxcolor`string``"#04BE02"`否switch 的颜色，同 css 的 colornativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上name`string`否组件名字，用于表单提交获取数据。controlled`string``false`否是否为受控组件，为 true 时，checked 会完全受 setData 控制。ariaLabel`string`否无障碍访问，（属性）元素的额外描述onChange`CommonEventFunction<onChangeEventDetail>`否checked 改变时触发 change 事件
### API 支持度[​](switch.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridSwitchProps.checked✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwitchProps.defaultChecked✔️✔️✔️✔️✔️✔️✔️✔️✔️SwitchProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️SwitchProps.type✔️✔️✔️✔️✔️✔️✔️✔️✔️SwitchProps.color✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwitchProps.nativeProps✔️✔️SwitchProps.name✔️SwitchProps.controlled✔️SwitchProps.ariaLabel✔️SwitchProps.onChange✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
### onChangeEventDetail[​](switch.html#onchangeeventdetail)
参数类型value`boolean`
- 
- 
- 

- 
-
