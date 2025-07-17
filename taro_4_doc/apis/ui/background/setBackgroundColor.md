# 动态设置窗口的背景色
支持情况：!!!!
> React Native: 仅 Android

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html)
## 类型[​](setBackgroundColor.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setBackgroundColor.html#参数)
参数类型option`Option`
### Option[​](setBackgroundColor.html#option)
参数类型必填说明backgroundColor`string`否窗口的背景色，必须为十六进制颜色值backgroundColorBottom`string`否底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持backgroundColorTop`string`否顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setBackgroundColor.html#示例代码)
```tsx
Taro.setBackgroundColor({
 backgroundColor: '#ffffff', // 窗口的背景色为白色
})
Taro.setBackgroundColor({
 backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
 backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
})
```

- 
- 

- 

-
