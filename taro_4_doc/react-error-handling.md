# React 和小程序都提供了各自的错误处理方法，本节将介绍如何在 Taro 中结合使用。
## 错误边界[​](react-error-handling.html#错误边界)
React 16 引入了[错误边界](https://reactjs.org/docs/error-boundaries.html)的概念，相比于 `try catch` 和小程序的全局错误监听回调 `App onError`，它的优点在于能捕获 React 渲染过程中的错误和显示兜底界面。
备注
错误边界不能捕获以下错误：

- 事件回调
- 异步代码，如 `setTimeout` 回调
- 错误边界组件自身的渲染错误
前两点建议直接使用 `try catch` 或 `App onError` 进行处理，第三点将在后文中介绍。
### 页面组件自身作为错误边界[​](react-error-handling.html#页面组件自身作为错误边界)
正如 React 文档所指出的，错误边界的颗粒度可以由开发者自行选择。如果要捕获**页面内子组件**的错误，可以把页面组件自身作为错误边界。
**示例代码：**
pages/index/index.jsx
```jsx
class BuggyCounter extends Component {
 state = {
 counter: 0,
 }

 handleClick = () => {
 this.setState(({ counter }) => ({
 counter: counter + 1,
 }))
 }

 render() {
 if (this.state.counter === 2) {
 // 模拟 JS 报错
 throw new Error('I crashed!')
 }
 return <Button onClick={this.handleClick}>{this.state.counter}</Button>
 }
}

// 页面组件自身作为错误边界
export default class Index extends Component {
 state = {
 hasError: null,
 }

 static getDerivedStateFromError() {
 return {
 hasError: true,
 }
 }

 componentDidCatch(error, errorInfo) {
 console.log(error, errorInfo)
 }

 render() {
 return this.state.hasError ? (
 // 异常时显示兜底 UI
 <View>Something went wrong.</View>
 ) : (
 // 正常显示
 <BuggyCounter></BuggyCounter>
 )
 }
}
```

### 捕获页面组件自身的错误[​](react-error-handling.html#捕获页面组件自身的错误)
> 相关讨论：
[> #8191
](https://github.com/NervJS/taro/pull/8191)
还记得错误边界的第三个限制**“不能捕获错误边界组件自身的渲染错误”**吗？如果我们把页面组件自身作为错误边界，这时是不能捕获其自身的错误的，因此我们需要再创建一个错误边界组件以包裹我们的页面组件。
可以使用高阶组件为页面组件嵌套错误边界，如果页面组件为 Class Component，还需要对 Taro 的生命周期进行额外处理。因此建议这种情况下，页面组件使用 Functional Component 的写法。
**示例代码：**

- Class Component
- Functional Componentpages/index/index.jsx
```jsx
import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'

// 页面组件
class Index extends Component {
 state = {
 counter: 0,
 }

 componentDidShow() {
 console.log('show')
 }

 componentDidHide() {
 console.log('hide')
 }

 onShareAppMessage() {
 return {
 title: 'myShareTitle',
 }
 }

 handleClick = () => {
 this.setState(({ counter }) => ({
 counter: counter + 1,
 }))
 }

 render() {
 if (this.state.counter === 2) {
 // 模拟 JS 报错
 throw new Error('I crashed!')
 }
 return <Button onClick={this.handleClick}>{this.state.counter}</Button>
 }
}

// 使用 HOC 以方便为各个页面复用这段逻辑
function createErrorBoundary(Page) {
 return class ErrorBoundary extends Component {
 el = React.createRef()
 state = {
 hasError: null,
 }

 static getDerivedStateFromError() {
 return {
 hasError: true,
 }
 }

 componentDidCatch(error, errorInfo) {
 console.log(error, errorInfo)
 }

 /* Start 需要手动调用页面组件上的生命周期方法 **/
 componentDidShow() {
 return this.el.current?.componentDidShow?.()
 }

 componentDidHide() {
 return this.el.current?.componentDidHide?.()
 }

 onShareAppMessage() {
 return this.el.current?.onShareAppMessage?.()
 }

 //...

 /* End 需要手动调用页面组件上的生命周期方法 **/

 render() {
 return this.state.hasError ? <View>Something went wrong.</View> : <Page ref={this.el} />
 }
 }
}

export default createErrorBoundary(Index)
```
pages/index/index.jsx
```jsx
import { Component, useEffect, useState } from 'react'
import { View, Button } from '@tarojs/components'
import { useDidShow, useDidHide, useShareAppMessage } from '@tarojs/taro'

function Index() {
 const [counter, setCounter] = useState(0)

 useDidShow(() => console.log('show'))

 useDidHide(() => console.log('hide'))

 useShareAppMessage(() => ({ title: 'myShareTitle' }))

 function handleClick() {
 setCounter(counter + 1)
 }

 useEffect(() => {
 if (counter === 2) {
 // 模拟 JS 报错
 throw new Error('I crashed!')
 }
 })

 return <Button onClick={handleClick}>{counter}</Button>
}

// 使用 HOC 以方便为各个页面复用这段逻辑
function createErrorBoundary(Page) {
 return class ErrorBoundary extends Component {
 state = {
 hasError: null,
 }

 static getDerivedStateFromError() {
 return {
 hasError: true,
 }
 }

 componentDidCatch(error, errorInfo) {
 console.log(error, errorInfo)
 }

 render() {
 return this.state.hasError ? <View>Something went wrong.</View> : <Page />
 }
 }
}

export default createErrorBoundary(Index)
```

## App onError[​](react-error-handling.html#app-onerror)
信息
Taro v3.5+ 开始支持

- React 渲染流程之外的 JS 错误都能被其监听到。
- 当渲染错误没有被开发者设置的错误边界捕获时，渲染报错都可以被监听到。
**示例代码：**

- Class Component
- Functional Componentapp.js
```jsx
import { Component } from 'react'

export default class App extends Component {
 onError(error) {
 console.log(error)
 }

 render() {
 return this.props.children
 }
}
```
app.js
```jsx
import { useError } from '@tarojs/taro'

export default function App(props) {
 useError((error) => console.log(error))

 return props.children
}
```

- 

- 
- 

-
