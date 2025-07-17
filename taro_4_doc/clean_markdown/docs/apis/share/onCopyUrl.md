# 监听用户点击右上角菜单的「复制链接」按钮时触发的事件
> 本接口为 Beta 版本，暂只在 Android 平台支持。

支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.onCopyUrl.html)
## 类型[​](onCopyUrl.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onCopyUrl.html#参数)
参数类型说明callback`Callback`用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数
### Callback[​](onCopyUrl.html#callback)
用户点击右上角菜单的「复制链接」按钮时触发的事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onCopyUrl.html#callbackresult)
参数类型说明query`string`用短链打开小程序时当前页面携带的查询字符串。小程序中使用时，应在进入页面时调用 `Taro.onCopyUrl` 自定义 `query`，退出页面时调用 `Taro.offCopyUrl`，防止影响其它页面。
- 
- 

- 
-
