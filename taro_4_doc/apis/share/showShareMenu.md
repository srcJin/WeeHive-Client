# 显示当前页面的转发按钮
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html)
## 类型[​](showShareMenu.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](showShareMenu.html#参数)
参数类型option`Option`
### Option[​](showShareMenu.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数withShareTicket`boolean`否是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)showShareItems`string[]`否QQ小程序分享功能，支持分享到QQ、QQ空间、微信好友、微信朋友圈
API 支持度: weapp, qq
qq: QQ支持的值： ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
weapp: 微信支持：['wechatFriends', 'wechatMoment'] / ['shareAppMessage', 'shareTimeline']
## 示例代码[​](showShareMenu.html#示例代码)
```tsx
Taro.showShareMenu({
 withShareTicket: true
})
```

- 
- 

- 

-
