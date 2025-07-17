# 获取设备电量。同步 API Taro.getBatteryInfoSync 在 iOS 上不可用。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html)
## 类型[​](getBatteryInfo.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBatteryInfo.html#参数)
参数类型option`Option`
### Option[​](getBatteryInfo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBatteryInfo.html#successcallbackresult)
参数类型说明isCharging`boolean`是否正在充电中level`number`设备电量，范围 1 - 100errMsg`string`调用结果
- 
- 

- 
-
