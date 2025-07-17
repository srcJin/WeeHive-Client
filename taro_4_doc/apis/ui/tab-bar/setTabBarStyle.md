# 动态设置 tabBar 的整体样式
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)
## 类型[​](setTabBarStyle.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setTabBarStyle.html#参数)
参数类型option`Option`
### Option[​](setTabBarStyle.html#option)
参数类型必填说明backgroundColor`string`否tab 的背景色，HexColorborderStyle`string`否tabBar上边框的颜色， 仅支持 black/whitecolor`string`否tab 上的文字默认颜色，HexColorcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数selectedColor`string`否tab 上的文字选中时的颜色，HexColorsuccess`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setTabBarStyle.html#示例代码)
```tsx
Taro.setTabBarStyle({
 color: '#FF0000',
 selectedColor: '#00FF00',
 backgroundColor: '#0000FF',
 borderStyle: 'white'
})
```

- 
- 

- 

-
