# 在input、textarea等focus拉起键盘之后，手动调用此接口收起键盘
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.hideKeyboard.html)
## 类型[​](hideKeyboard.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](hideKeyboard.html#参数)
参数类型option`Option`
### Option[​](hideKeyboard.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](hideKeyboard.html#示例代码)
```tsx
Taro.hideKeyboard({
 complete: res => {
 console.log('hideKeyboard res', res)
 }
})
```

- 
- 

- 

-
