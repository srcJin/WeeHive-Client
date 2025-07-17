# 小程序消息订阅服务，包括取消订阅和查询订阅；订阅操作详见 [form 表单](https://smartprogram.baidu.com/docs/develop/component/formlist_form/)。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-subscribeService/)
## 类型[​](subscribeService.html#类型)
```tsx
(option: subscribeService.Option) => void
```

## 参数[​](subscribeService.html#参数)
参数类型option`subscribeService.Option`
## 示例代码[​](subscribeService.html#示例代码)
```tsx
Taro.subscribeService({
 templateId: 'BD0003',
 subscribeId: '8026',
 type: 'query',
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
