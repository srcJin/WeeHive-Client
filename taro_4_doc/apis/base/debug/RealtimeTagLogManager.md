# 给定标签的实时日志管理器实例，可以通过 给定标签的实时日志管理器实例，可以通过 [RealtimeLogManager.tag](RealtimeLogManager.html#tag) 接口获取，目前只支持在插件使用。 接口获取，目前只支持在插件使用。
**使用说明** RealtimeTagLogManager 功能和 [RealtimeLogManager](RealtimeLogManager.html) 相似，但是为了让输出的实时日志更易于分析，其具有更严格的格式要求。 RealtimeTagLogManager 使用时需要传入标签，调用该实例所输出的日志均会被汇集到对应标签下，同时该实例的日志只支持 key-value 格式进行输出。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.html)
## 方法[​](RealtimeTagLogManager.html#方法)
### addFilterMsg[​](RealtimeTagLogManager.html#addfiltermsg)
添加过滤关键字
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.addFilterMsg.html)
```tsx
(msg: string) => void
```
参数类型说明msg`string`是 setFilterMsg 的添加接口。用于设置多个过滤关键字。
### error[​](RealtimeTagLogManager.html#error)
写 error 日志
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.error.html)
```tsx
(key: string, value: string | number | Object | any[]) => void
```
参数类型说明key`string`日志的 keyvaluestring or number or Object or any[]日志的 key
### info[​](RealtimeTagLogManager.html#info)
写 info 日志
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.info.html)
```tsx
(key: string, value: string | number | Object | any[]) => void
```
参数类型说明key`string`日志的 keyvaluestring or number or Object or any[]日志的 key
### setFilterMsg[​](RealtimeTagLogManager.html#setfiltermsg)
设置过滤关键字
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.setFilterMsg.html)
```tsx
(msg: string) => void
```
参数类型说明msg`string`过滤关键字，最多不超过1Kb，可以在小程序管理后台根据设置的内容搜索得到对应的日志。
### warn[​](RealtimeTagLogManager.html#warn)
写 warn 日志
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeTagLogManager.warn.html)
```tsx
(key: string, value: string | number | Object | any[]) => void
```
参数类型说明key`string`日志的 keyvaluestring or number or Object or any[]日志的 key
## API 支持度[​](RealtimeTagLogManager.html#api-支持度)
API微信小程序H5React NativeHarmonyRealtimeTagLogManager✔️RealtimeTagLogManager.addFilterMsg✔️RealtimeTagLogManager.error✔️RealtimeTagLogManager.info✔️RealtimeTagLogManager.setFilterMsg✔️RealtimeTagLogManager.warn✔️
- 

- 
- 
- 
- 
- 

-
