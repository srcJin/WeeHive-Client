# 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
仅微信小程序平台支持 type 参数
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html)
## 类型[​](vibrateShort.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](vibrateShort.html#参数)
参数类型option`Option`
### Option[​](vibrateShort.html#option)
参数类型必填说明type"heavy" or "medium" or "light"否震动强度类型，有效值为：heavy、medium、lightcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](vibrateShort.html#示例代码)
```tsx
Taro.vibrateShort(params).then(...)
```

- 
- 

- 

-
