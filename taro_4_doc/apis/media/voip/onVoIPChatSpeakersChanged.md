# 监听实时语音通话成员通话状态变化事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html)
## 类型[​](onVoIPChatSpeakersChanged.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onVoIPChatSpeakersChanged.html#参数)
参数类型callback`Callback`
### Result[​](onVoIPChatSpeakersChanged.html#result)
参数类型说明openIdList`string[]`还在实时语音通话中的成员 openId 名单errCode`number`错误码errMsg`string`调用结果
### Callback[​](onVoIPChatSpeakersChanged.html#callback)
房间状态变化事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
- 
- 

- 
-
