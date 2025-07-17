# NFC 实例
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.html)
## 方法[​](NFCAdapter.html#方法)
### getIsoDep[​](NFCAdapter.html#getisodep)
获取IsoDep实例，实例支持ISO-DEP (ISO 14443-4)标准的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getIsoDep.html)
```tsx
() => IsoDep
```

### getMifareClassic[​](NFCAdapter.html#getmifareclassic)
获取MifareClassic实例，实例支持MIFARE Classic标签的读写
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getMifareClassic.html)
```tsx
() => MifareClassic
```

### getMifareUltralight[​](NFCAdapter.html#getmifareultralight)
获取MifareUltralight实例，实例支持MIFARE Ultralight标签的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getMifareUltralight.html)
```tsx
() => MifareUltralight
```

### getNdef[​](NFCAdapter.html#getndef)
获取Ndef实例，实例支持对NDEF格式的NFC标签上的NDEF数据的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNdef.html)
```tsx
() => Ndef
```

### getNfcA[​](NFCAdapter.html#getnfca)
获取NfcA实例，实例支持NFC-A (ISO 14443-3A)标准的读写
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcA.html)
```tsx
() => NfcA
```

### getNfcB[​](NFCAdapter.html#getnfcb)
获取NfcB实例，实例支持NFC-B (ISO 14443-3B)标准的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcB.html)
```tsx
() => NfcB
```

### getNfcF[​](NFCAdapter.html#getnfcf)
获取NfcF实例，实例支持NFC-F (JIS 6319-4)标准的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcF.html)
```tsx
() => NfcB
```

### getNfcV[​](NFCAdapter.html#getnfcv)
获取NfcV实例，实例支持NFC-V (ISO 15693)标准的读写
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.getNfcV.html)
```tsx
() => NfcV
```

### offDiscovered[​](NFCAdapter.html#offdiscovered)
取消监听 NFC Tag
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.offDiscovered.html)
```tsx
(callback?: Callback) => void
```
参数类型说明callback`Callback`监听 NFC Tag的回调函数
### onDiscovered[​](NFCAdapter.html#ondiscovered)
监听 NFC Tag
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.onDiscovered.html)
```tsx
(callback: Callback) => void
```
参数类型说明callback`Callback`监听 NFC Tag的回调函数
### startDiscovery[​](NFCAdapter.html#startdiscovery)
开始扫描NFC标签
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.startDiscovery.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
### stopDiscovery[​](NFCAdapter.html#stopdiscovery)
关闭NFC标签扫描
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/NFCAdapter.stopDiscovery.html)
```tsx
(option?: Option) => Promise<TaroGeneral.NFCError>
```
参数类型option`Option`
## 参数[​](NFCAdapter.html#参数)
### onDiscovered[​](NFCAdapter.html#ondiscovered-1)
#### Callback[​](NFCAdapter.html#callback)
监听 NFC Tag的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
#### CallbackResult[​](NFCAdapter.html#callbackresult)
参数类型必填说明techs`string[]`是tech 数组，用于匹配NFC卡片具体可以使用什么标准（NfcA等实例）处理messages`NdefMessage[]`是NdefMessage 数组，消息格式为 {id: ArrayBuffer, type: ArrayBuffer, payload: ArrayBuffer}id`ArrayBuffer`否NFC标签的UID
API 支持度: tt
#### NdefMessage[​](NFCAdapter.html#ndefmessage)
参数类型id`ArrayBuffer`type`ArrayBuffer`payload`ArrayBuffer`
### startDiscovery[​](NFCAdapter.html#startdiscovery-1)
#### Option[​](NFCAdapter.html#option)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
### stopDiscovery[​](NFCAdapter.html#stopdiscovery-1)
#### Option[​](NFCAdapter.html#option-1)
参数类型必填说明complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
## API 支持度[​](NFCAdapter.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyNFCAdapter✔️NFCAdapter.getIsoDep✔️NFCAdapter.getMifareClassic✔️✔️NFCAdapter.getMifareUltralight✔️NFCAdapter.getNdef✔️NFCAdapter.getNfcA✔️✔️NFCAdapter.getNfcB✔️NFCAdapter.getNfcF✔️NFCAdapter.getNfcV✔️NFCAdapter.offDiscovered✔️✔️NFCAdapter.onDiscovered✔️✔️NFCAdapter.startDiscovery✔️✔️NFCAdapter.stopDiscovery✔️✔️
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
