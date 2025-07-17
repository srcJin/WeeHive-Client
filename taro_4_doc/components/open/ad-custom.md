# Banner 广告
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/ad.html)
## 类型[​](ad-custom.html#类型)
```tsx
ComponentType<AdCustomProps>
```

## 示例代码[​](ad-custom.html#示例代码)
```tsx
class App extends Component {
 render () {
 return (
 <AdCustom
 unitId=''
 adIntervals={60}
 onLoad={() => console.log('ad onLoad')}
 onError={() => console.log('ad onError')}
 onClose={() => console.log('ad onClose')}
 />
 )
 }
}
```

## AdCustomProps[​](ad-custom.html#adcustomprops)
参数类型必填说明unitId`string`是广告单元id，可在[小程序管理后台](https://mp.weixin.qq.com/)的流量主模块新建adIntervals`number`否广告自动刷新的间隔时间，单位为秒，参数值必须大于等于30（该参数不传入时 Banner 广告不会自动刷新）onLoad`CommonEventFunction`否广告加载成功的回调onError`CommonEventFunction<AdProps.onErrorEventDetail>`否当广告发生错误时，触发的事件，可以通过该事件获取错误码及原因
### API 支持度[​](ad-custom.html#api-支持度)
API微信小程序H5React NativeHarmonyAdCustomProps.unitId✔️AdCustomProps.adIntervals✔️AdCustomProps.onLoad✔️AdCustomProps.onError✔️
- 
- 
- 

-
