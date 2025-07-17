# 初始化 Wi-Fi 模块。
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html)
## 类型[​](startWifi.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.WifiError>
```

## 参数[​](startWifi.html#参数)
参数类型option`Option`
### Option[​](startWifi.html#option)
参数类型必填说明complete`(res: TaroGeneral.WifiError) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.WifiError) => void`否接口调用失败的回调函数success`(res: TaroGeneral.WifiError) => void`否接口调用成功的回调函数
## 示例代码[​](startWifi.html#示例代码)
```tsx
Taro.startWifi({
 success: function (res) {
 console.log(res.errMsg)
 }
})
```

- 
- 

- 

-
