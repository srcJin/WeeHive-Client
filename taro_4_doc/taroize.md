# Taro 可以把**原生微信小程序应用转换为 Taro 项目**，从而使项目成为多端应用。
转换后的代码可读性高，能够继续使用 **React**（将来支持转换为 **Vue**）进行二次开发。
### 反向转换步骤[​](taroize.html#反向转换步骤)

- 在微信小程序项目的根目录中运行 `npx @tarojs/cli-convertor` 命令进行转换：
```bash
# 转换后的代码保存在根目录下的 `taroConvert` 文件夹下
$ npx @tarojs/cli-convertor
```

- 进入 `taroConvert` 目录，安装依赖：
```bash
$ cd taroConvert
$ npm install
```

- 运行 `build` 命令，把项目编译到任意平台：
```bash
$ taro build --type [platform]
```

-
