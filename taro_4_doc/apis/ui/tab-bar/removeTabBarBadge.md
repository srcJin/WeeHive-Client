# 移除 tabBar 某一项右上角的文本
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)
## 类型[​](removeTabBarBadge.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](removeTabBarBadge.html#参数)
参数类型option`Option`
### Option[​](removeTabBarBadge.html#option)
参数类型必填说明index`number`是tabBar 的哪一项，从左边算起complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
