# 针对在小程序中调用其他小程序的场景，预下载其他小程序的包内容。 Web 态说明：Web 态不支持预下载的能力。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-downloadPackage/)
## 类型[​](downloadPackage.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](downloadPackage.html#参数)
参数类型option`Option`
### Option[​](downloadPackage.html#option)
参数类型必填说明appKey`string`是预下载的小程序的 appKeypageUrl`string`否预下载的小程序的 pageUrl ，默认值为小程序的首页页面success`(res: TaroGeneral.CallbackResult) => any`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => any`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
- 
- 

-
