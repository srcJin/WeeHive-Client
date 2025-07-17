# MifareUltralight 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.html)
## 方法[​](MifareUltralight.html#方法)
### close[​](MifareUltralight.html#close)
断开连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](MifareUltralight.html#connect)
连接 NFC 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getMaxTransceiveLength[​](MifareUltralight.html#getmaxtransceivelength)
获取最大传输长度
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.getMaxTransceiveLength.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](MifareUltralight.html#isconnected)
检查是否已连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### setTimeout[​](MifareUltralight.html#settimeout)
设置超时时间
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### transceive[​](MifareUltralight.html#transceive)
发送数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareUltralight.transceive.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](MifareUltralight.html#参数)
### close[​](MifareUltralight.html#close-1)
#### Option[​](MifareUltralight.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](MifareUltralight.html#connect-1)
#### Option[​](MifareUltralight.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### getMaxTransceiveLength[​](MifareUltralight.html#getmaxtransceivelength-1)
#### Option[​](MifareUltralight.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](MifareUltralight.html#successcallbackresult)
参数类型说明length`number`最大传输长度
### isConnected[​](MifareUltralight.html#isconnected-1)
#### Option[​](MifareUltralight.html#option-3)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### setTimeout[​](MifareUltralight.html#settimeout-1)
#### Option[​](MifareUltralight.html#option-4)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### transceive[​](MifareUltralight.html#transceive-1)
#### Option[​](MifareUltralight.html#option-5)
参数类型必填说明data`ArrayBuffer`是需要传递的二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](MifareUltralight.html#successcallbackresult-1)
参数类型data`ArrayBuffer`
## API 支持度[​](MifareUltralight.html#api-支持度)
API微信小程序H5React NativeHarmonyMifareUltralight✔️MifareUltralight.close✔️MifareUltralight.connect✔️MifareUltralight.getMaxTransceiveLength✔️MifareUltralight.isConnected✔️MifareUltralight.setTimeout✔️MifareUltralight.transceive✔️
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
