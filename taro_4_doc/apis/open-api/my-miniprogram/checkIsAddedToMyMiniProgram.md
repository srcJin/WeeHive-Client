# 检查小程序是否被添加至 「我的小程序」
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/my-miniprogram/wx.checkIsAddedToMyMiniProgram.html)
## 类型[​](checkIsAddedToMyMiniProgram.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](checkIsAddedToMyMiniProgram.html#参数)
参数类型option`Option`
### Option[​](checkIsAddedToMyMiniProgram.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](checkIsAddedToMyMiniProgram.html#successcallbackresult)
参数类型说明added`boolean`是否被添加至 「我的小程序」
- 
- 

- 
-
