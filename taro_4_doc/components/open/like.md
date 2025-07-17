# 点赞
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/extended/component-content/like/)
## 类型[​](like.html#类型)
```tsx
ComponentType<LikeProps>
```

## LikeProps[​](like.html#likeprops)
参数类型默认值必填说明isLiked`boolean``false`否是否已被点赞mode`string``"icon"`否按钮模式。icon：表示仅有图标；mixture：表示图标文字结合iconType`string``"hand"`否图标类型。hand：表示手形；heart：表示心形likeText`string``"赞"`否点赞按钮上的文案。默认为赞，仅在 mode 属性值为'mixture'时有效likeNum`number``0`否点赞数量likeType`number``0`否被点赞的对象类型。0：表示对文章内容进行点赞；1：表示对评论内容进行点赞animationType`number``1`否点赞动效形式。0：无动效；1：轻动效；2：强动效isShowToast`boolean``false`否点赞后是否弹出 toast 提示toastText`string[]``['已点赞', '已取消']`否toast 文案，默认为已点赞、已取消likeParam`ILikeParam`是点赞服务需要的必要参数onError`CommonEventFunction`否使用 npm 方式引入点赞组件时，点击按钮时在用户未登录状态下会触发此事件；使用动态库方式引入点赞组件时，点击按钮时在用户未登录状态下不会触发此事件onSuccess`CommonEventFunction`否点击点赞按钮，在点赞服务成功后将状态返回给使用组件者onFail`CommonEventFunction`否点击点赞按钮，在点赞服务失败后将状态返回给使用组件者
### API 支持度[​](like.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyLikeProps.isLiked✔️LikeProps.mode✔️LikeProps.iconType✔️LikeProps.likeText✔️LikeProps.likeNum✔️LikeProps.likeType✔️LikeProps.animationType✔️LikeProps.isShowToast✔️LikeProps.toastText✔️LikeProps.likeParam✔️LikeProps.onError✔️LikeProps.onSuccess✔️LikeProps.onFail✔️
### ILikeParam[​](like.html#ilikeparam)
参数类型必填说明openid`string`是用户身份唯一标识snid`string`是被点赞的文章的 id，与 path 参数一一对应
example: "20200101"spid`string`否被点赞的评论 idtitle`string`是文章标题path`string`是智能小程序内页链接，最长不能超过 194 字符
example: "/pages/index/index"
- 
- 

- 
-
