# 获取所有已搜索到的 iBeacon 设备
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html)
## 类型[​](getBeacons.html#类型)
```tsx
(option?: Option) => Promise<CallbackResult>
```

## 参数[​](getBeacons.html#参数)
参数类型option`Option`
### Option[​](getBeacons.html#option)
参数类型必填说明complete`(res: TaroGeneral.IBeaconError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.IBeaconError) => void`否接口调用失败的回调函数success`(result: CallbackResult) => void`否接口调用成功的回调函数
### CallbackResult[​](getBeacons.html#callbackresult)
参数类型说明beacons`IBeaconInfo[]`iBeacon 设备列表errMsg`string`调用结果
- 
- 

- 
-
