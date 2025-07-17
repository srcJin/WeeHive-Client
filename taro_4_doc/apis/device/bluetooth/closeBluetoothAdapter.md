# 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 Taro.openBluetoothAdapter 成对调用。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
## 类型[​](closeBluetoothAdapter.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](closeBluetoothAdapter.html#参数)
参数类型option`Option`
### Option[​](closeBluetoothAdapter.html#option)
参数类型必填说明complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
## 示例代码[​](closeBluetoothAdapter.html#示例代码)
```tsx
Taro.closeBluetoothAdapter({
 success: function (res) {
 console.log(res)
 }
})
```

- 
- 

- 

-
