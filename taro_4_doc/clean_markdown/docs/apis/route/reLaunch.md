# 关闭所有页面，打开到应用内的某个页面
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html)
## 类型[​](reLaunch.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](reLaunch.html#参数)
参数类型option`Option`
### Option[​](reLaunch.html#option)
参数类型必填说明url`string`是需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](reLaunch.html#示例代码)
```tsx
Taro.reLaunch({
 url: 'test?id=1'
})
```

- 
- 

- 

-
