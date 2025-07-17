# 地图。相关api Taro.createMapContext。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/map.html#map)
## 类型[​](map.html#类型)
```tsx
ComponentType<MapProps>
```

## 示例代码[​](map.html#示例代码)

- React
- Vue
```tsx
class App extends Component {
 onTap () {}
 render () {
 return (
 <Map onClick={this.onTap} />
 )
 }
}
html
<template>
 <map
 id="map"
 style="width: 100%; height: 300px;"
 longitude="113.324520"
 latitude="23.099994"
 scale="14"
 :markers="markers"
 :polyline="polyline"
 :show-location="true"
 @regionchange="regionchange"
 @markertap="markertap"
 />
</template>

<script>
export default {
 data() {
 return {
 markers: [{
 iconPath: "https://avatars2.githubusercontent.com/u/1782542?s=460&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4",
 id: 0,
 latitude: 23.099994,
 longitude: 113.324520,
 width: 50,
 height: 50
 }],
 polyline: [{
 points: [{
 longitude: 113.3245211,
 latitude: 23.10229
 }, {
 longitude: 113.324520,
 latitude: 23.21229
 }],
 color:"#FF0000DD",
 width: 2,
 dottedLine: true
 }]
 }
 },
 methods: {
 regionchange(e) {
 console.log(e.type)
 },
 markertap(e) {
 console.log("markertap:", e.detail.markerId)
 }
 }
}
</script>
```

## MapProps[​](map.html#mapprops)
参数类型默认值必填说明longitude`number`是中心经度latitude`number`是中心纬度scale`number``16`否缩放级别，取值范围为 3-20minScale`number``3`否最小缩放级别 3-20maxScale`number``20`否最大缩放级别 3-20markers`marker[]`否标记点covers`any[]`否**即将移除，请使用 markers**
**不推荐使用**polyline`polyline[]`否路线circles`circle[]`否圆controls`control[]`否控件（即将废弃，建议使用 cover-view 代替）
**不推荐使用**includePoints`point[]`否缩放视野以包含所有给定的坐标点showLocation`boolean``false`否显示带有方向的当前定位点polygons`polygon[]`否多边形subkey`string`否个性化地图使用的 keylayerStyle`number``1`否个性化地图配置的 style，不支持动态修改rotate`number``0`否旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角skew`number``0`否倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角showCompass`boolean``false`否显示指南针showScale`boolean``false`否显示比例尺enableOverlooking`boolean``false`否开启俯视enableZoom`boolean``true`否是否支持缩放enableScroll`boolean``true`否是否支持拖动enableRotate`boolean``false`否是否支持旋转enableSatellite`boolean``false`否是否开启卫星图enableTraffic`boolean``false`否是否开启实时路况settingMapProps or { [key: string]: any; }否配置项

提供 setting 对象统一设置地图配置。同时对于一些动画属性如 rotate 和 skew，通过 setData 分开设置时无法同时生效，需通过 settting 统一修改。includePadding{ left: string or number; right: string or number; top: string or number; bottom: string or number; }否视野在地图 padding 范围内展示groundOverlays`groundOverlays[]`否覆盖物，自定义贴图tileOverlay`tileOverlay`否覆盖物，网格贴图enablePoi`boolean``true`否是否展示 POI 点enableBuilding`boolean``true`否是否展示建筑物polygon`polygon[]`否覆盖物，多边形。customMapStyle`string`否设置地图样式。

