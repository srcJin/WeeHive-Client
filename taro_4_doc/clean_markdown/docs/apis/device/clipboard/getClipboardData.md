# 获取系统剪贴板内容
支持情况：!!!!!!!!!
> H5: 部分实现

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html)
## 类型[​](getClipboardData.html#类型)
```tsx
(res?: Option) => Promise<Promised>
```

## 参数[​](getClipboardData.html#参数)
参数类型res`Option`
### Promised[​](getClipboardData.html#promised)
参数类型说明errMsg`string`调用信息data`string`剪贴板的内容
### Option[​](getClipboardData.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackOption) => void`否接口调用成功的回调函数
### SuccessCallbackOption[​](getClipboardData.html#successcallbackoption)
参数类型说明data`string`剪贴板的内容
## 示例代码[​](getClipboardData.html#示例代码)
```tsx
Taro.getClipboardData({
 success: function (res){
 console.log(res.data)
 }
})
```

- 
- 

- 
- 
- 

-
