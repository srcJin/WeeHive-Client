# 更新转发属性
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html)
## 类型[​](updateShareMenu.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](updateShareMenu.html#参数)
参数类型option`Option`
### Option[​](updateShareMenu.html#option)
参数类型必填说明activityId`string`否动态消息的 activityId。通过 [updatableMessage.createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html) 接口获取complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数isUpdatableMessage`boolean`否是否是动态消息，详见[动态消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/updatable-message.html)success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数templateInfo`UpdatableMessageFrontEndTemplateInfo`否动态消息的模板信息withShareTicket`boolean`否是否使用带 shareTicket 的转发[详情](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)
### UpdatableMessageFrontEndTemplateInfo[​](updateShareMenu.html#updatablemessagefrontendtemplateinfo)
动态消息的模板信息
参数类型说明parameterList`UpdatableMessageFrontEndParameter[]`参数列表
### UpdatableMessageFrontEndParameter[​](updateShareMenu.html#updatablemessagefrontendparameter)
参数列表
参数类型说明name`string`参数名value`string`参数值
## 示例代码[​](updateShareMenu.html#示例代码)
```tsx
Taro.updateShareMenu({
 withShareTicket: true,
 success () { }
})
```

- 
- 

- 
- 
- 

-
