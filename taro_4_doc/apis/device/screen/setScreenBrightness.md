# 设置屏幕亮度。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html)
## 类型[​](setScreenBrightness.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setScreenBrightness.html#参数)
参数类型option`Option`
### Option[​](setScreenBrightness.html#option)
参数类型必填说明value`number`是屏幕亮度值，范围 0 ~ 1。0 最暗，1 最亮complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setScreenBrightness.html#示例代码)
```tsx
Taro.setScreenBrightness(params).then(...)
```

- 
- 

- 

-
