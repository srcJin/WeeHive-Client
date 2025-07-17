# 图标。组件属性的长度单位默认为 px
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html)
## 类型[​](icon.html#类型)
```tsx
ComponentType<IconProps>
```

## 示例代码[​](icon.html#示例代码)

- React
- Vue
```tsx
export default class PageView extends Component {
 constructor() {
 super(...arguments)
 }

 render() {
 return (
 <View className='components-page'>
 <Icon size='60' type='success' />
 <Icon size='60' type='info' />
 <Icon size='60' type='warn' color='#ccc' />
 <Icon size='60' type='warn' />
 <Icon size='60' type='waiting' />
 <Icon size='20' type='success_no_circle' />
 <Icon size='20' type='warn' />
 <Icon size='20' type='success' />
 <Icon size='20' type='download' />
 <Icon size='20' type='clear' color='red' />
 <Icon size='20' type='search' />
 </View>
 )
 }
}
```

## IconProps[​](icon.html#iconprops)
参数类型默认值必填说明type`keyof TIconType`是icon 的类型size`number``23`否icon 的大小，单位pxcolor`string`否icon 的颜色，同 css 的 colorariaLabel`string`否无障碍访问，（属性）元素的额外描述
### API 支持度[​](icon.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridIconProps.type✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️IconProps.size✔️✔️✔️✔️✔️✔️✔️✔️✔️IconProps.color✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️IconProps.ariaLabel✔️
### TIconType[​](icon.html#ticontype)
icon 的类型
参数说明success成功图标success_no_circle成功图标（不带外圈）info信息图标warn警告图标waiting等待图标cancel取消图标download下载图标search搜索图标clear清除图标circle圆环图标(多选控件图标未选择)「微信文档未标注属性」info_circle带圆环的信息图标「微信文档未标注属性」
- 
- 
- 

- 
-
