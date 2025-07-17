# 监听蓝牙适配器状态变化事件
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html)
## 类型[​](onBluetoothAdapterStateChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onBluetoothAdapterStateChange.html#参数)
参数类型说明callback`Callback`蓝牙适配器状态变化事件的回调函数
### Callback[​](onBluetoothAdapterStateChange.html#callback)
蓝牙适配器状态变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBluetoothAdapterStateChange.html#callbackresult)
参数类型说明available`boolean`蓝牙适配器是否可用discovering`boolean`蓝牙适配器是否处于搜索状态
## 示例代码[​](onBluetoothAdapterStateChange.html#示例代码)
```tsx
Taro.onBluetoothAdapterStateChange(function (res) {
 console.log('adapterState changed, now is', res)
})
```

- 
- 

- 
- 

-
