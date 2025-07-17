# 图片。支持 JPG、PNG、SVG、WEBP、GIF 等格式以及云文件ID。
**Note:** 为实现小程序的 `mode` 特性，在 H5 组件中使用一个 `div` 容器来对内部的 `img` 进行展示区域的裁剪，因此请勿使用元素选择器来重置 `img` 的样式！
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
## 类型[​](image.html#类型)
```tsx
ComponentType<ImageProps>
```

## 示例代码[​](image.html#示例代码)

- React
- Vue
```tsx
export default class PageView extends Component {
 constructor() {
 super(...arguments)
 }

 render() {
 return (
 <View className='components-page'>
 <Image
 style='width: 300px;height: 100px;background: #fff;'
 src='nerv_logo.png'
 />
 <Image
 style='width: 300px;height: 100px;background: #fff;'
 src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
 />
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <image
 style="width: 300px;height: 100px;background: #fff;"
 src="nerv_logo.png"
 />
 <image
 style="width: 300px;height: 100px;background: #fff;"
 src="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
 />
 </view>
</template>
```

## ImageProps[​](image.html#imageprops)
参数类型默认值必填说明src`string`是图片资源地址mode`keyof Mode``"scaleToFill"`否图片裁剪、缩放的模式webp`boolean``false`否默认不解析 webP 格式，只支持网络资源svg`boolean``false`否默认不解析 svg 格式，svg 图片只支持 aspectFitlazyLoad`boolean``false`否图片懒加载。只针对 page 与 scroll-view 下的 image 有效showMenuByLongpress`boolean``false`否开启长按图片显示识别小程序码菜单imgProps`ImgHTMLAttributes<HTMLImageElement>`否为 img 标签额外增加的属性nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上defaultSource`string`否默认图片地址，若设置默认图片地址，会先显示默认图片，等 src 对应的图片加载成功后，再渲染对应的图片。imageMenuPrevent`string`否阻止长按图片时弹起默认菜单（即将该属性设置为image-menu-prevent="true"或image-menu-prevent），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性。注：长按菜单后的操作暂不支持 svg 格式preview`string`否点击后是否预览图片。在不设置的情况下，若 image 未监听点击事件且宽度大于 1/4 屏宽，则默认开启originalSrc`string`否预览时显示的图片地址ariaLabel`string`否无障碍访问，（属性）元素的额外描述fadeIn`boolean``false`否是否渐显onError`CommonEventFunction<onErrorEventDetail>`否当错误发生时，发布到 AppService 的事件名，事件对象onLoad`CommonEventFunction<onLoadEventDetail>`否当图片载入完毕时，发布到 AppService 的事件名，事件对象onTap`CommonEventFunction`否点击图片时触发。catchTap`CommonEventFunction`否点击图片时触发，阻止事件冒泡。
### API 支持度[​](image.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridImageProps.src✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️ImageProps.mode✔️✔️✔️✔️✔️✔️✔️✔️(部分支持 scaleToFill, aspectFit, aspectFill, widthFix)✔️(部分支持 scaleToFill, aspectFit, aspectFill, widthFix, heightFix)✔️ImageProps.webp✔️✔️ImageProps.svg✔️ImageProps.lazyLoad✔️✔️✔️✔️✔️✔️✔️ImageProps.showMenuByLongpress✔️ImageProps.imgProps✔️✔️ImageProps.nativeProps✔️✔️ImageProps.defaultSource✔️ImageProps.imageMenuPrevent✔️ImageProps.preview✔️ImageProps.originalSrc✔️ImageProps.ariaLabel✔️ImageProps.fadeIn✔️ImageProps.onError✔️✔️✔️✔️✔️✔️✔️✔️✔️ImageProps.onLoad✔️✔️✔️✔️✔️✔️✔️✔️✔️ImageProps.onTap✔️ImageProps.catchTap✔️
### Mode[​](image.html#mode)
mode 的合法值
参数说明scaleToFill缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素aspectFit缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。aspectFill缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。widthFix缩放模式，宽度不变，高度自动变化，保持原图宽高比不变heightFix缩放模式，高度不变，宽度自动变化，保持原图宽高比不变top裁剪模式，不缩放图片，只显示图片的顶部区域bottom裁剪模式，不缩放图片，只显示图片的底部区域center裁剪模式，不缩放图片，只显示图片的中间区域left裁剪模式，不缩放图片，只显示图片的左边区域right裁剪模式，不缩放图片，只显示图片的右边区域top left裁剪模式，不缩放图片，只显示图片的左上边区域top right裁剪模式，不缩放图片，只显示图片的右上边区域bottom left裁剪模式，不缩放图片，只显示图片的左下边区域bottom right裁剪模式，不缩放图片，只显示图片的右下边区域
### onErrorEventDetail[​](image.html#onerroreventdetail)
参数类型说明errMsg`string`错误信息
### onLoadEventDetail[​](image.html#onloadeventdetail)
参数类型说明heightstring or number图片高度widthstring or number图片宽度
- 
- 
- 

- 
- 
- 
-
