# ## 安装[​](GETTING-STARTED.html#安装)
Taro 项目基于 node，请确保已具备较新的 node 环境（>=16.20.0），推荐使用 node 版本管理工具 [nvm](https://github.com/creationix/nvm) 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。
### CLI 工具安装[​](GETTING-STARTED.html#cli-工具安装)
首先，你需要使用 npm 或者 yarn 全局安装 `@tarojs/cli`，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b):

- npm
- yarn
- pnpm
```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
bash
# 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
bash
# 使用 pnpm 安装 CLI
$ pnpm install -g @tarojs/cli
```
请注意
由于 Taro 部分能力使用 Rust 开发，在 Windows 上，请确保安装了 Microsoft Visual C++ Redistributable。请查看：[https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)
#### 查看 Taro 全部版本信息[​](GETTING-STARTED.html#查看-taro-全部版本信息)
可以使用 `npm info` 查看 Taro 版本信息，在这里你可以看到当前最新版本
```bash
npm info @tarojs/cli
```

![npm info @tarojs/cli screenshot](https://img13.360buyimg.com/ling/jfs/t1/144770/7/20011/138415/5fe40491Ed0883578/11236962a3e672db.png)
由图第 1 行可知最新版本，如果你用的是 beta 或者 canary 你可以通过 `dist-tags:` 下面那行看到最新的版本。
## 项目初始化[​](GETTING-STARTED.html#项目初始化)
使用命令创建模板项目：
```bash
$ taro init myApp
```

npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目：
```bash
$ npx @tarojs/cli init myApp
```

![taro init myApp command screenshot](https://img30.360buyimg.com/ling/jfs/t1/121270/15/15083/672721/5f89357dEf36b7fe2/ecb98df1436cd3d5.jpg)
在创建完项目之后，Taro 会默认开始安装项目所需要的依赖，安装使用的工具按照 yarn > cnpm > npm 顺序进行检测。一般来说，依赖安装会比较顺利，但某些情况下可能会安装失败，这时候你可以在项目目录下自己使用安装命令进行安装：

- npm
- yarn
- pnpm
```bash
# 进入项目根目录
$ cd myApp

# 使用 npm 安装依赖
$ npm install
bash
# 进入项目根目录
$ cd myApp

# 使用 yarn 安装依赖
$ yarn
bash
# 进入项目根目录
$ cd myApp

# 使用 pnpm 安装依赖
$ pnpm install
```

## 编译运行[​](GETTING-STARTED.html#编译运行)
使用 Taro 的 `build` 命令可以把 Taro 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
Taro 编译分为 `dev` 和 `build` 模式：

- **dev 模式（增加 --watch 参数）** 将会监听文件修改。
- **build 模式（去掉 --watch 参数）** 将不会监听文件修改，并会对代码进行压缩打包。
- dev 模式生成的文件较大，设置环境变量 `NODE_ENV` 为 `production` 可以开启压缩，方便预览，但编译速度会下降。
### 微信小程序[​](GETTING-STARTED.html#微信小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令)
```bash
# pnpm
$ pnpm dev:weapp
$ pnpm build:weapp

# yarn
$ yarn dev:weapp
$ yarn build:weapp

# npm script
$ npm run dev:weapp
$ npm run build:weapp

# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp

# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type weapp --watch # CMD
$ NODE_ENV=production taro build --type weapp --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具)
下载并打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，然后选择**项目根目录**进行预览。
需要注意开发者工具的项目设置：

- 需要设置关闭 ES6 转 ES5 功能，开启可能报错
- 需要设置关闭上传代码时样式自动补全，开启可能报错
- 需要设置关闭代码压缩上传，开启可能报错
### 百度小程序[​](GETTING-STARTED.html#百度小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令-1)
```bash
# pnpm
$ pnpm dev:swan
$ pnpm build:swan

# yarn
$ yarn dev:swan
$ yarn build:swan

# npm script
$ npm run dev:swan
$ npm run build:swan

# 仅限全局安装
$ taro build --type swan --watch
$ taro build --type swan

# npx 用户也可以使用
$ npx taro build --type swan --watch
$ npx taro build --type swan

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type swan --watch # CMD
$ NODE_ENV=production taro build --type swan --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-1)
下载并打开[百度开发者工具](https://smartprogram.baidu.com/docs/develop/devtools/history)，并确保已经设置了小程序项目配置文件 [project.swan.json](project-config.html)。然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
需要注意开发者工具的项目设置：

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
### 支付宝小程序[​](GETTING-STARTED.html#支付宝小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令-2)
```bash
# pnpm
$ pnpm dev:alipay
$ pnpm build:alipay

# yarn
$ yarn dev:alipay
$ yarn build:alipay

# npm script
$ npm run dev:alipay
$ npm run build:alipay

# 仅限全局安装
$ taro build --type alipay --watch
$ taro build --type alipay

# npx 用户也可以使用
$ npx taro build --type alipay --watch
$ npx taro build --type alipay

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type alipay --watch # CMD
$ NODE_ENV=production taro build --type alipay --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-2)
下载并打开[支付宝小程序开发者工具](https://opendocs.alipay.com/mini/ide/download)，然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
需要注意开发者工具的项目设置：

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
### 抖音小程序[​](GETTING-STARTED.html#抖音小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令-3)
```bash
# pnpm
$ pnpm dev:tt
$ pnpm build:tt

# yarn
$ yarn dev:tt
$ yarn build:tt

# npm script
$ npm run dev:tt
$ npm run build:tt

# 仅限全局安装
$ taro build --type tt --watch
$ taro build --type tt

# npx 用户也可以使用
$ npx taro build --type tt --watch
$ npx taro build --type tt

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type tt --watch # CMD
$ NODE_ENV=production taro build --type tt --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-3)
下载并打开[抖音小程序开发者工具](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/developer-instrument/download/developer-instrument-update-and-download)，并确保已经设置了小程序项目配置文件 [project.tt.json](project-config.html)。然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
需要注意开发者工具的项目设置：

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
### QQ 小程序[​](GETTING-STARTED.html#qq-小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令-4)
```bash
# pnpm
$ pnpm dev:qq
$ pnpm build:qq

# yarn
$ yarn dev:qq
$ yarn build:qq

# npm script
$ npm run dev:qq
$ npm run build:qq

# 仅限全局安装
$ taro build --type qq --watch
$ taro build --type qq

# npx 用户也可以使用
$ npx taro build --type qq --watch
$ npx taro build --type qq

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type qq --watch # CMD
$ NODE_ENV=production taro build --type qq --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-4)
下载并打开 [QQ 小程序开发者工具](https://q.qq.com/wiki/tools/devtool/)，然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
需要注意开发者工具的项目设置：

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
### 京东小程序[​](GETTING-STARTED.html#京东小程序)
#### 编译命令[​](GETTING-STARTED.html#编译命令-5)
```bash
# pnpm
$ pnpm dev:jd
$ pnpm build:jd

# yarn
$ yarn dev:jd
$ yarn build:jd

# npm script
$ npm run dev:jd
$ npm run build:jd

# 仅限全局安装
$ taro build --type jd --watch
$ taro build --type jd

# npx 用户也可以使用
$ npx taro build --type jd --watch
$ npx taro build --type jd

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type jd --watch # CMD
$ NODE_ENV=production taro build --type jd --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-5)
下载并打开[京东小程序开发者工具](https://mp-docs.jd.com/doc/dev/devtools/1591)，然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
需要注意开发者工具的项目设置：

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
#### 京东小程序相关阅读[​](GETTING-STARTED.html#京东小程序相关阅读)

- [《使用 Taro 快速开发京东小程序》](https://docs.taro.zone/blog/2020-04-27-taro-build-jd)
- [《京东小程序 Taro 开发对比原生开发测评》](https://docs.taro.zone/blog/2020-04-27-taro-vs-jd)
### 企业微信小程序[​](GETTING-STARTED.html#企业微信小程序)
备注
Taro v3.1+ 开始支持
使用 Taro 插件能支持编译企业微信小程序，插件文档请看 [Github](https://github.com/NervJS/taro-plugin-platform-weapp-qy)。
#### 安装插件[​](GETTING-STARTED.html#安装插件)
```bash
yarn add @tarojs/plugin-platform-weapp-qy
```

#### 配置插件[​](GETTING-STARTED.html#配置插件)
Taro 项目配置
```js
config = {
 // ...
 plugins: ['@tarojs/plugin-platform-weapp-qy'],
}
```

#### 编译命令[​](GETTING-STARTED.html#编译命令-6)
```bash
# pnpm
$ pnpm dev:qywx
$ pnpm build:qywx

# yarn
$ yarn dev:qywx
$ yarn build:qywx

# npm script
$ npm run dev:qywx
$ npm run build:qywx

# 仅限全局安装
$ taro build --type qywx --watch
$ taro build --type qywx

# npx 用户也可以使用
$ npx taro build --type qywx --watch
$ npx taro build --type qywx

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type qywx --watch # CMD
$ NODE_ENV=production taro build --type qywx --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-6)
同微信小程序。开发者工具的编译模式设置为企业微信。
### 钉钉小程序[​](GETTING-STARTED.html#钉钉小程序)
备注
Taro v3.1+ 开始支持
**Taro v3.3.8+**： 请使用 `@tarojs/plugin-platform-alipay-dd` 插件的 `~0.1.0` 版本
**Taro v3.1 & v3.2**： 请使用 `@tarojs/plugin-platform-alipay-dd` 插件的 `~0.0.5` 版本
使用 Taro 插件能支持编译钉钉小程序，插件文档请看 [Github](https://github.com/NervJS/taro-plugin-platform-alipay-dd)。
#### 安装插件[​](GETTING-STARTED.html#安装插件-1)
```bash
yarn add @tarojs/plugin-platform-alipay-dd
```

#### 配置插件[​](GETTING-STARTED.html#配置插件-1)
Taro 项目配置
```js
config = {
 // ...
 plugins: ['@tarojs/plugin-platform-alipay-dd'],
}
```

#### 编译命令[​](GETTING-STARTED.html#编译命令-7)
```bash
# pnpm
$ pnpm dev:dd
$ pnpm build:dd

# yarn
$ yarn dev:dd
$ yarn build:dd

# npm script
$ npm run dev:dd
$ npm run build:dd

# 仅限全局安装
$ taro build --type dd --watch
$ taro build --type dd

# npx 用户也可以使用
$ npx taro build --type dd --watch
$ npx taro build --type dd

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type dd --watch # CMD
$ NODE_ENV=production taro build --type dd --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-7)
同支付宝小程序。开发者工具的编译模式设置为钉钉。
### 支付宝 IOT 小程序[​](GETTING-STARTED.html#支付宝-iot-小程序)
备注
Taro v3.1+ 开始支持
使用 Taro 插件能支持编译支付宝 IOT 小程序，插件文档请看 [Github](https://github.com/NervJS/taro-plugin-platform-alipay-iot)。
#### 安装插件[​](GETTING-STARTED.html#安装插件-2)
```bash
yarn add @tarojs/plugin-platform-alipay-iot
```

#### 配置插件[​](GETTING-STARTED.html#配置插件-2)
Taro 项目配置
```js
config = {
 // ...
 plugins: ['@tarojs/plugin-platform-alipay-iot'],
}
```

#### 编译命令[​](GETTING-STARTED.html#编译命令-8)
```bash
# pnpm
$ pnpm dev:iot
$ pnpm build:iot

# yarn
$ yarn dev:iot
$ yarn build:iot

# npm script
$ npm run dev:iot
$ npm run build:iot

# 仅限全局安装
$ taro build --type iot --watch
$ taro build --type iot

# npx 用户也可以使用
$ npx taro build --type iot --watch
$ npx taro build --type iot

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type iot --watch # CMD
$ NODE_ENV=production taro build --type iot --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-8)
同支付宝小程序。开发者工具的编译模式设置为 IOT 小程序。
### 飞书小程序[​](GETTING-STARTED.html#飞书小程序)
备注
Taro v3.1+ 开始支持
使用 Taro 插件能支持编译[飞书小程序](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro)，插件文档请看 [Github](https://github.com/NervJS/taro-plugin-platform-lark)。
#### 安装插件[​](GETTING-STARTED.html#安装插件-3)
```bash
yarn add @tarojs/plugin-platform-lark
```

#### 配置插件[​](GETTING-STARTED.html#配置插件-3)
Taro 项目配置
```js
config = {
 // ...
 plugins: ['@tarojs/plugin-platform-lark'],
}
```

#### 编译命令[​](GETTING-STARTED.html#编译命令-9)
```bash
# pnpm
$ pnpm dev:lark
$ pnpm build:lark

# yarn
$ yarn dev:lark
$ yarn build:lark

# npm script
$ npm run dev:lark
$ npm run build:lark

# 仅限全局安装
$ taro build --type lark --watch
$ taro build --type lark

# npx 用户也可以使用
$ npx taro build --type lark --watch
$ npx taro build --type lark

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type lark --watch # CMD
$ NODE_ENV=production taro build --type lark --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-9)
[飞书小程序](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN?from=taro)能运行在飞书客户端上，且一套代码多端运行(包括 PC 端和移动端)。你需要下载并打开[飞书小程序开发者工具](https://open.feishu.cn/document/tools-and-resources/development-tools/overview-of-ide)，并确保已经设置了小程序项目配置文件。然后选择项目根目录下 `dist` 目录进行预览。
需要注意开发者工具的项目配置

- 需要关闭 ES6 转 ES5 功能，开启可能报错
- 需要关闭上传代码时样式自动补全，开启可能报错
- 需要关闭代码压缩上传，开启可能报错
### 快手小程序[​](GETTING-STARTED.html#快手小程序)
使用 Taro 插件能支持编译快手小程序，插件文档请看 [Github](https://github.com/NervJS/taro-plugin-platform-kwai)。
备注
Taro v3.1+ 开始支持
**Taro v3.3+**： 请使用 [taro-plugin-platform-kwai](https://github.com/NervJS/taro-plugin-platform-kwai) 插件的 `1.0` 或以上版本
**Taro v3.2**： 请使用 [taro-plugin-platform-ks](https://github.com/vadxq/taro-plugin-platform-ks) 插件的 `1.2.x` 版本
**Taro v3.1**： 请使用 [taro-plugin-platform-ks](https://github.com/vadxq/taro-plugin-platform-ks) 插件的 `1.0.x` 版本
#### 安装插件[​](GETTING-STARTED.html#安装插件-4)
```bash
yarn add @tarojs/plugin-platform-kwai
```

#### 配置插件[​](GETTING-STARTED.html#配置插件-4)
Taro 项目配置
```js
config = {
 // ...
 plugins: ['@tarojs/plugin-platform-kwai'],
}
```

#### 编译命令[​](GETTING-STARTED.html#编译命令-10)
```bash
# pnpm
$ pnpm dev:kwai
$ pnpm build:kwai

# yarn
$ yarn dev:kwai
$ yarn build:kwai

# npm script
$ npm run dev:kwai
$ npm run build:kwai

# 仅限全局安装
$ taro build --type kwai --watch
$ taro build --type kwai

# npx 用户也可以使用
$ npx taro build --type kwai --watch
$ npx taro build --type kwai

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type kwai --watch # CMD
$ NODE_ENV=production taro build --type kwai --watch # Bash
```

#### 小程序开发者工具[​](GETTING-STARTED.html#小程序开发者工具-10)
下载并打开[快手小程序开发者工具](https://mp.kuaishou.com/docs/develop/developerTools/downloadPath.html)，然后选择项目根目录下 `dist` 目录（根目录 `config` 中的 `outputRoot` 设置的目录）进行预览。
### H5[​](GETTING-STARTED.html#h5)
#### 编译命令[​](GETTING-STARTED.html#编译命令-11)
```bash
# pnpm
$ pnpm dev:h5
$ pnpm build:h5

# yarn
$ yarn dev:h5
$ yarn build:h5

# npm script
$ npm run dev:h5
$ npm run build:h5

# 仅限全局安装
$ taro build --type h5 --watch
$ taro build --type h5

# npx 用户也可以使用
$ npx taro build --type h5 --watch
$ npx taro build --type h5
```

### React Native[​](GETTING-STARTED.html#react-native)
> Taro v3.2+ 开始支持

请参考 [React Native 端开发流程](react-native.html)
### Harmony-hybrid[​](GETTING-STARTED.html#harmony-hybrid)
> Taro v3.6.24+ 开始支持

#### 编译命令[​](GETTING-STARTED.html#编译命令-12)
```bash
# yarn
$ yarn dev:harmony-hybrid
$ yarn build:harmony-hybrid

# npm script
$ npm run dev:harmony-hybrid
$ npm run build:harmony-hybrid

# 仅限全局安装
$ taro build --type harmony-hybrid --watch
$ taro build --type harmony-hybrid

# npx 用户也可以使用
$ npx taro build --type harmony-hybrid --watch
$ npx taro build --type harmony-hybrid
```

#### DevEco Studio 鸿蒙应用开发工具[​](GETTING-STARTED.html#deveco-studio-鸿蒙应用开发工具)
下载并使用 DeEco Studio NEXT Developer Preview1（通过 [HarmonyOS NEXT 开发者预览版 Beta 招募](https://developer.huawei.com/consumer/cn/activityDetail/harmonyos-next-preview/) 申请获得）新建应用工程，并进行如下配置：

- 在 `oh-package.json5` 文件中配置 `dependencies`, 引入 `@hybrid/web-container` 模块。
- 在 `src/main/module.json5` 文件中增加权限配置，如：
```js
{
 requestPermissions: [
 {
 name: 'ohos.permission.INTERNET',
 },
 ]
}
```

- 把 Taro 项目目录下的 `dist` 目录的编译产物复制到鸿蒙应用的 `src/main/resources/rawfile` 目录下，编译运行鸿蒙应用进行开发调试。
### ASCF元服务[​](GETTING-STARTED.html#ascf元服务)
若需将 Taro 代码编译为 ASCF 元服务，需在编译命令中指定平台参数为 `ascf`，并确保满足以下条件： 

- 代码中需包含 ASCF 元服务编译条件：`"ascf"`（需在项目配置中声明）。 
- 配置文件 `project.ascf.json` 需存在于项目根目录。 
示例命令： 
```bash
taro build --type ascf

#### 编译命令

# pnpm
$ pnpm dev:ascf
$ pnpm build:ascf

# yarn
$ yarn dev:ascf
$ yarn build:ascf

# npm script
$ npm run dev:ascf
$ npm run build:ascf

# 仅限全局安装
$ taro build --type ascf --watch
$ taro build --type ascf

# npx 用户也可以使用
$ npx taro build --type ascf --watch
$ npx taro build --type ascf

# watch 同时开启压缩
$ set NODE_ENV=production && taro build --type ascf --watch # CMD
$ NODE_ENV=production taro build --type ascf --watch # Bash

```

开发者工具
工具准备： 下载并安装 鸿蒙开发者工具，确保已配置ASCF元服务开发环境。 导入项目： 打开鸿蒙开发者工具，选择 导入项目。 选择项目根目录下的 dist/ascf 目录（需确保已通过编译命令生成）。 配置校验： 确认项目中存在 project.ascf.json 文件（元服务专属配置）。 检查配置文件字段是否符合规范（如 minPlatformVersion、permissions 等）。 注意事项
在开发者工具中需设置：
关闭 ES6 转 ES5 功能（开启可能导致语法错误）。 关闭 上传代码时样式自动补全（开启可能引发样式异常）。 关闭 代码压缩上传（开启可能影响调试信息）。
格式说明
编译命令： 使用 --type ascf 指定平台类型，与其他小程序（如 --type weapp）格式统一。 支持 dev:ascf（开发模式）和 build:ascf（生产模式）。 开发者工具： 明确指向编译后的 dist/ascf 目录，与微信小程序的 dist 目录逻辑一致。 强调 project.ascf.json 为必需配置文件（类比 project.swan.json）。 注意事项： 与其他小程序保持完全一致的关闭选项，避免开发者混淆。
效果验证
执行编译命令后，检查 dist/ascf 目录是否包含以下文件： manifest.json（元服务描述文件） 页面代码及资源文件 在鸿蒙开发者工具中运行项目，确保： 页面渲染正常，无白屏或报错。 声明的权限（如定位、相机）可正常触发弹窗申请。
## 渐进式入门教程[​](GETTING-STARTED.html#渐进式入门教程)
我们提供了一个由浅入深的实战教程，请参考[《教程》](guide.html)。
## 常见问题[​](GETTING-STARTED.html#常见问题)
### 保持 CLI 的版本与各端依赖版本一致[​](GETTING-STARTED.html#保持-cli-的版本与各端依赖版本一致)
在使用 Taro 进行多端开发中，请保持 Taro CLI 的版本与你项目的依赖版本一致，否则可能会出现编译错误或者运行时错误。
如果发现不一致的情况可以使用 Taro 升级命令 taro update self [版本号] 和 taro update project [版本号]来分别将 CLI 和项目依赖升级到指定版本； 或者也可以手动安装相应版本 CLI，修改 package.json 依赖版本号，然后重装依赖来解决。
```bash
# 使用Taro 升级命令更新CLI版本到最新版本
$ taro update self
# 使用Taro 升级命令更新CLI版本到指定版本
$ taro update self [版本号]
# 使用Taro 升级命令将项目依赖升级到与@tarojs/cli一致的版本
$ taro update project
# 使用Taro 升级命令将项目依赖升级到指定版本
$ taro update project [版本号]
```

如果你所使用的 Taro CLI 版本为 3.0.9，而项目里使用的依赖版本为 3.0.10，则有可能会出现问题，这时请将你的 Taro CLI 版本更新至项目依赖版本号相同的版本，如果还是出现问题，请向我们提出 [Issue](https://nervjs.github.io/taro-issue-helper/)。
### Taro 多版本共存问题[​](GETTING-STARTED.html#taro-多版本共存问题)
很多开发者曾经使用 Taro 旧版本开发过项目，已经在全局安装了 Taro，但是想同时体验到 Taro 3，应该如何进行操作？
我们提供了两种思路：

- 如果是需要新创建 Taro 3 项目，可以使用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，通过安装不同 node 版本来安装不同版本的 Taro CLI，从而解决 Taro 多版本共存的问题
- 如果是部分已有项目需要升级到 Taro 3，可以在这些项目本地安装相应版本的 Taro CLI，这样通过 `yarn` 或者 `npm` 执行命令的话就会直接使用本地安装的 Taro CLI，安装方式 `yarn add @tarojs/cli`
### 回到某个版本[​](GETTING-STARTED.html#回到某个版本)
需要安装某个固定版本，或者回到某个版本，例如我们要安装 `1.3.9` ， 则如下：
```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli@1.3.9
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli@1.3.9
# OR 使用 pnpm 安装 CLI
$ pnpm add -g @tarojs/cli@1.3.9
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli@1.3.9
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
