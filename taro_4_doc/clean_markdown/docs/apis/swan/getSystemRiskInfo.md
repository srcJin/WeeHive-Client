# 获取用于得到风控信息的加密信息对象。更多小程序风控能力参见[风控服务](https://smartprogram.baidu.com/docs/develop/serverapi/open_risk_power/)。 Web 态说明：Web 态小程序暂不支持获取用于得到风控信息的加密信息对象。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-getSystemRiskInfo/)
## 类型[​](getSystemRiskInfo.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getSystemRiskInfo.html#参数)
参数类型option`Option`
### Option[​](getSystemRiskInfo.html#option)
参数类型必填说明success`(res: SuccessCallbackResult) => any`否接口调用成功的回调函数fail`(err: any) => any`否接口调用失败的回调函数complete`(res: any) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](getSystemRiskInfo.html#successcallbackresult)
参数类型说明content`Object`用于获取风控信息的加密信息对象。
要获取风控信息，需要和[风控检测](https://smartprogram.baidu.com/docs/develop/serverapi/open_risk_power/#detectrisk/)接口联合使用，并作为风控检测接口的 xtoken 参数传入。
### IContent[​](getSystemRiskInfo.html#icontent)
参数类型key`string`value`string`
- 
- 

- 
- 
-
