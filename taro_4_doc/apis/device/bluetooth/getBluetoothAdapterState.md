# 获取本机蓝牙适配器状态。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
## 类型[​](getBluetoothAdapterState.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBluetoothAdapterState.html#参数)
参数类型option`Option`
### Option[​](getBluetoothAdapterState.html#option)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBluetoothAdapterState.html#successcallbackresult)
参数类型说明available`boolean`蓝牙适配器是否可用discovering`boolean`是否正在搜索设备errMsg`string`成功：ok，错误：详细信息
## 示例代码[​](getBluetoothAdapterState.html#示例代码)
```tsx
Taro.getBluetoothAdapterState({
 success: function (res) {
 console.log(res)
 }
})
```

- 
- 

- 
- 

-
