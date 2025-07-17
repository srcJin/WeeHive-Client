# 获取 Webview 小程序的 UserAgent 基础库 2.26.3 开始支持
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getRendererUserAgent.html)
## 类型[​](getRendererUserAgent.html#类型)
```tsx
(option?: Option) => Promise<Result>
```

## 参数[​](getRendererUserAgent.html#参数)
参数类型option`Option`
### Option[​](getRendererUserAgent.html#option)
参数类型必填说明success`(res: Result) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### Result[​](getRendererUserAgent.html#result)
参数类型userAgent`string`
- 
- 

- 
-
