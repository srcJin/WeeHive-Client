# 获取小程序用户置顶状态。 Web 态说明：Web 态小程序暂不支持获取置顶状态，降级调起百度 App。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-getTopStatus/)
## 类型[​](getTopStatus.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](getTopStatus.html#参数)
参数类型option`Option`
### Option[​](getTopStatus.html#option)
参数类型必填说明success`(res: SuccessCallbackResult) => any`否接口调用成功的回调函数fail`(err: any) => any`否接口调用失败的回调函数complete`(res: any) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](getTopStatus.html#successcallbackresult)
参数类型说明isTop`boolean`置顶状态
- 
- 

- 
-
