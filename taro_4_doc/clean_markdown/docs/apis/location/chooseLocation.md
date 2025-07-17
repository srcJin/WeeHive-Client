# 打开地图选择位置。
`chooseLocation` api功能是依赖于腾讯位置服务，所以需要使用 api 密钥。如果您没有，可以前往腾讯位置服务[开发者控制台](https://lbs.qq.com/console/mykey.html?console=mykey)进行申请。
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html)
## 类型[​](chooseLocation.html#类型)
```tsx
(option: Option) => Promise<SuccessCallbackResult>
```

## 参数[​](chooseLocation.html#参数)
参数类型option`Option`
### Option[​](chooseLocation.html#option)
参数类型必填说明latitude`number`否目标地纬度longitude`number`否目标地经度mapOpts`Record<string, unknown>`否地图选点组件参数
API 支持度: h5
h5: 仅支持 H5 使用
[参考地址](https://lbs.qq.com/webApi/component/componentGuide/componentPicker)title`string`否页面显示标题
API 支持度: alipay
alipay: 安卓默认值为 位置，iOS、IDE 默认值为 你在哪里?
[参考地址](https://opendocs.alipay.com/mini/api/location?pathHash=951b46a1)success`(result: SuccessCallbackResult) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）
### SuccessCallbackResult[​](chooseLocation.html#successcallbackresult)
参数类型必填说明address`string`是详细地址latitude`number`是纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系longitude`number`是经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系name`string`是位置名称adCode`number`否区县代码
API 支持度: alipayadName`string`否区县名称
API 支持度: alipaycityCode`string`否城市代码
API 支持度: alipaycityName`string`否城市名称
API 支持度: alipayprovinceCode`number`否省份代码
API 支持度: alipayprovinceName`string`否省份名称
API 支持度: alipayerrMsg`string`是调用结果
## 示例代码[​](chooseLocation.html#示例代码)
```tsx
// config/index.js

// 获得 api 密钥后，您需要将它填入项目的常量配置`defineConstants.LOCATION_APIKEY`中：
const config = {
 defineConstants: {
 LOCATION_APIKEY: JSON.stringify('XXXXX-XXXXX-XXXXX-XXXXX-XXXXX-XXXXX')
 },
 // ...
}
```

- 
- 

- 
- 

-
