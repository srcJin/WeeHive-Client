# 评论详情
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/extended/component-content/comment-detail/)
## 类型[​](comment-detail.html#类型)
```tsx
ComponentType<CommentDetailProps>
```

## CommentDetailProps[​](comment-detail.html#commentdetailprops)
参数类型默认值必填说明commentParam`ICommentParam`是评论核心参数srid`string`是评论 IDisPageScroll`boolean``true`否滚动方式为页面滚动，若组件作为浮层使用，该参数需设为 falseneedToolbar`boolean``true`否是否需要底部 toolbar，若使用开发者自定义的底部 toolbar，该参数需设为 falseneedLikeBtn`boolean``true`否是否需要详情顶部父级评论的点赞按钮，默认显示backListAfterDelete`boolean``true`否删除详情后是否返回列表项，默认一站式逻辑。若使用浮层，请设置改属性为 falseaddComment`boolean``false`否用于调起评论发布器发布评论onDelete`CommonEventFunction`否删除整体详情内容时触发，返回数据为{status, data:{srid}}onReply`CommonEventFunction`否评论发布成功时触发，返回数据为 {status, data:{srid}}
### API 支持度[​](comment-detail.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyCommentDetailProps.commentParam✔️CommentDetailProps.srid✔️CommentDetailProps.isPageScroll✔️CommentDetailProps.needToolbar✔️CommentDetailProps.needLikeBtn✔️CommentDetailProps.backListAfterDelete✔️CommentDetailProps.addComment✔️CommentDetailProps.onDelete✔️CommentDetailProps.onReply✔️
### ICommentParam[​](comment-detail.html#icommentparam)
参数类型说明snid`string`被点赞的文章的 id，与 path 参数一一对应
example: "20200101"title`string`文章标题path`string`智能小程序内页链接，最长不能超过 194 字符
example: "/pages/index/index"
- 
- 

- 
-
