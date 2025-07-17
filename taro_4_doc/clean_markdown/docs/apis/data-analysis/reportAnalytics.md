# 自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html)
## 类型[​](reportAnalytics.html#类型)
```tsx
(eventName: string, data: TaroGeneral.IAnyObject) => void
```

## 参数[​](reportAnalytics.html#参数)
参数类型说明eventName`string`事件名data`TaroGeneral.IAnyObject`上报的自定义数据，key 为配置中的字段名，value 为上报的数据。
## 示例代码[​](reportAnalytics.html#示例代码)
```tsx
Taro.reportAnalytics('purchase', {
 price: 120,
 color: 'red'
})
```

- 
- 
-
