# ## 参数[​](General.html#参数)
### CallbackResult[​](General.html#callbackresult)
通用错误
参数类型说明errMsg`string`错误信息
### BluetoothError[​](General.html#bluetootherror)
蓝牙错误
参数类型说明errMsg`string`错误信息errCode`010000
### WifiError[​](General.html#wifierror)
WIFI 错误
参数类型说明errMsg`string`错误信息errCode`012000
### NFCError[​](General.html#nfcerror)
NFC 错误
参数类型说明errMsg`string`错误信息errCode`013000
### IBeaconError[​](General.html#ibeaconerror)
iBeacon 错误
参数类型说明errMsg`string`错误信息errCode`011000
### SafeAreaResult[​](General.html#safearearesult)
在竖屏正方向下的安全区域
参数类型说明bottom`number`安全区域右下角纵坐标height`number`安全区域的高度，单位逻辑像素left`number`安全区域左上角横坐标right`number`安全区域右下角横坐标top`number`安全区域左上角纵坐标width`number`安全区域的宽度，单位逻辑像素
### AdErrCode[​](General.html#aderrcode)
广告错误码
错误码是通过onError获取到的错误信息。调试期间，可以通过异常返回来捕获信息。 在小程序发布上线之后，如果遇到异常问题，可以在[“运维中心“](https://mp.weixin.qq.com/)里面搜寻错误日志，还可以针对异常返回加上适当的监控信息。
参数异常情况理由解决方案1000`后端接口调用失败``该项错误不是开发者的异常情况``一般情况下忽略一段时间即可恢复。`1001`参数错误``使用方法错误``可以前往 developers.weixin.qq.com 确认具体教程（小程序和小游戏分别有各自的教程，可以在顶部选项中，“设计”一栏的右侧进行切换。`1002`广告单元无效``可能是拼写错误、或者误用了其他APP的广告ID``请重新前往 mp.weixin.qq.com 确认广告位ID。`1003`内部错误``该项错误不是开发者的异常情况``一般情况下忽略一段时间即可恢复。`1004`无合适的广告``广告不是每一次都会出现，这次没有出现可能是由于该用户不适合浏览广告``属于正常情况，且开发者需要针对这种情况做形态上的兼容。`1005`广告组件审核中``你的广告正在被审核，无法展现广告``请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。`1006`广告组件被驳回``你的广告审核失败，无法展现广告``请前往 mp.weixin.qq.com 确认审核状态，且开发者需要针对这种情况做形态上的兼容。`1007`广告组件被封禁``你的广告能力已经被封禁，封禁期间无法展现广告``请前往 mp.weixin.qq.com 确认小程序广告封禁状态。`1008`广告单元已关闭``该广告位的广告能力已经被关闭``请前往 mp.weixin.qq.com 重新打开对应广告位的展现。`
### BluetoothErrCode[​](General.html#bluetootherrcode)
蓝牙错误码
参数异常情况说明0`ok`正常10000`not init`未初始化蓝牙适配器10001`not available`当前蓝牙适配器不可用10002`no device`没有找到指定设备10003`connection fail`连接失败10004`no service`没有找到指定服务10005`no characteristic`没有找到指定特征值10006`no connection`当前连接已断开10007`property not support`当前特征值不支持此操作10008`system error`其余所有系统上报的异常10009`system not support`Android 系统特有，系统版本低于 4.3 不支持 BLE10012`operate time out`连接超时10013`invalid_data`连接 deviceId 为空或者是格式不正确
### IBeaconErrCode[​](General.html#ibeaconerrcode)
iBeacon 错误码
参数异常情况说明0`ok`正常11000`unsupport`系统或设备不支持11001`bluetooth service unavailable`蓝牙服务不可用11002`location service unavailable`位置服务不可用11003`already start`已经开始搜索11004`not startBeaconDiscovery`还未开始搜索11005`system error`系统错误11006`invalid data`参数不正确
### WifiErrCode[​](General.html#wifierrcode)
WIFI 错误码
参数异常情况说明0`ok`正常12000`not init`未先调用 `startWifi` 接口12001`system not support`当前系统不支持相关能力12002`password error Wi-Fi`密码错误12003`connection timeout`连接超时12004`duplicate request`重复连接 Wi-Fi12005`wifi not turned on`Android 特有，未打开 Wi-Fi 开关12006`wifi not turned on`Android 特有，未打开 GPS 定位开关12007`user denied`用户拒绝授权链接 Wi-Fi12008`invalid SSID`无效 SSID12009`system config err`系统运营商配置拒绝连接 Wi-Fi12010`system internal error`系统其他错误，需要在 errmsg 打印具体的错误原因12011`weapp in background`应用在后台无法配置 Wi-Fi12013`wifi config may be expired`系统保存的 Wi-Fi 配置过期，建议忘记 Wi-Fi 后重试
### NFCErrCode[​](General.html#nfcerrcode)
NFC 错误码
参数异常情况说明0`ok`正常13000当前设备不支持NFC13001当前设备支持NFC，但系统NFC开关未开启13002当前设备支持NFC，但不支持HCE13003AID列表参数格式错误13004未设置微信为默认NFC支付应用13005返回的指令不合法13006注册AID失败
### LaunchOptionsApp[​](General.html#launchoptionsapp)
启动参数
参数类型说明path`string`启动小程序的路径query`Record<string, any>`启动小程序的 query 参数referrerInfo`ReferrerInfo`来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 `{}`。(参见后文注意)scene`number`启动小程序的[场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)shareTicket`string`shareTicket，详见[获取更多转发信息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html)
#### ReferrerInfo[​](General.html#referrerinfo)
参数类型说明appId`string`来源小程序、公众号或 App 的 appIdextraData`Record<string, any>`来源小程序传过来的数据，scene=1037或1038时支持
- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
-
