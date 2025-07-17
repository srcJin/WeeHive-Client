# 退出当前小程序。必须有点击行为才能调用成功。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.exitMiniProgram.html)
## 类型[​](exitMiniProgram.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](exitMiniProgram.html#参数)
参数类型option`Option`
### Option[​](exitMiniProgram.html#option)
参数类型必填说明success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
## 示例代码[​](exitMiniProgram.html#示例代码)
```tsx
Taro.exitMiniProgram()
···
```

- 
- 

- 

-
