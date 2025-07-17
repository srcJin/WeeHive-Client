# IsoDep 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.html)
## 方法[​](IsoDep.html#方法)
### close[​](IsoDep.html#close)
断开连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.close.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### connect[​](IsoDep.html#connect)
连接 NFC 标签
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.connect.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getHistoricalBytes[​](IsoDep.html#gethistoricalbytes)
获取复位信息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.getHistoricalBytes.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### getMaxTransceiveLength[​](IsoDep.html#getmaxtransceivelength)
获取最大传输长度
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.getMaxTransceiveLength.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### isConnected[​](IsoDep.html#isconnected)
检查是否已连接
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.isConnected.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### setTimeout[​](IsoDep.html#settimeout)
设置超时时间
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.setTimeout.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### transceive[​](IsoDep.html#transceive)
发送数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/IsoDep.transceive.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](IsoDep.html#参数)
### close[​](IsoDep.html#close-1)
#### Option[​](IsoDep.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### connect[​](IsoDep.html#connect-1)
#### Option[​](IsoDep.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### getHistoricalBytes[​](IsoDep.html#gethistoricalbytes-1)
#### Option[​](IsoDep.html#option-2)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](IsoDep.html#successcallbackresult)
参数类型说明histBytes`ArrayBuffer`返回历史二进制数据
### getMaxTransceiveLength[​](IsoDep.html#getmaxtransceivelength-1)
#### Option[​](IsoDep.html#option-3)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](IsoDep.html#successcallbackresult-1)
参数类型说明length`number`最大传输长度
### isConnected[​](IsoDep.html#isconnected-1)
#### Option[​](IsoDep.html#option-4)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### setTimeout[​](IsoDep.html#settimeout-1)
#### Option[​](IsoDep.html#option-5)
参数类型必填说明timeout`number`是设置超时时间 (ms)complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### transceive[​](IsoDep.html#transceive-1)
#### Option[​](IsoDep.html#option-6)
参数类型必填说明data`ArrayBuffer`是需要传递的二进制数据complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](IsoDep.html#successcallbackresult-2)
参数类型data`ArrayBuffer`
## API 支持度[​](IsoDep.html#api-支持度)
API微信小程序H5React NativeHarmonyIsoDep✔️IsoDep.close✔️IsoDep.connect✔️IsoDep.getHistoricalBytes✔️IsoDep.getMaxTransceiveLength✔️IsoDep.isConnected✔️IsoDep.setTimeout✔️IsoDep.transceive✔️
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
