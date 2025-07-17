# worklet 对象，可以通过 wx.worklet 获取
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/wx.worklet.html)
## 类型[​](worklet.html#类型)
```tsx
worklet
```

## 方法[​](worklet.html#方法)
参数类型说明scrollViewContext`{ scrollTo(NodesRef: TaroGeneral.IAnyObject, object: Option): void; }`ScrollView 实例，可在 worklet 函数内操作 scroll-view 组件。
[参考地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.scrollViewContext.html)Easing`Easing`
### cancelAnimation[​](worklet.html#cancelanimation)
取消由 SharedValue 驱动的动画
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.cancelAnimation.html)
```tsx
(SharedValue: TaroGeneral.IAnyObject) => void
```
参数类型SharedValue`TaroGeneral.IAnyObject`
### derived[​](worklet.html#derived)
衍生值 DerivedValue，可基于已有的 SharedValue 生成其它共享变量。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.derived.html)
```tsx
(updaterWorklet: TaroGeneral.TFunc) => TaroGeneral.IAnyObject
```
参数类型updaterWorklet`TaroGeneral.TFunc`
### shared[​](worklet.html#shared)
创建共享变量 SharedValue，用于跨线程共享数据和驱动动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/base/worklet.shared.html)
```tsx
(initialValue: any) => TaroGeneral.IAnyObject
```

