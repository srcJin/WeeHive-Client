# 动态加载网络字体。文件地址需为下载类型。iOS 仅支持 https 格式文件地址。
注意：

- 字体文件返回的 context-type 参考 [font](https://www.iana.org/assignments/media-types/media-types.xhtml#font)，格式不正确时会解析失败。
- 字体链接必须是https（ios不支持http)
- 字体链接必须是同源下的，或开启了cors支持，小程序的域名是`servicewechat.com`
- canvas等原生组件不支持使用接口添加的字体
- 工具里提示 Failed to load font 可以忽略
支持情况：!!!!!!
> 支付宝小程序: source 地址格式为
`> url('https://...')
`> ，而不是单纯 URL 地址

> H5: 不支持 global (默认全局加载)

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html)
## 类型[​](loadFontFace.html#类型)
```tsx
(option: Option) => Promise<CallbackResult>
```

## 参数[​](loadFontFace.html#参数)
参数类型option`Option`
### Option[​](loadFontFace.html#option)
参数类型默认值必填说明global`boolean``false`否是否全局生效family`string`是定义的字体名称source`string`是字体资源的地址。建议格式为 TTF 和 WOFF，WOFF2 在低版本的 iOS 上会不兼容。desc`DescOption`否可选的字体描述符success`(res: CallbackResult) => void`否接口调用成功的回调函数fail`(res: CallbackResult) => void`否接口调用失败的回调函数complete`(res: CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### CallbackResult[​](loadFontFace.html#callbackresult)
参数类型说明status`string`加载字体结果
### DescOption[​](loadFontFace.html#descoption)
可选的字体描述符
参数类型必填说明ascentOverride`string`否
API 支持度: h5descentOverride`string`否
API 支持度: h5featureSettings`string`否
API 支持度: h5lineGapOverride`string`否
API 支持度: h5stretch`string`否
API 支持度: h5style`string`否字体样式，可选值为 normal / italic / obliqueunicodeRange`string`否
API 支持度: h5variant`string`否设置小型大写字母的字体显示文本，可选值为 normal / small-caps / inheritvariationSettings`string`否
API 支持度: h5weight`string`否字体粗细，可选值为 normal / bold / 100 / 200../ 900
## 示例代码[​](loadFontFace.html#示例代码)
```tsx
Taro.loadFontFace({
 family: 'Bitstream Vera Serif Bold',
 source: 'url("https://sungd.github.io/Pacifico.ttf")',
 success: console.log
})
```

- 
- 

- 
- 
- 

-
