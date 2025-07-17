# 获取微信群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。
**Tips**

- 如需要展示群名称，小程序可以使用[开放数据组件](../../../components/open/open-data.html)
- 小游戏可以通过 `Taro.getGroupInfo` 接口获取群名称
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/group/wx.getGroupEnterInfo.html)
## 类型[​](getGroupEnterInfo.html#类型)
```tsx
(option?: Option) => Promise<TaroGeneral.CallbackResult>
```

## 参数[​](getGroupEnterInfo.html#参数)
参数类型option`Option`
### Option[​](getGroupEnterInfo.html#option)
参数类型必填说明complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getGroupEnterInfo.html#successcallbackresult)
参数类型必填说明errMsg`string`是错误信息encryptedData`string`是包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)iv`string`是加密算法的初始向量，详细见[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)cloudID`string`否敏感数据对应的云 ID，开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)的小程序才会返回，可通过云调用直接获取开放数据，详细见[云调用直接获取开放数据](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#method-cloud)
## 示例代码[​](getGroupEnterInfo.html#示例代码)
```tsx
Taro.getGroupEnterInfo({
 success(res) {
 // res
 {
 errMsg: 'getGroupEnterInfo:ok',
 encryptedData: '',
 iv: ''
 }
 },
 fail() { }
})
```

敏感数据有两种获取方式，一是使用 [加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) 。 获取得到的开放数据为以下 json 结构（其中 opengid 为当前群的唯一标识）：
```json
{
 "opengid": "OPENGID"
}
```

- 
- 

- 
- 

-
