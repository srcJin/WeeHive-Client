# 监听房间状态变化事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatStateChanged.html)
## 类型[​](onVoIPChatStateChanged.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onVoIPChatStateChanged.html#参数)
参数类型callback`Callback`
### Result[​](onVoIPChatStateChanged.html#result)
参数类型说明code`number`事件码data`Record<any, any>`附加信息errCode`number`错误码errMsg`string`调用结果
### Callback[​](onVoIPChatStateChanged.html#callback)
房间状态变化事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
- 
- 

- 
-
