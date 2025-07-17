# Taro.getStorage 的同步版本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html)
## 类型[​](getStorageSync.html#类型)
```tsx
<T = any>(key: string) => T
```

## 参数[​](getStorageSync.html#参数)
参数类型说明key`T`本地缓存中指定的 key
## 示例代码[​](getStorageSync.html#示例代码)
```tsx
try {
 var value = Taro.getStorageSync('key')
 if (value) {
 // Do something with return value
 }
} catch (e) {
 // Do something when catch error
}
```

- 
- 
-
