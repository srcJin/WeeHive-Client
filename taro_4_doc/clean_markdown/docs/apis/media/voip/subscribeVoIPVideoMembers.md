# 订阅视频画面成员
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.subscribeVoIPVideoMembers.html)
## 类型[​](subscribeVoIPVideoMembers.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](subscribeVoIPVideoMembers.html#参数)
参数类型option`Option`
### Option[​](subscribeVoIPVideoMembers.html#option)
参数类型必填说明openIdList`string[]`是订阅的成员列表complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
