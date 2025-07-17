# 返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功
注意：**微信客户端 iOS 6.5.9，Android 6.5.10 及以上版本支持**
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html)
## 类型[​](navigateBackMiniProgram.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](navigateBackMiniProgram.html#参数)
参数类型option`Option`
### Option[​](navigateBackMiniProgram.html#option)
参数类型必填说明extraData`TaroGeneral.IAnyObject`否需要返回给上一个小程序的数据，上一个小程序可在 `App.onShow` 中获取到这份数据。 [详情](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html)。success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](navigateBackMiniProgram.html#示例代码)
```tsx
Taro.navigateBackMiniProgram({
 extraData: {
 foo: 'bar'
 },
 success: function (res) {
 // 返回成功
 }
})
```

- 
- 

- 

-
