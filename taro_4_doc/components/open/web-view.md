# web-view 组件是一个可以用来承载网页的容器，会自动铺满整个小程序页面。个人类型与海外类型的小程序暂不支持使用。
支持情况：!!!!!!!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
## 类型[​](web-view.html#类型)
```tsx
ComponentType<WebViewProps>
```

## 示例代码[​](web-view.html#示例代码)

- React
- Vue
```tsx
class App extends Component {
 handleMessage () {}

 render () {
 return (
 <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />
 )
 }
}
html
<template>
 <web-view src='https://mp.weixin.qq.com/' @message="handleMessage" />
</template>
```

## WebViewProps[​](web-view.html#webviewprops)
参数类型默认值必填说明src`string`是webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。progressbarColor`string`否webview 的进度条颜色type`string``default`否若使用web-view组件引入第三方客服，必须填写type="im"onMessage`CommonEventFunction<onMessageEventDetail>`否网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }onLoad`CommonEventFunction<onLoadEventDetail>`否网页加载成功时候触发此事件。e.detail = { src }onError`CommonEventFunction<onErrorEventDetail>`否网页加载失败的时候触发此事件。e.detail = { src }
### API 支持度[​](web-view.html#api-支持度)
API微信小程序百度小程序支付宝小程序抖音小程序QQ 小程序京东小程序H5React NativeHarmonyHarmony hybridWebViewProps.src✔️✔️✔️✔️✔️✔️✔️✔️✔️WebViewProps.progressbarColor✔️WebViewProps.type✔️WebViewProps.onMessage✔️✔️✔️✔️✔️✔️WebViewProps.onLoad✔️✔️✔️✔️✔️✔️✔️WebViewProps.onError✔️✔️✔️✔️✔️✔️✔️
### onMessageEventDetail[​](web-view.html#onmessageeventdetail)
参数类型说明data`any[]`消息数据，是多次 postMessage 的参数组成的数组
### onLoadEventDetail[​](web-view.html#onloadeventdetail)
参数类型说明src`string`网页链接
### onErrorEventDetail[​](web-view.html#onerroreventdetail)
参数类型说明src`string`网页链接
- 
- 
- 

- 
- 
- 
-
