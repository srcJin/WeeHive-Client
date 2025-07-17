# 每一个小程序页面都可以使用 `.config.js` 文件来对本页面的窗口表现进行配置。页面中配置项在当前页面会覆盖全局配置 `app.config.json` 的 `window` 中相同的配置项。
文件需要 `export` 一个默认对象，配置项遵循**微信小程序规范**，并且对所有平台进行统一。
**注意：**

- **Taro v3.4** 之前，`page.config.js` 里引用的 JS 文件**没有经过 Babel 编译**。(**Taro v3.4** 开始支持）
- **Taro v3.4** 支持在页面 JS 中使用 `definePageConfig` 宏函数定义页面配置，代替 `page.config.js` 文件。
- 多端差异化逻辑可以使用 `process.env.TARO_ENV` 变量作条件判断来实现。
- `page.config.js` 不支持多端文件的形式，如 `index.weapp.js` 这样是不起作用的。
## definePageConfig 宏函数[​](page-config.html#definepageconfig-宏函数)
信息
Taro v3.4+ 支持
开发者可以使用**编译时宏函数**`definePageConfig` 包裹配置对象，以获得**类型提示**和**自动补全**。
### 在页面配置文件中使用[​](page-config.html#在页面配置文件中使用)
page.config.ts
```ts
export default definePageConfig({
 navigationBarTitleText: '首页',
})
```

### 在页面 JS 文件中使用[​](page-config.html#在页面-js-文件中使用)
支持在页面 JS 中使用 `definePageConfig` 定义页面配置，而不需要提供 `page.config.js` 文件。
但是需要注意的是，使用 `definePageConfig` 定义的页面配置对象**不能使用变量**。

- React
- Vuepage.ts
```tsx
definePageConfig({
 navigationBarTitleText: '首页',
})

export default function Index() {}
```
page.vue
```html
<template>
 <view className="index" />
</template>

<script>
 definePageConfig({
 navigationBarTitleText: '首页',
 })

 export default {}
</script>
```

## 配置项列表[​](page-config.html#配置项列表)
属性类型默认值描述navigationBarBackgroundColorHexColor（十六进制颜色值）#000000导航栏背景颜色，如 #000000navigationBarTextStyleStringwhite导航栏标题颜色，仅支持 black / whitenavigationBarTitleTextString导航栏标题文字内容navigationStyleStringdefault导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮transparentTitleStringnone导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明backgroundColorString窗口的背景色backgroundTextStyleStringdark下拉 loading 的样式，仅支持 dark / lightbackgroundColorTopString#ffffff顶部窗口的背景色，仅 iOS 支持backgroundColorBottomString#ffffff底部窗口的背景色，仅 iOS 支持enablePullDownRefreshbooleanfalse是否开启当前页面的下拉刷新。onReachBottomDistanceNumber50页面上拉触底事件触发时距页面底部距离，单位为 pxpageOrientationStringportrait屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化disableScrollBooleanfalse设置为 true 则页面整体不能上下滚动。
只在页面配置中有效，无法在 app.json 中设置disableSwipeBackBooleanfalse禁止页面右滑手势返回enableShareAppMessageBooleanfalse是否启用分享给好友。enableShareTimelineBooleanfalse是否启用分享到朋友圈。usingComponentsObject否页面自定义组件配置rendererStringwebview渲染后端
其中，`usingComponents` 一般不需要配置，只有在需要与引用原生小程序组件的时候才需要配置。
### 各端支持程度[​](page-config.html#各端支持程度)
属性微信小程序百度小程序抖音小程序支付宝小程序H5RNASCFnavigationBarBackgroundColor✔️✔️✔️✔️✔️✔️✔️navigationBarTextStyle✔️✔️✔️✘✔️✔️✔️navigationBarTitleText✔️✔️✔️✔️✔️✔️✔️navigationStyle✔️（微信客户端 6.6.0）✔️（百度 App 版本 11.1.0）✔️✘✘✔️✔️transparentTitle---✔️--✘backgroundColor✔️✔️✔️✘✘✔️✔️backgroundTextStyle✔️✔️✔️✘✘✔️✘backgroundColorTop✔️（微信客户端 6.5.16）✘✔️✘✘✘✘backgroundColorBottom✔️（微信客户端 6.5.16）✘✔️✘✘✘✘enablePullDownRefresh✔️✔️✔️✔️✘✘✔️onReachBottomDistance✔️✔️✔️✘✘✘✘pageOrientation✔️2.4.0 (auto) / 2.5.0 (landscape)✘✘✘✘✘✘disableScroll✔️✘✘✘✘✔️✘disableSwipeBack✔️✘✘✘✘✘✘enableShareAppMessage✔️✘✘✘✔️✘✘enableShareTimeline✔️✘✘✘✔️✘✘usingComponents✔️✔️✔️✔️✘✘✔️renderer✔️✘✘✘✘✘✘
- 

- 
- 

- 

-
