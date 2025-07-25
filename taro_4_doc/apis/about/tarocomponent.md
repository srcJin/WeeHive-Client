# `Taro.Component` 是一个抽象基础类，因此直接引用 `Taro.Component` 几乎没意义。相反，你通常会继承自它，并至少定义一个 `render()` 方法。
通常你定义一个 `Taro` 组件相当于一个纯 `JavaScript` 类：
```jsx
class Welcome extends Component {
 render () {
 return <h1>Hello, {this.props.name}</h1>
 }
}
```

> 这里 Taro 和 React 不一样的地方在于没有暴露出一个
`> createClass
`> 的方法，你只能用 ES6 的 class 类来创建 Taro 组件。

## 组件生命周期[​](tarocomponent.html#组件生命周期)
每一个组件都有几个你可以重写以让代码在处理环节的特定时期运行的“生命周期方法”。方法中带有前缀 `will` 的在特定环节之前被调用，而带有前缀 `did` 的方法则会在特定环节之后被调用。
#### 装载(Mounting)[​](tarocomponent.html#装载mounting)
这些方法会在组件实例被创建和插入 DOM 中时被调用：

- `constructor()`
- `componentWillMount()`
- `render()`
- `componentDidMount()`
#### 更新(Updating)[​](tarocomponent.html#更新updating)
属性或状态的改变会触发一次更新。当一个组件在被重新渲染时，这些方法将会被调用：

- `componentWillReceiveProps()`
- `shouldComponentUpdate()`
- `componentWillUpdate()`
- `render()`
- `componentDidUpdate()`
#### 卸载(Unmounting)[​](tarocomponent.html#卸载unmounting)
当一个组件被从 DOM 中移除时，该方法被调用：

- `componentWillUnmount()`
#### 其他 API[​](tarocomponent.html#其他-api)
每一个组件还提供了其他的 API：

- `setState()`
- `forceUpdate()`
#### 类属性[​](tarocomponent.html#类属性)

- `defaultProps`
#### 实例属性[​](tarocomponent.html#实例属性)

