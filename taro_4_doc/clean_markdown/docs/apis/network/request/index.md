# 发起 HTTPS 网络请求。使用前请注意阅读[相关说明](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。
**data 参数说明** 最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String 。转换规则如下：

- 对于 `GET` 方法的数据，会将数据转换成 query string（`encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...`）
- 对于 `POST` 方法且 `header['content-type']` 为 `application/json` 的数据，会对数据进行 JSON 序列化
- 对于 `POST` 方法且 `header['content-type']` 为 `application/x-www-form-urlencoded` 的数据，会将数据转换成 query string `（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）`
支持情况：!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
## 类型[​](index.html#类型)
```tsx
<T = any, U = any>(option: Option<T, U>) => RequestTask<T>
```

## 参数[​](index.html#参数)
参数类型option`T`
### Option[​](index.html#option)
参数类型默认值必填说明url`string`是开发者服务器接口地址data`U`否请求的参数header`TaroGeneral.IAnyObject`否设置请求的 header，header 中不能设置 Referer。

`content-type` 默认为 `application/json`timeout`number``60000`否超时时间，单位为毫秒
API 支持度: weapp, h5, tt, alipay, rnmethod`keyof Method``"GET"`否HTTP 请求方法dataType`string`否返回的数据格式responseType`keyof ResponseType`否响应的数据类型enableHttp2`boolean``false`否开启 http2
API 支持度: weappenableQuic`boolean``false`否开启 quic
API 支持度: weappenableCache`boolean``false`否开启 cache
API 支持度: weapp, ttenableHttpDNS`boolean``false`否是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS
API 支持度: weapphttpDNSServiceId`string`否HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS
API 支持度: weappenableChunked`boolean``false`否开启 transfer-encoding chunked。
API 支持度: weappforceCellularNetwork`boolean``false`否wifi下使用移动网络发送请求
API 支持度: weappenableCookie`boolean``false`否headers 中设置 cookie 字段是否生效。如果为 false，则 headers 中的 cookie 字段将被忽略，请求头中将包含服务端上一次返回的 cookie（如果有）。
API 支持度: alipay 支付宝: 10.2.33+referrerStrategy`keyof ReferrerStrategy``"querystring"`否referer 策略，用于控制当前请求 header 对象中 referer 字段格式。该参数默认值可通过 app.json 中的配置进行修改。
API 支持度: alipay 支付宝: 10.3.50+ APPX: 2.8.7 开发者工具: 3.5.1
[参考地址](https://opendocs.alipay.com/mini/api/owycmh#referrerStrategy%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E)success`(result: SuccessCallbackResult<T>) => void`否接口调用成功的回调函数fail`(res: TaroGeneral.CallbackResult) => void`否接口调用失败的回调函数complete`(res: Partial<SuccessCallbackResult> & TaroGeneral.CallbackResult) => void`否接口调用结束的回调函数（调用成功、失败都会执行）jsonpstring or boolean`false`否设置是否使用 jsonp 方式获取数据
API 支持度: h5jsonpCache`RequestCache`否设置 jsonp 请求 url 是否需要被缓存
API 支持度: h5mode`keyof CorsMode``"same-origin"`否设置是否允许跨域请求
API 支持度: h5credentials`keyof Credentials``"omit"`否设置是否携带 Cookie
API 支持度: h5cache`keyof Cache``"default"`否设置缓存模式
API 支持度: h5retryTimes`number``2`否设置请求重试次数
API 支持度: h5
h5: 仅在 jsonp 模式下生效backupstring or string[]否设置请求的兜底接口
API 支持度: h5
h5: 仅在 jsonp 模式下生效signal`AbortSignal`否设置请求中止信号
API 支持度: h5dataCheck`() => boolean`否设置请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败
API 支持度: h5
h5: 仅在 jsonp 模式下生效useStore`boolean``false`否设置请求是否使用缓存
API 支持度: h5
h5: 仅在 jsonp 模式下生效storeCheckKey`string`否设置请求缓存校验的 key
API 支持度: h5
h5: 仅在 jsonp 模式下生效storeSign`string`否设置请求缓存签名
API 支持度: h5
h5: 仅在 jsonp 模式下生效storeCheck`() => boolean`否设置请求校验函数，一般不需要设置
API 支持度: h5
### SuccessCallbackResult[​](index.html#successcallbackresult)
参数类型必填说明data`T`是开发者服务器返回的数据header`TaroGeneral.IAnyObject`是开发者服务器返回的 HTTP Response HeaderstatusCode`number`是开发者服务器返回的 HTTP 状态码errMsg`string`是调用结果cookies`string[]`否cookies
### DataType[​](index.html#datatype)
返回的数据格式
参数说明json返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse
其他: 不对返回的内容进行 JSON.parsetext返回的数据为文本字符串
API 支持度: alipaybase64返回的数据将转换为 base64 格式字符串
API 支持度: alipayarraybuffer返回的数据将保持 ArrayBuffer 数据
API 支持度: alipay 支付宝: 10.1.70+
### Method[​](index.html#method)
HTTP 请求方法
参数说明OPTIONSHTTP 请求 OPTIONSGETHTTP 请求 GETHEADHTTP 请求 HEADPOSTHTTP 请求 POSTPUTHTTP 请求 PUTPATCHHTTP 请求 PATCHDELETEHTTP 请求 DELETETRACEHTTP 请求 TRACECONNECTHTTP 请求 CONNECT
### ResponseType[​](index.html#responsetype)
响应的数据类型
参数说明text响应的数据为文本arraybuffer响应的数据为 ArrayBuffer
### CorsMode[​](index.html#corsmode)
跨域策略
参数说明no-cors跨域请求将获取不透明的响应cors允许跨域请求same-origin请求总是向当前的源发起的
### Credentials[​](index.html#credentials)
证书
参数说明include不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息same-origin只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息omit从不发送cookies
### Cache[​](index.html#cache)
缓存策略
参数说明default浏览器从HTTP缓存中寻找匹配的请求no-cache浏览器在其HTTP缓存中寻找匹配的请求reload浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存force-cache浏览器在其HTTP缓存中寻找匹配的请求only-if-cached浏览器在其HTTP缓存中寻找匹配的请求
### ReferrerStrategy[​](index.html#referrerstrategy)
referer 策略
参数说明indexreferer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.htmlpage保留 page（pages/xxx/yyy），referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}querystring默认值。会将发起请求时所在页面的 URL 作为 referer 值，会保留 page（pages/xxx/yyy）和 querystring（x=1&y=2）并可能有框架添加的其他参数，referer 值为 https://{appid}.hybrid.alipay-eco.com/{appid}/{version}/index.html#{page}?{querysrtring}{框架其他参数}
## 示例代码[​](index.html#示例代码)
### 示例 1[​](index.html#示例-1)
```tsx
Taro.request({
 url: 'test.php', //仅为示例，并非真实的接口地址
 data: {
 x: '',
 y: ''
 },
 header: {
 'content-type': 'application/json' // 默认值
 },
 success: function (res) {
 console.log(res.data)
 }
})
```

### 示例 2[​](index.html#示例-2)
async/await 用法：
```tsx
const res = await Taro.request(params)
```

- 
- 

- 
- 
- 
- 
- 
- 
- 
- 
- 

- 

- 
-
