# 开始录音。当主动调用`Taro.stopRecord`，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。 **注意：1.6.0 版本开始，本接口不再维护。建议使用能力更强的 [Taro.getRecorderManager](getRecorderManager.html) 接口** 需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.record
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html)
## 类型[​](startRecord.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](startRecord.html#参数)
参数类型option`Option`
### Option[​](startRecord.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](startRecord.html#successcallbackresult)
参数类型说明tempFilePath`string`录音文件的临时路径errMsg`string`调用结果
## 示例代码[​](startRecord.html#示例代码)
```tsx
Taro.startRecord({
 success: function (res) {
 const tempFilePath = res.tempFilePath
 }
})
setTimeout(function () {
 Taro.stopRecord() // 结束录音
}, 10000)
```

- 
- 

- 
- 

-
