# 请求获取 Wi-Fi 列表。在 `onGetWifiList` 注册的回调中返回 `wifiList` 数据。 **Android 调用前需要 [用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.userLocation。**
iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。 iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html)
## 类型[​](getWifiList.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.WifiError>
```

## 参数[​](getWifiList.html#参数)
参数类型option`Option`
### Option[​](getWifiList.html#option)
参数类型必填说明complete`(res: TaroGeneral.WifiError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.WifiError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.WifiError) => void`否接口调用成功的回调函数
- 
- 

-
