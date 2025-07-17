# 页面容器
小程序如果在页面内进行复杂的界面设计（如在页面内弹出半屏的弹窗、在页面内加载一个全屏的子页面等），用户进行返回操作会直接离开当前页面，不符合用户预期，预期应为关闭当前弹出的组件。 为此提供“假页”容器组件，效果类似于 `popup` 弹出层，页面内存在该容器时，当用户进行返回操作，关闭该容器不关闭页面。返回操作包括三种情形，右滑手势、安卓物理返回键和调用 `navigateBack` 接口。
Bug & Tip

- tip: 当前页面最多只有 1 个容器，若已存在容器的情况下，无法增加新的容器
- tip: wx.navigateBack 无法在页面栈顶调用，此时没有上一级页面
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html)
## 类型[​](page-container.html#类型)
```tsx
ComponentType<PageContainerProps>
```

## PageContainerProps[​](page-container.html#pagecontainerprops)
参数类型默认值必填说明show`boolean``false`否是否显示容器组件duration`number``300`否动画时长，单位毫秒zIndex`number``100`否z-index 层级overlay`boolean``true`否是否显示遮罩层position`keyof Position``bottom`否弹出位置，可选值为 top bottom right centerround`boolean``false`否是否显示圆角overlayStyle`string`否自定义遮罩层样式customStyle`string`否自定义弹出层样式closeOnSlideDown`boolean``false`否是否在下滑一段距离后关闭onBeforeEnter`CommonEventFunction`否进入前触发onEnter`CommonEventFunction`否进入中触发onAfterEnter`CommonEventFunction`否进入后触发onBeforeLeave`CommonEventFunction`否离开前触发onLeave`CommonEventFunction`否离开中触发onAfterLeave`CommonEventFunction`否离开后触发onClickOverlay`CommonEventFunction`否点击遮罩层时触发onEnterCancelled`CommonEventFunction`否进入被打断时触发（通过 a: if 打断时不会触发）。onLeaveCancelled`CommonEventFunction`否离开被打断时触发（通过 a: if 打断时不会触发）。
### API 支持度[​](page-container.html#api-支持度)
API微信小程序支付宝小程序京东小程序H5React NativeHarmonyPageContainerProps.show✔️✔️✔️✔️PageContainerProps.duration✔️✔️✔️✔️PageContainerProps.zIndex✔️✔️PageContainerProps.overlay✔️✔️✔️✔️PageContainerProps.position✔️✔️✔️✔️PageContainerProps.round✔️✔️✔️✔️PageContainerProps.overlayStyle✔️✔️✔️✔️PageContainerProps.customStyle✔️✔️✔️✔️PageContainerProps.closeOnSlideDown✔️✔️✔️PageContainerProps.onBeforeEnter✔️✔️✔️✔️PageContainerProps.onEnter✔️✔️✔️✔️PageContainerProps.onAfterEnter✔️✔️✔️✔️PageContainerProps.onBeforeLeave✔️✔️✔️✔️PageContainerProps.onLeave✔️✔️✔️✔️PageContainerProps.onAfterLeave✔️✔️✔️✔️PageContainerProps.onClickOverlay✔️✔️✔️PageContainerProps.onEnterCancelled✔️PageContainerProps.onLeaveCancelled✔️
### Position[​](page-container.html#position)
弹出位置
参数说明top上方弹出bottom下方弹出right右边弹出center中央弹出
- 
- 

- 
-
