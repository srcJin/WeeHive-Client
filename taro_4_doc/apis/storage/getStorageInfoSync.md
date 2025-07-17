# Taro.getStorageInfo 的同步版本
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html)
## 类型[​](getStorageInfoSync.html#类型)
```tsx
() => Option
```

## 参数[​](getStorageInfoSync.html#参数)
### Option[​](getStorageInfoSync.html#option)
参数类型必填说明currentSize`number`是当前占用的空间大小, 单位 KBkeys`string[]`是当前 storage 中所有的 keylimitSize`number`是限制的空间大小，单位 KBsuccess`boolean`否是否执行成功
API 支持度: alipay
## 示例代码[​](getStorageInfoSync.html#示例代码)
```tsx
try {
 const res = Taro.getStorageInfoSync()
 console.log(res.keys)
 console.log(res.currentSize)
 console.log(res.limitSize)
} catch (e) {
 // Do something when catch error
}
```

- 
- 

- 

-
