# 连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html)
## 类型[​](connectWifi.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.WifiError>
```

## 参数[​](connectWifi.html#参数)
参数类型option`Option`
### Option[​](connectWifi.html#option)
参数类型默认值必填说明SSID`string`是Wi-Fi 设备 SSIDpassword`string`是Wi-Fi 设备密码BSSID`string`否Wi-Fi 设备 BSSIDmaunal`boolean``false`否跳转到系统设置页进行连接partialInfo`boolean``false`否是否需要返回部分 Wi-Fi 信息，仅安卓生效complete`(res: TaroGeneral.WifiError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.WifiError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.WifiError) => void`否接口调用成功的回调函数
## 示例代码[​](connectWifi.html#示例代码)
```tsx
Taro.connectWifi({
 SSID: '',
 BSSID: '',
 success: function (res) {
 console.log(res.errMsg)
 }
})
```

- 
- 

- 

-
