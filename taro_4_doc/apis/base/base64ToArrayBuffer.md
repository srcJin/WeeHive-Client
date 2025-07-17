# 将 Base64 字符串转成 ArrayBuffer 数据。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html)
## 类型[​](base64ToArrayBuffer.html#类型)
```tsx
(base64: string) => ArrayBuffer
```

## 参数[​](base64ToArrayBuffer.html#参数)
参数类型说明base64`string`要转化成 ArrayBuffer 对象的 Base64 字符串
## 示例代码[​](base64ToArrayBuffer.html#示例代码)
```tsx
const base64 = 'CxYh'
const arrayBuffer = Taro.base64ToArrayBuffer(base64)
```

- 
- 
-
