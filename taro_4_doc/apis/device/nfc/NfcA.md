# NfcA 标签
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.html)
## 方法[​](NfcA.html#方法)
### close[​](NfcA.html#close)
断开连接
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](NfcA.html#connect)
连接 NFC 标签
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getAtqa[​](NfcA.html#getatqa)
获取 ATQA 信息
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getAtqa.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getMaxTransceiveLength[​](NfcA.html#getmaxtransceivelength)
获取最大传输长度
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getMaxTransceiveLength.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getSak[​](NfcA.html#getsak)
获取 SAK 信息
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.getSak.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](NfcA.html#isconnected)
检查是否已连接
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### setTimeout[​](NfcA.html#settimeout)
设置超时时间
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### transceive[​](NfcA.html#transceive)
发送数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcA.transceive.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](NfcA.html#参数)
### close[​](NfcA.html#close-1)
#### Option[​](NfcA.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](NfcA.html#connect-1)
#### Option[​](NfcA.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### getAtqa[​](NfcA.html#getatqa-1)
#### Option[​](NfcA.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcA.html#successcallbackresult)
参数类型说明atqa`ArrayBuffer`返回 ATQA/SENS_RES 数据
### getMaxTransceiveLength[​](NfcA.html#getmaxtransceivelength-1)
#### Option[​](NfcA.html#option-3)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcA.html#successcallbackresult-1)
参数类型说明length`number`最大传输长度
### getSak[​](NfcA.html#getsak-1)
#### Option[​](NfcA.html#option-4)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcA.html#successcallbackresult-2)
参数类型说明sak`number`返回 SAK/SEL_RES 数据
### isConnected[​](NfcA.html#isconnected-1)
#### Option[​](NfcA.html#option-5)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### setTimeout[​](NfcA.html#settimeout-1)
#### Option[​](NfcA.html#option-6)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### transceive[​](NfcA.html#transceive-1)
#### Option[​](NfcA.html#option-7)
参数类型必填说明data`ArrayBuffer`是需要传递的二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcA.html#successcallbackresult-3)
参数类型data`ArrayBuffer`
## API 支持度[​](NfcA.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyNfcA✔️✔️NfcA.close✔️✔️NfcA.connect✔️✔️NfcA.getAtqa✔️✔️NfcA.getMaxTransceiveLength✔️✔️NfcA.getSak✔️✔️NfcA.isConnected✔️✔️NfcA.setTimeout✔️✔️NfcA.transceive✔️✔️
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
- 
- 

-
