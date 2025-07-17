# 隐藏消息提示框
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html)
## 类型[​](hideToast.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](hideToast.html#参数)
参数类型option`Option`
### Option[​](hideToast.html#option)
参数类型默认值必填说明noConflict`boolean``false`否目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
