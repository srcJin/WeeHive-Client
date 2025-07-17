# 开启双人通话
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.setEnable1v1Chat.html)
## 类型[​](setEnable1v1Chat.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](setEnable1v1Chat.html#参数)
参数类型option`Option`
### Option[​](setEnable1v1Chat.html#option)
参数类型默认值必填说明enable`boolean`是是否开启backgroundType`keyof ColorType``0`否窗口背景色minWindowType`keyof ColorType``1`否小窗样式complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ColorType[​](setEnable1v1Chat.html#colortype)
音频通话背景以及小窗模式背景
参数说明0#2629301#FA51512#FA9D3B3#3D72574#1485EE5#6467F0
- 
- 

- 
-
