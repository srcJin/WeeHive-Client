# 收藏视频
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/favorites/wx.addVideoToFavorites.html)
## 类型[​](addVideoToFavorites.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](addVideoToFavorites.html#参数)
参数类型option`Option`
### Option[​](addVideoToFavorites.html#option)
参数类型必填说明videoPath`string`是要收藏的视频地址，必须为本地路径或临时路径thumbPath`string`否缩略图路径，若留空则使用视频首帧complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](addVideoToFavorites.html#示例代码)
### 示例 1[​](addVideoToFavorites.html#示例-1)
```tsx
// callback 写法
Taro.downloadFile({
 url: URL, // 下载url
 success (res) {
 // 下载完成后收藏
 Taro.addVideoToFavorites({
 videoPath: res.tempFilePath,
 success() {},
 fail: console.error,
 })
 },
 fail: console.error,
})
```

### 示例 2[​](addVideoToFavorites.html#示例-2)
```tsx
// async await 写法
const { tempFilePath } = await Taro.downloadFile({
 url: URL, // 下载url
})
// 下载完成后收藏
await Taro.addVideoToFavorites({
 videoPath: res.tempFilePath,
})
```

- 
- 

- 

- 

- 
-
