# 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的[权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)**。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)
## 类型[​](getSetting.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getSetting.html#参数)
参数类型option`Option`
### Option[​](getSetting.html#option)
参数类型必填说明withSubscriptions`boolean`否是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getSetting.html#successcallbackresult)
参数类型说明authSetting`AuthSetting`用户授权结果subscriptionsSetting`SubscriptionsSetting`用户订阅消息设置，接口参数 withSubscriptions 值为 true 时才会返回。miniprogramAuthSetting`AuthSetting`在插件中调用时，当前宿主小程序的用户授权结果errMsg`string`调用结果
## 示例代码[​](getSetting.html#示例代码)
```tsx
Taro.getSetting({
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
