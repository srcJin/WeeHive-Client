# 给定实验参数数组，获取对应的实验参数值
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getExptInfoSync.html)
## 类型[​](getExptInfoSync.html#类型)
```tsx
(keys?: string[]) => TaroGeneral.IAnyObject
```

## 参数[​](getExptInfoSync.html#参数)
参数类型说明keys`string[]`实验参数数组，不填则获取所有实验参数
## 示例代码[​](getExptInfoSync.html#示例代码)
```tsx
Taro.getExptInfoSync(['color'])
```

- 
- 
-
