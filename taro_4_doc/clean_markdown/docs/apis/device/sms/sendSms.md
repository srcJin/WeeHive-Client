# 拉起手机发送短信界面
支持情况：!!!!!
> [参考文档]
> (declare module '../../index')

## 类型[​](sendSms.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResul>
```

## 参数[​](sendSms.html#参数)
参数类型option`Option`
### Option[​](sendSms.html#option)
参数类型必填说明phoneNumber`string`否预填到发送短信面板的手机号content`string`否预填到发送短信面板的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
