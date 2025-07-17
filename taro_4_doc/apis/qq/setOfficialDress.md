# QQ美化平台内测阶段，仅被邀请的商户可使用此接口。
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/personalize.html#qq-setofficialdress)
## 类型[​](setOfficialDress.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](setOfficialDress.html#参数)
参数类型option`Option`
### Option[​](setOfficialDress.html#option)
参数类型必填说明action`string`是方法名，设置头像填"setAvatar"，其他方法后续开放uin`string`是openid，给自己设置头像填"self"item_id`string`否物品idbusi_info`string`否设置头像"setAvatar"此处不用填complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setOfficialDress.html#示例代码)
```tsx
Taro.setOfficialDress({
 action: "setAvatar",
 uin: "self",
 item_id: "2740",
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
