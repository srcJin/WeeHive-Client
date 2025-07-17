# 初始化蓝牙模块
**注意**

- 其他蓝牙相关 API 必须在 Taro.openBluetoothAdapter 调用之后使用。否则 API 会返回错误（errCode=10000）。
- 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 Taro.openBluetoothAdapter 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
## 类型[​](openBluetoothAdapter.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openBluetoothAdapter.html#参数)
参数类型option`Option`
### Option[​](openBluetoothAdapter.html#option)
参数类型必填说明mode`keyof Mode`否蓝牙模式，可作为主/从设备，仅 iOS 需要。complete`(res: TaroGeneral.BluetoothError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.BluetoothError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.BluetoothError) => void`否接口调用成功的回调函数
### Mode[​](openBluetoothAdapter.html#mode)
参数说明central主机模式peripheral从机（外围设备）模式
### state[​](openBluetoothAdapter.html#state)
object.fail 回调函数返回的 state 参数（仅 iOS）
参数说明0未知1重置中2不支持3未授权4未开启
## 示例代码[​](openBluetoothAdapter.html#示例代码)
```tsx
Taro.openBluetoothAdapter({
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

-
