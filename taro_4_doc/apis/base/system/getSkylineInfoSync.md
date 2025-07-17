# 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 基础库 2.26.2 开始支持
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfoSync.html)
## 类型[​](getSkylineInfoSync.html#类型)
```tsx
() => Result
```

## 参数[​](getSkylineInfoSync.html#参数)
### Result[​](getSkylineInfoSync.html#result)
参数类型必填说明isSupported`boolean`是当前运行环境是否支持 Skyline 渲染引擎version`string`是当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7reason`string`否当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现
- 
- 

-
