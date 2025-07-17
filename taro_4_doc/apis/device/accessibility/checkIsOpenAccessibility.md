# 检测是否开启视觉无障碍功能。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/accessibility/wx.checkIsOpenAccessibility.html)
## 类型[​](checkIsOpenAccessibility.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](checkIsOpenAccessibility.html#参数)
参数类型option`Option`
### Option[​](checkIsOpenAccessibility.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](checkIsOpenAccessibility.html#successcallbackresult)
参数类型说明open`boolean`iOS 上开启辅助功能旁白，安卓开启 talkback 时返回 true
- 
- 

- 
-
