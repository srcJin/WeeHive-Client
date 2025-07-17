# Ndef 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.html)
## 方法[​](Ndef.html#方法)
### close[​](Ndef.html#close)
断开连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](Ndef.html#connect)
连接 NFC 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](Ndef.html#isconnected)
检查是否已连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### offNdefMessage[​](Ndef.html#offndefmessage)
取消监听 Ndef 消息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.offNdefMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听 Ndef 消息回调函数
### onNdefMessage[​](Ndef.html#onndefmessage)
监听 Ndef 消息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.onNdefMessage.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听 Ndef 消息回调函数
### setTimeout[​](Ndef.html#settimeout)
设置超时时间
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### writeNdefMessage[​](Ndef.html#writendefmessage)
重写 Ndef 标签内容
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/Ndef.writeNdefMessage.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](Ndef.html#参数)
### close[​](Ndef.html#close-1)
#### Option[​](Ndef.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](Ndef.html#connect-1)
#### Option[​](Ndef.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### isConnected[​](Ndef.html#isconnected-1)
#### Option[​](Ndef.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### onNdefMessage[​](Ndef.html#onndefmessage-1)
#### Callback[​](Ndef.html#callback)
监听 Ndef 消息回调函数
```tsx
(args: unknown[]) => void
```
参数类型args`unknown[]`
### setTimeout[​](Ndef.html#settimeout-1)
#### Option[​](Ndef.html#option-3)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### writeNdefMessage[​](Ndef.html#writendefmessage-1)
#### Option[​](Ndef.html#option-4)
参数类型必填说明uris`string[]`否uri 数组texts`string[]`否text 数组records`record[]`否二进制对象数组, 需要指明 id, type 以及 payload (均为 ArrayBuffer 类型)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
#### record[​](Ndef.html#record)
参数类型id`ArrayBuffer`type`ArrayBuffer`payload`ArrayBuffer`
## API 支持度[​](Ndef.html#api-支持度)
API微信小程序H5React NativeHarmonyNdef✔️Ndef.close✔️Ndef.connect✔️Ndef.isConnected✔️Ndef.offNdefMessage✔️Ndef.onNdefMessage✔️Ndef.setTimeout✔️Ndef.writeNdefMessage✔️
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
- 
- 
- 
- 
- 

-
