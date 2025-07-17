# 监听键盘高度变化
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/keyboard/wx.onKeyboardHeightChange.html)
## 类型[​](onKeyboardHeightChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onKeyboardHeightChange.html#参数)
参数类型callback`Callback`
### Callback[​](onKeyboardHeightChange.html#callback)
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onKeyboardHeightChange.html#callbackresult)
参数类型说明height`number`键盘高度
## 示例代码[​](onKeyboardHeightChange.html#示例代码)
```tsx
Taro.onKeyboardHeightChange(res => {
 console.log(res.height)
})
```

- 
- 

- 
- 

-
