# 跳转至隐私协议页面。隐私合规开发指南详情可见《小程序隐私协议开发指南》
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.openPrivacyContract.html)
## 类型[​](openPrivacyContract.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](openPrivacyContract.html#参数)
参数类型option`Option`
### Option[​](openPrivacyContract.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](openPrivacyContract.html#示例代码)
```tsx
Taro.openPrivacyContract({
 success: () => {}, // 打开成功
 fail: () => {}, // 打开失败
 complete: () => {}
})
```

- 
- 

- 

-
