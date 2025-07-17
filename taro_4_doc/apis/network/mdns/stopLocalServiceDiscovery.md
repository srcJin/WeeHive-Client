# 停止搜索 mDNS 服务
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html)
## 类型[​](stopLocalServiceDiscovery.html#类型)
```tsx
(option?: Option) => void
```

## 参数[​](stopLocalServiceDiscovery.html#参数)
参数类型option`Option`
### Option[​](stopLocalServiceDiscovery.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(result: FailCallbackResult) => void`否接口调用失败的回调函数success`(res: TaroGeneral.CallbackResult) => void`否接口调用成功的回调函数
### FailCallbackResult[​](stopLocalServiceDiscovery.html#failcallbackresult)
参数类型说明errMsg`string`错误信息

可选值：
- 'task not found': 在当前没有处在搜索服务中的情况下调用 stopLocalServiceDiscovery;
- 
- 

- 
-
