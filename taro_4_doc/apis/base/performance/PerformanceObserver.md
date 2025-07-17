# PerformanceObserver 对象，用于监听性能相关事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.html)
## 方法[​](PerformanceObserver.html#方法)
参数类型说明supportedEntryTypes`PerformanceEntry[]`获取当前支持的所有性能指标类型
### disconnect[​](PerformanceObserver.html#disconnect)
停止监听
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.disconnect.html)
```tsx
() => void
```

### observe[​](PerformanceObserver.html#observe)
开始监听
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/PerformanceObserver.observe.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
## 参数[​](PerformanceObserver.html#参数)
### observe[​](PerformanceObserver.html#observe-1)
#### Option[​](PerformanceObserver.html#option)
参数类型说明type`keyof EntryType`指标类型。不能和 entryTypes 同时使用entryTypes`(keyof EntryType)[]`指标类型列表。不能和 type 同时使用。
#### EntryType[​](PerformanceObserver.html#entrytype)
参数说明navigation路由render渲染script脚本
## API 支持度[​](PerformanceObserver.html#api-支持度)
API微信小程序H5React NativeHarmonyPerformanceObserver✔️PerformanceObserver.disconnect✔️PerformanceObserver.observe✔️
- 

- 
- 

- 

- 

-
