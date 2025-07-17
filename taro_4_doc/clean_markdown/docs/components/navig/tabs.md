# 标签栏
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/tabs/)
## 类型[​](tabs.html#类型)
```tsx
ComponentType<TabsProps>
```

## TabsProps[​](tabs.html#tabsprops)
参数类型默认值必填说明tabsBackgroundColor`string``"#fff"`否tabs 背景色,必须填写十六进制颜色tabsActiveTextColor`string``"#000"`否tabs 激活 tab-item 文字颜色tabsInactiveTextColor`string``"#666"`否tabs 非激活 tab-item 文字颜色tabsUnderlineColor`string``"#333"`否tabs 激活 tab-item 下划线颜色activeName`string``无`否仅用于普通标签栏组件，当前激活 tab-item 的对应的 name 值，须搭配 bindtabchange 一起使用。urlQueryName`string``无`否仅用于可寻址标签栏组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。maxTabItemAmount`number``5`否当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者可根据业务需求调整onTabChange`CommonEventFunction`否tab 被点击的回调，可以在 e.detail.name 中取到当前点击的 tab-item 对应的 name 值
### API 支持度[​](tabs.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyTabsProps.tabsBackgroundColor✔️TabsProps.tabsActiveTextColor✔️TabsProps.tabsInactiveTextColor✔️TabsProps.tabsUnderlineColor✔️TabsProps.activeName✔️TabsProps.urlQueryName✔️TabsProps.maxTabItemAmount✔️TabsProps.onTabChange✔️
- 
- 

-
