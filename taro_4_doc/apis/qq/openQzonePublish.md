# 此接口可打开手Q说说发表界面，并将文字内容和图片/视频内容传递到手Q说说发表界面。
支持情况：!!!!!
[> 参考文档
](https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_openQzonePublish.html)
## 类型[​](openQzonePublish.html#类型)
```tsx
(option: Option) => void
```

## 参数[​](openQzonePublish.html#参数)
参数类型option`Option`
### Option[​](openQzonePublish.html#option)
参数类型说明text`string`传递的文字内容media`Media[]`传递的视频/图片内容，显示顺序为元素下标顺序path`string`说说小尾巴跳转到的页面路径，不填则默认跳到主页footnote`string`说说小尾巴显示的文案，不填则默认显示小程序的简介文案
### Media[​](openQzonePublish.html#media)
参数类型说明type`MediaType`图片填"photo"，视频填"video"path`string`文件路径，必须为本地文件
### MediaType[​](openQzonePublish.html#mediatype)
```tsx
"photo" | "video"
```

## 示例代码[​](openQzonePublish.html#示例代码)
```tsx
Taro.openQzonePublish({
 footnote: '使用同款滤镜',
 path: 'pages/index/index',
 text: '我爱中国',
 media: [
 {
 type: 'photo',
 path: 'qqfile://1.png'
 },
 {
 type: 'video',
 path: 'qqfile://2.mp4'
 }
 ]
})
```

- 
- 

- 
- 
- 

-
