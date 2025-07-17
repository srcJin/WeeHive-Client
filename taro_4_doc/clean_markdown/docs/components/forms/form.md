# 表单。将组件内的用户输入的 switch input checkbox slider radio picker 提交。
当点击 form 表单中 form-type 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)
## 类型[​](form.html#类型)
```tsx
ComponentType<FormProps>
```

## 示例代码[​](form.html#示例代码)

- React
- Vue
```tsx
class App extends Component {

 formSubmit = e => {
 console.log(e)
 }

 formReset = e => {
 console.log(e)
 }

 render () {
 return (
 <Form onSubmit={this.formSubmit} onReset={this.formReset} >
 <View className='example-body'>
 <Switch name='switch' className='form-switch'></Switch>
 </View>
 </Form>
 )
 }
}
html
<template>
 <form @submit="formSubmit" @reset="formReset" >
 <view class="taro-example-body">
 <switch name="switch" class="form-switch"></Switch>
 </view>
 <view class="taro-example-btns">
 <button form-type="submit">Submit</button>
 <button type="default" form-type="reset">Reset</button>
 </view>
 </form>
</template>

<script>
export default {
 data() {
 return {}
 },
 methods: {
 formSubmit (e) {
 console.log(e)
 },

 formReset (e) {
 console.log(e)
 }
 }
}
</script>
```

## FormProps[​](form.html#formprops)
参数类型默认值必填说明reportSubmit`boolean``false`否是否返回 `formId` 用于发送模板消息。reportSubmitTimeout`number``0`否等待一段时间（毫秒数）以确认 `formId` 是否生效。
如果未指定这个参数，`formId` 有很小的概率是无效的（如遇到网络失败的情况）。
指定这个参数将可以检测 `formId` 是否有效，
以这个参数的时间作为这项检测的超时时间。
如果失败，将返回 `requestFormId:fail` 开头的 `formId`。reportType`string``'default'`否模板消息的类型，report-submit 为 true 时填写有效
取值：default / subscribetemplateIdstring or string[]否发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取
当参数类型为 Array 时，可传递 1~3 个模板库标题 ID （注：此处填写模板库id。示例：BD0001）subscribeId`string`否发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景
注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-idconversionTarget`number``0`否用于分发目的。取值：0 或 1，其中 0 表示默认，1 表示留资目标，需要和留资分发配置一起使用，详情见留资分发配置clueComponentId`string``""`否用于分发目的。开发者在【小程序开发者后台 -> 进入目标小程序 -> 运营 -> 流量配置 -> 抖音 -> 留资分发配置】复制创建的配置 ID，需要和留资分发配置一起使用，详情见留资分发配置onSubmit`CommonEventFunction<onSubmitEventDetail>`否携带 form 中的数据触发 submit 事件onReset`CommonEventFunction`否表单重置时会触发 reset 事件
### API 支持度[​](form.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridFormProps.reportSubmit✔️✔️✔️✔️✔️✔️✔️FormProps.reportSubmitTimeout✔️FormProps.reportType✔️FormProps.templateId✔️FormProps.subscribeId✔️FormProps.conversionTarget✔️FormProps.clueComponentId✔️FormProps.onSubmit✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️FormProps.onReset✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️
### onSubmitEventDetail[​](form.html#onsubmiteventdetail)
参数类型必填说明value`{ [formItemName: string]: any; }`否当点击 `<form>` 表单中 `form-type` 为 `submit` 的 `<button>` 组件时，
会将表单组件中的 `value` 值进行提交，
需要在表单组件中加上 `name` 来作为 `key`。formId`string`否当 `reportSubmit` 为 `true` 时，返回 `formId` 用于发送模板消息。
- 
- 
- 

- 
-
