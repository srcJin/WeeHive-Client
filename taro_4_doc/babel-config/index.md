# Taro 项目的 Babel 配置位于根目录的 `babel.config.js` 文件中，里面默认添加了一个 preset：`babel-preset-taro`，它会根据项目的技术栈添加一些常用的 `presets` 和 `plugins`。
babel.config.js
```js
module.exports = {
 presets: [
 [
 'taro',
 {
 /** 配置项 */
 },
 ],
 ],
}
```

开发者可以修改 `babel.config.js`，修改 `babel-preset-taro` 的配置项，或添加自己想要的 `presets` 和 `plugins`。
## babel-preset-taro[​](index.html#babel-preset-taro)
`babel-preset-taro` 会根据当前项目的技术栈，选择性地使用以下的 `presets` 和 `plugins`。
#### 1. 通用[​](index.html#1-通用)
##### presets[​](index.html#presets)

- `@babel/preset-env`
- `@babel/preset-typescript`（TypeScript 环境）
##### plugins[​](index.html#plugins)

- `@babel/plugin-transform-runtime`
- `@babel/plugin-proposal-decorators`
- `@babel/plugin-proposal-class-properties`
- `babel-plugin-dynamic-import-node`（小程序环境）
#### 2. React[​](index.html#2-react)
##### presets[​](index.html#presets-1)

- `@babel/preset-react`
##### plugins[​](index.html#plugins-1)

- `react-refresh/babel`
#### 3. Vue[​](index.html#3-vue)
##### presetes[​](index.html#presetes)

- `@vue/babel-preset-jsx`
#### 4. Vue3[​](index.html#4-vue3)
##### plugins[​](index.html#plugins-2)

