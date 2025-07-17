# 裁剪图片接口
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.cropImage.html)
## 类型[​](cropImage.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](cropImage.html#参数)
参数类型option`Option`
### Option[​](cropImage.html#option)
参数类型必填说明src`string`是图片路径，图片的路径，支持本地路径、代码包路径cropScale`keyof CropScale`是裁剪比例complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](cropImage.html#successcallbackresult)
参数类型说明tempFilePath`string`剪裁后图片的临时文件路径 (本地路径)
### CropScale[​](cropImage.html#cropscale)
参数说明1:1宽高比为1比13:4宽高比为3比44:3宽高比为4比34:5宽高比为4比55:4宽高比为5比49:16宽高比为9比1616:9宽高比为16比9
## 示例代码[​](cropImage.html#示例代码)
```tsx
Taro.cropImage({
 src: '', // 图片路径
 cropScale: '1:1', // 裁剪比例
 success: function (res) {
 // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
 var tempFilePaths = res.tempFilePaths
 }
})
```

- 
- 

- 
- 
- 

-
