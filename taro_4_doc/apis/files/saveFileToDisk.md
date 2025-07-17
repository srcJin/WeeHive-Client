# 保存文件系统的文件到用户磁盘，仅在 PC 端支持
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFileToDisk.html)
## 类型[​](saveFileToDisk.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](saveFileToDisk.html#参数)
参数类型option`Option`
### Option[​](saveFileToDisk.html#option)
参数类型必填说明filePath`string`是待保存文件路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](saveFileToDisk.html#示例代码)
```tsx
Taro.saveFileToDisk({
 filePath: `${Taro.env.USER_DATA_PATH}/hello.txt`,
 success(res) {
 console.log(res)
 },
 fail(res) {
 console.error(res)
 }
})
```

- 
- 

- 

-
