# Snapshot 实例，可通过 SelectorQuery 获取。
Snapshot 通过 id 跟一个 snapshot 组件绑定，操作对应的 snapshot 组件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.html)
## 方法[​](Snapshot.html#方法)
参数类型说明width`number`画布宽度height`number`画布高度
### takeSnapshot[​](Snapshot.html#takesnapshot)
对 snapshot 组件子树进行截图
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/skyline/Snapshot.takeSnapshot.html)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`Option`
## 参数[​](Snapshot.html#参数)
### TakeSnapshot[​](Snapshot.html#takesnapshot-1)
#### Option[​](Snapshot.html#option)
参数类型必填说明type`string`是截图导出类型，'file' 保存到临时文件目录或 'arraybuffer' 返回图片二进制数据，默认值为 'file'format`string`是截图文件格式，'rgba' 或 'png'，默认值为 'png'complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
#### SuccessCallbackResult[​](Snapshot.html#successcallbackresult)
参数类型说明tempFilePath`string`截图保存的临时文件路径，当 type 为 file 该字段生效data`string`截图对应的二进制数据，当 type 为 arraybuffer 该字段生效
## API 支持度[​](Snapshot.html#api-支持度)
API微信小程序H5React NativeHarmonySnapshot✔️
- 

- 

- 

- 

-
