# 将数据批量存储在本地缓存中指定的 key 中。 会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。 单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorageSync.html)
## 类型[​](batchSetStorageSync.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](batchSetStorageSync.html#参数)
参数类型option`Option`
### Option[​](batchSetStorageSync.html#option)
参数类型说明kvList`kv[]`[{ key, value }]
### kv[​](batchSetStorageSync.html#kv)
参数类型说明key`string`key 本地缓存中指定的 keyvalue`any`data 需要存储的内容。只支持原生类型、Date、及能够通过JSON.stringify序列化的对象。
## 示例代码[​](batchSetStorageSync.html#示例代码)
```tsx
try {
 Taro.batchSetStorageSync([{key: 'key', value: 'value'}])
} catch (e) { }
```

- 
- 

- 
- 

-
