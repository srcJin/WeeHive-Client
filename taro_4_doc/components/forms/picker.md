# 从底部弹起的滚动选择器
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/picker.html)
## 类型[​](picker.html#类型)
```tsx
ComponentType<PickerSelectorProps | PickerMultiSelectorProps | PickerTimeProps | PickerDateProps | PickerRegionProps>
```

## 示例代码[​](picker.html#示例代码)

- React
- Vue
```tsx
export default class PagePicker extends Component {
 state = {
 selector: ['美国', '中国', '巴西', '日本'],
 selectorChecked: '美国',
 timeSel: '12:01',
 dateSel: '2018-04-22'
 }

 onChange = e => {
 this.setState({
 selectorChecked: this.state.selector[e.detail.value]
 })
 }

 onTimeChange = e => {
 this.setState({
 timeSel: e.detail.value
 })
 }
 onDateChange = e => {
 this.setState({
 dateSel: e.detail.value
 })
 }

 render () {
 return (
 <View className='container'>
 <View className='page-body'>
 <View className='page-section'>
 <Text>地区选择器</Text>
 <View>
 <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
 <View className='picker'>
 当前选择：{this.state.selectorChecked}
 </View>
 </Picker>
 </View>
 </View>
 <View className='page-section'>
 <Text>时间选择器</Text>
 <View>
 <Picker mode='time' onChange={this.onTimeChange}>
 <View className='picker'>
 当前选择：{this.state.timeSel}
 </View>
 </Picker>
 </View>
 </View>
 <View className='page-section'>
 <Text>日期选择器</Text>
 <View>
 <Picker mode='date' onChange={this.onDateChange}>
 <View className='picker'>
 当前选择：{this.state.dateSel}
 </View>
 </Picker>
 </View>
 </View>
 </View>
 </View>
 )
 }
}
html
<template>
 <view class="page-body">
 <view class="page-section">
 <text>地区选择器</text>
 <view>
 <picker mode="selector" :range="selector" @change="onChange">
 <view class="picker">
 当前选择：{{selectorChecked}}
 </view>
 </picker>
 </view>
 </view>
 <view class="page-section">
 <text>时间选择器</text>
 <view>
 <picker mode="time" @change="onTimeChange">
 <view class="picker">
 当前选择：{{timeSel}}
 </view>
 </picker>
 </view>
 </view>
 <view class="page-section">
 <text>日期选择器</text>
 <view>
 <picker mode="date" @change="onDateChange">
 <view class="picker">
 当前选择：{{dateSel}}
 </view>
 </picker>
 </view>
 </view>
 </view>
</template>

<script>
 export default {
 data() {
 return {
 selector: ['美国', '中国', '巴西', '日本'],
 selectorChecked: '美国',
 timeSel: '12:01',
 dateSel: '2018-04-22'
 }
 },
 methods: {
 onChange: function(e) {
 this.selectorChecked = this.selector[e.detail.value]
 },

 onTimeChange: function(e) {
 this.timeSel = e.detail.value
 },

 onDateChange: function(e) {
 this.dateSel = e.detail.value
 }
 }
 }
</script>
```

