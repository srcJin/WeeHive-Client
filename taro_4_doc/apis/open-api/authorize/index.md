# 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。更多用法详见 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html)
## 类型[​](index.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](index.html#参数)
参数类型option`Option`
### Option[​](index.html#option)
参数类型必填说明scope`string`是需要获取权限的 scope，详见 [scope 列表](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8)complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](index.html#示例代码)
```tsx
// 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
Taro.getSetting({
 success: function (res) {
 if (!res.authSetting['scope.record']) {
 Taro.authorize({
 scope: 'scope.record',
 success: function () {
 // 用户已经同意小程序使用录音功能，后续调用 Taro.startRecord 接口不会弹窗询问
 Taro.startRecord()
 }
 })
 }
 }
})
```

- 
- 

- 

-
