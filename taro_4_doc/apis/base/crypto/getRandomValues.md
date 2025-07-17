# 获取密码学安全随机数
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/UserCryptoManager.getRandomValues.html)
## 类型[​](getRandomValues.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getRandomValues.html#参数)
参数类型option`Option`
## 示例代码[​](getRandomValues.html#示例代码)
```tsx
Taro.getRandomValues({
 length: 6 // 生成 6 个字节长度的随机数
}).then(res => {
 console.log(Taro.arrayBufferToBase64(res.randomValues)) // 转换为 base64 字符串后打印
})
```

- 
- 
-
