# Vue3 插件，用于设置 `getApp()` 中的全局变量
支持情况：!!!!!!!!!!!
## 类型[​](setGlobalDataPlugin.html#类型)
```tsx
Plugin
```

## 参数[​](setGlobalDataPlugin.html#参数)
### Plugin[​](setGlobalDataPlugin.html#plugin)
Vue3 插件，用于设置 `getApp()` 中的全局变量
#### install[​](setGlobalDataPlugin.html#install)
```tsx
(app: any, data: any) => void
```

## 示例代码[​](setGlobalDataPlugin.html#示例代码)
```js
// 使用插件
const App = createApp(...)
App.use(setGlobalDataPlugin, {
 xxx: 999
})
// 获取全局变量
Taro.getApp().xxx
```

- 
- 

- 

-
