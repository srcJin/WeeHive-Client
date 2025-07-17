# 监听实时语音通话成员视频状态变化事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPVideoMembersChanged.html)
## 类型[​](onVoIPVideoMembersChanged.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onVoIPVideoMembersChanged.html#参数)
参数类型callback`Callback`
### Result[​](onVoIPVideoMembersChanged.html#result)
参数类型说明openIdList`string[]`开启视频的成员名单errCode`number`错误码errMsg`string`调用结果
### Callback[​](onVoIPVideoMembersChanged.html#callback)
实时语音通话成员视频状态变化事件的回调函数
```tsx
(res: Result) => void
```
参数类型res`Result`
- 
- 

- 
-
