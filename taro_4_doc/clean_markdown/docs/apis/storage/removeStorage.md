# 从本地缓存中移除指定 key
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html)
## 类型[​](removeStorage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](removeStorage.html#参数)
参数类型option`Option`
### Option[​](removeStorage.html#option)
参数类型必填说明key`string`是本地缓存中指定的 keycomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](removeStorage.html#示例代码)
```tsx
Taro.removeStorage({
 key: 'key',
 success: function (res) {
 console.log(res)
 }
})
```

- 
- 

- 

-
