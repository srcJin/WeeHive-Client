# 按钮
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
## 类型[​](button.html#类型)
```tsx
ComponentType<ButtonProps>
```

## 示例代码[​](button.html#示例代码)

- React
- Vue
```tsx
export default class PageButton extends Component {
 state = {
 btn: [
 {
 text: '页面主操作 Normal',
 size: 'default',
 type: 'primary'
 },
 {
 text: '页面主操作 Loading',
 size: 'default',
 type: 'primary',
 loading: true,
 },
 {
 text: '页面主操作 Disabled',
 size: 'default',
 type: 'primary',
 disabled: true,
 },
 {
 text: '页面次要操作 Normal',
 size: 'default',
 type: 'default'
 },
 {
 text: '页面次要操作 Disabled',
 size: 'default',
 type: 'default',
 disabled: true,
 },
 {
 text: '警告类操作 Normal',
 size: 'default',
 type: 'warn'
 },
 {
 text: '警告类操作 Disabled',
 size: 'default',
 type: 'warn',
 disabled: true,
 }
 ]
 }
 render () {
 return (
 <View className='container'>
 {this.state.btn.map(item => {
 return (
 <Button
 size={item.size ? item.size : ''}
 type={item.type ? item.type : ''}
 loading={item.loading ? item.loading : false}
 disabled={item.disabled ? item.disabled : false}
 >
 {item.text}
 </Button>
 )
 })}
 <Button className='btn-max-w' plain type='primary'>按钮</Button>
 <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
 <Button className='btn-max-w' plain >按钮</Button>
 <Button className='btn-max-w' plain disabled >按钮</Button>
 <Button size='mini' type='primary'>按钮</Button>
 <Button size='mini' >按钮</Button>
 <Button size='mini' type='warn'>按钮</Button>
 <Button openType='getPhoneNumber' onGetPhoneNumber="callback">按钮</Button>
 </View>
 )
 }
}
html
<template>
 <view class="container">
 <button
 v-for="item in btn"
 :size="item.size ? item.size : ''"
 :type="item.type ? item.type : ''"
 :loading="item.loading ? item.loading : false"
 :disabled="item.disabled ? item.disabled : false"
 >
 {{ item.text }}
 </button>
 <button class="btn-max-w" :plain="true" type="primary">按钮</button>
 <button class="btn-max-w" :plain="true" type="primary" :disabled="true">不可点击的按钮</button>
 <button class="btn-max-w" :plain="true">按钮</button>
 <button class="btn-max-w" :plain="true" :disabled="true">按钮</button>
 <button size="mini" type="primary">按钮</button>
 <button size="mini" >按钮</button>
 <button size="mini" type="warn">按钮</button>
 <button open-type="getPhoneNumber" @getphonenumber="callback">按钮</button>
 </view>
</template>

<script>
export default {
 data() {
 return {
 btn: [
 {
 text: '页面主操作 Normal',
 size: 'default',
 type: 'primary'
 },
 {
 text: '页面主操作 Loading',
 size: 'default',
 type: 'primary',
 loading: true,
 },
 {
 text: '页面主操作 Disabled',
 size: 'default',
 type: 'primary',
 disabled: true,
 },
 {
 text: '页面次要操作 Normal',
 size: 'default',
 type: 'default'
 },
 {
 text: '页面次要操作 Disabled',
 size: 'default',
 type: 'default',
 disabled: true,
 },
 {
 text: '警告类操作 Normal',
 size: 'default',
 type: 'warn'
 },
 {
 text: '警告类操作 Disabled',
 size: 'default',
 type: 'warn',
 disabled: true,
 }
 ]
 }
 }
}
</script>
```

