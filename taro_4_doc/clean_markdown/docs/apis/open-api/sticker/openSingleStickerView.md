# 打开单个表情
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/sticker/wx.openSingleStickerView.html)
## 类型[​](openSingleStickerView.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](openSingleStickerView.html#参数)
参数类型option`Option`
### Option[​](openSingleStickerView.html#option)
参数类型必填说明url`Object`是表情链接，可前往(表情开放平台)[https://sticker.weixin.qq.com/cgi-bin/mmemoticonwebnode-bin/pages/home]，在详情页中的「小程序跳转链接」入口复制complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](openSingleStickerView.html#示例代码)
```tsx
Taro.openSingleStickerView({
 url: '',
 success(res) {}
})
```

- 
- 

- 

-
