# 相机对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKCamera.html)
## 方法[​](VKCamera.html#方法)
参数类型说明viewMatrix`Float32Array`视图矩阵intrinsics`Float32Array`相机内参，只有 v2 版本支持
### getProjectionMatrix[​](VKCamera.html#getprojectionmatrix)
获取投影矩阵
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKCamera.getProjectionMatrix.html)
```tsx
(near: number, far: number) => Float32Array
```
参数类型说明near`number`近视点far`number`远视点
## API 支持度[​](VKCamera.html#api-支持度)
API微信小程序H5React NativeHarmonyVKCamera✔️VKCamera.getProjectionMatrix✔️
- 

- 

-
