# 创建离屏 canvas 实例
支持情况：!!!!!
> [参考文档]
> (
[> https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createOffscreenCanvas.html)
有两个版本的写法：

- createOffscreenCanvas(options) 从 2.16.1 起支持
- createOffscreenCanvas(width, height, this) 从 2.7.0 起支持)
## 类型[​](createOffscreenCanvas.html#类型)
```tsx
(options: Option) => OffscreenCanvas
```

## 参数[​](createOffscreenCanvas.html#参数)
参数类型options`Option`
### Option[​](createOffscreenCanvas.html#option)
参数类型默认值必填说明type"webgl" or "2d"`: 'webgl'`否创建的离屏 canvas 类型height`number`否画布高度width`number`否画布宽度compInst`TaroGeneral.IAnyObject`否在自定义组件下，当前组件实例的 this，以操作组件内 [canvas](../../components/canvas.html) 组件
## 示例代码[​](createOffscreenCanvas.html#示例代码)
```tsx
// 创建离屏 2D canvas 实例
const canvas = Taro.createOffscreenCanvas({type: '2d', width: 300, height: 150})
// 获取 context。注意这里必须要与创建时的 type 一致
const context = canvas.getContext('2d')

// 创建一个图片
const image = canvas.createImage()
// 等待图片加载
await new Promise(resolve => {
 image.onload = resolve
 image.src = IMAGE_URL // 要加载的图片 url
})

// 把图片画到离屏 canvas 上
context.clearRect(0, 0, 300, 150)
context.drawImage(image, 0, 0, 300, 150)

// 获取画完后的数据
const imgData = context.getImageData(0, 0, 300, 150)
```

- 
- 

- 

-
