# 与[虚拟列表](virtual-list.html)原理一致，通过只渲染**当前可视区域(visible viewport)**的视图，可以极大程度提升多列表渲染时的性能。
> v3.6.10 及以下不支持。

## 示例[​](virtual-waterfall.html#示例)
### 基础示例[​](virtual-waterfall.html#基础示例)

- React
- Vue
在 React Like 框架中我们可以直接从 `@tarojs/components-advanced` 引入虚拟瀑布流（VirtualWaterfall）组件：
```js
import { VirtualWaterfall } from `@tarojs/components-advanced`
```

一个最简单的长列表组件会像这样，`VirtualWaterfall` 的 6 个属性都是必填项：
```jsx
function buildData(offset = 0) {
 return Array(100)
 .fill(0)
 .map((_, i) => i + offset)
}

const Row = React.memo(({ id, index, data }) => {
 return (
 <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
 Row {index} : {data[index]}
 </View>
 )
})

export default class Index extends Component {
 state = {
 data: buildData(0),
 }

 render() {
 const { data } = this.state
 const dataLen = data.length
 return (
 <VirtualWaterfall
 height={800} /* 列表的高度 */
 width="100%" /* 列表的宽度 */
 item={Row} /* 列表单项组件，这里只能传入一个组件 */
 itemData={data} /* 渲染列表的数据 */
 itemCount={dataLen} /* 渲染列表的长度 */
 itemSize={100} /* 列表单项的高度 */
 />
 )
 }
}
```

在 Vue 中使用虚拟瀑布流，我们需要在入口文件声明使用：
```js
// app.js 入口文件
import Vue from 'vue'
import { VirtualWaterfall as registerVirtualWaterfall } from `@tarojs/components-advanced`
// Note: 使用以下路径导出插件可以在 vue 中获得更好的类型支持
// import registerVirtualWaterfall from '@tarojs/components-advanced/dist/components/virtual-waterfall/vue'

Vue.use(registerVirtualWaterfall)
```

一个最简单的长列表组件会像这样，`virtual-waterfall` 的 6 个属性都是必填项：
```html
<! –– row.vue 单项组件 ––>
<template>
 <view :id="id" :class="index % 2 ? 'ListItemOdd' : 'ListItemEven'"> Row {{ index }} : {{ data[index] }} </view>
</template>

<script>
 export default {
 props: ['id', 'index', 'data'],
 }
</script>

<! –– page.vue 页面组件 ––>
<template>
 <virtual-waterfall
 class="List"
 :height="500"
 :item-data="list"
 :item-count="list.length"
 :item-size="100"
 :item="Row"
 width="100%"
 />
</template>

<script>
 import { markRaw } from 'vue'
 import Row from './row.vue'

 function buildData(offset = 0) {
 return Array(100)
 .fill(0)
 .map((_, i) => i + offset)
 }

 export default {
 data() {
 return {
 Row: markRaw(Row),
 list: buildData(0),
 }
 },
 }
</script>
```

### 无限滚动[​](virtual-waterfall.html#无限滚动)
实现无限滚动也非常简单，我们只需要在列表滚动到底部时，往列表尾部追加数据即可：

