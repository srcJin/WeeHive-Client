# 获取到小程序全局唯一的 App 实例。
支持情况：!!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getApp.html)
## 类型[​](getApp.html#类型)
```tsx
<T = TaroGeneral.IAnyObject>(opts?: Option) => Instance<T>
```

## 参数[​](getApp.html#参数)
参数类型opts`T`
### Option[​](getApp.html#option)
参数类型必填说明allowDefault`boolean`否在 `App` 未定义时返回默认实现。当App被调用时，默认实现中定义的属性会被覆盖合并到App中。一般用于独立分包
### Instance[​](getApp.html#instance)
```tsx
Option | T
```

- 
- 

- 
-
