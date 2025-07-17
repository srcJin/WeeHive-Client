# QQ美化平台内测阶段，仅被邀请的商户可使用此接口。
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/personalize.html#qq-setcustomdress)
## 类型[​](setCustomDress.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](setCustomDress.html#参数)
参数类型option`Option`
### Option[​](setCustomDress.html#option)
参数类型必填说明action`string`是方法名，设置头像填"uploadAvatar"，其他方法后续开放path`string`是素材路径，必须为本地文件，路径为 wxfile:// 的形式complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setCustomDress.html#示例代码)
```tsx
Taro.setCustomDress({
 action: "uploadAvatar",
 path:"wxfile://images/1.png"
 success(res) {
 console.log("success"+res);
 },
 fail(res) {
 console.log("fail"+res);
 }
})
```

- 
- 

- 

-
