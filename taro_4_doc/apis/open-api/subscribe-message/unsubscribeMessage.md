# 取消当前用户已订阅的消息
支持情况：!!!!!
[> 参考文档
](https://opendocs.alipay.com/mini/07vg26?pathHash=8c9630ac)
## 类型[​](unsubscribeMessage.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](unsubscribeMessage.html#参数)
参数类型option`Option`
### Option[​](unsubscribeMessage.html#option)
参数类型必填说明entityIds`string[]`是需要取消订阅的消息模板 id 集合（注意：1、一次性模板 id 和长期性模板 id 不可同时使用，2、一次最多传入三个模板 id）。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## 示例代码[​](unsubscribeMessage.html#示例代码)
```tsx
Taro.unsubscribeMessage({
 entityIds: [
 'ac768fca1ce245ccae9404bb5243c49b',
 '9aa357acb7c6434aba294aded1cdfb7c',
 ],
 success(res) {
 console.log(res);
 },
 fail(err) {
 console.log(err);
 }
})
```

- 
- 

- 

-