## ButtonProps[​](button.html#buttonprops)
参数类型默认值必填说明size`keyof Size``default`否按钮的大小type`keyof Type``default`否按钮的样式类型plain`boolean``false`否按钮是否镂空，背景色透明disabled`boolean``false`否是否禁用loading`boolean``false`否名称前是否带 loading 图标formType`keyof FormType`否用于 `<form/>` 组件，点击分别会触发 `<form/>` 组件的 submit/reset 事件openType`OpenType`否微信开放能力hoverClass`string``button-hover`否指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果hoverStyle`StyleProp<ViewStyle>``none`否由于 RN 不支持 hoverClass，故 RN 端的 Button 组件实现了 `hoverStyle`属性，写法和 style 类似，只不过 `hoverStyle` 的样式是指定按下去的样式。hoverStopPropagation`boolean``false`否指定是否阻止本节点的祖先节点出现点击态hoverStartTime`number``20`否按住后多久出现点击态，单位毫秒hoverStayTime`number``70`否手指松开后点击态保留时间，单位毫秒lang`keyof Lang`否指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。

生效时机: `open-type="getUserInfo"`sessionFrom`string`否会话来源

生效时机：`open-type="contact"`sendMessageTitle`string``当前标题`否会话内消息卡片标题

生效时机：`open-type="contact"`sendMessagePath`string``当前标题`否会话内消息卡片点击跳转小程序路径

生效时机：`open-type="contact"`sendMessageImg`string``截图`否会话内消息卡片图片

生效时机：`open-type="contact"`appParameter`string`否打开 APP 时，向 APP 传递的参数

生效时机：`open-type="launchApp"`scope"userInfo" or "phoneNumber"否支付宝小程序 scope

生效时机：`open-type="getAuthorize"`showMessageCard`boolean``false`否显示会话内消息卡片

生效时机：`open-type="contact"`publicId`string`否生活号 id，必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效。templateIdstring or string[]否发送订阅类模板消息所用的模板库标题 ID ，可通过 getTemplateLibraryList 获取
当参数类型为 Array 时，可传递 1~3 个模板库标题 IDsubscribeId`string`否发送订阅类模板消息时所使用的唯一标识符，内容由开发者自定义，用来标识订阅场景
注意：同一用户在同一 subscribe-id 下的多次授权不累积下发权限，只能下发一条。若要订阅多条，需要不同 subscribe-idgroupId`string`否群聊 idguildId`string`否打开频道页面时，传递的频道号shareType`string``27`否分享类型集合，请参考下面share-type有效值说明。share-type后续将不再维护，请更新为share-modeshareMode`string``['qq', 'qzone']`否分享类型集合，请参考下面share-mode有效值说明ariaLabel`string`否无障碍访问，（属性）元素的额外描述openId`string`否添加好友时，对方的 openidshareMessageFriendInfo`string`否发送对象的 FriendInfoshareMessageTitle`string`否转发标题，不传则默认使用当前小程序的昵称。 FriendInfoshareMessageImg`string`否转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4FriendInfodataAwemeId`string`否跳转抖音号个人页，只支持小程序绑定的品牌号、员工号、合作号dataIsHalfPage`boolean`否是否开启半屏模式onGetUserInfo`CommonEventFunction<onGetUserInfoEventDetail>`否用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与 Taro.getUserInfo 返回的一致

生效时机: `open-type="getUserInfo"`onGetAuthorize`CommonEventFunction`否支付宝获取会员基础信息授权回调

生效时机：`open-type="getAuthorize"`onContact`CommonEventFunction<onContactEventDetail>`否客服消息回调

生效时机：`open-type="contact"`onGetPhoneNumber`CommonEventFunction<onGetPhoneNumberEventDetail>`否获取用户手机号回调

生效时机：`open-type="getPhoneNumber"`onGetRealTimePhoneNumber`CommonEventFunction<onGetRealTimePhoneNumberEventDetail>`否手机号实时验证回调，`open-type="getRealtimePhoneNumber"` 时有效onError`CommonEventFunction`否当使用开放能力时，发生错误的回调

生效时机：`open-type="launchApp"`onOpenSetting`CommonEventFunction<onOpenSettingEventDetail>`否在打开授权设置页后回调

生效时机：`open-type="openSetting"`onLaunchApp`CommonEventFunction`否打开 APP 成功的回调

生效时机：`open-type="launchApp"`onChooseAvatar`CommonEventFunction`否获取用户头像回调

