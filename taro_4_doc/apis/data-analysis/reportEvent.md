# 事件上报
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportEvent.html)
## 类型[​](reportEvent.html#类型)
```tsx
(eventId: string, data: TaroGeneral.IAnyObject) => void
```

## 参数[​](reportEvent.html#参数)
参数类型说明eventId`string`事件名data`TaroGeneral.IAnyObject`上报的自定义数据，key 为配置中的字段名，value 为上报的数据。
## 示例代码[​](reportEvent.html#示例代码)
```tsx
Taro.reportEvent('purchase', {
 price: 120,
 color: 'red'
})
```

- 
- 
-
