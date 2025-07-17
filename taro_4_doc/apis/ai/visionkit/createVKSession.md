# 创建 vision kit 会话对象
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ai/visionkit/wx.createVKSession.html)
## 类型[​](createVKSession.html#类型)
```tsx
(version: keyof IVersion) => VKSession
```

## 参数[​](createVKSession.html#参数)
参数类型version`keyof IVersion`
### IVersion[​](createVKSession.html#iversion)
vision kit 版本
参数说明v1旧版本v2v2 版本，目前只有 iOS 基础库 2.22.0 以上支持
### ITrack[​](createVKSession.html#itrack)
跟踪配置
参数类型说明plane`IPlane`平面跟踪配置
### IPlane[​](createVKSession.html#iplane)
平面跟踪配置
参数类型说明mode`keyof IPlaneMode`平面跟踪配置模式
### IPlaneMode[​](createVKSession.html#iplanemode)
平面跟踪配置模式合法值
参数说明1检测横向平面2检测纵向平面，只有 v2 版本支持3检测横向和纵向平面，只有 v2 版本支持
- 
- 

- 
- 
- 
-
