# movable-view 的可移动区域
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html)
## 类型[​](movable-area.html#类型)
```tsx
ComponentType<MovableAreaProps>
```

## 示例代码[​](movable-area.html#示例代码)

- React
- Vue
```tsx
class App extends Components {
 render () {
 return (
 <MovableArea style='height: 200px; width: 200px; background: red;'>
 <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>旅行的意义</MovableView>
 </MovableArea>
 )
 }
}
html
 <movable-area style='height: 200px; width: 200px; background: red;'>
 <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>在路上</movable-view>
 </movable-area>
```

## MovableAreaProps[​](movable-area.html#movableareaprops)
参数类型默认值必填说明scaleArea`boolean``false`否当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area
### API 支持度[​](movable-area.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridMovableAreaProps.scaleArea✔️✔️✔️✔️✔️✔️✔️✔️
- 
- 
- 

-
