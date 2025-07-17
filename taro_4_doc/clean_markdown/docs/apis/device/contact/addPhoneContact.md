# 添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html)
## 类型[​](addPhoneContact.html#类型)
```tsx
(option: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](addPhoneContact.html#参数)
参数类型option`Option`
### Option[​](addPhoneContact.html#option)
参数类型必填说明firstName`string`是名字photoFilePath`string`否头像本地文件路径nickName`string`否昵称middleName`string`否中间名lastName`string`否姓氏remark`string`否备注mobilePhoneNumber`string`否手机号weChatNumber`string`否微信号addressCountry`string`否联系地址国家addressState`string`否联系地址省份addressCity`string`否联系地址城市addressStreet`string`否联系地址街道addressPostalCode`string`否联系地址邮政编码organization`string`否公司title`string`否职位workFaxNumber`string`否工作传真workPhoneNumber`string`否工作电话hostNumber`string`否公司电话email`string`否电子邮件url`string`否网站workAddressCountry`string`否工作地址国家workAddressState`string`否工作地址省份workAddressCity`string`否工作地址城市workAddressStreet`string`否工作地址街道workAddressPostalCode`string`否工作地址邮政编码homeFaxNumber`string`否住宅传真homePhoneNumber`string`否住宅电话homeAddressCountry`string`否住宅地址国家homeAddressState`string`否住宅地址省份homeAddressCity`string`否住宅地址城市homeAddressStreet`string`否住宅地址街道homeAddressPostalCode`string`否住宅地址邮政编码complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
- 
- 

-
