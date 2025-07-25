# 开始 SOTER 生物认证。验证流程请参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/bio-auth.html)。
**resultJSON 说明** 此数据为设备TEE中，将传入的challenge和TEE内其他安全信息组成的数据进行组装而来的JSON，对下述字段的解释如下表。例子如下： | 字段名 | 说明 | |---|----| | raw | 调用者传入的challenge | | fid | （仅Android支持）本次生物识别认证的生物信息编号（如指纹识别则是指纹信息在本设备内部编号） | | counter | 防重放特征参数 | | tee_n | TEE名称（如高通或者trustonic等） | | tee_v | TEE版本号 | | fp_n | 指纹以及相关逻辑模块提供商（如FPC等） | | fp_v | 指纹以及相关模块版本号 | | cpu_id | 机器唯一识别ID | | uid | 概念同Android系统定义uid，即应用程序编号 |
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html)
## 类型[​](startSoterAuthentication.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](startSoterAuthentication.html#参数)
参数类型option`Option`
### Option[​](startSoterAuthentication.html#option)
参数类型必填说明challenge`string`是挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键识别信息，将作为 `resultJSON` 的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。requestAuthModes`(keyof requestAuthModes)[]`是请求使用的可接受的生物认证方式authContent`string`否验证描述，即识别过程中显示在界面上的对话框提示内容complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数
### SuccessCallbackResult[​](startSoterAuthentication.html#successcallbackresult)
参数类型说明authMode`string`生物认证方式errCode`number`错误码errMsg`string`错误信息resultJSON`string`在设备安全区域（TEE）内获得的本机安全信息（如TEE名称版本号等以及防重放参数）以及本次认证信息（仅Android支持，本次认证的指纹ID）。具体说明见下文resultJSONSignature`string`用SOTER安全密钥对 `resultJSON` 的签名(SHA256 with RSA/PSS, saltlen=20)
### requestAuthModes[​](startSoterAuthentication.html#requestauthmodes)
参数说明fingerPrint指纹识别facial人脸识别speech声纹识别
API 支持度: 暂未支持
## 示例代码[​](startSoterAuthentication.html#示例代码)
```tsx
Taro.startSoterAuthentication({
 requestAuthModes: ['fingerPrint'],
 challenge: '123456',
 authContent: '请用指纹解锁',
 success: function (res) { }
})
json
{
 "raw":"msg",
 "fid":"2",
 "counter":123,
 "tee_n":"TEE Name",
 "tee_v":"TEE Version",
 "fp_n":"Fingerprint Sensor Name",
 "fp_v":"Fingerprint Sensor Version",
 "cpu_id":"CPU Id",
 "uid":"21"
}
```

- 
- 

- 
- 
- 

-
