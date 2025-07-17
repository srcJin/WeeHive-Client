# 收到 backgroundFetch 数据时的回调
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.onBackgroundFetchData.html)
## 类型[​](onBackgroundFetchData.html#类型)
```tsx
(option?: Option | Callback) => void
```

## 参数[​](onBackgroundFetchData.html#参数)
参数类型optionOption or Callback
### Option[​](onBackgroundFetchData.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Callback[​](onBackgroundFetchData.html#callback)
```tsx
(result: CallbackResult) => void
```
参数类型result`CallbackResult`
### CallbackResult[​](onBackgroundFetchData.html#callbackresult)
参数类型说明fetchType`string`缓存数据类别，取值为 periodic 或 prefetchedData`string`缓存数据timeStamp`number`客户端拿到缓存数据的时间戳path`string`小程序页面路径query`string`传给页面的 query 参数scene`number`进入小程序的场景值
- 
- 

- 
- 
-
