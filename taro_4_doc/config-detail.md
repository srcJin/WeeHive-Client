# ## sourceRoot[​](config-detail.html#sourceroot)
`string`
默认值：`'src'`
源码存放目录。
## outputRoot[​](config-detail.html#outputroot)
`string`
默认值：`'dist'`
代码编译后的生产目录。
## designWidth[​](config-detail.html#designwidth)
信息
Taro v3.4.13 开始支持传入**函数**，[#11073](https://github.com/NervJS/taro/pull/11073)
`number | function`
默认值：`750`
设计稿尺寸，详情请见[设计稿及尺寸单位](size.html)。
当传入函数时，参数是当前样式文件的绝对路径，开发者可以根据不同的文件路径返回对应的 `designWidth`，例子：
config/index.js
```js
config = {
 designWidth(input) {
 if (input?.file.replace(/\\+/g, '/').indexOf('@nutui/nutui-taro') > -1) {
 return 375
 }
 return 750
 },
}
```

## defineConstants[​](config-detail.html#defineconstants)
`object`
用于配置一些全局变量供业务代码中进行使用。
配置方式可参考 [Webpack DefinePlugin](https://webpack.js.org/plugins/define-plugin/)，例如：
/config/index.js
```js
module.exports = {
 // ...
 defineConstants: {
 A: '"a"', // JSON.stringify('a')
 },
}
```

## alias[​](config-detail.html#alias)
`object`
用于配置目录别名，从而方便书写代码引用路径。
例如，使用相对路径书写文件引用如下：
```js
import A from '../../components/A'
import Utils from '../../utils'
import packageJson from '../../package.json'
import projectConfig from '../../project.config.json'
```

为了避免书写多级相对路径，我们可以如下配置 `alias`：
```js
module.exports = {
 // ...
 alias: {
 '@/components': path.resolve(__dirname, '..', 'src/components'),
 '@/utils': path.resolve(__dirname, '..', 'src/utils'),
 '@/package': path.resolve(__dirname, '..', 'package.json'),
 '@/project': path.resolve(__dirname, '..', 'project.config.json'),
 },
}
```

通过上述配置，可以将 `src/components` 和 `src/utils` 目录配置成别名，将根目录下的 `package.json` 和 `project.config.json` 文件配置成别名，则代码中的引用改写如下：
```js
import A from '@/components/A'
import Utils from '@/utils'
import packageJson from '@/package'
import projectConfig from '@/project'
```

为了让编辑器（VS Code）不报错，并继续使用自动路径补全的功能，需要在项目根目录下的 `jsconfig.json` 或者 `tsconfig.json` 中配置 `paths` 让编辑器认得我们的别名，形式如下：
```json
{
 "compilerOptions": {
 "baseUrl": ".",
 "paths": {
 "@/components/*": ["./src/components/*"],
 "@/utils/*": ["./src/utils/*"],
 "@/package": ["./package.json"],
 "@/project": ["./project.config.json"]
 }
 }
}
```

> 建议别名使用
`> @/
`> 开头而非仅用
`> @
`> 开头，因为有小概率会与某些
`> scoped
`> 形式的
`> npm
`> 包（形如：
[> @tarojs/taro
](https://npm.im/@tarojs/taro)> ,
[> @babel/core
](https://npm.im/@babel/core)> ）产生命名冲突。

## env[​](config-detail.html#env)
`object`
用于设置环境变量，如 `process.env.NODE_ENV`。
假设我们需要区分开发环境和生产环境，可以如下配置：
**config/dev.js**：
/config/dev.js
```jsx
module.exports = {
 // ...
 env: {
 NODE_ENV: '"development"', // JSON.stringify('development')
 },
}
```

**config/prod.js**：
config/prod.js
```jsx
module.exports = {
 // ...
 env: {
 NODE_ENV: '"production"', // JSON.stringify('production')
 },
}
```

这样就能在业务代码中通过 `process.env.NODE_ENV === 'development'` 来判断环境。
注意
这里的配置的环境变量只能在 `业务代码` 中使用，无法在 `node环境` 代码中获取到其配置的值， 也不会改变 `node环境` 中 `process.env.NODE_ENV` 的值。 配置环境变量更推荐使用 [模式和环境变量](env-mode-config.html)
## copy[​](config-detail.html#copy)
`object`
用于把文件从源码目录直接拷贝到编译后的生产目录。
### copy.patterns[​](config-detail.html#copypatterns)
`array`
用于指定需要拷贝的文件或者目录，每一项都必须包含 `from` 、`to` 配置，分别代表来源和需要拷贝到的目录。同时可以设置 `ignore` 配置来指定需要忽略的文件， `ignore` 是指定的 [glob](https://github.com/isaacs/node-glob) 类型字符串，或者 glob 字符串数组。
> 注意，
`> from
`> 必须指定存在的文件或者目录，暂不支持 glob 格式。
`> from
`> 和
`> to
`> 直接置顶项目根目录下的文件目录，建议
`> from
`> 以
`> src
`> 目录开头，
`> to
`> 以
`> dist
`> 目录开头。

一般有如下的使用形式：
```js
module.exports = {
 // ...
 copy: {
 patterns: [
 { from: 'src/asset/tt/', to: 'dist/asset/tt/', ignore: ['*.js'] }, // 指定需要 copy 的目录
 { from: 'src/asset/tt/sd.jpg', to: 'dist/asset/tt/sd.jpg' }, // 指定需要 copy 的文件
 ],
 },
}
```

### copy.options[​](config-detail.html#copyoptions)
`object`
拷贝配置，可以指定全局的 ignore：
```js
module.exports = {
 // ...
 copy: {
 options: {
 ignore: ['*.js', '*.css'], // 全局的 ignore
 },
 },
}
```

## plugins[​](config-detail.html#plugins)
`array`
配置 Taro 插件。
当不需要传入参数给插件时，以下写法等价：
```js
module.exports = {
 // ...
 plugins: [
 // 从本地绝对路径引入插件
 '/absulute/path/plugin/filename',
 // 引入 npm 安装的插件
 '@tarojs/plugin-mock',
 ['@tarojs/plugin-mock'],
 ['@tarojs/plugin-mock', {}],
 ],
}
```

给插件传参：
```js
module.exports = {
 // ...
 plugins: [
 // 引入 npm 安装的插件，并传入插件参数
 [
 '@tarojs/plugin-mock',
 {
 mocks: {
 '/api/user/1': {
 name: 'judy',
 desc: 'Mental guy',
 },
 },
 },
 ],
 ],
}
```

## presets[​](config-detail.html#presets)
`array`
一个 preset 是一系列 Taro 插件的集合，配置语法同 [plugins](config-detail.html#plugins)。
```js
module.exports = {
 // ...
 presets: [
 // 引入 npm 安装的插件集
 '@tarojs/preset-sth',
 // 引入 npm 安装的插件集，并传入插件参数
 [
 '@tarojs/plugin-sth',
 {
 arg0: 'xxx',
 },
 ],
 // 从本地绝对路径引入插件集，同样如果需要传入参数也是如上
 '/absulute/path/preset/filename',
 ],
}
```

## jsMinimizer[​](config-detail.html#jsminimizer)
信息
Taro v3.5 开始支持。
`terser | esbuild`
默认值 `terser`
配置 JS 压缩工具。
## terser[​](config-detail.html#terser)
`object`
配置 [terser](https://github.com/terser/terser) 工具以压缩 JS 代码。
### terser.enable[​](config-detail.html#terserenable)
`boolean`
默认值 `true`
是否开启 JS 代码压缩。
### terser.config[​](config-detail.html#terserconfig)
`object`
terser 的具体配置。
```js
module.exports = {
 // ...
 terser: {
 enable: true,
 config: {
 // 配置项同 https://github.com/terser/terser#minify-options
 },
 },
}
```

> terser 配置只在
**> 生产模式
**> 下生效。如果你正在使用
**> watch
**> 模式，又希望启用 terser，那么则需要设置
`> process.env.NODE_ENV
`> 为
`> 'production'
`> 。

## esbuild[​](config-detail.html#esbuild)
信息
Taro v3.5 开始支持。
`object`
### esbuild.minify[​](config-detail.html#esbuildminify)
`object`
当 `jsMinimizer` 为 `esbuild` 时适用。配置 [esbuild MinifyPlugin](https://github.com/privatenumber/esbuild-loader#js-minification-eg-terser) 工具以压缩 JS 代码。
### esbuild.minify.enable[​](config-detail.html#esbuildminifyenable)
`boolean`
默认值 `true`
是否开启 JS 代码压缩。
### esbuild.minify.config[​](config-detail.html#esbuildminifyconfig)
`object`
esbuild MnifyPlugin 的具体配置。
```js
module.exports = {
 // ...
 esbuild: {
 minify: {
 enable: true,
 config: {
 // 配置项同 https://github.com/privatenumber/esbuild-loader#minifyplugin
 target: 'es5', // target 默认值为 es5
 },
 },
 },
}
```

> esbuild 配置只在
**> 生产模式
**> 下生效。如果你正在使用
**> watch
**> 模式，又希望启用 esbuild，那么则需要设置
`> process.env.NODE_ENV
`> 为
`> 'production'
`> 。

## cssMinimizer[​](config-detail.html#cssminimizer)
信息
Taro v3.5 开始支持。
`csso | esbuild | parcelCss`
默认值 `csso`
配置 CSS 压缩工具。
使用 [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin) 实现，Taro 内部会根据不同配置值选用不同的压缩工具。建议开发者根据项目实际环境进行选择，可参考 [CSS Minification Benchmark](https://goalsmashers.github.io/css-minification-benchmark)。
## csso[​](config-detail.html#csso)
`object`
配置 [csso](https://github.com/css/csso) 工具以压缩 CSS 代码。
### csso.enable[​](config-detail.html#cssoenable)
`boolean`
默认值 `true`
是否开启 CSS 代码压缩。
### csso.config[​](config-detail.html#cssoconfig)
`object`
csso 的具体配置。
```js
module.exports = {
 // ...
 csso: {
 enable: true,
 config: {
 // 配置项同 https://cssnano.co/docs/what-are-optimisations/
 },
 },
}
```

> csso 配置只在
**> 生产模式
**> 下生效。如果你正在使用
**> watch
**> 模式，又希望启用 csso，那么则需要设置
`> process.env.NODE_ENV
`> 为
`> 'production'
`> 。

## sass[​](config-detail.html#sass)
`object`
用于控制对 scss 代码的编译行为，默认使用 `dart-sass`，具体配置可以参考 [sass](https://www.npmjs.com/package/sass)。
当需要往所有 scss 文件头部插入 scss 代码时，可以通过以下三个额外参数设置：
### sass.resource[​](config-detail.html#sassresource)
`string | array`
需要全局注入的 scss 文件的绝对路径。如果要引入多个文件，支持以数组形式传入。
当存在 [projectDirectory](config-detail.html#sassprojectdirectory) 配置时，才支持传入相对路径。
### sass.projectDirectory[​](config-detail.html#sassprojectdirectory)
`string`
项目根目录的绝对地址(若为小程序云开发模板，则应该是 client 目录)。
### sass.data[​](config-detail.html#sassdata)
`string`
全局 scss 变量，若 data 与 resource 中设置了同样的变量，则 data 的优先级高于 resource。
### 全局注入 scss 的例子[​](config-detail.html#全局注入-scss-的例子)
#### 单文件路径形式[​](config-detail.html#单文件路径形式)
当只有 `resource` 字段时，可以传入 scss 文件的绝对路径。
```js
module.exports = {
 // ...
 sass: {
 resource: path.resolve(__dirname, '..', 'src/styles/variable.scss'),
 },
}
```

#### 多文件路径形式[​](config-detail.html#多文件路径形式)
此外，当只有 `resource` 字段时，也可以传入一个路径数组。
```js
module.exports = {
 // ...
 sass: {
 resource: [
 path.resolve(__dirname, '..', 'src/styles/variable.scss'),
 path.resolve(__dirname, '..', 'src/styles/mixins.scss'),
 ],
 },
}
```

#### 指定项目根目录路径形式[​](config-detail.html#指定项目根目录路径形式)
你可以额外配置 `projectDirectory` 字段，这样你就可以在 `resource` 里写相对路径了。
```js
module.exports = {
 // ...
 sass: {
 resource: ['src/styles/variable.scss', 'src/styles/mixins.scss'],
 projectDirectory: path.resolve(__dirname, '..'),
 },
}
```

#### 传入 scss 变量字符串[​](config-detail.html#传入-scss-变量字符串)
data 中声明的 $nav-height 变量优先级最高。
```js
module.exports = {
 // ...
 sass: {
 resource: ['src/styles/variable.scss', 'src/styles/mixins.scss'],
 projectDirectory: path.resolve(__dirname, '..'),
 data: '$nav-height: 48px;',
 },
}
```

## framework[​](config-detail.html#framework)
`string`
使用的开发框架。可选值：`react`、`preact`、`nerv`、`vue`、`vue3`。
## compiler[​](config-detail.html#compiler)
信息
Taro v3.5 开始支持。
Taro v4.0.0 开始支持 `vite` 值。
`string | object`
默认值：`'webpack4'`
使用的编译工具。可选值：`webpack4`、`webpack5`、`vite`。
取值也可以是对象，此时可以对针对特定的编译器作额外的配置：
### compiler.type[​](config-detail.html#compilertype)
`string`
使用的编译工具。可选值：`webpack4`、`webpack5`、`vite`。
### compiler.errorLevel[​](config-detail.html#compilererrorlevel)
`number`
编译过程中的错误处理级别定义。默认为 0，表示发生严重编译错误时进程会退出。
webpack 编译过程中的错误类型主要如下两类：1、致命的 wepback 错误（配置出错等）2、编译错误（缺失的 module，语法错误等）
0：表示发生“1、致命的 webpack 错误（配置出错等）”情况时，返回非 0 的退出码结束进程。 1：表示发生“1、致命的 wepback 错误（配置出错等）2、编译错误（缺失的 module，语法错误等）”情况时，返回非 0 的退出码结束进程。
### compiler.prebundle[​](config-detail.html#compilerprebundle)
`object`
> 只有 Webpack5 支持

是否开启依赖预编译功能。开启后首次编译 Taro 会把项目的 `node_modules` 依赖打包为模块联邦的 Remote 应用，二次编译时 Webpack 只需要编译项目源码，从而提升编译速度。
#### compiler.prebundle.enable[​](config-detail.html#compilerprebundleenable)
`boolean`
默认值：生产环境为 `false`，开发环境为 `true`
是否开启依赖预编译。因为使用了 esbuild 单独打包依赖，会使项目体积略微变大，所以生产模式下不建议开启。
#### compiler.prebundle.cacheDir[​](config-detail.html#compilerprebundlecachedir)
`string`
默认值：`[项目路径]/node_modules/.taro`
缓存目录的绝对路径。开发者可以自定义缓存目录的路径，并把该目录提交到 git，这样能提高多人协作时的编译速度。
#### compiler.prebundle.force[​](config-detail.html#compilerprebundleforce)
`boolean`
默认值：`false`
是否强行弃用缓存。
#### compiler.prebundle.timings[​](config-detail.html#compilerprebundletimings)
`boolean`
默认值：`false`
是否显示依赖预编译的测速信息。
#### compiler.prebundle.esbuild[​](config-detail.html#compilerprebundleesbuild)
`object`
自定义 [esbuild](https://esbuild.github.io/api/#build-api) 配置。
#### compiler.prebundle.swc[​](config-detail.html#compilerprebundleswc)
`object`
自定义 [swc](https://swc.rs/docs/usage/core#options) 配置。
#### compiler.prebundle.webpack[​](config-detail.html#compilerprebundlewebpack)
`object`
自定义 [webpack](https://webpack.js.org/configuration/#options) 配置。
##### compiler.prebundle.webpack.provide[​](config-detail.html#compilerprebundlewebpackprovide)
提供 `@tarojs/runtime` 替换小程序运行时关联 API（BOM、DOM），使用可参考[代码](https://github.com/NervJS/taro/blob/next/packages/taro-plugin-vue-devtools/src/index.ts#L75)。
#### compiler.prebundle.include[​](config-detail.html#compilerprebundleinclude)
`string array`
默认值：[]
需要额外执行预编译的依赖。
#### compiler.prebundle.exclude[​](config-detail.html#compilerprebundleexclude)
`string array`
默认值：[]
不需要执行预编译的依赖。
### compiler.vitePlugins[​](config-detail.html#compilerviteplugins)
> 只有 vite 支持

`array`
vite 插件
## cache[​](config-detail.html#cache)
信息
Taro v3.5 开始支持。
Webpack5 持久化缓存配置。具体配置请参考 [WebpackConfig.cache](https://webpack.js.org/configuration/cache/#cache)。
Taro 遵循 Webpack **“构建安全比构建速度重要”**的理念，默认不开启持久化缓存功能。但当开发者能处理好缓存策略时，强烈建议开启缓存，这能大大提高二次编译速度。
除了 [cache.buildDependencies](config-detail.html#cachebuilddependencies)、[cache.name](config-detail.html#cachename) 具有默认值外，开发者的其它 cache 配置将会合并进 `WebpackConfig.cache`。
### cache.enable[​](config-detail.html#cacheenable)
`boolean`
默认值 `false`
是否开启持久化缓存。
值为 `false` 时：开发模式下 `WebpackConfig.cache.type = 'memory'`，而生产模式下 `WebpackConfig.cache = false`。
值为 `true` 时：开发模式和生产模式下均为 `WebpackConfig.cache.type = 'filesystem'`。
### cache.buildDependencies[​](config-detail.html#cachebuilddependencies)
默认值
```js
webpackConfig = {
 cache: {
 buildDependencies: {
 config: [path.join(appPath, 'config/index.js')],
 },
 },
}
```

当依赖的文件或该文件的依赖改变时，使缓存失效。详情请参考 [WebpackConfig.cache.buildDependencies](https://webpack.js.org/configuration/cache/#cachebuilddependencies)。
### cache.name[​](config-detail.html#cachename)
`string`
默认值 `process.env.NODE_ENV-process.env.TARO_ENV`。
缓存子目录的名称。详情请参考 [WebpackConfig.cache.name](https://webpack.js.org/configuration/cache/#cachename)。
## logger[​](config-detail.html#logger)
信息
Taro v3.5 开始支持。目前只在 Webpack5 compiler 中支持。
控制 Taro 编译日志的输出方式。
### quiet[​](config-detail.html#quiet)
`boolean`
默认值 `true`。
是否简化输出日志。
### stats[​](config-detail.html#stats)
`boolean`
默认值 `false`。
是否输出 Webpack Stats 信息。
## mini[​](config-detail.html#mini)
`object`
专属于小程序的配置。
### mini.baseLevel[​](config-detail.html#minibaselevel)
`number`
默认值：`16`
对于 `template` 模板不支持递归的小程序（如：微信、QQ、京东），Taro 会对所有模板**循环 baseLevel 次**，以支持同类模板的循环调用。
但是循环太多次也会导致生成的 `base` 模板体积相当大，因此当你的嵌套层级并不太深时可以使用 `baseLevel` 配置项配置较少的循环层数。
当然在嵌套层级较深时，也可以增大 baseLevel。以避免到达循环上限后，Taro 会调用一个自定义组件重新开始循环所带来一些问题。
### mini.compile[​](config-detail.html#minicompile)
`object`
小程序编译过程的相关配置。
#### mini.compile.exclude[​](config-detail.html#minicompileexclude)
`array`
配置小程序编译过程中**排除不需要经过 Taro 编译的文件**，数组里面可以包含具体文件路径，也可以是判断函数，同 [Rule.exclude](https://webpack.js.org/configuration/module/#ruleexclude)。
假设要排除某个文件，可以配置要排除的文件的具体路径：
```js
module.exports = {
 // ...
 mini: {
 // ...
 compile: {
 exclude: [path.resolve(__dirname, '..', 'src/pages/index/vod-wx-sdk-v2.js')],
 },
 },
}
```

也可以配置判断函数：
```js
module.exports = {
 // ...
 mini: {
 // ...
 compile: {
 exclude: [(modulePath) => modulePath.indexOf('vod-wx-sdk-v2') >= 0],
 },
 },
}
```

#### mini.compile.include[​](config-detail.html#minicompileinclude)
`array`
配置额外**需要经过 Taro 编译的文件**，使用方式与 [mini.compile.exclude](config-detail.html#minicompileexclude) 一致，同 [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude)。例如 Taro 默认不编译 `node_modules` 中的文件，可以通过这个配置让 Taro 编译 `node_modules` 中的文件。
默认值包括 Taro 项目源码目录 src 以及 Taro 相关的 node_modules。如需将 Taro 项目作为 monorepo 项目的子包，则要自行配置 include 以编译其他子包的文件，示例：
config/index.js
```js
export default {
 // ...
 mini: {
 // ...
 compile: {
 include: [path.resolve(__dirname, '../../package')],
 },
 },
 h5: {
 // ...
 compile: {
 include: [path.resolve(__dirname, '../../package')],
 },
 },
}
```

### mini.webpackChain[​](config-detail.html#miniwebpackchain)
`function`
自定义 Webpack 配置。
这个函数会收到**三个参数**。第一个参数是 webpackChain 对象，可参考 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 的 API 进行修改，第二个参数是 `webpack` 实例，第三个参数 `PARSE_AST_TYPE` 是小程序编译时的文件类型集合。
第三个参数的取值如下：
```typescript
export enum PARSE_AST_TYPE {
 ENTRY = 'ENTRY',
 PAGE = 'PAGE',
 COMPONENT = 'COMPONENT',
 NORMAL = 'NORMAL',
 STATIC = 'STATIC',
}
```

**例子：**
```js
// 这是一个添加 raw-loader 的例子，用于在项目中直接引用 md 文件
module.exports = {
 // ...
 mini: {
 // ...
 webpackChain(chain, webpack) {
 chain.merge({
 module: {
 rule: {
 myloader: {
 test: /\.md$/,
 use: [
 {
 loader: 'raw-loader',
 options: {},
 },
 ],
 },
 },
 },
 })
 },
 },
}
js
// 这是一个添加插件的例子
module.exports = {
 // ...
 mini: {
 // ...
 webpackChain(chain, webpack) {
 chain.merge({
 plugin: {
 install: {
 plugin: require('npm-install-webpack-plugin'),
 args: [
 {
 // Use --save or --save-dev
 dev: false,
 // Install missing peerDependencies
 peerDependencies: true,
 // Reduce amount of console logging
 quiet: false,
 // npm command used inside company
 npm: 'cnpm',
 },
 ],
 },
 },
 })
 },
 },
}
```

### mini.output[​](config-detail.html#minioutput)
`object`
可用于修改、拓展 Webpack 的 **output** 选项，配置项参考[官方文档](https://webpack.js.org/configuration/output/)。
### mini.enableSourceMap[​](config-detail.html#minienablesourcemap)
`boolean`
默认值：watch 模式下为 `true`，否则为 `false`。
用于控制是否生成 js、css 对应的 sourceMap。
### mini.sourceMapType[​](config-detail.html#minisourcemaptype)
`string`
默认值：`'cheap-module-source-map'`
具体配置请参考 [Webpack devtool 配置](https://webpack.js.org/configuration/devtool/#devtool)。
### mini.debugReact[​](config-detail.html#minidebugreact)
信息
Taro v3.0.8 开始支持。
`boolean`
默认值：`false`。
指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码。
### mini.hot[​](config-detail.html#minihot)
信息
Taro v3.4.0 开始支持。
`boolean`
默认值：`false`。
是否注入兼容微信小程序热重载的代码。详情：[#10722](https://github.com/NervJS/taro/issues/10722#issuecomment-992247021)
### mini.minifyXML[​](config-detail.html#miniminifyxml)
信息
Taro v3.0.8 开始支持。
`object`
关于压缩小程序 xml 文件的相关配置。
#### mini.minifyXML.collapseWhitespace[​](config-detail.html#miniminifyxmlcollapsewhitespace)
`boolean`
默认值：`false`。
是否合并 xml 文件中的空格。
### mini.postcss[​](config-detail.html#minipostcss)
`object`
配置 `postcss` 相关插件。
```js
module.exports = {
 // ...
 mini: {
 // ...
 postcss: {
 // 可以进行 autoprefixer 的配置。配置项参考官方文档 https://github.com/postcss/autoprefixer
 autoprefixer: {
 enable: true,
 config: {
 // autoprefixer 配置项
 },
 },
 pxtransform: {
 enable: true,
 config: {
 // pxtransform 配置项，参考尺寸章节
 selectorBlackList: ['body'],
 },
 },
 // 小程序端样式引用本地资源内联 该属性在 v4.0.0 版本已废弃，小程序端默认全部转换
 // url: {
 // enable: true,
 // config: {
 // maxSize: 10, // 设定转换尺寸上限（单位：kbytes）
 // },
 // },
 // css modules 功能开关与相关配置
 cssModules: {
 enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
 config: {
 generateScopedName: '[name]__[local]___[hash:base64:5]',
 },
 },
 },
 },
}
```

#### mini.postcss.htmltransform[​](config-detail.html#minipostcsshtmltransform)
`object`
可以进行 `htmltransform` 的配置。例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 postcss: {
 htmltransform: {
 enable: false, // 小程序默认关闭该配置
 config: {
 removeCursorStyle: true, // 默认为 true
 },
 },
 },
 },
}
```

#### mini.postcss.url[​](config-detail.html#minipostcssurl)
`object`
可以进行 `url` 的配置，默认是 `inline` 配置（config 配置可参考 [postcss-url](https://www.npmjs.com/package/postcss-url)）。例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 postcss: {
 url: {
 enable: true,
 config: {
 maxSize: 10, // 设定转换尺寸上限（单位 kbytes）
 },
 },
 },
 },
}
```

### mini.commonChunks[​](config-detail.html#minicommonchunks)
`array | function`
用于告诉 Taro 编译器需要抽取的公共文件，支持两种配置方式。
`commonChunks` 的配置值必须依据于 webpack 配置 [optimization.runtimeChunk](https://webpack.js.org/configuration/optimization/#optimizationruntimechunk) 和 [optimization.splitChunks](https://webpack.js.org/plugins/split-chunks-plugin/) 中的公共 chunks 的名称。Taro 中 webpack.optimization 配置的默认值：[源码位置](https://github.com/NervJS/taro/blob/bc6af68bda2cbc9163fbda36c15878fc96aec8f1/packages/taro-mini-runner/src/webpack/build.conf.ts#L220-L254)。
> 如果有自行拆分公共文件的需求，请先通过
[> webpackChain 配置
](config-detail.html#miniwebpackchain)> 覆盖
`> optimization.runtimeChunk
`> 与
`> optimization.splitChunks
`> 配置。再通过此
`> commonChunks
`> 配置指定公共入口文件。

#### 字符串数组方式[​](config-detail.html#字符串数组方式)
普通编译时的默认值：`['runtime', 'vendors', 'taro', 'common']`
编译为微信小程序插件时的默认值： `['plugin/runtime', 'plugin/vendors', 'plugin/taro', 'plugin/common']`
可以传入需要抽取的公共文件的名称数组。
例子：
```js
module.exports = {
 // ...
 mini: {
 // ...
 commonChunks: ['runtime', 'vendors', 'taro', 'common'],
 },
}
```

这几个公共文件分别表示：

- `runtime`: webpack 运行时入口
- `taro`: node_modules 中 Taro 相关依赖
- `vendors`: node_modules 除 Taro 外的公共依赖
- `common`: 项目中业务代码公共逻辑
#### 函数方式[​](config-detail.html#函数方式)
通过对入参的默认公共文件数组进行操作，返回新的数组来进行配置，如下
```js
module.exports = {
 // ...
 mini: {
 // ...
 commonChunks(commonChunks) {
 // commonChunks 的取值即为默认的公共文件名数组
 commonChunks.push('yourCustomCommonChunkName')
 return commonChunks
 },
 },
}
```

### mini.addChunkPages[​](config-detail.html#miniaddchunkpages)
`function`
为某些页面单独指定需要引用的公共文件。
例如在使用小程序分包的时候，为了减少主包大小，分包的页面希望引入自己的公共文件，而不希望直接放在主包内。那么我们首先可以通过 [webpackChain 配置](config-detail.html#miniwebpackchain) 来单独抽离分包的公共文件，然后通过 `mini.addChunkPages` 为分包页面配置引入分包的公共文件，其使用方式如下：
`mini.addChunkPages` 配置为一个函数，接受两个参数

- `pages` 参数为 Map 类型，用于为页面添加公共文件
- `pagesNames` 参数为当前应用的所有页面标识列表，可以通过打印的方式进行查看页面的标识
例如，为 `pages/index/index` 页面添加 `eating` 和 `morning` 两个抽离的公共文件：
```ts
module.exports = {
 // ...
 mini: {
 // ...
 addChunkPages(pages: Map<string, string[]>, pagesNames: string[]) {
 pages.set('pages/index/index', ['eating', 'morning'])
 },
 },
}
```

### mini.optimizeMainPackage[​](config-detail.html#minioptimizemainpackage)
`object`
优化主包的体积大小
像下面这样简单配置之后，可以避免主包没有引入的 module 不被提取到`commonChunks`中，该功能会在打包时分析 module 和 chunk 的依赖关系，筛选出主包没有引用到的 module 把它提取到分包内，下面是提取的两种类型的`分包公共模块`：

`分包根目录/sub-vendors.(js|wxss)`

- 如果该 module 只被`单个分包`内的多个 page 引用，则提取到该分包根目录的 sub-vendors 文件中。

`分包根目录/sub-common/*.(js|wxss)`

- 如果该 module 被`多个分包`内的 page 引用，正常情况下会被提取到主包的公共模块中，这里为了保证主包的体积最优，则会先提取成一个公共模块，然后分别复制到对应分包的 sub-common 文件夹下（因为小程序无法跨分包引入文件，所以这里需要每个分包都复制一份），需要注意的是，这样会导致总包的体积变大一些。
```js
module.exports = {
 // ...
 mini: {
 // ...
 optimizeMainPackage: {
 enable: true,
 },
 },
}
```

如果有不想走分包提取规则的 module，可以在 exclude 中配置，这样该 module 就会走原来提取的方案，提取到主包中，比如像下面这样（支持绝对路径和函数）：
```js
module.exports = {
 // ...
 mini: {
 // ...
 optimizeMainPackage: {
 enable: true,
 exclude: [path.resolve(__dirname, 'moduleName.js'), (module) => module.resource.indexOf('moduleName') >= 0],
 },
 },
}
```

### mini.styleLoaderOption[​](config-detail.html#ministyleloaderoption)
`object`
`style-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/style-loader)，例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 styleLoaderOption: {
 insertAt: 'top',
 },
 },
}
```

### mini.cssLoaderOption[​](config-detail.html#minicssloaderoption)
`object`
`css-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/css-loader)，例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 cssLoaderOption: {
 localIdentName: '[hash:base64]',
 },
 },
}
```

### mini.sassLoaderOption[​](config-detail.html#minisassloaderoption)
`object`
`sass-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/sass-loader)，例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 sassLoaderOption: {
 implementation: require('node-sass'),
 },
 },
}
```

### mini.lessLoaderOption[​](config-detail.html#minilessloaderoption)
信息
Taro v3.0.26 开始支持。
`object`
`less-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/less-loader)，例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 lessLoaderOption: {
 lessOptions: {
 strictMath: true,
 noIeCompat: true,
 },
 },
 },
}
```

### mini.stylusLoaderOption[​](config-detail.html#ministylusloaderoption)
`object`
`stylus-loader` 的附加配置。配置项参考[官方文档](https://github.com/shama/stylus-loader)。
### mini.miniCssExtractPluginOption[​](config-detail.html#miniminicssextractpluginoption)
`object`
`mini-css-extract-plugin` 的附加配置，配置项参考[官方文档](https://github.com/webpack-contrib/mini-css-extract-plugin)。
```js
module.exports = {
 // ...
 mini: {
 // ...
 miniCssExtractPluginOption: {
 filename: '[name].css',
 chunkFilename: '[name].css',
 },
 },
}
```

### mini.imageUrlLoaderOption[​](config-detail.html#miniimageurlloaderoption)
`object`
针对 `png | jpg | jpeg | gif | bpm | svg` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)。
### mini.mediaUrlLoaderOption[​](config-detail.html#minimediaurlloaderoption)
`object`
针对 `mp4 | webm | ogg | mp3 | wav | flac | aac` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)，例如：
```js
module.exports = {
 // ...
 mini: {
 // ...
 mediaUrlLoaderOption: {
 limit: 8192,
 },
 },
}
```

### mini.fontUrlLoaderOption[​](config-detail.html#minifonturlloaderoption)
`object`
针对 `woff | woff2 | eot | ttf | otf` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)。
## h5[​](config-detail.html#h5)
专属于 H5 的配置。
### h5.entry[​](config-detail.html#h5entry)
`object`
可用于修改、拓展 Webpack 的 **input** 选项，配置项参考 [官方文档](https://webpack.js.org/configuration/entry-context/#entry)。
```js
module.exports = {
 // ...
 h5: {
 // ...
 entry: {
 home: ['./home.js'],
 about: ['./about.js'],
 contact: ['./contact.js'],
 },
 },
}
```

### h5.output[​](config-detail.html#h5output)
`object`
可用于修改、拓展 Webpack 的 **output** 选项，配置项参考[webpack 官方文档](https://webpack.js.org/configuration/output/)。
vite 编译环境下用于修改、扩展 rollup 的 output，目前仅适配 chunkFileNames 和 assetFileNames 两个配置，修改其他配置请使用 vite 插件进行修改。配置想参考[官方文档](https://rollupjs.org/configuration-options/)
```js
module.exports = {
 // ...
 h5: {
 // ...
 output: {
 filename: 'js/[name].[hash:8].js',
 chunkFilename: 'js/[name].[chunkhash:8].js',
 },
 },
}
```

### h5.publicPath[​](config-detail.html#h5publicpath)
`string`
默认值：`'/'`
设置输出解析文件的目录。
### h5.staticDirectory[​](config-detail.html#h5staticdirectory)
`string`
默认值：`'static'`
h5 编译后的静态文件目录。
### h5.chunkDirectory[​](config-detail.html#h5chunkdirectory)
`string`
默认值：`'chunk'`
编译后非 entry 的 js 文件的存放目录，主要影响动态引入的 `pages` 的存放路径。
### h5.devServer[​](config-detail.html#h5devserver)
`object`
预览服务的配置，可以更改端口等参数。具体配置参考 [webpack-dev-server](https://webpack.js.org/configuration/dev-server)。
例子：
**修改端口：**
```js
module.exports = {
 // ...
 h5: {
 // ...
 devServer: {
 port: 10086,
 },
 },
}
```

**开启 https 服务：**
```js
module.exports = {
 // ...
 h5: {
 // ...
 devServer: {
 https: true,
 },
 },
}
```

### h5.webpackChain[​](config-detail.html#h5webpackchain)
`function`
自定义 Webpack 配置。
这个函数会收到**两个参数**，第一个参数是 webpackChain 对象，可参考 [webpack-chain](https://github.com/neutrinojs/webpack-chain) 的 API 进行修改，第二个参数是 `webpack` 实例。
**例子：**
```js
// 这是一个添加 raw-loader 的例子，用于在项目中直接引用 md 文件
module.exports = {
 // ...
 h5: {
 // ...
 webpackChain(chain, webpack) {
 chain.merge({
 module: {
 rule: {
 myloader: {
 test: /\.md$/,
 use: [
 {
 loader: 'raw-loader',
 options: {},
 },
 ],
 },
 },
 },
 })
 },
 },
}
js
// 这是一个添加插件的例子
module.exports = {
 // ...
 h5: {
 // ...
 webpackChain(chain, webpack) {
 chain.merge({
 plugin: {
 install: {
 plugin: require('npm-install-webpack-plugin'),
 args: [
 {
 // Use --save or --save-dev
 dev: false,
 // Install missing peerDependencies
 peerDependencies: true,
 // Reduce amount of console logging
 quiet: false,
 // npm command used inside company
 npm: 'cnpm',
 },
 ],
 },
 },
 })
 },
 },
}
```

### h5.router[​](config-detail.html#h5router)
`object`
路由相关的配置。
#### h5.router.mode[​](config-detail.html#h5routermode)
`'hash' | 'browser' | 'multi'`
默认值：`'hash'`
配置路由模式。'hash' 与 'browser' 分别对应 hash 路由模式和浏览器 history 路由模式。
**例子：**
```js
module.exports = {
 // ...
 h5: {
 // ...
 router: {
 mode: 'hash', // 或者是 'browser'
 },
 },
}
```

针对上面的配置，调用 `Taro.navigateTo({ url: '/pages/index/index' })` 后，浏览器地址栏将被变为：

- `https://{{domain}}/#/pages/index/index`（**hash** 模式）
- `https://{{domain}}/pages/index/index`（**browser** 模式）
'multi' 对应多页面应用路由模式，需要注意的是很多小程序的组件或 API 都是基于 SPA 设计使用的，在 MPA 模式下并不适用，所以使用该模式可能会导致以下隐患：

- TabBar 会多次加载，且不支持路由动画
- App 生命周期会多次触发（暂未修复），onPageNotFound 事件不支持
- 生产环境需要额外配置路由映射（根目录跳转、404 页面……）
- getCurrentPages 等相关方法不支持
#### h5.router.basename[​](config-detail.html#h5routerbasename)
`string`
配置路由基准路径。
**例子：**
```js
module.exports = {
 // ...
 h5: {
 // ...
 router: {
 basename: '/myapp',
 },
 },
}
```

针对上面的配置，调用 `Taro.navigateTo({ url: '/pages/index/index' })` 后，浏览器地址栏将被变为：

- `https://{{domain}}/#/myapp/pages/index/index`（**hash** 模式）
- `https://{{domain}}/myapp/pages/index/index`（**browser** 模式）
#### h5.router.customRoutes[​](config-detail.html#h5routercustomroutes)
`Record<string, string | string[]>`
配置自定义路由。
**例子：**
```js
module.exports = {
 // ...
 h5: {
 // ...
 router: {
 customRoutes: {
 // "页面路径": "自定义路由"
 '/pages/index/index': '/index',
 '/pages/detail/index': ['/detail'], // 可以通过数组为页面配置多个自定义路由
 },
 },
 },
}
```

针对上面的配置，调用 `Taro.navigateTo({ url: '/pages/index/index' })` 后，浏览器地址栏将被变为：

- `https://{{domain}}/#/index`（**hash** 模式）
- `https://{{domain}}/myapp/index`（**browser** 模式）信息
Taro v3.3.18+ 开始支持传入数组配置自定义路由。
配置自定义路由会导致原路由失效（无法访问，但不影响 API 使用），如果需要启用原路由可以参考如下配置:
```js
customRoutes: {
 '/pages/detail/index': ['/detail', '/pages/detail/index']
}
```

原路由失效会导致开发环境中，首次打开页面错误；如果自定义路由配置为 `'/'` 则会导致跳转错误，可以通过配置 [`entryPagePath`](app-config.html#entrypagepath) 修复该问题，3.5.2+ 版本可忽略该问题。
### h5.enableSourceMap[​](config-detail.html#h5enablesourcemap)
`boolean`
默认值：watch 模式下为 `true`，否则为 `false`。
用于控制是否生成 js、css 对应的 sourceMap。
### h5.sourceMapType[​](config-detail.html#h5sourcemaptype)
`string`
默认值：`'cheap-module-eval-source-map'`
具体配置请参考 [Webpack devtool 配置](https://webpack.js.org/configuration/devtool/#devtool)。
### h5.useHtmlComponents[​](config-detail.html#h5usehtmlcomponents)
信息
Taro v3.2.4 开始支持。
`boolean`
默认值：`false`
用于控制在 H5 端是否使用兼容性组件库，详情请看 [React 兼容性组件库](h5.html#react-%E5%85%BC%E5%AE%B9%E6%80%A7%E7%BB%84%E4%BB%B6%E5%BA%93)。
### h5.useDeprecatedAdapterComponent[​](config-detail.html#h5usedeprecatedadaptercomponent)
信息
Taro v3.6.3 开始支持。
`boolean`
默认值：`false`
用于控制在 H5 端是否使用旧版本适配器，旧版本采用全局注册组件，懒加载组件相关依赖；新版本适配器会自动注册相关组件，不再需要引入 `@tarojs/components/loader` 中的全局 `defineCustomElements` 方法。
### h5.enableExtract[​](config-detail.html#h5enableextract)
`boolean`
默认值：watch 模式下为 `false`，否则为 `true`。
extract 功能开关，开启后将使用 `mini-css-extract-plugin` 分离 css 文件，可通过 [h5.miniCssExtractPluginOption](config-detail.html#h5minicssextractpluginoption) 对插件进行配置。
### h5.esnextModules[​](config-detail.html#h5esnextmodules)
`array`
配置需要额外的经由 Taro 预设的 postcss 编译的模块。
假设需要对 [taro-ui](https://github.com/NervJS/taro-ui) 里的样式单位进行转换适配：
```js
module.exports = {
 // ...
 h5: {
 // ...
 // 经过这一配置之后，代码中引入的处于 `node_modules/taro-ui/` 路径下的样式文件均会经过 postcss 的编译处理。
 esnextModules: ['taro-ui'],
 },
}
```

### h5.postcss[​](config-detail.html#h5postcss)
`object`
配置 `postcss` 相关插件。
#### h5.postcss.autoprefixer[​](config-detail.html#h5postcssautoprefixer)
`object`
可以进行 `autoprefixer` 的配置。配置项参考[官方文档](https://github.com/postcss/autoprefixer)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 postcss: {
 autoprefixer: {
 enable: true,
 config: {
 /* autoprefixer 配置项 */
 },
 },
 },
 },
}
```

#### h5.postcss.pxtransform[​](config-detail.html#h5postcsspxtransform)
`object`
可以进行 `pxtransform` 的配置。配置项参考[官方文档](https://github.com/Pines-Cheng/postcss-pxtransform/)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 postcss: {
 pxtransform: {
 enable: true,
 config: {
 /* pxtransform 配置项 */
 },
 },
 },
 },
}
```

#### h5.postcss.htmltransform[​](config-detail.html#h5postcsshtmltransform)
`object`
可以进行 `htmltransform` 的配置。例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 postcss: {
 htmltransform: {
 enable: true, // H5 默认开启该配置
 config: {
 removeCursorStyle: false, // 默认为 false
 },
 },
 },
 },
}
```

> 需要 v3.5 以上版本

#### h5.postcss.url[​](config-detail.html#h5postcssurl)
`object`
可以进行 `url` 的配置，默认 `inline` 配置（config 配置可参考 [postcss-url](https://www.npmjs.com/package/postcss-url)）。例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 postcss: {
 url: {
 enable: true,
 config: {
 maxSize: 10, // 设定转换尺寸上限（单位 kbytes）
 },
 },
 },
 },
}
```

#### h5.postcss.cssModules[​](config-detail.html#h5postcsscssmodules)
`object`
可以进行 CSS Modules 配置，配置如下：
```js
module.exports = {
 // ...
 h5: {
 // ...
 postcss: {
 // css modules 功能开关与相关配置
 cssModules: {
 enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
 config: {
 namingPattern: 'module',
 generateScopedName: '[name]__[local]___[hash:base64:5]',
 },
 },
 },
 },
}
```

### h5.compile[​](config-detail.html#h5compile)
`object`
Web 编译过程的相关配置。
> 需要 v3.6 以上版本

#### h5.compile.exclude[​](config-detail.html#h5compileexclude)
`array`
配置 Web 应用编译过程中**排除不需要经过 Taro 编译的文件**，使用方式与 [mini.compile.exclude](config-detail.html#minicompileexclude) 一致，同 [Rule.exclude](https://webpack.js.org/configuration/module/#ruleexclude)。
#### h5.compile.include[​](config-detail.html#h5compileinclude)
`array`
配置额外**需要经过 Taro 编译的文件**，使用方式与 [mini.compile.exclude](config-detail.html#minicompileexclude) 一致，同 [Rule.include](https://webpack.js.org/configuration/module/#ruleinclude)。例如 Taro 默认不编译 `node_modules` 中的文件，可以通过这个配置让 Taro 编译 `node_modules` 中的文件。
默认值包括 Taro 项目源码目录 src 以及 Taro 相关的 node_modules。如需将 Taro 项目作为 monorepo 项目的子包，则要自行配置 include 以编译其他子包的文件，示例：
config/index.js
```js
export default {
 // ...
 mini: {
 // ...
 compile: {
 include: [path.resolve(__dirname, '../../package')],
 },
 },
 h5: {
 // ...
 compile: {
 include: [path.resolve(__dirname, '../../package')],
 },
 },
}
```

### h5.htmlPluginOption[​](config-detail.html#h5htmlpluginoption)
信息
Taro v3.5 开始支持。
`object`
html-webpack-plugin 的具体配置。
```js
module.exports = {
 // ...
 htmlPluginOption: {
 // 配置项同 https://github.com/jantimon/html-webpack-plugin#options
 },
}
```

### h5.styleLoaderOption[​](config-detail.html#h5styleloaderoption)
`object`
`style-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/style-loader)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 styleLoaderOption: {
 insertAt: 'top',
 },
 },
}
```

### h5.cssLoaderOption[​](config-detail.html#h5cssloaderoption)
`object`
`css-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/css-loader)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 cssLoaderOption: {
 localIdentName: '[hash:base64]',
 },
 },
}
```

### h5.sassLoaderOption[​](config-detail.html#h5sassloaderoption)
`object`
`sass-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/sass-loader)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 sassLoaderOption: {
 implementation: require('node-sass'),
 },
 },
}
```

### h5.lessLoaderOption[​](config-detail.html#h5lessloaderoption)
信息
Taro v3.0.26 开始支持。
`object`
`less-loader` 的附加配置。配置项参考[官方文档](https://github.com/webpack-contrib/less-loader)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 lessLoaderOption: {
 lessOptions: {
 strictMath: true,
 noIeCompat: true,
 },
 },
 },
}
```

### h5.stylusLoaderOption[​](config-detail.html#h5stylusloaderoption)
`object`
`stylus-loader` 的附加配置。配置项参考[官方文档](https://github.com/shama/stylus-loader)。
### h5.miniCssExtractPluginOption[​](config-detail.html#h5minicssextractpluginoption)
`object`
`mini-css-extract-plugin` 的附加配置，在 [h5.enableExtract 配置](config-detail.html#h5enableextract) 为 `true` 的情况下生效。
配置项参考[官方文档](https://github.com/webpack-contrib/mini-css-extract-plugin)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 miniCssExtractPluginOption: {
 filename: 'css/[name].css',
 chunkFilename: 'css/[id].css',
 },
 },
}
```

### h5.imageUrlLoaderOption[​](config-detail.html#h5imageurlloaderoption)
`object`
针对 `png | jpg | jpeg | gif | bpm | svg` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)。
### h5.mediaUrlLoaderOption[​](config-detail.html#h5mediaurlloaderoption)
`object`
针对 `mp4 | webm | ogg | mp3 | wav | flac | aac` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)，例如：
```js
module.exports = {
 // ...
 h5: {
 // ...
 mediaUrlLoaderOption: {
 limit: 8192,
 },
 },
}
```

### h5.fontUrlLoaderOption[​](config-detail.html#h5fonturlloaderoption)
`object`
针对 `woff | woff2 | eot | ttf | otf` 文件的 `url-loader` 配置。配置项参考[官方文档](https://github.com/webpack-contrib/url-loader)。
### h5.legacy[​](config-detail.html#h5legacy)
信息
Taro v4.0.0 开始支持。
`boolean`
默认值 `false`
选择 `vite` 编译器的情况下才会使用到该字段。生成的代码是否要兼容旧版浏览器，值为 true 时，会去读取 package.json 的 browserslist 字段。
## rn[​](config-detail.html#rn)
专属于 RN 的配置。
### rn.appName[​](config-detail.html#rnappname)
`string`
设置 RN bundle 中注册应用的名称
```js
module.exports = {
 // ...
 rn: {
 // ...
 appName: 'TaroDemo',
 },
}
```

### rn.entry[​](config-detail.html#rnentry)
`string`
entry 利用模块查找规则{name}.{platform}.{ext}自动区分平台
```js
module.exports = {
 // ...
 rn: {
 // ...
 entry: 'index.android.tsx',
 },
}
```

### rn.output[​](config-detail.html#rnoutput)
`object`
设置 Metro 打包生成 bundle 的输出路径，默认 dist 目录下
```js
module.exports = {
 // ...
 rn: {
 // ...
 output: {
 iosSourceMapUrl: '', // sourcemap 文件url
 iosSourcemapOutput: '../taro-native-shell/ios/main.map', // sourcemap 文件输出路径
 iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
 androidSourceMapUrl: '',
 androidSourcemapOutput: '../taro-native-shell/android/app/src/main/assets/index.android.map',
 androidSourcemapSourcesRoot: '',
 ios: '../taro-native-shell/ios/main.jsbundle',
 iosAssetsDest: '../taro-native-shell/ios',
 android: '../taro-native-shell/android/app/src/main/assets/index.android.bundle',
 androidAssetsDest: '../taro-native-shell/android/app/src/main/res',
 },
 },
}
```

### rn.postcss[​](config-detail.html#rnpostcss)
`object`
`postcss` 相关配置，其他样式语言预处理后经过此配置。
```js
module.exports = {
 // ...
 rn: {
 // ...
 postcss: {
 // postcss 配置，参考 https://github.com/postcss/postcss#options
 options: {
 /* ... */
 },
 // 默认true，控制是否对 css value 进行 scalePx2dp 转换，pxtransform配置 enable 才生效
 scalable: boolean,
 pxtransform: {
 enable: boolean, // 默认true
 config: {
 /* ... */
 }, // 插件 pxtransform 配置项，参考尺寸章节
 },
 },
 },
}
```

### rn.sass[​](config-detail.html#rnsass)
`object`
`sass` 相关配置。`options` 配置项参考[官方文档](https://github.com/sass/node-sass#options)。
```js
module.exports = {
 // ...
 rn: {
 // ...
 sass: {
 options: {
 /* ... */
 },
 // 加入到脚本注入的每个 sass 文件头部，在 config.sass 之前
 additionalData: '', // {String|Function}
 },
 },
}
```

### rn.less[​](config-detail.html#rnless)
`object`
`less` 相关配置。`options` 配置项参考[官方文档](https://lesscss.org/usage/#less-options)。
```js
module.exports = {
 // ...
 rn: {
 // ...
 less: {
 options: {
 /* ... */
 },
 additionalData: '', // {String|Function}
 },
 },
}
```

### rn.stylus[​](config-detail.html#rnstylus)
`object`
`stylus` 相关配置。`stylus.options` 配置项参考[文档](https://github.com/NervJS/taro/tree/next/packages/taro-rn-style-transformer/README.md#rnstylus)。
```js
module.exports = {
 // ...
 rn: {
 // ...
 stylus: {
 options: {
 /* ... */
 },
 additionalData: '', // {String|Function}
 },
 },
}
```

### rn.resolve[​](config-detail.html#rnresolve)
`object`
`resolve` 处理依赖文件配置。 `resolve.include` 可配置多个 `npm` 包名的数组，将 `npm` 包当作项目文件处理，支持 `node_modules` 平台优先级文件访问和全局样式。
```js
module.exports = {
 rn: {
 resolve: {
 include: ['taro-ui'], // 处理引用 node_modules/taro-ui 的依赖。
 },
 },
}
```

### rn.enableMultipleClassName[​](config-detail.html#rnenablemultipleclassname)
`boolean`
支持多 `className` 转换，以 `classname` 或 `style` 结尾的， 提取前缀， 然后根据前缀，再生成对应的 xxxStyle。如：`barClassName -> barStyle`。默认值 `false`，不开启。
```js
module.exports = {
 rn: {
 enableMultipleClassName: false,
 },
}
```

### rn.enableMergeStyle[​](config-detail.html#rnenablemergestyle)
`boolean`
当标签 `style` 属性值是数组时转换成对象。默认值 `false`，不开启。
```js
module.exports = {
 rn: {
 enableMergeStyle: false, // https://github.com/shinken008/babel-plugin-jsx-attributes-array-to-object#example
 },
}
```

### rn.enableSvgTransform[​](config-detail.html#rnenablesvgtransform)
`boolean`
将 `svg` 文件转换为组件引入。默认值 `false`，不开启。详情：[#10793](https://github.com/NervJS/taro/pull/10793)
```js
module.exports = {
 rn: {
 enableSvgTransform: false,
 },
}
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
