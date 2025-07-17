# 查询当前用户授权的音视频通话设备（组）信息
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/device-voip/wx.getDeviceVoIPList.html)
## 类型[​](getDeviceVoIPList.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getDeviceVoIPList.html#参数)
参数类型option`Option`
### Option[​](getDeviceVoIPList.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getDeviceVoIPList.html#successcallbackresult)
参数类型list`DeviceVoIP[]`
### DeviceVoIP[​](getDeviceVoIPList.html#devicevoip)
参数类型说明sn`string`设备唯一序列号。（仅单台设备时）model_id`string`设备型号 id。通过微信公众平台注册设备获得。（仅单台设备时）group_id`string`设备组的唯一标识 id（仅设备组时）status`number`设备（组）授权状态。0：未授权；1：已授权
## 示例代码[​](getDeviceVoIPList.html#示例代码)
```tsx
Taro.getDeviceVoIPList({
 success(res) {
 console.log(res)
 },
 fail(res) {
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
