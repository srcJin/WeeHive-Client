# 拨打电话
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html)
## 类型[​](makePhoneCall.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](makePhoneCall.html#参数)
参数类型option`Option`
### Option[​](makePhoneCall.html#option)
参数类型必填说明phoneNumber`string`是需要拨打的电话号码complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](makePhoneCall.html#示例代码)
```tsx
Taro.makePhoneCall({
 phoneNumber: '1340000' //仅为示例，并非真实的电话号码
})
```

- 
- 

- 

-
