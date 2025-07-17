# 监听窗口尺寸变化事件
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html)
## 类型[​](onWindowResize.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onWindowResize.html#参数)
参数类型说明callback`Callback`窗口尺寸变化事件的回调函数
### Callback[​](onWindowResize.html#callback)
窗口尺寸变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onWindowResize.html#callbackresult)
参数类型size`Size`
### Size[​](onWindowResize.html#size)
参数类型说明windowHeight`number`变化后的窗口高度，单位 pxwindowWidth`number`变化后的窗口宽度，单位 px
- 
- 

- 
- 
-
