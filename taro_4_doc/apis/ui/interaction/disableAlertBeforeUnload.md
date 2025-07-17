# 关闭小程序页面返回询问对话框
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.disableAlertBeforeUnload.html)
## 类型[​](disableAlertBeforeUnload.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](disableAlertBeforeUnload.html#参数)
参数类型option`Option`
### Option[​](disableAlertBeforeUnload.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
