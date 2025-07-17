# 获取小程序用户关注状态。 Web 态说明：Web 态小程序暂不支持关注小程序。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-getFavorStatus/)
## 类型[​](getFavorStatus.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getFavorStatus.html#参数)
参数类型option`Option`
### Option[​](getFavorStatus.html#option)
参数类型必填说明success`(res: SuccessCallbackResult) => any`否接口调用成功的回调函数fail`(err: any) => any`否接口调用失败的回调函数complete`(res: any) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](getFavorStatus.html#successcallbackresult)
参数类型说明isFavor`string`用户关注关注状态，1表示已关注，0表示未关注
- 
- 

- 
-
