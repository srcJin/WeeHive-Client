# Skyline 的具体内容详见：[Skyline 介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/introduction.html)
信息
仅支持在微信小程序使用，worklet 部分从 `4.0.8` 开始支持
## 开启 Skyline[​](skyline.html#开启-skyline)
配置方法和微信小程序相同，开发前请仔细阅读 [《微信小程序 Skyline - 起步》](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/migration/)。
**示例：**
app.config.js
```js
export default defineAppConfig({
 pages: [
 'pages/index/index',
 ]
 lazyCodeLoading: "requiredComponents",
 rendererOptions: {
 skyline: {
 defaultDisplayBlock: true,
 defaultContentBox: true
 }
 }
})
```
page/index/index.config.js
```js
export default definePageConfig({
 navigationBarTitleText: '首页',
 renderer: 'skyline',
 componentFramework: 'glass-easel',
 navigationStyle: 'custom',
})
```

### 使用 worklet[​](skyline.html#使用-worklet)
在 Taro 中使用 worklet 需要首先开启半编译，开启方法见：[半编译模式使用方法](complier-mode.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)。
使用 worklet 动画能力时确保以下两项：详见 [worklet 动画](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/skyline/worklet.html)

- 确保开发者工具右上角 > 详情 > 本地设置里的 将 JS 编译成 ES5 选项被勾选上 (代码包体积会少量增加)
- worklet 动画相关接口仅在 Skyline 渲染模式下才能使用
**示例：**
config/index.js
```js
{
 mini: {
 experimental: {
 compileMode: true
 }
 }
}
```
pages/index/behavior.js
```js
const behavior = Behavior({
 methods: {
 onScrollUpdate(){
 "worklet";
 console.log('onScrollUpdateWorklet')
 },
 onGesture(evt) {
 'worklet';
 if (evt.state === 2) {
 this._offset.value += evt.deltaX;
 }
 }
 }
})

export default behavior
```
pages/index/index.jsx
```jsx
import { View, ScrollView, PanGestureHandler } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import behavior from "./behavior";

Index.behaviors = [behavior];

export default function Index() {
 useLoad(() => {
 const { page } = Taro.getCurrentInstance();
 if (page) {
 const offset = Taro.worklet.shared(0);
 page._offset = offset;
 Taro.nextTick(() => {
 page.applyAnimatedStyle(".circle", () => {
 "worklet";
 return {
 transform: `translateX(${offset.value}px)`,
 };
 });
 });
 }
 });

 return (
 <View className='index' compileMode>
 {/* 手势 */}
 <PanGestureHandler onGestureWorklet='onGesture'>
 <View className='circle'>拖动我</View>
 </PanGestureHandler>

 {/* 非手势组件的 worklet 回调 */}
 <ScrollView
 style={{ height: "300px", border: '1px solid #ccc' }}
 type='custom'
 scroll-y
 onScrollUpdateWorklet='onScrollUpdate'
 >
 {Array(100)
 .fill(1)
 .map((item, index) => (
 <View key={index}>{item}</View>
 ))}
 </ScrollView>
 </View>
 );
}
```

- 

-