### decay[​](worklet.html#decay)
基于滚动衰减的动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.decay.html)
```tsx
(options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```
参数类型说明options`Option`动画配置
param: options 动画配置callback`(flag: boolean) => void`动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
### spring[​](worklet.html#spring)
基于物理的动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.spring.html)
```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```
参数类型说明toValuestring or number目标值
param: toValue 目标值options`Option`动画配置
param: options 动画配置callback`(flag: boolean) => void`动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
### timing[​](worklet.html#timing)
基于时间的动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.timing.html)
```tsx
(toValue: string | number, options?: Option, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```
参数类型说明toValuestring or number目标值
param: toValue 目标值options`Option`动画配置
param: options 动画配置callback`(flag: boolean) => void`动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
### delay[​](worklet.html#delay)
延迟执行动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.delay.html)
```tsx
(delayMS: number, delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```
参数类型说明delayMS`number`动画开始前等待的时间，单位：毫秒
param: delayMS 动画开始前等待的时间，单位：毫秒delayedAnimation`TaroGeneral.IAnyObject`动画对象
param: delayedAnimation 动画对象
### repeat[​](worklet.html#repeat)
重复执行动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.repeat.html)
```tsx
(delayedAnimation: TaroGeneral.IAnyObject, numberOfReps: number, reverse?: boolean, callback?: (flag: boolean) => void) => TaroGeneral.IAnyObject
```
参数类型说明delayedAnimation`TaroGeneral.IAnyObject`numberOfReps`number`重复次数。为负值时一直循环，直到被取消动画。
param: numberOfReps 重复次数。为负值时一直循环，直到被取消动画。reverse`boolean`反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。
param: reverse 反向运行动画，每周期结束动画由尾到头运行。该字段仅对 timing 和 spring 返回的动画对象生效。callback`(flag: boolean) => void`动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
param: callback 动画完成回调。动画被取消时，返回 fasle，正常完成时返回 true。
### sequence[​](worklet.html#sequence)
组合动画序列，依次执行传入的动画。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/combine-animation/worklet.sequence.html)
```tsx
(...delayedAnimation: TaroGeneral.IAnyObject) => TaroGeneral.IAnyObject
```
参数类型delayedAnimation`TaroGeneral.IAnyObject`
### runOnJS[​](worklet.html#runonjs)
worklet 函数运行在 UI 线程时，捕获的外部函数可能为 worklet 类型或普通函数，为了更明显的对其区分，要求必须使用 runOnJS 调回 JS 线程的普通函数。 有这样的要求是因为，调用其它 worklet 函数时是同步调用，但在 UI 线程执行 JS 线程的函数只能是异步，开发者容易混淆，试图同步获取 JS 线程的返回值。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnJS.html)
```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```
参数类型说明fn`TaroGeneral.TFunc`worklet 类型函数
param: fn worklet 类型函数
### runOnUI[​](worklet.html#runonui)
在 UI 线程执行 worklet 函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/tool-function/worklet.runOnUI.html)
```tsx
(fn: TaroGeneral.TFunc) => TaroGeneral.TFunc
```
参数类型说明fn`TaroGeneral.TFunc`worklet 类型函数
param: fn worklet 类型函数
## 参数[​](worklet.html#参数)
### SharedValue[​](worklet.html#sharedvalue)
### DerivedValue[​](worklet.html#derivedvalue)
### AnimationObject[​](worklet.html#animationobject)
### WorkletFunction[​](worklet.html#workletfunction)
### scrollViewContext[​](worklet.html#scrollviewcontext)
#### Option[​](worklet.html#option)
参数类型必填说明top`number`否顶部距离left`number`否左边界距离duration`number`否滚动动画时长animated`boolean`否是否启用滚动动画easingFunction`string`否动画曲线
### decay[​](worklet.html#decay-1)
#### Option[​](worklet.html#option-1)
参数类型必填说明velocity`number`否初速度deceleration`number`否衰减速率clamp`number[]`否边界值，长度为 2 的数组
### Easing[​](worklet.html#easing)
#### bounce[​](worklet.html#bounce)
简单的反弹效果
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### ease[​](worklet.html#ease)
简单的惯性动画
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### elastic[​](worklet.html#elastic)
简单的弹性动画，类似弹簧来回摆动，高阶函数。默认弹性为 1，会稍微超出一次。弹性为 0 时 不会过冲
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(bounciness?: number) => any
```
参数类型bounciness`number`
#### linear[​](worklet.html#linear)
线性函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### quad[​](worklet.html#quad)
二次方函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### cubic[​](worklet.html#cubic)
立方函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### poly[​](worklet.html#poly)
高阶函数，返回幂函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(n: number) => any
```
参数类型n`number`
#### bezier[​](worklet.html#bezier)
三次贝塞尔曲线，效果同 css transition-timing-function
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(x1: number, y1: number, x2: number, y2: number) => any
```
参数类型x1`number`y1`number`x2`number`y2`number`
#### circle[​](worklet.html#circle)
圆形曲线
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### sin[​](worklet.html#sin)
正弦函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### exp[​](worklet.html#exp)
指数函数
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(t: number) => any
```
参数类型t`number`
#### in[​](worklet.html#in)
正向运行 easing function，高阶函数。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(easing: (t: number) => any) => any
```
参数类型easing`(t: number) => any`
#### out[​](worklet.html#out)
反向运行 easing function，高阶函数。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(easing: (t: number) => any) => any
```
参数类型easing`(t: number) => any`
#### inOut[​](worklet.html#inout)
前半程正向，后半程反向，高阶函数。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/worklet/animation/worklet.Easing.html)
```tsx
(easing: (t: number) => any) => any
```
参数类型easing`(t: number) => any`
### spring[​](worklet.html#spring-1)
#### Option[​](worklet.html#option-2)
参数类型必填说明damping`number`否阻尼系数mass`number`否重量系数，值越大移动越慢stiffness`number`否弹性系数overshootClamping`boolean`否动画是否可以在指定值上反弹restDisplacementThreshold`number`否弹簧静止时的位移restSpeedThreshold`number`否弹簧静止的速度velocity`number`否速度
### timing[​](worklet.html#timing-1)
#### Option[​](worklet.html#option-3)
参数类型必填说明duration`number`否动画时长easing`(t: number) => number`否动画曲线
## API 支持度[​](worklet.html#api-支持度)
API微信小程序H5React NativeHarmonyworklet✔️
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
