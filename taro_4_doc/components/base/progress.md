# 进度条。组件属性的长度单位默认为 px
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/progress.html)
## 类型[​](progress.html#类型)
```tsx
ComponentType<ProgressProps>
```

## 示例代码[​](progress.html#示例代码)

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
 <Progress percent={20} showInfo strokeWidth={2} />
 <Progress percent={40} strokeWidth={2} active />
 <Progress percent={60} strokeWidth={2} active />
 <Progress percent={80} strokeWidth={2} active activeColor='blue' />
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <progress percent="20" stroke-width="2" :show-info="true" />
 <progress percent="40" stroke-width="2" :active="true" />
 <progress percent="60" stroke-width="2" :active="true" />
 <progress percent="80" stroke-width="2" :active="true" active-color="blue" />
 </view>
</template>
```

## ProgressProps[​](progress.html#progressprops)
参数类型默认值必填说明percent`number`否百分比 0~100showInfo`boolean``false`否在进度条右侧显示百分比borderRadiusstring or number`0`否圆角大小fontSizestring or number`16`否右侧百分比字体大小strokeWidthstring or number`6`否进度条线的宽度color`string``"#09BB07"`否进度条颜色 (请使用 activeColor)activeColor`string``"#09BB07"`否已选择的进度条的颜色backgroundColor`string``"#EBEBEB"`否未选择的进度条的颜色active`boolean``false`否进度条从左往右的动画activeMode"backwards" or "forwards"`backwards`否backwards: 动画从头播

forwards: 动画从上次结束点接着播duration`number``30`否进度增加 1% 所需毫秒数ariaLabel`string`否无障碍访问，（属性）元素的额外描述onActiveEnd`CommonEventFunction`否动画完成事件
### API 支持度[​](progress.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridProgressProps.percent✔️✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.showInfo✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.borderRadius✔️✔️✔️✔️✔️✔️ProgressProps.fontSize✔️✔️✔️✔️✔️✔️ProgressProps.strokeWidth✔️✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.color✔️✔️✔️✔️✔️✔️ProgressProps.activeColor✔️✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.backgroundColor✔️✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.active✔️✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.activeMode✔️✔️✔️✔️✔️✔️✔️✔️ProgressProps.duration✔️✔️✔️✔️✔️✔️ProgressProps.ariaLabel✔️ProgressProps.onActiveEnd✔️✔️✔️✔️✔️✔️
- 
- 
- 

-
