# 滑块视图容器。其中只可放置 swiper-item 组件，否则会导致未定义的行为。
> 不要为
`> SwiperItem
`> 设置
**> style
**> 属性，可以通过 class 设置样式。
[> 7147
](https://github.com/NervJS/taro/issues/7147)
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)
## 类型[​](swiper.html#类型)
```tsx
ComponentType<SwiperProps>
```

## 示例代码[​](swiper.html#示例代码)

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

## SwiperProps[​](swiper.html#swiperprops)
参数类型默认值必填说明indicatorDots`boolean``false`否是否显示面板指示点indicatorColor`string``"rgba(0, 0, 0, .3)"`否指示点颜色indicatorActiveColor`string``"#000000"`否当前选中的指示点颜色autoplay`boolean``false`否是否自动切换current`number``0`否当前所在滑块的 indexcurrentItemId`string``""`否当前所在滑块的 item-id ，不能与 current 被同时指定interval`number``5000`否自动切换时间间隔duration`number``500`否滑动动画时长circular`boolean``false`否是否采用衔接滑动vertical`boolean``false`否滑动方向是否为纵向previousMargin`string``"0px"`否前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值nextMargin`string``"0px"`否后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值snapToEdge`boolean``false`否当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素displayMultipleItems`number``1`否同时显示的滑块数量skipHiddenItemLayout`boolean``false`否是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息easingFunction`keyof TEasingFunction``"default"`否指定 swiper 切换缓动动画类型disableTouch`boolean``false`否是否禁止用户 touch 操作zoom`boolean``false`否是否启用缩放full`boolean``false`否是否开启全屏activeClass`string`否swiper-item 可见时的 class。changingClass`string`否acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的 class。acceleration`string``false`否当开启时，会根据滑动速度，连续滑动多屏。disableProgrammaticAnimation`string``false`否是否禁用代码变动触发 swiper 切换时使用动画。swipeRatio`string`否滑动距离阈值，当滑动距离超过阈值时进行 swiper-item 切换。swipeSpeed`string`否滑动综合速度阈值，当超过阈值时进行 swiper-item 切换，数值越小越敏感。touchAngle`string`否计算用户手势时所依赖的滑动角度。角度根据 touchstart 事件和首次 touchmove 事件的坐标计算得出。数值越小越对用户的滑动方向准确度要求越高。adjustHeight"first" or "current" or "highest" or "none"否自动以指定滑块的高度为整个容器的高度。当 vertical 为 true 时，默认不调整。可选值为：adjustVerticalHeight`string`否vertical 为 true 时强制使 adjust-height 生效。disableTouchmove`string``false`否是否停止响应用户 touchmove 操作effectsProps`Record<string, any>`否swiper11 相关的动效参数，具体见文档 [https://swiperjs.com/swiper-api#parameters](https://swiperjs.com/swiper-api#parameters)onChange`CommonEventFunction<onChangeEventDetail>`否current 改变时会触发 change 事件onTransition`CommonEventFunction<onTransitionEventDetail>`否swiper-item 的位置发生改变时会触发 transition 事件onAnimationFinish`CommonEventFunction<onChangeEventDetail>`否动画结束时会触发 animationfinish 事件onAnimationEnd`CommonEventFunction<onCommonEventDetail>`否动画结束时会触发 animationEnd 事件layoutType"normal" or "stackLeft" or "stackRight" or "tinder" or "transformer"`normal`否渲染模式transformerType"scaleAndFade" or "accordion" or "threeD" or "zoomIn" or "zoomOut" or "deepthPage"`scaleAndFade`否layout-type 为 transformer 时指定动画类型indicatorType"normal" or "worm" or "wormThin" or "wormUnderground" or "wormThinUnderground" or "expand" or "jump" or "jumpWithOffset" or "scroll" or "scrollFixedCenter" or "slide" or "slideUnderground" or "scale" or "swap" or "swapYRotation" or "color"`normal`否指示点动画类型indicatorMargin`number``10`否指示点四周边距indicatorSpacing`number``4`否指示点间距indicatorRadius`number``4`否指示点圆角大小indicatorWidth`number``8`否指示点宽度indicatorHeight`number``8`否指示点高度indicatorAlignmentstring or [number, number]`auto`否指示点的相对位置indicatorOffset`[number, number]``[0, 0]`否指示点位置的偏移量scrollWithAnimation`boolean``true`否改变 current 时使用动画过渡cacheExtent`number``0`否缓存区域大小，值为 1 表示提前渲染上下各一屏区域（swiper 容器大小）onScrollStartWorklet`string`否滑动开始时触发，仅支持 worklet 作为回调。event.detail = {dx: dx, dy: dy}onScrollUpdateWorklet`string`否滑动位置更新时触发，仅支持 worklet 作为回调。event.detail = {dx: dx, dy: dy}onScrollEndWorklet`string`否滑动结束时触发，仅支持 worklet 作为回调。event.detail = {dx: dx, dy: dy}
### API 支持度[​](swiper.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridSwiperProps.indicatorDots✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.indicatorColor✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.indicatorActiveColor✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.autoplay✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.current✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.currentItemId(deprecated)✔️✔️✔️✔️✔️✔️SwiperProps.interval✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.duration✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.circular✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.vertical✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.previousMargin✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.nextMargin✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.snapToEdge✔️✔️SwiperProps.displayMultipleItems✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.skipHiddenItemLayout✔️✔️SwiperProps.easingFunction✔️✔️✔️✔️SwiperProps.disableTouch✔️SwiperProps.zoom✔️✔️SwiperProps.full✔️✔️SwiperProps.activeClass✔️SwiperProps.changingClass✔️SwiperProps.acceleration✔️SwiperProps.disableProgrammaticAnimation✔️SwiperProps.swipeRatio✔️SwiperProps.swipeSpeed✔️SwiperProps.touchAngle✔️SwiperProps.adjustHeight✔️SwiperProps.adjustVerticalHeight✔️SwiperProps.disableTouchmove✔️SwiperProps.effectsProps✔️SwiperProps.onChange✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.onTransition✔️✔️✔️✔️SwiperProps.onAnimationFinish✔️✔️✔️✔️✔️✔️✔️✔️SwiperProps.onAnimationEnd✔️SwiperProps.layoutType✔️SwiperProps.transformerType✔️SwiperProps.indicatorType✔️SwiperProps.indicatorMargin✔️SwiperProps.indicatorSpacing✔️SwiperProps.indicatorRadius✔️SwiperProps.indicatorWidth✔️SwiperProps.indicatorHeight✔️SwiperProps.indicatorAlignment✔️SwiperProps.indicatorOffset✔️SwiperProps.scrollWithAnimation✔️SwiperProps.cacheExtent✔️SwiperProps.onScrollStartWorklet✔️SwiperProps.onScrollUpdateWorklet✔️SwiperProps.onScrollEndWorklet✔️
### TChangeSource[​](swiper.html#tchangesource)
导致变更的原因
参数说明autoplay自动播放touch用户划动其它原因
### TEasingFunction[​](swiper.html#teasingfunction)
指定 swiper 切换缓动动画类型
参数说明default默认缓动函数linear线性动画easeInCubic缓入动画easeOutCubic缓出动画easeInOutCubic缓入缓出动画
### onCommonEventDetail[​](swiper.html#oncommoneventdetail)
参数类型说明current`number`当前所在滑块的索引source`keyof TChangeSource`导致变更的原因
### onChangeEventDetail[​](swiper.html#onchangeeventdetail)
参数类型必填说明current`number`是当前所在滑块的索引source`keyof TChangeSource`是导致变更的原因currentItemId`string`否SwiperItem的itemId参数值
### onTransitionEventDetail[​](swiper.html#ontransitioneventdetail)
参数类型说明dx`number`X 坐标dy`number`Y 坐标
- 
- 
- 

- 
- 
- 
- 
- 
-
