# 监听小程序切前台事件。该事件与 [`App.onShow`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onshowobject-object) 的回调参数一致。
**返回有效 referrerInfo 的场景**
场景值场景appId含义1020公众号 profile 页相关小程序列表来源公众号1035公众号自定义菜单来源公众号1036App 分享消息卡片来源App1037小程序打开小程序来源小程序1038从另一个小程序返回来源小程序1043公众号模板消息来源公众号
**注意**
部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html)
## 类型[​](onAppShow.html#类型)
```tsx
(callback: (res: CallbackResult) => void) => void
```

## 参数[​](onAppShow.html#参数)
参数类型说明callback`(res: CallbackResult) => void`小程序切前台事件的回调函数
### CallbackResult[​](onAppShow.html#callbackresult)
参数类型必填说明path`string`是小程序切前台的路径query`TaroGeneral.IAnyObject`是小程序切前台的 query 参数shareTicket`string`是shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)scene`number`是小程序切前台的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)referrerInfo`ResultReferrerInfo`是来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)forwardMaterials`ForwardMaterial[]`否打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数chatType`keyof ChatType`否从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型apiCategory`keyof ApiCategory`否API 类别
### ResultReferrerInfo[​](onAppShow.html#resultreferrerinfo)
来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)
参数类型必填说明appId`string`否来源小程序、公众号或 App 的 appIdextraData`TaroGeneral.IAnyObject`否来源小程序传过来的数据，scene=1037或1038时支持
### ForwardMaterial[​](onAppShow.html#forwardmaterial)
ChatType 类型合法值
参数类型说明type`string`文件的mimetype类型name`string`文件名path`string`文件路径（如果是webview则是url）size`number`文件大小
### ChatType[​](onAppShow.html#chattype)
ChatType 类型合法值
参数说明1微信联系人单聊2企业微信联系人单聊3普通微信群聊4企业微信互通群聊
### ApiCategory[​](onAppShow.html#apicategory)
API 类别合法值
参数说明default默认类别nativeFunctionalized原生功能化，视频号直播商品、商品橱窗等场景打开的小程序browseOnly仅浏览，朋友圈快照页等场景打开的小程序embedded内嵌，通过打开半屏小程序能力打开的小程序
- 
- 

- 
- 
- 
- 
-
