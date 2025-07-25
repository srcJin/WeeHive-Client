# 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 Taro.stopCompass 停止监听。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html)
## 类型[​](onCompassChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onCompassChange.html#参数)
参数类型说明callback`Callback`罗盘数据变化事件的回调函数
### Callback[​](onCompassChange.html#callback)
罗盘数据变化事件的回调函数
```tsx
(result: OnCompassChangeCallbackResult) => void
```
参数类型result`OnCompassChangeCallbackResult`
### OnCompassChangeCallbackResult[​](onCompassChange.html#oncompasschangecallbackresult)
参数类型说明accuracystring or number精度

由于平台差异，accuracy 在 iOS/Android 的值不同。

- iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
- Android：accuracy 是一个 string 类型的枚举值。direction`number`面对的方向度数
### accuracy[​](onCompassChange.html#accuracy)
参数说明high高精度medium中等精度low低精度no-contact不可信，传感器失去连接unreliable不可信，原因未知unknow ${value}未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值
## 示例代码[​](onCompassChange.html#示例代码)
```tsx
Taro.onCompassChange(function (res) {
 console.log(res.direction)
})
```

- 
- 

- 
- 
- 

-
