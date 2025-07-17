# 仅在插件中有效，用于跳转到插件功能页
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html)
## 类型[​](functional-page-navigator.html#类型)
```tsx
ComponentType<FunctionalPageNavigatorProps>
```

## FunctionalPageNavigatorProps[​](functional-page-navigator.html#functionalpagenavigatorprops)
参数类型默认值必填说明version`keyof Version``"release"`否跳转到的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版）；线上版本必须设置为 releasename`keyof Name`否要跳转到的功能页args`object`否功能页参数，参数格式与具体功能页相关onSuccess`CommonEventFunction`否功能页返回，且操作成功时触发， detail 格式与具体功能页相关onFail`CommonEventFunction`否功能页返回，且操作失败时触发， detail 格式与具体功能页相关onCancel`CommonEventFunction`否因用户操作从功能页返回时触发
### API 支持度[​](functional-page-navigator.html#api-支持度)
API微信小程序H5React NativeHarmonyFunctionalPageNavigatorProps.version✔️FunctionalPageNavigatorProps.name✔️FunctionalPageNavigatorProps.args✔️FunctionalPageNavigatorProps.onSuccess✔️FunctionalPageNavigatorProps.onFail✔️FunctionalPageNavigatorProps.onCancel✔️
### Version[​](functional-page-navigator.html#version)
version 的合法值
参数说明develop开发版trial体验版release正式版
### Name[​](functional-page-navigator.html#name)
name 的合法值
参数说明loginAndGetUserInfo[用户信息功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/user-info.html)requestPayment[支付功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/request-payment.html)chooseAddress[收货地址功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages/choose-address.html)
- 
- 

- 
- 
-
