# Lottie
支持情况：!!!!!
[> 参考文档
](https://opendocs.alipay.com/mini/component/lottie)
## 类型[​](lottie.html#类型)
```tsx
ComponentType<LottieProps>
```

## LottieProps[​](lottie.html#lottieprops)
参数类型默认值必填说明autoplay`boolean``false`否是否自动播放。path`string`否Lottie 资源地址。包含近端（包内地址）和远端（网络）的 JSON 文件地址。
与 djangoId 二选一。speed`number``1.0`否播放速度。正数为正向播放，负数负向播放。repeatCount`number``0`否循环次数。

如果是负数表示无限次。
如果是 0 表示不循环，播放一次。
如果是 1 表示循环一次，播放两次。autoReverse`boolean``false`否是否自动回播。assetsPath`string`否资源地址。"/" 表明是小程序根目录。placeholder`string`否兜底图或者降级图地址。

1. 支持本地资源，案例：'/image/lottie/lottie2_default.png'。
支持 http 的 cdn 地址、近端地址。
小程序场景不支持 djangoId。md5`string`否在线资源的 md5 校验。
djangoId=[https://b.zip。](https://b.zip%E3%80%82)
可以使用 b.zip 加密 获取 md5 值
md5="77c6c86fc89ba94cc0a9271b77ae77d2"optimize`boolean``false`否降级。降级是指如遇低端设备，Lottie 会降级展示为 placeholder。
当 optimize 为 true ，并且传入了 placeholder 时，在低端设备上只会展示 placeholder，不展示 Lottie。
低端设备如下所示：

iOS ：小于等于 iPhone6P
Android：内存容量小于 3GonDataReady`CommonEventFunction`否当数据下载+视图创建完成时触发。onDataFailed`CommonEventFunction`否数据加载失败时触发。onAnimationStart`CommonEventFunction`否动画开始时触发。onAnimationEnd`CommonEventFunction`否动画结束时触发。onAnimationRepeat`CommonEventFunction`否动画一次重播结束。onAnimationCancel`CommonEventFunction`否动画取消。业务调用 Cancel 时回调。onDataLoadReady`CommonEventFunction`否参数化时，数据准备完成，等待业务传入参数化值。
### API 支持度[​](lottie.html#api-支持度)
API微信小程序支付宝小程序H5React NativeHarmonyLottieProps.autoplay✔️LottieProps.path✔️LottieProps.speed✔️LottieProps.repeatCount✔️LottieProps.autoReverse✔️LottieProps.assetsPath✔️LottieProps.placeholder✔️LottieProps.md5✔️LottieProps.optimize✔️LottieProps.onDataReady✔️LottieProps.onDataFailed✔️LottieProps.onAnimationStart✔️LottieProps.onAnimationEnd✔️LottieProps.onAnimationRepeat✔️LottieProps.onAnimationCancel✔️LottieProps.onDataLoadReady✔️
- 
- 

-