生效时机：`open-type="chooseAvatar"`onAgreePrivacyAuthorization`CommonEventFunction`否用户同意隐私协议事件回调，`open-type="agreePrivacyAuthorization"`时有效onTap`CommonEventFunction`否点击。
说明： 每点击一次会触发一次事件，建议自行使用代码防止重复点击,可以使用 js 防抖和节流实现。onFollowLifestyleCommonEventFunction<{ followStatus: true or 1 or 2 or 3; }>否当 open-type 为 lifestyle 时有效。
当点击按钮时触发。
event.detail = { followStatus }，followStatus 合法值有 1、2、3，其中 1 表示已关注。2 表示用户不允许关注。3 表示发生未知错误；
已知问题：基础库 1.0，当用户在点击按钮前已关注生活号，event.detail.followStatus 的值为 true。onChooseAddress`CommonEventFunction`否用户点击该按钮时，调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址，从返回参数的 detail 中获取，和 swan.chooseAddress 一样的。和 open-type 搭配使用，使用时机：open-type="chooseAddress"onChooseInvoiceTitle`CommonEventFunction`否用户点击该按钮时，选择用户的发票抬头，和 swan.chooseInvoiceTitle 一样的。和 open-type 搭配使用，使用时机：open-type="chooseInvoiceTitle"onLogin`CommonEventFunction`否登录回调，和 open-type 搭配使用，使用时机：open-type="login"。可以通过返回参数的 detail 判断是否登录成功，当 errMsg 为'login:ok'时即为成功。如想获取登录凭证请使用 swan.getLoginCodeonSubscribe`CommonEventFunction`否订阅消息授权回调，和 open-type 搭配使用，使用时机：open-type="subscribe"onAddFriend`CommonEventFunction`否添加好友的回调onAddGroupApp`CommonEventFunction`否添加群应用的回调。errCode 错误码：41004（当前用户非管理员或群主，无权操作），41005（超过可添加群应用的群数量）onOpenAwemeUserProfile`CommonEventFunction`否监听跳转抖音号个人页的回调

