# media query 匹配检测节点。可以指定一组 media query 规则，满足时，这个节点才会被展示。 通过这个节点可以实现“页面宽高在某个范围时才展示某个区域”这样的效果。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html)
## 类型[​](match-media.html#类型)
```tsx
ComponentType<MatchMediaProps>
```

## 示例代码[​](match-media.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 return (
 <View>
 <MatchMedia minWidth="300" maxWidth="600">
 <view>当页面宽度在 300 ~ 500 px 之间时展示这里</view>
 </MatchMedia>
 <MatchMedia minHeight="400" orientation="landscape">
 <view>当页面高度不小于 400 px 且屏幕方向为纵向时展示这里</view>
 </MatchMedia>
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <match-media min-width="300" max-width="500">
 <view>当页面宽度在 300 ~ 500 px 之间时展示这里</view>
 </match-media>
 <match-media min-height="400" orientation="landscape">
 <view>当页面高度不小于 400 px 且屏幕方向为纵向时展示这里</view>
 </match-media>
 </view>
</template>
```

## MatchMediaProps[​](match-media.html#matchmediaprops)
参数类型必填说明minWidth`number`否页面最小宽度（ px 为单位）maxWidth`number`否页面最大宽度（ px 为单位）width`number`否页面宽度（ px 为单位）minHeight`number`否页面最小高度（ px 为单位）maxHeight`number`否页面最大高度（ px 为单位）height`number`否页面高度（ px 为单位）orientation`string`否屏幕方向（ landscape 或 portrait ）
### API 支持度[​](match-media.html#api-支持度)
API微信小程序支付宝小程序京东小程序H5React NativeHarmonyMatchMediaProps.minWidth✔️✔️✔️MatchMediaProps.maxWidth✔️✔️✔️MatchMediaProps.width✔️✔️✔️MatchMediaProps.minHeight✔️✔️✔️MatchMediaProps.maxHeight✔️✔️✔️MatchMediaProps.height✔️✔️✔️MatchMediaProps.orientation✔️✔️✔️
- 
- 
- 

-
