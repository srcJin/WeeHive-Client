# 跳转系统蓝牙设置页
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.openSystemBluetoothSetting.html)
## 类型[​](openSystemBluetoothSetting.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openSystemBluetoothSetting.html#参数)
参数类型option`Option`
### Option[​](openSystemBluetoothSetting.html#option)
参数类型必填说明success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](openSystemBluetoothSetting.html#示例代码)
```tsx
Taro.openSystemBluetoothSetting({
 success (res) {
 console.log(res)
 }
})
```

- 
- 

- 

-
