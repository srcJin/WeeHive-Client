# 获取用户过去三十天微信运动步数。需要先调用 Taro.login 接口。步数信息会在用户主动进入小程序时更新。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
## 类型[​](getWeRunData.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getWeRunData.html#参数)
参数类型option`Option`
### Option[​](getWeRunData.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getWeRunData.html#successcallbackresult)
参数类型必填说明cloudID`string`否敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)encryptedData`string`是包括敏感数据在内的完整用户信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)。解密后得到的数据结构见后文iv`string`是加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)errMsg`string`是调用结果
## 示例代码[​](getWeRunData.html#示例代码)
```tsx
Taro.getWeRunData({
 success: function (res) {
 // 拿 encryptedData 到开发者后台解密开放数据
 const encryptedData = res.encryptedData
 // 或拿 cloudID 通过云调用直接获取开放数据
 const cloudID = res.cloudID
 }
})
```

**开放数据 JSON 结构** 敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。 获取得到的开放数据为以下 json 结构：
```json
{
 "stepInfoList": [
 {
 "timestamp": 1445866601,
 "step": 100
 },
 {
 "timestamp": 1445876601,
 "step": 120
 }
 ]
}
```

stepInfoList 中，每一项结构如下：
属性类型说明timestampnumber时间戳，表示数据对应的时间stepnumber微信运动步数
- 
- 

- 
- 

-
