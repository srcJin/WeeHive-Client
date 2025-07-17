# 拍摄视频或从手机相册中选视频。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)
## 类型[​](chooseVideo.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseVideo.html#参数)
参数类型option`Option`
### Option[​](chooseVideo.html#option)
参数类型默认值必填说明camera`keyof Camera``"back"`否默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
API 支持度: weapp, h5compressed`boolean``true`否是否压缩所选择的视频文件
API 支持度: weappmaxDuration`number``60`否拍摄视频最长拍摄时间，单位秒
API 支持度: weappsourceType`(keyof sourceType)[]``['album', 'camera']`否视频选择的来源
API 支持度: weapp, h5complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](chooseVideo.html#successcallbackresult)
参数类型说明tempFilePath`string`选定视频的临时文件路径duration`number`选定视频的时间长度size`number`选定视频的数据量大小height`number`返回选定视频的高度width`number`返回选定视频的宽度errMsg`string`调用结果
### Camera[​](chooseVideo.html#camera)
参数说明back默认拉起后置摄像头front默认拉起前置摄像头
### sourceType[​](chooseVideo.html#sourcetype)
参数说明album从相册选择视频camera使用相机拍摄视频
## 示例代码[​](chooseVideo.html#示例代码)
```tsx
Taro.chooseVideo({
 sourceType: ['album','camera'],
 maxDuration: 60,
 camera: 'back',
 success: function (res) {
 console.log(res.tempFilePath)
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
