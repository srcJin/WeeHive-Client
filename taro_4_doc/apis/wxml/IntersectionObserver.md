# `IntersectionObserver` 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见。
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html)
## 方法[​](IntersectionObserver.html#方法)
### disconnect[​](IntersectionObserver.html#disconnect)
停止监听。回调函数将不再触发
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.disconnect.html)
```tsx
() => void
```

### observe[​](IntersectionObserver.html#observe)
指定目标节点并开始监听相交状态变化情况
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.observe.html)
```tsx
(targetSelector: string, callback: ObserveCallback) => void
```
参数类型说明targetSelector`string`选择器callback`ObserveCallback`监听相交状态变化的回调函数
### relativeTo[​](IntersectionObserver.html#relativeto)
使用选择器指定一个节点，作为参照区域之一。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeTo.html)
```tsx
(selector: string, margins?: RelativeToMargins) => IntersectionObserver
```
参数类型说明selector`string`选择器margins`RelativeToMargins`用来扩展（或收缩）参照节点布局区域的边界
### relativeToViewport[​](IntersectionObserver.html#relativetoviewport)
指定页面显示区域作为参照区域之一
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.relativeToViewport.html)
```tsx
(margins?: RelativeToViewportMargins) => IntersectionObserver
```
参数类型说明margins`RelativeToViewportMargins`用来扩展（或收缩）参照节点布局区域的边界
#### 示例代码[​](IntersectionObserver.html#示例代码)
下面的示例代码中，如果目标节点（用选择器 .target-class 指定）进入显示区域以下 100px 时，就会触发回调函数。
```tsx
Taro.createIntersectionObserver().relativeToViewport({bottom: 100}).observe('.target-class', (res) => {
 res.intersectionRatio // 相交区域占目标节点的布局区域的比例
 res.intersectionRect // 相交区域
 res.intersectionRect.left // 相交区域的左边界坐标
 res.intersectionRect.top // 相交区域的上边界坐标
 res.intersectionRect.width // 相交区域的宽度
 res.intersectionRect.height // 相交区域的高度
})
```

## 参数[​](IntersectionObserver.html#参数)
### ObserveCallback[​](IntersectionObserver.html#observecallback)
监听相交状态变化的回调函数
```tsx
(result: ObserveCallbackResult) => void
```
参数类型result`ObserveCallbackResult`
### ObserveCallbackResult[​](IntersectionObserver.html#observecallbackresult)
参数类型必填说明errMsg`string`否错误信息，会在找不到对应元素时返回
API 支持度: harmonyboundingClientRect`BoundingClientRectResult`否目标边界intersectionRatio`number`否相交比例intersectionRect`IntersectionRectResult`否相交区域的边界relativeRect`RelativeRectResult`否参照区域的边界time`number`否相交检测时的时间戳
### RelativeRectResult[​](IntersectionObserver.html#relativerectresult)
参照区域的边界
参数类型说明bottom`number`下边界left`number`左边界right`number`右边界top`number`上边界
### IntersectionRectResult[​](IntersectionObserver.html#intersectionrectresult)
相交区域的边界
参数类型说明bottom`number`下边界height`number`高度left`number`左边界right`number`右边界top`number`上边界width`number`宽度
### BoundingClientRectResult[​](IntersectionObserver.html#boundingclientrectresult)
目标边界
参数类型说明bottom`number`下边界height`number`高度left`number`左边界right`number`右边界top`number`上边界width`number`宽度
### RelativeToMargins[​](IntersectionObserver.html#relativetomargins)
用来扩展（或收缩）参照节点布局区域的边界
参数类型必填说明bottom`number`否节点布局区域的下边界left`number`否节点布局区域的左边界right`number`否节点布局区域的右边界top`number`否节点布局区域的上边界
### RelativeToViewportMargins[​](IntersectionObserver.html#relativetoviewportmargins)
用来扩展（或收缩）参照节点布局区域的边界
参数类型必填说明bottom`number`否节点布局区域的下边界left`number`否节点布局区域的左边界right`number`否节点布局区域的右边界top`number`否节点布局区域的上边界
## API 支持度[​](IntersectionObserver.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyHarmony hybridIntersectionObserver.disconnect✔️✔️✔️✔️IntersectionObserver.observe✔️✔️✔️✔️IntersectionObserver.relativeTo✔️✔️✔️✔️IntersectionObserver.relativeToViewport✔️✔️✔️✔️
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
