# Wifi 信息
注意: 安卓 Taro.connectWifi / Taro.getConnectedWifi 若设置了 partialInfo:true ，或者调用了 Taro.onWifiConnectedWithPartialInfo 事件。将会返回只包含 SSID 属性的 WifiInfo 对象。 在某些情况下，可能 Wi-Fi 已经连接成功，但会因为获取不到完整的 WifiInfo 对象报错。具体错误信息为 errCode: 12010, errMsg: can't gain current wifi 。如果开发者不需要完整的 WifiInfo 对象，则可以通过采取上述策略解决报错问题。
## 方法[​](WifiInfo.html#方法)
参数类型必填说明SSID`string`是Wi-Fi 的 SSIDBSSID`string`是Wi-Fi 的 BSSIDsecure`boolean`是Wi-Fi 是否安全signalStrength`number`是Wi-Fi 信号强度, 安卓取值 0 ～ 100 ，iOS 取值 0 ～ 1 ，值越大强度越大frequency`number`否Wi-Fi 频段单位 MHz
-
