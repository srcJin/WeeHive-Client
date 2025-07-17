# 获取已连接中的 Wi-Fi 信息。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html)
## 类型[​](getConnectedWifi.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.WifiError>
```

## 参数[​](getConnectedWifi.html#参数)
参数类型option`Option`
### Option[​](getConnectedWifi.html#option)
参数类型默认值必填说明partialInfo`boolean``false`否是否需要返回部分 Wi-Fi 信息complete`(res: TaroGeneral.WifiError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.WifiError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getConnectedWifi.html#successcallbackresult)
参数类型说明wifi`WifiInfo`Wi-Fi 信息errMsg`string`调用结果
- 
- 

- 
-
