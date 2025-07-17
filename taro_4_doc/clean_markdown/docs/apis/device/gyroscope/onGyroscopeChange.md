# 监听陀螺仪数据变化事件。频率根据 Taro.startGyroscope() 的 interval 参数。可以使用 Taro.stopGyroscope() 停止监听。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html)
## 类型[​](onGyroscopeChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onGyroscopeChange.html#参数)
参数类型说明callback`Callback`陀螺仪数据变化事件的回调函数
### Callback[​](onGyroscopeChange.html#callback)
陀螺仪数据变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onGyroscopeChange.html#callbackresult)
参数类型说明x`number`x 轴的角速度y`number`y 轴的角速度z`number`z 轴的角速度
- 
- 

- 
-
