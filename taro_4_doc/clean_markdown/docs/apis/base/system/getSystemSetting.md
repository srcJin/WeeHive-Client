# 获取设备设置
支持情况：!!!!!
> H5: 不支持 bluetoothEnabled、locationEnabled、wifiEnabled

[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getSystemSetting.html)
## 类型[​](getSystemSetting.html#类型)
```tsx
() => Result
```

## 参数[​](getSystemSetting.html#参数)
### Result[​](getSystemSetting.html#result)
参数类型必填说明bluetoothEnabled`boolean`否蓝牙的系统开关locationEnabled`boolean`否地理位置的系统开关wifiEnabled`boolean`否Wi-Fi 的系统开关deviceOrientation`keyof DeviceOrientation`否设备方向
### DeviceOrientation[​](getSystemSetting.html#deviceorientation)
设备方向合法值
参数说明portrait竖屏landscape横屏
## 示例代码[​](getSystemSetting.html#示例代码)
```tsx
const systemSetting = Taro.getSystemSetting()

console.log(systemSetting.bluetoothEnabled)
console.log(systemSetting.deviceOrientation)
console.log(systemSetting.locationEnabled)
console.log(systemSetting.wifiEnabled)
```

- 
- 

- 
- 

-
