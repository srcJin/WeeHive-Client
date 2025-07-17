# 开始监听设备方向的变化。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html)
## 类型[​](startDeviceMotionListening.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](startDeviceMotionListening.html#参数)
参数类型option`Option`
### Option[​](startDeviceMotionListening.html#option)
参数类型默认值必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数interval`keyof Interval``"normal"`否监听设备方向的变化回调函数的执行频率success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Interval[​](startDeviceMotionListening.html#interval)
参数说明game适用于更新游戏的回调频率，在 20ms/次 左右ui适用于更新 UI 的回调频率，在 60ms/次 左右normal普通的回调频率，在 200ms/次 左右
- 
- 

- 
-
