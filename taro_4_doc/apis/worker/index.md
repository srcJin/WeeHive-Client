# ## 方法[​](index.html#方法)
### onMessage[​](index.html#onmessage)
监听主线程/Worker 线程向当前线程发送的消息的事件。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onMessage.html)
```tsx
(callback: OnMessageCallback) => void
```
参数类型说明callback`OnMessageCallback`主线程/Worker 线程向当前线程发送的消息的事件的回调函数
### onProcessKilled[​](index.html#onprocesskilled)
监听 worker 线程被系统回收事件（当 iOS 系统资源紧张时，worker 线程存在被系统回收的可能，开发者可监听此事件并重新创建一个 worker）
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.onProcessKilled.html)
```tsx
(callback: OnMessageCallback) => void
```
参数类型说明callback`OnMessageCallback`worker 线程被系统回收事件的回调函数
### postMessage[​](index.html#postmessage)
向主线程/Worker 线程发送的消息。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.postMessage.html)
```tsx
(message: TaroGeneral.IAnyObject) => void
```
参数类型说明message`TaroGeneral.IAnyObject`需要发送的消息，必须是一个可序列化的 JavaScript key-value 形式的对象。
#### 示例代码[​](index.html#示例代码)
worker 线程中
```tsx
worker.postMessage({
 msg: 'hello from worker'
})
```

主线程中
```tsx
const worker = Taro.createWorker('workers/request/index.js')
worker.postMessage({
 msg: 'hello from main'
})
```

### terminate[​](index.html#terminate)
结束当前 Worker 线程。仅限在主线程 worker 对象上调用。
支持情况：!!!!
[> 参考文档
](https://developers.weixin.qq.com/miniprogram/dev/api/worker/Worker.terminate.html)
```tsx
() => void
```

## 参数[​](index.html#参数)
### OnMessageCallback[​](index.html#onmessagecallback)
```tsx
(result: OnMessageCallbackResult) => void
```
参数类型result`OnMessageCallbackResult`
### OnMessageCallbackResult[​](index.html#onmessagecallbackresult)
参数类型说明message`TaroGeneral.IAnyObject`主线程/Worker 线程向当前线程发送的消息
## API 支持度[​](index.html#api-支持度)
API微信小程序H5React NativeHarmonyWorker.onMessage✔️Worker.onProcessKilled✔️Worker.postMessage✔️Worker.terminate✔️
- 

- 
- 
- 
- 

- 

- 
- 

-
