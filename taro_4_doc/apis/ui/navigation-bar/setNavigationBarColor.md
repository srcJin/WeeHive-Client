# 设置页面导航条颜色
支持情况：!!!!!!
> H5: 不支持 animation 参数

> React Native: 不支持 animation 参数

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html)
## 类型[​](setNavigationBarColor.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setNavigationBarColor.html#参数)
参数类型option`Option`
### Option[​](setNavigationBarColor.html#option)
参数类型必填说明backgroundColor`string`是背景颜色值，有效值为十六进制颜色frontColor`string`是前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000animation`AnimationOption`否动画效果complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AnimationOption[​](setNavigationBarColor.html#animationoption)
动画效果
参数类型必填说明duration`number`否动画变化时间，单位 mstimingFunc"linear" or "easeIn" or "easeOut" or "easeInOut"否动画变化方式

可选值：
- 'linear': 动画从头到尾的速度是相同的;
- 'easeIn': 动画以低速开始;
- 'easeOut': 动画以低速结束;
- 'easeInOut': 动画以低速开始和结束;
## 示例代码[​](setNavigationBarColor.html#示例代码)
```tsx
Taro.setNavigationBarColor({
 frontColor: '#ffffff',
 backgroundColor: '#ff0000',
 animation: {
 duration: 400,
 timingFunc: 'easeIn'
 }
})
```

- 
- 

- 
- 

-
