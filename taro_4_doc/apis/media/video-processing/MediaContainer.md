# 创建音视频处理容器，最终可将容器中的轨道合成一个视频
> 可通过
[> Taro.createMediaContainer
](createMediaContainer.html)> 创建

支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.html)
## 方法[​](MediaContainer.html#方法)
### addTrack[​](MediaContainer.html#addtrack)
将音频或视频轨道添加到容器
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.addTrack.html)
```tsx
(track: MediaTrack) => void
```
参数类型说明track`MediaTrack`要添加的音频或视频轨道
### destroy[​](MediaContainer.html#destroy)
将容器销毁，释放资源
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.destroy.html)
```tsx
() => void
```

### export[​](MediaContainer.html#export)
将容器内的轨道合并并导出视频文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.export.html)
```tsx
() => void
```

### extractDataSource[​](MediaContainer.html#extractdatasource)
将传入的视频源分离轨道。不会自动将轨道添加到待合成的容器里。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.extractDataSource.html)
```tsx
(option: ExtractDataSourceOption) => void
```
参数类型option`ExtractDataSourceOption`
### removeTrack[​](MediaContainer.html#removetrack)
将音频或视频轨道从容器中移除
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/MediaContainer.removeTrack.html)
```tsx
(track: MediaTrack) => void
```
参数类型说明track`MediaTrack`要移除的音频或视频轨道
## 参数[​](MediaContainer.html#参数)
### ExtractDataSourceOption[​](MediaContainer.html#extractdatasourceoption)
参数类型说明source`string`视频源地址，只支持本地文件
## API 支持度[​](MediaContainer.html#api-支持度)
API微信小程序H5React NativeHarmonyMediaContainer✔️MediaContainer.addTrack✔️MediaContainer.destroy✔️MediaContainer.export✔️MediaContainer.extractDataSource✔️MediaContainer.removeTrack✔️
- 

- 
- 
- 
- 
- 

- 

- 

-
