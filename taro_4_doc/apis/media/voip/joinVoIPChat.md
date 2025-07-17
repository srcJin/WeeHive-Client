# 加入 (创建) 实时语音通话，更多信息可见 [实时语音指南](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/voip-chat.html)
调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html)
## 类型[​](joinVoIPChat.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](joinVoIPChat.html#参数)
参数类型option`Option`
### Promised[​](joinVoIPChat.html#promised)
```tsx
FailCallbackResult | SuccessCallbackResult
```

### Option[​](joinVoIPChat.html#option)
参数类型默认值必填说明roomType`RoomType``"voice"`否房间类型signature`string`是签名，用于验证小游戏的身份nonceStr`string`是验证所需的随机字符串timeStamp`number`是验证所需的时间戳groupId`string`是小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。muteConfig`MuteConfig`否静音设置complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RoomType[​](joinVoIPChat.html#roomtype)
房间类型
参数说明voice音频房间，用于语音通话video视频房间，结合 [voip-room](../../../components/media/voip-room.html) 组件可显示成员画面
### MuteConfig[​](joinVoIPChat.html#muteconfig)
静音设置
参数类型必填说明muteMicrophone`boolean`否是否静音麦克风muteEarphone`boolean`否是否静音耳机
### FailCallbackResult[​](joinVoIPChat.html#failcallbackresult)
参数类型说明errMsg`string`错误信息errCode`keyof VoipErrCode`错误码
### SuccessCallbackResult[​](joinVoIPChat.html#successcallbackresult)
参数类型说明openIdList`string[]`还在实时语音通话中的成员 openId 名单errCode`number`错误码errMsg`string`调用结果
### VoipErrCode[​](joinVoIPChat.html#voiperrcode)
Voip 错误码
参数说明-1当前已在房间内-2录音设备被占用，可能是当前正在使用微信内语音通话或系统通话-3加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败-1000系统错误
- 
- 

- 
- 
- 
- 
- 
- 
-
