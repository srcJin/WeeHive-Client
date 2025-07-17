# 列表构造器，仅支持作为 `<scroll-view type="custom">` 模式的直接子节点，仅 Skyline 支持。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/list-builder.html)
## 类型[​](list-builder.html#类型)
```tsx
ComponentType<ListBuilderProps>
```

## ListBuilderProps[​](list-builder.html#listbuilderprops)
参数类型默认值必填说明type"static" or "dynamic"`"aligned"<br /><br />可选值:<br />- static: 定高模式，所有列表项等高，需要传入 child-height<br />- dynamic: 不定高模式`是布局方式list`any[]``[]`是需要用于渲染的列表childCount`number`否完整列表的长度，如果不传则取 list 的长度作为其值childHeight`number`否列表项的高度，当 type 为 static 时必须传入padding`[number, number, number, number]``[0, 0, 0, 0]`否长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距onItemBuild`CommonEventFunction`否列表项创建时触发，event.detail = {index}，index 即被创建的列表项序号onItemDispose`CommonEventFunction`否列表项回收时触发，event.detail = {index}，index 即被回收的列表项序号
### API 支持度[​](list-builder.html#api-支持度)
API微信小程序H5React NativeHarmonyListBuilderProps.type✔️ListBuilderProps.list✔️ListBuilderProps.childCount✔️ListBuilderProps.childHeight✔️ListBuilderProps.padding✔️ListBuilderProps.onItemBuild✔️ListBuilderProps.onItemDispose✔️
- 
- 

-
