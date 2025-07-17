# 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.setWindowSize.html)
## 类型[​](setWindowSize.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setWindowSize.html#参数)
参数类型option`Option`
### Option[​](setWindowSize.html#option)
参数类型必填说明width`string`是窗口宽度，以像素为单位height`string`是窗口高度，以像素为单位complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
