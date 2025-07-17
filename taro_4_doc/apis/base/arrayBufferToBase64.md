# 将 ArrayBuffer 数据转成 Base64 字符串。
支持情况：!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html)
## 类型[​](arrayBufferToBase64.html#类型)
```tsx
(buffer: ArrayBuffer) => string
```

## 参数[​](arrayBufferToBase64.html#参数)
参数类型说明buffer`ArrayBuffer`要转换成 Base64 字符串的 ArrayBuffer 对象
## 示例代码[​](arrayBufferToBase64.html#示例代码)
```tsx
const arrayBuffer = new Uint8Array([11, 22, 33])
const base64 = Taro.arrayBufferToBase64(arrayBuffer)
```

- 
- 
-