- React
- Vue
```tsx
const Row = React.memo(({ id, index, data }) => {
 return (
 <View id={id} className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}>
 Row {index} : {data[index]}
 </View>
 )
})

function buildData(offset = 0) {
 return Array(100)
 .fill(0)
 .map((_, i) => i + offset)
}

export default class Index extends Component {
 state = {
 data: buildData(0),
 }

 loading = false

 listReachBottom() {
 Taro.showLoading()
 // 如果 loading 与视图相关，那它就应该放在 `this.state` 里
 // 我们这里使用的是一个同步的 API 调用 loading，所以不需要
 this.loading = true
 setTimeout(() => {
 const { data } = this.state
 this.setState(
 {
 data: data.concat(buildData(data.length)),
 },
 () => {
 this.loading = false
 Taro.hideLoading()
 }
 )
 }, 1000)
 }

 render() {
 const { data } = this.state
 const dataLen = data.length
 const itemSize = 100
 return (
 <VirtualWaterfall
 className="List"
 height={500}
 item={Row}
 itemData={data}
 itemCount={dataLen}
 itemSize={itemSize}
 width="100%"
 onScroll={({ scrollDirection, scrollOffset }) => {
 if (
 // 避免重复加载数据
 !this.loading &&
 // 只有往前滚动我们才触发
 scrollDirection === 'forward' &&
 // 5 = (列表高度 / 单项列表高度)
 // 100 = 滚动提前加载量，可根据样式情况调整
 scrollOffset > (dataLen - 5) * itemSize + 100
 ) {
 this.listReachBottom()
 }
 }}
 />
 )
 }
}
html
<template>
 <virtual-waterfall
 class="List"
 :height="500"
 :item-data="list"
 :item-count="dataLen"
 :item-size="itemHeight"
 :item="Row"
 width="100%"
 @scroll="onScroll"
 />
</template>

<script>
 import { markRaw } from 'vue'
 import Row from './row.vue'

 function buildData(offset = 0) {
 return Array(100)
 .fill(0)
 .map((_, i) => i + offset)
 }

 export default {
 data() {
 return {
 Row: markRaw(Row),
 list: buildData(0),
 loading: false,
 itemHeight: 100,
 }
 },
 computed: {
 dataLen() {
 return this.list.length
 },
 },
 methods: {
 listReachBottom() {
 Taro.showLoading()
 this.loading = true
 setTimeout(() => {
 const { data } = this.state
 this.setState(
 {
 data: data.concat(buildData(data.length)),
 },
 () => {
 this.loading = false
 Taro.hideLoading()
 }
 )
 }, 1000)
 },
 onScroll({ scrollDirection, scrollOffset }) {
 if (
 // 避免重复加载数据
 !this.loading &&
 // 只有往前滚动我们才触发
 scrollDirection === 'forward' &&
 // 5 = (列表高度 / 单项列表高度)
 // 100 = 滚动提前加载量，可根据样式情况调整
 scrollOffset > (this.dataLen - 5) * this.itemHeight + 100
 ) {
 this.listReachBottom()
 }
 },
 },
 }
</script>
```

## Props[​](virtual-waterfall.html#props)
### column[​](virtual-waterfall.html#column)
**> 类型：
**`> number
`
瀑布流占用列数量，默认值依照 `width / columnWidth ||= 2` 计算。
### columnWidth[​](virtual-waterfall.html#columnwidth)
**> 类型：
**`> number
`
瀑布流单列宽度，默认值依照 `width / column` 计算。
### height[​](virtual-waterfall.html#height)
**> 类型：
**`> number | string
`
列表的高度。
### width[​](virtual-waterfall.html#width)
**> 类型：
**`> number | string
`
列表的宽度。
### item (Required)[​](virtual-waterfall.html#item-required)

- React
- Vue
**> 类型：
**`> ReactComponent
`
推荐使用 `React.memo` 或 `React.PureComponent` 或使用 `shouldComponentUpdate()` 来优化此组件，避免不必要的渲染。
**> 类型：
**`> VueComponent
`
推荐使用 `markRaw` 或使用 `shallowReactive` 来优化此组件。
将要渲染的列表单项组件。组件的 `props` 有 4 个属性：

- `id`: 单项的 ID，必须传入组件的 `id` 中
- `index`: 组件渲染数据的索引
- `data`: 组件渲染的数据，同虚拟瀑布流 `itemData`
- `isScrolling`: 组件是否正在滚动，当 `useIsScrolling` 值为 `true` 时返回布尔值，否则返回 `undefined`
### itemCount (Required)[​](virtual-waterfall.html#itemcount-required)
**> 类型：
**`> number
`
列表的长度。
### itemData (Required)[​](virtual-waterfall.html#itemdata-required)
**> 类型：
**`> Array<any>
`
渲染数据。
### itemSize (Required)[​](virtual-waterfall.html#itemsize-required)
**> 类型：
**`> number ｜ (index?: number, itemData?: Array<any>) => number
`
列表单项的大小。
### unlimitedSize[​](virtual-waterfall.html#unlimitedsize)
**> 类型：
**`> boolean
`
解开高度列表单项大小限制，默认值使用: itemSize (请注意，初始高度与实际高度差异过大会导致隐患)。
### position[​](virtual-waterfall.html#position)
**> 类型：
**`> 'absolute' | 'relative' | 'brick'
`
布局方式，默认采用 "absolute"

