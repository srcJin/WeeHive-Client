# 删除书架中的内容（需宿主支持书架入口)
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-deleteBookshelf/)
## 类型[​](deleteBookshelf.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](deleteBookshelf.html#参数)
参数类型option`Option`
### Option[​](deleteBookshelf.html#option)
参数类型必填说明category`string`是要删除的内容分类contentIds`string[]`是要删除书架内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符）。支持批量删除的同一个 category 下的多个 id，不同 category 下的 id 请分别调用该接口删除complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### Category[​](deleteBookshelf.html#category)
参数说明article专栏模板doc文档模板cartoon动漫模板av影音模板
### SuccessCallbackResult[​](deleteBookshelf.html#successcallbackresult)
参数类型说明list`IListItem[]`添加到书架的结果列表
### IListItem[​](deleteBookshelf.html#ilistitem)
参数类型说明contentId`string`内容的唯一标识status`keyof Status`删除状态：值为 0 时是失败，为 1 时是成功msg`string`删除信息
### Status[​](deleteBookshelf.html#status)
参数说明0失败1成功
## 示例代码[​](deleteBookshelf.html#示例代码)
```tsx
Taro.deleteBookshelf({
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
