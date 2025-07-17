# 动态设置 tabBar 某一项的内容，`2.7.0` 起图片支持临时文件和网络文件。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
## 类型[​](setTabBarItem.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setTabBarItem.html#参数)
参数类型option`Option`
### Option[​](setTabBarItem.html#option)
参数类型必填说明index`number`是tabBar 的哪一项，从左边算起complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数iconPath`string`否图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效selectedIconPath`string`否选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数text`string`否tab 上的按钮文字
## 示例代码[​](setTabBarItem.html#示例代码)
```tsx
Taro.setTabBarItem({
 index: 0,
 text: 'text',
 iconPath: '/path/to/iconPath',
 selectedIconPath: '/path/to/selectedIconPath'
})
```

- 
- 

- 

-
