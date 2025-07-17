# 发送 NFC 消息。仅在安卓系统下有效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html)
## 类型[​](sendHCEMessage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.NFCError>
```

## 参数[​](sendHCEMessage.html#参数)
参数类型option`Option`
### Option[​](sendHCEMessage.html#option)
参数类型必填说明data`ArrayBuffer`是二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
## 示例代码[​](sendHCEMessage.html#示例代码)
```tsx
const buffer = new ArrayBuffer(1)
const dataView = new DataView(buffer)
dataView.setUint8(0, 0)
 Taro.startHCE({
 success: function (res) {
 Taro.onHCEMessage(function (res) {
 if (res.messageType === 1) {
 Taro.sendHCEMessage({data: buffer})
 }
 })
 }
})
```

- 
- 

- 

-
