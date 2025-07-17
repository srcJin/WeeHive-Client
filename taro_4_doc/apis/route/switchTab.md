# 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)
## 类型[​](switchTab.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](switchTab.html#参数)
参数类型option`Option`
### Option[​](switchTab.html#option)
参数类型必填说明url`string`是需要跳转的 tabBar 页面的路径（需在 app.json 的 [tabBar](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabbar) 字段定义的页面），路径后不能带参数。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](switchTab.html#示例代码)
```json
{
 "tabBar": {
 "list": [{
 "pagePath": "index",
 "text": "首页"
 },{
 "pagePath": "other",
 "text": "其他"
 }]
 }
}
tsx
Taro.switchTab({
 url: '/index'
})
```

- 
- 

- 

-
