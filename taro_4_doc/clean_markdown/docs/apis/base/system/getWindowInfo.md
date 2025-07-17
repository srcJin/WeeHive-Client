# 获取窗口信息
支持情况：!!!!!
> H5: 不支持 statusBarHeight、safeArea

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html)
## 类型[​](getWindowInfo.html#类型)
```tsx
() => Result
```

## 参数[​](getWindowInfo.html#参数)
### Result[​](getWindowInfo.html#result)
参数类型必填说明pixelRatio`number`是设备像素比screenWidth`number`是屏幕宽度，单位pxscreenHeight`number`是屏幕高度，单位pxwindowWidth`number`是可使用窗口宽度，单位pxwindowHeight`number`是可使用窗口高度，单位pxstatusBarHeight`number`否状态栏的高度，单位pxsafeArea`TaroGeneral.SafeAreaResult`否在竖屏正方向下的安全区域
## 示例代码[​](getWindowInfo.html#示例代码)
```tsx
const windowInfo = Taro.getWindowInfo()

console.log(windowInfo.pixelRatio)
console.log(windowInfo.screenWidth)
console.log(windowInfo.screenHeight)
console.log(windowInfo.windowWidth)
console.log(windowInfo.windowHeight)
console.log(windowInfo.statusBarHeight)
console.log(windowInfo.safeArea)
console.log(windowInfo.screenTop)
```

- 
- 

- 

-
