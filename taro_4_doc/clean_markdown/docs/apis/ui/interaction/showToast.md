# 显示消息提示框
**注意**

- Taro.showLoading 和 Taro.showToast 同时只能显示一个
- Taro.showToast 应与 Taro.hideToast 配对使用
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
## 类型[​](showToast.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](showToast.html#参数)
参数类型option`Option`
### Option[​](showToast.html#option)
参数类型必填说明title`string`是提示的内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）duration`number`否提示的延迟时间fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数icon"success" or "error" or "loading" or "none"否图标

可选值：
- 'success': 显示成功图标，此时 title 文本最多显示 7 个汉字长度;
- 'error': 显示失败图标，此时 title 文本最多显示 7 个汉字长度;
- 'loading': 显示加载图标，此时 title 文本最多显示 7 个汉字长度;
- 'none': 不显示图标，此时 title 文本最多可显示两行image`string`否自定义图标的本地路径，image 的优先级高于 iconmask`boolean`否是否显示透明蒙层，防止触摸穿透success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](showToast.html#示例代码)
```tsx
Taro.showToast({
 title: '成功',
 icon: 'success',
 duration: 2000
})
```

- 
- 

- 

-
