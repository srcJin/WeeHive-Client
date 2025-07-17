# 监听小程序要打开的页面不存在事件。该事件与 [`App.onPageNotFound`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object) 的回调时机一致。
**注意**

- 开发者可以在回调中进行页面重定向，但必须在回调中**同步**处理，异步处理（例如 `setTimeout` 异步执行）无效。
- 若开发者没有调用 [Taro.onPageNotFound](onPageNotFound.html) 绑定监听，也没有声明 `App.onPageNotFound`，当跳转页面不存在时，将推入微信客户端原生的页面不存在提示页面。
- 如果回调中又重定向到另一个不存在的页面，将推入微信客户端原生的页面不存在提示页面，并且不再第二次回调。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html)
## 类型[​](onPageNotFound.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onPageNotFound.html#参数)
参数类型callback`Callback`
### Result[​](onPageNotFound.html#result)
参数类型说明isEntryPage`boolean`是否本次启动的首个页面（例如从分享等入口进来，首个页面是开发者配置的分享页面）path`string`不存在页面的路径query`TaroGeneral.IAnyObject`打开不存在页面的 query 参数
### Callback[​](onPageNotFound.html#callback)
小程序要打开的页面不存在事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
- 
- 

- 
-
