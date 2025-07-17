# 查看微信卡包中的卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html)
## 类型[​](openCard.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openCard.html#参数)
参数类型option`Option`
### Option[​](openCard.html#option)
参数类型必填说明cardList`RequestInfo[]`是需要打开的卡券列表complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RequestInfo[​](openCard.html#requestinfo)
需要打开的卡券列表
参数类型说明cardId`string`卡券 IDcode`string`由 Taro.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V)
## 示例代码[​](openCard.html#示例代码)
```tsx
Taro.openCard({
 cardList: [{
 cardId: '',
 code: ''
 }, {
 cardId: '',
 code: ''
 }],
 success: function (res) { }
})
```

- 
- 

- 
- 

-
