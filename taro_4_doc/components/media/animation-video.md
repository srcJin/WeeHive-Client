# 透明视频动画
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/animation-video/)
## 类型[​](animation-video.html#类型)
```tsx
ComponentType<AnimationVideoProps>
```

## AnimationVideoProps[​](animation-video.html#animationvideoprops)
参数类型默认值必填说明resourceWidth`number``800`否组件使用的 video 视频资源的宽度（单位：px）resourceHeight`number``400`否组件使用的 video 视频资源的高度（单位：px）canvasStyle`string``"width: 400px;height: 400px"`否用于设置动画画布的 CSS 样式path`string`否动画资源地址，支持相对路径以及远程地址。如果是远程路径，注意 response header 里需要设置 Access-Control-Allow-Origin 来防止跨域问题loop`boolean``false`否动画是否循环播放autoplay`boolean``false`否动画是否自动播放alphaDirection`string``"left"`否视频资源中 alpha 通道的方向，left 表示 alpha 通道在资源的左边，right 表示 alpha 通道在资源的右边。详情请参考透明视频设计资源示例onStarted`CommonEventFunction`否动画开始播放的回调onEnded`CommonEventFunction`否当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及暂停动画不会触发）
### API 支持度[​](animation-video.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyAnimationVideoProps.resourceWidth✔️AnimationVideoProps.resourceHeight✔️AnimationVideoProps.canvasStyle✔️AnimationVideoProps.path✔️AnimationVideoProps.loop✔️AnimationVideoProps.autoplay✔️AnimationVideoProps.alphaDirection✔️AnimationVideoProps.onStarted✔️AnimationVideoProps.onEnded✔️
- 
- 

-
