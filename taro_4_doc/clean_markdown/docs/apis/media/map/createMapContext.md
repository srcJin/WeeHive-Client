# 创建 [map](../../../components/maps/map.html) 上下文 [MapContext](MapContext.html) 对象。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html)
## 类型[​](createMapContext.html#类型)
```tsx
(mapId: string, component?: TaroGeneral.IAnyObject) => MapContext
```

## 参数[​](createMapContext.html#参数)
参数类型说明mapId`string`Map 组件的 idcomponent`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 Map 组件
## 示例代码[​](createMapContext.html#示例代码)
```tsx
const mapCtx = Taro.createMapContext('myMap')
```

- 
- 
-
