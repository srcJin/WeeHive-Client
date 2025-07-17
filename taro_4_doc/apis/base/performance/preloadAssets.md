# 为视图层预加载媒体资源文件, 目前支持：font，image
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadAssets.html)
## 类型[​](preloadAssets.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](preloadAssets.html#参数)
参数类型option`Option`
### AssetsObjectType[​](preloadAssets.html#assetsobjecttype)
参数说明font字体image图片
### AssetsObject[​](preloadAssets.html#assetsobject)
参数类型说明type`keyof AssetsObjectType`类型src`string`资源地址
### Option[​](preloadAssets.html#option)
参数类型必填说明data`AssetsObject[]`是complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

- 
- 
-
