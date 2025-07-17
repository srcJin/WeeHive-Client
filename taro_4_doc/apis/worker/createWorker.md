# 创建一个 Worker 线程。目前限制最多只能创建一个 Worker，创建下一个 Worker 前请先调用 [Worker.terminate](index.html#terminate)
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/worker/wx.createWorker.html)
## 类型[​](createWorker.html#类型)
```tsx
(scriptPath: string) => Worker
```

## 参数[​](createWorker.html#参数)
参数类型说明scriptPath`string`worker 入口文件的**绝对路径**
## 示例代码[​](createWorker.html#示例代码)
```tsx
const worker = Taro.createWorker('workers/request/index.js') // 文件名指定 worker 的入口文件路径，绝对路径
 worker.onMessage(function (res) {
 console.log(res)
})
worker.postMessage({
 msg: 'hello worker'
})
worker.terminate()
```

- 
- 
-