生效时机：`open-type="openAwemeUserProfile"`onJoinGroup`CommonEventFunction<{ errMsg: string; errNo: number; }>`否加群后触发
### API 支持度[​](button.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridButtonProps.size✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.type✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.plain✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.disabled✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.loading✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.formType✔️✔️✔️✔️✔️✔️✔️ButtonProps.openType✔️✔️✔️✔️✔️✔️ButtonProps.hoverClass✔️✔️✔️✔️✔️✔️✔️✔️(支持 hoverStyle 属性，但框架未支持 hoverClass)✔️ButtonProps.hoverStyle✔️ButtonProps.hoverStopPropagation✔️✔️✔️✔️✔️✔️ButtonProps.hoverStartTime✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.hoverStayTime✔️✔️✔️✔️✔️✔️✔️✔️✔️ButtonProps.lang✔️✔️✔️ButtonProps.sessionFrom✔️✔️ButtonProps.sendMessageTitle✔️✔️ButtonProps.sendMessagePath✔️✔️ButtonProps.sendMessageImg✔️✔️ButtonProps.appParameter✔️✔️✔️ButtonProps.scope✔️ButtonProps.showMessageCard✔️✔️ButtonProps.publicId✔️✔️ButtonProps.templateId✔️ButtonProps.subscribeId✔️ButtonProps.groupId✔️(通过创建聊天群、查询群信息获取)✔️(打开群资料卡时，传递的群号)ButtonProps.guildId✔️ButtonProps.shareType✔️ButtonProps.shareMode✔️ButtonProps.ariaLabel✔️ButtonProps.openId✔️ButtonProps.shareMessageFriendInfo✔️ButtonProps.shareMessageTitle✔️ButtonProps.shareMessageImg✔️ButtonProps.dataAwemeId✔️ButtonProps.dataIsHalfPage✔️ButtonProps.onGetUserInfo✔️✔️✔️✔️✔️ButtonProps.onGetAuthorize✔️ButtonProps.onContact✔️✔️✔️ButtonProps.onGetPhoneNumber✔️✔️✔️✔️✔️ButtonProps.onGetRealTimePhoneNumber✔️ButtonProps.onError✔️✔️✔️✔️ButtonProps.onOpenSetting✔️✔️✔️✔️✔️ButtonProps.onLaunchApp✔️✔️ButtonProps.onChooseAvatar✔️ButtonProps.onAgreePrivacyAuthorization✔️ButtonProps.onTap✔️ButtonProps.onFollowLifestyle✔️ButtonProps.onChooseAddress✔️ButtonProps.onChooseInvoiceTitle✔️ButtonProps.onLogin✔️ButtonProps.onSubscribe✔️ButtonProps.onAddFriend✔️ButtonProps.onAddGroupApp✔️ButtonProps.onOpenAwemeUserProfile✔️ButtonProps.onJoinGroup✔️
### Size[​](button.html#size)
size 的合法值
参数说明default默认大小mini小尺寸
### Type[​](button.html#type)
type 的合法值
参数说明primary绿色default白色warn红色
### FormType[​](button.html#formtype)
form-type 的合法值
参数说明submit提交表单reset重置表单
### OpenType[​](button.html#opentype)
open-type 的合法值
### openTypeKeys[​](button.html#opentypekeys)
open-type 的合法值
参数类型说明weapp{ contact: any; share: any; getPhoneNumber: any; getRealtimePhoneNumber: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; chooseAvatar: any; agreePrivacyAuthorization: any; "getPhoneNumberoragreePrivacyAuthorization": any; "getRealtimePhoneNumberoragreePrivacyAuthorization": any; "getUserInfoorag...alipay`{ share: any; getAuthorize: any; contactShare: any; lifestyle: any; }`支付宝小程序专属的 open-type 合法值
[参考地址](https://opendocs.alipay.com/mini/component/button)qq`{ share: any; getUserInfo: any; launchApp: any; openSetting: any; feedback: any; openGroupProfile: any; addFriend: any; addColorSign: any; openPublicProfile: any; addGroupApp: any; shareMessageToFriend: any; }`QQ 小程序专属的 open-type 合法值
[参考地址](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html)tt`{ share: any; getPhoneNumber: any; im: any; platformIm: any; navigateToVideoView: any; openAwemeUserProfile: any; openWebcastRoom: any; addCalendarEvent: any; addShortcut: any; joinGroup: any; privateMessage: any; authorizePrivateMessage: any; }`TT 小程序专属的 open-type 合法值
[参考地址](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/list/button/#open-type-%E7%9A%84%E5%90%88%E6%B3%95%E5%80%BC)
### Lang[​](button.html#lang)
lang 的合法值
参数说明en英文zh_CN简体中文zh_TW繁体中文
### onGetUserInfoEventDetail[​](button.html#ongetuserinfoeventdetail)
参数类型必填说明userInfo`{ nickName: string; avatarUrl: string; avatar: string; gender: keyof Gender; province: string; city: string; country: string; }`是rawData`string`是不包括敏感信息的原始数据 `JSON` 字符串，用于计算签名signature`string`是使用 `sha1(rawData + sessionkey)` 得到字符串，用于校验用户信息encryptedData`string`是包括敏感数据在内的完整用户信息的加密数据iv`string`是加密算法的初始向量errMsg`string`是cloudID`string`否敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
### Gender[​](button.html#gender)
性别的合法值
参数说明0未知1男2女
### onContactEventDetail[​](button.html#oncontacteventdetail)
参数类型说明errMsg`string`path`string`小程序消息指定的路径query`Record<string, any>`小程序消息指定的查询参数
### onGetPhoneNumberEventDetail[​](button.html#ongetphonenumbereventdetail)
参数类型必填说明errMsg`string`是encryptedData`string`是包括敏感数据在内的完整用户信息的加密数据iv`string`是加密算法的初始向量code`string`否动态令牌。可通过动态令牌换取用户手机号。
[参考地址](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#%E4%BD%BF%E7%94%A8%E6%8C%87%E5%BC%95)sign`string`是签名信息，如果在开放平台后台配置了加签方式后有此字段
#### API 支持度[​](button.html#api-支持度-1)
API微信小程序支付宝小程序H5React NativeHarmonyonGetPhoneNumberEventDetail.sign✔️
### onGetRealTimePhoneNumberEventDetail[​](button.html#ongetrealtimephonenumbereventdetail)
参数类型code`string`
### onOpenSettingEventDetail[​](button.html#onopensettingeventdetail)
参数类型errMsg`string`authSetting`Record<string, boolean>`
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
