# 在input、textarea等focus之后，获取输入框的光标位置。注意：只有在focus的时候调用此接口才有效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.getSelectedTextRange.html)
## 类型[​](getSelectedTextRange.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getSelectedTextRange.html#参数)
参数类型option`Option`
### Option[​](getSelectedTextRange.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getSelectedTextRange.html#successcallbackresult)
参数类型说明end`number`输入框光标结束位置start`number`输入框光标起始位置errMsg`string`调用结果
## 示例代码[​](getSelectedTextRange.html#示例代码)
```tsx
Taro.getSelectedTextRange({
 complete: res => {
 console.log('getSelectedTextRange res', res.start, res.end)
 }
})
```

- 
- 

- 
- 

-
