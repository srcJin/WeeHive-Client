# 隐藏当前页面的转发按钮
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html)
## 类型[​](hideShareMenu.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](hideShareMenu.html#参数)
参数类型option`Option`
### Option[​](hideShareMenu.html#option)
参数类型必填说明menus`string[]`否本接口为 Beta 版本，暂只在 Android 平台支持。需要隐藏的转发按钮名称列表，默认['shareAppMessage', 'shareTimeline']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](hideShareMenu.html#示例代码)
```tsx
Taro.hideShareMenu()
```

- 
- 

- 

-
