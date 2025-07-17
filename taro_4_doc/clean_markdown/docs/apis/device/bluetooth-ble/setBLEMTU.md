# 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU)

- 需在 Taro.createBLEConnection 调用成功后调用
- 仅安卓系统 5.1 以上版本有效，iOS 因系统限制不支持。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.setBLEMTU.html)
## 类型[​](setBLEMTU.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](setBLEMTU.html#参数)
参数类型option`Option`
### Promised[​](setBLEMTU.html#promised)
```tsx
FailCallbackResult | SuccessCallbackResult
```

### Option[​](setBLEMTU.html#option)
参数类型必填说明deviceId`string`是蓝牙设备 idmtu`number`是最大传输单元。设置范围为 (22,512) 区间内，单位 bytescomplete`(res: Promised) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: FailCallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### FailCallbackResult[​](setBLEMTU.html#failcallbackresult)
参数类型说明mtu`string`最终协商的 MTU 值。如果协商失败则无此参数。安卓客户端 8.0.9 开始支持。
### SuccessCallbackResult[​](setBLEMTU.html#successcallbackresult)
参数类型说明mtu`string`最终协商的 MTU 值，与传入参数一致。安卓客户端 8.0.9 开始支持。
- 
- 

- 
- 
- 
-
