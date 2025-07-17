# 页面链接
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)
## 类型[​](navigator.html#类型)
```tsx
ComponentType<NavigatorProps>
```

## NavigatorProps[​](navigator.html#navigatorprops)
参数类型默认值必填说明target`keyof Target``"self"`否在哪个目标上发生跳转，默认当前小程序url`string`否当前小程序内的跳转链接openType`keyof OpenType``"navigate"`否跳转方式delta`number`否当 open-type 为 'navigateBack' 时有效，表示回退的层数appId`string`否当 `target="miniProgram"` 时有效，要打开的小程序 appIdpath`string`否当 `target="miniProgram"` 时有效，打开的页面路径，如果为空则打开首页extraData`object`否当 `target="miniProgram"` 时有效，需要传递给目标小程序的数据，目标小程序可在 `App.onLaunch()`，`App.onShow()` 中获取到这份数据.version`keyof Version`否当 `target="miniProgram"` 时有效，要打开的小程序版本hoverClass`string``"navigator-hover"`否指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果hoverStopPropagation`boolean``false`否指定是否阻止本节点的祖先节点出现点击态hoverStartTime`number``50`否按住后多久出现点击态，单位毫秒hoverStayTime`number``600`否手指松开后点击态保留时间，单位毫秒shortLink`string`否当target="miniProgram"时有效，当传递该参数后，可以不传 app-id 和 path。链接可以通过【小程序菜单】->【复制链接】获取。ariaLabel`string`否无障碍访问，（属性）元素的额外描述onSuccess`CommonEventFunction`否当 `target="miniProgram"` 时有效，跳转小程序成功onFail`CommonEventFunction`否当 `target="miniProgram"` 时有效，跳转小程序失败onComplete`CommonEventFunction`否当 `target="miniProgram"` 时有效，跳转小程序完成
### API 支持度[​](navigator.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridNavigatorProps.target✔️✔️✔️NavigatorProps.url✔️✔️✔️✔️✔️✔️✔️✔️NavigatorProps.openType✔️✔️✔️✔️✔️✔️✔️✔️NavigatorProps.delta✔️✔️✔️✔️✔️✔️✔️NavigatorProps.appId✔️✔️✔️NavigatorProps.path✔️✔️✔️NavigatorProps.extraData✔️✔️✔️NavigatorProps.version✔️✔️✔️NavigatorProps.hoverClass✔️✔️✔️✔️✔️✔️✔️✔️NavigatorProps.hoverStopPropagation✔️✔️✔️✔️✔️NavigatorProps.hoverStartTime✔️✔️✔️✔️✔️✔️NavigatorProps.hoverStayTime✔️✔️✔️✔️✔️✔️NavigatorProps.shortLink✔️NavigatorProps.ariaLabel✔️NavigatorProps.onSuccess✔️✔️✔️✔️✔️NavigatorProps.onFail✔️✔️✔️✔️✔️NavigatorProps.onComplete✔️✔️✔️✔️✔️
### Target[​](navigator.html#target)
target 的合法值
参数说明self当前小程序miniProgram其它小程序
### OpenType[​](navigator.html#opentype)
open-type 的合法值
参数说明navigate对应 Taro.navigateTo 或 Taro.navigateToMiniProgram 的功能redirect对应 Taro.redirectTo 的功能switchTab对应 Taro.switchTab 的功能reLaunch对应 Taro.reLaunch 的功能navigateBack对应 Taro.navigateBack 的功能exit退出小程序，`target="miniProgram"` 时生效
### Version[​](navigator.html#version)
version 的合法值
参数说明develop开发版trial体验版release正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。
- 
- 

- 
- 
- 
-
