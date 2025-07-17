# NfcV 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.html)
## 方法[​](NfcV.html#方法)
### close[​](NfcV.html#close)
断开连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](NfcV.html#connect)
连接 NFC 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getMaxTransceiveLength[​](NfcV.html#getmaxtransceivelength)
获取最大传输长度
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.getMaxTransceiveLength.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](NfcV.html#isconnected)
检查是否已连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### setTimeout[​](NfcV.html#settimeout)
设置超时时间
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### transceive[​](NfcV.html#transceive)
发送数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NfcV.transceive.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](NfcV.html#参数)
### close[​](NfcV.html#close-1)
#### Option[​](NfcV.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](NfcV.html#connect-1)
#### Option[​](NfcV.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### getMaxTransceiveLength[​](NfcV.html#getmaxtransceivelength-1)
#### Option[​](NfcV.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcV.html#successcallbackresult)
参数类型说明length`number`最大传输长度
### isConnected[​](NfcV.html#isconnected-1)
#### Option[​](NfcV.html#option-3)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### setTimeout[​](NfcV.html#settimeout-1)
#### Option[​](NfcV.html#option-4)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### transceive[​](NfcV.html#transceive-1)
#### Option[​](NfcV.html#option-5)
参数类型必填说明data`ArrayBuffer`是需要传递的二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](NfcV.html#successcallbackresult-1)
参数类型data`ArrayBuffer`
## API 支持度[​](NfcV.html#api-支持度)
API微信小程序H5React NativeHarmonyNfcV✔️NfcV.close✔️NfcV.connect✔️NfcV.getMaxTransceiveLength✔️NfcV.isConnected✔️NfcV.setTimeout✔️NfcV.transceive✔️
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
