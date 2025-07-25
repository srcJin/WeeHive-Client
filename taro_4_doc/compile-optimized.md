# Taro 使用 Webpack 进行打包，当工程越来越庞大时，会出现打包时间过长等问题。另外，小程序严格的体积要求、不支持热更新等问题也对大型应用的工程化流程提出了非常大的优化挑战。
## 优化编译速度[​](compile-optimized.html#优化编译速度)
**缓存**与**并行**是进行性能优化的两个重要切入角度。智行小程序团队借助 `cache-loader`、`thread-loader` 开发了 [taro-plugin-compiler-optimization](treasures.html#%E6%8F%92%E4%BB%B6) 插件让 Taro 项目的编译时长减少为原来的三分之一。
> 详情请阅读文章
[> 《编写插件，将 Taro 编译打包耗时缩短至三分之一》
](https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ)> 。

#### 用法[​](compile-optimized.html#用法)
安装依赖
```shell
npm install --save-dev thread-loader cache-loader taro-plugin-compiler-optimization
```
使用插件
```js
// config/index.js
config = {
 // ...
 plugins: ['taro-plugin-compiler-optimization'],
}
```

#### 效果展示[​](compile-optimized.html#效果展示)
优化前 **3m9s**，优化后 **56.8s**，将耗时缩短至三分之一。
优化前耗时：
![优化前](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/before.PNG)
优化后耗时：
![优化后](https://gitee.com/canntyield/cand_md_image/raw/master/2021_10/after.PNG)
## 解决包体积过大无法进行预览的问题[​](compile-optimized.html#解决包体积过大无法进行预览的问题)
智行小程序团队通过在开发环境下配置压缩指定文件，解决了小程序端包体积过大无法进行预览的问题。详情请阅读文章[《编写插件，将 Taro 编译打包耗时缩短至三分之一》](https://mp.weixin.qq.com/s/Z79QhAlP8tBQn3mXQ11byQ)。
## 通过 webpackChain 配置解决开发环境下小程序包体积过大无法进行预览上传的问题(不影响 devtools 的使用)[​](compile-optimized.html#通过-webpackchain-配置解决开发环境下小程序包体积过大无法进行预览上传的问题不影响-devtools-的使用)
```js
// config/dev.js
module.exports = {
 mini: {
 webpackChain: (chain, webpack) => {
 chain.merge({
 plugin: {
 install: {
 plugin: require('terser-webpack-plugin'),
 args: [
 {
 terserOptions: {
 compress: true, // 默认使用terser压缩
 // mangle: false,
 keep_classnames: true, // 不改变class名称
 keep_fnames: true, // 不改变函数名称
 },
 },
 ],
 },
 },
 })
 },
 },
}
```

- 
- 
-
