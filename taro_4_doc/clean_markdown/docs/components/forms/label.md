# 用来改进表单组件的可用性。
使用for属性找到对应的id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/label.html)
## 类型[​](label.html#类型)
```tsx
ComponentType<LabelProps>
```

## 示例代码[​](label.html#示例代码)

- React
- Vue
```tsx
class App extends Components {

 render () {
 return (
 <RadioGroup>
 <Label className='example-body__label' for='1' key='1'>
 <Radio value='USA'>USA</Radio>
 </Label>
 <Label className='example-body__label' for='2' key='2'>
 <Radio value='CHN' checked>
 CHN
 </Radio>
 </Label>
 </RadioGroup>
 )
 }
}
html
<template>
 <radio-group>
 <label class="example-body__label" for="1" key="1">
 <radio id="1" value="USA" />
 USA
 </label>
 <label class="example-body__label" for="2" key="2">
 <radio id="2" value="CHN" :checked="true" />
 CHN
 </label>
 </radio-group>
</template>
```

## LabelProps[​](label.html#labelprops)
参数类型必填说明for`string`否绑定控件的 id
### API 支持度[​](label.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridLabelProps.for✔️✔️✔️✔️✔️✔️✔️✔️✔️
- 
- 
- 

-
