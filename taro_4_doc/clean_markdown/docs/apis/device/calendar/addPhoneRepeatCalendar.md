# 向系统日历添加重复事件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/calendar/wx.addPhoneRepeatCalendar.html)
## 类型[​](addPhoneRepeatCalendar.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](addPhoneRepeatCalendar.html#参数)
参数类型option`Option`
### Option[​](addPhoneRepeatCalendar.html#option)
参数类型默认值必填说明title`string`是日历事件标题startTime`number`是开始时间的 unix 时间戳 (1970年1月1日开始所经过的秒数)allDay`boolean``false`否是否全天事件description`string`否事件说明location`string`否事件位置endTime`string`否结束时间的 unix 时间戳，默认与开始时间相同alarm`boolean``true`否是否提醒alarmOffset`number``0`否提醒提前量，单位秒，默认 0 表示开始时提醒repeatInterval`keyof RepeatInterval``"month"`否重复周期，默认 month 每月重复repeatEndTime`number`否重复周期结束时间的 unix 时间戳，不填表示一直重复complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RepeatInterval[​](addPhoneRepeatCalendar.html#repeatinterval)
参数说明day每天重复week每周重复month每月重复。该模式日期不能大于 28 日year每年重复
- 
- 

- 
-
