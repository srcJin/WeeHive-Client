# 批量添加卡券。只有通过 [认证](https://developers.weixin.qq.com/miniprogram/product/renzheng.html) 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 [微信卡券接口文档](https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2)。
**cardExt 说明** cardExt 是卡券的扩展参数，其值是一个 JSON 字符串。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html)
## 类型[​](addCard.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](addCard.html#参数)
参数类型option`Option`
### Option[​](addCard.html#option)
参数类型必填说明cardList`RequestInfo[]`是需要添加的卡券列表complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### RequestInfo[​](addCard.html#requestinfo)
需要添加的卡券列表
参数类型说明cardExt`string`卡券的扩展参数。需将 CardExt 对象 JSON 序列化为**字符串**传入cardId`string`卡券 ID
### SuccessCallbackResult[​](addCard.html#successcallbackresult)
参数类型说明cardList`AddCardResponseInfo[]`卡券添加结果列表errMsg`string`调用结果
### AddCardResponseInfo[​](addCard.html#addcardresponseinfo)
卡券添加结果列表
参数类型说明cardExt`string`卡券的扩展参数，结构请参考下文cardId`string`用户领取到卡券的 IDcode`string`加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：[code 解码接口](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1499332673_Unm7V)isSuccess`boolean`是否成功
## 示例代码[​](addCard.html#示例代码)
```tsx
Taro.addCard({
 cardList: [
 {
 cardId: '',
 cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
 }, {
 cardId: '',
 cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
 }
 ],
 success: function (res) {
 console.log(res.cardList) // 卡券添加结果
 }
})
```

- 
- 

- 
- 
- 
- 

-
