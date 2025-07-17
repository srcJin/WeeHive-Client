# 音频。1.6.0版本开始，该组件不再维护。建议使用能力更强的 Taro.createInnerAudioContext 接口
支持情况：!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/audio.html)
## 类型[​](audio.html#类型)
```tsx
ComponentType<AudioProps>
```

## 示例代码[​](audio.html#示例代码)

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
 <Audio
 src='https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
 controls={true}
 autoplay={false}
 loop={false}
 muted={true}
 initialTime='30'
 id='video'
 />
 </View>
 )
 }
}
html
<template>
 <view class="components-page">
 <audio
 id="video"
 src="https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46"
 :controls="true"
 :autoplay="false"
 :loop="false"
 :muted="true"
 />
 </view>
</template>
```

## AudioProps[​](audio.html#audioprops)
参数类型默认值必填说明id`string`否audio 组件的唯一标识符src`string`否要播放音频的资源地址loop`boolean``false`否是否循环播放muted`boolean``false`否是否静音播放controls`boolean``false`否是否显示默认控件poster`string`否默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效name`string``"未知音频"`否默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效author`string``"未知作者"`否默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效nativeProps`Record<string, unknown>`否用于透传 `WebComponents` 上的属性到内部 H5 标签上onError`CommonEventFunction<onErrorEventDetail>`否当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}onPlay`CommonEventFunction`否当开始/继续播放时触发play事件onPause`CommonEventFunction`否当暂停播放时触发 pause 事件onTimeUpdate`CommonEventFunction<onTimeUpdateEventDetail>`否当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}onEnded`CommonEventFunction`否当播放到末尾时触发 ended 事件
### API 支持度[​](audio.html#api-支持度)
API微信小程序百度小程序QQ 小程序H5React NativeHarmonyHarmony hybridAudioProps.id✔️✔️✔️AudioProps.src✔️✔️✔️✔️✔️AudioProps.loop✔️✔️✔️✔️✔️AudioProps.muted✔️✔️AudioProps.controls✔️✔️✔️✔️✔️AudioProps.poster✔️✔️✔️AudioProps.name✔️✔️✔️AudioProps.author✔️✔️✔️AudioProps.nativeProps✔️✔️AudioProps.onError✔️✔️✔️✔️✔️AudioProps.onPlay✔️✔️✔️✔️✔️AudioProps.onPause✔️✔️✔️✔️✔️AudioProps.onTimeUpdate✔️✔️✔️✔️✔️AudioProps.onEnded✔️✔️✔️✔️✔️
### onErrorEventDetail[​](audio.html#onerroreventdetail)
参数类型errMsg`keyof Code`
### onTimeUpdateEventDetail[​](audio.html#ontimeupdateeventdetail)
参数类型说明currentTime`number`当前时间duration`number`持续时间
### MediaError[​](audio.html#mediaerror)
#### Code[​](audio.html#code)
参数说明1获取资源被用户禁止2网络错误3解码错误4不合适资源
- 
- 
- 

- 
- 
- 
-
