# 获取日志管理器对象。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html)
## 类型[​](getLogManager.html#类型)
```tsx
(res?: Option) => LogManager
```

## 参数[​](getLogManager.html#参数)
参数类型res`Option`
### Option[​](getLogManager.html#option)
参数类型默认值必填level`keyof Level``0`否
### Level[​](getLogManager.html#level)
参数说明0表示会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志1表示不会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志
## 示例代码[​](getLogManager.html#示例代码)
```tsx
const logger = Taro.getLogManager({level: 1})

logger.log({str: 'hello world'}, 'basic log', 100, [1, 2, 3])
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.debug({str: 'hello world'}, 'debug log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```

- 
- 

- 
- 

-
