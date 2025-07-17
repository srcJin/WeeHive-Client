# 向调试面板中打印日志。console 是一个全局对象，可以直接访问。在微信客户端中，向 vConsole 中输出日志。
**注意**

- 由于 vConsole 功能有限，以及不同客户端对 console 方法的支持情况有差异，建议开发者在小程序中只使用本文档中提供的方法。
- 部分内容展示的限制请参见调试
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.html)
## 方法[​](console.html#方法)
### debug[​](console.html#debug)
向调试面板中打印 debug 日志
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.debug.html)
```tsx
(...args: any[]) => void
```
参数类型说明args`any[]`日志内容，可以有任意多个。
### error[​](console.html#error)
向调试面板中打印 error 日志
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.error.html)
```tsx
(...args: any[]) => void
```
参数类型说明args`any[]`日志内容，可以有任意多个。
### group[​](console.html#group)
在调试面板中创建一个新的分组
**注意** 仅在工具中有效，在 vConsole 中为空函数实现。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.group.html)
```tsx
(label?: string) => void
```
参数类型说明label`string`分组标记
### groupEnd[​](console.html#groupend)
结束由 [console.group](console.html#group) 创建的分组
**注意** 仅在工具中有效，在 vConsole 中为空函数实现。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.groupEnd.html)
```tsx
() => void
```

### info[​](console.html#info)
向调试面板中打印 info 日志
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.info.html)
```tsx
(...args: any[]) => void
```
参数类型说明args`any[]`日志内容，可以有任意多个。
### log[​](console.html#log)
向调试面板中打印 log 日志
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.log.html)
```tsx
(...args: any[]) => void
```
参数类型说明args`any[]`日志内容，可以有任意多个。
### warn[​](console.html#warn)
向调试面板中打印 warn 日志
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/console.warn.html)
```tsx
(...args: any[]) => void
```
参数类型说明args`any[]`日志内容，可以有任意多个。
## API 支持度[​](console.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyHarmony hybridconsole✔️✔️console.debug✔️✔️console.error✔️✔️console.group✔️✔️console.groupEnd✔️✔️console.info✔️✔️console.log✔️✔️✔️console.warn✔️✔️
- 

- 
- 
- 
- 
- 
- 
- 

-
