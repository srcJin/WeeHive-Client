# 压缩图片接口，可选压缩质量
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html)
## 类型[​](compressImage.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](compressImage.html#参数)
参数类型option`Option`
### Option[​](compressImage.html#option)
参数类型必填说明src`string`是图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数quality`number`否压缩质量，范围0～100，数值越小，质量越低，压缩率越高（仅对jpg有效）。compressedWidth`number`否压缩后图片的宽度，单位为px，若不填写则默认以 compressedHeight 为准等比缩放。compressedHeight`number`否压缩后图片的高度，单位为px，若不填写则默认以 compressedWidth 为准等比缩放。success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](compressImage.html#successcallbackresult)
参数类型说明tempFilePath`string`压缩后图片的临时文件路径errMsg`string`调用结果
## 示例代码[​](compressImage.html#示例代码)
```tsx
Taro.compressImage({
 src: '', // 图片路径
 quality: 80 // 压缩质量
})
```

- 
- 

- 
- 

-
