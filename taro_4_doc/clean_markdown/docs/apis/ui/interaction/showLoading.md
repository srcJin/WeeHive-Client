# 显示 loading 提示框。需主动调用 Taro.hideLoading 才能关闭提示框
**注意**

- Taro.showLoading 和 Taro.showToast 同时只能显示一个
- Taro.showLoading 应与 Taro.hideLoading 配对使用
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
## 类型[​](showLoading.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](showLoading.html#参数)
参数类型option`Option`
### Option[​](showLoading.html#option)
参数类型必填说明title`string`是提示的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数mask`boolean`否是否显示透明蒙层，防止触摸穿透success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](showLoading.html#示例代码)
```tsx
Taro.showLoading({
 title: '加载中',
})
setTimeout(function () {
 Taro.hideLoading()
}, 2000)
```

- 
- 

- 

-
