# 创建缓存管理器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/cachemanager/wx.createCacheManager.html)
## 类型[​](createCacheManager.html#类型)
```tsx
(option: Option) => CacheManager
```

## 参数[​](createCacheManager.html#参数)
参数类型option`Option`
### Mode[​](createCacheManager.html#mode)
参数说明weakNetwork弱网/离线使用缓存返回always总是使用缓存返回none不开启，后续可手动开启/停止使用缓存返回
### Extra[​](createCacheManager.html#extra)
参数类型必填说明apiList`string[]`否需要缓存的 wx api 接口，不传则表示支持缓存的接口全都做缓存处理。返回的如果是缓存数据，开发者可通过 fromCache 标记区分
### Option[​](createCacheManager.html#option)
参数类型必填说明origin`string`否全局 originmode`keyof Mode`否缓存模式maxAge`number`否全局缓存有效时间，单位为毫秒，默认为 7 天，最长不超过 30 天extra`Extra`否额外的缓存处理
- 
- 

- 
- 
-
