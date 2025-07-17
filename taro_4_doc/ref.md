# 在 Web 开发中，常用的节点获取方法包括了 `document.getElementById` 等 DOM API，以及各开发框架的 `ref` 语法。而在 Taro 中，一般情况下建议使用 `ref` 语法来获取节点。但受限于[小程序平台的实现机制](implement-note.html#%E8%BF%90%E8%A1%8C%E6%97%B6)，如果需要获取节点的**尺寸、定位等与渲染有关的信息**，开发者需要使用 `Taro.createSelectorQuery` API 来获取节点。
## ref 语法[​](ref.html#ref-语法)
Taro 支持使用 React / Vue 等开发框架的 `ref` 语法来获取节点。开发者可以对这些节点进行一些操作，例如：调用节点的方法、设置属性等，但在小程序平台中不能获取到节点的尺寸信息。
信息
不同平台 ref 获取到的节点类型不同，但 Taro 尽量保证了这些节点具有统一的属性与 API。

- H5 Ref 类型：Taro 组件实例，一般是 WebComponents。
- 小程序 Ref 类型：Taro 虚拟 DOM 节点，如 TaroElement。存在于逻辑层，因此不携带节点尺寸信息。
- RN Ref 类型：Taro 组件实例。
- React
- Vue 2
- Vue 3示例代码
```tsx
import { useRef } from 'react'
import { Input, Button } from '@tarojs/components'

export default function Index () {
 const inputRef = useRef<HTMLInputElement>(null)

 function handleClick() {
 inputRef.current?.focus()
 }

 return (
 <>
 <Input ref={inputRef} />
 <Button onClick={handleClick}>Focus the input</Button>
 </>
 )
}
```
示例代码
```html
<template>
 <view>
 <input ref="inputRef" />
 <button @tap="handleClick">Focus the input</button>
 </view>
</template>

<script>
 export default {
 methods: {
 handleClick () {
 this.$refs.inputRef.focus()
 }
 }
 }
</script>
```
示例代码
```html
<template>
 <input ref="inputRef" />
 <button @tap="handleClick">Focus the input</button>
</template>

<script setup>
 import { ref } from 'vue'

 const inputRef = ref(null)

 function handleClick () {
 inputRef.value.focus()
 }
</script>
```

## 获取节点尺寸信息[​](ref.html#获取节点尺寸信息)
使用 `Taro.createSelectorQuery` API 可以获取到节点的尺寸、定位等与渲染有关的信息。考虑到小程序的实现机制，需要配合在 `onReady` 生命周期中获取节点信息。
提示
各个小程序的渲染机制不同，导致了小程序生命周期和 Taro React / Vue 生命周期的触发顺序也不尽相同。如果存在获取节点失败的情况，请尝试使用 `Taro.nextTick` 或 `setTimeout` 等方法增加延时。

- React
- Vue 2
- Vue 3示例代码
```tsx
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

export default function Index () {
 useReady(() => {
 // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
 Taro.createSelectorQuery()
 .select('#target')
 .boundingClientRect()
 .exec(res => console.log(res))
 })

 return (
 <View id="target"></View>
 )
}
```
示例代码
```html
<template>
 <view id="target" />
</template>

<script>
 import Taro from '@tarojs/taro'

 export default {
 onReady() {
 // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
 Taro.createSelectorQuery()
 .select('#target')
 .boundingClientRect()
 .exec(res => console.log(res))
 }
 }
</script>

```
示例代码
```html
<template>
 <view id="target" />
</template>

<script setup>
 import Taro, { useReady } from '@tarojs/taro'

 useReady(() => {
 // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
 // Vue3 需要使用 Taro.nextTick 确保已经渲染完成
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .select('#target')
 .boundingClientRect()
 .exec(res => console.log(res))
 })
 })
</script>
```

