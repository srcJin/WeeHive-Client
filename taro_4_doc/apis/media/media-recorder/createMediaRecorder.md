# 创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html)
## 类型[​](createMediaRecorder.html#类型)
```tsx
(canvas?: any, option?: Option) => MediaRecorder
```

## 参数[​](createMediaRecorder.html#参数)
参数类型canvas`any`option`Option`
### Option[​](createMediaRecorder.html#option)
createMediaRecorder Option
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html)
参数类型默认值必填说明duration`number``600`否指定录制的时长（s)，到达自动停止。最大 7200，最小 5videoBitsPerSecond`number``1000`否视频比特率（kbps），最小值 600，最大值 3000gop`number``12`否视频关键帧间隔fps`number``24`否视频 fps
- 
- 

-
