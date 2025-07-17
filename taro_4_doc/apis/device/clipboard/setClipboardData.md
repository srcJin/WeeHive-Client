# 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
支持情况：!!!!!!!!!
> H5: 部分实现

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html)
## 类型[​](setClipboardData.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](setClipboardData.html#参数)
参数类型option`Option`
### Promised[​](setClipboardData.html#promised)
参数类型说明errMsg`string`调用信息data`string`剪贴板的内容
### Option[​](setClipboardData.html#option)
参数类型必填说明data`string`是剪贴板的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setClipboardData.html#示例代码)
```tsx
Taro.setClipboardData({
 data: 'data',
 success: function (res) {
 Taro.getClipboardData({
 success: function (res) {
 console.log(res.data) // data
 }
 })
 }
})
```

- 
- 

- 
- 

-