### 在子组件中获取[​](ref.html#在子组件中获取)
`onReady` 是页面级别的生命周期，如果需要在子组件中调用 `Taro.createSelectorQuery`，建议使用 `useReady` 钩子。
若开发者没有使用 React Hook 或 Vue3 Composition API，则需要基于 Taro 的事件通讯机制，监听页面 `onReady` 的调用，请参考：[React](react-page.html#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onready)、[Vue](vue-page.html#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84-onready)。

- React
- Vue 3示例代码
```tsx
import { View } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'

function Comp () {
 useReady(() => {
 // 初次渲染时，在小程序触发 onReady 后，才能获取小程序的渲染层节点
 Taro.createSelectorQuery()
 .select('#target')
 .boundingClientRect()
 .exec((res) => console.log(res))
 })

 return (
 <View id="target"></View>
 )
}

export default function Index () {
 return (
 <Comp></Comp>
 )
}
```
示例代码
```html
<!-- page -->
<template>
 <comp></comp>
</template>

<script setup>
 import Comp from './comp'
</script>

<!-- component -->
<template>
 <view id="target" />
</template>

<script setup>
 import Taro, { useReady } from '@tarojs/taro'

 useReady(() => {
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .select('#target')
 .boundingClientRect()
 .exec(res => console.log(res))
 })
 })
</script>
```

### 在懒加载组件中获取[​](ref.html#在懒加载组件中获取)
另一个常见的场景则是使用了懒加载的组件。当它们挂载时，页面的 `onReady` 早已触发，这时需要配合使用 `Taro.nextTick` API 才能成功获取到节点信息。

- React
- Vue 3示例代码
```tsx
import { View, Button, Canvas } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'

export default function Index () {
 const [isShow, setIsShow] = useState(false)

 return (
 <View>
 <Button onClick={() => setIsShow(true)}>Load Component</Button>
 {isShow && <LazyFloor></LazyFloor>}
 </View>
 )
}

function LazyFloor () {
 useEffect(() => {
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })
 }, [])
 return (
 <View>
 <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
 </View>
 )
}
```
示例代码
```html
<!-- page -->
<template>
 <view>
 <button @tap="isShow = true">Load Component</button>
 <LazyFloor v-if="isShow"></LazyFloor>
 </view>
</template>

<script setup>
 import { ref } from 'vue'
 import LazyFloor from './lazyFloor'

 const isShow = ref(false)
</script>

<!-- component -->
<template>
 <view>
 <canvas canvas-id='canvas' class='ec-canvas'></canvas>
 </view>
</template>

<script setup>
 import Taro from '@tarojs/taro'
 import { onMounted } from 'vue'

 onMounted(() => {
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })
 })
</script>
```

### 在更新渲染时获取[​](ref.html#在更新渲染时获取)
上述讨论的都是初次渲染的情况，如果需要在更新渲染时获取节点信息，可以在 `componentDidUpdate`、 `useEffect`（React）或 `onUpdated`（Vue3）等更新渲染完成钩子中配合 `nextTick` 获取。用法和[懒加载组件](ref.html#%E5%9C%A8%E6%87%92%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6%E4%B8%AD%E8%8E%B7%E5%8F%96)类似。
### 使用了 CustomWrapper 时[​](ref.html#使用了-customwrapper-时)
提示
如果你的项目只需要运行在小程序端，也可以使用 `>>>` 选择器来解决：[#7411](https://github.com/NervJS/taro/issues/7411)
在小程序平台，每个 `CustomWrapper` 实例对应一个原生自定义组件。小程序规定，如果要获取自定义组件内的节点，必须调用 `.in` 方法，其中 `scope` 是对应的自定义组件实例：`Taro.createSelectorQuery().in(scope)`。
对应在 Taro 中，开发者可以先使用 ref 获取 `CustomWrapper` 实例，然后通过其 `ctx` 属性获取到 `scope`，例子：

- React
- Vue 3示例代码
```tsx
import { View, Canvas, CustomWrapper } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { createRef } from 'react'

export default function Index () {
 const wrapperRef = createRef()

 useReady(() => {
 Taro.createSelectorQuery()
 .in(wrapperRef.current.ctx)
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })

 return (
 <View>
 <CustomWrapper ref={wrapperRef}>
 <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
 </CustomWrapper>
 </View>
 )
}
```
示例代码
```html
<template>
 <view>
 <custom-wrapper ref="wrapperRef">
 <canvas canvas-id='canvas' class='ec-canvas'></canvas>
 </custom-wrapper>
 </view>
</template>

<script setup>
 import Taro, { useReady } from '@tarojs/taro'
 import { ref } from 'vue'

 const wrapperRef = ref()

 useReady(() => {
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .in(wrapperRef.value.ctx)
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })
 })
</script>
```

### 嵌套层级超过 baseLevel 时[​](ref.html#嵌套层级超过-baselevel-时)
提示
如果你的项目只需要运行在小程序端，也可以使用 `>>>` 选择器来解决：[#7411](https://github.com/NervJS/taro/issues/7411)
在微信以及京东小程序平台，当组件的嵌套层级超过 [baseLevel](config-detail.html#minibaselevel)（默认 16 层）时，Taro 内部会创建一个原生自定义组件协助开启更深层次的嵌套，因此获取超过 baseLevel 层级的节点时会失败。这时我们需要借助 `CustomWrapper` 来解决这个问题：

- React
- Vue 3示例代码
```tsx
import { View, Canvas, CustomWrapper } from '@tarojs/components'
import Taro, { useReady } from '@tarojs/taro'
import { createRef } from 'react'

export default function Index () {
 const wrapperRef = createRef()

 useReady(() => {
 Taro.createSelectorQuery()
 .in(wrapperRef.current.ctx)
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })

 return (
 <View><View><View><View>
 <View><View><View><View>
 <View><View><View><View>
 <CustomWrapper ref={wrapperRef}>
 <View><View><View><View>
 <Canvas canvasId='canvas' className='ec-canvas'></Canvas>
 </View></View></View></View>
 </CustomWrapper>
 </View></View></View></View>
 </View></View></View></View>
 </View></View></View></View>
 )
}
```
示例代码
```html
<template>
 <view><view><view><view>
 <view><view><view><view>
 <view><view><view><view>
 <custom-wrapper ref="wrapperRef">
 <view><view><view><view>
 <canvas canvas-id='canvas' class='ec-canvas'></canvas>
 </view></view></view></view>
 </custom-wrapper>
 </view></view></view></view>
 </view></view></view></view>
 </view></view></view></view>
</template>

<script setup>
 import Taro, { useReady } from '@tarojs/taro'
 import { ref } from 'vue'

 const wrapperRef = ref()

 useReady(() => {
 Taro.nextTick(() => {
 Taro.createSelectorQuery()
 .in(wrapperRef.value.ctx)
 .select(`.ec-canvas`)
 .fields({ node: true, size: true })
 .exec(res => console.log('res: ', res))
 })
 })
</script>
```

- 
- 

- 
- 
- 
- 
-
