# 获取网络类型。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html)
## 类型[​](getNetworkType.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getNetworkType.html#参数)
参数类型option`Option`
### Option[​](getNetworkType.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getNetworkType.html#successcallbackresult)
参数类型必填说明networkType`keyof NetworkType`是网络类型signalStrength`number`否信号强弱，单位 dbmhasSystemProxy`boolean`否设备是否使用了网络代理errMsg`string`是调用结果
### NetworkType[​](getNetworkType.html#networktype)
网络类型
参数说明wifiwifi 网络2g2g 网络3g3g 网络4g4g 网络5g5g 网络unknownAndroid 下不常见的网络类型none无网络
## 示例代码[​](getNetworkType.html#示例代码)
```tsx
Taro.getNetworkType({
 success: function (res) {
 // 返回网络类型, 有效值：
 // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
 var networkType = res.networkType
 }
})
```

- 
- 

- 
- 
- 

-
