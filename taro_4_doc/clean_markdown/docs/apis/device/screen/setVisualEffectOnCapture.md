# 设置截屏/录屏时屏幕表现，仅支持在 Android 端调用
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setVisualEffectOnCapture.html)
## 类型[​](setVisualEffectOnCapture.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setVisualEffectOnCapture.html#参数)
参数类型option`Option`
### Option[​](setVisualEffectOnCapture.html#option)
参数类型默认值必填说明visualEffect"none" or "hidden"`"none"`否截屏/录屏时的表现，仅支持 none / hidden，传入 hidden 则表示在截屏/录屏时隐藏屏幕complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
