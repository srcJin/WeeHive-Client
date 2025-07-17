# 收藏文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addFileToFavorites.html)
## 类型[​](addFileToFavorites.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](addFileToFavorites.html#参数)
参数类型option`Option`
### Option[​](addFileToFavorites.html#option)
参数类型必填说明filePath`string`是要收藏的文件地址，必须为本地路径或临时路径fileName`string`否自定义文件名，若留空则使用filePath中的文件名complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](addFileToFavorites.html#示例代码)
### 示例 1[​](addFileToFavorites.html#示例-1)
```tsx
// callback 写法
Taro.downloadFile({
 url: URL, // 下载url
 success (res) {
 // 下载完成后收藏
 Taro.addFileToFavorites({
 filePath: res.tempFilePath,
 success() {},
 fail: console.error,
 })
 },
 fail: console.error,
})
```

### 示例 2[​](addFileToFavorites.html#示例-2)
```tsx
// async await 写法
const { tempFilePath } = await Taro.downloadFile({
 url: URL, // 下载url
})
// 下载完成后收藏
await Taro.addFileToFavorites({
 filePath: res.tempFilePath,
})
```

- 
- 

- 

- 

- 
-
