# 公众号关注组件。当用户扫小程序码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内。
Tips 使用组件前，需前往小程序后台，在“设置”->“关注公众号”中设置要展示的公众号。注：设置的公众号需与小程序主体一致。
在一个小程序的生命周期内，只有从以下场景进入小程序，才具有展示引导关注公众号组件的能力:
当小程序从扫小程序码场景（场景值1047，场景值1124）打开时 当小程序从聊天顶部场景（场景值1089）中的「最近使用」内打开时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态 当从其他小程序返回小程序（场景值1038）时，若小程序之前未被销毁，则该组件保持上一次打开小程序时的状态
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html)
## 类型[​](official-account.html#类型)
```tsx
ComponentType<OfficialAccountProps>
```

## OfficialAccountProps[​](official-account.html#officialaccountprops)
参数类型必填说明onLoad`CommonEventFunction<Detail>`否组件加载成功时触发onError`CommonEventFunction<Detail>`否组件加载失败时触发
### API 支持度[​](official-account.html#api-支持度)
API微信小程序H5React NativeHarmonyOfficialAccountProps.onLoad✔️OfficialAccountProps.onError✔️
### Detail[​](official-account.html#detail)
detail 对象
参数类型说明status`number`状态码errMsg`string`错误信息
### Status[​](official-account.html#status)
status 有效值
参数说明-2网络错误-1数据解析错误0加载成功1小程序关注公众号功能被封禁2关联公众号被封禁3关联关系解除或未选中关联公众号4未开启关注公众号功能5场景值错误6重复创建
- 
- 

- 
- 
-
