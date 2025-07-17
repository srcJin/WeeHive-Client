# 用于获取 `WXML` 节点信息的对象
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html)
## 方法[​](NodesRef.html#方法)
### boundingClientRect[​](NodesRef.html#boundingclientrect)
添加节点的布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `NodesRef` 对应的 `SelectorQuery`。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.boundingClientRect.html)
```tsx
(callback?: BoundingClientRectCallback) => SelectorQuery
```
参数类型说明callback`BoundingClientRectCallback`回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。
#### 示例代码[​](NodesRef.html#示例代码)
##### 示例 1[​](NodesRef.html#示例-1)
```tsx
Taro.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
 rect.id // 节点的ID
 rect.dataset // 节点的dataset
 rect.left // 节点的左边界坐标
 rect.right // 节点的右边界坐标
 rect.top // 节点的上边界坐标
 rect.bottom // 节点的下边界坐标
 rect.width // 节点的宽度
 rect.height // 节点的高度
}).exec()

##### 示例 2

tsx
Taro.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
 rects.forEach(function(rect){
 rect.id // 节点的ID
 rect.dataset // 节点的dataset
 rect.left // 节点的左边界坐标
 rect.right // 节点的右边界坐标
 rect.top // 节点的上边界坐标
 rect.bottom // 节点的下边界坐标
 rect.width // 节点的宽度
 rect.height // 节点的高度
 })
}).exec()
```

### context[​](NodesRef.html#context)
添加节点的 Context 对象查询请求。目前支持 [VideoContext](../media/video/VideoContext.html)、[CanvasContext](../canvas/CanvasContext.html)、[LivePlayerContext](../media/live/LivePlayerContext.html)、[EditorContext](../media/editor/EditorContext.html)和 [MapContext](../media/map/MapContext.html) 的获取。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.context.html)
```tsx
(callback?: ContextCallback) => SelectorQuery
```
参数类型说明callback`ContextCallback`回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。
#### 示例代码[​](NodesRef.html#示例代码-1)
```tsx
Taro.createSelectorQuery().select('.the-video-class').context(function (res) {
 console.log(res.context) // 节点对应的 Context 对象。如：选中的节点是 <video> 组件，那么此处即返回 VideoContext 对象
}).exec()
```

### fields[​](NodesRef.html#fields)
获取节点的相关信息。需要获取的字段在fields中指定。返回值是 `nodesRef` 对应的 `selectorQuery`
**注意** computedStyle 的优先级高于 size，当同时在 computedStyle 里指定了 width/height 和传入了 size: true，则优先返回 computedStyle 获取到的 width/height。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.fields.html)
```tsx
(fields: Fields, callback?: FieldsCallback) => SelectorQuery
```
参数类型说明fields`Fields`callback`FieldsCallback`回调函数
#### 示例代码[​](NodesRef.html#示例代码-2)
```tsx
Taro.createSelectorQuery().select('#the-id').fields({
 dataset: true,
 size: true,
 scrollOffset: true,
 properties: ['scrollX', 'scrollY'],
 computedStyle: ['margin', 'backgroundColor'],
 context: true,
}, function (res) {
 res.dataset // 节点的dataset
 res.width // 节点的宽度
 res.height // 节点的高度
 res.scrollLeft // 节点的水平滚动位置
 res.scrollTop // 节点的竖直滚动位置
 res.scrollX // 节点 scroll-x 属性的当前值
 res.scrollY // 节点 scroll-y 属性的当前值
 // 此处返回指定要返回的样式名
 res.margin
 res.backgroundColor
 res.context // 节点对应的 Context 对象
}).exec()
```

### node[​](NodesRef.html#node)
获取 Node 节点实例。目前支持 [Canvas](../../components/canvas.html) 的获取。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.node.html)
```tsx
(callback?: NodeCallback) => SelectorQuery
```
参数类型说明callback`NodeCallback`回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。
#### 示例代码[​](NodesRef.html#示例代码-3)
```tsx
Taro.createSelectorQuery().select('.canvas').node(function(res){
 console.log(res.node) // 节点对应的 Canvas 实例。
}).exec()
```

