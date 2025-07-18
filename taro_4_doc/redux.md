# 在 Taro 中可以自由地使用 React 生态中非常流行的数据流管理工具 [Redux](https://redux.js.org/) 来解决复杂项目的数据管理问题。
## 安装[​](redux.html#安装)
首先请安装 `redux` 、 `react-redux` 和 `redux-thunk` 、 `redux-logger` 等一些需要用到的 redux 中间件：
```bash
$ yarn add redux react-redux redux-thunk redux-logger
# 或者使用 npm
$ npm install --save redux react-redux redux-thunk redux-logger
```

## 例子[​](redux.html#例子)

- 运行 `taro init` 命令时选择 React -> redux 即可创建 react-redux 模板项目
- [Todo App](https://github.com/NervJS/TodoMVC)
## 使用[​](redux.html#使用)
### 创建 `store` 与配置中间件[​](redux.html#创建-store-与配置中间件)
在项目中新建 `src/store/index.js` 文件用来配置 `store`，按自己喜好设置 redux 的中间件，例如下面例子中使用了 `redux-thunk` 和 `redux-logger` 这两个中间件：
src/store/index.js
```jsx
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers =
 typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
 // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
 })
 : compose

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
 middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
 applyMiddleware(...middlewares)
 // other store enhancers if any
)

export default function configStore() {
 const store = createStore(rootReducer, enhancer)
 return store
}
```

接下来在项目入口文件 `app.js` 中使用 react-redux 中提供的 `Provider` 组件将上一步写好的 `store` 接入应用中：
src/app.js
```jsx
import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'

const store = configStore()

class App extends Component {
 render() {
 return <Provider store={store}>{this.props.children}</Provider>
 }
}

export default App
```

随后就可以开始使用了。如 `redux` 推荐的那样，可以增加：

- `constants` 目录，用来放置所有的 `action type` 常量。
- `actions` 目录，用来放置所有的 `actions`。
- `reducers` 目录，用来放置所有的 `reducers`。
接下来将演示如何使用 redux 开发一个简单的加、减计数器功能。
### 新增 `action type`[​](redux.html#新增-action-type)
src/constants/counter.js
```jsx
export const ADD = 'ADD'
export const MINUS = 'MINUS'
```

### 新增 `reducers`[​](redux.html#新增-reducers)
src/reducers/counter.js
```jsx
import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
 num: 0,
}

export default function counter(state = INITIAL_STATE, action) {
 switch (action.type) {
 case ADD:
 return {
 ...state,
 num: state.num + 1,
 }
 case MINUS:
 return {
 ...state,
 num: state.num - 1,
 }
 default:
 return state
 }
}
```
src/reducers/index.js
```jsx
import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
 counter,
})
```

### 新增 `actions`[​](redux.html#新增-actions)
src/actions/counter.js
```jsx
import { ADD, MINUS } from '../constants/counter'

export const add = () => {
 return {
 type: ADD,
 }
}
export const minus = () => {
 return {
 type: MINUS,
 }
}

// 异步的 action
export function asyncAdd() {
 return (dispatch) => {
 setTimeout(() => {
 dispatch(add())
 }, 2000)
 }
}
```

### 在页面、组件中使用 `store`[​](redux.html#在页面组件中使用-store)
最后，我们可以在页面（或者组件）中进行使用，我们将通过 react-redux 提供的 `connect` 方法将 `store` 与我们的页面进行连接：
src/pages/index/index.js
```jsx
import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'

@connect(
 ({ counter }) => ({
 counter,
 }),
 (dispatch) => ({
 add() {
 dispatch(add())
 },
 dec() {
 dispatch(minus())
 },
 asyncAdd() {
 dispatch(asyncAdd())
 },
 })
)
class Index extends Component {
 render() {
 return (
 <View className="index">
 <Button className="add_btn" onClick={this.props.add}>
 +
 </Button>
 <Button className="dec_btn" onClick={this.props.dec}>
 -
 </Button>
 <Button className="dec_btn" onClick={this.props.asyncAdd}>
 async
 </Button>
 <View>
 <Text>{this.props.counter.num}</Text>
 </View>
 </View>
 )
 }
}

export default Index
```

`connect` 方法接受两个参数 `mapStateToProps` 与 `mapDispatchToProps`

- `mapStateToProps`，函数类型，接受最新的 `state` 作为参数，用于将 `state` 映射到组件的 `props`
- `mapDispatchToProps`，函数类型，接收 `dispatch()` 方法并返回期望注入到展示组件的 `props` 中的回调方法
## React Redux Hooks[​](redux.html#react-redux-hooks)
在**函数式组件**中可以使用 react-redux 提供的 Hooks API 连接、操作 `store`。
### `useSelector`[​](redux.html#useselector)
[useSelector](https://react-redux.js.org/api/hooks#useselector) 允许你使用 selector 函数从 store 中获取数据。
使用
```ts
const result: any = useSelector(selector: Function, equalityFn?: Function)
```

selector 函数大致相当于 `connect` 函数的 `mapStateToProps` 参数。selector 会在组件每次渲染时调用。`useSelector` 同样会订阅 redux store，在 redux action 被 dispatch 时调用。
但 `useSelector` 还是和 `mapStateToProps` 有一些不同：

- 不像 `mapStateToProps` 只返回对象一样，selector 可能会返回任何值。
- 当一个 action dispatch 时，`useSelector` 会把 selector 的前后返回值做一次浅对比，如果不同，组件会强制更新。
- selector 函数不接受 `ownProps` 参数。但 selector 可以通过闭包访问函数式组件传递下来的 props。
#### 使用案例[​](redux.html#使用案例)
基本使用：
```jsx
import { Component } from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
 const counter = useSelector((state) => state.counter)
 return <View>{counter}</View>
}
```

使用闭包决定如何 select 数据：
```jsx
export const TodoListItem = (props) => {
 const todo = useSelector((state) => state.todos[props.id])
 return <View>{todo.text}</View>
}
```

进阶使用：
你还可以访问 [react-redux 文档](https://react-redux.js.org/api/hooks#using-memoizing-selectors) 了解如何使用 `reselect` 缓存 selector。
### `useDispatch`[​](redux.html#usedispatch)
[useDispatch](https://react-redux.js.org/api/hooks#usedispatch) 返回 redux store 的 `dispatch` 引用。你可以使用它来 dispatch actions。
使用
```js
const dispatch = useDispatch()
```

#### 使用案例[​](redux.html#使用案例-1)
```jsx
import { Component } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
 const dispatch = useDispatch()

 return (
 <View>
 <Text>{value}</Text>
 <Button onClick={() => dispatch({ type: 'increment-counter' })}>Increment counter</Button>
 </View>
 )
}
```

当我们使用 `dispatch` 传递回调到一个子组件时，推荐使用 `useCallback` 把回调缓存起来，因为组件可能因为引用改变而重新渲染。
```jsx
// CounterComponent.js
export const CounterComponent = ({ value }) => {
 const dispatch = useDispatch()
 const incrementCounter = useCallback(() => dispatch({ type: 'increment-counter' }), [dispatch])

 return (
 <View>
 <Text>{value}</Text>
 <MyIncrementButton onIncrement={incrementCounter} />
 </View>
 )
}

// IncrementButton.js
const MyIncrementButton = ({ onIncrement }) => <Button onClick={onIncrement}>Increment counter</Button>

export default Taro.memo(MyIncrementButton)
```

### `useStore`[​](redux.html#usestore)
[useStore](https://react-redux.js.org/api/hooks#usestore) 返回一个 store 引用，和 `Provider` 组件引用完全一致。
使用
```js
const store = useStore()
```

> 这个 hook 可能并不经常使用。
`> useSelector
`> 大部分情况是你的第一选择，如果需要替换 reducers 的情况下可能会使用到这个 API。

#### 使用案例[​](redux.html#使用案例-2)
```jsx
import { Component } from 'react'
import { useStore } from 'react-redux'

export const CounterComponent = ({ value }) => {
 const store = useStore()

 // EXAMPLE ONLY! Do not do this in a real app.
 // The component will not automatically update if the store state changes
 return <div>{store.getState()}</div>
}
```

## 持久化[​](redux.html#持久化)
开发者可以使用 [redux-presist](https://github.com/rt2zz/redux-persist) 对 store 的数据进行持久化。
用法及相关讨论请参考 [#6548](https://github.com/NervJS/taro/issues/6548)，其中有两个需要注意的点：

- 配置 `persistConfig` 把 storage API 替换为 Taro Storage API，请参考 [redux-persist-taro-storage](https://github.com/imtcn/redux-persist-taro-storage)。
- `<PersistGate>` 的使用，请参考 [@ryougifujino 的回答](https://github.com/NervJS/taro/issues/6548#issuecomment-816529998)。
- 
- 
- 

- [``](redux.html#创建-store-与配置中间件)
- [``](redux.html#新增-action-type)
- [``](redux.html#新增-reducers)
- [``](redux.html#新增-actions)
- [``](redux.html#在页面组件中使用-store)

- 

- [``](redux.html#useselector)
- [``](redux.html#usedispatch)
- [``](redux.html#usestore)

-
