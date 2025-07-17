# AR 相机
支持情况：!!!!!
[> 参考文档
](https://smartprogram.baidu.com/docs/develop/component/media_ar-camera/)
## 类型[​](ar-camera.html#类型)
```tsx
ComponentType<ArCameraProps>
```

## ArCameraProps[​](ar-camera.html#arcameraprops)
参数类型默认值必填说明key`string`否AR 项目唯一标识，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Keytype"0" or "5" or "8"否AR 相机类型，在 DuMixAR 内容开放平台上传生成 AR 项目后获取 AR Type：
2D 跟踪类型：0
SLAM 类型：5
IMU 类型：8flash"auto" or "on" or "off"`"off"`否闪光灯，值为 auto、on、offonError`CommonEventFunction`否用户不允许使用摄像头或扫码失败时触发onLoad`CommonEventFunction`否AR 加载成功时触发onMessage`CommonEventFunction`否开发者制作 AR 项目时可自定义按键，用户点击时会收到事件和数据，用户自定义事件格式参见代码示例 2：用户自定义事件onScanCode`CommonEventFunction`否扫描识图结束后触发
### API 支持度[​](ar-camera.html#api-支持度)
API微信小程序百度小程序H5React NativeHarmonyArCameraProps.key✔️ArCameraProps.type✔️ArCameraProps.flash✔️ArCameraProps.onError✔️ArCameraProps.onLoad✔️ArCameraProps.onMessage✔️ArCameraProps.onScanCode✔️
- 
- 

-
