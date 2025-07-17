# 针对在小程序中调用其他小程序的场景，预下载其他小程序的包内容。 Web 态说明：Web 态不支持预下载的能力。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-downloadPackages/)
## 类型[​](downloadPackages.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](downloadPackages.html#参数)
参数类型option`Option`
### Option[​](downloadPackages.html#option)
参数类型必填说明pageList`IPageItem[]`是预下载的小程序的列表。success`(res: SuccessCallbackResult) => any`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => any`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
### IPageItem[​](downloadPackages.html#ipageitem)
参数类型说明appKey`string`预下载的小程序的 appKeypages`string[]`页面路径
### SuccessCallbackResult[​](downloadPackages.html#successcallbackresult)
参数类型说明__index`__index`小程序包预下载结果回调
### IAppKeyResult[​](downloadPackages.html#iappkeyresult)
参数类型说明pageUrl`string`页面路径status`string`预下载能力调用结果。值为 "0" 时是成功，非 "0" 时是失败message`string`预下载结果信息
- 
- 

- 
- 
- 
-
