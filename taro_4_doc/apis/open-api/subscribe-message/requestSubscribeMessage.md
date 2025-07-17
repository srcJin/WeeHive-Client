# 请求订阅消息
注意：[2.8.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
## 类型[​](requestSubscribeMessage.html#类型)
```tsx
(option: Option) => Promise<FailCallbackResult | SuccessCallbackResult>
```

## 参数[​](requestSubscribeMessage.html#参数)
参数类型option`Option`
### Option[​](requestSubscribeMessage.html#option)
参数类型必填说明tmplIds`string[]`是需要订阅的消息模板的id的集合（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置
API 支持度: weapp, ttentityIds`string[]`是需要订阅的消息模板 id 集合（注意：1、一次性模板 id 和长期性模板 id 不可同时使用，2、一次最多传入三个模板 id
API 支持度: alipaythirdTypeAppId`string`否模板小程序 appId，仅在服务商代调用场景下需要传入
API 支持度: alipaycomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### FailCallbackResult[​](requestSubscribeMessage.html#failcallbackresult)
参数类型说明errCode`number`接口调用失败错误码errMsg`string`接口调用失败错误信息
### SuccessCallbackResult[​](requestSubscribeMessage.html#successcallbackresult)
参数类型必填说明[TEMPLATE_ID]"accept" or "reject" or "ban"是动态的键，即模板idbehavior`string`否用户订阅操作结果。

or 枚举值 or 描述 or
or --- or ---- or
or subscribe or 订阅成功 or
API 支持度: alipaykeep`boolean`否一次性订阅，是否勾选 总是保持以上选择，不再询问。

or 枚举值 or 描述 or
or --- or ---- or
or true or 勾选 or
or false or 未勾选 or
API 支持度: alipayrefuse`boolean`否长期性订阅，是否点击 拒绝，不再询问。

or 枚举值 or 描述 or
or --- or ---- or
or true or 点击 or
or false or 未点击 or
API 支持度: alipayresult`ISubscribeResult`否订阅数据
API 支持度: alipayshow`boolean`否本次订阅过程是否弹出了订阅面板。

or 枚举值 or 描述 or
or --- or ---- or
or true or 弹出 or
or false or 未弹出 or
API 支持度: alipayerrMsg`string`是接口调用成功时errMsg值为'requestSubscribeMessage:ok'
#### 示例代码[​](requestSubscribeMessage.html#示例代码)
表示用户同意订阅 zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE 这条消息
```json
{
 "errMsg": "requestSubscribeMessage:ok",
 "zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE": "accept"
}
```

### ISubscribeResult[​](requestSubscribeMessage.html#isubscriberesult)
参数类型说明subscribeEntityIds`string[]`订阅成功的模板列表subscribedEntityIds`string[]`最终订阅成功的模板列表unsubscribedEntityIds`string[]`未订阅的模板列表currentSubscribedEntityIds`string[]`本次新增订阅成功的模板列表
### TemplateReflex[​](requestSubscribeMessage.html#templatereflex)
模版消息订阅类型
参数说明accept表示用户同意订阅该条id对应的模板消息
API 支持度: weapp, alipay, ttreject表示用户拒绝订阅该条id对应的模板消息
API 支持度: weapp, alipay, ttban表示已被后台封禁
API 支持度: weapp, ttfilter表示该模板因为模板标题同名被后台过滤
API 支持度: weappfail表示该条 id 对应的模版消息授权失败
API 支持度: tt
## 示例代码[​](requestSubscribeMessage.html#示例代码-1)
```tsx
Taro.requestSubscribeMessage({
 tmplIds: [''],
 success: function (res) { }
})
```

- 
- 

- 
- 
- 
- 
- 

-
