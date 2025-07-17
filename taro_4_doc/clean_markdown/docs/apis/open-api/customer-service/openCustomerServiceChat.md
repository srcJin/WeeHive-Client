# 打开微信客服。了解更多信息，可以参考微信客服介绍：[https://work.weixin.qq.com/kf/。](https://work.weixin.qq.com/kf/%E3%80%82)
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/service-chat/wx.openCustomerServiceChat.html)
## 类型[​](openCustomerServiceChat.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](openCustomerServiceChat.html#参数)
参数类型option`Option`
### ExtInfo[​](openCustomerServiceChat.html#extinfo)
参数类型url`string`
### Option[​](openCustomerServiceChat.html#option)
参数类型必填说明extInfo`ExtInfo`是客服信息corpId`string`是企业IDshowMessageCard`boolean`否是否发送小程序气泡消息，默认值：falsesendMessageTitle`string`否气泡消息标题sendMessagePath`string`否气泡消息小程序路径sendMessageImg`string`否气泡消息图片complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](openCustomerServiceChat.html#示例代码)
```tsx
Taro.openCustomerServiceChat({
 extInfo: {url: ''},
 corpId: '',
 success: function (res) { }
})
```

- 
- 

- 
- 

-
