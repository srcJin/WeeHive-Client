# 预览图片和视频。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)
## 类型[​](previewMedia.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](previewMedia.html#参数)
参数类型option`Option`
### Sources[​](previewMedia.html#sources)
参数类型必填说明url`string`是图片或视频的地址type"image" or "video"否资源的类型（图片或视频），默认值：imageposter`string`否视频的封面图片
### Option[​](previewMedia.html#option)
参数类型必填说明sources`Sources[]`是需要预览的资源列表current`number`否当前显示的资源序号，默认值：0showmenu`boolean`否是否显示长按菜单 2.13.0，默认值：truereferrerPolicy`string`否origin: 发送完整的referrer; no-referrer: 不发送。格式固定为 [https://servicewechat.com/{appid}/{version}/page-frame.html，其中](https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html%EF%BC%8C%E5%85%B6%E4%B8%AD) {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；默认值：no-referrercomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](previewMedia.html#示例代码)
```tsx
Taro.previewMedia({
 sources: []
})
```

- 
- 

- 
- 

-