- `@vue/babel-plugin-jsx`
以下将详细介绍 `babel-preset-taro` 的配置项。
### reactJsxRuntime[​](index.html#reactjsxruntime)
备注
只在使用 **React** 时生效。
**默认值**：`'automatic'`
`@babel/preset-react` 的 [runtime](https://babeljs.io/docs/en/babel-preset-react#runtime) 配置项。
### ts[​](index.html#ts)
备注
使用 Typescript
### hot[​](index.html#hot)
备注
只在使用 **React** 时生效。
**默认值**：`true`
是否引入 `react-refresh/babel` 来支持使用 [fast-refresh](../h5.html#fast-refresh)。
### vueJsx[​](index.html#vuejsx)
备注
只在使用 **Vue/Vue3** 时生效。
**默认值**：`true`
**类型**：`true` | `false` | `object`
是否使用 `@vue/babel-preset-jsx`（Vue）或 `@vue/babel-plugin-jsx`（Vue3）来支持使用 `jsx`。
当传入一个 `object` 时，等同于设置为 `true`，且该 `object` 将会作为 `@vue/babel-preset-jsx`（Vue）或 `@vue/babel-plugin-jsx`（Vue3）的参数。
### targets[​](index.html#targets)
**默认值**：
```js
{
 ios: '9',
 android: '5'
}
```

`@babel/preset-env` 的 [targets](https://babeljs.io/docs/en/babel-preset-env#targets) 配置项。
### useBuiltIns[​](index.html#usebuiltins)
**默认值**：`false`
**有效值**：`'entry'` | `'usage'` | `false`
#### useBuiltIns: 'entry'[​](index.html#usebuiltins-entry)
信息
**优点**：全局彻底 polyfill，就算 `node_modules` 中的依赖存在不兼容的代码，也能成功运行。
**缺点**：可能会引入冗余代码、影响全局变量。
当传入 `'entry'` 时，会把 `@babel/preset-env` 的 [useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins) 选项设为 `'entry'`、[corejs](https://babeljs.io/docs/en/babel-preset-env#corejs) 选项设为 `'3'`。
开发者需要在入口文件 `app.js` 中引入 `core-js`：
src/app.js
```js
import 'core-js'
```

Babel 会根据 [targets](../babel-config.html#targets)，引入对应的 `core-js` 依赖。例如上述代码会被编译为：
dist/app.js
```js
import 'core-js/modules/es.string.pad-start'
import 'core-js/modules/es.string.pad-end'
// ...
```

> 当然，因为这时 Taro 把
`> corejs
`> 设置为
`> '3'
`> ，所以可以使用
`> core-js@3
`**> 手动按需引入的能力
**> ，详情请见
[> 文档
](https://babeljs.io/docs/en/babel-preset-env#usebuiltins)> 。

#### useBuiltIns: 'usage'[​](index.html#usebuiltins-usage)
信息
**优点**：按需引入、不会影响全局变量。
**缺点**：默认不会处理 `node_modules` 中的依赖，需要手动配置 `babel-loader`。
当传入 `'usage'` 时，会把 `@babel/plugin-transform-runtime` 的 [corejs](https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs) 选项设为 `3`。
> 注意：传入
`> 'usage'
`> 时， Taro 没有使用
`> @babel/preset-env
`> 的
`> useBuiltIns: 'usage'
`> 而是使用了
`> @babel/plugin-transform-runtime
`> 的
`> corejs: 3
`> 。原因在于：一、两者同时设置时会产生冲突。二、后者相对于前者，不会影响全局变量。

#### useBuiltIns: false[​](index.html#usebuiltins-false)
当传入 `false` 时，会把 `@babel/preset-env` 的 [useBuiltIns](https://babeljs.io/docs/en/babel-preset-env#usebuiltins) 选项设为 `false`，此时不会引入 `core-js`。
### loose[​](index.html#loose)
**默认值**：`false`
同时是 `@babel/preset-env`、`@babel/plugin-proposal-class-properties` 的 `loose` 配置项。
### debug[​](index.html#debug)
**默认值**：`false`
`@babel/preset-env` 的 [debug](https://babeljs.io/docs/en/babel-preset-env#debug) 配置项。
### modules[​](index.html#modules)
**默认值**：`false`
`@babel/preset-env` 的 [modules](https://babeljs.io/docs/en/babel-preset-env#modules) 配置项。
### spec[​](index.html#spec)
`@babel/preset-env` 的 [spec](https://babeljs.io/docs/en/babel-preset-env#spec) 配置项。
### configPath[​](index.html#configpath)
`@babel/preset-env` 的 [configPath](https://babeljs.io/docs/en/babel-preset-env#configpath) 配置项。
### include[​](index.html#include)
`@babel/preset-env` 的 [include](https://babeljs.io/docs/en/babel-preset-env#include) 配置项。
### exclude[​](index.html#exclude)
`@babel/preset-env` 的 [exclude](https://babeljs.io/docs/en/babel-preset-env#exclude) 配置项。
### shippedProposals[​](index.html#shippedproposals)
`@babel/preset-env` 的 [shippedProposals](https://babeljs.io/docs/en/babel-preset-env#shippedproposals) 配置项。
### forceAllTransforms[​](index.html#forcealltransforms)
`@babel/preset-env` 的 [forceAllTransforms](https://babeljs.io/docs/en/babel-preset-env#forcealltransforms) 配置项。
### decoratorsBeforeExport[​](index.html#decoratorsbeforeexport)
`@babel/plugin-proposal-decorators` 的 [decoratorsBeforeExport](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#decoratorsbeforeexport) 配置项。
### decoratorsLegacy[​](index.html#decoratorslegacy)
**默认值**：`true`
`@babel/plugin-proposal-decorators` 的 [lagacy](https://babeljs.io/docs/en/babel-plugin-proposal-decorators#legacy) 配置项。
### absoluteRuntime[​](index.html#absoluteruntime)
**默认值**：开发者根目录 `node_modules` 中的 `@babel/plugin-transform-runtime` 的路径。
**类型**：`string`
`@babel/plugin-transform-runtime` 的 [absoluteRuntime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#absoluteruntime) 配置项。
### version[​](index.html#version)
**默认值**：开发者根目录 `node_modules` 中的 `@babel/plugin-transform-runtime` 的版本号。
**类型**：`string`
`@babel/plugin-transform-runtime` 的 [version](https://babeljs.io/docs/en/babel-plugin-transform-runtime#version) 配置项。
### dynamic-import-node[​](index.html#dynamic-import-node)
备注
可以去掉冗余代码，对于一些严格限制包体大小的场景（比如 PWA 等）有帮助，但这也会去掉页面和组件的懒加载，导致 app.js 过大。
> 注意：
**> h5
**> 平台默认关闭，其他平台默认开启，小程序默认是不支持动态加载的，可以通过
[> dynamic-import 插件
](https://github.com/JiyuShao/taro-dynamic-import-weapp/tree/master/packages/taro-plugin-dynamic-import-weapp)> 提供该能力。 :::

**类型**：`boolean`

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
