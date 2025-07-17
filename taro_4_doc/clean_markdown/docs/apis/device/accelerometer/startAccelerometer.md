# 开始监听加速度数据。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html)
## 类型[​](startAccelerometer.html#类型)
```tsx
(res?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](startAccelerometer.html#参数)
参数类型res`Option`
### Option[​](startAccelerometer.html#option)
参数类型默认值必填说明interval`keyof Interval``"normal"`否监听加速度数据回调函数的执行频率complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Interval[​](startAccelerometer.html#interval)
参数类型说明game`"game"`适用于更新游戏的回调频率，在 20ms/次 左右ui`"ui"`适用于更新 UI 的回调频率，在 60ms/次 左右normal`"normal"`普通的回调频率，在 200ms/次 左右
## 示例代码[​](startAccelerometer.html#示例代码)
```tsx
Taro.startAccelerometer({ interval: 'game' })
```

- 
- 

- 
- 

-
