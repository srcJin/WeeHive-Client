# 提前下载好子包的资源，目录结构配置参考[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/api/open/swan-loadSubPackage/)
## 类型[​](loadSubPackage.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](loadSubPackage.html#参数)
参数类型option`Option`
### Option[​](loadSubPackage.html#option)
参数类型必填说明success`(res: TaroGeneral.CallbackResult) => any`否接口调用成功的回调函数fail`(err: TaroGeneral.CallbackResult) => any`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => any`否接口调用结束的回调函数（调用成功、失败都会执行）
- 
- 

-
