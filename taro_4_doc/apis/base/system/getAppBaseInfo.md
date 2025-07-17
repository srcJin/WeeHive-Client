# 获取微信APP基础信息
支持情况：!!!!!
> H5: 不支持 SDKVersion、host、version

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getAppBaseInfo.html)
## 类型[​](getAppBaseInfo.html#类型)
```tsx
() => Result
```

## 参数[​](getAppBaseInfo.html#参数)
### Result[​](getAppBaseInfo.html#result)
参数类型必填说明SDKVersion`string`否客户端基础库版本enableDebug`boolean`否是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](../debug/setEnableDebug.html) 打开调试。host`Host`否当前小程序运行的宿主环境language`string`是微信设置的语言version`string`否微信版本号theme`keyof Theme`否系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）
### Theme[​](getAppBaseInfo.html#theme)
系统主题合法值
参数说明dark深色主题light浅色主题
### Host[​](getAppBaseInfo.html#host)
参数类型说明appId`string`宿主 app 对应的 appId
## 示例代码[​](getAppBaseInfo.html#示例代码)
```tsx
const appBaseInfo = Taro.getAppBaseInfo()

console.log(appBaseInfo.SDKVersion)
console.log(appBaseInfo.enableDebug)
console.log(appBaseInfo.host)
console.log(appBaseInfo.language)
console.log(appBaseInfo.version)
console.log(appBaseInfo.theme)
```

- 
- 

- 
- 
- 

-
