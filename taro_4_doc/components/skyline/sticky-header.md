# 吸顶布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点或 sticky-section 组件直接子节点。仅 Skyline 支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/sticky-header.html)
## 类型[​](sticky-header.html#类型)
```tsx
ComponentType<StickyHeaderProps>
```

## StickyHeaderProps[​](sticky-header.html#stickyheaderprops)
参数类型默认值必填说明offsetTop`number``0`否吸顶时与顶部的距(px)padding`[number, number, number, number]``[0, 0, 0, 0]`否长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距onStickOnTopChange`CommonEventFunction`否吸顶状态变化事件，仅支持非 worklet 的组件方法作为回调。event.detail = { isStickOnTop }，当 sticky-header 吸顶时为 true，否则为 false。
version: >=3.6.2
### API 支持度[​](sticky-header.html#api-支持度)
API微信小程序H5React NativeHarmonyStickyHeaderProps.offsetTop✔️StickyHeaderProps.padding✔️StickyHeaderProps.onStickOnTopChange✔️
- 
- 

-