default：默认样式
light：精简样式panels`panels[]`否基于 map 高级定制渲染，设置覆盖在地图上的 view。theme`string`否否optimize`boolean``false`否保持缩放比例不变enableAutoMaxOverlooking`boolean``false`否开启最大俯视角，俯视角度从 45 度拓展到 75 度enable3D`boolean``false`否展示3D楼块onTap`CommonEventFunction`否点击地图时触发onMarkerTap`CommonEventFunction<onMarkerTapEventDetail>`否点击标记点时触发，e.detail = {markerId}onLabelTap`CommonEventFunction<onLabelTapEventDetail>`否点击label时触发，e.detail = {markerId}onControlTap`CommonEventFunction<onControlTapEventDetail>`否点击控件时触发，e.detail = {controlId}onCalloutTap`CommonEventFunction<onCalloutTapEventDetail>`否点击标记点对应的气泡时触发，e.detail = {markerId}onUpdated`CommonEventFunction`否在地图渲染更新完成时触发onRegionChangeCommonEventFunction<onRegionEventDetail<"begin"> or onRegionEventDetail<"end">>否视野发生变化时触发onPoiTap`CommonEventFunction<onPoiTapEventDetail>`否点击地图poi点时触发，e.detail = {name, longitude, latitude}onPolylineTap`CommonEventFunction<onPolylineTapEventDetail>`否点击地图路线时触发，e.detail = {longitude, latitude}onAbilitySuccess`CommonEventFunction<onAbilityEventDetail>`否地图能力生效时触发，e.detail = {ability, errCode, errMsg}onAbilityFailed`CommonEventFunction<onAbilityEventDetail>`否地图能力失败时触发，e.detail = {ability, errCode, errMsg}onAuthSuccess`CommonEventFunction<{ errCode: number; errMsg: string; }>`否地图鉴权结果成功时触发，e.detail = {errCode, errMsg}onInterpolatePoint`CommonEventFunction<onInterpolatePointEventDetail>`否MapContext.moveAlong 插值动画时触发。e.detail = {markerId, longitude, latitude, animationStatus: "interpolating" or "complete"}onError`CommonEventFunction<point>`是组件错误时触发，例如创建或鉴权失败，e.detail = {longitude, latitude}onCallOutTap`CommonEventFunction<onCalloutTapEventDetail>`否点击标记点对应的气泡时触发e.detail = {markerId}onAnchorPointTap`CommonEventFunction<point>`否点击定位标时触发，e.detail = {longitude, latitude}onPanelTap`CommonEventFunction<{ panelId: any; layoutId: any; }>`否点击 panel 时触发。onInitComplete`CommonEventFunction`否地图初始化完成即将开始渲染第一帧时触发。
### API 支持度[​](map.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyMapProps.longitude✔️✔️✔️✔️✔️✔️MapProps.latitude✔️✔️✔️✔️✔️✔️MapProps.scale✔️✔️(取值范围为4-21)✔️(取值范围为5-18)✔️✔️✔️MapProps.minScale✔️✔️MapProps.maxScale✔️✔️MapProps.markers✔️✔️✔️✔️✔️✔️MapProps.covers✔️MapProps.polyline✔️✔️✔️✔️✔️✔️MapProps.circles✔️✔️✔️✔️✔️✔️MapProps.controls✔️✔️✔️✔️MapProps.includePoints✔️✔️✔️✔️✔️✔️MapProps.showLocation✔️✔️✔️✔️✔️✔️MapProps.polygons✔️✔️✔️✔️MapProps.subkey✔️✔️MapProps.layerStyle✔️✔️MapProps.rotate✔️✔️✔️✔️MapProps.skew✔️✔️✔️✔️MapProps.showCompass✔️✔️✔️✔️✔️MapProps.showScale✔️✔️✔️✔️MapProps.enableOverlooking✔️✔️✔️✔️✔️MapProps.enableZoom✔️✔️✔️✔️✔️MapProps.enableScroll✔️✔️✔️✔️✔️MapProps.enableRotate✔️✔️✔️✔️✔️MapProps.enableSatellite✔️✔️✔️✔️MapProps.enableTraffic✔️✔️✔️✔️MapProps.setting✔️✔️✔️MapProps.includePadding✔️MapProps.groundOverlays✔️MapProps.tileOverlay✔️MapProps.enablePoi✔️✔️✔️MapProps.enableBuilding✔️✔️✔️MapProps.polygon✔️MapProps.customMapStyle✔️MapProps.panels✔️MapProps.theme✔️MapProps.optimize✔️MapProps.enableAutoMaxOverlooking✔️MapProps.enable3D✔️✔️✔️✔️MapProps.onTap✔️✔️✔️✔️✔️✔️MapProps.onMarkerTap✔️✔️✔️✔️✔️✔️MapProps.onLabelTap✔️✔️MapProps.onControlTap✔️✔️✔️✔️MapProps.onCalloutTap✔️MapProps.onUpdated✔️✔️✔️✔️MapProps.onRegionChange✔️✔️✔️✔️✔️✔️MapProps.onPoiTap✔️✔️✔️MapProps.onPolylineTap✔️✔️✔️MapProps.onAbilitySuccess✔️MapProps.onAbilityFailed✔️MapProps.onAuthSuccess✔️MapProps.onInterpolatePoint✔️MapProps.onError✔️MapProps.onCallOutTap✔️✔️✔️✔️MapProps.onAnchorPointTap✔️✔️MapProps.onPanelTap✔️MapProps.onInitComplete✔️
### marker[​](map.html#marker)
标记点用于在地图上显示标记的位置
参数类型必填说明备注id`number`否标记点id`marker 点击事件回调会返回此id。建议为每个 marker 设置上 Number 类型 id，保证更新 marker 时有更好的性能。`latitude`number`是纬度`浮点数，范围 -90 ~ 90`longitude`number`是经度`浮点数，范围 -180 ~ 180`title`string`否标注点名`点击时显示，callout 存在时将被忽略`zIndex`number`否显示层级iconPath`string`是显示的图标`项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片`rotate`number`否旋转角度`顺时针旋转的角度，范围 0 ~ 360，默认为 0`alpha`number`否标注的透明度`默认1，无透明，范围 0 ~ 1`widthstring or number否标注图标宽度`默认为图片实际宽度`heightstring or number否标注图标高度`默认为图片实际高度`callout`callout`否标记点上方的气泡窗口`支持的属性见下表，可识别换行符。`customCallout`customCallout`否自定义气泡窗口`支持的属性见下表，可识别换行符。`label`label`否为标记点旁边增加标签`支持的属性见下表`anchor`{ x: number; y: number; }`否经纬度在标注图标的锚点，默认底边中点`{x, y}，x表示横向(0-1)，y表示竖向(0-1)。{x: .5, y: 1} 表示底边中点`ariaLabel`string`否无障碍访问，（属性）元素的额外描述
### callout[​](map.html#callout)
marker 上的气泡 callout
参数类型说明content`string`文本color`string`文本颜色fontSize`number`文字大小anchorX`number`横向偏移量，向右为正数anchorY`number`纵向偏移量，向下为正数borderRadius`number`边框圆角borderWidth`number`边框宽度borderColor`string`边框颜色bgColor`string`背景色padding`number`文本边缘留白display"BYCLICK" or "ALWAYS"'BYCLICK':点击显示; 'ALWAYS':常显textAlign"left" or "right" or "center"文本对齐方式。有效值: left, right, center
### customCallout[​](map.html#customcallout)
marker 上的自定义气泡 customCallout
`customCallout` 存在时将忽略 `callout` 与 `title` 属性。自定义气泡采用采用 `cover-view` 定制，灵活度更高。
参数类型说明display`string`'BYCLICK':点击显示; 'ALWAYS':常显anchorX`number`横向偏移量，向右为正数anchorY`number`纵向偏移量，向下为正数
### label[​](map.html#label)
marker 上的气泡 label
参数类型说明content`string`文本color`string`文本颜色fontSize`number`文字大小anchorX`number`label的坐标，原点是 marker 对应的经纬度anchorY`number`label的坐标，原点是 marker 对应的经纬度borderWidth`number`边框宽度borderColor`string`边框颜色borderRadius`number`边框圆角bgColor`string`背景色padding`number`文本边缘留白textAlign"left" or "right" or "center"文本对齐方式。有效值: left, right, center
### polyline[​](map.html#polyline)
指定一系列坐标点，从数组第一项连线至最后一项
参数类型必填说明备注points`point[]`是经纬度数组`[{latitude: 0, longitude: 0}]`color`string`否线的颜色`十六进制`width`number`否线的宽度dottedLine`boolean`否是否虚线`默认 false`arrowLine`boolean`否带箭头的线`默认 false，开发者工具暂不支持该属性`arrowIconPath`string`否更换箭头图标`在 arrowLine 为 true 时生效`borderColor`string`否线的边框颜色borderWidth`number`否线的厚度
### polygon[​](map.html#polygon)
指定一系列坐标点，根据 points 坐标数据生成闭合多边形
参数类型默认值必填说明备注dashArray`number[]``[0,0]`否边线虚线`默认值 [0, 0] 为实线，[10, 10]表示十个像素的实线和十个像素的空白（如此反复）组成的虚线`points`point[]`是经纬度数组`[{latitude: 0, longitude: 0}]`color`string`否线的颜色，用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA。`当前 Android 与 iOS 上此属性默认值存在差异（分别为 transparent 与 #ff0000ff ），建议在代码中统一显式设置。`strokeWidth`number`否描边的宽度strokeColor`string`否描边的颜色`十六进制`fillColor`string`否填充颜色`十六进制`width`number`否线的宽度`当前 Android 与 iOS 上此属性默认值存在差异（分别为 0 与 5），建议在代码中统一显式设置。`zIndex`number`否设置多边形Z轴数值level`string`否压盖关系`默认为 abovelabels`displayRanges`[{ from: number; to: number; }]`否标明在特定地图缩放级别下展示。`[{ from: 12, to: 17}]`
#### API 支持度[​](map.html#api-支持度-1)
API微信小程序支付宝小程序H5React NativeHarmonypolygon.dashArray✔️polygon.color✔️polygon.width✔️polygon.level✔️polygon.displayRanges✔️
### circle[​](map.html#circle)
在地图上显示圆
参数类型必填说明备注latitude`number`是纬度`浮点数，范围 -90 ~ 90`longitude`number`否经度`浮点数，范围 -180 ~ 180`color`string`否描边的颜色`十六进制`fillColor`string`否填充颜色`十六进制`radius`number`是半径strokeWidth`number`否描边的宽度
### control[​](map.html#control)
在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view
参数类型必填说明备注id`number`否控件id`在控件点击事件回调会返回此id`position`position`是控件在地图的位置`控件相对地图位置`iconPath`string`是显示的图标`项目目录下的图片路径，支持本地路径、代码包路径`clickable`boolean`否是否可点击`默认不可点击`
### point[​](map.html#point)
参数类型说明longitude`number`经度latitude`number`纬度
### position[​](map.html#position)
参数类型默认值说明left`number``0`距离地图的左边界多远top`number``0`距离地图的上边界多远width`number``图片宽度`控件宽度height`number``图片宽度`控件高度
### groundOverlays[​](map.html#groundoverlays)
参数类型说明id`string`刷新的时候需要变更id值include-points`[{ latitude: number; longitude: number; }, { latitude: number; longitude: number; }]`右上 左下image`string`alpha`number`zIndex`number`
### tileOverlay[​](map.html#tileoverlay)
参数类型url`string`type`number`tileWidth`number`tileHeight`number`zIndex`number`
### panels[​](map.html#panels)
参数类型id`number`layout`{ src: string; }`position`position`
### onMarkerTapEventDetail[​](map.html#onmarkertapeventdetail)
参数类型markerIdstring or number
### onLabelTapEventDetail[​](map.html#onlabeltapeventdetail)
参数类型markerIdstring or number
### onControlTapEventDetail[​](map.html#oncontroltapeventdetail)
参数类型controlIdstring or number
### onCalloutTapEventDetail[​](map.html#oncallouttapeventdetail)
参数类型markerIdstring or number
### RegionChangeDetail[​](map.html#regionchangedetail)
#### type[​](map.html#type)
#### CausedByBegin[​](map.html#causedbybegin)
参数说明gesture手势触发update接口触发
#### CausedByEnd[​](map.html#causedbyend)
参数说明drag拖动导致scale缩放导致update调用更新接口导致
### onRegionEventDetail[​](map.html#onregioneventdetail)
参数类型说明备注type`T`视野变化开始、结束时触发`视野变化开始为begin，结束为end`causedBy`keyof (T extends "begin" ? CausedByBegin : CausedByEnd)`导致视野变化的原因`有效值为 gesture（手势触发）、update（接口触发或调用更新接口导致）、drag（拖动导致）、scale（缩放导致）`detail`regionChangeDetail<type>`视野改变详情
### regionChangeDetail[​](map.html#regionchangedetail-1)
参数类型说明rotate`number`旋转角度skew`number`倾斜角度causedBy`keyof (T extends "begin" ? CausedByBegin : CausedByEnd)`typestring or Tscale`number`centerLocation`point`region`{ northeast: point; southeast: point; }`
### onPoiTapEventDetail[​](map.html#onpoitapeventdetail)
参数类型name`string`longitude`number`latitude`number`
### onPolylineTapEventDetail[​](map.html#onpolylinetapeventdetail)
参数类型polylineId`number`longitude`number`latitude`number`
### onAbilityEventDetail[​](map.html#onabilityeventdetail)
参数类型ability`string`errCode`number`errMsg`string`
### onInterpolatePointEventDetail[​](map.html#oninterpolatepointeventdetail)
参数类型markerId`number`longitude`number`latitude`number`animationStatus"interpolating" or "complete"
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
