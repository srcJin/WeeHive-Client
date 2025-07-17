# 从本地缓存中同步批量获取指定 key 的内容。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)
## 类型[​](batchGetStorageSync.html#类型)
```tsx
<T = any>(keyList: string[]) => T[]
```

## 参数[​](batchGetStorageSync.html#参数)
参数类型说明keyList`T`本地缓存中指定的 key 数组
## 示例代码[​](batchGetStorageSync.html#示例代码)
```tsx
try {
 var valueList = Taro.batchGetStorageSync(['key'])
 if (valueList) {
 // Do something with return value
 }
} catch (e) {
 // Do something when catch error
}
```

- 
- 
-
