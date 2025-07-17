# `EditorContext` 实例，可通过 `Taro.createSelectorQuery` 获取。 `EditorContext` 通过 `id` 跟一个 `editor` 组件绑定，操作对应的 `editor` 组件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.html)
## 方法[​](EditorContext.html#方法)
### blur[​](EditorContext.html#blur)
编辑器失焦，同时收起键盘。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.blur.html)
```tsx
(option?: BlurOption) => void
```
参数类型option`BlurOption`
### clear[​](EditorContext.html#clear)
清空编辑器内容
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.clear.html)
```tsx
(option?: ClearOption) => void
```
参数类型option`ClearOption`
### format[​](EditorContext.html#format)
修改样式
---

## 支持设置的样式列表[​](EditorContext.html#支持设置的样式列表)
namevaluebolditalicunderlinestrikeinsscriptsub / superheaderH1 / H2 / h3 / H4 / h5 / H6alignleft / center / right / justifydirectionrtlindent-1 / +1listordered / bullet / checkcolorhex colorbackgroundColorhex colormargin/marginTop/marginBottom/marginLeft/marginRightcss stylepadding/paddingTop/paddingBottom/paddingLeft/paddingRightcss stylefont/fontSize/fontStyle/fontVariant/fontWeight/fontFamilycss stylelineHeightcss styleletterSpacingcss styletextDecorationcss styletextIndentcss style
对已经应用样式的选区设置会取消样式。css style 表示 css 中规定的允许值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.format.html)
```tsx
(name: string, value?: string) => void
```
参数类型说明name`string`属性value`string`值
### getContents[​](EditorContext.html#getcontents)
获取编辑器内容
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getContents.html)
```tsx
(option?: GetContentsOption) => void
```
参数类型option`GetContentsOption`
### getSelectionText[​](EditorContext.html#getselectiontext)
获取编辑器已选区域内的纯文本内容。当编辑器失焦或未选中一段区间时，返回内容为空。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.getSelectionText.html)
```tsx
(option?: Option) => void
```
参数类型option`Option`
### insertDivider[​](EditorContext.html#insertdivider)
插入分割线
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertDivider.html)
```tsx
(option?: InsertDividerOption) => void
```
参数类型option`InsertDividerOption`
### insertImage[​](EditorContext.html#insertimage)
插入图片。
地址为临时文件时，获取的编辑器html格式内容中 `<img>` 标签增加属性 data-local，delta 格式内容中图片 attributes 属性增加 data-local 字段，该值为传入的临时文件地址。
开发者可选择在提交阶段上传图片到服务器，获取到网络地址后进行替换。替换时对于html内容应替换掉 `<img>` 的 src 值，对于 delta 内容应替换掉 `insert { image: abc }` 值。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertImage.html)
```tsx
(option: InsertImageOption) => void
```
参数类型option`InsertImageOption`
#### 示例代码[​](EditorContext.html#示例代码)
```tsx
this.editorCtx.insertImage({
 src: 'xx',
 width: '100px',
 height: '50px',
 extClass: className
})
```

### insertText[​](EditorContext.html#inserttext)
覆盖当前选区，设置一段文本
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.insertText.html)
```tsx
(option: InsertTextOption) => void
```
参数类型option`InsertTextOption`
### redo[​](EditorContext.html#redo)
恢复
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.redo.html)
```tsx
(option?: RedoOption) => void
```
参数类型option`RedoOption`
### removeFormat[​](EditorContext.html#removeformat)
清除当前选区的样式
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.removeFormat.html)
```tsx
(option?: RemoveFormatOption) => void
```
参数类型option`RemoveFormatOption`
### scrollIntoView[​](EditorContext.html#scrollintoview)
使得编辑器光标处滚动到窗口可视区域内。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.scrollIntoView.html)
```tsx
() => void
```

### setContents[​](EditorContext.html#setcontents)
初始化编辑器内容，html和delta同时存在时仅delta生效
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.setContents.html)
```tsx
(option: SetContentsOption) => void
```
参数类型option`SetContentsOption`
### undo[​](EditorContext.html#undo)
撤销
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/editor/EditorContext.undo.html)
```tsx
(option?: UndoOption) => void
```
参数类型option`UndoOption`
## 参数[​](EditorContext.html#参数)
### BlurOption[​](EditorContext.html#bluroption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ClearOption[​](EditorContext.html#clearoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### GetContentsOption[​](EditorContext.html#getcontentsoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### getSelectionText[​](EditorContext.html#getselectiontext-1)
#### Option[​](EditorContext.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](EditorContext.html#successcallbackresult)
参数类型说明text`string`纯文本内容
### InsertDividerOption[​](EditorContext.html#insertdivideroption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### InsertImageOption[​](EditorContext.html#insertimageoption)
参数类型必填说明src`string`是图片地址，仅支持 http(s)、base64、云图片(2.8.0)、临时文件(2.8.3)。nowrap`boolean`否插入图片后是否自动换行，默认换行alt`string`否图像无法显示时的替代文本complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）data`TaroGeneral.IAnyObject`否data 被序列化为 name=value;name1=value2 的格式挂在属性 data-custom 上extClass`string`否添加到图片 img 标签上的类名fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数height`string`否图片高度 (pixels/百分比)success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数width`string`否图片宽度（pixels/百分比)
### InsertTextOption[​](EditorContext.html#inserttextoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数text`string`否文本内容
### RedoOption[​](EditorContext.html#redooption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveFormatOption[​](EditorContext.html#removeformatoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SetContentsOption[​](EditorContext.html#setcontentsoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）delta`TaroGeneral.IAnyObject`否表示内容的delta对象fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数html`string`否带标签的HTML内容success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### UndoOption[​](EditorContext.html#undooption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
## API 支持度[​](EditorContext.html#api-支持度)
API微信小程序H5React NativeHarmonyEditorContext✔️EditorContext.blur✔️EditorContext.clear✔️EditorContext.format✔️EditorContext.getContents✔️EditorContext.getSelectionText✔️EditorContext.insertDivider✔️EditorContext.insertImage✔️EditorContext.insertText✔️EditorContext.redo✔️EditorContext.removeFormat✔️EditorContext.scrollIntoView✔️EditorContext.setContents✔️EditorContext.undo✔️
- 

- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

- 

- 
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

-
