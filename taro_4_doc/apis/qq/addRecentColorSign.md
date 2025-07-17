# 添加当前小程序页面到最近浏览彩签，需要授权基础库 1.20.0 开始支持。 提示：在手 Q 8.9.0 前的版本，当系统未授予手 Q 悬浮穿权限时，每次调用该接口都会弹出系统授权窗口。自手 Q 8.9.0 起交互调整如下:

- 系统没有授予手 Q 悬浮窗权限时，接口执行 fail 回调函数并附带 ”No floating window permission“的错误信息，开发者可针对此信息在业务代码里弹窗提示用户手动授予手 Q 悬浮窗权限。
- 安卓系统部分机型存在获取悬浮窗权限不准确情况。
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addColorSign.html#qq-addrecentcolorsign)
## 类型[​](addRecentColorSign.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](addRecentColorSign.html#参数)
参数类型option`Option`
### Option[​](addRecentColorSign.html#option)
参数类型必填说明query`string`否做为点击最近彩签打开的小程序页面的启动参数，如 a=1&b=2
默认值：当前页面的查询参数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](addRecentColorSign.html#示例代码)
```tsx
Taro.addRecentColorSign({
 query: 'a=1&b=2',
 success(res) {
 console.log('addRecentColorSign success: ', res)
 },
 fail(err) {
 console.log('addRecentColorSign fail: ', err)
 },
 complete(res) {
 console.log('addRecentColorSign complete: ', res)
 }
})
```

- 
- 

- 

-