- `props`
- `state`
- `config`（小程序专属）
## 参考[​](tarocomponent.html#参考)
### render()[​](tarocomponent.html#render)
`render()` 方法是必须的。
当被调用时，`render` 方法必须返回一个 Taro 组件（可以是内置组件也可以是自定义组件）或一个 [falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 的值。
`render()` 函数应该纯净，意味着其不应该改变组件的状态，其每次调用都应返回相同的结果，同时不直接和浏览器/小程序交互。若需要和浏览器/小程序交互，将任务放在`componentDidMount()` 阶段或其他的生命周期方法。保持 `render()` 方法纯净使得组件更容易思考。
> 在 React/Nerv 中，
`> render()
`> 可以返回多种数据结构，但 Taro 暂时只支持两种。因为 Taro 必须把 JSX 编译成微信小程序模板。当 return 的值为
`> falsy
`> 时，实际上会编译成小程序的
`> wx:if
`> 标签。

### constructor()[​](tarocomponent.html#constructor)
```jsx
constructor(props)
```

Taro 组件的构造函数将会在装配之前被调用。当为一个 `Taro.Component` 子类定义构造函数时，你应该在任何其他的表达式之前调用 `super(props)`。否则，this.props 在构造函数中将是未定义，并可能引发异常。
构造函数是初始化状态的合适位置。若你不初始化状态且不绑定方法，那你也不需要为你的 Taro 组件定义一个构造函数。
> 在 Taro 中，即便你不写 constructor()，编译到微信小程序时也会自动给你加上，因为 Taro 运行时框架需要在 constructor() 中多做一些事情。

可以基于属性来初始化状态。这样有效地“分离（forks）”属性并根据初始属性设置状态。
### `static getDerivedStateFromProps()`[​](tarocomponent.html#static-getderivedstatefromprops)
> 自 v1.3.0 起可用

```jsx
static getDerivedStateFromProps(props, state)
```

`getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
此方法无权访问组件实例（this）。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在 `getDerivedStateFromProps()` 和其他 class 方法之间重用代码。
和 `componentWillReceiveProps` 不同，`getDerivedStateFromProps` 会在每次 `render` 前触发此方法，而 `componentWillReceiveProps` 会在父组件重新渲染时调用。
```jsx
export default class ButtonSelectable extends Component {
 static propTypes = {
 selected: PropTypes.bool,
 onClick: PropTypes.func
 };

 constructor(props) {
 super(props);

 this.state = {
 isSelected: props.selected
 };
 }

 static getDerivedStateFromProps(props, state) {
 if (props.selected !== state.isSelected) {
 return {
 isSelected: props.selected
 };
 }

 return null;
 }

 handleClick = event => {
 this.setState({
 isSelected: !this.state.isSelected
 });
 };

 render() {
 return (
 <Button
 className={`B-selectable ${
 this.state.isSelected ? "button-selectable-selected" : ""
 }`}
 onClick={this.handleClick}
 >
 {this.state.isSelected ? "Selected!" : "Not selected..."}
 </Button>
 );
 }
}

```

> 请注意： getDerivedStateFromProps() 如果存在，
`> componentWillReceiveProps
`> 、
`> componentWillMount
`> 和
`> componentWillUpdate
`> 将不会调用。 当你需要在以上老生命周期 setState 时，我们更推荐你使用 getDerivedStateFromProps 方法，因为它能减少一次更新开销。

### getSnapshotBeforeUpdate()[​](tarocomponent.html#getsnapshotbeforeupdate)
> 自 v1.3.0 起可用

```jsx
getSnapshotBeforeUpdate(prevProps, prevState)
```

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。
应返回 snapshot 的值（或 null）。
> 请注意： getSnapshotBeforeUpdate() 如果存在，
`> componentWillReceiveProps
`> 、
`> componentWillMount
`> 和
`> componentWillUpdate
`> 将不会调用。 当你需要在以上老生命周期 setState 时，我们更推荐你使用
`> getSnapshotBeforeUpdate
`> 方法，因为它能减少一次更新开销。

### componentWillMount()[​](tarocomponent.html#componentwillmount)
```jsx
componentWillMount()
```

`componentWillMount()` 在组件在装载发生前被立刻调用。
避免在该方法中引入任何的副作用或订阅。对于这些使用场景，我们推荐使用 constructor() 来替代。
这是唯一的会在服务端渲染调起的生命周期钩子函数。
> componentWillMount() 在小程序里对应的生命周期是
`> onLoad
`
### componentDidMount()[​](tarocomponent.html#componentdidmount)
```jsx
componentDidMount()
```

componentDidMount() 在组件被装载后立即调用。初始化使得 DOM 节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里 `setState()` 将会触发重新渲染。
### componentWillReceiveProps()[​](tarocomponent.html#componentwillreceiveprops)
```jsx
componentWillReceiveProps(nextProps)
```

`componentWillReceiveProps()` 在已经装载的组件接收到新属性前调用。若你需要更新状态响应属性改变，你可能需对比 `this.props` 和 `nextProps` 并在该方法中使用 `this.setState()` 处理状态改变。
注意即使属性未有任何改变，Taro 可能也会调用该方法，因此若你想要处理改变，请确保比较当前和之后的值。
在装载期间，Taro 并不会调用带有初始属性的 `componentWillReceiveProps`方法。调用 `this.setState` 通常不会触发 `componentWillReceiveProps`。
### shouldComponentUpdate()[​](tarocomponent.html#shouldcomponentupdate)
```jsx
shouldComponentUpdate(nextProps, nextState)
```

使用 `shouldComponentUpdate()` 让 Taro 知道组件的输出是否不受 state 或 props 当前变化的影响。 默认行为是在每次 state 更改时重新渲染，并且在绝大多数情况下，你应该依赖于默认行为。
当接收到新的 props 或 state 时，`shouldComponentUpdate()` 在渲染之前被调用。 默认返回 true ，对于初始(第一次)渲染 或 使用 `forceUpdate()` 时，不调用此方法。
返回 `false` 不会阻止子组件在 state 更改时重新渲染。
### componentWillUpdate()[​](tarocomponent.html#componentwillupdate)
```jsx
componentWillUpdate(nextProps, nextState)
```

当接收到新的 props 或 state 时，`componentWillUpdate()` 在渲染之前立即被调用。在更新发生之前，使用这个方法可以作为执行准备更新的一个好机会。这个方法在第一次渲染时不会被调用。
注意，这里不能调用 `this.setState()` 。 如果你需要更新 state 以响应 props 更改，请改用 `componentWillReceiveProps()`。
如果你需要更新 state 来响应 props 的改变，可以使用 `componentWillReceiveProps()` 代替。
### componentDidUpdate()[​](tarocomponent.html#componentdidupdate)
```jsx
componentDidUpdate(prevProps, prevState)
```

`componentDidUpdate()` 在更新发生后立即被调用。 这个方法在第一次渲染时不会被调用。
### componentWillUnmount()[​](tarocomponent.html#componentwillunmount)
```jsx
componentWillUnmount()
```

`componentWillUnmount()` 在一个组件被 卸载(unmounted) 和 销毁(destroyed) 之前立即被调用。 在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求，清除一些可能会造成内存泄露的事件等。
> 在小程序中，一个挂在到
`> Page
`> 组件的组件并不会执行
`> componentWillUnmount()
`> 方法，只有当他挂载的 Page 组件被销毁时，该组件才会执行
`> componentWillUnmount()
`> 方法。

### setState()[​](tarocomponent.html#setstate)
## 类属性[​](tarocomponent.html#类属性-1)
### defaultProps[​](tarocomponent.html#defaultprops)
`defaultProps` 可以被定义为组件类的一个属性，用以为类设置默认的属性。这对于未定义（undefined）的属性来说有用，而对于设为空（null）的属性并没用。例如：
```jsx
class CustomButton extends React.Component {
 // ...
}

CustomButton.defaultProps = {
 color: 'blue'
}
```

若未设置 `props.color`，其将被设置默认为 'blue':
```jsx
render () {
 return <CustomButton /> // props.color will be set to blue
}
```

若 props.color 设为 null，则其值则为 null：
```jsx
render() {
 return <CustomButton color={null} /> // props.color will remain null
}
```

## 实例属性[​](tarocomponent.html#实例属性-1)
### props[​](tarocomponent.html#props)
`this.props` 包含了组件该调用者定义的属性。查看 [组件 & Props](../../render-props.html) 关于属性的介绍。
### state[​](tarocomponent.html#state)
状态是该组件的特定数据，其可能改变多次。状态由用户定义，且其应为纯 JavaScript 对象。
若你不在 `render()` 方法中使用它，那它就不应该被放在 state 中。例如，你可直接将 timer IDs 放在实例上。
查看 [生命周期 & State](../../state.html) 了解更多关于状态的信息。
永远不要直接改变 `this.state`，因为调用 `setState()` 会替换你之前做的改变。将 `this.state` 当成不可变的。

- 
- 
 - 
 - 
 - [``](tarocomponent.html#static-getderivedstatefromprops)
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
