# 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
**selector 语法** selector类似于 CSS 的选择器，但仅支持下列语法。

- ID选择器：#the-id
- class选择器（可以连续指定多个）：.a-class.another-class
- 子元素选择器：.the-parent > .the-child
- 后代选择器：.the-ancestor .the-descendant
- 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
- 多选择器的并集：#a-node, .some-other-nodes
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html)
## 类型[​](pageScrollTo.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](pageScrollTo.html#参数)
参数类型option`Option`
### Option[​](pageScrollTo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）duration`number`否滚动动画的时长，单位 msfail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数scrollTop`number`否滚动到页面的目标位置，单位 pxselector`string`否选择器, css selectoroffsetTop`number`否偏移距离，需要和 selector 参数搭配使用，可以滚动到 selector 加偏移距离的位置，单位 pxsuccess`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](pageScrollTo.html#示例代码)
```tsx
Taro.pageScrollTo({
 scrollTop: 0,
 duration: 300
})
```

- 
- 

- 

-
