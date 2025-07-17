# 拉取 backgroundFetch 客户端缓存数据
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/background-fetch/wx.getBackgroundFetchData.html)
## 类型[​](getBackgroundFetchData.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getBackgroundFetchData.html#参数)
参数类型option`Option`
### Option[​](getBackgroundFetchData.html#option)
参数类型必填说明fetchType`string`是缓存数据类别
weapp: 取值为 periodic
qq: 取值为 periodic
alipay: 取值为 pre: 数据预拉取; jsapiPre: API 预调用（目前仅支持地理位置预拉取）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getBackgroundFetchData.html#successcallbackresult)
参数类型必填说明fetchedDatastring or Object是缓存数据
alipay: ObjecttimeStamp`number`是客户端拿到缓存数据的时间戳 ms。(iOS 时间戳存在异常，8.0.27 修复)path`string`是小程序页面路径query`string`是传给页面的 query 参数scene`number`是进入小程序的场景值fetchType`string`否缓存数据类型，与入参 fetchType 一致
API 支持度: alipaytimestamp`number`否缓存数据的时间戳。单位：ms。
API 支持度: alipay
- 
- 

- 
-
