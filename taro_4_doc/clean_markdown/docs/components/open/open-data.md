# 用于展示平台开放的数据
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)
## 类型[​](open-data.html#类型)
```tsx
ComponentType<OpenDataProps>
```

## 示例代码[​](open-data.html#示例代码)

- React
- Vue
```tsx
class App extends Component {
 render () {
 return (
 <OpenData type='userAvatarUrl'/>
 )
 }
}
html
<template>
 <open-data type="userAvatarUrl" />
</template>
```

## OpenDataProps[​](open-data.html#opendataprops)
参数类型默认值必填说明type`keyof Type`是开放数据类型openGid`string`否当 type="groupName" 时生效, 群idlang`keyof Lang``"en"`否当 type="user*" 时生效，以哪种语言展示 userInfodefaultText`string`否数据为空时的默认文案defaultAvatar`string`否用户头像为空时的默认图片，支持相对路径和网络图片路径useEmptyValue`string`否当数据为空且未设置默认值时，是否显示官方默认值shareTicket`string`否当 type=groupCloudStorage 时有效，群分享对应的 shareTicketkeyList`string`否当 type=*CloudStorage 时有效，指定要拉取的 key 列表componentData`string`否当 type=*CloudStorage 时有效，从主域透传给开放数据域的数据，会自动注入到自定义开放数据域组件的 properties 中onError`CommonEventFunction`否群名称或用户信息为空时触发
### API 支持度[​](open-data.html#api-支持度)
API微信小程序百度小程序抖音小程序QQ 小程序H5React NativeHarmonyOpenDataProps.type✔️✔️✔️✔️OpenDataProps.openGid✔️OpenDataProps.lang✔️✔️OpenDataProps.defaultText✔️✔️OpenDataProps.defaultAvatar✔️✔️OpenDataProps.useEmptyValue✔️OpenDataProps.shareTicket✔️OpenDataProps.keyList✔️OpenDataProps.componentData✔️OpenDataProps.onError✔️✔️✔️
### Type[​](open-data.html#type)
type 的合法值
参数说明groupName拉取群名称userNickName用户昵称userAvatarUrl用户头像userGender用户性别userCity用户所在城市userProvince用户所在省份userCountry用户所在国家userLanguage用户的语言
### Lang[​](open-data.html#lang)
lang 的合法值
参数说明en英文zh_CN简体中文zh_TW繁体中文
- 
- 
- 

- 
- 
-
