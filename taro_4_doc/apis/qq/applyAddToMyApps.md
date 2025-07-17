# 申请用户将本小程序添加到下拉页面中“我的小程序”当中，手Q8.9.13及以上版本支持
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addToMyApps.html#qq-applyaddtomyapps)
## 类型[​](applyAddToMyApps.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](applyAddToMyApps.html#参数)
参数类型option`Option`
### Option[​](applyAddToMyApps.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](applyAddToMyApps.html#successcallbackresult)
参数类型说明confirm`boolean`true 代表用户选择了同意cancel`boolean`true 代表用户选择了不同意
## 示例代码[​](applyAddToMyApps.html#示例代码)
```tsx
Taro.applyAddToMyApps({
 success(res) {
 if (res.confirm) {
 // 用户同意添加
 }
 if (res.cancel) {
 // 用户不同意添加
 }
 // 原则上，confirm和cancel是互斥的
 }
})
```

- 
- 

- 
- 

-
