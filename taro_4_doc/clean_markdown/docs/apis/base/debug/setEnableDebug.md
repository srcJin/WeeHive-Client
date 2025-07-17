# 设置是否打开调试开关，此开关对正式版也能生效。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html)
## 类型[​](setEnableDebug.html#类型)
```tsx
(res: Option) => Promise<Promised>
```

## 参数[​](setEnableDebug.html#参数)
参数类型res`Option`
### Option[​](setEnableDebug.html#option)
参数类型必填说明enableDebug`boolean`是是否打开调试complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Promised[​](setEnableDebug.html#promised)
参数类型说明errMsg`string`调用结果
## 示例代码[​](setEnableDebug.html#示例代码)
```tsx
// 打开调试
Taro.setEnableDebug({
 enableDebug: true
})
// 关闭调试
Taro.setEnableDebug({
 enableDebug: false
})
```

- 
- 

- 
- 

-
