# `MapContext` 实例，可通过 [Taro.createMapContext](createMapContext.html) 获取。 `MapContext` 通过 id 跟一个 map 组件绑定，操作对应的 map 组件。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html)
## 方法[​](MapContext.html#方法)
### getCenterLocation[​](MapContext.html#getcenterlocation)
获取当前地图中心的经纬度。返回的是 gcj02 坐标系，可以用于 [Taro.openLocation()](../../location/openLocation.html)
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getCenterLocation.html)
```tsx
(option?: GetCenterLocationOption) => Promise<GetCenterLocationSuccessCallbackResult>
```
参数类型option`GetCenterLocationOption`
### setLocMarkerIcon[​](MapContext.html#setlocmarkericon)
设置定位点图标，支持网络路径、本地路径、代码包路径
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setLocMarkerIcon.html)
```tsx
(option?: SetLocMarkerIconOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`SetLocMarkerIconOption`
### moveToLocation[​](MapContext.html#movetolocation)
将地图中心移置当前定位点，此时需设置地图组件 show-location 为true。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.moveToLocation.html)
```tsx
(option: MoveToLocationOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`MoveToLocationOption`
### translateMarker[​](MapContext.html#translatemarker)
平移marker，带动画
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.translateMarker.html)
```tsx
(option: TranslateMarkerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`TranslateMarkerOption`
### moveAlong[​](MapContext.html#movealong)
沿指定路径移动 marker，用于轨迹回放等场景。动画完成时触发回调事件，若动画进行中，对同一 marker 再次调用 moveAlong 方法，前一次的动画将被打断。
```tsx
(object: any) => any
```

### includePoints[​](MapContext.html#includepoints)
缩放视野展示所有经纬度
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.includePoints.html)
```tsx
(option: IncludePointsOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`IncludePointsOption`
### getRegion[​](MapContext.html#getregion)
获取当前地图的视野范围
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRegion.html)
```tsx
(option?: GetRegionOption) => Promise<GetRegionSuccessCallbackResult>
```
参数类型option`GetRegionOption`
### getRotate[​](MapContext.html#getrotate)
获取当前地图的旋转角
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getRotate.html)
```tsx
(option?: GetRotateOption) => Promise<GetRotateSuccessCallbackResult>
```
参数类型option`GetRotateOption`
### getSkew[​](MapContext.html#getskew)
获取当前地图的倾斜角
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getSkew.html)
```tsx
(option?: GetSkewOption) => Promise<GetSkewSuccessCallbackResult>
```
参数类型option`GetSkewOption`
### getScale[​](MapContext.html#getscale)
获取当前地图的缩放级别
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.getScale.html)
```tsx
(option?: GetScaleOption) => Promise<GetScaleSuccessCallbackResult>
```
参数类型option`GetScaleOption`
### setCenterOffset[​](MapContext.html#setcenteroffset)
设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5]
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setCenterOffset.html)
```tsx
(option: SetCenterOffsetOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`SetCenterOffsetOption`
### removeCustomLayer[​](MapContext.html#removecustomlayer)
移除个性化图层。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeCustomLayer.html)
```tsx
(option: RemoveCustomLayerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`RemoveCustomLayerOption`
### addCustomLayer[​](MapContext.html#addcustomlayer)
添加个性化图层。图层创建参考文档
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addCustomLayer.html)
```tsx
(option: AddCustomLayerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`AddCustomLayerOption`
### addGroundOverlay[​](MapContext.html#addgroundoverlay)
创建自定义图片图层，图片会随着地图缩放而缩放。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addGroundOverlay.html)
```tsx
(option: AddGroundLayerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`AddGroundLayerOption`
### addVisualLayer[​](MapContext.html#addvisuallayer)
添加可视化图层。需要刷新时，interval 可设置的最小值为 15 s。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addVisualLayer.html)
```tsx
(option: AddVisualLayerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`AddVisualLayerOption`
### removeVisualLayer[​](MapContext.html#removevisuallayer)
移除可视化图层。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeVisualLayer.html)
```tsx
(option: RemoveVisualLayerOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`RemoveVisualLayerOption`
### addArc[​](MapContext.html#addarc)
添加弧线，途经点与夹角必须设置一个。途经点必须在起终点有效坐标范围内，否则不能生成正确的弧线，同时设置夹角角度时，以夹角角度为准。夹角定义为起点到终点，与起点外切线逆时针旋转的角度。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addArc.html)
```tsx
(option: AddArcOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`AddArcOption`
### removeArc[​](MapContext.html#removearc)
删除弧线。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeArc.html)
```tsx
(option: RemoveArcOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`RemoveArcOption`
### setBoundary[​](MapContext.html#setboundary)
限制地图的显示范围。此接口同时会限制地图的最小缩放整数级别。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.setBoundary.html)
```tsx
(option: SetBoundaryOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`SetBoundaryOption`
### updateGroundOverlay[​](MapContext.html#updategroundoverlay)
更新自定义图片图层。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.updateGroundOverlay.html)
```tsx
(option: UpdateGroundOverlayOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`UpdateGroundOverlayOption`
### removeGroundOverlay[​](MapContext.html#removegroundoverlay)
移除自定义图片图层。
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeGroundOverlay.html)
```tsx
(option: RemoveGroundOverlayOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`RemoveGroundOverlayOption`
### toScreenLocation[​](MapContext.html#toscreenlocation)
获取经纬度对应的屏幕坐标，坐标原点为地图左上角。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.toScreenLocation.html)
```tsx
(option: ToScreenLocationOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`ToScreenLocationOption`
### fromScreenLocation[​](MapContext.html#fromscreenlocation)
获取屏幕上的点对应的经纬度，坐标原点为地图左上角。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.fromScreenLocation.html)
```tsx
(option: FromScreenLocationOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`FromScreenLocationOption`
### openMapApp[​](MapContext.html#openmapapp)
拉起地图APP选择导航。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.openMapApp.html)
```tsx
(option: OpenMapAppOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`OpenMapAppOption`
### addMarkers[​](MapContext.html#addmarkers)
添加 marker。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.addMarkers.html)
```tsx
(option: AddMarkersOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`AddMarkersOption`
### removeMarkers[​](MapContext.html#removemarkers)
移除 marker。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.removeMarkers.html)
```tsx
(option: RemoveMarkersOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`RemoveMarkersOption`
### initMarkerCluster[​](MapContext.html#initmarkercluster)
初始化点聚合的配置，未调用时采用默认配置。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.initMarkerCluster.html)
```tsx
(option?: InitMarkerClusterOption) => Promise<TaroGeneral.CallbackResult>
```
参数类型option`InitMarkerClusterOption`
### on[​](MapContext.html#on)
监听地图事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.on.html)
```tsx
(event: keyof MapEvent, callback: (res: MapEventMarkerClusterCreate | MapEventMarkerClusterClick) => void) => void
```
参数类型说明event`keyof MapEvent`事件名callback(res: MapEventMarkerClusterCreate or MapEventMarkerClusterClick) => void事件的回调函数
#### 示例代码[​](MapContext.html#示例代码)
```tsx
MapContext.on('markerClusterCreate', (res) => {})
MapContext.on('markerClusterClick', (res) => {})
```

