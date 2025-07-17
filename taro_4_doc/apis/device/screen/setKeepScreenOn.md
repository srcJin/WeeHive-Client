# 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html)
## 类型[​](setKeepScreenOn.html#类型)
```tsx
(option: Option) => Promise<Promised>
```

## 参数[​](setKeepScreenOn.html#参数)
参数类型option`Option`
### Promised[​](setKeepScreenOn.html#promised)
参数类型说明errMsg`string`调用结果
### Option[​](setKeepScreenOn.html#option)
参数类型必填说明keepScreenOn`boolean`是是否保持屏幕常亮complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](setKeepScreenOn.html#示例代码)
```tsx
// 保持屏幕常亮
Taro.setKeepScreenOn({
 keepScreenOn: true
})
```

- 
- 

- 
- 

-
