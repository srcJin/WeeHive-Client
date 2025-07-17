# 分享数据到微信运动。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html)
## 类型[​](shareToWeRun.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](shareToWeRun.html#参数)
参数类型option`Option`
### Option[​](shareToWeRun.html#option)
参数类型必填说明recordList`record[]`是运动数据列表complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### record[​](shareToWeRun.html#record)
参数类型说明typeId`number`运动项目idtime`number`运动时长distance`number`运动距离calorie`number`消耗卡路里
- 
- 

- 
-
