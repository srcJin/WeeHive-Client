# 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 `Taro.stopAccelerometer` 停止监听。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html)
## 类型[​](onAccelerometerChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onAccelerometerChange.html#参数)
参数类型callback`Callback`
### Callback[​](onAccelerometerChange.html#callback)
```tsx
(res: Result) => void
```
参数类型res`Result`
### Result[​](onAccelerometerChange.html#result)
参数类型说明x`number`X 轴y`number`Y 轴z`number`Z 轴
## 示例代码[​](onAccelerometerChange.html#示例代码)
```tsx
Taro.onAccelerometerChange(res => {
 console.log(res.x)
 console.log(res.y)
 console.log(res.z)
})
```

- 
- 

- 
- 

-
