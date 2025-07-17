# 监听系统主题改变事件。该事件与 [`App.onThemeChange`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onThemeChange-Object-object) 的回调时机一致。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html)
## 类型[​](onThemeChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onThemeChange.html#参数)
参数类型callback`Callback`
### Callback[​](onThemeChange.html#callback)
系统主题改变事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
### Result[​](onThemeChange.html#result)
参数类型说明theme`keyof ITheme`系统当前的主题，取值为`light`或`dark`
### ITheme[​](onThemeChange.html#itheme)
参数说明light浅色主题dark深色主题
- 
- 

- 
- 
-
