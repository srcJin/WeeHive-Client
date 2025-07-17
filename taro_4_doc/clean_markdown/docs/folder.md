# ## 项目目录结构[​](folder.html#项目目录结构)
```text
├── dist 编译结果目录
|
├── config 项目编译配置目录
| ├── index.js 默认配置
| ├── dev.js 开发环境配置
| └── prod.js 生产环境配置
|
├── src 源码目录
| ├── pages 页面文件目录
| | └── index index 页面目录
| | ├── index.js index 页面逻辑
| | ├── index.css index 页面样式
| | └── index.config.js index 页面配置
| |
| ├── app.js 项目入口文件
| ├── app.css 项目总通用样式
| └── app.config.js 项目入口配置
|
├── project.config.json 微信小程序项目配置 project.config.json
├── project.tt.json 抖音小程序项目配置 project.tt.json
├── project.swan.json 百度小程序项目配置 project.swan.json
├── project.qq.json QQ 小程序项目配置 project.qq.json
|
├── babel.config.js Babel 配置
├── tsconfig.json TypeScript 配置
├── .eslintrc ESLint 配置
|
└── package.json
```

## 编译配置[​](folder.html#编译配置)
```text
└── config 项目编译配置目录
 ├── index.js 默认配置
 ├── dev.js 开发环境配置
 └── prod.js 生产环境配置
```

用于配置 Taro 项目的编译行为、修改 Webpack 配置等，详情请参考[编译配置](config.html)和[编译配置详情](config-detail.html)。
## 源码组织[​](folder.html#源码组织)
和小程序规范一样，Taro 包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。
### app[​](folder.html#app)
```text
└── src 源码目录
 ├── app.js 项目入口文件
 ├── app.css 项目总通用样式
 └── app.config.js 项目入口配置
```

小程序的主体由下面三个文件组成：
文件必须作用app.js是小程序入口逻辑app.css否小程序全局样式app.config.js是小程序全局配置
代码示例请根据你选择的框架进行查看：[React](react-overall.html), [Preact](preact.html), [Vue](vue-overall.html), [Vue3](vue3.html)。
#### 1. 小程序全局配置[​](folder.html#1-小程序全局配置)
`app.config.js` 对应小程序规范的全局配置文件 `app.json`，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的全局配置**为规范。详情请参考[全局配置](app-config.html)。
#### 2. 小程序全局样式[​](folder.html#2-小程序全局样式)
小程序全局样式文件可以通过 ES6 规范的 `import` 进行引入。
app.js
```js
import './app.css'
```

### page[​](folder.html#page)
```text
└── src 源码目录
 └── pages 页面文件目录
 └── index index 页面目录
 ├── index.js index 页面逻辑
 ├── index.css index 页面样式
 └── index.config.js index 页面配置
```

一个小程序页面由三个文件组成，如下：
文件必须作用page.js是页面入口逻辑page.css否页面样式page.config.js否页面配置
#### 1. 页面配置[​](folder.html#1-页面配置)
`page.config.js` 对应小程序规范的页面配置文件 `page.json`，优势在于它是 JS 文件可以编写逻辑。配置以**微信小程序的页面配置**为规范。详情请参考[页面配置](page-config.html)。
#### 2. 页面样式[​](folder.html#2-页面样式)
页面的样式文件可以通过 ES6 规范的 `import` 进行引入。
pages/index/index.js
```js
import './index.css'
```

#### 3. 页面路由[​](folder.html#3-页面路由)
页面路由与小程序规范一致，需要在小程序全局配置 `app.config.js` 中进行配置。
## 项目配置[​](folder.html#项目配置)
```text
└──project.config.json 微信小程序项目配置 project.config.json
```

各类小程序平台均有自己的项目配置文件，Taro 支持对它们进行适配，详情请参考[项目配置](project-config.html)。
## Babel 配置[​](folder.html#babel-配置)
```text
└── babel.config.js Babel 配置
```

请参考 [Babel 配置](babel-config.html)
## ESLint 配置[​](folder.html#eslint-配置)
```text
└── .eslintrc ESLint 配置
```

ESLint 配置请参考 [Github](https://github.com/NervJS/taro/tree/next/packages/eslint-config-taro)

- 
- 
- 

- 
- 

- 
- 
-
