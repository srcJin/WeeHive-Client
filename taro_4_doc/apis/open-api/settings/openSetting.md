# 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
注意：[2.3.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。[详情](https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008)
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
## 类型[​](openSetting.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](openSetting.html#参数)
参数类型option`Option`
### Option[​](openSetting.html#option)
参数类型默认值必填说明withSubscriptions`boolean``false`否是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](openSetting.html#successcallbackresult)
参数类型说明authSetting`AuthSetting`用户授权结果subscriptionsSetting`SubscriptionsSetting`用户订阅消息设置，接口参数 withSubscriptions 值为 true 时才会返回。errMsg`string`调用结果
## 示例代码[​](openSetting.html#示例代码)
```tsx
Taro.openSetting({
 success: function (res) {
 console.log(res.authSetting)
 // res.authSetting = {
 // "scope.userInfo": true,
 // "scope.userLocation": true
 // }
 }
})
```

- 
- 

- 
- 

-
