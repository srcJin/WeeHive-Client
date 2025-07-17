# 监听用户录屏事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onScreenRecordingStateChanged.html)
## 类型[​](onScreenRecordingStateChanged.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onScreenRecordingStateChanged.html#参数)
参数类型说明callback`Callback`用户录屏事件的监听函数
### ScreenRecordingState[​](onScreenRecordingStateChanged.html#screenrecordingstate)
参数说明start开始录屏stop结束录屏
### Callback[​](onScreenRecordingStateChanged.html#callback)
用户录屏事件的监听函数
```tsx
(state: keyof ScreenRecordingState) => void
```
参数类型说明state`keyof ScreenRecordingState`录屏状态
## 示例代码[​](onScreenRecordingStateChanged.html#示例代码)
```tsx
// 监听用户录屏事件
const handler = function (res) {
 console.log(res.state)
}
Taro.onScreenRecordingStateChanged(handler)
```

- 
- 

- 
- 

-
