# 仅可放置在 swiper 组件中，宽高自动设置为100%
> 不要为
`> SwiperItem
`> 设置
**> style
**> 属性，可以通过 class 设置样式。
[> 7147
](https://github.com/NervJS/taro/issues/7147)
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html)
## 类型[​](swiper-item.html#类型)
```tsx
ComponentType<SwiperItemProps>
```

## 示例代码[​](swiper-item.html#示例代码)

- React
- Vue
```tsx
class App extends Component {
 render () {
 return (
 <Swiper
 className='test-h'
 indicatorColor='#999'
 indicatorActiveColor='#333'
 vertical
 circular
 indicatorDots
 autoplay>
 <SwiperItem>
 <View className='demo-text-1'>1</View>
 </SwiperItem>
 <SwiperItem>
 <View className='demo-text-2'>2</View>
 </SwiperItem>
 <SwiperItem>
 <View className='demo-text-3'>3</View>
 </SwiperItem>
 </Swiper>
 )
 }
}
html
<template>
 <swiper
 class='test-h'
 indicator-color='#999'
 indicator-active-color='#333'
 :vertical="true"
 :circular="true"
 :indicator-dots="true"
 :autoplay="true"
 >
 <swiper-item>
 <view class='demo-text-1'>1</view>
 </swiper-item>
 <swiper-item>
 <view class='demo-text-2'>2</view>
 </swiper-item>
 <swiper-item>
 <view class='demo-text-3'>3</view>
 </swiper-item>
 </swiper>
</template>
```

## SwiperItemProps[​](swiper-item.html#swiperitemprops)
参数类型默认值必填说明itemId`string`否该 swiper-item 的标识符skipHiddenItemLayout`boolean``false`否是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息deep`boolean``false`否Swiper 循环状态下，前后垫片节点拷贝模式，用于修复 Vue 在 CustomElements 下的节点拷贝问题
### API 支持度[​](swiper-item.html#api-支持度)
API微信小程序百度小程序抖音小程序京东小程序H5React NativeHarmonyHarmony hybridSwiperItemProps.itemId✔️✔️✔️✔️✔️✔️✔️✔️SwiperItemProps.skipHiddenItemLayout✔️SwiperItemProps.deep✔️
- 
- 
- 

-
