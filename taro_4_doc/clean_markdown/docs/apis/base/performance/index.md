# Performance 对象，用于获取性能数据及创建性能监听器
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.html)
## 方法[​](index.html#方法)
### createObserver[​](index.html#createobserver)
创建全局性能事件监听器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.createObserver.html)
```tsx
(callback: TaroGeneral.TFunc) => PerformanceObserver
```
参数类型callback`TaroGeneral.TFunc`
### getEntries[​](index.html#getentries)
该方法返回当前缓冲区中的所有性能数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntries.html)
```tsx
() => PerformanceEntry[]
```

### getEntriesByName[​](index.html#getentriesbyname)
获取当前缓冲区中所有名称为 [name] 且类型为 [entryType] 的性能数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByName.html)
```tsx
(name: string, entryType: string) => PerformanceEntry[]
```
参数类型name`string`entryType`string`
### getEntriesByType[​](index.html#getentriesbytype)
获取当前缓冲区中所有类型为 [entryType] 的性能数据
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.getEntriesByType.html)
```tsx
(entryType: string) => PerformanceEntry[]
```
参数类型entryType`string`
### setBufferSize[​](index.html#setbuffersize)
设置缓冲区大小，默认缓冲 30 条性能数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/Performance.setBufferSize.html)
```tsx
(size: number) => void
```
参数类型size`number`
## API 支持度[​](index.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyPerformance✔️✔️Performance.createObserver✔️Performance.getEntries✔️✔️Performance.getEntriesByName✔️✔️Performance.getEntriesByType✔️✔️Performance.setBufferSize✔️
- 

- 
- 
- 
- 
- 

-
