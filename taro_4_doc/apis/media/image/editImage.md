# 编辑图片接口
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.editImage.html)
## 类型[​](editImage.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](editImage.html#参数)
参数类型option`Option`
### Option[​](editImage.html#option)
参数类型必填说明src`string`是图片路径，图片的路径，支持本地路径、代码包路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](editImage.html#successcallbackresult)
参数类型说明tempFilePath`string`编辑后图片的临时文件路径 (本地路径)
## 示例代码[​](editImage.html#示例代码)
```tsx
Taro.editImage({
 src: '', // 图片路径
})
```

- 
- 

- 
- 

-
