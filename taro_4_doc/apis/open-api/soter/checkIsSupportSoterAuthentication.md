# 获取本机支持的 SOTER 生物认证方式
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html)
## 类型[​](checkIsSupportSoterAuthentication.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](checkIsSupportSoterAuthentication.html#参数)
参数类型option`Option`
### Option[​](checkIsSupportSoterAuthentication.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](checkIsSupportSoterAuthentication.html#successcallbackresult)
参数类型说明supportMode`(keyof requestAuthModes)[]`该设备支持的可被SOTER识别的生物识别方式errMsg`string`调用信息
### requestAuthModes[​](checkIsSupportSoterAuthentication.html#requestauthmodes)
参数说明fingerPrint指纹识别facial人脸识别speech声纹识别
API 支持度: 暂未支持
## 示例代码[​](checkIsSupportSoterAuthentication.html#示例代码)
```tsx
Taro.checkIsSupportSoterAuthentication({
 success: function (res) {
 // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
 // res.supportMode = ['fingerPrint'] 只支持指纹识别
 // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
 }
})
```

- 
- 

- 
- 
- 

-
