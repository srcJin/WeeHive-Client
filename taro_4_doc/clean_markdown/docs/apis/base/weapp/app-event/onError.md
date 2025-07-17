# 监听小程序错误事件。如脚本错误或 API 调用报错等。该事件与 [`App.onError`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onerrorstring-error) 的回调时机与参数一致。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html)
## 类型[​](onError.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onError.html#参数)
参数类型callback`Callback`
### Callback[​](onError.html#callback)
小程序错误事件的回调函数
```tsx
(error: string | ErrorEvent | Error) => void
```
参数类型说明errorstring or ErrorEvent or Error错误信息，包含堆栈
- 
- 

-
