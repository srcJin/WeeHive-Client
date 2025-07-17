# 获取局域网IP地址。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getLocalIPAddress.html)
## 类型[​](getLocalIPAddress.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getLocalIPAddress.html#参数)
参数类型option`Option`
### Option[​](getLocalIPAddress.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getLocalIPAddress.html#successcallbackresult)
参数类型必填说明localip`string`是本机局域网IP地址netmask`string`否，基础库 2.24.0 开始支持errMsg`string`是调用结果
## 示例代码[​](getLocalIPAddress.html#示例代码)
```tsx
Taro.getLocalIPAddress()
 .then(res => {
 const localip = res.localip
 })
```

- 
- 

- 
- 

-
