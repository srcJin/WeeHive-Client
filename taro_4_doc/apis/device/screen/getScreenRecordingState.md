# 查询用户是否在录屏
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenRecordingState.html)
## 类型[​](getScreenRecordingState.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getScreenRecordingState.html#参数)
参数类型option`Option`
### Option[​](getScreenRecordingState.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(option: SuccessCallbackResult) => void`否接口调用成功的回调函数
### ScreenRecordingState[​](getScreenRecordingState.html#screenrecordingstate)
参数说明on开启off关闭
### SuccessCallbackResult[​](getScreenRecordingState.html#successcallbackresult)
参数类型说明state`keyof ScreenRecordingState`录屏状态
## 示例代码[​](getScreenRecordingState.html#示例代码)
```tsx
Taro.getScreenRecordingState({
 success: function (res) {
 console.log(res.state)
 },
})
```

- 
- 

- 
- 
- 

-
