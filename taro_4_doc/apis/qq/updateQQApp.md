# 更新 QQ 版本
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_updateQQ.html#qq-updateqqapp)
## 类型[​](updateQQApp.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](updateQQApp.html#参数)
参数类型option`Option`
### Option[​](updateQQApp.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](updateQQApp.html#示例代码)
```tsx
Taro.updateQQApp({
 success: function(res) {
 console.log('updateQQApp success',res)
 },
 fail: function(err) {
 console.log('updateQQApp fail',err)
 },
 complete: function(res) {
 console.log('updateQQApp info',res)
 }
})
```

- 
- 

- 

-
