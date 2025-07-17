# DraggableSheet 实例，可通过 Taro.createSelectorQuery 的 NodesRef.node 方法获取。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.html)
## 方法[​](DraggableSheetContext.html#方法)
### scrollTo[​](DraggableSheetContext.html#scrollto)
滚动到指定位置。size 取值 [0, 1]，size = 1 时表示撑满 draggable-sheet 组件。size 和 pixels 同时传入时，仅 size 生效。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/DraggableSheetContext.scrollTo.html)
```tsx
(option: Option) => void
```
参数类型option`Option`
## 参数[​](DraggableSheetContext.html#参数)
### scrollTo[​](DraggableSheetContext.html#scrollto-1)
#### Option[​](DraggableSheetContext.html#option)
参数类型默认值必填说明size`number`否相对目标位置pixels`number`否绝对目标位置animated`boolean``true`否是否启用滚动动画duration`number``300`否滚动动画时长（ms)easingFunction`string``ease`否缓动函数
## API 支持度[​](DraggableSheetContext.html#api-支持度)
API微信小程序H5React NativeHarmonyDraggableSheetContext✔️
- 

- 

- 

- 

-
