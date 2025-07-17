# 小程序测速上报。使用前，需要在小程序管理后台配置。 详情参见[小程序测速](https://developers.weixin.qq.com/miniprogram/dev/framework/performanceReport/index.html)指南。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.reportPerformance.html)
## 类型[​](reportPerformance.html#类型)
```tsx
(id: number, value: number, dimensions?: string | string[]) => void
```

## 参数[​](reportPerformance.html#参数)
参数类型说明id`number`指标 idvalue`number`需要上报的数值dimensionsstring or string[]自定义维度
## 示例代码[​](reportPerformance.html#示例代码)
```tsx
Taro.reportPerformance(1101, 680)
Taro.reportPerformance(1101, 680, 'custom')
```

- 
- 
-
