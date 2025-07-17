# 页面间事件通信通道
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html)
## 方法[​](EventChannel.html#方法)
### emit[​](EventChannel.html#emit)
触发一个事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.emit.html)
```tsx
(eventName: string, ...args: any) => void
```
参数类型说明eventName`string`事件名称args`any`事件参数
### on[​](EventChannel.html#on)
持续监听一个事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.on.html)
```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称fn`TaroGeneral.EventCallback`事件监听函数
### once[​](EventChannel.html#once)
监听一个事件一次，触发后失效
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.once.html)
```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称fn`TaroGeneral.EventCallback`事件监听函数
### off[​](EventChannel.html#off)
取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.off.html)
```tsx
(eventName: string, fn: TaroGeneral.EventCallback) => void
```
参数类型说明eventName`string`事件名称fn`TaroGeneral.EventCallback`事件监听函数
## API 支持度[​](EventChannel.html#api-支持度)
API微信小程序H5React NativeHarmonyEventChannel✔️EventChannel.emit✔️EventChannel.on✔️EventChannel.once✔️EventChannel.off✔️
- 

- 
- 
- 
- 

-
