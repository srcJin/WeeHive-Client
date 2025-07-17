# Taro.setStorage 的同步版本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
## 类型[​](setStorageSync.html#类型)
```tsx
(key: string, data: any) => void
```

## 参数[​](setStorageSync.html#参数)
参数类型说明key`string`本地缓存中指定的 keydata`any`需要存储的内容。只支持原生类型、Date、及能够通过`JSON.stringify`序列化的对象。
## 示例代码[​](setStorageSync.html#示例代码)
### 示例 1[​](setStorageSync.html#示例-1)
```tsx
Taro.setStorage({
 key:"key",
 data:"value"
})
```

### 示例 2[​](setStorageSync.html#示例-2)
```tsx
try {
 Taro.setStorageSync('key', 'value')
} catch (e) { }
```

- 
- 
- 

- 
-