- `> absolute
`> ：绝对定位布局模式，列表单项的位置由
`> top
`> 和
`> left
`> 决定

- `> relative
`> ：相对定位布局模式，插入前置节点替代未显示单项的高度

- `> brick
`> ：相对定位布局模式，未显示单项不移除，保留单项高度

- > 相比
`> relative
`> 模式
`> brick
`> 模式占用节点更多会导致一定性能问题，但保留未显示单项节点可提升部分场景显示速度

### initialScrollOffset (Default: 0)[​](virtual-waterfall.html#initialscrolloffset-default-0)
**> 类型：
**`> number
`
初始滚动偏移值。
### overscanDistance (Default: 50)[​](virtual-waterfall.html#overscandistance-default-50)
**> 类型：
**`> number
`
在可视区域之外预渲染的距离，值设置得越高，快速滚动时出现白屏的概率就越小，相应地，每次滚动的性能会变得越差。
> 建议至少大于等于 itemSize 的最大值，但不要设置超过虚拟瀑布流高度。

### placeholderCount (Default: 0)[​](virtual-waterfall.html#placeholdercount-default-0)
**> 类型：
**`> number
`
在可视区域之外占位的列表单项数量，值设置得越高，快速滚动时出现白屏的概率就越小，相应地，每次滚动的性能会变得越差。
### upperThreshold (Default: 50)[​](virtual-waterfall.html#upperthreshold-default-50)
**> 类型：
**`> number
`
距离顶部多远时触发 `onScrollToUpper` 函数，单位为 `px`
### lowerThreshold (Default: 50)[​](virtual-waterfall.html#lowerthreshold-default-50)
**> 类型：
**`> number
`
距离底部多远时触发 `onScrollToLower` 函数，单位为 `px`
### useIsScrolling[​](virtual-waterfall.html#useisscrolling)
**> 类型：
**`> boolean
`
是否注入 `isScrolling` 属性到 `item` 组件。这个参数一般用于实现滚动骨架屏（或其它 placeholder） 时比较有用。
### enhanced (Default: true)[​](virtual-waterfall.html#enhanced-default-true)
**> 类型：
**`> boolean
`
通过 ScrollViewContext 优化组件滚动性能
> 部分平台不支持，使用时请注意甄别

## Events[​](virtual-waterfall.html#events)
### scroll 事件[​](virtual-waterfall.html#scroll-事件)

- React
- Vue
`> onScroll: Function
`
`> v-on:scroll: Function
`
列表滚动时调用函数，函数的第一个参数为对象，由三个属性构成：

- `scrollDirection`，滚动方向，可能值为 `forward` 往前， `backward` 往后。
- `scrollOffset`，滚动距离
- `scrollUpdateWasRequested`, 当滚动是由 `scrollTo()` 或 `scrollToItem()` 调用时返回 `true`，否则返回 `false`
### onScrollNative[​](virtual-waterfall.html#onscrollnative)
**> 类型：
**`> Function
`
调用平台原生的滚动监听函数。
**> Vue:
**
```html
<virtual-waterfall
 class="List"
 :height="500"
 :item-data="list"
 :item-count="list.length"
 :item-size="100"
 :item="Row"
 width="100%"
 @scroll="onScroll"
 @scroll-native="onScrollNative"
/>
```

### onScrollToUpper[​](virtual-waterfall.html#onscrolltoupper)
**> 类型：
**`> Function
`
滚动到顶部时调用函数
### onScrollToLower[​](virtual-waterfall.html#onscrolltolower)
**> 类型：
**`> Function
`
滚动到底部时调用函数
## Slots & Components[​](virtual-waterfall.html#slots--components)
### 列表插槽[​](virtual-waterfall.html#列表插槽)

- React
- Vue
#### renderTop[​](virtual-waterfall.html#rendertop)
**> 类型：
**`> ReactComponent<{ id: string }>
`
顶部区域
#### renderBottom[​](virtual-waterfall.html#renderbottom)
**> 类型：
**`> ReactComponent<{ id: string }>
`
底部区域
支持 `top`、`bottom` 两个插槽，分别对应顶部和底部区域
```html
<virtual-waterfall class="List" :height="500" :item-data="list" :item-count="list.length" :item-size="100" :item="Row">
 <template #top>
 <view>top</view>
 </template>
 <template #bottom>
 <view>bottom</view>
 </template>
</virtual-waterfall>
```

