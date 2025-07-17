# Taro 的运行时包括 DOM、BOM、React 兼容层、Vue 兼容层等内容，而不同的端平台或开发框架都有可能需要对 Taro 运行时进行侵入定制。
为了解耦，我们参考了 **React Reconciler** 的概念，外部可以通过提供一个自定义的 `hostConfig` 配置对象，对运行时进行定制。
> 遇到 hostConfig 的配置项不满足需求，需要进行扩展时，可以给 Taro 提交 PR ～

## hostConfig 配置[​](reconciler.html#hostconfig-配置)
### appendChild (parent, child)[​](reconciler.html#appendchild-parent-child)
`DOMNode` 调用 `appendChild` 方法时触发。
参数类型说明parentDOMNode父节点childDOMNode / TextElement要给父节点追加的节点
### removeChild (parent, child, oldChild)[​](reconciler.html#removechild-parent-child-oldchild)
`DOMNode` 调用 `replaceChild` 方法时触发。
参数类型说明parentDOMNode父节点childDOMNode / TextElement用来替换 oldChild 的新节点oldChildDOMNode / TextElement被替换掉的原始节点
### insertBefore (parent, child, refChild)[​](reconciler.html#insertbefore-parent-child-refchild)
`DOMNode` 调用 `insertBefore` 方法时触发。
参数类型说明parentDOMNode父节点childDOMNode / TextElement用于插入的节点refChildDOMNode / TextElement将要插在这个节点之前
### removeAttribute (element, qualifiedName)[​](reconciler.html#removeattribute-element-qualifiedname)
`DOMElement` 调用 `removeAttribute` 方法时触发。
参数类型说明elementDOMElement当前操作元素qualifiedNamestring指定要从元素中移除的属性的名称
### setAttribute (element, qualifiedName, value)[​](reconciler.html#setattribute-element-qualifiedname-value)
`DOMElement` 调用 `setAttribute` 方法时触发。
参数类型说明elementDOMElement当前操作元素qualifiedNamestring表示属性名称的字符串value属性的值/新值
### prepareUpdateData (data, page)[​](reconciler.html#prepareupdatedata-data-page)
每次 Taro DOM 树更新，调用小程序 `setData` 前触发。
参数类型说明dataDataTree将要 setData 的 Taro DOM 树数据结构pageTaroRootElement页面根元素
### appendInitialPage (data, page)[​](reconciler.html#appendinitialpage-data-page)
Taro DOM 树初始化，第一次调用小程序 `setData` 前触发。在调用 `prepareUpdateData` 后立刻执行。
参数类型说明dataDataTree将要 setData 的 Taro DOM 树数据结构pageTaroRootElement页面根元素
### getLifecyle (instance, lifecyle)[​](reconciler.html#getlifecyle-instance-lifecyle)
小程序页面的生命周期被触发时调用。
参数类型说明instanceInstance用户编写的页面实例lifecylestring小程序页面被触发的生命周期函数名称
需要返回 **function** 或 **function[]**，表示将要执行的函数。
例子：
```js
// 默认值：
// 直接取用户编写的页面实例中，对应的生命周期方法
getLifecyle (instance, lifecyle) {
 return instance[lifecyle]
}

// 在 React 中，
// 小程序触发 onShow，调用用户编写的 componentDidShow
// 小程序触发 onHide，调用用户编写的 componentDidHide
getLifecyle (instance, lifecycle) {
 if (lifecycle === 'onShow') {
 lifecycle = 'componentDidShow'
 } else if (lifecycle === 'onHide') {
 lifecycle = 'componentDidHide'
 }
 return instance[lifecycle]
}
```

### onTaroElementCreate (tagName, nodeType)[​](reconciler.html#ontaroelementcreate-tagname-nodetype)
`DOMElement` 构造时触发。
参数类型说明tagNamestring当前创建的元素的标签名nodeTypeNodeType当前创建的元素的节点类型nodeType说明1ELEMENT_NODE2ATTRIBUTE_NODE3TEXT_NODE4CDATA_SECTION_NODE5ENTITY_REFERENCE_NODE6COMMENT_NODE7PROCESSING_INSTRUCTION_NODE9DOCUMENT_NODE
### getPathIndex (indexOfNode)[​](reconciler.html#getpathindex-indexofnode)
`DOMNode` 获取 `path` 属性时触发。
参数类型说明indexOfNodenumber当前节点在父节点 children 列表中的下标
需要返回一个 **string** 值，代表小程序按路径 `setData` 时的数组下标。
例子：
```js
// 默认值：
getPathIndex (indexOfNode) {
 return `[${indexOfNode}]`
}

// 百度小程序不需要 [] 包裹
getPathIndex (indexOfNode) {
 return indexOfNode
}
```

### getEventCenter(Events)[​](reconciler.html#geteventcenterevents)
`Taro.eventCenter` 初始化值时触发。
参数类型说明EventsTaro 事件中心的构造函数
需要返回 Taro 事件中心的实例，其将会被赋值给 `Taro.eventCenter`。
例子：
```js
// 默认值：
getEventCenter (Events) {
 return new Events()
}

// 支付宝小程序中，
// 优先从小程序全局对象 my 中取出创建过的事件中心实例，避免分包时出现问题。
getEventCenter (Events) {
 if (!my.taroEventCenter) {
 my.taroEventCenter = new Events()
 }
 return my.taroEventCenter
}
```

### initNativeApi (taro)[​](reconciler.html#initnativeapi-taro)
引用 `@tarojs/taro` 包时触发。
参数类型说明taroTaro 对象
例子：
```js
initNativeApi (taro) {
 // 为 Taro 对象增加 getApp 方法
 taro.getApp = getApp
}
```

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
