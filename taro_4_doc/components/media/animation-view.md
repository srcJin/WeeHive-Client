# Lottie 动画
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/animation-view-Lottie/)
## 类型[​](animation-view.html#类型)
```tsx
ComponentType<AnimationViewProps>
```

## AnimationViewProps[​](animation-view.html#animationviewprops)
参数类型默认值必填说明path`string`否动画资源地址，目前只支持绝对路径loop`boolean``false`否动画是否循环播放autoplay`boolean``true`否动画是否自动播放action"play" or "pause" or "stop"`"play"`否动画操作，可取值 play、pause、stophidden`boolean``true`否是否隐藏动画onEnded`CommonEventFunction`否当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发）
### API 支持度[​](animation-view.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyAnimationViewProps.path✔️AnimationViewProps.loop✔️AnimationViewProps.autoplay✔️AnimationViewProps.action✔️AnimationViewProps.hidden✔️AnimationViewProps.onEnded✔️
- 
- 

-