### outerElementType[​](virtual-waterfall.html#outerelementtype)
列表外部容器组件类型。

- React
- Vue
**> 类型：
**`> ReactElement
`> ;
**> 默认值：
**`> ScrollView
`
**> 类型：
**`> string
`> ;
**> 默认值：
**`> 'scroll-view'
`
处于考虑适配小程序原因，不建议使用 `View` 替换 `ScrollView` 组件作为 `outerElementType`。
### innerElementType[​](virtual-waterfall.html#innerelementtype)
列表内部容器组件类型`。

- React
- Vue
**> 类型：
**`> ReactElement
`> ;
**> 默认值：
**`> View
`
此容器的 `parentNode` 是 `ScrollView`，`childNodes` 是列表。
**> 类型：
**`> string
`> ;
**> 默认值：
**`> 'view'
`
此容器的 `parentNode` 是 `scroll-view`，`childNodes` 是列表。
### itemElementType[​](virtual-waterfall.html#itemelementtype)
列表子节点容器组件类型。

- React
- Vue
**> 类型：
**`> ReactElement
`> ;
**> 默认值：
**`> View
`
**> 类型：
**`> string
`> ;
**> 默认值：
**`> 'view'
`
## Native Props[​](virtual-waterfall.html#native-props)
### 组件 ID[​](virtual-waterfall.html#组件-id)
`> id: string
`
根组件 ID，用于标识组件，不传入时会自动生成。
### 组件 CSS 类[​](virtual-waterfall.html#组件-css-类)

- React
- Vue
`> className: string
`
`> class: string
`
根组件 CSS 类。
### 组件 CSS 样式[​](virtual-waterfall.html#组件-css-样式)
`> style: Style
`
根组件的 CSS 样式。
### 其它 `ScrollView` 参数[​](virtual-waterfall.html#其它-scrollview-参数)
除了以上参数，所有 `ScrollView` 组件的参数都可以传入 `VirtualWaterfall` 组件，冲突时优先使用以上文档描述的参数。
## Methods[​](virtual-waterfall.html#methods)
通过 `React.createRef()` 创建 ref，挂载到 `VirtualWaterfall` 上可以访问到 `VirtualWaterfall` 的内部方法：
```jsx
export default class Index extends Component {
 state = {
 data: buildData(0),
 }

 list = React.createRef()

 componentDidMount() {
 const list = this.list.current
 list.scrollTo()
 list.scrollToItem()
 }

 render() {
 const { data } = this.state
 const dataLen = data.length
 return (
 <VirtualWaterfall
 height={500} /* 列表的高度 */
 width="100%" /* 列表的宽度 */
 item={Row} /* 列表单项组件，这里只能传入一个组件 */
 itemData={threads} /* 渲染列表的数据 */
 itemCount={threads.length} /* 渲染列表的长度 */
 itemSize={100} /* 列表单项的高度 */
 />
 )
 }
}
```

### scrollTo[​](virtual-waterfall.html#scrollto)
`(scrollOffset: number, enhanced?: boolean): void`
滚动到指定的地点。
> enhanced 默认为 props 传入的 enhanced 值。

### scrollToItem[​](virtual-waterfall.html#scrolltoitem)
`(index: number, align: string = "auto", enhanced?: boolean): void`
滚动到指定的条目。
第二参数 `align` 的值可能为：

- `auto`: 尽可能滚动距离最小保证条目在可视区域中，如果已经在可视区域，就不滚动
- `smart`: 条目如果已经在可视区域，就不滚动；如果有部分在可视区域，尽可能滚动距离最小保证条目在可视区域中；如果条目完全不在可视区域，那就滚动到条目在可视区域居中显示
- `center`: 让条目在可视区域居中显示
- `end`: 让条目在可视区域末尾显示
- `start`: 让条目在可视区域末尾显示
> enhanced 默认为 props 传入的 enhanced 值。

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
- [``](virtual-waterfall.html#其它-scrollview-参数)

- 

- 
-
