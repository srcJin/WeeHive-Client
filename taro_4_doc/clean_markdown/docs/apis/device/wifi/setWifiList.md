# 设置 `wifiList` 中 AP 的相关信息。在 `onGetWifiList` 回调后调用，**iOS特有接口**。
**注意**

- 该接口只能在 `onGetWifiList` 回调之后才能调用。
- 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
- 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html)
## 类型[​](setWifiList.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.WifiError>
```

## 参数[​](setWifiList.html#参数)
参数类型option`Option`
### Option[​](setWifiList.html#option)
参数类型必填说明wifiList`WifiData[]`是提供预设的 Wi-Fi 信息列表complete`(res: TaroGeneral.WifiError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.WifiError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.WifiError) => void`否接口调用成功的回调函数
### WifiData[​](setWifiList.html#wifidata)
提供预设的 Wi-Fi 信息列表
参数类型必填说明BSSID`string`否Wi-Fi 的 BSSIDSSID`string`否Wi-Fi 的 SSIDpassword`string`否Wi-Fi 设备密码
## 示例代码[​](setWifiList.html#示例代码)
```tsx
Taro.onGetWifiList(function (res) {
 if (res.wifiList.length) {
 Taro.setWifiList({
 wifiList: [{
 SSID: res.wifiList[0].SSID,
 BSSID: res.wifiList[0].BSSID,
 password: '123456'
 }]
 })
 } else {
 Taro.setWifiList({
 wifiList: []
 })
 }
})
Taro.getWifiList()
```

- 
- 

- 
- 

-
