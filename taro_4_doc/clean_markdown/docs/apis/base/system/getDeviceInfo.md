# 获取设备基础信息
支持情况：!!!!
> H5: 不支持 abi、benchmarkLevel

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getDeviceInfo.html)
## 类型[​](getDeviceInfo.html#类型)
```tsx
() => Result
```

## 参数[​](getDeviceInfo.html#参数)
### Result[​](getDeviceInfo.html#result)
参数类型必填说明abi`string`否应用二进制接口类型（仅 Android 支持）deviceAbi`string`是设备二进制接口类型（仅 Android 支持）benchmarkLevel`number`是设备性能等级（仅Android小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）brand`string`是设备品牌model`string`是设备型号system`string`是操作系统及版本platform`string`是客户端平台CPUType`string`是设备 CPU 型号（仅 Android 支持）
## 示例代码[​](getDeviceInfo.html#示例代码)
```tsx
const deviceInfo = Taro.getDeviceInfo()

console.log(deviceInfo.abi)
console.log(deviceInfo.benchmarkLevel)
console.log(deviceInfo.brand)
console.log(deviceInfo.model)
console.log(deviceInfo.platform)
console.log(deviceInfo.system)
```

- 
- 

- 

-
