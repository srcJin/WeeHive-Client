# 获取当前帐号信息
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html)
## 类型[​](getAccountInfoSync.html#类型)
```tsx
() => AccountInfo
```

## 参数[​](getAccountInfoSync.html#参数)
### AccountInfo[​](getAccountInfoSync.html#accountinfo)
帐号信息
参数类型说明miniProgram`MiniProgram`小程序帐号信息plugin`Plugin`插件帐号信息（仅在插件中调用时包含这一项）
### MiniProgram[​](getAccountInfoSync.html#miniprogram)
小程序帐号信息
参数类型说明appId`string`小程序 appIdenvVersion"develop" or "trial" or "release"小程序版本
since: 2.10.0version`string`线上小程序版本号
since: 2.10.2
### Plugin[​](getAccountInfoSync.html#plugin)
插件帐号信息（仅在插件中调用时包含这一项）
参数类型说明appId`string`插件 appIdversion`string`插件版本号
## 示例代码[​](getAccountInfoSync.html#示例代码)
```tsx
const accountInfo = Taro.getAccountInfoSync();

console.log(accountInfo.miniProgram.appId) // 小程序 appId
console.log(accountInfo.plugin.appId) // 插件 appId
console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
```

- 
- 

- 
- 
- 

-
