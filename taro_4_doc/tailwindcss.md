# `Tailwind CSS` 是目前世界上**最**流行的原子化 `CSS` 框架。它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样语义化的类名。我们开发者能直接在各种脚本标记语言中编写它们，并把它们组合起来，构建出任何的设计。
自从 `3.x` 大版本开始，`Tailwind CSS` 把引擎升级为 `Just in Time(jit)` 。这使得我们能够编写代码的同时，实时生成各种 `CSS`，真正的做到了所写即所得。比如我们能够编写 `pt-[19.5px]`, `text-[#123456]` ，`bg-[url('/img/hero-pattern.svg')]` 这样的语义化的类名，它们生成的 `CSS` 结果一目了然。
所以，熟悉 `Tailwind CSS` 之后，可以大幅度的加快我们应用的开发速度，提升代码的可维护性，接下来让我们看看如何在 `tarojs` 应用中使用它吧。
## 1. 安装与配置 tailwindcss[​](tailwindcss.html#1-安装与配置-tailwindcss)
首先我们要把 `tailwindcss` 安装和配置好。这里我们参考 `tailwindcss` 官网中，`postcss` 的使用方式进行安装 ([参考链接](https://tailwindcss.com/docs/installation/using-postcss))：
### 1. 使用包管理器安装 `tailwindcss`[​](tailwindcss.html#1-使用包管理器安装-tailwindcss)

- npm
- yarn
- pnpm
```bash
npm i -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
bash
yarn add -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
bash
pnpm i -D tailwindcss postcss autoprefixer
# 初始化 tailwind.config.js 文件
npx tailwindcss init
```
信息
`tailwindcss` 最新版本(`3.x`)对应的 `postcss` 大版本为 `8`，其中 `tarojs` 里已经内置了 `postcss` 和 `autoprefixer` 了。
### 2. 创建 `postcss.config.js` 并注册 `tailwindcss`[​](tailwindcss.html#2-创建-postcssconfigjs-并注册-tailwindcss)
postcss.config.js
```js
// postcss 插件以 object 方式注册的话，是按照由上到下的顺序执行的
module.exports = {
 plugins: {
 tailwindcss: {},
 autoprefixer: {},
 },
}
```

### 3. 配置 `tailwind.config.js`[​](tailwindcss.html#3-配置-tailwindconfigjs)
`tailwind.config.js` 是 `tailwindcss` 的配置文件，我们可以在里面配置 `tailwindcss` 的各种行为。[全量配置项](https://tailwindcss.com/docs/configuration)
tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
 // 这里给出了一份 taro 通用示例，具体要根据你自己项目的目录结构进行配置
 // 比如你使用 vue3 项目，你就需要把 vue 这个格式也包括进来
 // 不在 content glob 表达式中包括的文件，在里面编写 tailwindcss class，是不会生成对应的 css 工具类的
 content: ['./public/index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
 // 其他配置项 ...
 corePlugins: {
 // 小程序不需要 preflight，因为这主要是给 h5 的，如果你要同时开发多端，你应该使用 process.env.TARO_ENV 环境变量来控制它
 preflight: false,
 },
}
```

### 4. 引入 `tailwindcss`[​](tailwindcss.html#4-引入-tailwindcss)
在你的项目入口文件里引入 `tailwindcss`，比如 `taro app` 的 `app.scss`
app.scss
```scss
@use 'tailwindcss/base' as *;
@use 'tailwindcss/components' as *;
@use 'tailwindcss/utilities' as *;
// 不使用 sass 就这么写
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
```

然后在 `app.ts` 里，引入这个样式文件即可。
这样 `tailwindcss` 的安装与配置就完成了，接下来让我们进入第二个环节：安装和配置 `weapp-tailwindcss`。
## 2. 安装和配置 `weapp-tailwindcss`[​](tailwindcss.html#2-安装和配置-weapp-tailwindcss)
什么是 `weapp-tailwindcss` ? 它是一个让你在小程序环境中，使用 `tailwindcss` 大部分特性的一个 `webpack`, `vite`, `gulp`, `postcss` 插件集合。它支持目前上几乎所有主流的多端小程序框架和使用 `webpack` / `gulp` 的原生小程序开发打包方式。
`weapp-tailwindcss` 使得你很容易在各个框架，或原生开发中集成 `tailwindcss`。
执行下列命令安装插件:

- npm
- yarn
- pnpm
```bash
npm i -D weapp-tailwindcss
bash
yarn add -D weapp-tailwindcss
bash
pnpm i -D weapp-tailwindcss
```

然后把下列脚本，添加进你的 `package.json` 的 `scripts` 字段里:
package.json
```diff
"scripts": {
+ "postinstall": "weapp-tw patch"
}
```

添加这段脚本的用途是，每次安装包后，都会自动执行一遍 `weapp-tw patch` 这个脚本，给本地的 `tailwindcss` 打上小程序支持补丁。
### 配置你的 `tarojs` 应用[​](tailwindcss.html#配置你的-tarojs-应用)
> 这个配置同时支持
`> tarojs
`> 的
`> react
`> /
`> preact
`> /
`> vue2
`> /
`> vue3
`> 等等所有框架

在项目的配置文件 `config/index.js` 中注册:
config/index.js
```js
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack')
// 文件是 ts 则为
// import { UnifiedWebpackPluginV5 } from 'weapp-tailwindcss/webpack'
{
 // 找到 mini 这个小程序配置
 mini: {
 webpackChain(chain, webpack) {
 chain.merge({
 plugin: {
 install: {
 plugin: UnifiedWebpackPluginV5,
 args: [{
 appType: 'taro',
 // 下面个配置，会开启 rem -> rpx 的转化
 rem2rpx: true
 }]
 }
 }
 })
 }
 }
}
```

`rem2rpx` 这个配置项，是用来开启 `CSS``rem` -> `rpx` 单位的转化的，可以不传值来关闭这个转化行为。
传 `true` 时，`1rem` 转化为 `32rpx`。可通过传入配置进行修改，详见 [rem 转 rpx (或 px)](https://weapp-tw.icebreaker.top/docs/quick-start/rem2rpx)
提示
**在使用 Taro 时，需要把 `config/index` 的配置项中的 `compiler` 设置为插件对应的版本 **
如果使用 `webpack4` 则使用从 `weapp-tailwindcss/webpack4` 导出的 `UnifiedWebpackPluginV4`
如果使用 `webpack5` 则使用从 `weapp-tailwindcss/webpack` 导出的 `UnifiedWebpackPluginV5`
另外假如你使用了 [`taro-plugin-compiler-optimization`](https://www.npmjs.com/package/taro-plugin-compiler-optimization) 记得把它去除。因为和它一起使用时，它会使整个打包结果变得混乱。详见 [issues/123](https://github.com/sonofmagic/weapp-tailwindcss/issues/123)[issues/131](https://github.com/sonofmagic/weapp-tailwindcss/issues/131)
## 大功告成[​](tailwindcss.html#大功告成)
现在我们尝试写下`tsx`模板:
```tsx
<View className="text-[#acc855] text-[100px]">Hello world!</View>
```

然后执行 `npm run dev:weapp` 开启我们的 `Tailwind CSS` 之旅吧！
提示
如果配置不成功，可以参考配置好的模板项目 [taro-react-tailwind-vscode-template](https://github.com/sonofmagic/taro-react-tailwind-vscode-template) 进行排错。
## 和 NutUI 一起使用[​](tailwindcss.html#和-nutui-一起使用)
`tarojs` 使用 [NutUI](https://nutui.jd.com) 的注意点:
[NutUI](https://nutui.jd.com) 需要配合 `@tarojs/plugin-html` 一起使用，
然而在和 `@tarojs/plugin-html` 一起使用时，默认配置下它会移除整个 `tailwindcss` 注入的 `css var` 区域块，这会造成所有 `tw-*` 相关`CSS`变量找不到，导致样式大量挂掉的问题。
此时可以给插件传入 [`injectAdditionalCssVarScope`](https://weapp-tw.icebreaker.top/docs/api/interfaces/UserDefinedOptions#injectadditionalcssvarscope) 配置项，把它设为 `true`，这能让插件在 `CSS` 里重新注入 `tailwindcss css var` 区域块。
相关的 [taro 官方文档](use-h5.html#%E6%8F%92%E4%BB%B6-postcss-%E9%85%8D%E7%BD%AE%E9%A1%B9), 讨论详情见 [issues/155](https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/issues/155)
## 参考项目和文档链接[​](tailwindcss.html#参考项目和文档链接)
想了解更多场景和常见问题，可以参考下列链接:
`weapp-tailwindcss`[[官网](https://weapp-tw.icebreaker.top/)][[Github](https://github.com/sonofmagic/weapp-tailwindcss)]
`tailwindcss`[[官网](https://tailwindcss.com/)][[Github](https://github.com/tailwindlabs/tailwindcss)]

- 

- [``](tailwindcss.html#1-使用包管理器安装-tailwindcss)
- [````](tailwindcss.html#2-创建-postcssconfigjs-并注册-tailwindcss)
- [``](tailwindcss.html#3-配置-tailwindconfigjs)
- [``](tailwindcss.html#4-引入-tailwindcss)

- [``](tailwindcss.html#2-安装和配置-weapp-tailwindcss)

- [``](tailwindcss.html#配置你的-tarojs-应用)

- 
- 
-
