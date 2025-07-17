# ## StandardProps[​](common.html#standardprops)
参数类型必填说明id`string`否组件的唯一标示, 保持整个页面唯一className`string`否同 `class`，在 React/Nerv 里一般使用 `className` 作为 `class` 的代称style`any`否组件的内联样式, 可以动态设置的内联样式keystring or number否如果列表中项目的位置会动态改变或者有新的项目添加到列表中，
需要使用 `wx:key` 来指定列表中项目的唯一的标识符。hidden`boolean`否组件是否显示, 所有组件默认显示animation`{ actions: TaroGeneral.IAnyObject[]; }`否动画属性ref`LegacyRef<T>`否引用dangerouslySetInnerHTML`{ __html: string; }`否渲染 HTML
[参考地址](../html.html)
## FormItemProps[​](common.html#formitemprops)
参数类型必填说明name`string`否表单数据标识
## EventProps[​](common.html#eventprops)
参数类型必填说明onTouchStart`(event: TouchEvent) => void`否手指触摸动作开始onTouchMove`(event: TouchEvent) => void`否手指触摸后移动onTouchCancel`(event: TouchEvent) => void`否手指触摸动作被打断，如来电提醒，弹窗onTouchEnd`(event: TouchEvent) => void`否手指触摸动作结束onClick`(event: ITouchEvent) => void`否手指触摸后马上离开onLongPress`(event: CommonEvent<any>) => void`否手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发onLongClick`(event: CommonEvent<any>) => void`否手指触摸后，超过350ms再离开（推荐使用 longpress 事件代替）onTransitionEnd`(event: CommonEvent<any>) => void`否会在 WXSS transition 或 Taro.createAnimation 动画结束后触发onAnimationStart`(event: CommonEvent<any>) => void`否会在一个 WXSS animation 动画开始时触发onAnimationIteration`(event: CommonEvent<any>) => void`否会在一个 WXSS animation 一次迭代结束时触发onAnimationEnd`(event: CommonEvent<any>) => void`否会在一个 WXSS animation 动画完成时触发onTouchForceChange`(event: CommonEvent<any>) => void`否在支持 3D Touch 的 iPhone 设备，重按时会触发
## CommonEvent[​](common.html#commonevent)
参数类型说明type`string`事件类型timeStamp`number`事件生成时的时间戳target`Target`触发事件的组件的一些属性值集合currentTarget`Target`当前组件的一些属性值集合detail`T`额外的信息preventDefault`() => void`阻止元素发生默认的行为stopPropagation`() => void`阻止事件冒泡到父元素,阻止任何父事件处理程序被执行
## BaseEventOrig[​](common.html#baseeventorig)
参数类型说明type`string`事件类型timeStamp`number`事件生成时的时间戳target`Target`触发事件的组件的一些属性值集合currentTarget`Target`当前组件的一些属性值集合detail`T`额外的信息preventDefault`() => void`阻止元素发生默认的行为stopPropagation`() => void`阻止事件冒泡到父元素,阻止任何父事件处理程序被执行
## BaseTouchEvent[​](common.html#basetouchevent)
参数类型说明touches`TouchDetail[]`触摸事件，当前停留在屏幕中的触摸点信息的数组changedTouches`TouchDetail[]`触摸事件，当前变化的触摸点信息的数组
## CanvasTouchEvent[​](common.html#canvastouchevent)
参数类型说明touches`TouchDetail[]`触摸事件，当前停留在屏幕中的触摸点信息的数组changedTouches`TouchDetail[]`触摸事件，当前变化的触摸点信息的数组
## ITouchEvent[​](common.html#itouchevent)
参数类型说明touches`TouchDetail[]`触摸事件，当前停留在屏幕中的触摸点信息的数组changedTouches`TouchDetail[]`触摸事件，当前变化的触摸点信息的数组
## CanvasTouch[​](common.html#canvastouch)
参数类型identifier`number`x`number`y`number`
## ITouch[​](common.html#itouch)
参数类型说明identifier`number`触摸点的标识符pageX`number`距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴pageY`number`距离文档左上角的距离，文档的左上角为原点 ，横向为X轴，纵向为Y轴clientX`number`距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴clientY`number`距离页面可显示区域（屏幕除去导航条）左上角距离，横向为X轴，纵向为Y轴
## Target[​](common.html#target)
参数类型说明id`string`事件源组件的idtagName`string`当前组件的类型dataset`{ [key: string]: any; }`事件源组件上由data-开头的自定义属性组成的集合
## currentTarget[​](common.html#currenttarget)
参数类型说明id`string`事件源组件的idtagName`string`当前组件的类型dataset`{ [key: string]: any; }`事件源组件上由data-开头的自定义属性组成的集合
## NetStatus[​](common.html#netstatus)
网络状态数据
参数类型必填videoBitrate`number`否audioBitrate`number`否videoFPSstring or number否videoGOP`number`否netSpeed`number`否netJitter`number`否videoWidthstring or number否videoHeightstring or number否
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
