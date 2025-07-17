# 获取实时日志管理器对象。
支持情况：!!!!
## 类型[​](getRealtimeLogManager.html#类型)
```tsx
() => RealtimeLogManager
```

## 示例代码[​](getRealtimeLogManager.html#示例代码)
```tsx
const logger = Taro.getRealtimeLogManager()
logger.info({str: 'hello world'}, 'info log', 100, [1, 2, 3])
logger.error({str: 'hello world'}, 'error log', 100, [1, 2, 3])
logger.warn({str: 'hello world'}, 'warn log', 100, [1, 2, 3])
```

- 
-
