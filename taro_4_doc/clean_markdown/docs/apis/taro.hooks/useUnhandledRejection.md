# 小程序有未处理的 Promise reject 时触发。也可以使用 Taro.onUnhandledRejection 绑定监听。
支持情况：!!!!!!
## 类型[​](useUnhandledRejection.html#类型)
```tsx
(callback: (error: { reason: Error; promise: Promise<Error>; }) => void) => void
```

## 参数[​](useUnhandledRejection.html#参数)
参数类型callback`(error: { reason: Error; promise: Promise<Error>; }) => void`
- 
-
