# 更新已加入宿主书架的内容的阅读时间
支持情况：!!!!!!
> 百度小程序: （需宿主支持书架入口）

[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-queryBookshelf/)
## 类型[​](updateBookshelfReadTime.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](updateBookshelfReadTime.html#参数)
参数类型option`Option`
### Option[​](updateBookshelfReadTime.html#option)
参数类型必填说明category`string`是添加的内容分类contentIds`string[]`是要更新内容的 id；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### Category[​](updateBookshelfReadTime.html#category)
参数说明article专栏模板doc文档模板cartoon动漫模板av影音模板
### SuccessCallbackResult[​](updateBookshelfReadTime.html#successcallbackresult)
参数类型说明status`keyof Status`更新状态msg`string`更新的结果信息
### Status[​](updateBookshelfReadTime.html#status)
参数说明0失败1成功
## 示例代码[​](updateBookshelfReadTime.html#示例代码)
```tsx
Taro.updateBookshelfReadTime({
 category: 'doc',
 contentIds: 'test1',
 success(res) {
 Taro.showModal({
 title: 'success',
 content: JSON.stringify(res)
 })
 },
 fail(err) {
 Taro.showModal({
 title: 'fail',
 content: JSON.stringify(err)
 })
 }
})
```

- 
- 

- 
- 
- 
- 

-
