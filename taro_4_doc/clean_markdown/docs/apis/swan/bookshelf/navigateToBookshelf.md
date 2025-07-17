# 跳转到宿主书架
支持情况：!!!!!
> 百度小程序: （需宿主支持书架入口）

[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-navigateToBookshelf/)
## 类型[​](navigateToBookshelf.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](navigateToBookshelf.html#参数)
参数类型option`Option`
### Option[​](navigateToBookshelf.html#option)
参数类型必填说明category`string`是跳转到指定的内容分类
API 支持度: swancomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### Category[​](navigateToBookshelf.html#category)
参数说明article专栏模板doc文档模板cartoon动漫模板av影音模板
## 示例代码[​](navigateToBookshelf.html#示例代码)
```tsx
Taro.navigateToBookshelf({
 category: 'article',
 contentIds: 'test1',
 success(res) {
 Taro.showModal({
 title: 'navigateToBookshelf',
 content: 'success'
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
