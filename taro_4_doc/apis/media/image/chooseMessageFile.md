# 从客户端会话选择文件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)
## 类型[​](chooseMessageFile.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseMessageFile.html#参数)
参数类型option`Option`
### Option[​](chooseMessageFile.html#option)
参数类型必填说明count`number`是最多可以选择的文件个数，可以 0～100complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）extension`string[]`否根据文件拓展名过滤，仅 type==file 时有效。每一项都不能是空字符串。默认不过滤。fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数type`keyof SelectType`否所选的文件的类型
### SuccessCallbackResult[​](chooseMessageFile.html#successcallbackresult)
参数类型说明tempFiles`ChooseFile[]`返回选择的文件的本地临时文件对象数组errMsg`string`调用结果
### ChooseFile[​](chooseMessageFile.html#choosefile)
返回选择的文件的本地临时文件对象数组
参数类型说明name`string`选择的文件名称path`string`本地临时文件路径size`number`本地临时文件大小，单位 Btime`number`选择的文件的会话发送时间，Unix时间戳，工具暂不支持此属性type`keyof SelectedType`选择的文件类型
### SelectType[​](chooseMessageFile.html#selecttype)
参数说明all从所有文件选择video只能选择视频文件image只能选择图片文件file可以选择除了图片和视频之外的其它的文件
### SelectedType[​](chooseMessageFile.html#selectedtype)
参数说明video选择了视频文件image选择了图片文件file选择了除图片和视频的文件
## 示例代码[​](chooseMessageFile.html#示例代码)
```tsx
Taro.chooseMessageFile({
 count: 10,
 type: 'image',
 success: function (res) {
 // tempFilePath可以作为img标签的src属性显示图片
 const tempFilePaths = res.tempFiles
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
