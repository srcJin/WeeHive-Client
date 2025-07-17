# 滑动选择器
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/slider.html)
## 类型[​](slider.html#类型)
```tsx
ComponentType<SliderProps>
```

## 示例代码[​](slider.html#示例代码)

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
 <Text>设置 step</Text>
 <Slider step={1} value={50}/>
 <Text>显示当前 value</Text>
 <Slider step={1} value={50} showValue/>
 <Text>设置最小/最大值</Text>
 <Slider step={1} value={100} showValue min={50} max={200}/>
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <text>设置 step</text>
 <slider step="1" value="50"/>
 <text>显示当前 value</text>
 <slider step="1" value="50" :show-value="true" />
 <text>设置最小/最大值</text>
 <slider step="1" value="100" :show-value="true" min="50" max="200"/>
 </view>
</template>
```

## SliderProps[​](slider.html#sliderprops)
参数类型默认值必填说明min`number``0`否最小值max`number``100`否最大值step`number``1`否步长，取值必须大于 0，并且可被(max - min)整除disabled`boolean``false`否是否禁用value`number``0`否当前取值defaultValue`string`否设置 React 非受控状态下的初始取值color`string``"#e9e9e9"`否背景条的颜色（请使用 backgroundColor）selectedColor`string``"#1aad19"`否已选择的颜色（请使用 activeColor）activeColor`string``"#1aad19"`否已选择的颜色backgroundColor`string``"#e9e9e9"`否背景条的颜色blockSize`number``28`否滑块的大小，取值范围为 12 - 28blockColor`string``"#ffffff"`否滑块的颜色showValue`boolean``false`否是否显示当前 valuename`string`否组件名字，用于表单提交获取数据。trackSize`string``4`否轨道线条高度。handleSize`string``22`否滑块大小。handleColor`string`否滑块填充色，同 CSS 色值。ariaLabel`string`否无障碍访问，（属性）元素的额外描述onChange`CommonEventFunction<onChangeEventDetail>`否完成一次拖动后触发的事件onChanging`CommonEventFunction<onChangeEventDetail>`否拖动过程中触发的事件
### API 支持度[​](slider.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridSliderProps.min✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.max✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.step✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.value✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.defaultValue✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.color✔️✔️✔️✔️✔️SliderProps.selectedColor✔️✔️✔️✔️✔️SliderProps.activeColor✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.backgroundColor✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.blockSize✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.blockColor✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.showValue✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.name✔️SliderProps.trackSize✔️SliderProps.handleSize✔️SliderProps.handleColor✔️SliderProps.ariaLabel✔️SliderProps.onChange✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SliderProps.onChanging✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
### onChangeEventDetail[​](slider.html#onchangeeventdetail)

- 
- 
- 

- 
-
