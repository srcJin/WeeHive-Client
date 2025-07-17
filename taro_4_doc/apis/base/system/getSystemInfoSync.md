# [Taro.getSystemInfo](getSystemInfo.html) 的同步版本
支持情况：!!!!!!
> 微信小程序: 小程序可以在微信和企业微信中调用此接口，但是在企业微信中调用此接口时，会额外返回一个 environment 字段（微信中不返回），如此字段值为 wxwork，则表示当前小程序运行在企业微信环境中。

> H5: 不支持 version、statusBarHeight、fontSizeSetting、SDKVersion

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html)
## 类型[​](getSystemInfoSync.html#类型)
```tsx
() => Result
```

## 参数[​](getSystemInfoSync.html#参数)
### Result[​](getSystemInfoSync.html#result)
参数类型必填说明brand`string`是设备品牌model`string`是设备型号pixelRatio`number`是设备像素比screenWidth`number`是屏幕宽度，单位pxscreenHeight`number`是屏幕高度，单位pxwindowWidth`number`是可使用窗口宽度，单位pxwindowHeight`number`是可使用窗口高度，单位pxstatusBarHeight`number`否状态栏的高度，单位pxlanguage`string`是微信设置的语言version`string`否微信版本号system`string`是操作系统及版本platform`string`是客户端平台fontSizeSetting`number`否用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准SDKVersion`string`否客户端基础库版本benchmarkLevel`number`是设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）albumAuthorized`boolean`否允许微信使用相册的开关（仅 iOS 有效）cameraAuthorized`boolean`否允许微信使用摄像头的开关locationAuthorized`boolean`否允许微信使用定位的开关microphoneAuthorized`boolean`否允许微信使用麦克风的开关notificationAuthorized`boolean`否允许微信通知的开关notificationAlertAuthorized`boolean`否允许微信通知带有提醒的开关（仅 iOS 有效）notificationBadgeAuthorized`boolean`否允许微信通知带有标记的开关（仅 iOS 有效）notificationSoundAuthorized`boolean`否允许微信通知带有声音的开关（仅 iOS 有效）phoneCalendarAuthorized`boolean`否允许微信使用日历的开关bluetoothEnabled`boolean`否蓝牙的系统开关locationEnabled`boolean`否地理位置的系统开关wifiEnabled`boolean`否Wi-Fi 的系统开关safeArea`TaroGeneral.SafeAreaResult`否在竖屏正方向下的安全区域locationReducedAccuracy`boolean`否`true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持theme`keyof Theme`否系统当前主题，取值为light或dark，全局配置"darkmode":true时才能获取，否则为 undefined （不支持小游戏）host`Host`否当前小程序运行的宿主环境enableDebug`boolean`否是否已打开调试。可通过右上角菜单或 [Taro.setEnableDebug](../debug/setEnableDebug.html) 打开调试。deviceOrientation`keyof DeviceOrientation`否设备方向environment`string`否小程序当前运行环境
### Theme[​](getSystemInfoSync.html#theme)
系统主题合法值
参数说明dark深色主题light浅色主题
### Host[​](getSystemInfoSync.html#host)
参数类型说明appId`string`宿主 app 对应的 appId
### DeviceOrientation[​](getSystemInfoSync.html#deviceorientation)
设备方向合法值
参数说明portrait竖屏landscape横屏
## 示例代码[​](getSystemInfoSync.html#示例代码)
```tsx
try {
 const res = Taro.getSystemInfoSync()
 console.log(res.model)
 console.log(res.pixelRatio)
 console.log(res.windowWidth)
 console.log(res.windowHeight)
 console.log(res.language)
 console.log(res.version)
 console.log(res.platform)
} catch (e) {
 // Do something when catch error
}
```

- 
- 

- 
- 
- 
- 

-
