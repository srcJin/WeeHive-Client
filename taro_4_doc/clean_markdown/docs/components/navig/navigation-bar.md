# 页面导航条配置节点，用于指定导航栏的一些属性。只能是 PageMeta 组件内的第一个节点，需要配合它一同使用。 通过这个节点可以获得类似于调用 Taro.setNavigationBarTitle Taro.setNavigationBarColor 等接口调用的效果。
信息
Taro v3.6.19 开始支持 需要配合 PageMeta 组件使用
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/navigation-bar.html)
## 类型[​](navigation-bar.html#类型)
```tsx
ComponentType<NavigationBarProps>
```

## NavigationBarProps[​](navigation-bar.html#navigationbarprops)
参数类型默认值必填说明title`string`否导航条标题loading`boolean`否是否在导航条显示 loading 加载提示frontColor`string`否导航条前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000backgroundColor`string`否导航条背景颜色值，有效值为十六进制颜色colorAnimationDuration`string``0`否改变导航栏颜色时的动画时长，默认为 0 （即没有动画效果）colorAnimationTimingFunc"linear" or "easeIn" or "easeOut" or "easeInOut"`"linear"`否改变导航栏颜色时的动画方式，支持 linear 、 easeIn 、 easeOut 和 easeInOut
### API 支持度[​](navigation-bar.html#api-支持度)
API微信小程序H5React NativeHarmonyNavigationBarProps.title✔️✔️NavigationBarProps.loading✔️✔️NavigationBarProps.frontColor✔️✔️NavigationBarProps.backgroundColor✔️✔️NavigationBarProps.colorAnimationDuration✔️NavigationBarProps.colorAnimationTimingFunc✔️
- 
- 

-
