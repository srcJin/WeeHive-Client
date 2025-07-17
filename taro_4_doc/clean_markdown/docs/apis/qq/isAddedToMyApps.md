# 查询用户是否已经将本小程序添加到下拉页面中“我的小程序”当中，手Q8.9.13及以上版本支持，建议使用qq.applyAddToMyApps之前先调用qq.isAddedToMyApps来作前置判断
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_addToMyApps.html#qq-isaddedtomyapps)
## 类型[​](isAddedToMyApps.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](isAddedToMyApps.html#参数)
参数类型option`Option`
### Option[​](isAddedToMyApps.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](isAddedToMyApps.html#successcallbackresult)
参数类型说明isAdded`boolean`true 代表用户已经添加，false 则还没添加
## 示例代码[​](isAddedToMyApps.html#示例代码)
```tsx
Taro.isAddedToMyApps({
 success(res) {
 if (res.isAdded) {
 // 用户已经添加
 } else {
 // 用户还未添加
 }
 }
})
```

- 
- 

- 
- 

-
