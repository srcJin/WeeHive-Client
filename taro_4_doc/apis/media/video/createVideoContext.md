# 创建 video 上下文 VideoContext 对象。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html)
## 类型[​](createVideoContext.html#类型)
```tsx
(id: string, component?: TaroGeneral.IAnyObject) => VideoContext
```

## 参数[​](createVideoContext.html#参数)
参数类型说明id`string`video 组件的 idcomponent`TaroGeneral.IAnyObject`在自定义组件下，当前组件实例的this，以操作组件内 video 组件
## 示例代码[​](createVideoContext.html#示例代码)
```tsx
videoContext = Taro.createVideoContext('myVideo')
```

- 
- 
-
