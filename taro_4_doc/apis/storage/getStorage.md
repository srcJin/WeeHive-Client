# 从本地缓存中异步获取指定 key 的内容
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html)
## 类型[​](getStorage.html#类型)
```tsx
<T = any>(option: Option<T>) => Promise<SuccessCallbackResult<T>>
```

## 参数[​](getStorage.html#参数)
参数类型option`T`
### Option[​](getStorage.html#option)
参数类型必填说明key`string`是本地缓存中指定的 keycomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult<T>) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getStorage.html#successcallbackresult)
参数类型说明data`T`key对应的内容errMsg`string`调用结果
## 示例代码[​](getStorage.html#示例代码)
```tsx
Taro.getStorage({
 key: 'key',
 success: function (res) {
 console.log(res.data)
 }
})
```

- 
- 

- 
- 

-
