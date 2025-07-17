# 动态设置当前页面的标题。此方法为 web 版小程序专用方法，使用前需判断方法是否存在。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-setDocumentTitle/)
## 类型[​](setDocumentTitle.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](setDocumentTitle.html#参数)
参数类型option`Option`
### Option[​](setDocumentTitle.html#option)
参数类型必填说明title`string`是页面中 title 标签中的内容success`(res: any) => any`否接口调用成功的回调函数fail`(err: any) => any`否接口调用失败的回调函数complete`(res: any) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
- 
- 

-
