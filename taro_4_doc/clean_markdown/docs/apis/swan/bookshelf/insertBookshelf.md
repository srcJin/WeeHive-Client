# 添加内容到宿主书架
支持情况：!!!!!!
> 百度小程序: （需宿主支持书架入口）

[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-insertBookshelf/)
## 类型[​](insertBookshelf.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](insertBookshelf.html#参数)
参数类型option`Option`
### Option[​](insertBookshelf.html#option)
参数类型必填说明category`string`是添加的内容分类contentIds`string[]`是要添加到书架内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### Category[​](insertBookshelf.html#category)
参数说明article专栏模板doc文档模板cartoon动漫模板av影音模板
### SuccessCallbackResult[​](insertBookshelf.html#successcallbackresult)
参数类型说明list`IListItem[]`添加到书架的结果列表
### IListItem[​](insertBookshelf.html#ilistitem)
参数类型说明contentId`string`内容的唯一标识status`keyof Status`添加状态：值为 0 时是失败，为 1 时是成功msg`string`添加信息
### Status[​](insertBookshelf.html#status)
参数说明0失败1成功
## 示例代码[​](insertBookshelf.html#示例代码)
```tsx
Taro.insertBookshelf({
 category: 'doc',
 contentIds: ['test1', 'test2'],
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

-
