# 跳转预加载 API
## 类型[​](preload.html#类型)
```tsx
{ (options: Record<string, any>): any; (key: string, value: any): any; }
```

## 参数[​](preload.html#参数)
参数类型说明options`Record<string, any>`预加载的数据
param: options 预加载的数据
## 示例代码[​](preload.html#示例代码)
### 示例 1[​](preload.html#示例-1)
```tsx
Taro.preload({ key: 'value' })
```

### 示例 2[​](preload.html#示例-2)
```tsx
Taro.preload('key', 'value')
```

- 
- 
- 

- 
-
