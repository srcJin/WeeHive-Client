# 获取蓝牙低功耗的最大传输单元。需在 [Taro.createBLEConnection](createBLEConnection.html) 调用成功后调用。
注意:

- 小程序中 MTU 为 ATT_MTU，包含 Op-Code 和 Attribute Handle 的长度，实际可以传输的数据长度为 ATT_MTU - 3
- iOS 系统中 MTU 为固定值；安卓系统中，MTU 会在系统协商成功之后发生改变，建议使用 [Taro.onBLEMTUChange](onBLEMTUChange.html) 监听。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEMTU.html)
## 类型[​](getBLEMTU.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBLEMTU.html#参数)
参数类型option`Option`
### Option[​](getBLEMTU.html#option)
参数类型默认值必填说明deviceId`string`是蓝牙设备 idwriteType`keyof WriteType``"write"`否写模式 （iOS 特有参数）complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBLEMTU.html#successcallbackresult)
参数类型说明mtu`number`最大传输单元
### WriteType[​](getBLEMTU.html#writetype)
写模式合法值
参数说明write有回复写writeNoResponse无回复写
## 示例代码[​](getBLEMTU.html#示例代码)
```tsx
Taro.getBLEMTU({
 deviceId: '',
 writeType: 'write',
 success (res) {
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
