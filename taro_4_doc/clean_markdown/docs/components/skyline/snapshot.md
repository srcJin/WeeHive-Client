# 截图组件 支持将其子节点的渲染结果导出成图片，该组件需配合 snapshot 接口使用。 目前仅在 Skyline 渲染引擎 下支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/snapshot.html)
## 类型[​](snapshot.html#类型)
```tsx
ComponentType<SnapshotProps>
```

## SnapshotProps[​](snapshot.html#snapshotprops)
参数类型默认值说明mode"view" or "picture"`'view'<br /><br />可选值:<br />- view: 以真实节点渲染<br />- picture: 对子节点生成的内容截图渲染`渲染模式
### API 支持度[​](snapshot.html#api-支持度)
API微信小程序H5React NativeHarmonySnapshotProps.mode✔️
- 
- 

-
