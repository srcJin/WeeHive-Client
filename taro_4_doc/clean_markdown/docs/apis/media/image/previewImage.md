# 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
支持情况：!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)
## 类型[​](previewImage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](previewImage.html#参数)
参数类型option`Option`
### Option[​](previewImage.html#option)
参数类型必填说明urls`string[]`是需要预览的图片链接列表。currentstring or number否当前显示图片的http链接enablesavephoto`boolean`否是否支持长按下载图片
API 支持度: alipay 基础库: 1.13.0enableShowPhotoDownload`boolean`否是否在右下角显示下载入口
API 支持度: alipay 基础库: 1.13.0showmenu`boolean`否
API 支持度: weapp 最低版本：2.13.0。是否显示长按菜单，默认值：truereferrerPolicy`string`否
API 支持度: weapp 最低版本：2.13.0。origin: 发送完整的referrer; no-referrer: 不发送。格式固定为 [https://servicewechat.com/{appid}/{version}/page-frame.html，其中](https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html%EF%BC%8C%E5%85%B6%E4%B8%AD) {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本；默认值：no-referrercomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](previewImage.html#示例代码)
```tsx
Taro.previewImage({
 current: '', // 当前显示图片的http链接
 urls: [] // 需要预览的图片http链接列表
})
```

- 
- 

- 

-
