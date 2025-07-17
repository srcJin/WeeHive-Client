# 图片对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Image.html)
## 方法[​](Image.html#方法)
参数类型说明src`string`图片的 URLheight`number`图片的真实高度width`number`图片的真实宽度referrerPolicy`string`origin: 发送完整的referrer; no-referrer: 不发送。

格式固定为 [https://servicewechat.com/{appid}/{version}/page-frame.html，其中](https://servicewechat.com/%7Bappid%7D/%7Bversion%7D/page-frame.html%EF%BC%8C%E5%85%B6%E4%B8%AD) {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版、体验版以及审核版本，版本号为 devtools 表示为开发者工具，其余为正式版本
API 支持度: weapponerror`(...args: any[]) => any`图片加载发生错误后触发的回调函数onload`(...args: any[]) => any`图片加载完成后触发的回调函数
## API 支持度[​](Image.html#api-支持度)
API微信小程序H5React NativeHarmonyImage✔️Image.referrerPolicy✔️
- 
-
