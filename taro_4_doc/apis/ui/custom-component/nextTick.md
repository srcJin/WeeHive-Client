# 延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）
**说明** 因为自定义组件中的 setData 和 triggerEvent 等接口本身是同步的操作，当这几个接口被连续调用时，都是在一个同步流程中执行完的，因此若逻辑不当可能会导致出错。 一个极端的案例：当父组件的 setData 引发了子组件的 triggerEvent，进而使得父组件又进行了一次 setData，期间有通过 wx:if 语句对子组件进行卸载，就有可能引发奇怪的错误，所以对于不需要在一个同步流程内完成的逻辑，可以使用此接口延迟到下一个时间片再执行。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html)
## 类型[​](nextTick.html#类型)
```tsx
(callback: (...args: any[]) => any) => void
```

## 参数[​](nextTick.html#参数)
参数类型callback`(...args: any[]) => any`
## 示例代码[​](nextTick.html#示例代码)
```tsx
this.setData({ number: 1 }) // 直接在当前同步流程中执行
Taro.nextTick(() => {
 this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
})
this.setData({ number: 2 }) // 直接在当前同步流程中执行
```

- 
- 
-
