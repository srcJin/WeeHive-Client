# UpdateManager 对象，用来管理更新，可通过 Taro.getUpdateManager 接口获取实例。
**Tips**

- 微信开发者工具上可以通过「编译模式」下的「下次编译模拟更新」开关来调试
- 小程序开发版/体验版没有「版本」概念，所以无法在开发版/体验版上测试更版本更新情况
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html)
## 方法[​](UpdateManager.html#方法)
### applyUpdate[​](UpdateManager.html#applyupdate)
强制小程序重启并使用新版本。在小程序新版本下载完成后（即收到 `onUpdateReady` 回调）调用。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html)
```tsx
() => void
```

### onCheckForUpdate[​](UpdateManager.html#oncheckforupdate)
监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html)
```tsx
(callback: OnCheckForUpdateCallback) => void
```
参数类型说明callback`OnCheckForUpdateCallback`向微信后台请求检查更新结果事件的回调函数
### onUpdateReady[​](UpdateManager.html#onupdateready)
监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`小程序有版本更新事件的回调函数
### onUpdateFailed[​](UpdateManager.html#onupdatefailed)
监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html)
```tsx
(callback: (res: TaroGeneral.CallbackResult) => void) => void
```
参数类型说明callback`(res: TaroGeneral.CallbackResult) => void`小程序更新失败事件的回调函数
## 参数[​](UpdateManager.html#参数)
### OnCheckForUpdateCallback[​](UpdateManager.html#oncheckforupdatecallback)
向微信后台请求检查更新结果事件的回调函数
```tsx
(result: OnCheckForUpdateResult) => void
```
参数类型result`OnCheckForUpdateResult`
### OnCheckForUpdateResult[​](UpdateManager.html#oncheckforupdateresult)
参数类型说明hasUpdate`boolean`是否有新版本
## 示例代码[​](UpdateManager.html#示例代码)
```tsx
const updateManager = Taro.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
 // 请求完新版本信息的回调
 console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
 wx.showModal({
 title: '更新提示',
 content: '新版本已经准备好，是否重启应用？',
 success: function (res) {
 if (res.confirm) {
 // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
 updateManager.applyUpdate()
 }
 }
 })
})

updateManager.onUpdateFailed(function () {
 // 新版本下载失败
})
```

## API 支持度[​](UpdateManager.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyUpdateManager✔️✔️UpdateManager.applyUpdate✔️✔️UpdateManager.onCheckForUpdate✔️✔️UpdateManager.onUpdateReady✔️✔️UpdateManager.onUpdateFailed✔️✔️
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
