# 获取小程序启动时的参数。与 [`App.onLaunch`](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onlaunchobject-object) 的回调参数一致。
**注意** 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html)
## 类型[​](getLaunchOptionsSync.html#类型)
```tsx
() => LaunchOptions
```

## 参数[​](getLaunchOptionsSync.html#参数)
### LaunchOptions[​](getLaunchOptionsSync.html#launchoptions)
启动参数
参数类型必填说明path`string`是启动小程序的路径query`TaroGeneral.IAnyObject`是启动小程序的 query 参数scene`number`是启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)shareTicket`string`是shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)referrerInfo`ReferrerInfo`是来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)forwardMaterials`ForwardMaterial[]`否打开的文件信息数组，只有从聊天素材场景打开（scene为1173）才会携带该参数chatType`keyof ChatType`否从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型apiCategory`keyof ApiCategory`否API 类别
#### ReferrerInfo[​](getLaunchOptionsSync.html#referrerinfo)
来源信息
参数类型必填说明appId`string`否来源小程序、公众号或 App 的 appIdextraData`TaroGeneral.IAnyObject`否来源小程序传过来的数据，scene=1037或1038时支持
#### ForwardMaterial[​](getLaunchOptionsSync.html#forwardmaterial)
ChatType 类型合法值
参数类型说明type`string`文件的mimetype类型name`string`文件名path`string`文件路径（如果是webview则是url）size`number`文件大小
#### ChatType[​](getLaunchOptionsSync.html#chattype)
ChatType 类型合法值
参数说明1微信联系人单聊2企业微信联系人单聊3普通微信群聊4企业微信互通群聊
#### ApiCategory[​](getLaunchOptionsSync.html#apicategory)
API 类别合法值
参数说明default默认类别nativeFunctionalized原生功能化，视频号直播商品、商品橱窗等场景打开的小程序browseOnly仅浏览，朋友圈快照页等场景打开的小程序embedded内嵌，通过打开半屏小程序能力打开的小程序
- 
- 

-
