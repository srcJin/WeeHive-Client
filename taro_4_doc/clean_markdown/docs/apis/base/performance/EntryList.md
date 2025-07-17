# EntryList 对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.html)
## 方法[​](EntryList.html#方法)
### getEntries[​](EntryList.html#getentries)
该方法返回当前列表中的所有性能数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntries.html)
```tsx
() => PerformanceEntry[]
```

### getEntriesByName[​](EntryList.html#getentriesbyname)
获取当前列表中所有名称为 [name] 且类型为 [entryType] 的性能数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByName.html)
```tsx
(name: string, entryType: string) => PerformanceEntry[]
```
参数类型name`string`entryType`string`
### getEntriesByType[​](EntryList.html#getentriesbytype)
获取当前列表中所有类型为 [entryType] 的性能数据
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/EntryList.getEntriesByType.html)
```tsx
(entryType: string) => PerformanceEntry[]
```
参数类型entryType`string`
## API 支持度[​](EntryList.html#api-支持度)
API微信小程序H5React NativeHarmonyEntryList✔️EntryList.getEntries✔️EntryList.getEntriesByName✔️EntryList.getEntriesByType✔️
- 

- 
- 
- 

-
