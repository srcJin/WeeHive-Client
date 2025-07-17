# 评论列表
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-list/)
## 类型[​](comment-list.html#类型)
```tsx
ComponentType<CommentListProps>
```

## CommentListProps[​](comment-list.html#commentlistprops)
参数类型默认值必填说明commentParam`ICommentParam`是评论核心参数toolbarConfig`IToolbarConfig`否底部 toolbar 的相关配置isPageScroll`boolean``true`否滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 falseneedToolbar`boolean``true`否是否需要底部 toolbar ，若使用开发者自定义的底部 toolbar ，该参数需设为 falseaddComment`boolean``false`否用于调起评论发布器发布评论，发布成功插入列表第一条，且滚动到列表顶部detailPath`string`否点击单条评论跳转的详情页页面 path ，若没有配置则不会发生跳转；配置的前提是列表与详情均是页面级isFolded`boolean``false`否是否折叠列表，默认全展示foldNum`number``3`否折叠后列表展示最大条数，默认 3 条，最多 10 条viewMorePath`string`否传入放置评论组件的页面路径，如'/pages/list/index'，组件内部会触发跳转逻辑viewMoreStyle`IViewMoreStyle`否『全部 xx 条』的样式，目前只支持开发者自定义字体颜色onClickComment`CommonEventFunction`否绑定点击单条评论的事件，点击单条评论时触发，返回数据为{status, data:{srid}}onViewMore`CommonEventFunction`否绑定点击更多事件，若除了页面跳转还需要其他操作，可通过该回调执行；若为浮层，也可使用该回调自定义交互逻辑onReply`CommonEventFunction`否评论发布成功时触发，返回数据为 {status, data:{srid}}
### API 支持度[​](comment-list.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyCommentListProps.commentParam✔️CommentListProps.toolbarConfig✔️CommentListProps.isPageScroll✔️CommentListProps.needToolbar✔️CommentListProps.addComment✔️CommentListProps.detailPath✔️CommentListProps.isFolded✔️CommentListProps.foldNum✔️CommentListProps.viewMorePath✔️CommentListProps.viewMoreStyle✔️CommentListProps.onClickComment✔️CommentListProps.onViewMore✔️CommentListProps.onReply✔️
### ICommentParam[​](comment-list.html#icommentparam)
参数类型默认值必填说明snid`string`是被点赞的文章的 id，与 path 参数一一对应
example: "20200101"title`string`是文章标题path`string`是智能小程序内页链接，最长不能超过 194 字符
example: "/pages/index/index"images`string[]``['https://b.bdstatic.com/miniapp/images/demo-dog.png']`否数组第一项用于收藏功能的展示图片
### IToolbarConfig[​](comment-list.html#itoolbarconfig)
参数类型默认值必填说明placeholder`string`否输入框提示文字moduleList`string``['comment', 'like', 'favor', 'share']`否显示的互动模块，对应默认值分别是：评论数、点赞、收藏、分享share`IShare`否若 moduleList 里配置了 share 模块，该参数为必填
### IShare[​](comment-list.html#ishare)
参数类型必填说明title`string`是分享标题content`string`否分享内容imageUrl`string`否分享图标path`string`否页面 path ，必须是以 / 开头的完整路径，如果 path 中参数包含中文字符，需对中文字符进行编码
### IViewMoreStyle[​](comment-list.html#iviewmorestyle)
参数类型默认值必填说明color`string``"#3388ff"`否『全部 xx 条』的字体颜色，默认为视觉提供色号，开发者可传入自定义色号
- 
- 

- 
- 
- 
- 
-
