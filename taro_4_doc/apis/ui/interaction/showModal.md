# 显示模态对话框 **注意**

- Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
- Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)
## 类型[​](showModal.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](showModal.html#参数)
参数类型option`Option`
### Option[​](showModal.html#option)
参数类型必填说明cancelColor`string`否取消按钮的文字颜色，必须是 16 进制格式的颜色字符串cancelText`string`否取消按钮的文字，最多 4 个字符complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）confirmColor`string`否确认按钮的文字颜色，必须是 16 进制格式的颜色字符串confirmText`string`否确认按钮的文字，最多 4 个字符content`string`否提示的内容fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数showCancel`boolean`否是否显示取消按钮success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数title`string`否提示的标题
### SuccessCallbackResult[​](showModal.html#successcallbackresult)
参数类型说明cancel`boolean`为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）confirm`boolean`为 true 时，表示用户点击了确定按钮errMsg`string`调用结果
## 示例代码[​](showModal.html#示例代码)
```tsx
Taro.showModal({
 title: '提示',
 content: '这是一个模态弹窗',
 success: function (res) {
 if (res.confirm) {
 console.log('用户点击确定')
 } else if (res.cancel) {
 console.log('用户点击取消')
 }
 }
})
```

- 
- 

- 
- 

-
