# MifareClassic 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.html)
## 方法[​](MifareClassic.html#方法)
### close[​](MifareClassic.html#close)
断开连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](MifareClassic.html#connect)
连接 NFC 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getMaxTransceiveLength[​](MifareClassic.html#getmaxtransceivelength)
获取最大传输长度
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.getMaxTransceiveLength.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](MifareClassic.html#isconnected)
检查是否已连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### setTimeout[​](MifareClassic.html#settimeout)
设置超时时间
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### transceive[​](MifareClassic.html#transceive)
发送数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.transceive.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](MifareClassic.html#参数)
### close[​](MifareClassic.html#close-1)
#### Option[​](MifareClassic.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](MifareClassic.html#connect-1)
#### Option[​](MifareClassic.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### getMaxTransceiveLength[​](MifareClassic.html#getmaxtransceivelength-1)
#### Option[​](MifareClassic.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](MifareClassic.html#successcallbackresult)
参数类型说明length`number`最大传输长度
### isConnected[​](MifareClassic.html#isconnected-1)
#### Option[​](MifareClassic.html#option-3)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### setTimeout[​](MifareClassic.html#settimeout-1)
#### Option[​](MifareClassic.html#option-4)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### transceive[​](MifareClassic.html#transceive-1)
#### Option[​](MifareClassic.html#option-5)
参数类型必填说明data`ArrayBuffer`是需要传递的二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](MifareClassic.html#successcallbackresult-1)
参数类型data`ArrayBuffer`
## API 支持度[​](MifareClassic.html#api-支持度)
API微信小程序H5React NativeHarmonyMifareClassic✔️MifareClassic.close✔️MifareClassic.connect✔️MifareClassic.getMaxTransceiveLength✔️MifareClassic.isConnected✔️MifareClassic.setTimeout✔️MifareClassic.transceive✔️
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