## 参数[​](MapContext.html#参数)
### GetCenterLocationOption[​](MapContext.html#getcenterlocationoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetCenterLocationSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetCenterLocationSuccessCallbackResult[​](MapContext.html#getcenterlocationsuccesscallbackresult)
参数类型说明latitude`number`纬度longitude`number`经度errMsg`string`调用结果
### SetLocMarkerIconOption[​](MapContext.html#setlocmarkericonoption)
参数类型必填说明iconPath`string`是图标路径，支持网络路径、本地路径、代码包路径complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### GetRegionOption[​](MapContext.html#getregionoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetRegionSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetRegionSuccessCallbackResult[​](MapContext.html#getregionsuccesscallbackresult)
参数类型说明northeast`MapPosition`东北角经纬度southwest`MapPosition`西南角经纬度
### GetRotateOption[​](MapContext.html#getrotateoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetRotateSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetRotateSuccessCallbackResult[​](MapContext.html#getrotatesuccesscallbackresult)
参数类型说明rotate`number`旋转角errMsg`string`调用结果
### GetScaleOption[​](MapContext.html#getscaleoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetScaleSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetScaleSuccessCallbackResult[​](MapContext.html#getscalesuccesscallbackresult)
参数类型说明scale`number`缩放值errMsg`string`调用结果
### GetSkewOption[​](MapContext.html#getskewoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: GetSkewSuccessCallbackResult) => void`否接口调用成功的回调函数
### GetSkewSuccessCallbackResult[​](MapContext.html#getskewsuccesscallbackresult)
参数类型说明skew`number`倾斜角errMsg`string`调用结果
### IncludePointsOption[​](MapContext.html#includepointsoption)
参数类型必填说明points`MapPosition[]`是要显示在可视区域内的坐标点列表complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数padding`number[]`否坐标点形成的矩形边缘到地图边缘的距离，单位像素。格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### MapPosition[​](MapContext.html#mapposition)
坐标点
参数类型说明latitude`number`纬度longitude`number`经度
### MapBoundary[​](MapContext.html#mapboundary)
经纬度范围
参数类型说明southwest`MapPosition`西南角经纬度northeast`MapPosition`东北角经纬度
### MoveToLocationOption[​](MapContext.html#movetolocationoption)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数latitude`number`否纬度longitude`number`否经度success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### TranslateMarkerOption[​](MapContext.html#translatemarkeroption)
参数类型必填说明autoRotate`boolean`是移动过程中是否自动旋转 markerdestination`MapPosition`是指定 marker 移动到的目标点markerId`number`是指定 markerrotate`number`是marker 的旋转角度animationEnd`(...args: any[]) => any`否动画结束回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）duration`number`否动画持续时长，平移与旋转分别计算fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SetCenterOffsetOption[​](MapContext.html#setcenteroffsetoption)
参数类型必填说明offset`number[]`是偏移量，两位数组complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveCustomLayerOption[​](MapContext.html#removecustomlayeroption)
参数类型必填说明layerId`number`是个性化图层idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AddCustomLayerOption[​](MapContext.html#addcustomlayeroption)
参数类型必填说明layerId`number`是个性化图层idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AddGroundLayerOption[​](MapContext.html#addgroundlayeroption)
参数类型默认值必填说明id`number`是图片图层 idsrc`string`是图片路径，支持网络图片、临时路径、代码包路径bounds`MapBoundary`是图片覆盖的经纬度范围visible`boolean``true`否是否可见zIndex`number``1`否图层绘制顺序opacity`number``1`否图层透明度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AddVisualLayerOption[​](MapContext.html#addvisuallayeroption)
参数类型默认值必填说明layerId`number`是个性化图层id（[创建图层指引](https://lbs.qq.com/dev/console/layers/layerEdit))interval`number``0`否刷新周期，单位秒zIndex`number``1`否图层绘制顺序opacity`number``1`否图层透明度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveVisualLayerOption[​](MapContext.html#removevisuallayeroption)
参数类型必填说明layerId`number`是可视化图层 idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AddArcOption[​](MapContext.html#addarcoption)
参数类型默认值必填说明id`number`是圆弧 idstart`MapPosition`是起始点end`MapPosition`是终点pass`MapPosition`否途经点angle`number``0`否夹角角度width`number``5`否线宽color`string``"#000000"`否线的颜色complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveArcOption[​](MapContext.html#removearcoption)
参数类型必填说明id`number`是圆弧 idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### SetBoundaryOption[​](MapContext.html#setboundaryoption)
参数类型必填说明southwest`MapPosition`是西南角经纬度northeast`MapPosition`是东北角经纬度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### UpdateGroundOverlayOption[​](MapContext.html#updategroundoverlayoption)
参数类型默认值必填说明id`number`是图片图层 idsrc`string`是图片路径，支持网络图片、临时路径、代码包路径bounds`MapBoundary`是图片覆盖的经纬度范围visible`boolean``true`否是否可见zIndex`number``1`否图层绘制顺序opacity`number``1`否图层透明度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveGroundOverlayOption[​](MapContext.html#removegroundoverlayoption)
参数类型必填说明id`number`是图片图层 idcomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### ToScreenLocationOption[​](MapContext.html#toscreenlocationoption)
参数类型必填说明latitude`number`是纬度longitude`number`是经度complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### FromScreenLocationOption[​](MapContext.html#fromscreenlocationoption)
参数类型必填说明x`number`是x 坐标值y`number`是y 坐标值complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### OpenMapAppOption[​](MapContext.html#openmapappoption)
参数类型必填说明longitude`number`是目的地经度latitude`number`是目的地纬度destination`string`是目的地名称complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### AddMarkersOption[​](MapContext.html#addmarkersoption)
参数类型默认值必填说明markers`MapProps.marker[]`是同传入 map 组件的 marker 属性clear`boolean``false`否是否先清空地图上所有 markercomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### RemoveMarkersOption[​](MapContext.html#removemarkersoption)
参数类型必填说明markerIds`string[]`是marker 的 id 集合。complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### InitMarkerClusterOption[​](MapContext.html#initmarkerclusteroption)
参数类型默认值必填说明enableDefaultStyle`boolean``true`否启用默认的聚合样式zoomOnClick`boolean``true`否点击已经聚合的标记点时是否实现聚合分离gridSize`number``60`否聚合算法的可聚合距离，即距离小于该值的点会聚合至一起，以像素为单位complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### MapEvent[​](MapContext.html#mapevent)
event 的合法值
参数类型说明markerClusterCreate`MapEventMarkerClusterCreate`缩放或拖动导致新的聚合簇产生时触发，仅返回新创建的聚合簇信息markerClusterClick`MapEventMarkerClusterClick`聚合簇的点击事件
### MapEventMarkerClusterCreate[​](MapContext.html#mapeventmarkerclustercreate)
参数类型说明clusters`ClusterInfo[]`聚合簇数据
### MapEventMarkerClusterClick[​](MapContext.html#mapeventmarkerclusterclick)
参数类型说明cluster`ClusterInfo`聚合簇
### ClusterInfo[​](MapContext.html#clusterinfo)
参数类型说明clusterId`number`聚合簇的 idcenter`LatLng`聚合簇的坐标markerIds`string[]`该聚合簇内的点标记数据数组
### LatLng[​](MapContext.html#latlng)
参数类型说明lat`number`纬度值lng`number`经度值
## API 支持度[​](MapContext.html#api-支持度)
API微信小程序抖音小程序H5React NativeHarmonyMapContext✔️✔️MapContext.getCenterLocation✔️✔️MapContext.setLocMarkerIcon✔️✔️MapContext.moveToLocation✔️✔️MapContext.translateMarker✔️✔️MapContext.includePoints✔️✔️MapContext.getRegion✔️✔️MapContext.getRotate✔️✔️MapContext.getSkew✔️✔️MapContext.getScale✔️✔️MapContext.setCenterOffset✔️✔️MapContext.removeCustomLayer✔️MapContext.addCustomLayer✔️MapContext.addGroundOverlay✔️✔️MapContext.addVisualLayer✔️MapContext.removeVisualLayer✔️MapContext.addArc✔️MapContext.removeArc✔️MapContext.setBoundary✔️MapContext.updateGroundOverlay✔️✔️MapContext.removeGroundOverlay✔️✔️MapContext.toScreenLocation✔️MapContext.fromScreenLocation✔️MapContext.openMapApp✔️MapContext.addMarkers✔️MapContext.removeMarkers✔️MapContext.initMarkerCluster✔️MapContext.on✔️
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
