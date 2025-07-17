# Taro v4.0.0-beta.36+ 开始支持 
// todo 具体版本待定 随着鸿蒙系统的日渐完善，鸿蒙与 React Native 进行合作，React Native 会推出对鸿蒙的适配。
## 配置鸿蒙环境[​](react-native-harmony.html#配置鸿蒙环境)
### 1.安装、配置 DevEco Studio[​](react-native-harmony.html#1安装配置-deveco-studio)
（1）登录 [HarmonysOS 应用开发门户](https://developer.harmonyos.com/cn/home)，点击右上角注册按钮，注册开发者帐号。
（2）进入 [HUAWEI DevEco Studio 套件货架中心](https://developer.harmonyos.com/deveco-developer-suite/)，申请白名单，由于目前最新版本的 OpenHarmony SDK 和 IDE 以及 React Native 需要的 npm 包 和 SDK 仍未对外开发，因此个人开发者若想尝鲜，需要先申请白名单成为合作伙伴后才能继续进行下面的步骤。
（3）白名单申请通过后，进入货架下载开发套件具体版本请查看**软件要求**。
（4）下载完成后，打开 IDE 安装包进行安装，安装成功后启动 DevEco Studio，根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)解压套件里附带的 SDK 压缩包，并根据[引导](https://developer.harmonyos.com/cn/docs/documentation/doc-guides-V4/sdk-prepar-0000001573170041-V4)在 IDE 中配置好 SDK 的使用路径。
### 2.软件要求[​](react-native-harmony.html#2软件要求)
(1) IDE 版本: 4.1.3.400
(2) SDK 版本: HarmonyOS S NEXT Developer Preview1
(3) Node.js 版本：V18.14.1（可使用 DevEco Studio 安装的 Node.js）
## 使用 Taro 开发鸿蒙 RN[​](react-native-harmony.html#使用-taro-开发鸿蒙-rn)
### 1. JS 工程[​](react-native-harmony.html#1-js-工程)
#### 1.1 通过 CLI 创建 JS 工程[​](react-native-harmony.html#11-通过-cli-创建-js-工程)
```bash
npx @tarojs/cli@beta init
```

#### 1.2 模版选择[​](react-native-harmony.html#12-模版选择)
选择**react-native-harmony**
#### 1.3 手动修改代码[​](react-native-harmony.html#13-手动修改代码)
##### 1.3.1 添加 harmony 依赖[​](react-native-harmony.html#131-添加-harmony-依赖)
JS 工程项目同级需要 **react-native-harmony** 、**react-native-harmony-cli** 两个目录（由于目前鸿蒙暂未开源，需跟根据环境配置所述申请白名单，下载对对应的开发套件）
##### 1.3.2 修改 metro.config.js[​](react-native-harmony.html#132-修改-metroconfigjs)
本修改只针对**pnpm** 包管理的开发者,对于使用**npm**、**yarn**的可发这可忽略
将 metro.config.js 中 fs.lstatSync 修改成 fs.statSync
```bash
/**node_modules/react-native-harmony/metro.config.js**/

function hasNodeModulePathHarmonyCode(nodeModulePath) {
 if (!fs.lstatSync(nodeModulePath).isDirectory()) return false;
 const nodeModuleContentNames = fs.readdirSync(nodeModulePath);
}
```

#### 1.4 运行 JS 工程[​](react-native-harmony.html#14-运行-js-工程)
```bash
 pnpm start --reset-cache
```

#### 1.5 检查 bundle server 是否正常[​](react-native-harmony.html#15-检查-bundle-server-是否正常)
可以通过在浏览器中访问 [http://localhost:8081/index.bundle?platform=harmony](http://localhost:8081/index.bundle?platform=harmony) 检查 bundle server 是否正常
### 2. 原生工程[​](react-native-harmony.html#2-原生工程)
#### 2.1 创建工程[​](react-native-harmony.html#21-创建工程)
根据**《ReactNative for OpenHarmony 开发使用指导》** 新建鸿蒙工程
#### 2.2 安装第三方依赖[​](react-native-harmony.html#22-安装第三方依赖)
包名地址@react-native-async-storage/async-storage[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-async-storage-async-storage](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-async-storage-async-storage)@react-native-camera-roll/camera-roll[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-cameraroll](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-cameraroll)@react-native-clipboard/clipboard[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-clipboard-clipboard](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-clipboard-clipboard)@react-native-community/geolocation[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-geolocation](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-geolocation)@react-native-community/netinfo[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-netinfo](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-netinfo)@react-native-community/slider[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-slider](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-community-slider)react-native-gesture-handler[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-gesture-handler](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-gesture-handler)react-native-pager-view[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-pager-view](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-pager-view)react-native-safe-area-context[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-safe-area-context](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-safe-area-context)react-native-screens[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-screens](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-screens)react-native-webview[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-webview](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-webview)react-native-svg[https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-svg](https://react-native-oh-library.gitee.io/usage-docs/#/zh-cn/react-native-svg)
更多第三库的安装请参考 [React Native OpenHarmony](https://react-native-oh-library.gitee.io/usage-docs/#/)
#### 2.3 连接手机或模拟器[​](react-native-harmony.html#23-连接手机或模拟器)
启动手机模拟器后如果没有执行 bundle 加载 需执行一下命令进行端口映射
```bash
hdc rport tcp:8081 tcp:8081
```

#### 2.4 修改 moduleName[​](react-native-harmony.html#24-修改-modulename)
原生工程中使用的 moduleName 需要与 config 中的 rn.appName 保持一致，如'taroDemo'
```bash
private moduleName = 'taroDemo'
```

## 常见问题[​](react-native-harmony.html#常见问题)
### 1.暂不支持的 api 和组件[​](react-native-harmony.html#1暂不支持的-api-和组件)
由于**taro reactnative** 的部分**api** 和**组件**依赖了原生的支持(主要集中在 expo 类型的依赖),目前鸿蒙暂时没有提供支持，所以使用上会有报错
#### 1.1 组件[​](react-native-harmony.html#11-组件)
组件名称组件描述Video视频组件Camera拍摄组件
#### 1.2 api[​](react-native-harmony.html#12-api)
api 名称api 描述getSetting获取设置openSetting打开设置authorize用户授权saveImageToPhotosAlbum保存图片到系统相册downLoadFIle下载chooseVideo选择视频chooseMedia选择媒体类型createCameraContext创建 camera 上下文getScreenBrightness获取屏幕亮度setScreenBrightness设置屏幕亮度onAccelerometerChange监听加速度数据offAccelerometerChange取消监听加速度数据事件startAccelerometer开始监听加速度数据onDeviceMotionChange监听设备方向变化事件offDeviceMotionChange取消监听设备方向变化事件startDeviceMotionListening开始监听设备方向的变化stopDeviceMotionListening停止监听设备方向的变化onGyroscopeChange监听陀螺仪数据变化事件offGyroscopeChange取消监听陀螺仪数据变化事件startGyroscope开始监听陀螺仪数据stopGyroscope停止监听陀螺仪数据scanCode调起客户端扫码界面vibrateShort使手机发生较短时间的振动vibrateLong使手机发生较长时间的振动
### 2.App 启动后没有加载 bundle[​](react-native-harmony.html#2app-启动后没有加载-bundle)
端口映射没有成功
```text
hdc rport tcp:8081 tcp:8081
```

### 3.第三方库未生效[​](react-native-harmony.html#3第三方库未生效)
会看到信息：**No harmony-specific third-party packages have been detected pnpm install** 等操作，导致 node_modules 修改被覆盖。查看**node_modules/react-native-harmony/metro.config.js****lstatSync** 是否改成了**statSync**。

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
