# 监听未处理的 Promise 拒绝事件。该事件与 [`App.onUnhandledRejection`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onUnhandledRejection-Object-object) 的回调时机与参数一致。
**注意**

- 所有的 unhandledRejection 都可以被这一监听捕获，但只有 Error 类型的才会在小程序后台触发报警。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html)
## 类型[​](onUnhandledRejection.html#类型)
```tsx
<T = any>(callback: Callback<T>) => void
```

## 参数[​](onUnhandledRejection.html#参数)
参数类型callback`T`
### Callback[​](onUnhandledRejection.html#callback)
```tsx
(res: Result<T>) => void
```
参数类型res`Result<T>`
### Result[​](onUnhandledRejection.html#result)
参数类型说明reasonstring or Error拒绝原因，一般是一个 Error 对象promise`Promise<T>`被拒绝的 Promise 对象
- 
- 

- 
-
