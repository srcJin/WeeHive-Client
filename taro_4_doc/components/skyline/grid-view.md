# 网格布局容器，仅支持作为 scroll-view 自定义模式下的直接子节点或 sticky-section 组件直接子节点。仅 Skyline 支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/grid-view.html)
## 类型[​](grid-view.html#类型)
```tsx
ComponentType<GridViewProps>
```

## GridViewProps[​](grid-view.html#gridviewprops)
参数类型默认值必填说明type"aligned" or "masonry"`"aligned"<br /><br />可选值:<br />- aligned: 每行高度由同一行中最大高度子节点决定<br />- masonry: 瀑布流，根据子元素高度自动布局`是布局方式crossAxisCount`number``2`否交叉轴元素数量mainAxisGap`number``0`否主轴方向间隔crossAxisGap`number``0`否交叉轴方向间隔maxCrossAxisExtent`number``0`否交叉轴元素最大范围padding`[number, number, number, number]``[0, 0, 0, 0]`否长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距
### API 支持度[​](grid-view.html#api-支持度)
API微信小程序H5React NativeHarmonyGridViewProps.type✔️GridViewProps.crossAxisCount✔️GridViewProps.mainAxisGap✔️GridViewProps.crossAxisGap✔️GridViewProps.maxCrossAxisExtent✔️GridViewProps.padding✔️
- 
- 

-
