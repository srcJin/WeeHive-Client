# 初始化 NFC 模块。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html)
## 类型[​](startHCE.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.NFCError>
```

## 参数[​](startHCE.html#参数)
参数类型option`Option`
### Option[​](startHCE.html#option)
参数类型必填说明aid_list`string[]`是需要注册到系统的 AID 列表complete`(res: TaroGeneral.NFCError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.NFCError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.NFCError) => void`否接口调用成功的回调函数
## 示例代码[​](startHCE.html#示例代码)
```tsx
Taro.startHCE({
 aid_list: ['F222222222']
 success: function (res) {
 console.log(res.errMsg)
 }
})
```

- 
- 

- 

-
