# 查询隐私授权情况。隐私合规开发指南详情可见《小程序隐私协议开发指南》
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/privacy/wx.getPrivacySetting.html)
## 类型[​](getPrivacySetting.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](getPrivacySetting.html#参数)
参数类型option`Option`
### Option[​](getPrivacySetting.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getPrivacySetting.html#successcallbackresult)
参数类型说明needAuthorization`boolean`是否需要用户授权隐私协议（如果开发者没有在[mp后台-设置-服务内容声明-用户隐私保护指引]中声明隐私收集类型则会返回false；如果开发者声明了隐私收集，且用户之前同意过隐私协议则会返回false；如果开发者声明了隐私收集，且用户还没同意过则返回true；如果用户之前同意过、但后来小程序又新增了隐私收集类型也会返回true）privacyContractName`string`隐私授权协议的名称
- 
- 

- 
-
