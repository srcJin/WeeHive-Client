# 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html)
## 类型[​](onUserCaptureScreen.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onUserCaptureScreen.html#参数)
参数类型说明callback`Callback`用户主动截屏事件的回调函数
### Callback[​](onUserCaptureScreen.html#callback)
用户主动截屏事件的回调函数
```tsx
(result: TaroGeneral.CallbackResult) => void
```
参数类型result`TaroGeneral.CallbackResult`
## 示例代码[​](onUserCaptureScreen.html#示例代码)
```tsx
Taro.onUserCaptureScreen(function (res) {
 console.log('用户截屏了')
})
```

- 
- 

- 

-
