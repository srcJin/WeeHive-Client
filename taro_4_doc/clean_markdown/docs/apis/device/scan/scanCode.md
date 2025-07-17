# 调起客户端扫码界面，扫码成功后返回对应的结果
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html)
## 类型[​](scanCode.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](scanCode.html#参数)
参数类型option`Option`
### Option[​](scanCode.html#option)
参数类型默认值必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数onlyFromCamera`boolean``false`否是否只能从相机扫码，不允许从相册选择图片scanType`(keyof ScanType)[]`否扫码类型success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](scanCode.html#successcallbackresult)
参数类型说明charSet`string`所扫码的字符集path`string`当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 pathrawData`string`原始数据，base64编码result`string`所扫码的内容scanType`keyof QRType`所扫码的类型errMsg`string`调用结果
### ScanType[​](scanCode.html#scantype)
扫码类型
参数说明barCode一维码qrCode二维码datamatrixData Matrix 码pdf417PDF417 条码
### QRType[​](scanCode.html#qrtype)
所扫码的类型
参数说明QR_CODE二维码AZTEC一维码CODABAR一维码CODE_39一维码CODE_93一维码CODE_128一维码DATA_MATRIX二维码EAN_8一维码EAN_13一维码ITF一维码MAXICODE一维码PDF_417二维码RSS_14一维码RSS_EXPANDED一维码UPC_A一维码UPC_E一维码UPC_EAN_EXTENSION一维码WX_CODE二维码CODE_25一维码
## 示例代码[​](scanCode.html#示例代码)
```tsx
// 允许从相机和相册扫码
Taro.scanCode({
 success: (res) => {
 console.log(res)
 }
})
// 只允许从相机扫码
Taro.scanCode({
 onlyFromCamera: true,
 success: (res) => {
 console.log(res)
 }
})
```

- 
- 

- 
- 
- 
- 

-
