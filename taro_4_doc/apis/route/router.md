# ## 类型[​](router.html#类型)
```tsx
router
```

## 参数[​](router.html#参数)
### CustomRouteBuilder[​](router.html#customroutebuilder)
```tsx
(routeContext: CustomRouteContext,routeOptions: Record<string, any>) => CustomRouteConfig
```
参数类型routeContext`CustomRouteContext`routeOptions`Record<string, any>`
### SharedValue[​](router.html#sharedvalue)
参数类型value`T`
### CustomRouteContext[​](router.html#customroutecontext)
参数类型primaryAnimation`SharedValue<number>`primaryAnimationStatus`SharedValue<number>`secondaryAnimation`SharedValue<number>`secondaryAnimationStatus`SharedValue<number>`userGestureInProgress`SharedValue<number>`startUserGesture`() => void`stopUserGesture`() => void`didPop`() => void`
### CustomRouteConfig[​](router.html#customrouteconfig)
参数类型必填opaque`boolean`否maintainState`boolean`否transitionDuration`number`否reverseTransitionDuration`number`否barrierColor`string`否barrierDismissible`boolean`否barrierLabel`string`否canTransitionTo`boolean`否canTransitionFrom`boolean`否handlePrimaryAnimation`RouteAnimationHandler`否handleSecondaryAnimation`RouteAnimationHandler`否handlePreviousPageAnimation`RouteAnimationHandler`否allowEnterRouteSnapshotting`boolean`否allowExitRouteSnapshotting`boolean`否fullscreenDrag`boolean`否popGestureDirection"horizontal" or "vertical" or "multi"否
### RouteAnimationHandler[​](router.html#routeanimationhandler)
```tsx
() => { [key: string]: any; }
```

### router[​](router.html#router)
自定义路由
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/wx.router.html)
#### addRouteBuilder[​](router.html#addroutebuilder)
添加自定义路由配置
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.addRouteBuilder.html)
```tsx
(routeType: string, routeBuilder: CustomRouteBuilder) => void
```
参数类型说明routeType`string`路由类型routeBuilder`CustomRouteBuilder`路由动画定义函数
#### getRouteContext[​](router.html#getroutecontext)
获取页面对应的自定义路由上下文对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.getRouteContext.html)
```tsx
(instance: TaroGeneral.IAnyObject) => CustomRouteContext
```
参数类型说明instance`TaroGeneral.IAnyObject`页面/自定义组件实例
#### removeRouteBuilder[​](router.html#removeroutebuilder)
移除自定义路由配置
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/route/router/base/router.removeRouteBuilder.html)
```tsx
(routeType: string) => void
```
参数类型说明routeType`string`路由类型
- 
- 

- 
- 
- 
- 
- 
-
