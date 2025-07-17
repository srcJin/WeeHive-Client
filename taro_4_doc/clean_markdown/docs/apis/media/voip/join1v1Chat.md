# 加入（创建）双人通话
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.join1v1Chat.html)
## 类型[​](join1v1Chat.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](join1v1Chat.html#参数)
参数类型option`Option`
### Caller[​](join1v1Chat.html#caller)
参数类型必填说明nickname`string`是昵称headImage`string`否头像openid`string`是小程序内 openid
### Listener[​](join1v1Chat.html#listener)
参数类型必填说明nickname`string`是昵称headImage`string`否头像openid`string`是小程序内 openid
### RoomType[​](join1v1Chat.html#roomtype)
参数说明voice语音通话video视频通话
### Option[​](join1v1Chat.html#option)
参数类型默认值必填说明caller`Caller`是呼叫方信息listener`Listener`是接听方信息backgroundType`keyof ColorType``0`否窗口背景色roomType`keyof RoomType`否通话类型minWindowType`keyof ColorType``1`否小窗样式disableSwitchVoice`boolean``false`否不允许切换到语音通话complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ChatErrCode[​](join1v1Chat.html#chaterrcode)
参数说明-20000未开通双人通话-20001当前设备不支持-20002正在通话中-20003其它小程序正在通话中-30000内部系统错误-30001微信缺失相机权限-30002微信缺失录音权限-30003小程序缺失录音权限-30004小程序缺失相机权限-1当前已在房间内-2录音设备被占用，可能是当前正在使用微信内语音通话或系统通话-3加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败-1000系统错误
### FailCallbackResult[​](join1v1Chat.html#failcallbackresult)
参数类型说明errMsg`string`错误信息errCode`keyof ChatErrCode`错误码
### SuccessCallbackResult[​](join1v1Chat.html#successcallbackresult)
参数类型说明errCode`number`错误码errMsg`string`调用结果
### Promised[​](join1v1Chat.html#promised)
```tsx
FailCallbackResult | SuccessCallbackResult
```

- 
- 

- 
- 
- 
- 
- 
- 
- 
-
