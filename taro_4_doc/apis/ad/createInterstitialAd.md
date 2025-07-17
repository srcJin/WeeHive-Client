# 创建插屏广告组件。 请通过 getSystemInfoSync 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ad/wx.createInterstitialAd.html)
## 类型[​](createInterstitialAd.html#类型)
```tsx
(option: Option) => InterstitialAd
```

## 参数[​](createInterstitialAd.html#参数)
参数类型option`Option`
### Option[​](createInterstitialAd.html#option)
参数类型说明adUnitId`string`广告单元 id
- 
- 

-
