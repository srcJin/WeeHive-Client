# 从本地相册选择图片或使用相机拍照。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)
## 类型[​](chooseImage.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseImage.html#参数)
参数类型option`Option`
### Option[​](chooseImage.html#option)
参数类型默认值必填说明count`number``9`否最多可以选择的图片张数
API 支持度: weapp, alipay, swan, tt, h5, rnsizeType`(keyof sizeType)[]``['original', 'compressed']`否所选的图片的尺寸
API 支持度: weapp, alipay, swan, tt, rnsourceType`(keyof sourceType)[]``['album', 'camera']`否选择图片的来源
API 支持度: weapp, alipay, swan, tt, h5, rncomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数imageId`string`否用来上传的input元素ID（仅h5端
API 支持度: h5
### sizeType[​](chooseImage.html#sizetype)
图片的尺寸
参数说明original原图compressedcompressed
### sourceType[​](chooseImage.html#sourcetype)
图片的来源
参数说明album从相册选图camera使用相机user使用前置摄像头(仅H5纯浏览器使用)environment使用后置摄像头(仅H5纯浏览器)
### SuccessCallbackResult[​](chooseImage.html#successcallbackresult)
参数类型说明tempFilePaths`string[]`图片的本地临时文件路径列表tempFiles`ImageFile[]`图片的本地临时文件列表errMsg`string`调用结果
### ImageFile[​](chooseImage.html#imagefile)
图片的本地临时文件列表
参数类型必填说明path`string`是本地临时文件路径size`number`是本地临时文件大小，单位 Btype`string`否文件的 MIME 类型
API 支持度: h5originalFileObj`File`否原始的浏览器 File 对象
API 支持度: h5
## 示例代码[​](chooseImage.html#示例代码)
```tsx
Taro.chooseImage({
 count: 1, // 默认9
 sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
 sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
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
- 

-
