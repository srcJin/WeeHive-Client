# 获取当前运行环境对于 Skyline 渲染引擎 的支持情况 基础库 2.26.2 开始支持
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSkylineInfo.html)
## 类型[​](getSkylineInfo.html#类型)
```tsx
(option?: Option) => Promise<Result>
```

## 参数[​](getSkylineInfo.html#参数)
参数类型option`Option`
### Option[​](getSkylineInfo.html#option)
参数类型必填说明success`(res: Result) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: any) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### Result[​](getSkylineInfo.html#result)
参数类型必填说明isSupported`boolean`是当前运行环境是否支持 Skyline 渲染引擎version`string`是当前运行环境 Skyline 渲染引擎 的版本号，形如 0.9.7reason`string`否当前运行环境不支持 Skyline 渲染引擎 的原因，仅在 isSupported 为 false 时出现
- 
- 

- 
-
