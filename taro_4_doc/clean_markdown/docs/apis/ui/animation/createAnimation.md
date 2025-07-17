# 创建一个动画实例 [animation](https://docs.taro.zone/docs/apis/ui/Animation)。调用实例的方法来描述动画。最后通过动画实例的 export 方法导出动画数据传递给组件的 animation 属性。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)
## 类型[​](createAnimation.html#类型)
```tsx
(option: Option) => Animation
```

## 参数[​](createAnimation.html#参数)
参数类型option`Option`
### Option[​](createAnimation.html#option)
参数类型默认值必填说明duration`number`否动画持续时间，单位 mstimingFunction`keyof TimingFunction`否动画的效果delay`number``0`否动画延迟时间，单位 mstransformOrigin`string``"50% 50% 0"`否unit`string`否单位
API 支持度: h5
### TimingFunction[​](createAnimation.html#timingfunction)
参数说明linear动画从头到尾的速度是相同的ease动画以低速开始，然后加快，在结束前变慢ease-in动画以低速开始ease-in-out动画以低速开始和结束ease-out动画以低速结束step-start动画第一帧就跳至结束状态直到结束step-end动画一直保持开始状态，最后一帧跳到结束状态
## 示例代码[​](createAnimation.html#示例代码)
```tsx
var animation = Taro.createAnimation({
 transformOrigin: "50% 50%",
 duration: 1000,
 timingFunction: "ease",
 delay: 0
})
```

- 
- 

- 
- 

-
