# 创建并返回一个 MediaQueryObserver 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createMediaQueryObserver()` 来代替。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#Media%20Query)
## 类型[​](createMediaQueryObserver.html#类型)
```tsx
() => MediaQueryObserver
```

## 示例代码[​](createMediaQueryObserver.html#示例代码)
```tsx
let createMediaQueryObserver
if (process.env.TARO_ENV === 'weapp') {
 // 小程序没有组件实例，只能获取Page级组件实例
 createMediaQueryObserver = Taro.getCurrentInstance().page.createMediaQueryObserver
} else if (process.env.TARO_ENV === 'h5') {
 createMediaQueryObserver= Taro.createMediaQueryObserver
}
const mediaQueryObserver = createMediaQueryObserver()
```

- 
-
