# 获取[第三方平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html)自定义的数据字段。
**Tips**

- 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfig 是否存在来兼容
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html)
## 类型[​](getExtConfig.html#类型)
```tsx
(option?: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getExtConfig.html#参数)
参数类型option`Option`
### Option[​](getExtConfig.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getExtConfig.html#successcallbackresult)
参数类型说明extConfig`TaroGeneral.IAnyObject`第三方平台自定义的数据errMsg`string`调用结果
## 示例代码[​](getExtConfig.html#示例代码)
```tsx
if(Taro.getExtConfig) {
 Taro.getExtConfig({
 success: function (res) {
 console.log(res.extConfig)
 }
 })
}
```

- 
- 

- 
- 

-
