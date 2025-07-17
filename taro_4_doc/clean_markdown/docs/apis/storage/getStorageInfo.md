# 异步获取当前storage的相关信息
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html)
## 类型[​](getStorageInfo.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](getStorageInfo.html#参数)
参数类型option`Option`
### Option[​](getStorageInfo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(option: SuccessCallbackOption) => void`否接口调用成功的回调函数
### SuccessCallbackOption[​](getStorageInfo.html#successcallbackoption)
参数类型说明currentSize`number`当前占用的空间大小, 单位 KBkeys`string[]`当前 storage 中所有的 keylimitSize`number`限制的空间大小，单位 KB
## 示例代码[​](getStorageInfo.html#示例代码)
```tsx
Taro.getStorageInfo({
 success: function (res) {
 console.log(res.keys)
 console.log(res.currentSize)
 console.log(res.limitSize)
 }
})
```

- 
- 

- 
- 

-
