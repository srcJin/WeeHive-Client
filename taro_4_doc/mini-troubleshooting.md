# 各小程序常见问题汇总。
## 微信小程序[​](mini-troubleshooting.html#微信小程序)
### 热重载[​](mini-troubleshooting.html#热重载)
打开微信小程序开发者工具的“热重载”功能，可以在修改**页面 JS 文件**、**样式文件**后快速在开发者工具显示更新的内容，极大地提升了开发体验。
在 Taro 中，样式文件的热重载是直接支持的，而页面 JS 文件的热重载在 `Taro v3.3.17` 版本后支持，且需要额外配置：

- `Taro v3.3.17+`：手动为需要热重载的页面增加兼容代码，请参考：[#10722](https://github.com/NervJS/taro/issues/10722#issuecomment-992247021)
- `Taro v3.4.0+`：打开编译配置 [mini.hot](config-detail.html#minihot) 即可。
**> 注意：
**> 目前微信小程序的 JS 文件热重载只支持页面文件，而不包括其依赖。

- 

-
