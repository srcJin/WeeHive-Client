# vision kit 会话对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.html)
## 方法[​](VKFrame.html#方法)
参数类型说明timestamp`number`生成时间camera`VKCamera`相机对象
### getCameraTexture[​](VKFrame.html#getcameratexture)
获取当前帧纹理，目前只支持 YUV 纹理
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraTexture.html)
```tsx
(ctx: WebGLRenderingContext) => IGetCameraTextureResult
```
参数类型ctx`WebGLRenderingContext`
### getCameraBuffer[​](VKFrame.html#getcamerabuffer)
获取当前帧 rgba buffer。iOS 端微信在 v8.0.20 开始支持，安卓端微信在 v8.0.30 开始支持。 按 aspect-fill 规则裁剪，此接口要求在创建 VKSession 对象时必须传入 gl 参数。 此接口仅建议拿来做帧分析使用，上屏请使用 getCameraTexture 来代替。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getCameraBuffer.html)
```tsx
(widht: number, height: number) => ArrayBuffer
```
参数类型widht`number`height`number`
### getDisplayTransform[​](VKFrame.html#getdisplaytransform)
获取纹理调整矩阵。默认获取到的纹理是未经裁剪调整的纹理，此矩阵可用于在着色器中根据帧对象尺寸对纹理进行裁剪
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/VKFrame.getDisplayTransform.html)
```tsx
() => Float32Array
```

## 参数[​](VKFrame.html#参数)
### IGetCameraTextureResult[​](VKFrame.html#igetcameratextureresult)
帧纹理对象
参数类型说明yTexture`WebGLTexture`Y 分量纹理uvTexture`WebGLTexture`UV 分量纹理
## API 支持度[​](VKFrame.html#api-支持度)
API微信小程序H5React NativeHarmonyVKFrame✔️VKFrame.getCameraTexture✔️VKFrame.getCameraBuffer✔️VKFrame.getDisplayTransform✔️
- 

- 
- 
- 

- 

- 

-
