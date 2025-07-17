# 显示操作菜单
**注意**

- Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
- Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html)
## 类型[​](showActionSheet.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](showActionSheet.html#参数)
参数类型option`Option`
### Option[​](showActionSheet.html#option)
参数类型必填说明alertText`string`否警示文案itemList`string[]`是按钮的文字数组，数组长度最大为 6complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数itemColor`string`否按钮的文字颜色success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](showActionSheet.html#successcallbackresult)
参数类型说明tapIndex`number`用户点击的按钮序号，从上到下的顺序，从0开始errMsg`string`调用结果
## 示例代码[​](showActionSheet.html#示例代码)
```tsx
Taro.showActionSheet({
 itemList: ['A', 'B', 'C'],
 success: function (res) {
 console.log(res.tapIndex)
 },
 fail: function (res) {
 console.log(res.errMsg)
 }
})
```

- 
- 

- 
- 

-
