# 获取设备内是否录入如指纹等生物信息的接口
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html)
## 类型[​](checkIsSoterEnrolledInDevice.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](checkIsSoterEnrolledInDevice.html#参数)
参数类型option`Option`
### Option[​](checkIsSoterEnrolledInDevice.html#option)
参数类型必填说明checkAuthMode`keyof RequestAuthModes`是认证方式complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### RequestAuthModes[​](checkIsSoterEnrolledInDevice.html#requestauthmodes)
参数说明fingerPrint指纹识别facial人脸识别speech声纹识别
API 支持度: 暂未支持
### SuccessCallbackResult[​](checkIsSoterEnrolledInDevice.html#successcallbackresult)
参数类型说明errMsg`string`错误信息isEnrolled`boolean`是否已录入信息
## 示例代码[​](checkIsSoterEnrolledInDevice.html#示例代码)
```tsx
Taro.checkIsSoterEnrolledInDevice({
 checkAuthMode: 'fingerPrint',
 success: function (res) {
 console.log(res.isEnrolled)
 }
})
```

- 
- 

- 
- 
- 

-
