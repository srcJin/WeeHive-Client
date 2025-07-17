# 一直以来，在使用 Taro CLI 的 `taro init` 命令创建项目时，CLI 会提供若干内置模板给开发者选择。但是很多团队都有自己独特的业务场景，需要使用和维护的模板也不尽一致，因此 Taro 支持把项目模板打包成一个能力赋予给开发者。
`1.3.9` 对 CLI 的模板功能做了以下修改：

- CLI 只保留最基础的 `default` 模板，其它模板被移除。
- CLI 会从 CLI 全局配置中读取**模版源**配置项，然后从模板源拉取模板供开发者选择。
- 开发者可以通过修改**模板源**来使用自己的模板。
## 模板源[​](template.html#模板源)
模板源为 CLI 配置项的 **templateSource** 字段，可以使用 [taro config](GETTING-STARTED.html#cli-%E9%85%8D%E7%BD%AE) 命令对其进行操作。
### 默认模版源[​](template.html#默认模版源)
默认模板源为 [taro-project-templates](https://github.com/NervJS/taro-project-templates) 仓库，原本内置的模板都被抽离到此处。
### 配置模板源[​](template.html#配置模板源)
模板源支持两种格式，**git 模板源** 和 **url 模板源**。
#### git 模板源[​](template.html#git-模板源)

- GitHub - github:owner/name
- GitLab - gitlab:owner/name
- Direct - direct:url
```sh
# 初始化项目时可以使用 --clone 选项指定拉取远程模板时使用git clone
taro init --clone
```

#### url 模板源[​](template.html#url-模板源)
指向某 zip 包的 url。
## 编写模板[​](template.html#编写模板)
### 模板组织格式[​](template.html#模板组织格式)
模板目录组织支持两种，分别是**单模板模式**和**模板组模式**。
#### 单模板模式[​](template.html#单模板模式)
##### git[​](template.html#git)
仓库根目录存在 package.json。
模板名为仓库名。
##### zip 包[​](template.html#zip-包)
zip 包解压出单文件夹，文件夹根目录包含 package.json。
模板名为 zip 包解压出的文件夹名。
![template](https://storage.jd.com/cjj-test/QQ20190717-154634.png)
#### 模板组模式[​](template.html#模板组模式)
##### git[​](template.html#git-1)
如[默认模板源](https://github.com/NervJS/taro-project-templates)，仓库根目录下存放着若干模板。
模板名对应根目录下所有文件夹名。
##### zip 包[​](template.html#zip-包-1)
zip 包解压出单文件夹，文件夹内包含若干模板。
模板名对应文件夹内所有文件夹名。
![templates](https://storage.jd.com/cjj-test/QQ20190717-152451.png)
### 静态模板[​](template.html#静态模板)
静态模板表示不带逻辑的模板，CLI 会遍历整个模板文件夹，把文件一一拷贝到目标位置。
### 动态模板[​](template.html#动态模板)
很多情况下需要为模板加入一些逻辑，从而根据不同的环境生成不同的模板内容。
开发者可以在模板根目录加入 **template_creator.js** 文件，文件对外 exports 包含 handler 、 basePageFiles 与 compiler 字段的对象：
template_creator.js
```js
const path = require('path')

function normalizePath (path) {
 return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
}

function createWhenTs(err, params) {
 return params.typescript ? true : false
}
const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
 '/global.d.ts': createWhenTs,
 '/tsconfig.json': createWhenTs,
 '/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
 return {
 setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.jsx')),
 setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.jsx'))
 }
 },
 '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
 return {
 setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.css')),
 setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css'))
 }
 },
}

const basePageFiles = ['/src/pages/index/index.jsx', '/src/pages/index/index.css']

module.exports = {
 handler,
 basePageFiles,
 compiler: ['Webpack5', 'Webpack4', 'Wite']
}
```

#### 模板语言[​](template.html#模板语言)
请使用 [Handlebars](https://handlebarsjs.com/) 作为模板语言，各模板文件都将接收到全局模板参数。
##### 默认全局模板参数（模板中可直接使用的变量）[​](template.html#默认全局模板参数模板中可直接使用的变量)
变量类型说明projectNamestring项目名descriptionstring项目描述versionstringTaro CLI 版本datestring模板创建时间戳css'None' or 'Sass' or 'Stylus' or 'Less'样式预处理工具cssExtstring样式文件后缀typescriptboolean是否使用 TSpageNamestring`taro create` 时传入的页面名称，默认 'index'templatestring模板名称framework'React' or 'Preact' or 'Vue' or 'Vue3'框架名称compiler'Webpack4' or 'Webpack5' or 'Vite'编译模式名称
##### 例子[​](template.html#例子)
```handlebars
import { defineConfig{{#if typescript }}, type UserConfigExport{{/if}} } from '@tarojs/cli'
{{#if typescript }}import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'{{/if}}
```

#### handler 字段[​](template.html#handler-字段)
handler 用于控制是否生成某文件，或给文件传入特定参数。
##### handler: object[​](template.html#handler-object)
属性类型value文件路径function处理函数
> 文件路径以 “/” 开头，代表模板文件夹根目录

##### 处理函数[​](template.html#处理函数)
params: object
信息
`params.pageDir` Taro v4.0.0+ 开始支持
`params.subPkg` Taro v4.0.0+ 开始支持
属性类型说明projectNamestring项目名descriptionstring项目描述versionstringTaro CLI 版本datestring模板创建时间戳css'none' or 'sass' or 'stylus' or 'less'样式预处理工具typescriptboolean是否使用 TSpageNamestring页面名称pageDirstring页面路径（相对于「页面目录」的相对路径） taro create 时 --dir 传入的值subPkgstring分包页面路径（相对于「src目录」的相对路径） taro create 时 --subpkg 传入的值templatestring模板名称templatePathstring模板路径projectPathstring目标路径period'createApp' or 'createPage'`taro init` 创建项目或 `taro create` 创建页面
return: boolean/object
信息
`object.setSubPkgName` Taro v4.0.0+ 开始支持
返回值说明
取值说明true创建文件false不创建文件object创建文件，返回的 object 的字段会被合并到全局模板参数中。
若返回值为 object，其中某些属性有特殊作用：
属性类型说明setPageNamestring将替换当前文件的输出路径changeExtboolean是否自动替换文件后缀
##### 例子[​](template.html#例子-1)
当用户选择了使用 typescript 时，才生成 **global.d.ts** 和 **tsconfig.json** 文件。
template_creator.js
```js
function createWhenTs(err, params) {
 return params.typescript ? true : false
}

const handler = {
 '/global.d.ts': createWhenTs,
 '/tsconfig.json': createWhenTs,
}

module.exports = { handler }
```

#### basePageFiles 字段[​](template.html#basepagefiles-字段)
basePageFiles 告诉 CLI，当用户使用 `taro create` 命令创建页面时，创建以下文件。
##### 例子[​](template.html#例子-2)
结合 handler 字段，创建新页面。
当用户使用命令 `taro create --page=detail` 时，会创建 **/src/pages/detail/detail.jsx** 与 **/src/pages/detail/detail.css** 两个文件。
template_creator.js
```js
const path = require('path')

function normalizePath (path) {
 return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
}

const handler = {
 '/src/pages/index/index.jsx' (err, { pageName = '', pageDir = '', subPkg = '' }) {
 return {
 setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.jsx')),
 setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.jsx'))
 }
 },
 '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
 return {
 setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.css')),
 setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css'))
 }
 },
}

const basePageFiles = ['/src/pages/index/index.jsx', '/src/pages/index/index.css']

module.exports = {
 handler,
 basePageFiles,
}
```

### compiler 字段[​](template.html#compiler-字段)
信息
Taro v4.0.0+ 开始支持
compiler 告诉 cli 当前模版支持的编译器类型，该值是一个 `string[]`，目前 taro 支持的编译器类型有 `Webpack4、Webpack5、Vite`

- 

- 
- 

- 

- 
- 
- 
-
