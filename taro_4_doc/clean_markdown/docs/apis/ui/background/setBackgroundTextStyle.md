# 动态设置下拉背景字体、loading 图的样式
支持情况：!!!!
> React Native: 仅 iOS

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html)
## 类型[​](setBackgroundTextStyle.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setBackgroundTextStyle.html#参数)
参数类型option`Option`
### Option[​](setBackgroundTextStyle.html#option)
参数类型必填说明textStyle"dark" or "light"是下拉背景字体、loading 图的样式。

可选值：
- 'dark': dark 样式;
- 'light': light 样式;complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setBackgroundTextStyle.html#示例代码)
```tsx
Taro.setBackgroundTextStyle({
 textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
})
```

- 
- 

- 

-
