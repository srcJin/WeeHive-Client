# 网格构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点，仅 Skyline 支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/grid-builder.html)
## 类型[​](grid-builder.html#类型)
```tsx
ComponentType<GridBuilderProps>
```

## GridBuilderProps[​](grid-builder.html#gridbuilderprops)
参数类型默认值必填说明type"aligned" or "masonry"`"aligned"<br /><br />可选值:<br />- aligned: 每行高度由同一行中最大高度子节点决定<br />- masonry: 瀑布流，根据子元素高度自动布局`是布局方式list`any[]``[]`是需要用于渲染的列表childCount`number`否完整列表的长度，如果不传则取 list 的长度作为其值crossAxisCount`number``2`否交叉轴元素数量maxCrossAxisExtent`number``0`否交叉轴元素最大范围mainAxisGap`number``0`否主轴方向间隔crossAxisGap`number``0`否交叉轴方向间隔padding`[number, number, number, number]``[0, 0, 0, 0]`否长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距onItemBuild`CommonEventFunction`否列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号onItemDispose`CommonEventFunction`否列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号
### API 支持度[​](grid-builder.html#api-支持度)
API微信小程序H5React NativeHarmonyGridBuilderProps.type✔️GridBuilderProps.list✔️GridBuilderProps.childCount✔️GridBuilderProps.crossAxisCount✔️GridBuilderProps.maxCrossAxisExtent✔️GridBuilderProps.mainAxisGap✔️GridBuilderProps.crossAxisGap✔️GridBuilderProps.padding✔️GridBuilderProps.onItemBuild✔️GridBuilderProps.onItemDispose✔️
- 
- 

-
