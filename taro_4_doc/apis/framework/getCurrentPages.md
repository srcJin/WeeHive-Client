# 获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。 **注意：**

- **不要尝试修改页面栈，会导致路由以及页面状态错误。**
- 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getCurrentPages.html)
## 类型[​](getCurrentPages.html#类型)
```tsx
() => Page[]
```

## 示例代码[​](getCurrentPages.html#示例代码)
```tsx
Taro.getCurrentPages().length
```

- 
-
