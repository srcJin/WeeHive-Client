# ## 方法[​](IBeaconInfo.html#方法)
参数类型说明uuid`string`Beacon 设备广播的 uuidmajor`string`Beacon 设备的主 IDminor`string`Beacon 设备的次 IDproximity`keyof Proximity`表示设备距离的枚举值（仅iOS）accuracy`number`Beacon 设备的距离，单位 m。iOS 上，proximity 为 0 时，accuracy 为 -1。rssi`number`表示设备的信号强度，单位 dBm
## 参数[​](IBeaconInfo.html#参数)
### Proximity[​](IBeaconInfo.html#proximity)
proximity 的合法值
参数说明0信号太弱不足以计算距离，或非 iOS 设备1十分近2比较近3远
- 
- 

-
