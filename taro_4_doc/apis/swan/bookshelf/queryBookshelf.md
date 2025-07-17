# 查询宿主书架的相关内容
支持情况：!!!!!!
> 百度小程序: （需宿主支持书架入口）

[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-queryBookshelf/)
## 类型[​](queryBookshelf.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](queryBookshelf.html#参数)
参数类型option`Option`
### Option[​](queryBookshelf.html#option)
参数类型必填说明contentIds`string[]`是要查询内容的 id，支持传多个，最多 100 条；注释：contentId 为内容 id，内容的唯一标识，自定义，最长 22 字符（不能含有空格、中文字符）complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](queryBookshelf.html#successcallbackresult)
参数类型说明list`IListItem[]`查询的内容结果列表
### IListItem[​](queryBookshelf.html#ilistitem)
参数类型说明contentId`string`内容的唯一标识status`keyof Status`状态
### Status[​](queryBookshelf.html#status)
参数说明0不存在1存在
## 示例代码[​](queryBookshelf.html#示例代码)
```tsx
Taro.queryBookshelf({
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
