# Taro.removeStorage 的同步版本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html)
## 类型[​](removeStorageSync.html#类型)
```tsx
(key: string) => void
```

## 参数[​](removeStorageSync.html#参数)
参数类型说明key`string`本地缓存中指定的 key
## 示例代码[​](removeStorageSync.html#示例代码)
```tsx
try {
 Taro.removeStorageSync('key')
} catch (e) {
 // Do something when catch error
}
```

- 
- 
-