## PickerStandardProps[​](picker.html#pickerstandardprops)
选择器通用参数
参数类型默认值必填说明headerText`string`否选择器的标题，微信小程序中仅安卓可用mode`keyof Mode``"selector"`否选择器类型，默认是普通选择器disabled`boolean``false`否是否禁用onCancel`CommonEventFunction`否取消选择或点遮罩层收起 picker 时触发textProps`PickerText`否用于替换组件内部文本
### API 支持度[​](picker.html#api-支持度)
API微信小程序H5React NativeHarmonyHarmony hybridPickerStandardProps.headerText✔️PickerStandardProps.mode✔️✔️✔️✔️✔️PickerStandardProps.disabled✔️✔️✔️✔️PickerStandardProps.onCancel✔️✔️✔️✔️✔️PickerStandardProps.textProps✔️✔️✔️
### Mode[​](picker.html#mode)
选择器类型
参数说明selector普通选择器multiSelector多列选择器time时间选择器date日期选择器region省市区选择器
### PickerText[​](picker.html#pickertext)
参数类型必填okText`string`否cancelText`string`否
## PickerSelectorProps[​](picker.html#pickerselectorprops)
普通选择器：mode = selector
参数类型默认值必填说明mode`"selector"`否选择器类型rangestring[] or number[] or Record<string, any>[]`[]`是mode为 selector 或 multiSelector 时，range 有效rangeKey`string`否当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容value`number``0`否表示选择了 range 中的第几个（下标从 0 开始）defaultValue`number`否设置 React 非受控状态下的初始取值itemStyle`StyleProp<TextStyle>``{}`否mode为 selector 或 multiSelector 时 itemStyle 有效indicatorStyle`StyleProp<ViewStyle>``{}`否mode为 selector 或 multiSelector 时 indicatorStyle 有效onChange`CommonEventFunction<ChangeEventDetail>`否value 改变时触发 change 事件
### API 支持度[​](picker.html#api-支持度-1)
API微信小程序H5React NativeHarmonyHarmony hybridPickerSelectorProps.range✔️✔️✔️✔️✔️PickerSelectorProps.rangeKey✔️✔️✔️✔️✔️PickerSelectorProps.value✔️✔️✔️✔️✔️PickerSelectorProps.defaultValue✔️✔️✔️✔️PickerSelectorProps.itemStyle✔️PickerSelectorProps.indicatorStyle✔️PickerSelectorProps.onChange✔️✔️✔️✔️✔️
### ChangeEventDetail[​](picker.html#changeeventdetail)
参数类型说明valuestring or number表示变更值的下标
## PickerMultiSelectorProps[​](picker.html#pickermultiselectorprops)
多列选择器：mode = multiSelector
参数类型默认值必填说明mode`"multiSelector"`是选择器类型rangestring[][] or number[][] or Record<string, any>[][]`[]`是mode为 selector 或 multiSelector 时，range 有效rangeKey`string`否当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容valuestring[] or number[] or Record<string, any>[]`[]`是表示选择了 range 中的第几个（下标从 0 开始）itemStyle`StyleProp<TextStyle>``{}`否mode为 selector 或 multiSelector 时 itemStyle 有效indicatorStyle`StyleProp<ViewStyle>``{}`否mode为 selector 或 multiSelector 时 indicatorStyle 有效onChange`CommonEventFunction<ChangeEventDetail>`是当 value 改变时触发 change 事件onColumnChange`CommonEventFunction<ColumnChangeEventDetail>`否列改变时触发
### API 支持度[​](picker.html#api-支持度-2)
API微信小程序H5React NativeHarmonyHarmony hybridPickerMultiSelectorProps.range✔️✔️✔️✔️✔️PickerMultiSelectorProps.rangeKey✔️✔️✔️✔️✔️PickerMultiSelectorProps.value✔️✔️✔️✔️✔️PickerMultiSelectorProps.itemStyle✔️PickerMultiSelectorProps.indicatorStyle✔️PickerMultiSelectorProps.onChange✔️✔️✔️✔️✔️PickerMultiSelectorProps.onColumnChange✔️✔️✔️✔️✔️
### ChangeEventDetail[​](picker.html#changeeventdetail-1)
参数类型说明value`number[]`表示变更值的下标
### ColumnChangeEventDetail[​](picker.html#columnchangeeventdetail)
参数类型说明column`number`表示改变了第几列（下标从0开始）value`number`表示变更值的下标
## PickerTimeProps[​](picker.html#pickertimeprops)
时间选择器：mode = time
参数类型必填说明mode`"time"`是选择器类型value`string`否value 的值表示选择了 range 中的第几个（下标从 0 开始）defaultValue`string`否设置 React 非受控状态下的初始取值start`string`否仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的开始，字符串格式为"hh:mm"end`string`否仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的结束，字符串格式为"hh:mm"onChange`CommonEventFunction<ChangeEventDetail>`是value 改变时触发 change 事件
### API 支持度[​](picker.html#api-支持度-3)
API微信小程序H5React NativeHarmonyHarmony hybridPickerTimeProps.value✔️✔️✔️✔️✔️PickerTimeProps.defaultValue✔️✔️✔️PickerTimeProps.start✔️✔️✔️✔️✔️PickerTimeProps.end✔️✔️✔️✔️✔️PickerTimeProps.onChange✔️✔️✔️✔️✔️
### ChangeEventDetail[​](picker.html#changeeventdetail-2)
参数类型说明value`string`表示选中的时间
## PickerDateProps[​](picker.html#pickerdateprops)
日期选择器：mode = date
参数类型默认值必填说明mode`"date"`是选择器类型value`string``0`是表示选中的日期，格式为"YYYY-MM-DD"defaultValue`string`否设置 React 非受控状态下的初始取值start`string`否仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的开始，字符串格式为"YYYY-MM-DD"end`string`否仅当 mode 为 "time" 或 "date" 时有效，表示有效时间范围的结束，字符串格式为"YYYY-MM-DD"fields`keyof Fields``"day"`否有效值 year, month, day，表示选择器的粒度onChange`CommonEventFunction<ChangeEventDetail>`是value 改变时触发 change 事件
### API 支持度[​](picker.html#api-支持度-4)
API微信小程序H5React NativeHarmonyHarmony hybridPickerDateProps.value✔️✔️✔️✔️✔️PickerDateProps.defaultValue✔️✔️✔️PickerDateProps.start✔️✔️✔️✔️✔️PickerDateProps.end✔️✔️✔️✔️✔️PickerDateProps.fields✔️✔️✔️✔️PickerDateProps.onChange✔️✔️✔️✔️✔️
### Fields[​](picker.html#fields)
参数说明year选择器粒度为年month选择器粒度为月份day选择器粒度为天
### ChangeEventDetail[​](picker.html#changeeventdetail-3)
参数类型说明value`string`表示选中的日期
## PickerRegionProps[​](picker.html#pickerregionprops)
省市区选择器：mode = region
参数类型默认值必填说明mode`"region"`是选择器类型value`string[]``[]`否表示选中的省市区，默认选中每一列的第一个值defaultValue`string[]`否设置 React 非受控状态下的初始取值customItem`string`否可为每一列的顶部添加一个自定义的项level`keyof Level``"region"`否选择器层级regionData`RegionData[]`否自定义省市区数据onChange`CommonEventFunction<ChangeEventDetail>`是value 改变时触发 change 事件
### API 支持度[​](picker.html#api-支持度-5)
API微信小程序H5React NativeHarmonyHarmony hybridPickerRegionProps.value✔️✔️✔️✔️PickerRegionProps.defaultValue✔️✔️✔️PickerRegionProps.customItem✔️✔️✔️✔️PickerRegionProps.level✔️PickerRegionProps.regionData✔️PickerRegionProps.onChange✔️✔️✔️✔️
### ChangeEventDetail[​](picker.html#changeeventdetail-4)
参数类型必填说明value`string[]`是表示选中的省市区code`string[]`是统计用区划代码postcode`string`否邮政编码
### RegionData[​](picker.html#regiondata)
参数类型必填value`string`是code`string`是postcode`string`否children`RegionData[]`否
### Level[​](picker.html#level)
参数说明province省级选择器city市级选择器region区级选择器sub-district街道选择器
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
