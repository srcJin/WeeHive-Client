# 监听弱网状态变化事件
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkWeakChange.html)
## 类型[​](onNetworkWeakChange.html#类型)
```tsx
(callback: Callback) => void
```

## 参数[​](onNetworkWeakChange.html#参数)
参数类型说明callback`Callback`弱网状态变化事件的回调函数
### Callback[​](onNetworkWeakChange.html#callback)
弱网状态变化事件的回调函数
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onNetworkWeakChange.html#callbackresult)
参数类型说明weakNet`boolean`当前是否处于弱网状态networkType`keyof NetworkType`当前网络类型
## 示例代码[​](onNetworkWeakChange.html#示例代码)
```tsx
Taro.onNetworkWeakChange(function (res) {
 console.log(res.weakNet)
 console.log(res.networkType)
})
// 取消监听
Taro.offNetworkWeakChange()
```

- 
- 

- 
- 

-
