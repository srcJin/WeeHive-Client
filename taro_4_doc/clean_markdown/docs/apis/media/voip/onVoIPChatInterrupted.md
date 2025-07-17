# 监听被动断开实时语音通话事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatInterrupted.html)
## 类型[​](onVoIPChatInterrupted.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onVoIPChatInterrupted.html#参数)
参数类型callback`Callback`
### Result[​](onVoIPChatInterrupted.html#result)
参数类型说明openIdList`string[]`还在实时语音通话中的成员 openId 名单errCode`number`错误码errMsg`string`调用结果
### Callback[​](onVoIPChatInterrupted.html#callback)
房间状态变化事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
- 
- 

- 
-
