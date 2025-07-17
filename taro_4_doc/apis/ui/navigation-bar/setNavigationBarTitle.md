# 动态设置当前页面的标题
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html)
## 类型[​](setNavigationBarTitle.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setNavigationBarTitle.html#参数)
参数类型option`Option`
### Option[​](setNavigationBarTitle.html#option)
参数类型必填说明title`string`是页面标题complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setNavigationBarTitle.html#示例代码)
```tsx
Taro.setNavigationBarTitle({
 title: '当前页面'
})
```

- 
- 

- 

-
