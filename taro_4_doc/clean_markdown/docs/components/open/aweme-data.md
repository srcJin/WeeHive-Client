# 直播间状态组件
支持情况：!!!!!
[> 参考文档
](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/open-capacity/aweme-data/)
## 类型[​](aweme-data.html#类型)
```tsx
ComponentType<AwemeDataProps>
```

## AwemeDataProps[​](aweme-data.html#awemedataprops)
参数类型默认值必填说明awemeId`string`否用户的抖音号，可以进入抖音 App 用户个人主页查看type`string``"avatar"`否类型，可以选择头像或昵称disableDefault`boolean``false`否禁用默认行为。点击头像时，如果用户处于直播状态下默认会跳转到直播间，非直播状态下跳转到个人主页。如果为 true，点击头像时不会有默认行为。defaultAvatar`string`否获取信息失败时显示的默认头像 urldefaultText`string`否获取信息失败时显示的默认昵称文本onError`CommonEventFunction`否当错误发生时触发
### API 支持度[​](aweme-data.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyAwemeDataProps.awemeId✔️AwemeDataProps.type✔️AwemeDataProps.disableDefault✔️AwemeDataProps.defaultAvatar✔️AwemeDataProps.defaultText✔️AwemeDataProps.onError✔️
- 
- 

-
