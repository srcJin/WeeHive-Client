# 获取屏幕亮度。
**说明**

- 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html)
## 类型[​](getScreenBrightness.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackOption>
```

## 参数[​](getScreenBrightness.html#参数)
参数类型option`Option`
### Option[​](getScreenBrightness.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(option: SuccessCallbackOption) => void`否接口调用成功的回调函数
### SuccessCallbackOption[​](getScreenBrightness.html#successcallbackoption)
参数类型说明value`number`屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
- 
- 

- 
-
