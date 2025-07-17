# 根目录下的 `app.config.js` 文件用来对小程序进行全局配置，配置项遵循**微信小程序规范**，并且对所有平台进行统一。
**注意：**

- **Taro v3.4** 之前，`app.config.js` 里引用的 JS 文件**没有经过 Babel 编译**。(**Taro v3.4** 开始支持）
- 多端差异化逻辑可以使用 `process.env.TARO_ENV` 变量作条件判断来实现。
- `app.config.js` 不支持多端文件的形式，如 `app.weapp.js` 这样是不起作用的。
## defineAppConfig 宏函数[​](app-config.html#defineappconfig-宏函数)
信息
Taro v3.4+ 支持
开发者可以使用**编译时宏函数**`defineAppConfig` 包裹配置对象，以获得**类型提示**和**自动补全**，如：
app.config.ts
```ts
export default defineAppConfig({
 pages: ['pages/index/index'],
 window: {
 backgroundTextStyle: 'light',
 navigationBarBackgroundColor: '#fff',
 navigationBarTitleText: 'WeChat',
 navigationBarTextStyle: 'black',
 },
})
```

## 通用配置项[​](app-config.html#通用配置项)
在 H5、React Native、所有小程序均支持的配置。
属性类型必填描述[pages](app-config.html#pages)String Array是页面路径列表[window](app-config.html#window)Object否全局的默认窗口表现[tabBar](app-config.html#tabbar)Object否底部 tab 栏的表现[subPackages](app-config.html#subpackages)Object Array否分包结构配置
### pages[​](app-config.html#pages)
用于指定小程序由哪些页面组成，每一项都对应一个页面的 `路径 + 文件名` 信息。文件名不需要写文件后缀，框架会自动去寻找对应位置的文件进行处理。
**数组的第一项代表小程序的初始页面（首页）。小程序中新增/减少页面，都需要对 pages 数组进行修改。**
如开发目录为：
```text
├── app.js
├── app.json
├── app.wxss
├── pages
│ │── index
│ │ ├── index.wxml
│ │ ├── index.js
│ │ ├── index.json
│ │ └── index.wxss
│ └── logs
│ ├── logs.wxml
│ └── logs.js
└── utils
```

则需要在入口文件配置中写
app.config.js
```jsx
export default {
 pages: ['pages/index/index', 'pages/logs/logs'],
}
```

### window[​](app-config.html#window)
用于设置小程序的状态栏、导航条、标题、窗口背景色，其配置项如下。
属性类型默认值描述navigationBarBackgroundColorHexColor（十六进制颜色值）#000000导航栏背景颜色，如 #000000navigationBarTextStyleStringwhite导航栏标题颜色，仅支持 black / whitenavigationBarTitleTextString导航栏标题文字内容navigationStyleStringdefault导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮backgroundColorString窗口的背景色backgroundTextStyleStringdark下拉 loading 的样式，仅支持 dark / lightbackgroundColorTopString#ffffff顶部窗口的背景色，仅 iOS 支持backgroundColorBottomString#ffffff底部窗口的背景色，仅 iOS 支持enablePullDownRefreshbooleanfalse是否开启当前页面的下拉刷新。onReachBottomDistanceNumber50页面上拉触底事件触发时距页面底部距离，单位为 pxpageOrientationStringportrait屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
#### 各端支持程度如下[​](app-config.html#各端支持程度如下)
属性微信百度字节跳动支付宝H5RNnavigationBarBackgroundColor✔️✔️✔️✔️✔️✔️navigationBarTextStyle✔️✔️✔️✘✔️✔️navigationBarTitleText✔️✔️✔️✔️✔️✔️navigationStyle✔️（微信客户端 6.6.0）✔️（百度 App 版本 11.1.0）✔️✘✘✘backgroundColor✔️✔️✔️✘✘✘backgroundTextStyle✔️✔️✔️✘✘✘backgroundColorTop✔️（微信客户端 6.5.16）✘✔️✘✘✘backgroundColorBottom✔️（微信客户端 6.5.16）✘✔️✘✘✘enablePullDownRefresh✔️✔️✔️✔️✘✘onReachBottomDistance✔️✔️✔️✘✘✘pageOrientation✔️ 2.4.0 (auto) / 2.5.0 (landscape)✘✘✘✘✘
#### 代码示例[​](app-config.html#代码示例)
app.config.js
```jsx
export default {
 pages: ['pages/index/index', 'pages/logs/logs'],
 window: {
 navigationBarBackgroundColor: '#ffffff',
 navigationBarTextStyle: 'black',
 navigationBarTitleText: '微信接口功能演示',
 backgroundColor: '#eeeeee',
 backgroundTextStyle: 'light',
 },
}
```

### tabBar[​](app-config.html#tabbar)
如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。
其配置项如下
属性类型必填默认值描述colorHexColor（十六进制颜色值）是tab 上的文字默认颜色，仅支持十六进制颜色selectedColorHexColor（十六进制颜色值）是tab 上的文字选中时的颜色，仅支持十六进制颜色backgroundColorHexColor（十六进制颜色值）是tab 的背景色，仅支持十六进制颜色borderStyleString是blacktabbar 上边框的颜色， 仅支持 black / whitelistArray是tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tabpositionString否bottomtabBar 的位置，仅支持 bottom / topcustomBoolean否false自定义 tabBar
其中 list 接受一个数组，只能配置最少 2 个、最多 5 个 tab。tab 按数组的顺序排序，每个项都是一个对象，其属性值如下：
属性类型必填描述pagePathString是页面路径，必须在 pages 中先定义textString是tab 上按钮文字iconPathString否图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
当 position 为 top 时，不显示 icon。selectedIconPathString否选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
当 position 为 top 时，不显示 icon。
#### 各端支持程度如下[​](app-config.html#各端支持程度如下-1)
属性微信百度字节跳动支付宝H5RNcolor✔️✔️✔️✔️✔️✔️selectedColor✔️✔️✔️✔️✔️✔️backgroundColor✔️✔️✔️✔️✔️✔️borderStyle✔️✔️✔️✘✔️✔️list✔️✔️✔️✔️✔️✔️position✔️✘✔️✘✘✘custom✔️（基础库 2.5.0 以上）✘✘✘✘✘
### subPackages[​](app-config.html#subpackages)
> H5 和 RN 会把
`> subPackages
`> 合入
`> pages
`
启用[分包加载](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)时，声明项目分包结构
## 小程序端特有属性[​](app-config.html#小程序端特有属性)
只在部分小程序中支持的属性，H5、RN 均不支持。
属性类型描述[networkTimeout](app-config.html#networktimeout)Object网络超时时间[debug](app-config.html#debug)Boolean是否开启 debug 模式，默认关闭[permission](app-config.html#permission)Object小程序接口权限相关设置[requiredBackgroundModes](app-config.html#requiredbackgroundmodes)String Array需要在后台使用的能力，如「音乐播放」[preloadRule](app-config.html#preloadrule)Object分包预下载规则[entryPagePath](app-config.html#entrypagepath)String小程序默认启动首页[workers](app-config.html#workers)StringWorker 代码放置的目录[navigateToMiniProgramAppIdList](app-config.html#navigatetominiprogramappidlist)String Array需要跳转的小程序列表，详见 wx.navigateToMiniProgram
### networkTimeout[​](app-config.html#networktimeout)
支持情况：!!!!
各类网络请求的超时时间，单位均为毫秒。
属性类型必填默认值描述requestNumber否60000[Taro.request](https://docs.taro.zone/docs/apis/network/request/request) 的超时时间，单位：毫秒connectSocketNumber否60000[Taro.connectSocket](apis/network/websocket/connectSocket.html) 的超时时间，单位：毫秒uploadFileNumber否60000[Taro.uploadFile](apis/network/upload/uploadFile.html) 的超时时间，单位：毫秒downloadFileNumber否60000[Taro.downloadFile](apis/network/download/downloadFile.html) 的超时时间，单位：毫秒
### debug[​](app-config.html#debug)
支持情况：!!!
可以在开发者工具中开启 `debug` 模式，在开发者工具的控制台面板，调试信息以 `info` 的形式给出，其信息有 `Page` 的注册，页面路由，数据更新，事件触发等。可以帮助开发者快速定位一些常见的问题。
### permission[​](app-config.html#permission)
支持情况： !!!!
小程序[接口权限](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)相关设置。字段类型为 `Object`，结构为：
属性类型必填默认值描述scope.userLocationPermissionObject否位置相关权限声明
`PermissionObject` 结构：
属性类型必填默认值描述descstring是小程序获取权限时展示的接口用途说明。最长 30 个字符
#### 代码示例[​](app-config.html#代码示例-1)
app.config.js
```js
export default {
 pages: ['pages/index/index', 'pages/logs/logs'],
 permission: {
 'scope.userLocation': {
 desc: '你的位置信息将用于小程序位置接口的效果展示',
 },
 },
}
```

![image](https://img10.360buyimg.com/ling/jfs/t1/132830/23/12399/20429/5f893793Ebafa6939/b5f6a390ac9bfd79.jpg)
### requiredBackgroundModes[​](app-config.html#requiredbackgroundmodes)
支持情况：!!!
申明需要后台运行的能力，类型为数组。目前支持以下项目：

- `audio`: 后台音乐播放
- `location`: 后台定位
#### 代码示例[​](app-config.html#代码示例-2)
app.config.js
```js
export default {
 pages: ['pages/index/index'],
 requiredBackgroundModes: ['audio', 'location'],
}
```

注：在此处申明了后台运行的接口，开发版和体验版上可以直接生效，正式版还需通过审核。
### preloadRule[​](app-config.html#preloadrule)
支持情况：!!!
声明分包预下载的规则。

- [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)
- [百度小程序文档](https://smartprogram.baidu.com/docs/develop/framework/subpackages/#%E5%88%86%E5%8C%85%E9%A2%84%E4%B8%8B%E8%BD%BD%E8%A7%84%E5%88%99)
- [抖音小程序文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/basic-reference/general-configuration)
### entryPagePath[​](app-config.html#entrypagepath)
支持情况：!!!
指定小程序的默认启动路径（首页），常见情景是从微信聊天列表页下拉启动、小程序列表启动等。如果不填，将默认为 `pages` 列表的第一项。不支持带页面路径参数。
#### 代码示例[​](app-config.html#代码示例-3)
app.config.js
```js
export default {
 entryPagePath: 'pages/index/index',
}
```

### workers[​](app-config.html#workers)
支持情况：!!
使用 Worker 处理多线程任务时，设置 Worker 代码放置的目录。

- [微信小程序文档 - Worker](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)
- [QQ 小程序文档 - Worker](https://q.qq.com/wiki/develop/miniprogram/frame/basic_ability/basic_multiworker.html)
### navigateToMiniProgramAppIdList[​](app-config.html#navigatetominiprogramappidlist)
支持情况：!!
当小程序需要使用 [Taro.navigateToMiniProgram](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateToMiniProgram.html) 接口跳转到其他小程序时，需要先在配置文件中声明需要跳转的小程序 appId 列表，最多允许填写 10 个
## 微信小程序特有属性[​](app-config.html#微信小程序特有属性)
只在微信小程序中支持的属性。!
属性类型描述[functionalPages](app-config.html#functionalpages)Boolean是否启用插件功能页，默认关闭[plugins](app-config.html#plugins)Object使用到的插件[resizable](app-config.html#resizable)BooleaniPad 小程序是否支持屏幕旋转，默认关闭[usingComponents](app-config.html#usingcomponents)Object全局自定义组件配置[sitemapLocation](app-config.html#sitemaplocation)String指明 sitemap.json 的位置[style](app-config.html#style)String指定使用升级后的 weui 样式[useExtendedLib](app-config.html#useextendedlib)Object指定需要引用的扩展库[entranceDeclare](app-config.html#entrancedeclare)Object微信消息用小程序打开[darkmode](app-config.html#darkmode)boolean小程序支持 DarkMode[themeLocation](app-config.html#themelocation)String指明 theme.json 的位置[lazyCodeLoading](app-config.html#lazycodeloading)String配置自定义组件代码按需注入[singlePage](app-config.html#singlepage)Object单页模式相关配置[renderer](app-config.html#renderer)String全局默认的渲染后端
### functionalPages[​](app-config.html#functionalpages)
> 基础库 2.1.0 开始支持

插件所有者小程序需要设置这一项来启用[插件功能页](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/functional-pages.html)。
### plugins[​](app-config.html#plugins)
> 基础库 1.9.6 开始支持

声明小程序需要使用的[插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)。
### resizable[​](app-config.html#resizable)
> 基础库 2.3.0 开始支持

在 iPad 上运行的小程序可以设置支持[屏幕旋转](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html)。 在 PC 上运行的小程序，用户可以按照任意比例拖动窗口大小，也可以在小程序菜单中最大化窗口。
### usingComponents[​](app-config.html#usingcomponents)
> 微信开发者工具 1.02.1810190 及以上版本支持

在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。
### sitemapLocation[​](app-config.html#sitemaplocation)
指明 [sitemap.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html) 的位置；默认为 `sitemap.json` 即在根目录下名字的 `sitemap.json` 文件。
### style[​](app-config.html#style)
> 基础库 2.8.0 开始支持

微信客户端 7.0 开始，UI 界面进行了大改版。小程序也进行了基础组件的样式升级。`app.json` 中配置 `"style": "v2"` 可表明启用新版的组件样式。
本次改动涉及的组件有 `button``icon``radio``checkbox``switch``slider`。可前往小程序示例进行体验。
### useExtendedLib[​](app-config.html#useextendedlib)
> 基础库 2.2.1 开始支持

指定需要引用的扩展库。目前支持以下项目：

- weui: WeUI 组件库
指定后，相当于引入了对应扩展库相关的最新版本的 npm 包，同时也不占用小程序的包体积。rc 工具版本支持分包引用。用法如下：
#### 代码示例[​](app-config.html#代码示例-4)
app.config.js
```js
export default {
 useExtendedLib: {
 weui: true,
 },
}
```

### entranceDeclare[​](app-config.html#entrancedeclare)
> 微信客户端 7.0.9 及以上版本支持，iOS 暂不支持

聊天位置消息用打车类小程序打开，[详情参考](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/location-message.html)。
#### 代码示例[​](app-config.html#代码示例-5)
app.config.js
```js
export default {
 entranceDeclare: {
 locationMessage: {
 path: 'pages/index/index',
 query: 'foo=bar',
 },
 },
}
```

### darkmode[​](app-config.html#darkmode)
> 开发者工具 1.03.2004271 及以上版本支持，基础库 2.11.0 及以上版本支持

微信 iOS 客户端 `7.0.12` 版本、Android 客户端 `7.0.13` 版本正式支持 `DarkMode`，可通过配置 `"darkmode": true` 表示当前小程序可适配 `DarkMode`，所有基础组件均会根据系统主题展示不同的默认样式，`navigation bar` 和 `tab bar` 也会根据开发者的配置自动切换。
配置后，请根据 [DarkMode 适配指南](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)自行完成基础样式以外的适配工作。
#### 代码示例[​](app-config.html#代码示例-6)
app.config.js
```js
export default {
 darkmode: true,
}
```

### themeLocation[​](app-config.html#themelocation)
自定义 [theme.json](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-theme-json) 的路径，当配置 `"darkmode":true` 时，当前配置文件为必填项。
#### 代码示例[​](app-config.html#代码示例-7)
app.config.js
```js
export default {
 themeLocation: '/path/to/theme.json',
}
```

### lazyCodeLoading[​](app-config.html#lazycodeloading)
> 基础库 2.11.1 及以上版本支持，2.11.1 以下兼容但无优化效果

通常情况下，在小程序启动期间，所有页面及自定义组件的代码都会进行注入，当前页面没有使用到的自定义组件和页面在注入后其实并没有被使用。
自基础库版本 `2.11.1` 起，小程序支持有选择地注入必要的代码，以降低小程序的启动时间和运行时内存。
#### 代码示例[​](app-config.html#代码示例-8)
app.config.js
```js
export default {
 lazyCodeLoading: 'requiredComponents',
}
```

### singlePage[​](app-config.html#singlepage)
> 基础库 2.11.3 及以上版本支持，目前分享到朋友圈 (Beta) 后打开会进入单页模式

单页模式相关配置：
属性类型必填默认值描述navigationBarFitString否默认自动调整，若原页面是自定义导航栏，则为 `float`，否则为 `squeezed`导航栏与页面的相交状态，值为 `float` 时表示导航栏浮在页面上，与页面相交；值为 `squeezed` 时表示页面被导航栏挤压，与页面不相交
### renderer[​](app-config.html#renderer)
指定小程序全局的默认渲染后端。
可选值：`webview`, `skyline`
默认值：`webview`
> Taro 提供了
`> Taro.getRenderer()
`> 方法，支持在页面
`> onLoad
`> 生命周期中获取到当前页面的渲染引擎类型。

## 百度小程序特有属性[​](app-config.html#百度小程序特有属性)
只在百度小程序中支持的属性。!
属性类型描述[routes](app-config.html#routes)Array Object小程序自定义路由相关设置[dynamicLib](app-config.html#dynamiclib)Object引入动态库
### routes[​](app-config.html#routes)
> 基础库 3.160.3 及以上版本支持

更多详见[自定义路由](https://smartprogram.baidu.com/docs/develop/framework/app_service_customroute/)
routes 为一个数组，数组中每一项代表一组路由规则，具体包含字段为：
属性类型必填描述示例pathString是访问路径"home"pageString是页面源码文件路径，从小程序包根目录开始的文件路径"pages/home/index"
#### 代码示例[​](app-config.html#代码示例-9)
app.config.js
```js
export default {
 pages: ['pages/home/home', 'pages/list/list', 'pages/detail/detail'],
 subPackage: [
 {
 root: 'packageA',
 pages: ['pages/home/home', 'pages/list/list', 'pages/detail/detail'],
 },
 ],
 routes: [
 {
 // 投放入口，scheme中的path
 path: 'home',
 // 真实的物理存储路径
 page: 'pages/home/home',
 },
 {
 path: 'list',
 page: 'pages/list/list',
 },
 {
 path: 'foo/bar',
 page: 'pages/list/list',
 },
 ],
}
```

### dynamicLib[​](app-config.html#dynamiclib)
详情请参考[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)
## QQ 小程序特有属性[​](app-config.html#qq-小程序特有属性)
只在 QQ 小程序中支持的属性。!
属性类型描述[groupIdList](app-config.html#groupidlist)String Object需要打开群资料卡的群号列表
### groupIdList[​](app-config.html#groupidlist)
详情请参考 [Button](https://q.qq.com/wiki/develop/miniprogram/component/form/button.html)
需使用可手动新增以下配置，补充 QQ 小程序类型
global.d.ts
```ts
/// <reference types="@tarojs/plugin-platform-qq/types/shims-qq" />
```

## 京东小程序特有属性[​](app-config.html#京东小程序特有属性)
只在京东小程序中支持的属性。!
属性类型描述[pageAlias](app-config.html#pagealias)Object页面 page 别名[quickMenu](app-config.html#quickmenu)Object胶囊按钮内菜单配置
### pageAlias[​](app-config.html#pagealias)
页面别名，可以为 `pages` 里面的页面，配置一个别名，用于打开小程序时，`path` 路径未知或者 `path` 路径过长的情况下，需要配合小程序唤起协议 `openapp` 协议使用。
#### 代码示例[​](app-config.html#代码示例-10)
app.config.js
```js
export default {
 pages: ['pages/index/index', 'pages/my/my'],
 window: {
 navigationBarTitleText: '京东小程序 Demo',
 },
 tabBar: {
 list: [
 {
 pagePath: 'pages/index/index',
 text: '首页',
 },
 {
 pagePath: 'pages/my/my',
 text: '个人中心',
 },
 ],
 },
 debug: true,
 pageAlias: {
 index: 'pages/index/index',
 my: 'pages/my/my',
 },
}
```

`openapp` 示例如下:
```text
openapp.jdmobile://virtual?params={"category":"jump","des":"jdmp","appId":"ao123","vapptype":"1","path":"","pageAlias":"my","param":{}}
```

上面示例将打开 `appId` 为 ao123 的 `pages/my/my` 页面。
注意: `pageAlias` 里面的页面路径，必须在 `pages` 里存在；多个别名可以对应同一个页面地址，别名不可重复。 更多 `openapp` 协议详情，可参考**打开小程序**该功能需要京东 `app` 版本 `9.3.4` 和小程序引擎 `1.10.13` 及以上支持。
### quickMenu[​](app-config.html#quickmenu)
胶囊按钮里面的部分菜单可通过配置开关来显示隐藏，默认是 `true` 显示状态。 可配置的菜单有：
属性类型必填默认值说明shareBoolean否true是否显示推送给朋友（分享）菜单favoriteBoolean否true是否显示关注菜单sendToDesktopBoolean否true是否显示发送到桌面菜单，仅安卓有效
下面示例中，发送给朋友、关注、发送到桌面三个菜单将都隐藏，不会展示，示例如下：
#### 代码示例[​](app-config.html#代码示例-11)
app.config.js
```js
export default {
 pages: ['pages/index/index', 'pages/my/my'],
 window: {
 navigationBarTitleText: '京东小程序 Demo',
 },
 quickMenu: {
 share: false,
 favorite: false,
 sendToDesktop: false,
 },
}
```

`quickMenu` 里面的菜单，只有配置布尔值 `false` 的情况下，才能隐藏，并且如果有 API 可控制某些菜单隐藏，则 API 的优先级大于这里的配置，该配置是全局配置，仅支持在 `app.json` 中配置。
## H5 端支持的属性[​](app-config.html#h5-端支持的属性)
属性类型必填默认值描述最低版本[entryPagePath](app-config.html#entrypagepath)String否默认启动首页3.3.17[appId](app-config.html#appId)String否"app"渲染页面的容器 id3.3.18[animation](app-config.html#animation)[`RouterAnimate`](app-config.html#RouterAnimate)、`boolean`否`{ "duration": 300, "delay": 50 }`是否开启 h5 端路由动画功能，默认开启3.3.18
### appId[​](app-config.html#appid)
H5 渲染页面的容器 id，如果修改 Html 文件中的容器 Id，需要同步添加该配置避免编译错误。
#### 代码示例[​](app-config.html#代码示例-12)
index.html
```html
<!-- ··· -->
<body>
 <div id="app"></div>
</body>
<!-- ··· -->
```
app.config.js
```js
export default {
 appId: 'app',
}
```

### animation[​](app-config.html#animation)
指定 H5 端动画配置，可以通过覆盖 CSS 样式调整动画。
#### RouterAnimate[​](app-config.html#routeranimate)
```ts
interface RouterAnimate {
 /**
 * 动画切换时间，单位毫秒
 * @default 300
 */
 duration?: number
 /**
 * 动画切换时间，单位毫秒
 * @default 50
 */
 delay?: number
}
```

#### 代码示例[​](app-config.html#代码示例-13)
app.config.js
```js
export default {
 animation: false,
}
```

## ASCF 元服务支持的属性[​](app-config.html#ascf-元服务支持的属性)
### ASCF支持的全局参数[​](app-config.html#ascf支持的全局参数)
这些配置需在项目的入口配置文件（如 app.config.js）中声明，以实现对ASCF元服务的适配。
属性类型必填默认值说明ascfAppIdString是无ASCF元服务的唯一应用标识，需在ASCF开发者平台申请后填写。serviceTypeString是无元服务类型，可选值：miniprogram（小程序式元服务）、webapp（轻应用式元服务）。enableAuthBoolean否false是否开启ASCF的全局用户鉴权功能，需配合ASCF的API使用。apiBaseUrlString否无ASCF后端API的统一请求地址，用于元服务与服务器的通信。
#### 代码示例[​](app-config.html#代码示例-14)
app.config.js
```js
export default {
 pages: ['pages/index/index'],
 window: {
 navigationBarTitleText: 'Taro Demo',
 },

 ascf: {
 ascfAppId: 'ASCF_123456', 
 serviceType: 'miniprogram', 
 enableAuth: true, 
 apiBaseUrl: 'https://api.ascf.com', 
 },
};
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
