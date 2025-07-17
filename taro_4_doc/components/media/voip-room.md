# 多人音视频对话
需用户授权 `scope.camera`、`scope.record`。相关接口： [Taro.joinVoIPChat](../../apis/media/voip/joinVoIPChat.html) 开通该组件权限后，开发者可在 joinVoIPChat 成功后，获取房间成员的 openid，传递给 voip-room 组件，以显示成员画面。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html)
## 类型[​](voip-room.html#类型)
```tsx
ComponentType<VoipRoomProps>
```

## 示例代码[​](voip-room.html#示例代码)
```tsx
export default class PageView extends Component {
 constructor() {
 super(...arguments)
 }

 render() {
 return (
 <VoipRoom
 openId="{{item}}"
 mode="{{selfOpenId === item ? 'camera' : 'video'}}">
 </VoipRoom>
 )
 }
}
```

## VoipRoomProps[​](voip-room.html#voiproomprops)
参数类型默认值必填说明mode`keyof Mode``camera`否对话窗口类型，自身传入 camera，其它用户传入 videodevicePosition`keyof DevicePosition``front`否仅在 mode 为 camera 时有效，前置或后置，值为front, backopenId`string``"none"`否进入房间用户的 openidobjectFit"fill" or "contain" or "cover"`"fill"`否画面与容器比例不一致时，画面的表现形式onError`CommonEventFunction`否创建对话窗口失败时触发
### API 支持度[​](voip-room.html#api-支持度)
API微信小程序H5React NativeHarmonyVoipRoomProps.mode✔️VoipRoomProps.devicePosition✔️VoipRoomProps.openId✔️VoipRoomProps.objectFit✔️VoipRoomProps.onError✔️
### Mode[​](voip-room.html#mode)
对话窗口类型
### DevicePosition[​](voip-room.html#deviceposition)
摄像头类型

- 
- 
- 

- 
- 
-
