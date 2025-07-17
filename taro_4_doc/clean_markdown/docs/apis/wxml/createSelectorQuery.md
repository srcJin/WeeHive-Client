# 返回一个 SelectorQuery 对象实例。在自定义组件或包含自定义组件的页面中，应使用 `this.createSelectorQuery()` 来代替。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html)
## 类型[​](createSelectorQuery.html#类型)
```tsx
() => SelectorQuery
```

## 示例代码[​](createSelectorQuery.html#示例代码)
```tsx
const query = Taro.createSelectorQuery()
query.select('#the-id').boundingClientRect()
query.selectViewport().scrollOffset()
query.exec(function(res){
 res[0].top // #the-id节点的上边界坐标
 res[1].scrollTop // 显示区域的竖直滚动位置
})
```

- 
-
