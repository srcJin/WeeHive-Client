# 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
支持情况：!!!!!!
> H5: 未针对 tabbar 页面做限制处理

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html)
## 类型[​](redirectTo.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](redirectTo.html#参数)
参数类型option`Option`
### Option[​](redirectTo.html#option)
参数类型必填说明url`string`是需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2'complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](redirectTo.html#示例代码)
```tsx
Taro.redirectTo({
 url: 'test?id=1'
})
```

- 
- 

- 

-
