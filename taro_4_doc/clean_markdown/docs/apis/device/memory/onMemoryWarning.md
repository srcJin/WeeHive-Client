# 监听内存不足告警事件。
当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html)
## 类型[​](onMemoryWarning.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onMemoryWarning.html#参数)
参数类型说明callback`Callback`内存不足告警事件的回调函数
### Callback[​](onMemoryWarning.html#callback)
内存不足告警事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onMemoryWarning.html#callbackresult)
参数类型说明level`keyof Level`内存告警等级，只有 Android 才有，对应系统宏定义
### Level[​](onMemoryWarning.html#level)
参数说明5TRIM_MEMORY_RUNNING_MODERATE10TRIM_MEMORY_RUNNING_LOW15TRIM_MEMORY_RUNNING_CRITICAL
## 示例代码[​](onMemoryWarning.html#示例代码)
```tsx
Taro.onMemoryWarning(function () {
 console.log('onMemoryWarningReceive')
})
```

- 
- 

- 
- 
- 

-
