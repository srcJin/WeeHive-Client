# 监听接收 NFC 设备消息事件，仅能注册一个监听
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html)
## 类型[​](onHCEMessage.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onHCEMessage.html#参数)
参数类型说明callback`Callback`接收 NFC 设备消息事件的回调函数
### Callback[​](onHCEMessage.html#callback)
接收 NFC 设备消息事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onHCEMessage.html#callbackresult)
参数类型说明data`ArrayBuffer``messageType=1` 时 ,客户端接收到 NFC 设备的指令messageType`keyof MessageType`消息类型reason`number``messageType=2` 时，原因
### MessageType[​](onHCEMessage.html#messagetype)
消息类型
参数说明1HCE APDU Command类型，小程序需对此指令进行处理，并调用 sendHCEMessage 接口返回处理指令2设备离场事件类型
- 
- 

- 
- 
-
