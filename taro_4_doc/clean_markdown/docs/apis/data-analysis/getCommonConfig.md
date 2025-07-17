# 给定实验参数数组，获取对应的实验参数值
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.getCommonConfig.html)
## 类型[​](getCommonConfig.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](getCommonConfig.html#参数)
参数类型option`Option`
### Option[​](getCommonConfig.html#option)
参数类型必填说明keys`string[]`否需要获取的数据指标的对象数组，每个string的格式约定：配置类型_分表keymode0 or 1是0：通用配置模式 1：实验模式, 参数与返回结果的使用等效于接口wx.getExptInfoSynccomplete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(res: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](getCommonConfig.html#successcallbackresult)
参数类型说明errcode`number`错误码errmsg`string`错误信息conf_type`number`配置类型, 1-表类型 2-kv类型conf`string`根据conf_type来确定conf内容, conf_type为1时conf是一个json数组, 类似"[{xxx},{xxx}]", 每一项对应表类型每一行配置内容, 其中conf_type为2时conf是一个json对象，类似"{xxxx}"expire_sec`number`过期时间,单位秒. 0表示当次有效
## 示例代码[​](getCommonConfig.html#示例代码)
```tsx
Taro.getCommonConfig({
 keys:["key1", "key2"],
 mode: 0,
 success: (res) => {
 console.log("success")
 console.log(res)
 },
 fail: (res) => {
 console.log("fail")
 console.log(res)
 }
})
```

- 
- 

- 
- 

-
