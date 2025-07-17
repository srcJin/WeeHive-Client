# 增强 ScrollView 实例，可通过 [Taro.createSelectorQuery](../../wxml/createSelectorQuery.html) 的 [NodesRef.node](../../wxml/NodesRef.html#node) 方法获取。 仅在 `scroll-view` 组件开启 `enhanced` 属性后生效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.html)
## 方法[​](ScrollViewContext.html#方法)
参数类型说明scrollEnabled`boolean`滚动开关bounces`boolean`设置滚动边界弹性 (仅在 iOS 下生效)showScrollbar`boolean`设置是否显示滚动条pagingEnabled`boolean`分页滑动开关fastDeceleration`boolean`设置滚动减速速率decelerationDisabled`boolean`取消滚动惯性 (仅在 iOS 下生效)
### scrollTo[​](ScrollViewContext.html#scrollto)
滚动至指定位置
支持情况：!!!!
> H5: 不支持 velocity 参数

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollTo.html)
```tsx
(object: Option) => void
```
参数类型object`Option`
### scrollIntoView[​](ScrollViewContext.html#scrollintoview)
滚动至指定位置
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/ScrollViewContext.scrollIntoView.html)
```tsx
(selector: string) => void
```
参数类型说明selector`string`元素选择器
## 参数[​](ScrollViewContext.html#参数)
### scrollTo[​](ScrollViewContext.html#scrollto-1)
#### Option[​](ScrollViewContext.html#option)
参数类型必填说明top`number`否顶部距离left`number`否左边界距离velocity`number`否初始速度duration`number`否滚动动画时长animated`boolean`否是否启用滚动动画
## 示例代码[​](ScrollViewContext.html#示例代码)
```tsx
Taro.createSelectorQuery()
 .select('#scrollview')
 .node()
 .exec((res) => {
 const scrollView = res[0].node;
 scrollView.scrollEnabled = false;
 })
```

## API 支持度[​](ScrollViewContext.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyScrollViewContext✔️ScrollViewContext.scrollTo✔️✔️(不支持 velocity 参数)ScrollViewContext.scrollIntoView✔️✔️✔️
- 

- 
- 

- 

- 

- 
-