### scrollOffset[​](NodesRef.html#scrolloffset)
添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `NodesRef` 对应的 `SelectorQuery`。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.scrollOffset.html)
```tsx
(callback?: ScrollOffsetCallback) => SelectorQuery
```
参数类型说明callback`ScrollOffsetCallback`回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。
#### 示例代码[​](NodesRef.html#示例代码-4)
```tsx
Taro.createSelectorQuery().selectViewport().scrollOffset(function(res){
 res.id // 节点的ID
 res.dataset // 节点的dataset
 res.scrollLeft // 节点的水平滚动位置
 res.scrollTop // 节点的竖直滚动位置
}).exec()
```

## 参数[​](NodesRef.html#参数)
### BoundingClientRectCallback[​](NodesRef.html#boundingclientrectcallback)
回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。
```tsx
(result: BoundingClientRectCallbackResult | BoundingClientRectCallbackResult[]) => void
```
参数类型resultBoundingClientRectCallbackResult or BoundingClientRectCallbackResult[]
### BoundingClientRectCallbackResult[​](NodesRef.html#boundingclientrectcallbackresult)
参数类型说明bottom`number`节点的下边界坐标dataset`TaroGeneral.IAnyObject`节点的 datasetheight`number`节点的高度id`string`节点的 IDleft`number`节点的左边界坐标right`number`节点的右边界坐标top`number`节点的上边界坐标width`number`节点的宽度
### ContextCallback[​](NodesRef.html#contextcallback)
回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。
```tsx
(result: ContextCallbackResult) => void
```
参数类型result`ContextCallbackResult`
### ContextCallbackResult[​](NodesRef.html#contextcallbackresult)
参数类型说明context`TaroGeneral.IAnyObject`节点对应的 Context 对象
### Fields[​](NodesRef.html#fields-1)
参数类型必填说明computedStyle`string[]`否指定样式名列表，返回节点对应样式名的当前值context`boolean`否是否返回节点对应的 Context 对象dataset`boolean`否是否返回节点 datasetid`boolean`否是否返回节点 idmark`boolean`否是否返回节点 marknode`boolean`否是否返回节点对应的 Node 实例properties`string[]`否指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值，id class style 和事件绑定的属性值不可获取）rect`boolean`否是否返回节点布局位置（`left``right``top``bottom`）scrollOffset`boolean`否否 是否返回节点的 `scrollLeft``scrollTop`，节点必须是 `scroll-view` 或者 `viewport`size`boolean`否是否返回节点尺寸（`width``height`）
### FieldsCallback[​](NodesRef.html#fieldscallback)
回调函数
```tsx
(res: TaroGeneral.IAnyObject) => void
```
参数类型说明res`TaroGeneral.IAnyObject`节点的相关信息
### NodeCallback[​](NodesRef.html#nodecallback)
回调函数，在执行 `SelectorQuery.exec` 方法后，返回节点信息。
```tsx
(result: NodeCallbackResult) => void
```
参数类型result`NodeCallbackResult`
### NodeCallbackResult[​](NodesRef.html#nodecallbackresult)
回调函数
参数类型说明node`TaroGeneral.IAnyObject`节点对应的 Node 实例
### ScrollOffsetCallback[​](NodesRef.html#scrolloffsetcallback)
回调函数，在执行 `SelectorQuery.exec` 方法后，节点信息会在 `callback` 中返回。
```tsx
(result: ScrollOffsetCallbackResult) => void
```
参数类型result`ScrollOffsetCallbackResult`
### ScrollOffsetCallbackResult[​](NodesRef.html#scrolloffsetcallbackresult)
参数类型说明dataset`TaroGeneral.IAnyObject`节点的 datasetid`string`节点的 IDscrollLeft`number`节点的水平滚动位置scrollTop`number`节点的竖直滚动位置
## API 支持度[​](NodesRef.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyHarmony hybridNodesRef.boundingClientRect✔️✔️✔️✔️NodesRef.context✔️✔️✔️✔️NodesRef.fields✔️✔️✔️✔️NodesRef.node✔️✔️✔️✔️NodesRef.scrollOffset✔️✔️✔️✔️
- 

- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
