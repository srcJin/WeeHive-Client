# 开始监听陀螺仪数据。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html)
## 类型[​](startGyroscope.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](startGyroscope.html#参数)
参数类型option`Option`
### Option[​](startGyroscope.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数interval`keyof Interval`否监听陀螺仪数据回调函数的执行频率success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Interval[​](startGyroscope.html#interval)
监听陀螺仪数据回调函数的执行频率
参数说明game适用于更新游戏的回调频率，在 20ms/次 左右ui适用于更新 UI 的回调频率，在 60ms/次 左右normal普通的回调频率，在 200ms/次 左右
- 
- 

- 
-
