# 从本地缓存中异步批量获取指定 key 的内容。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.batchGetStorage.html)
## 类型[​](batchGetStorage.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](batchGetStorage.html#参数)
参数类型option`Option`
### Option[​](batchGetStorage.html#option)
参数类型必填说明keyList`string[]`是本地缓存中指定的 keyListcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](batchGetStorage.html#示例代码)
```tsx
Taro.batchGetStorage({
 keyList: ['key'],
 success(res) {
 console.log(res)
 }
})
```

- 
- 

- 

-
