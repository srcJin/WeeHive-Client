# Taro.getExtConfig 的同步版本。
**Tips**

- 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfigSync 是否存在来兼容
支持情况：!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html)
## 类型[​](getExtConfigSync.html#类型)
```tsx
() => TaroGeneral.IAnyObject
```

## 参数[​](getExtConfigSync.html#参数)
### ExtInfo[​](getExtConfigSync.html#extinfo)
参数类型说明extConfig`TaroGeneral.IAnyObject`第三方平台自定义的数据
## 示例代码[​](getExtConfigSync.html#示例代码)
```tsx
let extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {}

console.log(extConfig)
```

- 
- 

- 

-
